import { Router, Response } from 'express';
import bcrypt from 'bcryptjs';
import { db, UserWithPassword } from '../db/database';
import { authenticateToken, requireRole, AuthRequest } from '../middleware/auth';

const router = Router();

// Get all users (Admin) or group students (Teacher)
router.get('/', authenticateToken, (req: AuthRequest, res: Response) => {
  const users = db.get('users');
  const safeUsers = users.map(({ passwordHash, ...user }) => user);

  if (req.user?.role === 'ADMIN') {
    return res.json(safeUsers);
  }

  if (req.user?.role === 'TEACHER') {
    // Return students assigned to teacher's groups
    const groups = db.get('groups').filter(g => g.teacherId === req.user?.id);
    const teacherStudentIds = groups.flatMap(g => g.studentIds);
    const filtered = safeUsers.filter(u => u.role === 'STUDENT' && teacherStudentIds.includes(u.id));
    return res.json(filtered);
  }

  return res.status(403).json({ error: 'Access denied' });
});

// Create User (Admin manually creates Students/Teachers)
router.post('/', authenticateToken, requireRole('ADMIN'), (req: AuthRequest, res: Response) => {
  const { username, password, fullName, role, level, groupId, status } = req.body;

  if (!username || !password || !fullName || !role) {
    return res.status(400).json({ error: 'Username, password, fullName, and role are required' });
  }

  const users = db.get('users');
  if (users.some(u => u.username.toLowerCase() === username.trim().toLowerCase())) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  const groups = db.get('groups');
  const group = groupId ? groups.find(g => g.id === groupId) : undefined;

  const newUser: UserWithPassword = {
    id: `u_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    username: username.trim(),
    passwordHash: bcrypt.hashSync(password, 8),
    fullName,
    role: role || 'STUDENT',
    status: status || 'ACTIVE',
    level: level || 'B1',
    groupId: groupId || undefined,
    groupName: group ? group.name : undefined,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);

  // If assigned to a group, add to group's studentIds
  if (groupId && group && role === 'STUDENT') {
    if (!group.studentIds.includes(newUser.id)) {
      group.studentIds.push(newUser.id);
      db.set('groups', groups);
    }
  }

  db.set('users', users);

  // Log activity
  const logs = db.get('activityLogs');
  logs.unshift({
    id: `act_${Date.now()}`,
    userId: req.user?.id || 'admin',
    userName: req.user?.fullName || 'Admin',
    role: 'ADMIN',
    action: 'CREATED_USER',
    details: `Created new ${role} account for ${fullName} (${username}).`,
    timestamp: new Date().toISOString()
  });
  db.set('activityLogs', logs);

  const { passwordHash, ...safeUser } = newUser;
  return res.status(201).json(safeUser);
});

// Update User (Admin or Self)
router.put('/:id', authenticateToken, (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { fullName, status, level, groupId, password } = req.body;

  if (req.user?.role !== 'ADMIN' && req.user?.id !== id) {
    return res.status(403).json({ error: 'Access denied' });
  }

  const users = db.get('users');
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (fullName) users[index].fullName = fullName;
  if (level) users[index].level = level;
  if (password && password.length >= 6) {
    users[index].passwordHash = bcrypt.hashSync(password, 8);
  }

  if (req.user?.role === 'ADMIN') {
    if (status) users[index].status = status;
    if (groupId !== undefined) {
      const groups = db.get('groups');
      // Remove from old group
      if (users[index].groupId) {
        const oldGrp = groups.find(g => g.id === users[index].groupId);
        if (oldGrp) {
          oldGrp.studentIds = oldGrp.studentIds.filter(sId => sId !== id);
        }
      }
      // Add to new group
      if (groupId) {
        const newGrp = groups.find(g => g.id === groupId);
        if (newGrp) {
          if (!newGrp.studentIds.includes(id)) {
            newGrp.studentIds.push(id);
          }
          users[index].groupName = newGrp.name;
        }
        users[index].groupId = groupId;
      } else {
        users[index].groupId = undefined;
        users[index].groupName = undefined;
      }
      db.set('groups', groups);
    }
  }

  db.set('users', users);

  const { passwordHash, ...safeUser } = users[index];
  return res.json(safeUser);
});

// Toggle User Status (Disable / Activate)
router.patch('/:id/toggle-status', authenticateToken, requireRole('ADMIN'), (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const users = db.get('users');
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (user.role === 'ADMIN') {
    return res.status(400).json({ error: 'Cannot disable administrator account' });
  }

  user.status = user.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
  db.set('users', users);

  const { passwordHash, ...safeUser } = user;
  return res.json(safeUser);
});

export default router;

import { Router, Response } from 'express';
import { db } from '../db/database';
import { authenticateToken, requireRole, AuthRequest } from '../middleware/auth';
import { Group } from '../types';

const router = Router();

// Get all groups
router.get('/', authenticateToken, (req: AuthRequest, res: Response) => {
  const groups = db.get('groups');
  const users = db.get('users');

  if (req.user?.role === 'ADMIN') {
    const formatted = groups.map(g => ({
      ...g,
      studentCount: g.studentIds.length,
      teacherName: users.find(u => u.id === g.teacherId)?.fullName || 'Unassigned'
    }));
    return res.json(formatted);
  }

  if (req.user?.role === 'TEACHER') {
    const teacherGroups = groups.filter(g => g.teacherId === req.user?.id);
    const formatted = teacherGroups.map(g => ({
      ...g,
      studentCount: g.studentIds.length,
      teacherName: req.user?.fullName
    }));
    return res.json(formatted);
  }

  // Student: return student's own group
  const studentGroup = groups.filter(g => g.studentIds.includes(req.user?.id || ''));
  return res.json(studentGroup);
});

// Create Group (Admin)
router.post('/', authenticateToken, requireRole('ADMIN'), (req: AuthRequest, res: Response) => {
  const { name, level, subject, teacherId, studentIds } = req.body;

  if (!name || !level) {
    return res.status(400).json({ error: 'Group name and level are required' });
  }

  const groups = db.get('groups');
  const users = db.get('users');

  const teacher = teacherId ? users.find(u => u.id === teacherId) : undefined;

  const newGroup: Group = {
    id: `grp_${Date.now()}`,
    name,
    level,
    subject: subject || `${level} English`,
    teacherId: teacherId || '',
    teacherName: teacher?.fullName,
    studentIds: Array.isArray(studentIds) ? studentIds : [],
    createdAt: new Date().toISOString()
  };

  groups.push(newGroup);
  db.set('groups', groups);

  // Update assigned students' groupId and groupName
  if (Array.isArray(studentIds) && studentIds.length > 0) {
    studentIds.forEach(sId => {
      const u = users.find(usr => usr.id === sId);
      if (u) {
        u.groupId = newGroup.id;
        u.groupName = newGroup.name;
      }
    });
    db.set('users', users);
  }

  return res.status(201).json(newGroup);
});

// Update Group (Admin)
router.put('/:id', authenticateToken, requireRole('ADMIN'), (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { name, level, subject, teacherId, studentIds } = req.body;

  const groups = db.get('groups');
  const index = groups.findIndex(g => g.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Group not found' });
  }

  const users = db.get('users');
  const teacher = teacherId ? users.find(u => u.id === teacherId) : undefined;

  if (name) groups[index].name = name;
  if (level) groups[index].level = level;
  if (subject) groups[index].subject = subject;
  if (teacherId !== undefined) {
    groups[index].teacherId = teacherId;
    groups[index].teacherName = teacher?.fullName;
  }

  if (Array.isArray(studentIds)) {
    groups[index].studentIds = studentIds;

    // Update students
    users.forEach(u => {
      if (studentIds.includes(u.id)) {
        u.groupId = id;
        u.groupName = groups[index].name;
      } else if (u.groupId === id) {
        u.groupId = undefined;
        u.groupName = undefined;
      }
    });
    db.set('users', users);
  }

  db.set('groups', groups);
  return res.json(groups[index]);
});

export default router;

import { Router, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '../db/database';
import { authenticateToken, AuthRequest, JWT_SECRET } from '../middleware/auth';

const router = Router();

// Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  const users = db.get('users');
  const user = users.find(u => u.username.toLowerCase() === username.trim().toLowerCase());

  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  if (user.status === 'INACTIVE') {
    return res.status(403).json({ error: 'Account is currently disabled. Please contact the administrator.' });
  }

  const isPasswordValid = bcrypt.compareSync(password, user.passwordHash);
  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role,
      fullName: user.fullName,
      groupId: user.groupId,
      level: user.level
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  // Return user without passwordHash
  const { passwordHash, ...safeUser } = user;
  return res.json({ token, user: safeUser });
});

// Current User Info
router.get('/me', authenticateToken, (req: AuthRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  const users = db.get('users');
  const user = users.find(u => u.id === req.user?.id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const { passwordHash, ...safeUser } = user;
  return res.json({ user: safeUser });
});

// Change Password
router.post('/change-password', authenticateToken, (req: AuthRequest, res: Response) => {
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    return res.status(400).json({ error: 'Current password and new password are required' });
  }

  if (newPassword.length < 6) {
    return res.status(400).json({ error: 'New password must be at least 6 characters long' });
  }

  const users = db.get('users');
  const userIndex = users.findIndex(u => u.id === req.user?.id);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const isPasswordValid = bcrypt.compareSync(currentPassword, users[userIndex].passwordHash);
  if (!isPasswordValid) {
    return res.status(400).json({ error: 'Current password is incorrect' });
  }

  users[userIndex].passwordHash = bcrypt.hashSync(newPassword, 8);
  db.set('users', users);

  return res.json({ message: 'Password changed successfully' });
});

export default router;

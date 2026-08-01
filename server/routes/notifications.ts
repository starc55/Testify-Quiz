import { Router, Response } from 'express';
import { db } from '../db/database';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = Router();

router.get('/', authenticateToken, (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  const notifications = db.get('notifications').filter(n => n.userId === userId);
  return res.json(notifications);
});

router.patch('/:id/read', authenticateToken, (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const notifications = db.get('notifications');
  const notif = notifications.find(n => n.id === id && n.userId === req.user?.id);

  if (notif) {
    notif.isRead = true;
    db.set('notifications', notifications);
  }

  return res.json({ success: true });
});

router.patch('/read-all', authenticateToken, (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  const notifications = db.get('notifications');

  notifications.forEach(n => {
    if (n.userId === userId) {
      n.isRead = true;
    }
  });

  db.set('notifications', notifications);
  return res.json({ success: true });
});

export default router;

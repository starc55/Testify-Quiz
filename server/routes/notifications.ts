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

router.post('/send-result-email', (req, res) => {
  const { teacherEmail, studentName, score, totalQuestions, percentage, userAnswers, timestamp } = req.body;
  console.log(`[TEST RESULT AUTO-SENT] Student: ${studentName}, Score: ${score}/${totalQuestions} (${percentage}%), Sent to: ${teacherEmail || 'orziyevogabek67@gmail.com'}`);
  
  try {
    const notifications = db.get('notifications') || [];
    notifications.push({
      id: `notif_${Date.now()}`,
      userId: 'teacher_admin',
      title: `Test natijasi: ${studentName}`,
      message: `${studentName} testni yakunladi: ${score}/${totalQuestions} (${percentage}%). Email: ${teacherEmail || 'orziyevogabek67@gmail.com'}`,
      isRead: false,
      createdAt: timestamp || new Date().toISOString(),
      data: { studentName, score, totalQuestions, percentage, userAnswers }
    });
    db.set('notifications', notifications);
  } catch (err) {
    console.error('Failed to save notification record:', err);
  }

  return res.json({ success: true, recipient: teacherEmail || 'orziyevogabek67@gmail.com' });
});

export default router;

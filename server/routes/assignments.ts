import { Router, Response } from 'express';
import { db } from '../db/database';
import { authenticateToken, requireRole, AuthRequest } from '../middleware/auth';
import { Assignment, Notification } from '../types';

const router = Router();

// Get assignments for current user
router.get('/', authenticateToken, (req: AuthRequest, res: Response) => {
  const assignments = db.get('assignments');
  const tests = db.get('tests');
  const attempts = db.get('attempts');

  if (req.user?.role === 'STUDENT') {
    const studentId = req.user.id;
    const groupId = req.user.groupId;

    const assigned = assignments.filter(a => {
      if (a.targetType === 'ALL') return true;
      if (a.targetType === 'GROUP' && groupId && a.targetIds.includes(groupId)) return true;
      if (a.targetType === 'STUDENT' && a.targetIds.includes(studentId)) return true;
      return false;
    });

    const populated = assigned.map(a => {
      const test = tests.find(t => t.id === a.testId);
      const studentAttempts = attempts.filter(att => att.assignmentId === a.id && att.studentId === studentId);

      return {
        ...a,
        test,
        completedAttemptsCount: studentAttempts.length,
        isCompleted: studentAttempts.some(att => att.isPassed || att.status === 'COMPLETED'),
        bestScore: studentAttempts.length > 0 ? Math.max(...studentAttempts.map(att => att.percentage)) : 0
      };
    });

    return res.json(populated);
  }

  // Teacher / Admin: return created or assigned
  if (req.user?.role === 'TEACHER') {
    const teacherAssignments = assignments.filter(a => a.creatorId === req.user?.id);
    const populated = teacherAssignments.map(a => {
      const test = tests.find(t => t.id === a.testId);
      const assignmentAttempts = attempts.filter(att => att.assignmentId === a.id);
      return {
        ...a,
        test,
        totalSubmissions: assignmentAttempts.length,
        avgScore: assignmentAttempts.length > 0
          ? Math.round(assignmentAttempts.reduce((sum, att) => sum + att.percentage, 0) / assignmentAttempts.length)
          : 0
      };
    });
    return res.json(populated);
  }

  // Admin
  const populated = assignments.map(a => {
    const test = tests.find(t => t.id === a.testId);
    return { ...a, test };
  });

  return res.json(populated);
});

// Create Assignment (Teacher or Admin)
router.post('/', authenticateToken, requireRole('ADMIN', 'TEACHER'), (req: AuthRequest, res: Response) => {
  const {
    title, description, instructions, skill, topic, level,
    testId, targetType, targetIds, deadline, passingScore, maxAttempts
  } = req.body;

  if (!title || !testId || !targetType || !Array.isArray(targetIds) || targetIds.length === 0 || !deadline) {
    return res.status(400).json({ error: 'Title, testId, targetType, targetIds, and deadline are required' });
  }

  const tests = db.get('tests');
  const test = tests.find(t => t.id === testId);
  if (!test) {
    return res.status(404).json({ error: 'Selected test not found' });
  }

  const groups = db.get('groups');
  const users = db.get('users');

  let targetNames: string[] = [];
  if (targetType === 'GROUP') {
    targetNames = groups.filter(g => targetIds.includes(g.id)).map(g => g.name);
  } else if (targetType === 'STUDENT') {
    targetNames = users.filter(u => targetIds.includes(u.id)).map(u => u.fullName);
  } else {
    targetNames = ['All Students'];
  }

  const assignments = db.get('assignments');
  const newAssignment: Assignment = {
    id: `asg_${Date.now()}`,
    title,
    description: description || test.description,
    instructions: instructions || 'Complete all questions carefully before the deadline.',
    skill: skill || test.skill,
    topic: topic || 'General Practice',
    level: level || test.level,
    testId,
    creatorId: req.user?.id || 'teacher',
    creatorName: req.user?.fullName || 'Teacher',
    targetType,
    targetIds,
    targetNames,
    deadline,
    passingScore: Number(passingScore) || test.passingScore || 70,
    maxAttempts: Number(maxAttempts) || test.maxAttempts || 2,
    createdAt: new Date().toISOString()
  };

  assignments.unshift(newAssignment);
  db.set('assignments', assignments);

  // Send in-app notifications to assigned students
  const notifications = db.get('notifications');
  let recipientStudentIds: string[] = [];

  if (targetType === 'GROUP') {
    recipientStudentIds = groups
      .filter(g => targetIds.includes(g.id))
      .flatMap(g => g.studentIds);
  } else if (targetType === 'STUDENT') {
    recipientStudentIds = targetIds;
  } else {
    recipientStudentIds = users.filter(u => u.role === 'STUDENT').map(u => u.id);
  }

  recipientStudentIds.forEach(sId => {
    const notif: Notification = {
      id: `notif_${Date.now()}_${Math.random().toString(36).substring(2, 5)}`,
      userId: sId,
      title: 'New Assignment Assigned',
      message: `Teacher ${req.user?.fullName} assigned "${title}". Deadline: ${new Date(deadline).toLocaleDateString()}`,
      type: 'ASSIGNMENT',
      isRead: false,
      link: '/assignments',
      createdAt: new Date().toISOString()
    };
    notifications.unshift(notif);
  });
  db.set('notifications', notifications);

  return res.status(201).json(newAssignment);
});

// Delete Assignment
router.delete('/:id', authenticateToken, requireRole('ADMIN', 'TEACHER'), (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  let assignments = db.get('assignments');
  const initialLen = assignments.length;

  assignments = assignments.filter(a => a.id !== id);

  if (assignments.length === initialLen) {
    return res.status(404).json({ error: 'Assignment not found' });
  }

  db.set('assignments', assignments);
  return res.json({ message: 'Assignment deleted successfully' });
});

export default router;

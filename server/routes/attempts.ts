import { Router, Response } from 'express';
import { db } from '../db/database';
import { authenticateToken, AuthRequest, requireRole } from '../middleware/auth';
import { Attempt, StudentAnswer, WeakTopic, StudentAchievement, Notification } from '../types';

const router = Router();

// Start a new test attempt
router.post('/start', authenticateToken, (req: AuthRequest, res: Response) => {
  const { testId, assignmentId } = req.body;
  const studentId = req.user?.id;

  if (!testId || !studentId) {
    return res.status(400).json({ error: 'testId is required' });
  }

  const tests = db.get('tests');
  const test = tests.find(t => t.id === testId);
  if (!test) {
    return res.status(404).json({ error: 'Test not found' });
  }

  // Check attempt limit if part of an assignment
  const assignments = db.get('assignments');
  const assignment = assignmentId ? assignments.find(a => a.id === assignmentId) : undefined;

  const existingAttempts = db.get('attempts').filter(att =>
    att.studentId === studentId && (assignmentId ? att.assignmentId === assignmentId : att.testId === testId)
  );

  const maxAllowed = assignment ? assignment.maxAttempts : test.maxAttempts || 3;
  if (existingAttempts.length >= maxAllowed) {
    return res.status(400).json({
      error: `Maximum allowed attempts (${maxAllowed}) reached for this assessment.`
    });
  }

  const questions = db.get('questions').filter(q => test.questionIds.includes(q.id));
  const passage = test.readingPassageId ? db.get('readingPassages').find(p => p.id === test.readingPassageId) : undefined;
  const audio = test.listeningAudioId ? db.get('listeningAudios').find(a => a.id === test.listeningAudioId) : undefined;

  const totalPoints = questions.reduce((sum, q) => sum + (q.points || 5), 0);

  const newAttempt: Attempt = {
    id: `att_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    studentId,
    studentName: req.user?.fullName || 'Student',
    testId,
    testTitle: test.title,
    assignmentId,
    assignmentTitle: assignment?.title,
    skill: test.skill,
    startedAt: new Date().toISOString(),
    score: 0,
    totalPoints,
    percentage: 0,
    isPassed: false,
    timeSpentSeconds: 0,
    answers: [],
    status: 'IN_PROGRESS'
  };

  const attempts = db.get('attempts');
  attempts.unshift(newAttempt);
  db.set('attempts', attempts);

  // Send questions without revealing correct answers during test execution
  const sanitizedQuestions = questions.map(({ correctAnswer, acceptedAnswers, explanation, ...q }) => q);

  return res.status(201).json({
    attempt: newAttempt,
    test: {
      ...test,
      questions: sanitizedQuestions,
      readingPassage: passage,
      listeningAudio: audio
    }
  });
});

// Helper function to normalize fill-in-blank answers
function normalizeAnswer(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .trim()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '') // strip trailing punctuation
    .replace(/\s+/g, ' '); // collapse extra spaces
}

// Local Answer Checking Logic
function checkAnswerLocally(userAnswer: string, correctAnswer: string, acceptedAnswers?: string[]): boolean {
  if (!userAnswer || !correctAnswer) return false;

  const normUser = normalizeAnswer(userAnswer);
  const normCorrect = normalizeAnswer(correctAnswer);

  if (normUser === normCorrect) return true;

  // Check against accepted answer variations if available
  if (Array.isArray(acceptedAnswers) && acceptedAnswers.length > 0) {
    return acceptedAnswers.some(ans => normalizeAnswer(ans) === normUser);
  }

  return false;
}

// Submit test attempt & evaluate locally
router.post('/submit', authenticateToken, (req: AuthRequest, res: Response) => {
  const { attemptId, userAnswers, timeSpentSeconds } = req.body;
  const studentId = req.user?.id;

  if (!attemptId || !Array.isArray(userAnswers)) {
    return res.status(400).json({ error: 'attemptId and userAnswers array are required' });
  }

  const attempts = db.get('attempts');
  const index = attempts.findIndex(att => att.id === attemptId && att.studentId === studentId);

  if (index === -1) {
    return res.status(404).json({ error: 'Attempt session not found' });
  }

  const attempt = attempts[index];
  const tests = db.get('tests');
  const test = tests.find(t => t.id === attempt.testId);

  if (!test) {
    return res.status(404).json({ error: 'Associated test not found' });
  }

  const allQuestions = db.get('questions');
  const testQuestions = allQuestions.filter(q => test.questionIds.includes(q.id));

  let totalScore = 0;
  let maxPossiblePoints = 0;
  const evaluatedAnswers: StudentAnswer[] = [];
  const topicStats: Record<string, { correct: number; total: number; skill: string }> = {};

  testQuestions.forEach(q => {
    const qPoints = q.points || 5;
    maxPossiblePoints += qPoints;

    const userAns = userAnswers.find((ua: any) => ua.questionId === q.id);
    const submittedText = userAns ? String(userAns.answer) : '';

    const isCorrect = checkAnswerLocally(submittedText, q.correctAnswer, q.acceptedAnswers);
    const pointsEarned = isCorrect ? qPoints : 0;
    totalScore += pointsEarned;

    evaluatedAnswers.push({
      questionId: q.id,
      answer: submittedText,
      isCorrect,
      pointsEarned
    });

    // Track topic performance for weakness detection
    if (!topicStats[q.topic]) {
      topicStats[q.topic] = { correct: 0, total: 0, skill: q.skill };
    }
    topicStats[q.topic].total += 1;
    if (isCorrect) {
      topicStats[q.topic].correct += 1;
    }
  });

  const percentage = maxPossiblePoints > 0 ? Math.round((totalScore / maxPossiblePoints) * 100) : 0;
  const passingScore = test.passingScore || 70;
  const isPassed = percentage >= passingScore;

  // Update Attempt object
  attempts[index] = {
    ...attempt,
    score: totalScore,
    totalPoints: maxPossiblePoints,
    percentage,
    isPassed,
    timeSpentSeconds: Number(timeSpentSeconds) || 300,
    answers: evaluatedAnswers,
    submittedAt: new Date().toISOString(),
    status: 'COMPLETED'
  };

  db.set('attempts', attempts);

  // --- AUTOMATED WEAKNESS DETECTION ---
  const weakTopics = db.get('weakTopics');
  Object.entries(topicStats).forEach(([topic, stats]) => {
    const topicAccuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 100;

    const existingIndex = weakTopics.findIndex(wt => wt.studentId === studentId && wt.topic === topic);

    if (topicAccuracy < 70) {
      if (existingIndex > -1) {
        weakTopics[existingIndex].accuracyPercentage = topicAccuracy;
        weakTopics[existingIndex].totalAttempted += stats.total;
        weakTopics[existingIndex].lastEvaluated = new Date().toISOString();
      } else {
        weakTopics.push({
          id: `wt_${Date.now()}_${Math.random().toString(36).substring(2, 5)}`,
          studentId: studentId!,
          skill: stats.skill as any,
          topic,
          accuracyPercentage: topicAccuracy,
          totalAttempted: stats.total,
          lastEvaluated: new Date().toISOString()
        });
      }
    } else if (existingIndex > -1 && topicAccuracy >= 80) {
      // Improved topic, remove from weak list
      weakTopics.splice(existingIndex, 1);
    }
  });
  db.set('weakTopics', weakTopics);

  // --- GAMIFICATION & ACHIEVEMENTS ---
  const achievements = db.get('achievements');
  const studentAchievements = db.get('studentAchievements');
  const unlockedBadges: string[] = [];

  const unlockBadge = (code: string) => {
    const ach = achievements.find(a => a.code === code);
    if (ach && !studentAchievements.some(sa => sa.studentId === studentId && sa.achievementId === ach.id)) {
      studentAchievements.push({
        id: `sa_${Date.now()}_${Math.random().toString(36).substring(2, 5)}`,
        studentId: studentId!,
        achievementId: ach.id,
        unlockedAt: new Date().toISOString()
      });
      unlockedBadges.push(ach.title);
    }
  };

  // Check triggers
  unlockBadge('FIRST_TEST');
  if (percentage === 100) unlockBadge('PERFECT_SCORE');
  if (test.skill === 'grammar' && percentage >= 80) unlockBadge('GRAMMAR_STARTER');
  if (test.skill === 'reading' && percentage >= 75) unlockBadge('READING_EXPLORER');
  if (test.skill === 'listening' && percentage === 100) unlockBadge('LISTENING_MASTER');

  db.set('studentAchievements', studentAchievements);

  // Send Notification if new achievements were unlocked
  if (unlockedBadges.length > 0) {
    const notifications = db.get('notifications');
    notifications.unshift({
      id: `notif_${Date.now()}`,
      userId: studentId!,
      title: 'Achievement Unlocked!',
      message: `Congratulations! You earned badge(s): ${unlockedBadges.join(', ')}`,
      type: 'ACHIEVEMENT',
      isRead: false,
      link: '/achievements',
      createdAt: new Date().toISOString()
    });
    db.set('notifications', notifications);
  }

  // Populate response with question details and explanations
  const passage = test.readingPassageId ? db.get('readingPassages').find(p => p.id === test.readingPassageId) : undefined;
  const audio = test.listeningAudioId ? db.get('listeningAudios').find(a => a.id === test.listeningAudioId) : undefined;

  return res.json({
    attempt: attempts[index],
    test: {
      ...test,
      questions: testQuestions, // full questions with explanations for results page
      readingPassage: passage,
      listeningAudio: audio
    },
    unlockedBadges
  });
});

// Add Teacher Feedback or Reassign Exercise
router.post('/:attemptId/feedback', authenticateToken, requireRole('ADMIN', 'TEACHER'), (req: AuthRequest, res: Response) => {
  const { attemptId } = req.params;
  const { feedback, reassign } = req.body;

  const attempts = db.get('attempts');
  const attempt = attempts.find(a => a.id === attemptId);

  if (!attempt) {
    return res.status(404).json({ error: 'Attempt not found' });
  }

  if (feedback) {
    attempt.teacherFeedback = feedback;
    db.set('attempts', attempts);

    // Send notification to student
    const notifications = db.get('notifications');
    notifications.unshift({
      id: `notif_${Date.now()}`,
      userId: attempt.studentId,
      title: 'Teacher Feedback Added',
      message: `${req.user?.fullName} added feedback on your "${attempt.testTitle}" attempt: "${feedback}"`,
      type: 'FEEDBACK',
      isRead: false,
      link: '/results',
      createdAt: new Date().toISOString()
    });
    db.set('notifications', notifications);
  }

  return res.json(attempt);
});

// Get user's attempt history
router.get('/', authenticateToken, (req: AuthRequest, res: Response) => {
  const { studentId } = req.query;
  const attempts = db.get('attempts');

  if (req.user?.role === 'STUDENT') {
    const studentAttempts = attempts.filter(a => a.studentId === req.user?.id);
    return res.json(studentAttempts);
  }

  if (studentId) {
    const filtered = attempts.filter(a => a.studentId === String(studentId));
    return res.json(filtered);
  }

  return res.json(attempts);
});

export default router;

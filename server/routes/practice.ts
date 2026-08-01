import { Router, Response } from 'express';
import { db } from '../db/database';
import { authenticateToken, AuthRequest } from '../middleware/auth';
import { Test, Question } from '../types';

const router = Router();

// Practice Quiz Generator
router.post('/generate', authenticateToken, (req: AuthRequest, res: Response) => {
  const { skill, topic, level, difficulty, questionCount = 10 } = req.body;
  const studentId = req.user?.id;

  let questions = db.get('questions');

  if (skill && skill !== 'mixed') {
    questions = questions.filter(q => q.skill === skill);
  }

  if (topic && topic !== 'all') {
    questions = questions.filter(q => q.topic.toLowerCase().includes(String(topic).toLowerCase()));
  }

  if (level && level !== 'all') {
    questions = questions.filter(q => q.level === level);
  }

  if (difficulty && difficulty !== 'all') {
    questions = questions.filter(q => q.difficulty === difficulty);
  }

  // Shuffle array randomly
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  const selectedQuestions = shuffled.slice(0, Math.min(Number(questionCount) || 10, shuffled.length));

  if (selectedQuestions.length === 0) {
    return res.status(404).json({
      error: 'No questions matched your selected practice criteria. Try broadening your topic or difficulty filter.'
    });
  }

  // Create temporary practice test
  const practiceTest: Test = {
    id: `practice_${Date.now()}`,
    title: `Practice Session: ${skill ? skill.toUpperCase() : 'Mixed Skills'} (${topic || 'All Topics'})`,
    description: 'Self-directed practice test tailored to your requested skill parameters.',
    skill: skill || 'mixed',
    level: level || 'B2',
    difficulty: difficulty || 'medium',
    durationMinutes: Math.max(10, Math.round(selectedQuestions.length * 1.5)),
    passingScore: 70,
    maxAttempts: 99,
    questionIds: selectedQuestions.map(q => q.id),
    creatorId: studentId || 'student',
    creatorName: 'Self Practice',
    createdAt: new Date().toISOString()
  };

  const tests = db.get('tests');
  tests.unshift(practiceTest);
  db.set('tests', tests);

  // Return test with questions sanitized for test room
  const sanitized = selectedQuestions.map(({ correctAnswer, acceptedAnswers, explanation, ...q }) => q);

  return res.json({
    test: {
      ...practiceTest,
      questions: sanitized
    }
  });
});

export default router;

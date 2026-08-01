import { Router, Response } from 'express';
import { db } from '../db/database';
import { authenticateToken, requireRole, AuthRequest } from '../middleware/auth';
import { Question } from '../types';

const router = Router();

// Get questions (with search, skill, topic, level, difficulty filtering)
router.get('/', authenticateToken, (req: AuthRequest, res: Response) => {
  const { skill, topic, level, difficulty, search } = req.query;
  let questions = db.get('questions');

  if (skill) {
    questions = questions.filter(q => q.skill === skill);
  }

  if (topic) {
    questions = questions.filter(q => q.topic.toLowerCase().includes(String(topic).toLowerCase()));
  }

  if (level) {
    questions = questions.filter(q => q.level === level);
  }

  if (difficulty) {
    questions = questions.filter(q => q.difficulty === difficulty);
  }

  if (search) {
    const term = String(search).toLowerCase();
    questions = questions.filter(q =>
      q.question.toLowerCase().includes(term) ||
      q.topic.toLowerCase().includes(term) ||
      (q.explanation && q.explanation.toLowerCase().includes(term))
    );
  }

  return res.json(questions);
});

// Export all questions as JSON
router.get('/export', authenticateToken, requireRole('ADMIN', 'TEACHER'), (req: AuthRequest, res: Response) => {
  const questions = db.get('questions');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Disposition', 'attachment; filename=edulingurist-question-bank.json');
  return res.send(JSON.stringify(questions, null, 2));
});

// Import questions from JSON
router.post('/import', authenticateToken, requireRole('ADMIN', 'TEACHER'), (req: AuthRequest, res: Response) => {
  const { questions: importedQuestions } = req.body;

  if (!Array.isArray(importedQuestions) || importedQuestions.length === 0) {
    return res.status(400).json({ error: 'Valid JSON array of questions is required' });
  }

  const existing = db.get('questions');
  let addedCount = 0;

  importedQuestions.forEach((q: any) => {
    if (q.question && q.skill && q.correctAnswer) {
      const newQuestion: Question = {
        id: `q_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        skill: q.skill || 'grammar',
        topic: q.topic || 'General Grammar',
        level: q.level || 'B1',
        difficulty: q.difficulty || 'medium',
        type: q.type || 'multiple-choice',
        question: q.question,
        options: Array.isArray(q.options) ? q.options : undefined,
        correctAnswer: String(q.correctAnswer),
        acceptedAnswers: Array.isArray(q.acceptedAnswers) ? q.acceptedAnswers : undefined,
        explanation: q.explanation || 'No explanation provided.',
        points: Number(q.points) || 5,
        readingPassageId: q.readingPassageId || undefined,
        listeningAudioId: q.listeningAudioId || undefined,
        createdAt: new Date().toISOString()
      };
      existing.unshift(newQuestion);
      addedCount++;
    }
  });

  db.set('questions', existing);
  return res.json({ message: `Successfully imported ${addedCount} questions.`, count: addedCount });
});

// Create single Question
router.post('/', authenticateToken, requireRole('ADMIN', 'TEACHER'), (req: AuthRequest, res: Response) => {
  const {
    skill, topic, level, difficulty, type,
    question, options, correctAnswer, acceptedAnswers,
    explanation, points, readingPassageId, listeningAudioId
  } = req.body;

  if (!question || !skill || !correctAnswer) {
    return res.status(400).json({ error: 'Question text, skill, and correct answer are required' });
  }

  const questions = db.get('questions');
  const newQ: Question = {
    id: `q_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    skill,
    topic: topic || 'General',
    level: level || 'B1',
    difficulty: difficulty || 'medium',
    type: type || 'multiple-choice',
    question,
    options: Array.isArray(options) ? options : undefined,
    correctAnswer: String(correctAnswer),
    acceptedAnswers: Array.isArray(acceptedAnswers) ? acceptedAnswers : undefined,
    explanation: explanation || '',
    points: Number(points) || 5,
    readingPassageId,
    listeningAudioId,
    createdAt: new Date().toISOString()
  };

  questions.unshift(newQ);
  db.set('questions', questions);

  return res.status(201).json(newQ);
});

// Edit Question
router.put('/:id', authenticateToken, requireRole('ADMIN', 'TEACHER'), (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const questions = db.get('questions');
  const index = questions.findIndex(q => q.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Question not found' });
  }

  questions[index] = {
    ...questions[index],
    ...req.body,
    id // keep original ID
  };

  db.set('questions', questions);
  return res.json(questions[index]);
});

// Delete Question
router.delete('/:id', authenticateToken, requireRole('ADMIN', 'TEACHER'), (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  let questions = db.get('questions');
  const initialLen = questions.length;

  questions = questions.filter(q => q.id !== id);

  if (questions.length === initialLen) {
    return res.status(404).json({ error: 'Question not found' });
  }

  db.set('questions', questions);
  return res.json({ message: 'Question deleted successfully' });
});

export default router;

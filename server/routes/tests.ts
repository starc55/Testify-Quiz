import { Router, Response } from 'express';
import { db } from '../db/database';
import { authenticateToken, requireRole, AuthRequest } from '../middleware/auth';
import { Test, ReadingPassage, ListeningAudio } from '../types';

const router = Router();

// Get all tests
router.get('/', authenticateToken, (req: AuthRequest, res: Response) => {
  const tests = db.get('tests');
  const questions = db.get('questions');
  const passages = db.get('readingPassages');
  const audios = db.get('listeningAudios');

  const populated = tests.map(t => {
    const testQs = questions.filter(q => t.questionIds.includes(q.id));
    const passage = t.readingPassageId ? passages.find(p => p.id === t.readingPassageId) : undefined;
    const audio = t.listeningAudioId ? audios.find(a => a.id === t.listeningAudioId) : undefined;

    return {
      ...t,
      questions: testQs,
      readingPassage: passage,
      listeningAudio: audio
    };
  });

  return res.json(populated);
});

// Get single test by ID
router.get('/:id', authenticateToken, (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const tests = db.get('tests');
  const test = tests.find(t => t.id === id);

  if (!test) {
    return res.status(404).json({ error: 'Test not found' });
  }

  const questions = db.get('questions').filter(q => test.questionIds.includes(q.id));
  const passage = test.readingPassageId ? db.get('readingPassages').find(p => p.id === test.readingPassageId) : undefined;
  const audio = test.listeningAudioId ? db.get('listeningAudios').find(a => a.id === test.listeningAudioId) : undefined;

  // Don't send correct answers if user is STUDENT and test is in exam mode (before submission)
  const isStudent = req.user?.role === 'STUDENT';
  const sanitizedQuestions = isStudent
    ? questions.map(({ correctAnswer, acceptedAnswers, explanation, ...q }) => q)
    : questions;

  return res.json({
    ...test,
    questions: sanitizedQuestions,
    readingPassage: passage,
    listeningAudio: audio
  });
});

// Create Test (Teacher or Admin)
router.post('/', authenticateToken, requireRole('ADMIN', 'TEACHER'), (req: AuthRequest, res: Response) => {
  const {
    title, description, skill, level, difficulty,
    durationMinutes, passingScore, maxAttempts, questionIds,
    readingPassage, listeningAudio
  } = req.body;

  if (!title || !skill || !Array.isArray(questionIds) || questionIds.length === 0) {
    return res.status(400).json({ error: 'Title, skill, and questionIds array are required' });
  }

  let readingPassageId: string | undefined = undefined;
  let listeningAudioId: string | undefined = undefined;

  // Save new reading passage if provided
  if (readingPassage && readingPassage.title && readingPassage.passageText) {
    const passages = db.get('readingPassages');
    const newP: ReadingPassage = {
      id: `rp_${Date.now()}`,
      title: readingPassage.title,
      passageText: readingPassage.passageText,
      estReadingTime: Number(readingPassage.estReadingTime) || 4,
      level: level || 'B2',
      difficulty: difficulty || 'medium',
      createdAt: new Date().toISOString()
    };
    passages.push(newP);
    db.set('readingPassages', passages);
    readingPassageId = newP.id;
  }

  // Save new listening audio if provided
  if (listeningAudio && listeningAudio.title) {
    const audios = db.get('listeningAudios');
    const newA: ListeningAudio = {
      id: `la_${Date.now()}`,
      title: listeningAudio.title,
      instructions: listeningAudio.instructions || 'Listen carefully to the recording.',
      audioUrl: listeningAudio.audioUrl || 'https://cdn.freesound.org/previews/512/512132_10825381-lq.mp3',
      transcript: listeningAudio.transcript || '',
      playLimit: Number(listeningAudio.playLimit) || 2,
      timeLimit: Number(listeningAudio.timeLimit) || 300,
      createdAt: new Date().toISOString()
    };
    audios.push(newA);
    db.set('listeningAudios', audios);
    listeningAudioId = newA.id;
  }

  const tests = db.get('tests');
  const newTest: Test = {
    id: `test_${Date.now()}`,
    title,
    description: description || '',
    skill,
    level: level || 'B2',
    difficulty: difficulty || 'medium',
    durationMinutes: Number(durationMinutes) || 20,
    passingScore: Number(passingScore) || 70,
    maxAttempts: Number(maxAttempts) || 3,
    questionIds,
    readingPassageId,
    listeningAudioId,
    creatorId: req.user?.id || 'teacher',
    creatorName: req.user?.fullName || 'Teacher',
    createdAt: new Date().toISOString()
  };

  tests.unshift(newTest);
  db.set('tests', tests);

  return res.status(201).json(newTest);
});

// Delete Test
router.delete('/:id', authenticateToken, requireRole('ADMIN', 'TEACHER'), (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  let tests = db.get('tests');
  const initialLen = tests.length;

  tests = tests.filter(t => t.id !== id);

  if (tests.length === initialLen) {
    return res.status(404).json({ error: 'Test not found' });
  }

  db.set('tests', tests);
  return res.json({ message: 'Test deleted successfully' });
});

export default router;

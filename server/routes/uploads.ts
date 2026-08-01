import { Router, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { authenticateToken, requireRole } from '../middleware/auth';

const router = Router();

const UPLOADS_DIR = path.resolve(process.cwd(), 'uploads/audio');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `listening_${Date.now()}_${Math.random().toString(36).substring(2, 6)}${ext}`;
    cb(null, filename);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 }, // 15MB limit
  fileFilter: (req, file, cb) => {
    const allowed = ['.mp3', '.wav', '.m4a', '.aac', '.ogg'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Only audio files (.mp3, .wav, .m4a, .aac, .ogg) are allowed.'));
    }
  }
});

router.post('/audio', authenticateToken, requireRole('ADMIN', 'TEACHER'), upload.single('audioFile'), (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No audio file uploaded' });
  }

  const audioUrl = `/uploads/audio/${req.file.filename}`;
  return res.json({
    audioUrl,
    filename: req.file.filename,
    originalName: req.file.originalname,
    size: req.file.size
  });
});

export default router;

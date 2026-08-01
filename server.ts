import express from 'express';
import path from 'path';
import cors from 'cors';
import { createServer as createViteServer } from 'vite';

import authRoutes from './server/routes/auth';
import userRoutes from './server/routes/users';
import groupRoutes from './server/routes/groups';
import questionRoutes from './server/routes/questions';
import testRoutes from './server/routes/tests';
import assignmentRoutes from './server/routes/assignments';
import attemptRoutes from './server/routes/attempts';
import analyticsRoutes from './server/routes/analytics';
import notificationRoutes from './server/routes/notifications';
import practiceRoutes from './server/routes/practice';
import uploadRoutes from './server/routes/uploads';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middlewares
  app.use(cors());
  app.use(express.json({ limit: '20mb' }));
  app.use(express.urlencoded({ extended: true, limit: '20mb' }));

  // Static uploads serving
  const uploadsDir = path.resolve(process.cwd(), 'uploads');
  app.use('/uploads', express.static(uploadsDir));

  // API Routes
  app.use('/api/auth', authRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/groups', groupRoutes);
  app.use('/api/question-bank', questionRoutes);
  app.use('/api/tests', testRoutes);
  app.use('/api/assignments', assignmentRoutes);
  app.use('/api/attempts', attemptRoutes);
  app.use('/api/analytics', analyticsRoutes);
  app.use('/api/notifications', notificationRoutes);
  app.use('/api/practice', practiceRoutes);
  app.use('/api/uploads', uploadRoutes);

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', app: 'EduLinguist Platform API', timestamp: new Date().toISOString() });
  });

  // Vite middleware in Development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`EduLinguist Full-Stack Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start EduLinguist server:', err);
});

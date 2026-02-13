export type GameState = 'welcome' | 'rules' | 'vocabulary' | 'quiz' | 'completed';

export interface QuizQuestion {
  type: 'multiple-choice' | 'fill-in-the-blank';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
}

export interface VocabularyItem {
  term: string;
  definition: string;
}

export interface HighScore {
  name: string;
  score: number;
}

export type ThemeName = 'default';

export interface Theme {
  id: string;
  name: string;
  preview: string;
  mainGradient: string;
  blob1: string;
  blob2: string;
  blob3: string;
  button: string;
  progressBar: string;
  timerCircle: {
    base: string;
    warn: string;
    danger: string;
  };
}

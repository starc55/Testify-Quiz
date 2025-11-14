export type GameState = 'welcome' | 'rules' | 'vocabulary' | 'quiz' | 'completed';

export interface QuizQuestion {
  type: 'multiple-choice' | 'fill-in-the-blank';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
}

export interface HighScore {
  name: string;
  score: number;
}

export interface VocabularyItem {
  term: string;
  definition: string;
}

export type ThemeName = 'default' | 'ocean' | 'sunset' | 'forest';

export interface Theme {
  id: ThemeName;
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
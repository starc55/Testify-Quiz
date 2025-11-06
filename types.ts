export type GameState = 'welcome' | 'rules' | 'quiz' | 'completed';

export interface QuizQuestion {
  type: 'multiple-choice' | 'fill-in-the-blank';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
}

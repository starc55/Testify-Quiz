export type GameState = 'welcome' | 'rules' | 'quiz' | 'completed';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

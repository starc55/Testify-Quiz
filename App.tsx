import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import RulesModal from './components/RulesModal';
import VocabularyScreen from './components/VocabularyScreen';
import QuizScreen from './components/QuizScreen';
import CompletionScreen from './components/CompletionScreen';
import PauseModal from './components/PauseModal';
import { FIXED_THEME, QUIZ_QUESTIONS, QUIZ_DURATION_SECONDS } from './constants';
import { GameState, QuizQuestion } from './types';

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function App() {
  const [studentName, setStudentName] = useState<string>('');
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<
    Array<{
      question: string;
      selectedAnswer: string;
      correctAnswer: string;
      isCorrect: boolean;
      category?: string;
    }>
  >([]);
  const [timeLeft, setTimeLeft] = useState<number>(QUIZ_DURATION_SECONDS);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [pauseCountdown, setPauseCountdown] = useState<number | null>(null);

  // Timer effect
  useEffect(() => {
    if (gameState !== 'quiz' || isPaused) return;

    if (timeLeft <= 0) {
      setGameState('completed');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameState('completed');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, isPaused, timeLeft]);

  // Tab blur/focus pause mechanism
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && gameState === 'quiz') {
        setIsPaused(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [gameState]);

  // Pause countdown
  useEffect(() => {
    if (pauseCountdown === null) return;

    if (pauseCountdown <= 0) {
      setPauseCountdown(null);
      setIsPaused(false);
      return;
    }

    const timer = setInterval(() => {
      setPauseCountdown((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearInterval(timer);
  }, [pauseCountdown]);

  const handleNameSubmit = (name: string) => {
    setStudentName(name);
    setGameState('rules');
  };

  const handleRulesAccept = () => {
    setGameState('vocabulary');
  };

  const startQuiz = () => {
    const preparedQuestions = QUIZ_QUESTIONS.map((q) => {
      if (q.type === 'multiple-choice' && q.options) {
        return {
          ...q,
          options: shuffleArray(q.options),
        };
      }
      return { ...q };
    });

    const shuffledQuestions = shuffleArray(preparedQuestions);
    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers([]);
    setTimeLeft(QUIZ_DURATION_SECONDS);
    setIsPaused(false);
    setGameState('quiz');
  };

  const handleAnswer = (selectedOption: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const processedAnswer = selectedOption.trim().toLowerCase();

    let isCorrect = false;
    if (Array.isArray(currentQuestion.correctAnswer)) {
      isCorrect = currentQuestion.correctAnswer.map((ans) => ans.toLowerCase()).includes(processedAnswer);
    } else {
      isCorrect = processedAnswer === (currentQuestion.correctAnswer as string).toLowerCase();
    }

    const answerRecord = {
      question: currentQuestion.question,
      selectedAnswer: selectedOption,
      correctAnswer: Array.isArray(currentQuestion.correctAnswer)
        ? currentQuestion.correctAnswer.join(' / ')
        : currentQuestion.correctAnswer,
      isCorrect,
      category: currentQuestion.category,
    };

    setUserAnswers((prev) => [...prev, answerRecord]);
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setGameState('completed');
    }
  };

  const handleResumeRequest = () => {
    setPauseCountdown(3);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans antialiased selection:bg-indigo-500 selection:text-white relative overflow-x-hidden flex flex-col justify-between p-4 sm:p-6 md:p-8">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] ${FIXED_THEME.blob1} rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse`} />
        <div className={`absolute top-1/3 right-1/4 w-[400px] h-[400px] ${FIXED_THEME.blob2} rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse delay-1000`} />
        <div className={`absolute bottom-10 left-1/3 w-[450px] h-[450px] ${FIXED_THEME.blob3} rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-pulse delay-700`} />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex-1 flex flex-col justify-center my-auto py-6">
        {gameState === 'welcome' && (
          <WelcomeScreen onNameSubmit={handleNameSubmit} />
        )}

        {gameState === 'rules' && (
          <RulesModal onAccept={handleRulesAccept} />
        )}

        {gameState === 'vocabulary' && (
          <VocabularyScreen onStartQuiz={startQuiz} />
        )}

        {gameState === 'quiz' && questions.length > 0 && (
          <QuizScreen
            question={questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
            timeLeft={timeLeft}
            isPaused={isPaused}
            theme={FIXED_THEME}
            studentName={studentName}
          />
        )}

        {gameState === 'completed' && (
          <CompletionScreen
            name={studentName}
            score={score}
            totalQuestions={questions.length}
            userAnswers={userAnswers}
          />
        )}
      </div>

      {isPaused && (
        <PauseModal
          countdown={pauseCountdown}
          onResumeRequest={handleResumeRequest}
        />
      )}

    </div>
  );
}

export default App;

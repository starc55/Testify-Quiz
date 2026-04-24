import React, { useState, useCallback, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import RulesModal from './components/RulesModal';
import QuizScreen from './components/QuizScreen';
import CompletionScreen from './components/CompletionScreen';
import PauseModal from './components/PauseModal';
import VocabularyScreen from './components/VocabularyScreen';
import { QUIZ_QUESTIONS, QUIZ_DURATION_SECONDS, FIXED_THEME } from './constants';
import type { GameState, QuizQuestion } from './types';

interface AnswerRecord {
  question: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function App() {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [studentName, setStudentName] = useState<string>('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(QUIZ_DURATION_SECONDS);
  const [isQuizActive, setIsQuizActive] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<AnswerRecord[]>([]);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([]);
  const [resultsSubmitted, setResultsSubmitted] = useState<boolean>(false);

  const handleAcceptRules = useCallback(() => {
    setGameState('vocabulary');
  }, []);

  const startQuiz = useCallback(() => {
    const questionsWithRandomizedOptions = QUIZ_QUESTIONS.map(q => {
      if (q.type === 'multiple-choice' && q.options) {
        return {
          ...q,
          options: shuffleArray(q.options)
        };
      }
      return q;
    });

    setShuffledQuestions(shuffleArray(questionsWithRandomizedOptions));
    
    setTimeLeft(QUIZ_DURATION_SECONDS);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers([]);
    setResultsSubmitted(false);
    setGameState('quiz');
    setIsQuizActive(true);
  }, []);

  const handleNameSubmit = useCallback((name: string) => {
    if (name.trim()) {
      setStudentName(name.trim());
      setGameState('rules');
    }
  }, []);

  const finishQuiz = useCallback(() => {
    setIsQuizActive(false);
    setGameState('completed');
  }, []);

  useEffect(() => {
    const handleBlur = () => {
      if (gameState === 'quiz' && !isPaused) {
        setIsPaused(true);
      }
    };
    window.addEventListener('blur', handleBlur);
    return () => window.removeEventListener('blur', handleBlur);
  }, [gameState, isPaused]);

  useEffect(() => {
    if (countdown === null) return;
    if (countdown === 0) {
      setIsPaused(false);
      setCountdown(null);
      return;
    }
    const timerId = setTimeout(() => {
      setCountdown(prev => (prev !== null ? prev - 1 : null));
    }, 1000);
    return () => clearTimeout(timerId);
  }, [countdown]);
  
  const handleResumeRequest = useCallback(() => {
    setCountdown(3);
  }, []);

  useEffect(() => {
    if (gameState === 'completed' && !resultsSubmitted) {
      const submitResults = async () => {
        const accessKey = '4938d15a-c907-4b5b-9b76-9229d8a0f47c'; 
        const submissionEndpoint = 'https://api.web3forms.com/submit';

        const detailedReport = userAnswers.map((answer, index) => (
          `Savol ${index + 1}: ${answer.question}\n` +
          `Sizning javobingiz: ${answer.selectedAnswer} ${answer.isCorrect ? '(To\'g\'ri)' : '(Noto\'g\'ri)'}\n` +
          `To'g'ri javob: ${answer.correctAnswer}`
        )).join('\n\n----------------------------------------\n\n');

        const emailBody = `O'quvchi ismi: ${studentName}\n` +
                          `Yakuniy natija: ${score} / ${shuffledQuestions.length}\n\n` +
                          detailedReport;

        const formData = new FormData();
        formData.append("access_key", accessKey);
        formData.append("student_name", studentName);
        formData.append("score", `${score} / ${shuffledQuestions.length}`);
        formData.append("subject", `Yangi Quiz Natijasi: ${studentName}`);
        formData.append("message", emailBody);

        try {
          await fetch(submissionEndpoint, { method: 'POST', body: formData });
        } catch (error) {
          console.error('Yuborishda xatolik:', error);
        }
      };
      setResultsSubmitted(true);
      submitResults();
    }
  }, [gameState, studentName, score, userAnswers, shuffledQuestions.length, resultsSubmitted]);

  useEffect(() => {
    if (!isQuizActive || isPaused) return;
    if (timeLeft === 0) {
      finishQuiz();
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [isQuizActive, timeLeft, finishQuiz, isPaused]);

  const handleAnswer = useCallback((userAnswer: string) => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const processedUserAnswer = userAnswer.trim().toLowerCase();
    let isCorrect = false;

    if (Array.isArray(currentQuestion.correctAnswer)) {
      isCorrect = currentQuestion.correctAnswer.map(ans => ans.toLowerCase()).includes(processedUserAnswer);
    } else {
      isCorrect = processedUserAnswer === (currentQuestion.correctAnswer as string).toLowerCase();
    }
    
    if (isCorrect) setScore(prevScore => prevScore + 1);

    setUserAnswers(prevAnswers => [
      ...prevAnswers,
      {
        question: currentQuestion.question,
        selectedAnswer: userAnswer,
        correctAnswer: Array.isArray(currentQuestion.correctAnswer) 
            ? currentQuestion.correctAnswer.join(' / ') 
            : currentQuestion.correctAnswer,
        isCorrect: isCorrect,
      },
    ]);

    if (currentQuestionIndex === shuffledQuestions.length - 1) {
      finishQuiz();
    } else {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  }, [currentQuestionIndex, finishQuiz, shuffledQuestions]);

  const renderContent = () => {
    switch (gameState) {
      case 'welcome':
        return <WelcomeScreen onNameSubmit={handleNameSubmit} />;
      case 'rules':
        return <RulesModal onAccept={handleAcceptRules} />;
      case 'vocabulary':
        return <VocabularyScreen onStartQuiz={startQuiz} />;
      case 'quiz':
        if (shuffledQuestions.length === 0) return null;
        return (
          <QuizScreen
            question={shuffledQuestions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={shuffledQuestions.length}
            onAnswer={handleAnswer}
            timeLeft={timeLeft}
            isPaused={isPaused}
            theme={FIXED_THEME}
            studentName={studentName}
          />
        );
      case 'completed':
        return (
          <CompletionScreen 
            name={studentName} 
            score={score} 
            totalQuestions={shuffledQuestions.length} 
            userAnswers={userAnswers} 
          />
        );
      default:
        return <WelcomeScreen onNameSubmit={handleNameSubmit} />;
    }
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#020617] overflow-x-hidden overflow-y-auto p-4 sm:p-6 font-mono">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(circle, #06b6d4 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#06b6d4]/5 to-transparent"></div>
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
           style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }}></div>

      <div className="z-10 w-full max-w-2xl flex items-center justify-center">
        {renderContent()}
      </div>

      {isPaused && <PauseModal countdown={countdown} onResumeRequest={handleResumeRequest} />}

      <style>{`
        body { background-color: #020617; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #020617; }
        ::-webkit-scrollbar-thumb { background: #06b6d4; border-radius: 10px; }
      `}</style>
    </main>
  );
}

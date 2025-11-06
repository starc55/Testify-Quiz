import React, { useState, useCallback, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import RulesModal from './components/RulesModal';
import QuizScreen from './components/QuizScreen';
import CompletionScreen from './components/CompletionScreen';
import PauseModal from './components/PauseModal';
import { QUIZ_QUESTIONS, QUIZ_DURATION_SECONDS } from './constants';
import type { GameState, QuizQuestion } from './types';

interface AnswerRecord {
  question: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

const shuffleArray = (array: any[]) => {
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

  const startQuiz = useCallback(() => {
    setShuffledQuestions(shuffleArray(QUIZ_QUESTIONS));
    setTimeLeft(QUIZ_DURATION_SECONDS);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers([]);
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
      // Pause only if the quiz is active and not already paused/completed
      if (gameState === 'quiz' && !isPaused) {
        setIsPaused(true);
      }
    };

    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('blur', handleBlur);
    };
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
    if (gameState === 'completed') {
      const submitResults = async () => {
        // This function sends the quiz results to a form handling service, which then emails them.
        const accessKey = '4938d15a-c907-4b5b-9b76-9229d8a0f47c'; 
        const submissionEndpoint = 'https://api.web3forms.com/submit';

        const detailedReport = userAnswers.map((answer, index) => (
          `Question ${index + 1}: ${answer.question}\n` +
          `Your Answer: ${answer.selectedAnswer} ${answer.isCorrect ? '(Correct)' : '(Incorrect)'}\n` +
          `Correct Answer: ${answer.correctAnswer}`
        )).join('\n\n----------------------------------------\n\n');

        const emailBody = `Student Name: ${studentName}\n` +
                          `Final Score: ${score} / ${shuffledQuestions.length}\n\n` +
                          `--- ANSWERS ---\n\n` +
                          detailedReport;

        const formData = new FormData();
        formData.append("access_key", accessKey);
        formData.append("student_name", studentName);
        formData.append("score", `${score} / ${shuffledQuestions.length}`);
        formData.append("subject", `New Quiz Submission from ${studentName}`);
        formData.append("from_name", "Testify Quiz");
        formData.append("email_to", "orziyevogabek67@gmail.com");
        formData.append("message", emailBody);


        try {
          const response = await fetch(submissionEndpoint, {
            method: 'POST',
            body: formData,
          });

          const data = await response.json();

          if (data.success) {
            console.log('Results submitted successfully!');
          } else {
            console.error('Submission failed:', data.message);
            // In a real app, you might want to show an error message to the user.
          }
        } catch (error) {
          console.error('An error occurred during submission:', error);
        }
      };

      // Ensure submission only happens once and with data
      if (userAnswers.length > 0 || score === 0) {
          submitResults();
      }
    }
  }, [gameState, studentName, score, userAnswers, shuffledQuestions.length]);


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

  const handleAnswer = useCallback((selectedOption: string) => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = currentQuestion.correctAnswer === selectedOption;
    
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    setUserAnswers(prevAnswers => [
      ...prevAnswers,
      {
        question: currentQuestion.question,
        selectedAnswer: selectedOption,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect: isCorrect,
      },
    ]);

    const isLastQuestion = currentQuestionIndex === shuffledQuestions.length - 1;
    if (isLastQuestion) {
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
        return <RulesModal onStartQuiz={startQuiz} />;
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
          />
        );
      case 'completed':
        return <CompletionScreen name={studentName} />;
      default:
        return <WelcomeScreen onNameSubmit={handleNameSubmit} />;
    }
  };

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-gray-900 overflow-hidden p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-30"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="z-10 w-full max-w-2xl">
        {renderContent()}
      </div>

      {isPaused && <PauseModal countdown={countdown} onResumeRequest={handleResumeRequest} />}

      <style>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </main>
  );
}
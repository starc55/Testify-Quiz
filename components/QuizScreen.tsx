import React, { useState, useEffect, FormEvent } from 'react';
import type { QuizQuestion } from '../types';
import ClockIcon from './icons/ClockIcon';
import { QUIZ_DURATION_SECONDS } from '../constants';

interface QuizScreenProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (selectedOption: string) => void;
  timeLeft: number;
  isPaused: boolean;
}

const QuizScreen: React.FC<QuizScreenProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  timeLeft,
  isPaused,
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [writtenAnswer, setWrittenAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // Constants for the circular progress bar
  const CIRCLE_RADIUS = 26;
  const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
  const progressOffset = CIRCUMFERENCE - (timeLeft / QUIZ_DURATION_SECONDS) * CIRCUMFERENCE;

  useEffect(() => {
    setSelected(null);
    setWrittenAnswer('');
    setIsAnswered(false);
    setIsCorrect(null);
    setIsAnimating(false);
  }, [question]);

  const playAnswerSound = (isCorrect: boolean) => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.3);

    if (isCorrect) {
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
      oscillator.frequency.exponentialRampToValueAtTime(783.99, audioContext.currentTime + 0.1); // G5
    } else {
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(220, audioContext.currentTime); // A3
      oscillator.frequency.exponentialRampToValueAtTime(110, audioContext.currentTime + 0.2); // A2
    }
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  };
  
  const checkAnswer = (userAnswer: string): boolean => {
    const processedAnswer = userAnswer.trim().toLowerCase();
     if (Array.isArray(question.correctAnswer)) {
      return question.correctAnswer.map(ans => ans.toLowerCase()).includes(processedAnswer);
    } else {
      return processedAnswer === (question.correctAnswer as string).toLowerCase();
    }
  }

  const handleSubmit = (answer: string) => {
    if (isAnswered || isPaused) return;
    
    setIsAnswered(true);
    setSelected(answer);

    const correct = checkAnswer(answer);
    setIsCorrect(correct);
    playAnswerSound(correct);
    
    setTimeout(() => {
      setIsAnimating(true);
    }, 800);

    setTimeout(() => {
      onAnswer(answer);
    }, 800 + 400);
  };
  
  const handleWrittenSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (writtenAnswer.trim()) {
       handleSubmit(writtenAnswer.trim());
    }
  }

  const getOptionClasses = (option: string) => {
    if (!isAnswered) {
      return 'bg-white/10 border-white/20 hover:bg-white/20';
    }
    if (option === selected) {
      return isCorrect
        ? 'bg-green-500/50 border-green-500 text-white'
        : 'bg-red-500/50 border-red-500 text-white';
    }
    if (checkAnswer(option)) {
        return 'bg-green-500/50 border-green-500 text-white';
    }
    return 'bg-white/5 border-white/10 text-gray-400 cursor-not-allowed';
  };
  
  const getInputClasses = () => {
    if (!isAnswered) {
      return 'bg-white/10 border-white/20 focus:ring-purple-500';
    }
    return isCorrect
      ? 'bg-green-500/20 border-green-500 text-white ring-green-500'
      : 'bg-red-500/20 border-red-500 text-white ring-red-500';
  }

  const timerColor = timeLeft <= 10 ? 'text-red-500' : 'text-gray-200';
  
  let progressCircleColor = 'text-purple-400';
  if (timeLeft <= QUIZ_DURATION_SECONDS * 0.25) {
    progressCircleColor = 'text-yellow-400';
  }
  if (timeLeft <= 10) {
    progressCircleColor = 'text-red-500';
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progressPercentage = (questionNumber / totalQuestions) * 100;

  const animationClasses = isAnimating
    ? 'opacity-0 scale-95'
    : 'opacity-100 scale-100';

  return (
    <div className={`p-6 md:p-8 bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg text-white transition-all duration-300 ease-in-out ${animationClasses} ${isPaused ? 'filter blur-sm pointer-events-none' : ''}`}>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-300 font-medium">
          Savol {questionNumber} / {totalQuestions}
        </p>
        <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 60 60">
                <g transform="rotate(-90 30 30)">
                    <circle
                        className="text-white/10"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="transparent"
                        r={CIRCLE_RADIUS}
                        cx="30"
                        cy="30"
                    />
                    <circle
                        className={`${progressCircleColor}`}
                        style={{
                            strokeDasharray: CIRCUMFERENCE,
                            strokeDashoffset: progressOffset,
                            transition: 'stroke-dashoffset 1s linear, stroke 0.3s ease',
                        }}
                        strokeWidth="4"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r={CIRCLE_RADIUS}
                        cx="30"
                        cy="30"
                    />
                </g>
            </svg>
            <div className={`absolute flex flex-col items-center justify-center ${timerColor}`}>
                <ClockIcon className="w-5 h-5" />
                <span className="font-bold text-sm tracking-wide mt-0.5">{minutes}:{seconds.toString().padStart(2, '0')}</span>
            </div>
        </div>
      </div>
      
      <div
        role="progressbar"
        aria-label="Quiz progress"
        aria-valuenow={questionNumber}
        aria-valuemin={1}
        aria-valuemax={totalQuestions}
        className="w-full bg-white/10 rounded-full h-2.5 mb-6"
      >
        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <h2 id="question-heading" className="text-2xl md:text-3xl font-semibold mb-8 h-24 flex items-center">{question.question}</h2>

      {question.type === 'multiple-choice' && question.options && (
        <div role="radiogroup" aria-labelledby="question-heading" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => handleSubmit(option)}
              disabled={isAnswered || isPaused}
              role="radio"
              aria-checked={selected === option}
              className={`p-4 rounded-lg border text-left font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none ${getOptionClasses(option)}`}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {question.type === 'fill-in-the-blank' && (
        <form onSubmit={handleWrittenSubmit} className="flex flex-col sm:flex-row gap-4 items-center">
           <input
              type="text"
              value={writtenAnswer}
              onChange={(e) => setWrittenAnswer(e.target.value)}
              placeholder="Javobingizni yozing"
              disabled={isAnswered || isPaused}
              required
              className={`w-full rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${getInputClasses()}`}
            />
            <button
              type="submit"
              disabled={!writtenAnswer.trim() || isAnswered || isPaused}
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800/50 disabled:cursor-not-allowed disabled:transform-none text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Tekshirish
            </button>
        </form>
      )}

    </div>
  );
};

export default QuizScreen;
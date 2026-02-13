import React, { useState, useEffect, FormEvent } from 'react';
import type { QuizQuestion, Theme } from '../types';
import ClockIcon from './icons/ClockIcon';
import { QUIZ_DURATION_SECONDS } from '../constants';

interface QuizScreenProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (selectedOption: string) => void;
  timeLeft: number;
  isPaused: boolean;
  theme: Theme;
}

const QuizScreen: React.FC<QuizScreenProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  timeLeft,
  isPaused,
  theme,
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [writtenAnswer, setWrittenAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const CIRCLE_RADIUS = 28;
  const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
  const progressPercentage = timeLeft / QUIZ_DURATION_SECONDS;
  const progressOffset = CIRCUMFERENCE - progressPercentage * CIRCUMFERENCE;
  
  const MAX_CHAR_HINT = 40;

  useEffect(() => {
    setSelected(null);
    setWrittenAnswer('');
    setIsAnswered(false);
    setIsCorrect(null);
    setIsExiting(false);
    setIsShaking(false);
  }, [question]);

  const playAnswerSound = (isCorrect: boolean) => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.3);

    if (isCorrect) {
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(783.99, audioContext.currentTime + 0.1);
    } else {
      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(220, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(110, audioContext.currentTime + 0.2);
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
      setIsExiting(true);
    }, 1000);

    setTimeout(() => {
      onAnswer(answer);
    }, 1400);
  };
  
  const handleWrittenSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (writtenAnswer.trim()) {
       handleSubmit(writtenAnswer.trim());
    } else {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  }

  const getOptionClasses = (option: string) => {
    if (!isAnswered) {
      return 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-indigo-500/10 shadow-lg';
    }
    if (option === selected) {
      return isCorrect
        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
        : 'bg-rose-500/20 border-rose-500 text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.2)]';
    }
    if (checkAnswer(option)) {
        return 'bg-emerald-500/20 border-emerald-500 text-emerald-400';
    }
    return 'bg-white/5 border-white/5 text-slate-500 cursor-not-allowed';
  };
  
  const getInputClasses = () => {
    if (!isAnswered) {
      return isShaking 
        ? 'bg-slate-800/50 border-rose-500 ring-2 ring-rose-500/20' 
        : 'bg-slate-800/50 border-white/10 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10';
    }
    return isCorrect
      ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400'
      : 'bg-rose-500/10 border-rose-500 text-rose-400';
  }

  const isLowTime = timeLeft < 20;
  const timerTextColor = timeLeft <= 10 ? 'text-rose-500' : 'text-slate-200';
  
  let progressCircleColor = theme.timerCircle.base;
  if (timeLeft <= QUIZ_DURATION_SECONDS * 0.25) {
    progressCircleColor = theme.timerCircle.warn;
  }
  if (timeLeft <= 10) {
    progressCircleColor = theme.timerCircle.danger;
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const quizProgress = (questionNumber / totalQuestions) * 100;
  const charProgress = Math.min((writtenAnswer.length / MAX_CHAR_HINT) * 100, 100);

  return (
    <div className={`relative w-full transition-all duration-500 ${isPaused ? 'scale-95 blur-md pointer-events-none' : 'scale-100 blur-0'}`}>
      <div className="bg-[#1e293b]/40 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
        
        {/* Header Section */}
        <div className="p-5 sm:p-8 border-b border-white/5 flex items-center justify-between">
          <div className="space-y-1.5">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-indigo-400 uppercase leading-none block">{questionNumber}-savol ({totalQuestions} dan)</span>
            <div className="w-24 sm:w-32 h-1.5 bg-white/5 rounded-full overflow-hidden">
               <div className={`h-full bg-gradient-to-r ${theme.progressBar} transition-all duration-1000`} style={{ width: `${quizProgress}%` }}></div>
            </div>
          </div>

          <div className="relative group">
            <div className={`absolute inset-0 bg-current opacity-20 blur-xl rounded-full transition-colors duration-500 ${progressCircleColor}`}></div>
            <div className="relative w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 72 72">
                <circle cx="36" cy="36" r={CIRCLE_RADIUS} stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/5" />
                <circle cx="36" cy="36" r={CIRCLE_RADIUS} stroke="currentColor" strokeWidth="4" fill="transparent"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={progressOffset}
                  strokeLinecap="round"
                  className={`${progressCircleColor} transition-all duration-1000 ease-linear`}
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center leading-none">
                <span className={`text-base sm:text-xl font-bold tracking-tighter ${timerTextColor}`}>
                  {minutes}:{seconds.toString().padStart(2, '0')}
                </span>
                <span className="text-[8px] sm:text-[10px] uppercase font-black text-slate-500 mt-0.5">Vaqt</span>
              </div>
            </div>
          </div>
        </div>

        {/* Question Body */}
        <div className="p-6 sm:p-10 md:p-12">
          <div key={question.question} className={isExiting ? 'animate-slide-out' : 'animate-slide-in'}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 sm:mb-10 leading-tight tracking-tight min-h-[4rem] sm:min-h-[5rem]">
              {question.question}
            </h2>

            {question.type === 'multiple-choice' && question.options && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {question.options.map((option, index) => (
                  <button
                    key={option}
                    onClick={() => handleSubmit(option)}
                    disabled={isAnswered || isPaused}
                    className={`group relative p-4 sm:p-5 rounded-xl sm:rounded-2xl border text-left font-bold transition-all duration-300 transform active:scale-[0.98] animate-fade-up ${getOptionClasses(option)}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center text-[10px] sm:text-xs text-slate-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-base sm:text-lg">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {question.type === 'fill-in-the-blank' && (
              <div className="w-full max-w-xl mx-auto sm:mx-0">
                <form onSubmit={handleWrittenSubmit} className="relative group">
                   <input
                    type="text"
                    value={writtenAnswer}
                    onChange={(e) => setWrittenAnswer(e.target.value)}
                    placeholder="Javobni yozing..."
                    disabled={isAnswered || isPaused}
                    className={`w-full bg-slate-800/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-lg sm:text-xl font-bold text-white placeholder-slate-500 border-2 transition-all outline-none ${getInputClasses()} ${isShaking ? 'animate-shake' : ''}`}
                    autoFocus
                  />
                  <div className="mt-4 flex items-center justify-between px-2">
                    <div className="flex-grow max-w-[150px] sm:max-w-xs h-1 bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-indigo-500 transition-all duration-300" style={{ width: `${charProgress}%` }}></div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">{writtenAnswer.length} belgi</span>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isAnswered || isPaused || !writtenAnswer.trim()}
                    className={`mt-6 sm:mt-8 w-full ${theme.button} text-white font-black py-4 sm:py-5 px-8 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-2xl disabled:opacity-30 transform hover:scale-[1.02] active:scale-95 uppercase tracking-widest text-xs sm:text-sm`}
                  >
                    Tasdiqlash
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes slide-out {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to { opacity: 0; transform: translateY(-20px) scale(0.95); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .animate-slide-in { animation: slide-in 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-slide-out { animation: slide-out 0.4s cubic-bezier(0.4, 0, 1, 1) forwards; }
        .animate-fade-up { animation: fade-up 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; opacity: 0; }
        .animate-shake { animation: shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both; }
      `}</style>
    </div>
  );
};

export default QuizScreen;

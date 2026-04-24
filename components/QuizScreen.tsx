import React, { useState, useEffect, FormEvent } from 'react';
import type { QuizQuestion, Theme } from '../types';
import { QUIZ_DURATION_SECONDS } from '../constants';

interface QuizScreenProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (selectedOption: string) => void;
  timeLeft: number;
  isPaused: boolean;
  theme: Theme;
  studentName: string;
}

const QuizScreen: React.FC<QuizScreenProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  timeLeft,
  isPaused,
  theme,
  studentName,
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
  
  let progressCircleColor = theme.timerCircle.base;
  let timerTextColor = theme.timerCircle.base;

  if (timeLeft <= 60) {
    progressCircleColor = theme.timerCircle.warn; // Yellow
    timerTextColor = 'text-yellow-400';
  }
  if (timeLeft <= 30) {
    progressCircleColor = 'text-orange-500'; // Orange
    timerTextColor = 'text-orange-500';
  }
  if (timeLeft <= 10) {
    progressCircleColor = theme.timerCircle.danger; // Red
    timerTextColor = 'text-rose-500';
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const quizProgress = (questionNumber / totalQuestions) * 100;
  const charProgress = Math.min((writtenAnswer.length / MAX_CHAR_HINT) * 100, 100);

  return (
    <div className={`relative w-full transition-all duration-500 ${isPaused ? 'scale-95 blur-xl pointer-events-none' : 'scale-100 blur-0'}`}>
      <div className="relative bg-black/40 backdrop-blur-3xl border border-cyan-500/30 overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)]">
        
        {/* HUD Frame Corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500"></div>

        {/* Tactical Header */}
        <div className="p-4 sm:p-6 border-b border-cyan-500/20 flex flex-col sm:flex-row items-center gap-4 sm:justify-between relative bg-cyan-500/[0.02]">
          <div className="flex flex-col items-center sm:items-start space-y-2 w-full sm:w-auto">
            <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 bg-cyan-500 animate-ping"></div>
               <span className="text-[10px] font-black tracking-[0.4em] text-cyan-500 uppercase">
                 SAVOL: {questionNumber} // {totalQuestions}
               </span>
            </div>
            <div className="relative w-full sm:w-48 h-1 bg-cyan-950/50">
               <div 
                 className={`h-full bg-cyan-500 transition-all duration-1000 relative shadow-[0_0_10px_#06b6d4]`} 
                 style={{ width: `${quizProgress}%` }}
               >
                 <div className="absolute top-0 right-0 w-1 h-3 bg-cyan-500 -mt-1 shadow-[0_0_15px_#06b6d4]"></div>
               </div>
            </div>
          </div>

          {/* HUD Timer */}
          <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 group">
            <div className={`absolute inset-0 border border-cyan-500/20 ${timeLeft <= 15 ? 'animate-pulse' : ''}`}></div>
            <div className="absolute inset-2 border border-dashed border-cyan-500/10 animate-spin-slow"></div>
            
            <svg className="absolute inset-0 w-full h-full -rotate-90 p-1" viewBox="0 0 100 100">
               <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-cyan-900/20" />
               <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="transparent"
                 strokeDasharray="282.7"
                 strokeDashoffset={282.7 - (progressPercentage * 282.7)}
                 strokeLinecap="square"
                 className={`${progressCircleColor} transition-all duration-1000 ease-linear`}
               />
            </svg>
            
            <div className="relative flex flex-col items-center justify-center leading-none">
              <span className={`text-base sm:text-lg font-black tracking-tighter ${timerTextColor} font-mono`}>
                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Tactical Body */}
        <div className="p-4 sm:p-8 relative">
          {/* Decorative HUD Lines */}
          <div className="absolute top-0 right-0 w-20 h-20 border-r border-t border-cyan-500/10 -mr-10 -mt-10"></div>
          
          <div key={question.question} className={isExiting ? 'opacity-0 -translate-x-10 transition-all duration-500' : 'animate-cyber-slide'}>
            <div className="mb-4 sm:mb-6 flex gap-2">
               <div className="w-1 h-6 bg-cyan-500"></div>
               <h2 className="text-lg sm:text-2xl font-black text-white uppercase italic tracking-tight">
                 {question.question}
               </h2>
            </div>
 
            {question.type === 'multiple-choice' && question.options && (
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {question.options.map((option, index) => (
                  <button
                    key={option}
                    onClick={() => handleSubmit(option)}
                    disabled={isAnswered || isPaused}
                    className={`group relative p-3 sm:p-4 border transition-all duration-200 text-left uppercase flex items-center justify-between ${getOptionClasses(option)}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] sm:text-xs font-black text-cyan-500/50 group-hover:text-cyan-400">[{index + 1}]</span>
                      <span className="text-xs sm:text-sm font-bold tracking-widest text-white">{option}</span>
                    </div>
                    <div className="w-2 h-2 border border-cyan-500 group-hover:bg-cyan-500 transition-all"></div>
                  </button>
                ))}
              </div>
            )}

            {question.type === 'fill-in-the-blank' && (
              <div className="w-full">
                <form onSubmit={handleWrittenSubmit} className="relative">
                   <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500/20"></div>
                   <input
                    type="text"
                    value={writtenAnswer}
                    onChange={(e) => setWrittenAnswer(e.target.value)}
                    placeholder="JAVOBNI_KIRITING..."
                    disabled={isAnswered || isPaused}
                    className={`w-full bg-black/50 p-6 text-xl font-black text-cyan-400 placeholder-cyan-900 border-l border-cyan-500 focus:outline-none focus:bg-cyan-500/5 transition-all ${getInputClasses()} uppercase tracking-[0.2em]`}
                    autoFocus
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex-grow max-w-xs h-0.5 bg-cyan-950">
                       <div className="h-full bg-cyan-500 transition-all duration-300" style={{ width: `${charProgress}%` }}></div>
                    </div>
                    <div className="text-[10px] font-black text-cyan-500/50">BITLAR: {writtenAnswer.length * 8}</div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isAnswered || isPaused || !writtenAnswer.trim()}
                    className={`mt-10 w-full py-6 bg-cyan-500 text-black font-black uppercase tracking-[0.4em] hover:bg-cyan-400 active:scale-95 transition-all disabled:opacity-20`}
                  >
                    TASDIQLASH
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Footer Technical Metadata */}
        <div className="px-6 py-2 bg-cyan-500/5 border-t border-cyan-500/10 flex justify-between">
           <span className="text-[8px] text-cyan-500/40 uppercase font-mono tracking-widest font-bold">Shifrlangan aloqa faol</span>
           <span className="text-[8px] text-cyan-500/40 uppercase font-mono tracking-widest font-bold">Foydalanuvchi: {studentName.toUpperCase() || 'ANOM_USER'}</span>
        </div>
      </div>

      <style>{`
        @keyframes cyber-slide {
          from { opacity: 0; transform: translateX(-20px); filter: skewX(-5deg); }
          to { opacity: 1; transform: translateX(0); filter: skewX(0); }
        }
        .animate-cyber-slide { animation: cyber-slide 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
      `}</style>
    </div>
  );
};

export default QuizScreen;

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
      return 'bg-white border-slate-100 hover:border-indigo-200 hover:bg-indigo-50 active:scale-[0.99]';
    }
    if (option === selected) {
      return isCorrect
        ? 'bg-emerald-50 border-emerald-500 text-emerald-700 ring-2 ring-emerald-100 animate-correct'
        : 'bg-rose-50 border-rose-500 text-rose-700 ring-2 ring-rose-100 animate-shake';
    }
    if (checkAnswer(option)) {
        return 'bg-emerald-50 border-emerald-300 text-emerald-600';
    }
    return 'bg-slate-50 border-slate-50 text-slate-400 opacity-50 cursor-not-allowed';
  };
  
  const getInputClasses = () => {
    if (!isAnswered) {
      return isShaking 
        ? 'bg-rose-50 border-rose-500 ring-2 ring-rose-100' 
        : 'bg-slate-50 border-slate-100 focus:border-indigo-500 focus:bg-white';
    }
    return isCorrect
      ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
      : 'bg-rose-50 border-rose-500 text-rose-700';
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const quizProgress = (questionNumber / totalQuestions) * 100;

  return (
    <div className={`relative w-full max-w-2xl mx-auto transition-all duration-700 cubic-bezier[0.16,1,0.3,1] ${isPaused ? 'scale-95 blur-xl pointer-events-none' : 'scale-100'}`}>
      <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 overflow-hidden relative border border-white">
        
        {/* Progress and Timer Header */}
        <div className="p-4 sm:p-6 flex items-center justify-between gap-4 bg-slate-50/50 border-b border-slate-100">
          <div className="flex-grow max-w-[200px]">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                Savol {questionNumber} / {totalQuestions}
              </span>
              <span className="text-[9px] font-extrabold text-indigo-600">
                {Math.round(quizProgress)}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
               <div 
                 className="h-full bg-indigo-600 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                 style={{ width: `${quizProgress}%` }}
               />
            </div>
          </div>

          <div className={`flex flex-col items-center justify-center py-2 px-4 rounded-xl border-2 transition-all duration-500 cubic-bezier[0.16,1,0.3,1] ${
            timeLeft < 30 ? 'bg-rose-50 border-rose-200 text-rose-600 animate-pulse' : 
            timeLeft < 60 ? 'bg-amber-50 border-amber-200 text-amber-600' : 
            'bg-indigo-50 border-indigo-100 text-indigo-600'
          }`}>
            <span className="text-[9px] font-black uppercase leading-none mb-0.5">Vaqt</span>
            <span className="text-lg sm:text-xl font-black italic tracking-tighter tabular-nums leading-none">
              {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Question Area */}
        <div className="p-5 sm:p-8">
          <div key={question.question} className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isExiting ? 'opacity-0 -translate-x-16 blur-sm' : 'animate-slide-up'}`}>
            {question.passage && (
              <div className="mb-6 p-4 sm:p-5 bg-indigo-50/40 border border-indigo-100/60 rounded-2 * 1.25rem rounded-2xl max-h-[180px] overflow-y-auto text-slate-700 text-sm leading-relaxed font-medium shadow-inner">
                <div className="flex items-center gap-1.5 mb-2.5 text-indigo-600 font-extrabold text-[10px] uppercase tracking-widest border-b border-indigo-100/40 pb-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Matnni o'qing (Reading Passage)</span>
                </div>
                {question.passage}
              </div>
            )}

            <div className="mb-6">
               <h2 className="text-lg sm:text-xl font-extrabold text-slate-800 tracking-tight leading-tight">
                 {question.question}
               </h2>
            </div>
 
            {question.type === 'multiple-choice' && question.options && (
              <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
                {question.options.map((option, index) => (
                  <button
                    key={option}
                    onClick={() => handleSubmit(option)}
                    disabled={isAnswered || isPaused}
                    className={`group relative p-3.5 sm:p-4 bg-white border-2 rounded-2xl transition-all duration-300 cubic-bezier[0.16,1,0.3,1] text-left flex items-center gap-3.5 ${getOptionClasses(option)}`}
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black border-2 transition-all duration-300 ${
                      selected === option ? 'bg-white border-transparent' : 'bg-slate-100 border-transparent text-slate-400 group-hover:bg-indigo-600 group-hover:text-white'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-sm font-bold flex-grow">{option}</span>
                    {isAnswered && checkAnswer(option) && (
                      <svg className="w-5 h-5 text-emerald-500 animate-in zoom-in duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}

            {question.type === 'fill-in-the-blank' && (
              <div className="w-full">
                <form onSubmit={handleWrittenSubmit} className="space-y-4">
                   <input
                    type="text"
                    value={writtenAnswer}
                    onChange={(e) => setWrittenAnswer(e.target.value)}
                    placeholder="Javobni yozing..."
                    disabled={isAnswered || isPaused}
                    className={`w-full py-4 px-6 text-lg font-bold rounded-2xl border-2 transition-all duration-500 cubic-bezier[0.16,1,0.3,1] outline-none ${getInputClasses()}`}
                    autoFocus
                  />
                  
                  <button
                    type="submit"
                    disabled={isAnswered || isPaused || !writtenAnswer.trim()}
                    className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 active:scale-[0.98] transition-all duration-500 cubic-bezier[0.16,1,0.3,1] shadow-xl shadow-indigo-100 disabled:opacity-30 flex items-center justify-center gap-3 group"
                  >
                    <span>Tasdiqlash</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Footer User Info */}
        <div className="px-6 sm:px-8 py-3 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
           <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{studentName} o'quvchi testi</span>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slide-up { animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .rounded-2.5xl { border-radius: 1.25rem; }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-6px); }
          40%, 80% { transform: translateX(6px); }
        }
        .animate-shake { animation: shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both; }
        @keyframes correct {
          0% { transform: scale(1); }
          40% { transform: scale(1.04); }
          60% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        .animate-correct { animation: correct 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
      `}</style>
    </div>
  );
};

export default QuizScreen;

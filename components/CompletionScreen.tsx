
import React, { useState } from 'react';
import { motion } from 'motion/react';

interface AnswerRecord {
  question: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

interface CompletionScreenProps {
  name: string;
  score: number;
  totalQuestions: number;
  userAnswers: AnswerRecord[];
}

const CompletionScreen: React.FC<CompletionScreenProps> = ({ name, score, totalQuestions, userAnswers }) => {
  const [showDetails, setShowDetails] = useState(false);
  const percentage = Math.round((score / totalQuestions) * 100);

  const getScoreMessage = () => {
    if (percentage >= 90) return "Ajoyib natija! Siz haqiqiy bilimdonsiz!";
    if (percentage >= 70) return "Yaxshi natija! Bilimingiz ancha mustahkam.";
    if (percentage >= 50) return "Yomon emas, lekin hali o'rganish kerak bo'lgan narsalar bor.";
    return "Xato va kamchiliklar ustida ko'proq ishlashingiz kerak.";
  };

  return (
    <div className="w-full max-w-xl mx-auto animate-container-fade-in-up">
      <div className="text-center text-white p-6 sm:p-8 bg-slate-900/60 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden">
        {/* Decorative Light Bubbles */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full"></div>

        <div className="relative z-10">
          <div className="flex justify-center mb-8">
            <motion.div 
              animate={{ 
                scale: showDetails ? [1, 1.2, 1] : 1,
                rotate: showDetails ? [0, 10, -10, 0] : 0
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`p-1 rounded-full ${percentage >= 50 ? 'bg-emerald-500/20' : 'bg-rose-500/20'}`}
            >
              <svg className="w-20 h-20 sm:w-24 sm:h-24" viewBox="0 0 52 52">
                <circle 
                  className={`animate-stroke fill-none stroke-[3] ${percentage >= 50 ? 'stroke-emerald-500' : 'stroke-rose-500'}`} 
                  cx="26" cy="26" r="25" 
                  style={{ strokeDasharray: 166, strokeDashoffset: 166 }} 
                />
                <path 
                  className="animate-stroke fill-none stroke-[3] stroke-white" 
                  d={percentage >= 50 ? "M14.1 27.2l7.1 7.2 16.7-16.8" : "M16 16l20 20M36 16L16 36"} 
                  style={{ strokeDasharray: 48, strokeDashoffset: 48 }} 
                />
              </svg>
            </motion.div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black mb-3 tracking-tighter animate-text-fade-in" style={{ animationDelay: '0.8s' }}>
            {percentage >= 50 ? 'Tabriklaymiz!' : 'Test yakunlandi'}
          </h1>
          
          <p className="text-xl sm:text-2xl font-bold text-indigo-400 mb-1 animate-text-fade-in" style={{ animationDelay: '1s' }}>
            {name}
          </p>

          <div className="grid grid-cols-2 gap-3 my-6 animate-text-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="bg-white/5 rounded-xl p-4 border border-white/5 shadow-inner">
               <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest block mb-1 text-[8px] sm:text-[10px]">To'g'ri javoblar</span>
               <span className="text-2xl sm:text-3xl font-black text-emerald-400">{score}</span>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/5 shadow-inner">
               <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest block mb-1 text-[8px] sm:text-[10px]">Natija</span>
               <span className="text-2xl sm:text-3xl font-black text-indigo-400">{percentage}%</span>
            </div>
          </div>

          <p className="text-base text-slate-300 mb-6 font-medium animate-text-fade-in leading-relaxed" style={{ animationDelay: '1.4s' }}>
            {getScoreMessage()}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 animate-text-fade-in" style={{ animationDelay: '1.6s' }}>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowDetails(!showDetails)}
              className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black py-3 px-6 rounded-xl transition-all duration-300 uppercase tracking-widest text-[10px] sm:text-xs"
            >
              {showDetails ? 'Yopish' : 'Xatolarni ko\'rish'}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.reload()}
              className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-black py-3 px-6 rounded-xl transition-all duration-300 shadow-xl shadow-indigo-600/20 uppercase tracking-widest text-[10px] sm:text-xs"
            >
              Qaytadan topshirish
            </motion.button>
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="mt-8 space-y-4 animate-fade-up">
          <h3 className="text-xl font-black text-white px-4 flex items-center gap-3">
             <div className="w-1 h-6 bg-indigo-600 rounded-full"></div>
             Batafsil tahlil
          </h3>
          <div className="space-y-3">
            {userAnswers.map((record, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-3xl border transition-all duration-500 ${
                  record.isCorrect 
                    ? 'bg-emerald-500/5 border-emerald-500/20' 
                    : 'bg-rose-500/5 border-rose-500/20'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm ${
                    record.isCorrect ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="space-y-4 w-full">
                    <p className="text-white text-lg font-bold leading-tight">{record.question}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest">Sizning javobingiz</span>
                        <div className={`p-3 rounded-xl border font-bold text-sm ${
                          record.isCorrect ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                        }`}>
                          {record.selectedAnswer}
                        </div>
                      </div>
                      
                      {!record.isCorrect && (
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest">To'g'ri javob</span>
                          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl font-bold text-sm text-emerald-400">
                            {record.correctAnswer}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .animate-stroke {
          animation: stroke 0.8s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }

        .animate-container-fade-in-up {
          animation: container-fade-in-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        
        .animate-text-fade-in {
          opacity: 0;
          animation: text-fade-in 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .animate-fade-up {
          animation: text-fade-in 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        @keyframes stroke {
          to { stroke-dashoffset: 0; }
        }

        @keyframes container-fade-in-up {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes text-fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default CompletionScreen;


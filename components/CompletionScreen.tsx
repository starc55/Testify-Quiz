
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

  return (
    <div className="w-full max-w-lg mx-auto animate-cyber-ready">
      <div className="relative bg-black/40 backdrop-blur-3xl border border-cyan-500/30 overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)]">
        {/* Decorative Grid Overlays */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
        
        <div className="relative z-10 p-8 sm:p-12">
          {/* Header Metadata */}
          <div className="mb-10 flex justify-between items-start border-b border-cyan-500/20 pb-6">
            <div>
              <p className="text-[10px] font-black tracking-[0.4em] text-cyan-500 uppercase mb-2">DIAGNOSTIKA_NATIJASI // 100%</p>
              <h1 className="text-3xl sm:text-4xl font-black text-white italic uppercase">{percentage >= 50 ? "Muvaffaqiyat" : "Mag'lubiyat"}</h1>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-white/40 uppercase mb-1 tracking-widest">Operator</p>
              <p className="text-sm font-bold text-cyan-400 uppercase tracking-widest">{name}</p>
            </div>
          </div>

          {/* Results Metric */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative w-40 h-40 flex items-center justify-center mb-6">
               <div className={`absolute inset-0 border-2 rounded-full ${percentage >= 50 ? 'border-cyan-500' : 'border-rose-500'} animate-pulse`}></div>
               <div className={`absolute inset-2 border border-dashed rounded-full ${percentage >= 50 ? 'border-cyan-500/30' : 'border-rose-500/30'} animate-spin-slow`}></div>
               <div className="text-center">
                  <span className={`text-5xl font-black italic tracking-tighter ${percentage >= 50 ? 'text-cyan-400' : 'text-rose-500'}`}>{percentage}%</span>
                  <div className="text-[8px] font-black text-white/40 uppercase tracking-[0.3em] mt-1">Aniqlik</div>
               </div>
            </div>
            <p className="text-center text-xs font-bold text-cyan-200/60 uppercase tracking-widest leading-relaxed max-w-sm">
               {percentage >= 90 ? 'Tanqidiy tahlil yakunlandi. Til mahorati aniqlandi.' : 
                percentage >= 50 ? 'Ma\'lumotlar tasdiqlandi. Tilning tarkibiy bilimi yetarli ekanligi tasdiqlandi.' :
                'Qayta sozlash talab qilinadi. Til oqimida tarkibiy mantiqiy xatolar aniqlandi.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-cyan-500/20 mb-10">
            <div className="bg-black/60 p-6 flex flex-col items-center justify-center">
               <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.4em] mb-2">NATIJA</span>
               <span className="text-2xl font-black italic text-cyan-500">{score} / {totalQuestions}</span>
            </div>
            <div className="bg-black/60 p-6 flex flex-col items-center justify-center">
               <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.4em] mb-2">VAQT</span>
               <span className="text-2xl font-black italic text-cyan-500">TASDIQLANGAN</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowDetails(!showDetails)}
              className="w-full bg-cyan-500/10 border border-cyan-500/30 py-4 text-cyan-400 font-black uppercase tracking-[0.3em] text-xs hover:bg-cyan-500/20 transition-all"
            >
              [ {showDetails ? 'JURNALNI_YOPISH' : "NATIJALARNI_KO'RISH"} ]
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.reload()}
              className="w-full bg-cyan-500 border border-cyan-500 py-4 text-black font-black uppercase tracking-[0.3em] text-xs transition-all"
            >
              QAYTA_BOSHLASH
            </motion.button>
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="mt-8 space-y-4 animate-cyber-ready">
          <div className="flex items-center gap-3 px-4">
             <div className="h-4 w-4 border border-cyan-500 rotate-45 flex items-center justify-center bg-cyan-500/20 animate-pulse">
                <div className="w-1 h-1 bg-cyan-500"></div>
             </div>
             <h3 className="text-xs font-black text-cyan-500 uppercase tracking-[0.4em]">NATIJALAR_TARIXI</h3>
          </div>
          
          <div className="space-y-4">
            {userAnswers.map((record, index) => (
              <div 
                key={index} 
                className={`relative p-6 border-l-4 border-r border-t border-b bg-black/40 backdrop-blur-xl transition-all duration-500 ${
                  record.isCorrect 
                    ? 'border-l-cyan-500 border-cyan-500/10' 
                    : 'border-l-rose-500 border-rose-500/10'
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">SAVOL_ID: {index + 1}</span>
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 ${record.isCorrect ? 'bg-cyan-500/20 text-cyan-400' : 'bg-rose-500/20 text-rose-500'}`}>
                       {record.isCorrect ? "HOLAT: TO'G'RI" : 'HOLAT: XATO'}
                    </span>
                  </div>
                  
                  <p className="text-white text-lg font-bold tracking-tight uppercase italic">{record.question}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-cyan-500/10 pt-4 mt-2">
                    <div className="space-y-2">
                      <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Sizning_javobingiz</span>
                      <div className={`text-sm font-black italic tracking-widest ${record.isCorrect ? 'text-cyan-400' : 'text-rose-500'}`}>
                        {record.selectedAnswer.toUpperCase()}
                      </div>
                    </div>
                    
                    {!record.isCorrect && (
                      <div className="space-y-2">
                        <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">To'g'ri_javob</span>
                        <div className="text-sm font-black italic tracking-widest text-cyan-400">
                          {record.correctAnswer.toUpperCase()}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes cyber-ready {
          from { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-cyber-ready { animation: cyber-ready 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      `}</style>
    </div>
  );
};

export default CompletionScreen;


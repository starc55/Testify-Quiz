import React from 'react';
import { QUIZ_VOCABULARY } from '../constants';

interface VocabularyScreenProps {
  onStartQuiz: () => void;
}

const VocabularyScreen: React.FC<VocabularyScreenProps> = ({ onStartQuiz }) => {
  return (
    <div className="w-full max-w-xl mx-auto animate-cyber-ready">
      <div className="relative bg-black/40 backdrop-blur-3xl border border-cyan-500/30 overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)]">
        {/* Frame Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500"></div>
        
        <div className="p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-8 bg-cyan-500"></div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-[0.2em] uppercase italic">
              LUG'AT_MA'LUMOTLARI
            </h2>
          </div>
          
          <p className="text-[10px] font-bold text-cyan-500/60 uppercase tracking-[0.3em] mb-10 leading-relaxed border-b border-cyan-500/10 pb-6">
            Testni boshlashdan oldin muhim terminologiyani ko'rib chiqing. Asosiy so'zlarga e'tibor bering.
          </p>
          
          <div className="space-y-px bg-cyan-500/10 border border-cyan-500/20 max-h-80 overflow-y-auto custom-scrollbar mb-10">
            {QUIZ_VOCABULARY.map((item) => (
              <div key={item.term} className="p-6 bg-black/40 hover:bg-cyan-500/5 transition-all group border-b border-cyan-500/5 last:border-b-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-black text-cyan-400 uppercase tracking-widest text-sm mb-1">
                      {item.term}
                    </h3>
                    <p className="text-xs font-bold text-white/70 uppercase">
                      {item.definition}
                    </p>
                  </div>
                  <div className="w-1 h-1 bg-cyan-500/30 group-hover:bg-cyan-500 group-hover:animate-ping transition-all"></div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onStartQuiz}
            className="w-full bg-cyan-500 py-5 text-black font-black uppercase tracking-[0.4em] text-sm hover:bg-cyan-400 active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]"
          >
            ALOQANI_BOSHLASH
          </button>
        </div>
      </div>

      <style>{`
        @keyframes cyber-ready {
          from { opacity: 0; transform: translateY(20px); filter: blur(8px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-cyber-ready { animation: cyber-ready 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #000; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #06b6d4; }
      `}</style>
    </div>
  );
};

export default VocabularyScreen;

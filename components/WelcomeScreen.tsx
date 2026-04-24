import React, { useState } from 'react';
import { FIXED_THEME } from '../constants';

interface WelcomeScreenProps {
  onNameSubmit: (name: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNameSubmit }) => {
  const [name, setName] = useState('');
  const [isExiting, setIsExiting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && !isExiting) {
      setIsExiting(true);
      setTimeout(() => onNameSubmit(name), 600);
    }
  };

  return (
    <div className={`w-full max-w-md mx-auto transition-all duration-700 ${isExiting ? 'opacity-0 scale-95 translate-x-20' : 'animate-mount'}`}>
      <div className="relative">
        <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-cyan-500 z-20"></div>
        <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-cyan-500 z-20"></div>
        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-cyan-500 z-20"></div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-cyan-500 z-20"></div>

        <div className="relative p-6 sm:p-10 bg-black/50 backdrop-blur-xl border border-cyan-500/30 overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.1)]">
          <div className="absolute top-0 right-0 p-1.5 text-[7px] text-cyan-500/30 uppercase tracking-widest font-mono select-none">
            TIZIM.v3 // TAYYOR
          </div>
          
          <div className="flex flex-col items-center">
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-cyan-500/10 blur-xl animate-pulse"></div>
              <div className="relative w-12 h-12 border border-cyan-500/50 flex items-center justify-center rotate-45 group">
                <svg className="w-6 h-6 text-cyan-400 -rotate-45 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black mb-3 tracking-[-0.05em] text-white uppercase italic">
              Test<span className="text-cyan-500">ify</span>
            </h1>
            
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-5"></div>

            <p className="text-[10px] sm:text-xs text-cyan-200/40 mb-8 tracking-[0.2em] uppercase font-bold text-center leading-relaxed">
              Grammatika // <span className="text-cyan-400">Asosiy</span>
            </p>

            <form onSubmit={handleSubmit} className="w-full space-y-5">
              <div className="group relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="ISMINGIZ..."
                  className="relative w-full bg-black/40 border border-cyan-500/30 py-3 sm:py-4 px-6 text-cyan-100 text-base sm:text-lg font-bold placeholder-cyan-900/60 focus:outline-none focus:border-cyan-400 transition-all duration-300 uppercase tracking-widest text-center"
                  required
                />
              </div>

              <button
                type="submit"
                className={`${FIXED_THEME.button} w-full py-4 text-sm font-black transition-all duration-300 transform active:scale-[0.98] disabled:opacity-20 uppercase tracking-[0.3em] relative overflow-hidden group`}
                disabled={!name.trim()}
              >
                <span className="relative z-10">BOSHLASH</span>
                <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-cyan-500/10 transition-all duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes mount {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-mount { animation: mount 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;

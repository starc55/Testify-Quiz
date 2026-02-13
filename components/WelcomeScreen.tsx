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
    <div className={`w-full max-w-xl mx-auto transition-all duration-700 ${isExiting ? 'opacity-0 scale-95 -translate-y-4' : 'animate-mount'}`}>
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative p-8 sm:p-10 md:p-14 bg-slate-900/60 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-2xl text-center">
          
          <div className="mb-6 sm:mb-10 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-indigo-600/20 rounded-2xl sm:rounded-3xl border border-indigo-500/30 animate-float">
             <svg className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
             </svg>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 sm:mb-4 tracking-tighter text-white">
            Ingliz Tili <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">Bilimdoni</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 mb-8 sm:mb-12 font-medium">
            Grammatika va lug'at bilimingizni sinab ko'ring.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ismingizni kiriting"
                className="w-full bg-slate-800/40 border border-white/10 rounded-xl sm:rounded-2xl py-4 sm:py-5 px-6 sm:px-8 text-white text-lg sm:text-xl font-bold placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 text-center"
                required
              />
            </div>

            <button
              type="submit"
              className={`${FIXED_THEME.button} w-full text-white text-base sm:text-lg font-black py-4 sm:py-5 px-8 sm:px-10 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-2xl transform hover:scale-[1.02] active:scale-95 disabled:opacity-20 uppercase tracking-widest`}
              disabled={!name.trim()}
            >
              Testni boshlash
            </button>
          </form>
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

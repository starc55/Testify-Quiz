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
      setTimeout(() => onNameSubmit(name), 500);
    }
  };

  return (
    <div className={`text-center text-white transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'animate-fade-in'}`}>
      <div className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-blue-400">
          English Mastery Quiz
        </h1>
        <p className="text-lg text-slate-400 mb-8">
          Grammatika va lug'at bo'yicha bilimlaringizni sinab ko'ring.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ismingizni kiriting"
            className="w-full bg-slate-800/50 border border-white/10 rounded-xl py-4 px-6 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            required
          />

          <button
            type="submit"
            className={`${FIXED_THEME.button} disabled:opacity-50 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-indigo-500/20 transform hover:scale-[1.02] active:scale-95`}
            disabled={!name.trim()}
          >
            Boshladik!
          </button>
        </form>
      </div>

       <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;

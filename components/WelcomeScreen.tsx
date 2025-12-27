
import React, { useState, useEffect } from 'react';
import type { ThemeName } from '../types';
import { THEMES } from '../constants';
import CheckCircleIcon from './icons/CheckCircleIcon';

interface WelcomeScreenProps {
  onNameSubmit: (name: string) => void;
  currentTheme: ThemeName;
  onThemeChange: (theme: ThemeName) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNameSubmit, currentTheme, onThemeChange }) => {
  const [name, setName] = useState('');
  const [isExiting, setIsExiting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && !isExiting) {
      setIsExiting(true);
      setTimeout(() => onNameSubmit(name), 500); // Wait for animation
    }
  };

  const currentThemeData = THEMES[currentTheme];

  return (
    <div className={`text-center text-white transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'animate-fade-in'}`}>
      <div className="p-8 bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg mb-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400">
          Testify Quiz'ga Xush Kelibsiz
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Boshlash uchun ismingizni kiriting.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 justify-center">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ismingiz"
            className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            required
          />

          <button
            type="submit"
            className={`${currentThemeData.button} disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95`}
            disabled={!name.trim()}
          >
            Boshladik!
          </button>
        </form>
      </div>
      
      <div className="p-6 bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg">
        <h3 className="text-sm font-bold mb-6 text-center text-gray-400 uppercase tracking-[0.2em]">Mavzuni tanlang</h3>
        <div className="grid grid-cols-4 gap-4 max-w-sm mx-auto">
          {Object.values(THEMES).map((theme) => (
            <div key={theme.id} className="flex flex-col items-center gap-2">
              <button
                onClick={() => onThemeChange(theme.id)}
                className={`relative w-14 h-14 rounded-2xl transition-all duration-500 ${theme.preview} border-2 overflow-hidden group ${
                  currentTheme === theme.id 
                    ? 'border-white scale-110 shadow-[0_0_20px_rgba(255,255,255,0.2)] ring-4 ring-white/5' 
                    : 'border-white/10 opacity-60 hover:opacity-100 hover:scale-105'
                }`}
                aria-label={`Select ${theme.name} theme`}
              >
                {currentTheme === theme.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] animate-scale-in">
                    <CheckCircleIcon className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                )}
                {/* Visual texture for swatch to make them look "pro" */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-white/10 rounded-full blur-md group-hover:bg-white/20 transition-colors"></div>
                <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-black/20 rounded-full blur-lg"></div>
              </button>
              <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${currentTheme === theme.id ? 'text-white' : 'text-gray-500'}`}>
                {theme.name}
              </span>
            </div>
          ))}
        </div>
      </div>

       <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes scale-in {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;

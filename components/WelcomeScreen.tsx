import React, { useState, useEffect } from 'react';
import type { ThemeName } from '../types';
import { THEMES } from '../constants';

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
            className={`${currentThemeData.button} disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105`}
            disabled={!name.trim()}
          >
            Boshladik!
          </button>
        </form>
      </div>
      
      <div className="p-6 bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-center text-gray-200">Mavzuni tanlang</h3>
        <div className="flex justify-center items-center gap-4">
          {Object.values(THEMES).map((theme) => (
            <button
              key={theme.id}
              onClick={() => onThemeChange(theme.id)}
              className={`w-12 h-12 rounded-full transition-all duration-300 ${theme.preview} border-2 ${currentTheme === theme.id ? 'border-white scale-110' : 'border-transparent hover:scale-110'}`}
              aria-label={`Select ${theme.name} theme`}
            />
          ))}
        </div>
      </div>

       <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;

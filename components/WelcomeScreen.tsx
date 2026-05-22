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
    <div className={`w-full max-w-md mx-auto transition-all duration-800 cubic-bezier[0.16,1,0.3,1] ${isExiting ? 'opacity-0 scale-95 -translate-y-12 blur-sm' : 'animate-mount'}`}>
      <div className="bg-white/80 backdrop-blur-xl border border-white p-6 sm:p-10 rounded-[2rem] shadow-2xl shadow-indigo-100/50 overflow-hidden relative">
        {/* Soft decorative circles */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-200 mb-6 transform -rotate-6 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:rotate-0 hover:scale-110">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18 18.246 18.477 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold mb-1 text-slate-800 text-center tracking-tight">
            English <span className="text-indigo-600">Mastery</span>
          </h1>
          <p className="text-slate-500 font-medium mb-8 text-center text-sm">
            Grammatika bilimingizni sinab ko'ring
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Ismingizni kiriting</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masalan: Azizbek"
                className="w-full bg-slate-50 border-2 border-slate-100 py-3.5 px-5 rounded-2xl text-slate-700 text-base font-semibold placeholder-slate-300 focus:outline-none focus:border-indigo-400 focus:bg-white transition-all duration-500 cubic-bezier[0.16,1,0.3,1]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl text-base font-bold shadow-xl shadow-indigo-100 transform active:scale-[0.98] transition-all duration-500 cubic-bezier[0.16,1,0.3,1] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
              disabled={!name.trim()}
            >
              <span>Boshlash</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>

          <div className="mt-8 flex items-center gap-5">
            <div className="flex flex-col items-center">
              <span className="text-indigo-600 font-bold text-base">30</span>
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Savollar</span>
            </div>
            <div className="w-px h-6 bg-slate-100"></div>
            <div className="flex flex-col items-center">
              <span className="text-indigo-600 font-bold text-base">45m</span>
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Vaqt</span>
            </div>
            <div className="w-px h-6 bg-slate-100"></div>
            <div className="flex flex-col items-center">
              <span className="text-indigo-600 font-bold text-base">Mix</span>
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Mavzu</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes mount {
          from { opacity: 0; transform: translateY(40px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-mount { animation: mount 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;

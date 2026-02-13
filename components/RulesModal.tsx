import React, { useState } from 'react';

interface RulesModalProps {
  onAccept: () => void;
}

const RulesModal: React.FC<RulesModalProps> = ({ onAccept }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleStart = () => {
    setIsExiting(true);
    setTimeout(() => {
        onAccept();
    }, 600);
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 p-6 transition-all duration-500 ${isExiting ? 'opacity-0 scale-110 blur-2xl' : 'opacity-100'}`}>
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"></div>
      
      <div className={`relative w-full max-w-lg bg-slate-900/40 border border-white/10 rounded-[2.5rem] shadow-2xl p-10 md:p-14 text-white transform transition-all duration-700 ${isExiting ? 'translate-y-10' : 'animate-popup'}`}>
        <div className="mb-8 flex justify-center">
           <div className="w-16 h-1 bg-indigo-500 rounded-full opacity-50"></div>
        </div>
        
        <h2 className="text-4xl font-black mb-8 text-center tracking-tighter">
          Asosiy Qoidalar
        </h2>
        
        <div className="space-y-6 mb-12">
          {[
            "Barcha savollarga 40 daqiqa vaqt beriladi.",
            "Har bir savol uchun faqat bitta to'g'ri javob mavjud.",
            "Tanlangan javoblarni keyinchalik o'zgartirib bo'lmaydi.",
            "Natijalar yakunda avtomatik ravishda yuboriladi."
          ].map((rule, i) => (
            <div key={i} className="flex items-start gap-4 group">
              <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform duration-300"></span>
              <p className="text-lg text-slate-300 font-medium group-hover:text-white transition-colors">{rule}</p>
            </div>
          ))}
        </div>

        <button
          onClick={handleStart}
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-5 rounded-2xl transition-all duration-300 shadow-2xl shadow-indigo-500/20 transform hover:scale-[1.02] active:scale-95 uppercase tracking-widest text-sm"
        >
          Tayyorman
        </button>
      </div>

      <style>{`
        @keyframes popup {
          from { opacity: 0; transform: translateY(40px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-popup { animation: popup 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      `}</style>
    </div>
  );
};

export default RulesModal;

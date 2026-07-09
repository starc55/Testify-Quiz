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
    <div className={`fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6 transition-all duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"></div>
      
      <div className={`relative w-full max-w-lg bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-2xl transform transition-all duration-700 ${isExiting ? 'scale-95 opacity-0 translate-y-10' : 'animate-popup'}`}>
        <div className="mb-10 text-center">
           <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold tracking-widest uppercase mb-4">Diqqat qiling</div>
           <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">
             Test <span className="text-indigo-600">Qoidalari</span>
           </h2>
        </div>
        
        <div className="space-y-6 mb-12">
          {[
            { text: "Vaqt limiti: 45 daqiqa.", icon: "🕒" },
            { text: "Savollar soni: 30 ta.", icon: "📝" },
            { text: "Har bir savolda bitta to'g'ri javob.", icon: "✅" },
            { text: "Fokusni yo'qotmang (oyinani tark etmang).", icon: "⚠️" }
          ].map((rule, i) => (
            <div key={i} className="flex items-start gap-5 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-indigo-100 transition-colors">
              <span className="text-2xl">{rule.icon}</span>
              <div>
                <p className="text-slate-700 font-semibold">{rule.text}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleStart}
          className="w-full bg-indigo-600 py-5 text-white font-bold rounded-2xl text-lg hover:bg-indigo-700 active:scale-95 transition-all shadow-xl shadow-indigo-100"
        >
          Tushunarlis, boshlaymiz!
        </button>
        
        <div className="mt-8 text-center">
           <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Tayyor bo'lsangiz tugmani bosing</span>
        </div>
      </div>

      <style>{`
        @keyframes popup {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-popup { animation: popup 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      `}</style>
    </div>
  );
};

export default RulesModal;

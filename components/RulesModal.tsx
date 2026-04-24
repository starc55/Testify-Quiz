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
    <div className={`fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6 transition-all duration-500 ${isExiting ? 'opacity-0 backdrop-blur-none' : 'opacity-100'}`}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-3xl"></div>
      
      <div className={`relative w-full max-w-lg bg-black/40 border border-cyan-500/30 overflow-hidden shadow-[0_0_100px_rgba(6,182,212,0.1)] p-10 sm:p-14 transform transition-all duration-700 ${isExiting ? 'scale-110 blur-xl translate-y-10' : 'animate-popup'}`}>
        {/* HUD Frame Corners */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-500"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-500"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-500"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-500"></div>

        <div className="mb-10 text-center">
           <div className="text-[10px] font-black tracking-[0.6em] text-cyan-500 uppercase mb-4">BRIFING_RUXSATI</div>
           <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">
             TEST <span className="text-cyan-500">QOIDALARI</span>
           </h2>
        </div>
        
        <div className="space-y-6 mb-12">
          {[
            "Vaqt limiti: 50 daqiqa.",
            "Bitta to'g'ri javob mavjudligi tasdiqlangan.",
            "Javobni o'zgartirish bloki faol.",
            "Natijalarni arxivlash tizimi ishlaydi."
          ].map((rule, i) => (
            <div key={i} className="flex items-center gap-6 group">
              <div className="w-2 h-2 bg-cyan-500 group-hover:animate-ping"></div>
              <p className="text-sm sm:text-base text-cyan-100/70 font-bold uppercase tracking-widest">{rule}</p>
            </div>
          ))}
        </div>

        <button
          onClick={handleStart}
          className="w-full bg-cyan-500 py-6 text-black font-black uppercase tracking-[0.5em] text-sm hover:bg-cyan-400 active:scale-95 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)]"
        >
          RUXSAT_BERISH
        </button>
        
        <div className="mt-8 text-center">
           <span className="text-[8px] font-black text-cyan-500/20 uppercase tracking-[0.4em]">XAVFSIZ PROTOKOL v9.0.2 YOQILGAN</span>
        </div>
      </div>

      <style>{`
        @keyframes popup {
          from { opacity: 0; transform: scale(0.9) skewX(-10deg); filter: blur(20px); }
          to { opacity: 1; transform: scale(1) skewX(0); filter: blur(0); }
        }
        .animate-popup { animation: popup 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      `}</style>
    </div>
  );
};

export default RulesModal;

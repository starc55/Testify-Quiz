import React from 'react';

interface PauseModalProps {
  countdown: number | null;
  onResumeRequest: () => void;
}

const PauseModal: React.FC<PauseModalProps> = ({ countdown, onResumeRequest }) => {
  const isCountingDown = countdown !== null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-3xl flex items-center justify-center z-[100] p-4">
      <div className="relative w-full max-w-md bg-black/40 border-2 border-rose-500/50 shadow-[0_0_100px_rgba(244,63,94,0.2)] p-10 text-center animate-cyber-pulse">
        {/* Warning Corners */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-rose-500"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-rose-500"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-rose-500"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-rose-500"></div>

        <div className="mb-6 relative inline-block">
          <div className="absolute inset-0 bg-rose-500 blur-2xl opacity-20 animate-pulse"></div>
          <svg className="w-16 h-16 text-rose-500 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <h2 className="text-3xl font-black mb-4 text-white uppercase italic tracking-tighter">
          Aloqa <span className="text-rose-500">Uzildi</span>
        </h2>
        
        <div className="w-full h-px bg-rose-500/20 mb-6"></div>

        <p className="text-xs font-bold text-rose-200/60 uppercase tracking-[0.2em] mb-10 leading-relaxed">
          Neyron aloqasi uzildi. Oyna diqqati yo'qoldi. Tashqi shovqin aniqlandi. Aloqani darhol tiklang.
        </p>

        {isCountingDown ? (
          <div className="py-4 bg-rose-500/10 border border-rose-500/30">
            <p className="text-sm font-black text-rose-400 uppercase tracking-[0.4em] animate-pulse">
              Sinxronizatsiya... {countdown}
            </p>
          </div>
        ) : (
          <button
            onClick={onResumeRequest}
            className="w-full bg-rose-500 py-5 text-black font-black uppercase tracking-[0.4em] text-sm hover:bg-rose-400 active:scale-95 transition-all shadow-[0_0_30px_rgba(244,63,94,0.3)]"
          >
            QAYTA_ULANISH
          </button>
        )}
      </div>

      <style>{`
        @keyframes cyber-pulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.02); filter: brightness(1.1); }
        }
        .animate-cyber-pulse { animation: cyber-pulse 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default PauseModal;

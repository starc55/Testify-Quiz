import React from 'react';

interface PauseModalProps {
  countdown: number | null;
  onResumeRequest: () => void;
}

const PauseModal: React.FC<PauseModalProps> = ({ countdown, onResumeRequest }) => {
  const isCountingDown = countdown !== null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md flex items-center justify-center z-[100] p-4">
      <div className="relative w-full max-w-md bg-white p-10 rounded-[2.5rem] shadow-2xl text-center animate-pop-in">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center animate-bounce">
            <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-extrabold mb-4 text-slate-800 tracking-tight">
          Test <span className="text-amber-500">To'xtatildi</span>
        </h2>
        
        <p className="text-slate-500 font-medium mb-10 leading-relaxed">
          Oyna o'zgardi va test vaqtincha to'xtatildi. Davom etish uchun quyidagi tugmani bosing.
        </p>

        {isCountingDown ? (
          <div className="py-5 bg-indigo-50 border-2 border-indigo-100 rounded-2xl">
            <p className="text-lg font-black text-indigo-600 uppercase tracking-widest animate-pulse">
              Boshlanmoqda... {countdown}
            </p>
          </div>
        ) : (
          <button
            onClick={onResumeRequest}
            className="w-full bg-indigo-600 py-5 text-white font-bold rounded-2xl text-lg hover:bg-indigo-700 active:scale-95 transition-all shadow-xl shadow-indigo-100"
          >
            Davom etish
          </button>
        )}
      </div>

      <style>{`
        @keyframes pop-in {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-pop-in { animation: pop-in 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      `}</style>
    </div>
  );
};

export default PauseModal;

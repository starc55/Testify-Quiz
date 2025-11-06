import React from 'react';

interface PauseModalProps {
  countdown: number | null;
  onResumeRequest: () => void;
}

const PauseModal: React.FC<PauseModalProps> = ({ countdown, onResumeRequest }) => {
  const isCountingDown = countdown !== null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="w-full max-w-md bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-red-500/50 shadow-2xl text-white p-8 text-center">
        <div className="text-5xl mb-4">🛑</div>
        <h2 className="text-2xl font-bold mb-4">
          Siz test oynasidan chiqdingiz!
        </h2>
        <p className="text-gray-300 mb-8">
          Test vaqtincha pauzaga qo‘yildi. Iltimos, o‘qituvchiga murojaat qiling.
        </p>

        {isCountingDown ? (
          <div className="py-3 px-12 h-12 flex items-center justify-center">
            <p className="text-lg font-bold text-green-400 animate-pulse">
              Davom etilmoqda... {countdown}
            </p>
          </div>
        ) : (
          <button
            onClick={onResumeRequest}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-12 rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:scale-105"
          >
            Davom etish
          </button>
        )}
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PauseModal;

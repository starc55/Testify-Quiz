
import React from 'react';
import CheckCircleIcon from './icons/CheckCircleIcon';

interface CompletionScreenProps {
  name: string;
}

const CompletionScreen: React.FC<CompletionScreenProps> = ({ name }) => {
  return (
    <div className="text-center text-white p-8 bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg animate-fade-in">
      <div className="flex justify-center mb-6">
        <CheckCircleIcon className="w-24 h-24 text-green-400" />
      </div>
      <h1 className="text-4xl font-bold mb-4">
        Test Yakunlandi!
      </h1>
      <p className="text-lg text-gray-300">
        Ishtirok etganingiz uchun tashakkur, {name}.
      </p>
      <p className="text-lg text-gray-300 mt-2">
        Sizning natijalaringiz muvaffaqiyatli yuborildi.
      </p>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default CompletionScreen;
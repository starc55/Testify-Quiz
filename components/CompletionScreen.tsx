
import React from 'react';
import CheckCircleIcon from './icons/CheckCircleIcon';

interface CompletionScreenProps {
  name: string;
  score: number;
  totalQuestions: number;
}

const CompletionScreen: React.FC<CompletionScreenProps> = ({ name, score, totalQuestions }) => {
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  return (
    <div className="text-center text-white p-8 bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg animate-fade-in-up">
      <div className="flex justify-center mb-6">
        <CheckCircleIcon className="w-24 h-24 text-green-400" />
      </div>
      <h1 className="text-4xl font-bold mb-4">
        Test Yakunlandi!
      </h1>
      <p className="text-2xl font-semibold text-gray-100 mb-2">
        Sizning natijangiz: {score} / {totalQuestions} ({percentage}%)
      </p>
      <p className="text-lg text-gray-300">
        Ishtirok etganingiz uchun tashakkur, {name}.
      </p>
      <p className="text-lg text-gray-300 mt-2">
        Sizning natijalaringiz muvaffaqiyatli yuborildi.
      </p>
      <style>{`
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.95);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CompletionScreen;
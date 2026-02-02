import React from 'react';
import { QUIZ_VOCABULARY } from '../constants';
import BookOpenIcon from './icons/BookOpenIcon';

interface VocabularyScreenProps {
  onStartQuiz: () => void;
}

const VocabularyScreen: React.FC<VocabularyScreenProps> = ({ onStartQuiz }) => {
  return (
    <div className="text-white p-6 md:p-8 bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg animate-fade-in-up">
      <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400 animate-title-pop">
        <BookOpenIcon className="w-8 h-8" />
        Test Lug'atlari
      </h2>
      <p className="text-center text-gray-300 mb-6">Testni boshlashdan oldin unda uchraydigan ba'zi so'zlar bilan tanishib chiqing.</p>
      
      <div className="space-y-4 max-h-64 overflow-y-auto pr-4 mb-8 custom-scrollbar">
        {QUIZ_VOCABULARY.map((item) => (
          <div key={item.term} className="p-4 bg-white/5 rounded-lg border border-white/10">
            <h3 className="font-bold text-lg text-purple-300">{item.term}</h3>
            <p className="text-gray-200">{item.definition}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={onStartQuiz}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-12 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
        >
          Boshlash
        </button>
      </div>
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

        @keyframes title-pop {
          0% { 
            opacity: 0; 
            transform: scale(0.8) translateY(-10px);
          }
          70% {
            transform: scale(1.05) translateY(2px);
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateY(0);
          }
        }
        .animate-title-pop {
          animation: title-pop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards;
          opacity: 0;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(192, 132, 252, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(192, 132, 252, 0.7);
        }
      `}</style>
    </div>
  );
};

export default VocabularyScreen;

import React from 'react';
import { QUIZ_VOCABULARY } from '../constants';

interface VocabularyScreenProps {
  onStartQuiz: () => void;
}

const VocabularyScreen: React.FC<VocabularyScreenProps> = ({ onStartQuiz }) => {
  return (
    <div className="w-full max-w-xl mx-auto animate-fade-in">
      <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden relative border border-white">
        {/* Soft accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -mr-10 -mt-10"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-100">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18 18.246 18.477 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              Test darsligi
            </h2>
          </div>
          
          <p className="text-slate-500 font-medium mb-10 leading-relaxed">
            Testni boshlashdan oldin ushbu qisqacha ma'lumotlar bilan tanishib chiqing. Savollar aynan shu mavzular va bo'limlar atrofida shakllantirilgan.
          </p>
          
          <div className="space-y-3 max-h-80 overflow-y-auto pr-4 custom-scrollbar mb-10">
            {QUIZ_VOCABULARY.map((item) => (
              <div key={item.term} className="p-5 bg-slate-50 rounded-2xl hover:bg-indigo-50 transition-all group border border-slate-100 hover:border-indigo-100">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <h3 className="font-bold text-indigo-600 text-lg">
                      {item.term}
                    </h3>
                    <p className="text-sm font-medium text-slate-500">
                      {item.definition}
                    </p>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-indigo-400 group-hover:scale-125 transition-all"></div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onStartQuiz}
            className="w-full bg-indigo-600 py-5 text-white font-bold rounded-2xl text-lg hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3 group"
          >
            <span>Hammasi tushunarli</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f8fafc; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
      `}</style>
    </div>
  );
};

export default VocabularyScreen;

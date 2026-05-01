
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface AnswerRecord {
  question: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

interface CompletionScreenProps {
  name: string;
  score: number;
  totalQuestions: number;
  userAnswers: AnswerRecord[];
}

const CompletionScreen: React.FC<CompletionScreenProps> = ({ name, score, totalQuestions, userAnswers }) => {
  const [showDetails, setShowDetails] = useState(false);
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-up">
      <div className="bg-white rounded-[3rem] shadow-2xl shadow-indigo-100 overflow-hidden border border-white">
        
        <div className="p-8 sm:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-block p-4 bg-indigo-50 rounded-full mb-6 relative">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-100">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white animate-bounce"></div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mb-2">
              Barchasi tayyor, <span className="text-indigo-600">{name}</span>!
            </h1>
            <p className="text-slate-500 font-medium italic">
              Modal fe'llar bo'yicha testingiz muvaffaqiyatli yakunlandi.
            </p>
          </div>

          {/* Score Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-slate-50 p-6 rounded-[2rem] text-center border border-slate-100">
               <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">To'g'ri javoblar</span>
               <span className="text-3xl font-black text-indigo-600">{score} / {totalQuestions}</span>
            </div>
            <div className="bg-indigo-600 p-6 rounded-[2rem] text-center shadow-xl shadow-indigo-100">
               <span className="block text-[10px] font-bold text-white/60 uppercase tracking-widest mb-2">Sifat darajasi</span>
               <span className="text-3xl font-black text-white">{percentage}%</span>
            </div>
            <div className="bg-slate-50 p-6 rounded-[2rem] text-center border border-slate-100">
               <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Holati</span>
               <span className={`text-xl font-black ${percentage >= 80 ? 'text-emerald-500' : percentage >= 50 ? 'text-amber-500' : 'text-rose-500'}`}>
                 {percentage >= 80 ? 'Ajoyib!' : percentage >= 50 ? 'Yaxshi' : "Ko'proq o'qing"}
               </span>
            </div>
          </div>

          <div className="text-center mb-10 px-6">
            <p className="text-slate-600 font-medium leading-relaxed">
               {percentage >= 90 ? "Siz modal fe'llarni mukammal darajada o'zlashtiribsiz! Bilimingizga gap bo'lishi mumkin emas." : 
                percentage >= 60 ? "Yaxshi natija! Ba'zi kichik xatolar bor, lekin umumiy tushunchangiz juda yaxshi." :
                "Natijangiz yomonmas, lekin modal fe'llar mavzusini yana bir bor takrorlab olishingizni tavsiya qilamiz."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowDetails(!showDetails)}
              className="flex-grow bg-slate-100 py-5 rounded-2.5xl text-slate-700 font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-3"
            >
              <motion.span
                animate={{ rotate: showDetails ? 360 : 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              >
                <svg className={`w-5 h-5 ${showDetails ? 'text-indigo-600' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.span>
              <span>{showDetails ? 'Yashirish' : 'Natijalarni ko\'rish'}</span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.reload()}
              className="flex-grow bg-indigo-600 py-5 rounded-2.5xl text-white font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all"
            >
              Qayta topshirish
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showDetails && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mt-10 space-y-6"
          >
            <div className="flex items-center gap-3 px-6">
               <div className="w-1 h-6 bg-indigo-600 rounded-full"></div>
               <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">To'liq hisobot</h3>
            </div>
            
            <div className="space-y-4">
              {userAnswers.map((record, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={index} 
                  className={`p-8 bg-white rounded-[2rem] shadow-lg shadow-slate-100 border-2 transition-all ${
                    record.isCorrect ? 'border-emerald-50' : 'border-rose-50'
                  }`}
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Savol {index + 1}</span>
                      <span className={`text-[10px] font-black uppercase px-4 py-1.5 rounded-full ${record.isCorrect ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-500'}`}>
                         {record.isCorrect ? "To'g'ri" : 'Xato'}
                      </span>
                    </div>
                    
                    <p className="text-slate-800 text-lg font-bold tracking-tight">{record.question}</p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 pt-5 border-t border-slate-50">
                      <div className="flex-1 space-y-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sizning javobingiz</span>
                        <div className={`text-base font-bold ${record.isCorrect ? 'text-emerald-600' : 'text-rose-500'}`}>
                          {record.selectedAnswer}
                        </div>
                      </div>
                      
                      {!record.isCorrect && (
                        <div className="flex-1 space-y-2">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">To'g'ri javob</span>
                          <div className="text-base font-bold text-indigo-600">
                            {record.correctAnswer}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .rounded-2.5xl { border-radius: 1.25rem; }
      `}</style>
    </div>
  );
};
export default CompletionScreen;

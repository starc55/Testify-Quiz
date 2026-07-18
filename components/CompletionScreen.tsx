import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

interface AnswerRecord {
  question: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  category?: string;
}

interface CompletionScreenProps {
  name: string;
  score: number;
  totalQuestions: number;
  userAnswers: AnswerRecord[];
}

const TOPICS = {
  possessives: "Egalik shakllari (Advanced Possessives)",
  articles: "Artikllar (Advanced Articles)",
  numerals: "Sonlar va Miqdorlar (Advanced Numerals)",
  compounds: "Murakkab otlar va Nominalizatsiya",
  tenses: "Zamonlar, Shart va Mayllar (Advanced Tenses)"
};

const CompletionScreen: React.FC<CompletionScreenProps> = ({ name, score, totalQuestions, userAnswers }) => {
  const [showDetails, setShowDetails] = useState(false);
  const percentage = Math.round((score / totalQuestions) * 100);

  // Group and compile stats for Recharts
  const topicStatsMap: Record<keyof typeof TOPICS, { correct: number; incorrect: number; total: number }> = {
    possessives: { correct: 0, incorrect: 0, total: 0 },
    articles: { correct: 0, incorrect: 0, total: 0 },
    numerals: { correct: 0, incorrect: 0, total: 0 },
    compounds: { correct: 0, incorrect: 0, total: 0 },
    tenses: { correct: 0, incorrect: 0, total: 0 },
  };

  userAnswers.forEach((ans, index) => {
    let key: keyof typeof TOPICS = 'tenses';
    if (ans.category && ans.category in TOPICS) {
      key = ans.category as keyof typeof TOPICS;
    } else {
      // Fallback
      if (index < 8) key = 'possessives';
      else if (index < 16) key = 'articles';
      else if (index < 24) key = 'numerals';
      else if (index < 32) key = 'compounds';
      else key = 'tenses';
    }

    topicStatsMap[key].total += 1;
    if (ans.isCorrect) {
      topicStatsMap[key].correct += 1;
    } else {
      topicStatsMap[key].incorrect += 1;
    }
  });

  const chartData = Object.keys(TOPICS).map((key) => {
    const k = key as keyof typeof TOPICS;
    const stats = topicStatsMap[k];
    const successRate = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    return {
      name: TOPICS[k],
      "To'g'ri": stats.correct,
      "Noto'g'ri": stats.incorrect,
      total: stats.total,
      rate: successRate
    };
  });

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-up">
      <div className="bg-white rounded-[2rem] shadow-2xl shadow-indigo-100 overflow-hidden border border-white">
        
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-indigo-50 rounded-full mb-4 relative">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-100">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white animate-bounce"></div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mb-1">
              Test yakunlandi, <span className="text-indigo-600">{name}</span>!
            </h1>
            <p className="text-slate-500 font-medium italic text-sm">
              Grammatika testingiz muvaffaqiyatli topshirildi.
            </p>
          </div>

          {/* Score Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100">
               <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">To'g'ri javoblar</span>
               <span className="text-2xl font-black text-indigo-600">{score} / {totalQuestions}</span>
            </div>
            <div className="bg-indigo-600 p-4 rounded-3xl text-center shadow-xl shadow-indigo-100">
               <span className="block text-[9px] font-bold text-white/60 uppercase tracking-widest mb-1.5">Sifat darajasi</span>
               <span className="text-2xl font-black text-white">{percentage}%</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100">
               <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Holati</span>
               <span className={`text-lg font-black ${percentage >= 80 ? 'text-emerald-500' : percentage >= 50 ? 'text-amber-500' : 'text-rose-500'}`}>
                 {percentage >= 80 ? 'Ajoyib!' : percentage >= 50 ? 'Yaxshi' : "Takrorlang"}
               </span>
            </div>
          </div>

          <div className="text-center mb-8 px-4">
            <p className="text-slate-600 font-medium leading-relaxed text-sm">
               {percentage >= 90 ? "Siz grammatikani mukammal darajada o'zlashtiribsiz! Bilimingizga gap bo'lishi mumkin emas." : 
                percentage >= 60 ? "Yaxshi natija! Ba'zi kichik xatolar bor, lekin umumiy tushunchangiz juda yaxshi." :
                "Natijangiz yomonmas, lekin grammatika mavzularini yana bir bor takrorlab olishingizni tavsiya qilamiz."}
            </p>
          </div>

          {/* Progress Chart Panel */}
          <div className="bg-slate-50 border border-slate-100/80 rounded-3xl p-5 mb-8">
            <h3 className="text-[10px] font-black text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 3.055A9.003 9.003 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
              Mavzular bo'yicha tahlil (Progress Chart)
            </h3>
            
            <div className="h-[240px] w-full mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  layout="vertical"
                  margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={true} vertical={false} />
                  <XAxis type="number" stroke="#94a3b8" fontSize={9} tickLine={false} />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    stroke="#475569" 
                    fontSize={10} 
                    width={110} 
                    tickLine={false}
                    tickFormatter={(value) => {
                      return value.split(" (")[0];
                    }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                      borderRadius: '16px', 
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 4px 12px -2px rgb(0 0 0 / 0.05)',
                      fontSize: '11px',
                      fontFamily: 'Inter, sans-serif'
                    }}
                    cursor={{ fill: 'rgba(99, 102, 241, 0.03)' }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={32} 
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', paddingTop: '8px' }}
                  />
                  <Bar dataKey="To'g'ri" stackId="a" fill="#10b981" radius={[0, 4, 4, 0]} maxBarSize={14} />
                  <Bar dataKey="Noto'g'ri" stackId="a" fill="#f43f5e" radius={[0, 4, 4, 0]} maxBarSize={14} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            {/* Custom mini-table with percentage success rates */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-4 pt-4 border-t border-slate-100">
              {chartData.map((item, idx) => (
                <div key={idx} className="bg-white px-2.5 py-1.5 rounded-xl border border-slate-100 text-center flex flex-col justify-between">
                  <div className="truncate text-[8px] font-black text-slate-400 uppercase tracking-wider mb-0.5" title={item.name}>
                    {item.name.split(" (")[0]}
                  </div>
                  <div className="text-[11px] font-black text-slate-700">
                    {item.rate}% <span className="text-[8px] font-medium text-slate-400">({item["To'g'ri"]}/{item.total})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowDetails(!showDetails)}
              className="flex-grow bg-slate-100 py-4 rounded-2xl text-slate-700 font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-3 text-sm"
            >
              <motion.span
                animate={{ rotate: showDetails ? 360 : 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              >
                <svg className={`w-4 h-4 ${showDetails ? 'text-indigo-600' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.span>
              <span>{showDetails ? 'Yashirish' : 'Natijalarni ko\'rish'}</span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.reload()}
              className="flex-grow bg-indigo-600 py-4 rounded-2xl text-white font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all text-sm"
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
            className="mt-8 space-y-4"
          >
            <div className="flex items-center gap-3 px-4">
               <div className="w-1 h-5 bg-indigo-600 rounded-full"></div>
               <h3 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">To'liq hisobot</h3>
            </div>
            
            <div className="space-y-3">
              {userAnswers.map((record, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={index} 
                  className={`p-5 bg-white rounded-3xl shadow-sm border-2 transition-all ${
                    record.isCorrect ? 'border-emerald-50' : 'border-rose-50'
                  }`}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Savol {index + 1}</span>
                      <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full ${record.isCorrect ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-500'}`}>
                         {record.isCorrect ? "To'g'ri" : 'Xato'}
                      </span>
                    </div>
                    
                    <p className="text-slate-800 text-sm font-bold tracking-tight">{record.question}</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-3 border-t border-slate-50">
                      <div className="flex-1 space-y-1">
                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Sizning javobingiz</span>
                        <div className={`text-sm font-bold ${record.isCorrect ? 'text-emerald-600' : 'text-rose-500'}`}>
                          {record.selectedAnswer}
                        </div>
                      </div>
                      
                      {!record.isCorrect && (
                        <div className="flex-1 space-y-1">
                          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">To'g'ri javob</span>
                          <div className="text-sm font-bold text-indigo-600">
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

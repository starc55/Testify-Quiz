
import type { QuizQuestion, Theme, ThemeName, VocabularyItem } from './types';

export const QUIZ_DURATION_SECONDS = 30 * 60; // 30 minutes

export const QUIZ_VOCABULARY: VocabularyItem[] = [
  { term: "Can", definition: "Qila olmoq (Qobiliyat/Ruxsat)" },
  { term: "Could", definition: "Qila olar edi (O'tgan zamon qobiliyati/Xushmuomalalik ruxsati)" },
  { term: "Must", definition: "Kerak, shart (Majburiyat)" },
  { term: "Should", definition: "Kerak (Maslahat)" },
  { term: "May", definition: "Mumkin (Ehtimol/Ruxsat)" },
  { term: "Might", definition: "Balki, ehtimol (Past ehtimollik)" },
  { term: "Will", definition: "Qiladi (Kelajak/Iroda)" },
  { term: "Would", definition: "Qilar edi (Faraziy/Xushmuomalalik)" },
  { term: "Have to", definition: "To'g'ri keladi (Tashqi majburiyat)" },
  { term: "Need to", definition: "Kerak, muhtoj bo'lmoq" },
  { term: "Ought to", definition: "Kerak (Should bilan bir xil)" },
  { term: "Had better", definition: "Yaxshisi (Qat'iy maslahat)" },
  { term: "Mustn't", definition: "Taqiqlanadi" },
  { term: "Don't have to", definition: "Kerak emas (Majburiyat yo'q)" },
  { term: "Can't", definition: "Qila olmaydi / Bo'lishi mumkin emas (Ishonch)" }
];

export const FIXED_THEME: Theme = {
  id: 'student-modern',
  name: 'Modern Study',
  preview: 'bg-indigo-600',
  mainGradient: 'from-slate-50 via-indigo-50 to-blue-50',
  blob1: 'bg-indigo-300',
  blob2: 'bg-blue-300',
  blob3: 'bg-indigo-200',
  button: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200',
  progressBar: 'from-indigo-500 via-blue-500 to-indigo-500',
  timerCircle: {
    base: 'text-indigo-600',
    warn: 'text-amber-500',
    danger: 'text-rose-500',
  },
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // --- Basic Theory ---
  {
    type: 'multiple-choice',
    question: "Modal fe'llardan keyin asosiy fe'l qanday ko'rinishda keladi?",
    options: ["Infinitive (To-siz)", "Infinitive (To-li)", "V+ing", "V+ed"],
    correctAnswer: "Infinitive (To-siz)"
  },
  {
    type: 'multiple-choice',
    question: "Qaysi modal fe'l 3-shaxs birlikda (He/She/It) '-s' qo'shimchasini olmaydi?",
    options: ["Barchasi", "Faqat 'can'", "Faqat 'must'", "Faqat 'should'"],
    correctAnswer: "Barchasi"
  },
  {
    type: 'multiple-choice',
    question: "Modal fe'llar bilan so'roq gap qanday yasaladi?",
    options: ["Modal fe'l eganing oldiga o'tadi", "Do/Does yordamida", "Did yordamida", "Am/Is/Are yordamida"],
    correctAnswer: "Modal fe'l eganing oldiga o'tadi"
  },
  {
    type: 'multiple-choice',
    question: "Qaysi modal fe'l o'rnida hamisha 'to' predlogi bilan birga keladigan ibora ishlatiladi?",
    options: ["Have to", "Must", "Can", "Will"],
    correctAnswer: "Have to"
  },
  {
    type: 'multiple-choice',
    question: "Maslahat (advice) berishda asosan qaysi modal fe'l ishlatiladi?",
    options: ["Should", "Must", "May", "Can"],
    correctAnswer: "Should"
  },

  // --- Ability & Permission ---
  {
    type: 'multiple-choice',
    question: "Hozirgi zamon qobiliyati uchun qaysi fe'l ishlatiladi?",
    options: ["Can", "Could", "Must", "Should"],
    correctAnswer: "Can"
  },
  {
    type: 'multiple-choice',
    question: "Xushmuomalalik bilan ruxsat so'rashda qaysi biri to'g'riroq?",
    options: ["Could I", "Can I", "Must I", "Will I"],
    correctAnswer: "Could I"
  },
  {
    type: 'multiple-choice',
    question: "___ you help me with this bag, please? (Request)",
    options: ["Can", "Must", "Should", "Shall"],
    correctAnswer: "Can"
  },
  {
    type: 'multiple-choice',
    question: "O'tgan zamondagi umumiy qobiliyat uchun nima ishlatiladi?",
    options: ["Could", "Can", "May", "Will"],
    correctAnswer: "Could"
  },
  {
    type: 'multiple-choice',
    question: "Specific (aniq bir vaziyatda) o'tgan zamon qobiliyati uchun nima afzal?",
    options: ["Was able to", "Could", "Can", "Might"],
    correctAnswer: "Was able to"
  },

  // --- Obligation & Necessity ---
  {
    type: 'multiple-choice',
    question: "Qat'iy shaxsiy majburiyat uchun qaysi biri ishlatiladi?",
    options: ["Must", "Should", "Can", "Could"],
    correctAnswer: "Must"
  },
  {
    type: 'multiple-choice',
    question: "Tashqi qoidalar yoki majburiyatlar uchun ko'proq nima ishlatiladi?",
    options: ["Have to", "Must", "May", "Should"],
    correctAnswer: "Have to"
  },
  {
    type: 'multiple-choice',
    question: "You ___ smoke in the hospital. (Prohibition)",
    options: ["mustn't", "don't have to", "should", "can"],
    correctAnswer: "mustn't"
  },
  {
    type: 'multiple-choice',
    question: "Ertaga dam olish kuni, ishga borishim shart emas.",
    options: ["I don't have to go", "I mustn't go", "I shouldn't go", "I can't go"],
    correctAnswer: "I don't have to go"
  },
  {
    type: 'multiple-choice',
    question: "Needn't iborasi qachon ishlatiladi?",
    options: ["Majburiyat yo'qligida", "Taqiqda", "Kuchli ehtimolda", "Maslahatda"],
    correctAnswer: "Majburiyat yo'qligida"
  },

  // --- Probability & Possibility ---
  {
    type: 'multiple-choice',
    question: "Nimanidir yuz berish ehtimoli juda kam bo'lsa qaysi biri ishlatiladi?",
    options: ["Might", "Must", "Can", "Should"],
    correctAnswer: "Might"
  },
  {
    type: 'multiple-choice',
    question: "Inkor gapda biror narsaning bo'lishi mumkin emasligiga ishonch bildirishda:",
    options: ["Can't", "Mustn't", "Might not", "Shouldn't"],
    correctAnswer: "Can't"
  },
  {
    type: 'multiple-choice',
    question: "Bo'lishi 100% aniq (logical deduction) bo'lgan narsaga ishlovchi modal:",
    options: ["Must", "Can", "Should", "Might"],
    correctAnswer: "Must"
  },
  {
    type: 'multiple-choice',
    question: "It ___ rain later, the sky is grey. (Probability)",
    options: ["may", "must", "should", "will"],
    correctAnswer: "may"
  },
  {
    type: 'multiple-choice',
    question: "May fe'lining inkor shakli qaysi?",
    options: ["May not", "Mayn't", "Not may", "Don't may"],
    correctAnswer: "May not"
  },

  // --- Advice & Suggestions ---
  {
    type: 'multiple-choice',
    question: "Qaysi biri 'should' bilan deyarli bir xil ma'noda?",
    options: ["Ought to", "Have to", "Must", "Could"],
    correctAnswer: "Ought to"
  },
  {
    type: 'multiple-choice',
    question: "Yaxshisi vaqtida borishing kerak (Had better):",
    options: ["You had better go", "You would better go", "You should better go", "You have better go"],
    correctAnswer: "You had better go"
  },
  {
    type: 'multiple-choice',
    question: "Taklif (offer) berishda birinchi shaxsda qaysi biri ishlatiladi?",
    options: ["Shall I", "Must I", "Should I", "Could I"],
    correctAnswer: "Shall I"
  },
  {
    type: 'multiple-choice',
    question: "You ___ see a doctor if you feel ill. (Advice)",
    options: ["should", "must", "can", "may"],
    correctAnswer: "should"
  },

  // --- Mixed & Advanced Modal Theory ---
  {
    type: 'fill-in-the-blank',
    question: "Modal fe'llardan keyin '___' (zarracha) ishlatilmaydi.",
    correctAnswer: "to"
  },
  {
    type: 'fill-in-the-blank',
    question: "'Can' fe'lining o'tgan zamon shaklini yozing.",
    correctAnswer: "could"
  },
  {
    type: 'fill-in-the-blank',
    question: "Qaysi modal fe'l faqat kelajak zamonda ishlatiladi?",
    correctAnswer: "will"
  },
  {
    type: 'multiple-choice',
    question: "Modal fe'llarning asosan nechta shakli bor? (Tuslanishi bo'yicha)",
    options: ["Faqat bitta shakli", "Uchta (V1, V2, V3)", "Ikkita (Hozirgi va O'tgan)", "Har bir shaxs uchun alohida"],
    correctAnswer: "Faqat bitta shakli"
  },
  {
    type: 'multiple-choice',
    question: "Could va Can farqi nimada?",
    options: ["Could masofali/xushmuomalikni bildiradi", "Can faqat o'tmishda ishlatiladi", "Faqat imloda farq bor", "Must bilan bir xil"],
    correctAnswer: "Could masofali/xushmuomalikni bildiradi"
  },
  {
    type: 'fill-in-the-blank',
    question: "Ehtimollikni (Possibility) anglatuvchi eng kuchsiz modal fe'lni yozing.",
    correctAnswer: "might"
  }
];

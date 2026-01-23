import type { QuizQuestion, Theme, ThemeName, VocabularyItem } from './types';

export const QUIZ_DURATION_SECONDS = 40 * 60; // 40 minutes

export const QUIZ_VOCABULARY: VocabularyItem[] = [
  { term: "Believe", definition: "Ishonmoq (Stative Verb)" },
  { term: "Understand", definition: "Tushunmoq (Stative Verb)" },
  { term: "Experience", definition: "Tajriba" },
  { term: "Environment", definition: "Atrof-muhit" },
  { term: "Decision", definition: "Qaror" },
  { term: "Improve", definition: "Yaxshilamoq / Rivojlantirmoq" },
  { term: "Necessary", definition: "Zarur, kerakli" },
  { term: "Delicious", definition: "Mazali" },
  { term: "Journey", definition: "Sayohat" },
  { term: "Furniture", definition: "Mebel" },
  { term: "Knowledge", definition: "Bilim" },
  { term: "Opportunity", definition: "Imkoniyat" },
  { term: "Patient", definition: "Sabrli" },
  { term: "Describe", definition: "Tasvirlamoq" },
  { term: "Successful", definition: "Muvaffaqiyatli" },
  { term: "Suggest", definition: "Taklif qilmoq" },
  { term: "Complicated", definition: "Murakkab" },
  { term: "Immediately", definition: "Darhol" },
  { term: "Prefer", definition: "Afzal ko'rmoq (Stative Verb)" },
  { term: "Recognize", definition: "Tanimoq" }
];

export const THEMES: Record<ThemeName, Theme> = {
  default: {
    id: 'default',
    name: 'Default',
    preview: 'bg-gradient-to-br from-indigo-500 to-pink-500',
    mainGradient: 'from-indigo-500 via-purple-500 to-pink-500',
    blob1: 'bg-purple-400',
    blob2: 'bg-indigo-400',
    blob3: 'bg-pink-400',
    button: 'bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800',
    progressBar: 'from-purple-500 to-pink-500',
    timerCircle: {
      base: 'text-purple-400',
      warn: 'text-yellow-400',
      danger: 'text-red-500',
    },
  },
  ocean: {
    id: 'ocean',
    name: 'Ocean',
    preview: 'bg-gradient-to-br from-blue-500 to-teal-400',
    mainGradient: 'from-blue-500 via-cyan-500 to-teal-500',
    blob1: 'bg-cyan-400',
    blob2: 'bg-blue-400',
    blob3: 'bg-teal-400',
    button: 'bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-800',
    progressBar: 'from-blue-400 to-teal-400',
    timerCircle: {
      base: 'text-cyan-400',
      warn: 'text-yellow-400',
      danger: 'text-red-500',
    },
  },
  sunset: {
    id: 'sunset',
    name: 'Sunset',
    preview: 'bg-gradient-to-br from-yellow-500 to-red-500',
    mainGradient: 'from-yellow-500 via-orange-500 to-red-500',
    blob1: 'bg-orange-400',
    blob2: 'bg-yellow-400',
    blob3: 'bg-red-400',
    button: 'bg-orange-600 hover:bg-orange-700 disabled:bg-orange-800',
    progressBar: 'from-yellow-400 to-red-400',
    timerCircle: {
      base: 'text-orange-400',
      warn: 'text-yellow-400',
      danger: 'text-red-500',
    },
  },
  forest: {
    id: 'forest',
    name: 'Forest',
    preview: 'bg-gradient-to-br from-green-500 to-lime-400',
    mainGradient: 'from-green-500 via-emerald-500 to-lime-500',
    blob1: 'bg-emerald-400',
    blob2: 'bg-green-400',
    blob3: 'bg-lime-400',
    button: 'bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-800',
    progressBar: 'from-green-400 to-lime-400',
    timerCircle: {
      base: 'text-emerald-400',
      warn: 'text-yellow-400',
      danger: 'text-red-500',
    },
  },
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // --- GRAMMAR MCQs (15) ---
  {
    type: 'multiple-choice',
    question: "Qaysi gapda 'Stative Verb' noto'g'ri ishlatilgan?",
    options: ["I am knowing the answer.", "I know the answer.", "She wants a coffee.", "They believe you."],
    correctAnswer: "I am knowing the answer."
  },
  {
    type: 'multiple-choice',
    question: "Hozirgi paytda davom etayotgan harakatni ko'rsating:",
    options: ["She is reading a book now.", "She reads books every day.", "She read a book yesterday.", "She will read a book."],
    correctAnswer: "She is reading a book now."
  },
  {
    type: 'multiple-choice',
    question: "Past Continuous zamonining formulasini tanlang:",
    options: ["Was/Were + Verb + ing", "Am/Is/Are + Verb + ing", "Have/Has + Verb 3", "Did + Verb"],
    correctAnswer: "Was/Were + Verb + ing"
  },
  {
    type: 'multiple-choice',
    question: "Qaysi so'z 'uncountable' (sanalmaydigan) ot hisoblanadi?",
    options: ["Water", "Apple", "Car", "Book"],
    correctAnswer: "Water"
  },
  {
    type: 'multiple-choice',
    question: "Articles: '___ University is ___ big building.'",
    options: ["A / a", "An / a", "The / an", "A / an"],
    correctAnswer: "A / a"
  },
  {
    type: 'multiple-choice',
    question: "Irregular Plural: 'Mouse' so'zining ko'plik shakli nima?",
    options: ["Mice", "Mouses", "Meeses", "Mouse's"],
    correctAnswer: "Mice"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple: 'I ___ (see) him two days ago.'",
    options: ["Saw", "See", "Seed", "Was see"],
    correctAnswer: "Saw"
  },
  {
    type: 'multiple-choice',
    question: "Future: Nutq paytida to'satdan qabul qilingan qaror uchun nima ishlatiladi?",
    options: ["Will", "Be going to", "Present Continuous", "Past Simple"],
    correctAnswer: "Will"
  },
  {
    type: 'multiple-choice',
    question: "Prepositions: 'I was born ___ August.'",
    options: ["In", "On", "At", "By"],
    correctAnswer: "In"
  },
  {
    type: 'multiple-choice',
    question: "Stative Verb: 'Afzal ko'rmoq' fe'li qaysi?",
    options: ["Prefer", "Run", "Eat", "Study"],
    correctAnswer: "Prefer"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple: 'He ___ (not/work) on Sundays.'",
    options: ["Doesn't work", "Don't work", "Isn't working", "Not works"],
    correctAnswer: "Doesn't work"
  },
  {
    type: 'multiple-choice',
    question: "Past Continuous: 'While I ___ (sleep), the phone rang.'",
    options: ["Was sleeping", "Slept", "Am sleeping", "Were sleeping"],
    correctAnswer: "Was sleeping"
  },
  {
    type: 'multiple-choice',
    question: "Pronouns: 'This is ___ (mening) bag.'",
    options: ["My", "Mine", "Me", "I"],
    correctAnswer: "My"
  },
  {
    type: 'multiple-choice',
    question: "Articles: 'Can you pass me ___ salt, please?' (aniq bitta tuzдон)",
    options: ["The", "A", "An", "Some"],
    correctAnswer: "The"
  },
  {
    type: 'multiple-choice',
    question: "Qaysi fe'l 'Stative verb' emas?",
    options: ["Dance", "Hear", "Love", "Believe"],
    correctAnswer: "Dance"
  },

  // --- GRAMMAR WRITTEN (5) ---
  {
    type: 'fill-in-the-blank',
    question: "'Buy' fe'lining o'tgan zamon (V2) shaklini yozing:",
    correctAnswer: "bought"
  },
  {
    type: 'fill-in-the-blank',
    question: "'Person' so'zining ko'plik shakli nima?",
    correctAnswer: "people"
  },
  {
    type: 'fill-in-the-blank',
    question: "'She ___ (like) chocolate.' (Present Simple)",
    correctAnswer: "likes"
  },
  {
    type: 'fill-in-the-blank',
    question: "'They ___ (be) at home yesterday.' (Past Simple)",
    correctAnswer: "were"
  },
  {
    type: 'fill-in-the-blank',
    question: "Kelajakda rejalashtirilgan ish uchun ishlatiladigan ibora: 'Be ___ to'",
    correctAnswer: "going"
  },

  // --- VOCABULARY MCQs (5) ---
  {
    type: 'multiple-choice',
    question: "'Opportunity' so'zining tarjimasi nima?",
    options: ["Imkoniyat", "Tajriba", "Qaror", "Mas'uliyat"],
    correctAnswer: "Imkoniyat"
  },
  {
    type: 'multiple-choice',
    question: "Kasalxonada ishlaydigan odamni toping:",
    options: ["Nurse", "Lawyer", "Engineer", "Waiter"],
    correctAnswer: "Nurse"
  },
  {
    type: 'multiple-choice',
    question: "'Delicious' so'ziga sinonim tanlang:",
    options: ["Tasty", "Boring", "Expensive", "Crowded"],
    correctAnswer: "Tasty"
  },
  {
    type: 'multiple-choice',
    question: "'Furniture' deganda nima tushuniladi?",
    options: ["Stol, stul, shkaf", "Mevalar", "Kiyimlar", "Transport"],
    correctAnswer: "Stol, stul, shkaf"
  },
  {
    type: 'multiple-choice',
    question: "Qaysi so'z 'atrof-muhit' degani?",
    options: ["Environment", "Development", "Equipment", "Movement"],
    correctAnswer: "Environment"
  },

  // --- VOCABULARY WRITTEN (5) ---
  {
    type: 'fill-in-the-blank',
    question: "'Muvaffaqiyatli' so'zining inglizcha tarjimasi nima?",
    correctAnswer: "successful"
  },
  {
    type: 'fill-in-the-blank',
    question: "'Sayohat' (uzoq davom etadigan) ingliz tilida nima bo'ladi?",
    correctAnswer: "journey"
  },
  {
    type: 'fill-in-the-blank',
    question: "'Tushunmoq' fe'lining inglizcha tarjimasi nima?",
    correctAnswer: "understand"
  },
  {
    type: 'fill-in-the-blank',
    question: "'Zarur/Kerakli' so'zini inglizcha yozing:",
    correctAnswer: "necessary"
  },
  {
    type: 'fill-in-the-blank',
    question: "'Tajriba' so'zining inglizcha tarjimasi nima?",
    correctAnswer: "experience"
  }
];

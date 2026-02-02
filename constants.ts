import type { QuizQuestion, Theme, ThemeName, VocabularyItem } from './types';

export const QUIZ_DURATION_SECONDS = 40 * 60; // 40 minutes

export const QUIZ_VOCABULARY: VocabularyItem[] = [
  { term: "Beautiful", definition: "Chiroyli" },
  { term: "Teacher", definition: "O'qituvchi" },
  { term: "Friend", definition: "Do'st" },
  { term: "Family", definition: "Oila" },
  { term: "Market", definition: "Bozor" },
  { term: "Happy", definition: "Baxtli" },
  { term: "Difficult", definition: "Qiyin" },
  { term: "Travel", definition: "Sayohat qilmoq" },
  { term: "Learn", definition: "O'rganmoq" },
  { term: "Work", definition: "Ishlamoq" },
  { term: "Help", definition: "Yordam bermoq" },
  { term: "Quickly", definition: "Tezda" },
  { term: "Always", definition: "Har doim" },
  { term: "Sometimes", definition: "Ba'zan" },
  { term: "Important", definition: "Muhim" },
  { term: "Answer", definition: "Javob" },
  { term: "Question", definition: "Savol" },
  { term: "Problem", definition: "Muammo" },
  { term: "Easy", definition: "Oson" },
  { term: "Strong", definition: "Kuchli" },
  { term: "Early", definition: "Erta" },
  { term: "Late", definition: "Kech" },
  { term: "Buy", definition: "Sotib olmoq" },
  { term: "Sell", definition: "Sotmoq" },
  { term: "Open", definition: "Ochmoq" },
  { term: "Close", definition: "Yopmoq" },
  { term: "Clean", definition: "Toza" },
  { term: "Dirty", definition: "Iflos" },
  { term: "Quiet", definition: "Jim" },
  { term: "Noise", definition: "Shovqin" }
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
    question: "Ingliz alifbosida nechta unli (vowel) harf bor?",
    options: ["5 ta", "21 ta", "26 ta", "10 ta"],
    correctAnswer: "5 ta"
  },
  {
    type: 'multiple-choice',
    question: "Qaysi qatorda faqat unli harflar berilgan?",
    options: ["A, E, I, O, U", "B, C, D, F, G", "X, Y, Z, Q, W", "M, N, L, R, S"],
    correctAnswer: "A, E, I, O, U"
  },
  {
    type: 'multiple-choice',
    question: "Articles: '___ Apple' so'ziga qaysi artikl mos keladi?",
    options: ["An", "A", "The", "No article"],
    correctAnswer: "An"
  },
  {
    type: 'multiple-choice',
    question: "Articles: '___ University' so'zi qaysi artikl bilan ishlatiladi?",
    options: ["A", "An", "The", "No article"],
    correctAnswer: "A"
  },
  {
    type: 'multiple-choice',
    question: "Pronouns: 'Men' olmoshining inglizcha tarjimasi (Subject):",
    options: ["I", "Me", "My", "Mine"],
    correctAnswer: "I"
  },
  {
    type: 'multiple-choice',
    question: "Pronouns: 'Meni / Menga' olmoshining inglizcha tarjimasi (Object):",
    options: ["Me", "I", "My", "Mine"],
    correctAnswer: "Me"
  },
  {
    type: 'multiple-choice',
    question: "Plurals: 'Child' (bola) so'zining ko'plik shakli nima?",
    options: ["Children", "Childs", "Childrens", "Childes"],
    correctAnswer: "Children"
  },
  {
    type: 'multiple-choice',
    question: "Verb Forms: 'Go' fe'lining V2 (Past Simple) shakli qaysi?",
    options: ["Went", "Gone", "Going", "Goes"],
    correctAnswer: "Went"
  },
  {
    type: 'multiple-choice',
    question: "Verb Forms: 'Seen' fe'li qaysi shakl (V) hisoblanadi?",
    options: ["V3", "V1", "V2", "V4"],
    correctAnswer: "V3"
  },
  {
    type: 'multiple-choice',
    question: "Verb Forms: 'V4' shakli qanday yasaladi?",
    options: ["Verb + ing", "Verb + ed", "Verb + s", "Verb + es"],
    correctAnswer: "Verb + ing"
  },
  {
    type: 'multiple-choice',
    question: "Stative Verbs: Qaysi fe'l holatni bildiradi?",
    options: ["Understand", "Run", "Jump", "Eat"],
    correctAnswer: "Understand"
  },
  {
    type: 'multiple-choice',
    question: "Stative Verbs: Qaysi fe'l 'ing' qo'shimchasini odatda olmaydi?",
    options: ["Believe", "Dance", "Sing", "Study"],
    correctAnswer: "Believe"
  },
  {
    type: 'multiple-choice',
    question: "Plurals: 'Man' so'zining ko'plik shaklini toping:",
    options: ["Men", "Mans", "Mens", "Manes"],
    correctAnswer: "Men"
  },
  {
    type: 'multiple-choice',
    question: "Pronouns: 'Mine' (meniki) qaysi turdagi olmosh?",
    options: ["Possessive Pronoun", "Subject Pronoun", "Object Pronoun", "Reflexive Pronoun"],
    correctAnswer: "Possessive Pronoun"
  },
  {
    type: 'multiple-choice',
    question: "Alphabet: Ingliz alifbosidagi oxirgi harf nima?",
    options: ["Z", "X", "Y", "Q"],
    correctAnswer: "Z"
  },

  // --- GRAMMAR WRITTEN (5) ---
  {
    type: 'fill-in-the-blank',
    question: "'Eat' fe'lining V3 (Past Participle) shaklini yozing:",
    correctAnswer: "eaten"
  },
  {
    type: 'fill-in-the-blank',
    question: "'Write' fe'lining V2 (Past Simple) shaklini yozing:",
    correctAnswer: "wrote"
  },
  {
    type: 'fill-in-the-blank',
    question: "'Run' fe'lining V4 (-ing) shaklini yozing:",
    correctAnswer: "running"
  },
  {
    type: 'fill-in-the-blank',
    question: "'Tooth' (tish) so'zining ko'plik shaklini yozing:",
    correctAnswer: "teeth"
  },
  {
    type: 'fill-in-the-blank',
    question: "'Do' fe'lining V2 shaklini yozing:",
    correctAnswer: "did"
  },

  // --- VOCABULARY MCQs (5) ---
  {
    type: 'multiple-choice',
    question: "PDF: 'Early' so'zining tarjimasi nima?",
    options: ["Erta", "Kech", "Tezda", "Doim"],
    correctAnswer: "Erta"
  },
  {
    type: 'multiple-choice',
    question: "PDF: 'Important' so'zining tarjimasi nima?",
    options: ["Muhim", "Oson", "Qiyin", "Jim"],
    correctAnswer: "Muhim"
  },
  {
    type: 'multiple-choice',
    question: "PDF: 'Market' so'zining tarjimasi nima?",
    options: ["Bozor", "Oila", "Do'st", "Savol"],
    correctAnswer: "Bozor"
  },
  {
    type: 'multiple-choice',
    question: "PDF: 'Noise' so'zining tarjimasi nima?",
    options: ["Shovqin", "Jim", "Toza", "Iflos"],
    correctAnswer: "Shovqin"
  },
  {
    type: 'multiple-choice',
    question: "PDF: 'Problem' so'zining tarjimasi nima?",
    options: ["Muammo", "Javob", "Savol", "Oson"],
    correctAnswer: "Muammo"
  },

  // --- VOCABULARY WRITTEN (5) ---
  {
    type: 'fill-in-the-blank',
    question: "PDF: 'Yordam bermoq' so'zini inglizcha yozing:",
    correctAnswer: "help"
  },
  {
    type: 'fill-in-the-blank',
    question: "PDF: 'Tezda' so'zini inglizcha yozing:",
    correctAnswer: "quickly"
  },
  {
    type: 'fill-in-the-blank',
    question: "PDF: 'Sotib olmoq' so'zini inglizcha yozing:",
    correctAnswer: "buy"
  },
  {
    type: 'fill-in-the-blank',
    question: "PDF: 'Har doim' so'zini inglizcha yozing:",
    correctAnswer: "always"
  },
  {
    type: 'fill-in-the-blank',
    question: "PDF: 'Sayohat qilmoq' so'zini inglizcha yozing:",
    correctAnswer: "travel"
  }
];

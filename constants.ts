
import type { QuizQuestion, Theme, ThemeName, VocabularyItem } from './types';

export const QUIZ_DURATION_SECONDS = 40 * 60; // 40 minutes

export const QUIZ_VOCABULARY: VocabularyItem[] = [
  { term: "Improve", definition: "Yaxshilamoq" },
  { term: "Decide", definition: "Qaror qilmoq" },
  { term: "Explain", definition: "Tushuntirmoq" },
  { term: "Continue", definition: "Davom etmoq" },
  { term: "Prepare", definition: "Tayyorlanmoq" },
  { term: "Increase", definition: "Oshirmoq" },
  { term: "Reduce", definition: "Kamaytirmoq" },
  { term: "Choose", definition: "Tanlamoq" },
  { term: "Develop", definition: "Rivojlanmoq" },
  { term: "Achieve", definition: "Erishmoq" },
  { term: "Opportunity", definition: "Imkoniyat" },
  { term: "Experience", definition: "Tajriba" },
  { term: "Environment", definition: "Atrof-muhit" },
  { term: "Situation", definition: "Vaziyat" },
  { term: "Advice", definition: "Maslahat" },
  { term: "Successful", definition: "Muvaffaqiyatli" },
  { term: "Responsible", definition: "Mas'uliyatli" },
  { term: "Independent", definition: "Mustaqil" },
  { term: "Possible", definition: "Mumkin" },
  { term: "Difficult", definition: "Qiyin" },
  { term: "Instead", definition: "O'rniga" },
  { term: "Although", definition: "Garchi bo'lsa ham" },
  { term: "However", definition: "Ammo, biroq" },
  { term: "Finally", definition: "Nihoyat" },
  { term: "Recently", definition: "Yaqinda" },
  { term: "Reliable", definition: "Ishonchli" },
  { term: "Wealthy", definition: "Boy, badavlat" },
  { term: "Postpone", definition: "Keyinga qoldirmoq" },
  { term: "Sense of humor", definition: "Hazil-mutoyiba hissi" }
];

export const FIXED_THEME: Theme = {
  id: 'premium',
  name: 'Premium Dark',
  preview: 'bg-gradient-to-br from-indigo-600 to-violet-700',
  mainGradient: 'from-[#0f172a] via-[#1e1b4b] to-[#0f172a]',
  blob1: 'bg-indigo-500',
  blob2: 'bg-fuchsia-500',
  blob3: 'bg-blue-500',
  button: 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-indigo-500/20',
  progressBar: 'from-indigo-400 via-fuchsia-400 to-indigo-400',
  timerCircle: {
    base: 'text-emerald-400',
    warn: 'text-yellow-400',
    danger: 'text-rose-500',
  },
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // --- 20 Grammar Multiple Choice (Present, Past, Future Simple) ---
  {
    type: 'multiple-choice',
    question: "Present Simple: 'She ___ (drink) coffee every morning.'",
    options: ["drinks", "drink", "drinking", "is drink"],
    correctAnswer: "drinks"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple: 'They ___ (visit) Paris last summer.'",
    options: ["visited", "visit", "visiting", "have visited"],
    correctAnswer: "visited"
  },
  {
    type: 'multiple-choice',
    question: "Future Simple: 'I think it ___ (snow) tomorrow.'",
    options: ["will snow", "snows", "is snowing", "snowed"],
    correctAnswer: "will snow"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple (Inkor): 'We ___ (not / have) a car.'",
    options: ["don't have", "doesn't have", "not have", "haven't"],
    correctAnswer: "don't have"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple (So'roq): '___ you see the movie yesterday?'",
    options: ["Did", "Do", "Does", "Have"],
    correctAnswer: "Did"
  },
  {
    type: 'multiple-choice',
    question: "Future Simple (Inkor): 'He ___ (not / come) to the party.'",
    options: ["won't come", "will not coming", "doesn't come", "didn't come"],
    correctAnswer: "won't come"
  },
  {
    type: 'multiple-choice',
    question: "To Be (Present): 'They ___ my best friends.'",
    options: ["are", "is", "am", "be"],
    correctAnswer: "are"
  },
  {
    type: 'multiple-choice',
    question: "To Be (Past): 'I ___ at home all day yesterday.'",
    options: ["was", "were", "been", "am"],
    correctAnswer: "was"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple: 'He ___ (watch) TV in the evening.'",
    options: ["watches", "watch", "watchs", "is watch"],
    correctAnswer: "watches"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple: 'I ___ (buy) a new phone two days ago.'",
    options: ["bought", "buyed", "buys", "buying"],
    correctAnswer: "bought"
  },
  {
    type: 'multiple-choice',
    question: "Future Simple: 'Wait! I ___ (help) you with those bags.'",
    options: ["will help", "help", "helping", "helped"],
    correctAnswer: "will help"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple: 'Birds ___ (fly) in the sky.'",
    options: ["fly", "flies", "flying", "are fly"],
    correctAnswer: "fly"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple: 'She ___ (go) to the doctor this morning.'",
    options: ["went", "gone", "goed", "goes"],
    correctAnswer: "went"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple (So'roq): '___ your brother play guitar?'",
    options: ["Does", "Do", "Is", "Are"],
    correctAnswer: "Does"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple (Inkor): 'I ___ (not / know) the answer.'",
    options: ["didn't know", "don't know", "not knew", "wasn't know"],
    correctAnswer: "didn't know"
  },
  {
    type: 'multiple-choice',
    question: "Future Simple (So'roq): '___ you be at home tonight?'",
    options: ["Will", "Do", "Are", "Shall"],
    correctAnswer: "Will"
  },
  {
    type: 'multiple-choice',
    question: "'Every day', 'usually', 'often' qaysi zamonning kalit so'zlari?",
    options: ["Present Simple", "Past Simple", "Future Simple", "Present Continuous"],
    correctAnswer: "Present Simple"
  },
  {
    type: 'multiple-choice',
    question: "'Yesterday', 'last week', 'ago' qaysi zamonning kalit so'zlari?",
    options: ["Past Simple", "Present Simple", "Future Simple", "Past Continuous"],
    correctAnswer: "Past Simple"
  },
  {
    type: 'multiple-choice',
    question: "'Tomorrow', 'next month', 'soon' qaysi zamonning kalit so'zlari?",
    options: ["Future Simple", "Present Simple", "Past Simple", "Future Continuous"],
    correctAnswer: "Future Simple"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple: 'We ___ (see) a great show last night.'",
    options: ["saw", "seen", "seed", "sees"],
    correctAnswer: "saw"
  },

  // --- 10 Grammar Fill-in-the-blank (Yozma) ---
  {
    type: 'fill-in-the-blank',
    question: "'Sleep' fe'lining o'tgan zamon (Past Simple) shaklini yozing:",
    correctAnswer: "slept"
  },
  {
    type: 'fill-in-the-blank',
    question: "'Study' fe'liga Present Simple da 'he' uchun -s qo'shing:",
    correctAnswer: "studies"
  },
  {
    type: 'fill-in-the-blank',
    question: "Future Simple: 'I am sure he ___ (win) the race.'",
    correctAnswer: "will win"
  },
  {
    type: 'fill-in-the-blank',
    question: "'Write' fe'lining o'tgan zamon (V2) shaklini yozing:",
    correctAnswer: "wrote"
  },
  {
    type: 'fill-in-the-blank',
    question: "Present Simple (Inkor): 'I ___ (not / like) apples.'",
    correctAnswer: "don't like"
  },
  {
    type: 'fill-in-the-blank',
    question: "Past Simple (So'roq): '___ you have breakfast today?'",
    correctAnswer: "did"
  },
  {
    type: 'fill-in-the-blank',
    question: "'To be' (Past) 'they' uchun mos shaklini yozing:",
    correctAnswer: "were"
  },
  {
    type: 'fill-in-the-blank',
    question: "Future Simple (Inkor): 'I ___ (not / tell) anyone.'",
    correctAnswer: "won't tell"
  },
  {
    type: 'fill-in-the-blank',
    question: "'Make' fe'lining o'tgan zamon (V2) shaklini yozing:",
    correctAnswer: "made"
  },
  {
    type: 'fill-in-the-blank',
    question: "'Have' fe'lining Present Simple 'she' uchun shaklini yozing:",
    correctAnswer: "has"
  },

  // --- 10 Vocabulary Multiple Choice ---
  {
    type: 'multiple-choice',
    question: "Ingliz tilida 'Imkoniyat' so'zi qanday bo'ladi?",
    options: ["Opportunity", "Environment", "Experience", "Situation"],
    correctAnswer: "Opportunity"
  },
  {
    type: 'multiple-choice',
    question: "'Instead' so'zining tarjimasi nima?",
    options: ["O'rniga", "Ammo", "Garchi", "Nihoyat"],
    correctAnswer: "O'rniga"
  },
  {
    type: 'multiple-choice',
    question: "'Reliable' so'zining ma'nosi nima?",
    options: ["Ishonchli", "Boy", "Qiyin", "Yaqinda"],
    correctAnswer: "Ishonchli"
  },
  {
    type: 'multiple-choice',
    question: "Ingliz tilida 'Tushuntirmoq' so'zi qanday?",
    options: ["Explain", "Develop", "Choose", "Reduce"],
    correctAnswer: "Explain"
  },
  {
    type: 'multiple-choice',
    question: "'Postpone' so'zining tarjimasi qaysi?",
    options: ["Keyinga qoldirmoq", "Tayyorlanmoq", "Erishmoq", "Oshirmoq"],
    correctAnswer: "Keyinga qoldirmoq"
  },
  {
    type: 'multiple-choice',
    question: "'Environment' so'zining tarjimasi nima?",
    options: ["Atrof-muhit", "Vaziyat", "Tajriba", "Maslahat"],
    correctAnswer: "Atrof-muhit"
  },
  {
    type: 'multiple-choice',
    question: "Ingliz tilida 'Muvaffaqiyatli' so'zi qanday bo'ladi?",
    options: ["Successful", "Responsible", "Independent", "Possible"],
    correctAnswer: "Successful"
  },
  {
    type: 'multiple-choice',
    question: "'Wealthy' so'zining sinonimi qaysi?",
    options: ["Rich", "Poor", "Healthy", "Strong"],
    correctAnswer: "Rich"
  },
  {
    type: 'multiple-choice',
    question: "Ingliz tilida 'Tajriba' so'zi qanday bo'ladi?",
    options: ["Experience", "Advice", "Decision", "Improvement"],
    correctAnswer: "Experience"
  },
  {
    type: 'multiple-choice',
    question: "'Choose' so'zining tarjimasi nima?",
    options: ["Tanlamoq", "Tayyorlanmoq", "Qaror qilmoq", "Tushuntirmoq"],
    correctAnswer: "Tanlamoq"
  }
];

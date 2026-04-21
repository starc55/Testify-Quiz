
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
  // --- 30 Grammar Multiple Choice (Basics to Future in the Past) ---
  {
    type: 'multiple-choice',
    question: "Ingliz alifbosida nechta unli (vowel) harf bor?",
    options: ["5 ta", "6 ta", "21 ta", "26 ta"],
    correctAnswer: "5 ta"
  },
  {
    type: 'multiple-choice',
    question: "'University' so'zi oldidan qaysi artikl ishlatiladi?",
    options: ["a", "an", "the", "-"],
    correctAnswer: "a"
  },
  {
    type: 'multiple-choice',
    question: "'Person' so'zining ko'plik shakli qaysi?",
    options: ["People", "Persons", "Peoples", "Persones"],
    correctAnswer: "People"
  },
  {
    type: 'multiple-choice',
    question: "'They' olmoshining egalik (possessive adjective) shakli qaysi?",
    options: ["Their", "Them", "Theirs", "They's"],
    correctAnswer: "Their"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple: 'She ___ (drink) coffee every morning.'",
    options: ["drinks", "drink", "drinking", "is drink"],
    correctAnswer: "drinks"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple (Inkor): 'We ___ (not / have) a car.'",
    options: ["don't have", "doesn't have", "not have", "haven't"],
    correctAnswer: "don't have"
  },
  {
    type: 'multiple-choice',
    question: "Present Continuous: 'Look! The baby ___ (sleep) right now.'",
    options: ["is sleeping", "sleeps", "are sleeping", "sleeping"],
    correctAnswer: "is sleeping"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple: 'They ___ (visit) Paris last summer.'",
    options: ["visited", "visit", "visiting", "have visited"],
    correctAnswer: "visited"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple (So'roq): '___ you see the movie yesterday?'",
    options: ["Did", "Do", "Does", "Have"],
    correctAnswer: "Did"
  },
  {
    type: 'multiple-choice',
    question: "Past Continuous: 'I ___ (read) a book when you called me.'",
    options: ["was reading", "were reading", "read", "am reading"],
    correctAnswer: "was reading"
  },
  {
    type: 'multiple-choice',
    question: "Present Perfect: 'I ___ (see) that movie three times.'",
    options: ["have seen", "has seen", "saw", "see"],
    correctAnswer: "have seen"
  },
  {
    type: 'multiple-choice',
    question: "Present Perfect: 'She ___ (just / leave) the office.'",
    options: ["has just left", "have just left", "just left", "is just left"],
    correctAnswer: "has just left"
  },
  {
    type: 'multiple-choice',
    question: "Past Perfect: 'The train ___ (leave) before we arrived at the station.'",
    options: ["had left", "has left", "leaves", "was left"],
    correctAnswer: "had left"
  },
  {
    type: 'multiple-choice',
    question: "Future Simple: 'I think it ___ (snow) tomorrow.'",
    options: ["will snow", "snows", "is snowing", "snowed"],
    correctAnswer: "will snow"
  },
  {
    type: 'multiple-choice',
    question: "Future Simple (Inkor): 'He ___ (not / come) to the party.'",
    options: ["won't come", "will not coming", "doesn't come", "didn't come"],
    correctAnswer: "won't come"
  },
  {
    type: 'multiple-choice',
    question: "Future Continuous: 'This time tomorrow, I ___ (fly) to London.'",
    options: ["will be flying", "will fly", "am flying", "shall fly"],
    correctAnswer: "will be flying"
  },
  {
    type: 'multiple-choice',
    question: "Future Perfect: 'By next month, we ___ (finish) the project.'",
    options: ["will have finished", "will finish", "shall finished", "have finished"],
    correctAnswer: "will have finished"
  },
  {
    type: 'multiple-choice',
    question: "Present Perfect Continuous: 'I ___ (wait) for two hours.'",
    options: ["have been waiting", "has been waiting", "am waiting", "wait"],
    correctAnswer: "have been waiting"
  },
  {
    type: 'multiple-choice',
    question: "Past Perfect Continuous: 'They ___ (play) for an hour when it started to rain.'",
    options: ["had been playing", "have been playing", "were playing", "played"],
    correctAnswer: "had been playing"
  },
  {
    type: 'multiple-choice',
    question: "Future Perfect Continuous: 'By December, I ___ (work) here for five years.'",
    options: ["will have been working", "will have worked", "shall be working", "am working"],
    correctAnswer: "will have been working"
  },
  {
    type: 'multiple-choice',
    question: "Future in the Past: 'He said he ___ (come) to help me.'",
    options: ["would come", "will come", "comes", "came"],
    correctAnswer: "would come"
  },
  {
    type: 'multiple-choice',
    question: "Future in the Past: 'I knew that you ___ (pass) the exam.'",
    options: ["would pass", "will pass", "pass", "passed"],
    correctAnswer: "would pass"
  },
  {
    type: 'multiple-choice',
    question: "Passive Voice (Present Simple): 'English ___ (speak) all over the world.'",
    options: ["is spoken", "speaks", "are spoken", "was spoken"],
    correctAnswer: "is spoken"
  },
  {
    type: 'multiple-choice',
    question: "Passive Voice (Past Simple): 'The window ___ (break) yesterday.'",
    options: ["was broken", "is broken", "broke", "were broken"],
    correctAnswer: "was broken"
  },
  {
    type: 'multiple-choice',
    question: "Zero Conditional: 'If you heat ice, it ___ (melt).'",
    options: ["melts", "will melt", "melted", "is melting"],
    correctAnswer: "melts"
  },
  {
    type: 'multiple-choice',
    question: "First Conditional: 'If it rains, we ___ (stay) at home.'",
    options: ["will stay", "stay", "stayed", "would stay"],
    correctAnswer: "will stay"
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
    question: "Qaysi gap grammatik jihatdan to'g'ri?",
    options: ["She doesn't like apples", "She don't like apples", "She not likes apples", "She isn't like apples"],
    correctAnswer: "She doesn't like apples"
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

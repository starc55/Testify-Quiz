
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
    base: 'text-indigo-400',
    warn: 'text-amber-400',
    danger: 'text-rose-500',
  },
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // --- 20 Multiple Choice (Grammar Theory & Application) ---
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
    question: "'Mouse' (sichqon) so'zining ko'plik shakli qaysi?",
    options: ["Mice", "Mouses", "Mices", "Mouse"],
    correctAnswer: "Mice"
  },
  {
    type: 'multiple-choice',
    question: "'They' olmoshining egalik (possessive adjective) shakli qaysi?",
    options: ["Their", "Them", "Theirs", "They's"],
    correctAnswer: "Their"
  },
  {
    type: 'multiple-choice',
    question: "'There ___ some milk in the bottle.' (Bo'sh joyni to'ldiring)",
    options: ["is", "are", "am", "be"],
    correctAnswer: "is"
  },
  {
    type: 'multiple-choice',
    question: "'I ___ (be) born in 2005.' (O'tgan zamon shakli)",
    options: ["was", "were", "am", "been"],
    correctAnswer: "was"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple: 'We usually ___ (go) to school by bus.'",
    options: ["go", "goes", "going", "went"],
    correctAnswer: "go"
  },
  {
    type: 'multiple-choice',
    question: "Present Continuous: 'Look! The baby ___ (sleep).'",
    options: ["is sleeping", "sleeps", "are sleeping", "sleeping"],
    correctAnswer: "is sleeping"
  },
  {
    type: 'multiple-choice',
    question: "Present Perfect: 'I ___ (see) that movie three times.'",
    options: ["have seen", "has seen", "saw", "see"],
    correctAnswer: "have seen"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple (Inkor): 'She ___ (not / work) on Saturdays.'",
    options: ["doesn't work", "don't work", "isn't work", "not works"],
    correctAnswer: "doesn't work"
  },
  {
    type: 'multiple-choice',
    question: "Future Simple: '___ you help me with my homework?'",
    options: ["Will", "Do", "Are", "Have"],
    correctAnswer: "Will"
  },
  {
    type: 'multiple-choice',
    question: "Preposition: 'The book is ___ the shelf.' (Kitob tokchada)",
    options: ["on", "in", "at", "under"],
    correctAnswer: "on"
  },
  {
    type: 'multiple-choice',
    question: "Preposition of time: 'I wake up ___ 7 o'clock.'",
    options: ["at", "on", "in", "for"],
    correctAnswer: "at"
  },
  {
    type: 'multiple-choice',
    question: "Past Continuous: 'What ___ you doing when I called you?'",
    options: ["were", "was", "are", "did"],
    correctAnswer: "were"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple: 'He ___ (finish) his work an hour ago.'",
    options: ["finished", "finish", "has finished", "finishes"],
    correctAnswer: "finished"
  },
  {
    type: 'multiple-choice',
    question: "Qaysi gap grammatik jihatdan to'g'ri?",
    options: ["She doesn't like apples", "She don't like apples", "She not likes apples", "She isn't like apples"],
    correctAnswer: "She doesn't like apples"
  },
  {
    type: 'multiple-choice',
    question: "'___ there any students in the classroom?'",
    options: ["Are", "Is", "Am", "Be"],
    correctAnswer: "Are"
  },
  {
    type: 'multiple-choice',
    question: "Possessive Pronoun: 'This is my car. It is ___.'",
    options: ["mine", "my", "me", "I"],
    correctAnswer: "mine"
  },
  {
    type: 'multiple-choice',
    question: "Comparison: 'He is ___ than his brother.'",
    options: ["taller", "tallest", "more tall", "tall"],
    correctAnswer: "taller"
  },
  {
    type: 'multiple-choice',
    question: "Present Perfect: 'I ___ (never / be) to London.'",
    options: ["have never been", "has never been", "never was", "never been"],
    correctAnswer: "have never been"
  },

  // --- 10 Fill-in-the-blank (Yozma savollar) ---
  {
    type: 'fill-in-the-blank',
    question: "'Child' (bola) so'zining ko'plik shaklini yozing:",
    correctAnswer: "children"
  },
  {
    type: 'fill-in-the-blank',
    question: "'Go' fe'lining o'tgan zamon (V2) shaklini yozing:",
    correctAnswer: "went"
  },
  {
    type: 'fill-in-the-blank',
    question: "'She ___ (be) a doctor.' (Bo'sh joyni to'ldiring)",
    correctAnswer: "is"
  },
  {
    type: 'fill-in-the-blank',
    question: "Present Continuous: 'I ___ (write) a letter now.'",
    correctAnswer: "am writing"
  },
  {
    type: 'fill-in-the-blank',
    question: "'Eat' fe'lining V3 (Past Participle) shaklini yozing:",
    correctAnswer: "eaten"
  },
  {
    type: 'fill-in-the-blank',
    question: "So'roq shakli: '___ you like pizza?'",
    correctAnswer: "do"
  },
  {
    type: 'fill-in-the-blank',
    question: "Past Simple (Inkor): 'They ___ (not / be) at home yesterday.'",
    correctAnswer: ["were not", "weren't"]
  },
  {
    type: 'fill-in-the-blank',
    question: "Present Perfect: 'I have ___ (live) here for ten years.'",
    correctAnswer: "lived"
  },
  {
    type: 'fill-in-the-blank',
    question: "'Knife' (pichoq) so'zining ko'plik shaklini yozing:",
    correctAnswer: "knives"
  },
  {
    type: 'fill-in-the-blank',
    question: "Present Simple: 'He ___ (play) football every Sunday.'",
    correctAnswer: "plays"
  }
];

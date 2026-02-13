
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
  { term: "Recently", definition: "Yaqinda" }
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
  {
    type: 'multiple-choice',
    question: "Ingliz alifbosida nechta harf bor?",
    options: ["26 ta", "21 ta", "5 ta", "28 ta"],
    correctAnswer: "26 ta"
  },
  {
    type: 'multiple-choice',
    question: "Qaysi artikl to'g'ri: 'It is ___ umbrella.'",
    options: ["an", "a", "the", "-"],
    correctAnswer: "an"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple: 'She ___ (like) chocolate.'",
    options: ["likes", "like", "liking", "is like"],
    correctAnswer: "likes"
  },
  {
    type: 'multiple-choice',
    question: "Present Continuous: 'They ___ (watch) TV now.'",
    options: ["are watching", "is watching", "am watching", "watch"],
    correctAnswer: "are watching"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple: 'I ___ (go) to the park yesterday.'",
    options: ["went", "go", "gone", "goed"],
    correctAnswer: "went"
  },
  {
    type: 'multiple-choice',
    question: "Past Continuous: 'We ___ (play) football when it started to rain.'",
    options: ["were playing", "was playing", "are playing", "played"],
    correctAnswer: "were playing"
  },
  {
    type: 'multiple-choice',
    question: "Present Perfect: 'I ___ (finish) my homework already.'",
    options: ["have finished", "has finished", "finish", "finished"],
    correctAnswer: "have finished"
  },
  {
    type: 'multiple-choice',
    question: "Future Simple: 'I think it ___ (rain) tomorrow.'",
    options: ["will rain", "rains", "is raining", "rained"],
    correctAnswer: "will rain"
  },
  {
    type: 'multiple-choice',
    question: "Future Continuous: 'At this time tomorrow, I ___ (fly) to New York.'",
    options: ["will be flying", "will fly", "am flying", "fly"],
    correctAnswer: "will be flying"
  },
  {
    type: 'multiple-choice',
    question: "Plural forms: What is the plural of 'Child'?",
    options: ["Children", "Childs", "Childrens", "Childes"],
    correctAnswer: "Children"
  },
  {
    type: 'multiple-choice',
    question: "Pronouns: 'This is ___ book' (Mening kitobim).",
    options: ["my", "me", "I", "mine"],
    correctAnswer: "my"
  },
  {
    type: 'multiple-choice',
    question: "To Be: 'My friends ___ very kind.'",
    options: ["are", "is", "am", "be"],
    correctAnswer: "are"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple (To Be): 'They ___ at home last night.'",
    options: ["were", "was", "are", "been"],
    correctAnswer: "were"
  },
  {
    type: 'multiple-choice',
    question: "Present Perfect: 'She ___ (live) here for 5 years.'",
    options: ["has lived", "have lived", "lived", "is living"],
    correctAnswer: "has lived"
  },
  {
    type: 'multiple-choice',
    question: "Past Perfect: 'The train ___ (leave) before we arrived.'",
    options: ["had left", "has left", "leaves", "left"],
    correctAnswer: "had left"
  },
  {
    type: 'multiple-choice',
    question: "Comparison: 'Apple is ___ than lemon.'",
    options: ["sweeter", "sweetest", "more sweet", "sweet"],
    correctAnswer: "sweeter"
  },
  {
    type: 'multiple-choice',
    question: "Articles: 'I saw ___ elephant at the zoo.'",
    options: ["an", "a", "the", "-"],
    correctAnswer: "an"
  },
  {
    type: 'multiple-choice',
    question: "Prepositions: 'The cat is ___ the table.'",
    options: ["under", "at", "in", "of"],
    correctAnswer: "under"
  },
  {
    type: 'multiple-choice',
    question: "Question forms: '___ do you live?'",
    options: ["Where", "When", "What", "Who"],
    correctAnswer: "Where"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple (Negative): 'He ___ like coffee.'",
    options: ["doesn't", "don't", "isn't", "not"],
    correctAnswer: "doesn't"
  },
  {
    type: 'multiple-choice',
    question: "Future Simple: '___ you help me?'",
    options: ["Will", "Do", "Are", "Have"],
    correctAnswer: "Will"
  },
  {
    type: 'multiple-choice',
    question: "Possessive: 'This is ___ bag' (Uning sumkasi - qiz bola).",
    options: ["her", "hers", "his", "she"],
    correctAnswer: "her"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple (Irregular): What is the V2 of 'Take'?",
    options: ["Took", "Taken", "Takes", "Taked"],
    correctAnswer: "Took"
  },
  {
    type: 'multiple-choice',
    question: "Present Continuous: 'Listen! Someone ___ (sing).'",
    options: ["is singing", "are singing", "sings", "singing"],
    correctAnswer: "is singing"
  },
  {
    type: 'multiple-choice',
    question: "Alphabet: How many vowels (unli) are in English?",
    options: ["5", "21", "26", "6"],
    correctAnswer: "5"
  },
  {
    type: 'fill-in-the-blank',
    question: "Write the V3 (Past Participle) of 'Do':",
    correctAnswer: "done"
  },
  {
    type: 'fill-in-the-blank',
    question: "Write the V2 (Past Simple) of 'Speak':",
    correctAnswer: "spoke"
  },
  {
    type: 'fill-in-the-blank',
    question: "Complete the Future Continuous sentence: 'I ___ (wait) for you.'",
    correctAnswer: "will be waiting"
  },
  {
    type: 'fill-in-the-blank',
    question: "Write the plural of 'Foot':",
    correctAnswer: "feet"
  },
  {
    type: 'fill-in-the-blank',
    question: "Write the V1 (Base form) of 'Bought':",
    correctAnswer: "buy"
  },
  {
    type: 'multiple-choice',
    question: "PDF: 'Improve' so'zining tarjimasi?",
    options: ["Yaxshilamoq", "Oshirmoq", "Kamaytirmoq", "Tayyorlanmoq"],
    correctAnswer: "Yaxshilamoq"
  },
  {
    type: 'multiple-choice',
    question: "PDF: 'Achieve' so'zining tarjimasi?",
    options: ["Erishmoq", "Tanlamoq", "Rivojlanmoq", "Tushuntirmoq"],
    correctAnswer: "Erishmoq"
  },
  {
    type: 'multiple-choice',
    question: "PDF: 'Environment' so'zining tarjimasi?",
    options: ["Atrof-muhit", "Imkoniyat", "Vaziyat", "Tajriba"],
    correctAnswer: "Atrof-muhit"
  },
  {
    type: 'multiple-choice',
    question: "PDF: 'Successfull' so'zining tarjimasi?",
    options: ["Muvaffaqiyatli", "Mas'uliyatli", "Mustaqil", "Mumkin"],
    correctAnswer: "Muvaffaqiyatli"
  },
  {
    type: 'multiple-choice',
    question: "PDF: 'Situation' so'zining tarjimasi?",
    options: ["Vaziyat", "Maslahat", "Imkoniyat", "Tajriba"],
    correctAnswer: "Vaziyat"
  },
  {
    type: 'multiple-choice',
    question: "PDF: 'Instead' so'zining tarjimasi?",
    options: ["O'rniga", "Ammo", "Garchi", "Yaqinda"],
    correctAnswer: "O'rniga"
  },
  {
    type: 'multiple-choice',
    question: "PDF: 'Difficult' so'zining tarjimasi?",
    options: ["Qiyin", "Mumkin", "Mustaqil", "Maslahat"],
    correctAnswer: "Qiyin"
  },
  {
    type: 'multiple-choice',
    question: "PDF: 'Experience' so'zining tarjimasi?",
    options: ["Tajriba", "Vaziyat", "Imkoniyat", "Nihoyat"],
    correctAnswer: "Tajriba"
  },
  {
    type: 'multiple-choice',
    question: "PDF: 'Recently' so'zining tarjimasi?",
    options: ["Yaqinda", "Nihoyat", "Ammo", "Garchi"],
    correctAnswer: "Yaqinda"
  },
  {
    type: 'multiple-choice',
    question: "PDF: 'Advice' so'zining tarjimasi?",
    options: ["Maslahat", "Tajriba", "Vaziyat", "Imkoniyat"],
    correctAnswer: "Maslahat"
  },
  {
    type: 'fill-in-the-blank',
    question: "PDF: 'Mustaqil' so'zini inglizcha yozing:",
    correctAnswer: "independent"
  },
  {
    type: 'fill-in-the-blank',
    question: "PDF: 'Tayyorlanmoq' so'zini inglizcha yozing:",
    correctAnswer: "prepare"
  },
  {
    type: 'fill-in-the-blank',
    question: "PDF: 'Oshirmoq' so'zini inglizcha yozing:",
    correctAnswer: "increase"
  },
  {
    type: 'fill-in-the-blank',
    question: "PDF: 'Tanlamoq' so'zini inglizcha yozing:",
    correctAnswer: "choose"
  },
  {
    type: 'fill-in-the-blank',
    question: "PDF: 'Nihoyat' so'zini inglizcha yozing:",
    correctAnswer: "finally"
  }
];

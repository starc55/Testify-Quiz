import type { QuizQuestion, Theme, ThemeName, VocabularyItem } from './types';

export const QUIZ_DURATION_SECONDS = 45 * 60; // 45 minutes for 30 questions

export const QUIZ_VOCABULARY: VocabularyItem[] = [
  { term: "Possessives ('s & of)", definition: "Jonli va jonsiz otlarning egalik shakllari va tegishlilik ko'rsatkichlari." },
  { term: "Articles (a, an, the)", definition: "Noaniq va aniq artikllar, ularning tovush va umumlashtirish bo'yicha ishlatilishi." },
  { term: "Numerals (Sonlar)", definition: "Sanoq, tartib va kasr sonlarning to'g'ri ifodalanishi." },
  { term: "Compound Nouns", definition: "Ikki yoki undan ortiq so'zdan tashkil topgan murakkab otlar yasash." },
  { term: "To Be & Tenses", definition: "To be fe'li shakllari hamda Simple, Continuous va Present Perfect zamonlari." }
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
  // === 1. Otlarning egalik shakli ('s & of) - 6ta ===
  {
    type: 'multiple-choice',
    question: "Choose the correct possessive form for a shared possession:\nTom and Lily are siblings. This is ... bedroom.",
    options: ["Tom's and Lily's", "Tom and Lily's", "Tom and Lilys'", "Tom's and Lily"],
    correctAnswer: "Tom and Lily's",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct possessive form for singular nouns ending in -s:\n... new bicycle was stolen yesterday.",
    options: ["Charles's", "Charle's", "Charles'", "A and C are both correct"],
    correctAnswer: "A and C are both correct",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Select the grammatically correct phrase for an inanimate object:",
    options: ["The leg of the table is broken.", "The table's leg is broken.", "The tables leg is broken.", "The table of leg is broken."],
    correctAnswer: "The leg of the table is broken.",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct possessive form for irregular plural nouns:\nThis shop sells high-quality ... shoes.",
    options: ["children's", "childrens'", "childrens's", "child's"],
    correctAnswer: "children's",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Complete the sentence with the correct possessive form:\nI am staying at my ... house this weekend.",
    options: ["aunt's and uncle's", "aunt and uncle's", "aunt's and uncle", "aunts and uncles"],
    correctAnswer: "aunt and uncle's",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct possessive for regular plural nouns:\nAll the ... uniforms must be clean for the ceremony.",
    options: ["officers's", "officer's", "officers'", "officer"],
    correctAnswer: "officers'",
    category: "possessives"
  },

  // === 2. Artikllar (a, an, the, zero article) - 6ta ===
  {
    type: 'multiple-choice',
    question: "Choose the correct article based on pronunciation:\nThey hired ... university graduate for the job.",
    options: ["a", "an", "the", "- (no article)"],
    correctAnswer: "a",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct combination of articles:\n... Amazon is ... longest river in South America.",
    options: ["The / the", "A / the", "The / a", "- / the"],
    correctAnswer: "The / the",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct article for general activities vs specific ones:\nI usually listen to ... music to relax, but ... music of this film is awful.",
    options: ["- (no article) / the", "the / the", "a / the", "- (no article) / - (no article)"],
    correctAnswer: "- (no article) / the",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct article for singular countable exclamation:\nWhat ... unusual design! I have never seen anything like this before.",
    options: ["a", "an", "the", "- (no article)"],
    correctAnswer: "an",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct article for individual mountain peaks vs mountain ranges:\n... Alps are situated in Europe, but ... Mount Blanc is the highest peak.",
    options: ["The / - (no article)", "The / the", "- / - (no article)", "- / the"],
    correctAnswer: "The / - (no article)",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Select the correct article combination:\nMy brother plays ... violin, but he is not very good at ... basketball.",
    options: ["the / - (no article)", "the / the", "- / - (no article)", "a / the"],
    correctAnswer: "the / - (no article)",
    category: "articles"
  },

  // === 3. Sonlar (Numerals) - 6ta ===
  {
    type: 'multiple-choice',
    question: "Choose the correct expression for the fraction 3/4:",
    options: ["three quarters", "three fourth", "third fourths", "three points four"],
    correctAnswer: "three quarters",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct written form of the ordinal number for 43 (43-):",
    options: ["forty-third", "fourty-third", "forty-three", "forty-threeth"],
    correctAnswer: "forty-third",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Select the correct expression of the decimal fraction 7.02:",
    options: ["seven point zero two", "seven point two", "seven points zero two", "seven and two"],
    correctAnswer: "seven point zero two",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "How is the year '1905' pronounced in spoken English?",
    options: ["nineteen zero five", "nineteen hundred and five", "nineteen oh five", "one thousand nine hundred and five"],
    correctAnswer: "nineteen oh five",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct spelling of the ordinal number for 20 (20-):",
    options: ["twentieth", "twentyth", "twenteth", "twentiethy"],
    correctAnswer: "twentieth",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Which of the following expressions is grammatically correct for indefinite large numbers?",
    options: ["Five thousands people attended.", "Five thousand people attended.", "Five thousand of people attended.", "Five thousands of people attended."],
    correctAnswer: "Five thousand people attended.",
    category: "numerals"
  },

  // === 4. Compound Nouns & To Be Verb - 6ta ===
  {
    type: 'multiple-choice',
    question: "Choose the correct plural form of the compound noun 'sister-in-law':",
    options: ["sisters-in-law", "sister-in-laws", "sisters-in-laws", "sister-ins-law"],
    correctAnswer: "sisters-in-law",
    category: "compounds"
  },
  {
    type: 'multiple-choice',
    question: "In the compound noun 'apple tree', what grammatical function does 'apple' perform?",
    options: ["It acts as an adjective (noun adjunct) modifying tree.", "It acts as the primary subject.", "It is a plural possessive form.", "It is a conjunction link."],
    correctAnswer: "It acts as an adjective (noun adjunct) modifying tree.",
    category: "compounds"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct compound noun to describe an event duration:",
    options: ["a two-hour meeting", "a two-hours meeting", "a two hour's meeting", "two hours meeting"],
    correctAnswer: "a two-hour meeting",
    category: "compounds"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct form of 'to be' for plural agreement with collective nouns in specific context:\nThe jury ... divided in their opinions.",
    options: ["was", "were", "been", "being"],
    correctAnswer: "were",
    category: "compounds"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct 'to be' verb form for compound subjects:\nNeither the teacher nor the students ... present in the hall yesterday.",
    options: ["was", "were", "is", "been"],
    correctAnswer: "were",
    category: "compounds"
  },
  {
    type: 'multiple-choice',
    question: "Complete the sentence with the correct subjunctive 'to be' form:\nIf I ... you, I would take that opportunity immediately.",
    options: ["was", "were", "am", "be"],
    correctAnswer: "were",
    category: "compounds"
  },

  // === 5. Zamonlar perfectgacha (Simple, Continuous, Perfect) - 6ta ===
  {
    type: 'multiple-choice',
    question: "Choose the correct present continuous aspect for temporary actions:\nMy dad usually works in an office, but this week he ... from home.",
    options: ["works", "is working", "worked", "has worked"],
    correctAnswer: "is working",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct present perfect form emphasizing present result:\nI can't open the door. I ... my key.",
    options: ["lost", "was losing", "have lost", "lose"],
    correctAnswer: "have lost",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct past continuous aspect (interrupted action):\nWhile she ... dinner, the doorbell rang.",
    options: ["cooked", "was cooking", "is cooking", "has cooked"],
    correctAnswer: "was cooking",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct present simple form for scheduled future events:\nThe train to Samarkand ... at 8:00 AM tomorrow morning.",
    options: ["leaves", "is leaving", "will leave", "leave"],
    correctAnswer: "leaves",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Complete the sentence with the correct tense:\nWe ... each other since we were children.",
    options: ["know", "are knowing", "have known", "knew"],
    correctAnswer: "have known",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct past simple form for finished past actions:\nLast year, they ... all the way to Bukhara by car.",
    options: ["travelled", "have travelled", "were travelling", "travels"],
    correctAnswer: "travelled",
    category: "tenses"
  }
];

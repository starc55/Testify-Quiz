import type { QuizQuestion, Theme, ThemeName, VocabularyItem } from './types';

export const QUIZ_DURATION_SECONDS = 60 * 60; // 60 minutes

export const QUIZ_VOCABULARY: VocabularyItem[] = [
  { term: "'s and of (Possessives)", definition: "Egalik ko'rsatkichlari va 'of' predlogi orqali tegishlilikni ifodalash qoidalari." },
  { term: "Numeral (Sonlar)", definition: "Sanoq va tartib sonlar, kasr sonlar hamda o'nli kasrlarning to'g'ri o'qilishi va yozilishi." },
  { term: "Article (Artikllar)", definition: "Noaniq (a, an) va aniq (the) artikllar, hamda artiklsiz holatlar (zero article)." },
  { term: "Pronoun (Olmoshlar)", definition: "Kishilik, egalik, o'zlik va nisbiy olmoshlarning grammatik vazifalari." },
  { term: "Tenses (Zamonlar)", definition: "Faol va majhul nisbatdagi zamon guruhlari hamda if-clauses shart mayllari." }
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
  // === TOPIK: 's and of (Possessives) ===
  {
    type: 'multiple-choice',
    question: "Choose the correct possessive form:\nThis is ... laptop.",
    options: ["my brother's", "my brothers of", "my brother", "my brothers's"],
    correctAnswer: "my brother's",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct answer:\nWe usually visit ... house on Sundays.",
    options: ["the parents of mine's", "our parents'", "our parents's", "parent of us"],
    correctAnswer: "our parents'",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct possessive form:\nThe ... are very clean now.",
    options: ["hotel's rooms", "rooms of the hotel", "hotel's room", "room of hotels"],
    correctAnswer: "rooms of the hotel",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct answer:\nThis is ... car.",
    options: ["Mr. Smith's", "Mr. Smiths", "of Mr. Smith", "Mr. Smiths's"],
    correctAnswer: "Mr. Smith's",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct form:\nI am going to the ... to buy some bread.",
    options: ["baker's", "bakers", "of baker", "bakers's"],
    correctAnswer: "baker's",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct answer:\nHe liked the ... of the house better than the kitchen.",
    options: ["roof", "roof's house", "house's roof", "roof of the house"],
    correctAnswer: "roof of the house",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct form:\n... grandmother is very kind.",
    options: ["Mary's and Jane's", "Mary and Jane's", "Mary and Jane", "Mary's and Jane"],
    correctAnswer: "Mary and Jane's",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct sentence regarding the possessive noun usage:",
    options: [
      "The leg of the table is broken.",
      "The table's leg is broken.",
      "The tables leg is broken.",
      "The of table's leg is broken."
    ],
    correctAnswer: "The leg of the table is broken.",
    category: "possessives"
  },

  // === TOPIK: Numeral (Sonlar) ===
  {
    type: 'multiple-choice',
    question: "Choose the right spelling and expression of the fraction 2/3:",
    options: ["two third", "two thirds", "second three", "two three"],
    correctAnswer: "two thirds",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Choose the right expression of the underlined numeral:\nShe was born in 1998.",
    options: ["nineteen ninety-eight", "nineteen hundred ninety-eight", "one thousand nine hundred ninety-eight", "ninety-nine eight"],
    correctAnswer: "nineteen ninety-eight",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct spelling of the ordinal number for 12 (12-):",
    options: ["twelveth", "twelfth", "twelve", "twelft"],
    correctAnswer: "twelfth",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct grammatical expression of the number 3,500:",
    options: ["three thousands and five hundred", "three thousand five hundreds", "three thousand five hundred", "three thousands five hundred"],
    correctAnswer: "three thousand five hundred",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct oral expression of the decimal fraction 4.5:",
    options: ["four fifths", "four points five", "four point five", "four and five"],
    correctAnswer: "four point five",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Which abbreviation of the ordinal number is grammatically correct for the 'first'?",
    options: ["1rd", "1st", "1th", "1nd"],
    correctAnswer: "1st",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct common expression of the fraction 1/2:",
    options: ["a half", "one points two", "first second", "one second"],
    correctAnswer: "a half",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct indefinite numeral modifier:\nThere are ... students in the classroom.",
    options: ["hundred", "hundreds of", "hundreds", "a hundred"],
    correctAnswer: "a hundred",
    category: "numerals"
  },

  // === TOPIK: Articles (Artikllar) ===
  {
    type: 'multiple-choice',
    question: "Choose the correct article for the phonetics of the noun phrase:\nHe is ... honest man.",
    options: ["a", "an", "the", "- (no article)"],
    correctAnswer: "an",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct article combination:\n... Nile is the longest river in ... world.",
    options: ["The / the", "A / the", "The / a", "- / the"],
    correctAnswer: "The / the",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct article for musical instruments:\nShe plays ... piano very beautifully.",
    options: ["a", "an", "the", "- (no article)"],
    correctAnswer: "the",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct article for general meals:\nWe had ... lunch at a nice restaurant yesterday.",
    options: ["a", "an", "the", "- (no article)"],
    correctAnswer: "- (no article)",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Identify the correct articles (introducing vs referring back):\nHe bought ... new book. ... book is very interesting.",
    options: ["a / The", "the / A", "a / A", "the / The"],
    correctAnswer: "a / The",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct article for designated specific context:\n... water in this bottle is cold.",
    options: ["A", "An", "The", "- (no article)"],
    correctAnswer: "The",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct article based on vowel sounds:\nHe wants to buy ... umbrella because it is raining.",
    options: ["a", "an", "the", "- (no article)"],
    correctAnswer: "an",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct article for separate single mountain peaks:\n... Mount Everest is the highest mountain in Asia.",
    options: ["A", "An", "The", "- (no article)"],
    correctAnswer: "- (no article)",
    category: "articles"
  },

  // === TOPIK: Pronouns (Olmoshlar) ===
  {
    type: 'multiple-choice',
    question: "Choose the correct reflexive pronoun:\nThey enjoyed ... at the party last night.",
    options: ["themselves", "theirselves", "themself", "theirs"],
    correctAnswer: "themselves",
    category: "pronouns"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct possessive pronoun:\nIs this book ... or yours?",
    options: ["my", "me", "mine", "myself"],
    correctAnswer: "mine",
    category: "pronouns"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct relative pronoun as subject of the clause:\nThe man ... lives next door is a famous doctor.",
    options: ["which", "whose", "whom", "who"],
    correctAnswer: "who",
    category: "pronouns"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct pronouns sequence:\nAlthough ... was late, nobody helped ... with ... bags.",
    options: ["she / her / her", "her / her / hers", "she / she / her", "she / her / hers"],
    correctAnswer: "she / her / her",
    category: "pronouns"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct indefinite pronoun for questions / negatives:\nAre there ... apples left in the basket?",
    options: ["some", "any", "no", "anything"],
    correctAnswer: "any",
    category: "pronouns"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct affirmative indefinite pronoun:\nI can't find my keys. ... has taken them.",
    options: ["Someone", "Anyone", "Nobody", "Something"],
    correctAnswer: "Someone",
    category: "pronouns"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct relative pronoun for things:\nThis is the house ... my grandfather built.",
    options: ["who", "which", "whose", "whom"],
    correctAnswer: "which",
    category: "pronouns"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct objective personal pronoun:\nShe invited ... to her birthday party.",
    options: ["he", "him", "his", "himself"],
    correctAnswer: "him",
    category: "pronouns"
  },

  // === TOPIK: Tenses (Zamonlar) ===
  {
    type: 'multiple-choice',
    question: "Choose the correct past tense aspect (interrupted action):\nShe ... her homework when I called her.",
    options: ["did", "was doing", "is doing", "has done"],
    correctAnswer: "was doing",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct present perfect duration form:\nWe ... in Tashkent for ten years now.",
    options: ["live", "are living", "have lived", "lived"],
    correctAnswer: "have lived",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct form for the First Conditional clause:\nIf he ... hard, he will pass the exam.",
    options: ["studies", "will study", "studied", "would study"],
    correctAnswer: "studies",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct present simple frequency form:\nShe usually ... to school by bus.",
    options: ["go", "goes", "is going", "went"],
    correctAnswer: "goes",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct future expression with standard will-future:\nThey ... football tomorrow afternoon.",
    options: ["played", "have played", "are played", "will play"],
    correctAnswer: "will play",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct past perfect form for relative order of past events:\nBy the time we arrived at the cinema, the movie ... .",
    options: ["already started", "has already started", "had already started", "starteed"],
    correctAnswer: "had already started",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct passive voice present simple form:\nEnglish ... all over the world.",
    options: ["is spoken", "speaks", "is speaking", "has spoken"],
    correctAnswer: "is spoken",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct past continuous form for specific point in past time:\nAt 5 o'clock yesterday afternoon, they ... tea.",
    options: ["drank", "were drinking", "have drunk", "had drunk"],
    correctAnswer: "were drinking",
    category: "tenses"
  }
];

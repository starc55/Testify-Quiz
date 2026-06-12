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
    question: "Identify the correct possessive form to specify joint ownership:\nJack and Jill are siblings. We visited ...",
    options: ["Jack's and Jill's house", "Jack and Jill's house", "Jack and Jills' house", "the house of Jack's and Jill"],
    correctAnswer: "Jack and Jill's house",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct option for classical/historical names ending in -s:\nMany philosophers study ...",
    options: ["Socrates' teachings", "Socrates's teachings", "the teachings of Socrates", "teachings of Socrates's"],
    correctAnswer: "Socrates' teachings",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Select the most natural phrasing for an inanimate object's parts:\nWe could not find the ...",
    options: ["book's index", "index's book", "index of the book", "index of book's"],
    correctAnswer: "index of the book",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct double-possessive construction:\nHe is an old friend of ...",
    options: ["my father", "my father's", "of my father", "my fathers"],
    correctAnswer: "my father's",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct possessive for plural nouns ending in -s:\nThis is the ...",
    options: ["ladies' room", "ladies's room", "lady's room", "rooms of ladies"],
    correctAnswer: "ladies' room",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Complete the sentence with the correct possessive phrase:\n... achievements were highly praised in the local newspaper.",
    options: ["The women's association", "The womens' association", "The association's women", "The women association's"],
    correctAnswer: "The women's association",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Which of the following sentences utilizes the possessive case correctly?",
    options: [
      "The page of the book was torn.",
      "The book's page was torn.",
      "The torned page of book.",
      "The book page was torn."
    ],
    correctAnswer: "The page of the book was torn.",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct expression for time/measure relationship:\nAfter ... delay, the flight finally took off.",
    options: ["an hour's", "an hours", "of an hour", "an hour of"],
    correctAnswer: "an hour's",
    category: "possessives"
  },

  // === TOPIK: Numeral (Sonlar) ===
  {
    type: 'multiple-choice',
    question: "Translate the fraction 3/4 correctly into formal English:",
    options: ["three fourth", "three quarters", "third fourths", "three over fourth"],
    correctAnswer: "three quarters",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct written expression for the phone number part '007':",
    options: ["zero zero seven", "double oh seven", "two zero seven", "double zero and seven"],
    correctAnswer: "double oh seven",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct written expression for the mathematical decimal '12.05':",
    options: ["twelve point zero five", "twelve point five", "twelve and five cent", "twelve point nought fifteen"],
    correctAnswer: "twelve point zero five",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct spelling of the ordinal number representing position 90 (90-):",
    options: ["ninetieth", "ninetyth", "nintieth", "nineteth"],
    correctAnswer: "ninetieth",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Select the grammatically correct noun modified by a compound numeral:\nThey lived in a ...",
    options: ["five-stories building", "five-story building", "five story's building", "five-stories buildings"],
    correctAnswer: "five-story building",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct written form for the year or number '1800' in spoken text:",
    options: ["eighteen hundred", "one thousand eight hundred", "eighteen zero zero", "eighteen mill"],
    correctAnswer: "eighteen hundred",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "How is the mixed fraction '3 1/3' spoken or spelled out correctly in technical English?",
    options: ["three and a third", "three point one third", "three and one three", "three first third"],
    correctAnswer: "three and a third",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Which ordinal suffix is correctly applied to the year or position '102nd'?",
    options: ["102st", "102nd", "102rd", "102th"],
    correctAnswer: "102nd",
    category: "numerals"
  },

  // === TOPIK: Article (Artikllar) ===
  {
    type: 'multiple-choice',
    question: "Choose the correct article for unique nouns and geographic properties:\n... Sahara Desert is located in the northern part of ... Africa.",
    options: ["The / - (no article)", "A / the", "The / the", "- / - (no article)"],
    correctAnswer: "The / - (no article)",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Compare pronunciation-based article rules:\nHe finished his project in ... hour, which was ... unique challenge.",
    options: ["an / a", "a / an", "an / an", "a / a"],
    correctAnswer: "an / a",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Select the correct combination for institutions when used for their primary purpose:\nShe was sent to ... prison for her crimes, so her mother went to ... prison to visit her last week.",
    options: ["- (no article) / the", "the / the", "- (no article) / - (no article)", "the / - (no article)"],
    correctAnswer: "- (no article) / the",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct article for titles accompanied by the person's name:\nYesterday, ... President Biden gave a speech, while ... president of our company was absent.",
    options: ["- (no article) / the", "the / the", "the / - (no article)", "- (no article) / - (no article)"],
    correctAnswer: "- (no article) / the",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Select the correct articles for public transport and travel directions:\nThey decided to travel to ... South by ... train.",
    options: ["the / - (no article)", "the / the", "- / - (no article)", "- / a"],
    correctAnswer: "the / - (no article)",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Determine the correct articles for specific relative clauses:\nThis is ... book I was telling you about yesterday.",
    options: ["a", "an", "the", "- (no article)"],
    correctAnswer: "the",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Identify the correct article pattern for plural general nouns vs specific ones:\n... cats are independent animals, but ... cats we saw at the shelter were very friendly.",
    options: ["- (no article) / the", "The / the", "A / the", "- / - (no article)"],
    correctAnswer: "- (no article) / the",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct articles for double parallel structures:\n... more you practice, ... better your English will become.",
    options: ["The / the", "A / the", "The / a", "- / - (no article)"],
    correctAnswer: "The / the",
    category: "articles"
  },

  // === TOPIK: Pronoun (Olmoshlar) ===
  {
    type: 'multiple-choice',
    question: "Choose the correct relative pronoun for a non-defining relative clause:\nMy new laptop, ... I bought only last week, has already stopped working.",
    options: ["which", "that", "what", "whose"],
    correctAnswer: "which",
    category: "pronouns"
  },
  {
    type: 'multiple-choice',
    question: "Identify the correct combination of subjective and objective pronouns:\nBetween you and ..., there are no secrets. Let's keep this conversation strictly confidential.",
    options: ["me", "I", "myself", "we"],
    correctAnswer: "me",
    category: "pronouns"
  },
  {
    type: 'multiple-choice',
    question: "Select the correct indefinite pronoun with singular verb agreement:\nIf ... has any questions, they should raise their hand.",
    options: ["anyone", "anybody's", "all", "some people"],
    correctAnswer: "anyone",
    category: "pronouns"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct possessive determiner/pronoun combination:\nThat car parked outside isn't ..., it belongs to our neighbours. ... color is completely different.",
    options: ["ours / Its", "our / Its'", "ours / It's", "our / It is"],
    correctAnswer: "ours / Its",
    category: "pronouns"
  },
  {
    type: 'multiple-choice',
    question: "Select the correct pronoun for emphatic/intensive usage:\nThe children cooked the entire meal ...",
    options: ["themselves", "theirselves", "by themself", "themself"],
    correctAnswer: "themselves",
    category: "pronouns"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct pronoun for gender-neutral singular references:\nEvery student must bring ... own dictionary to the exam.",
    options: ["their", "his", "her", "its"],
    correctAnswer: "their",
    category: "pronouns"
  },
  {
    type: 'multiple-choice',
    question: "Identify the correct relative pronoun indicating possession:\nHe is the engineer ... design won the national architecture award.",
    options: ["whose", "who", "which", "whom"],
    correctAnswer: "whose",
    category: "pronouns"
  },
  {
    type: 'multiple-choice',
    question: "Complete using the correct distributive pronoun:\nI tried both options, but ... of them worked.",
    options: ["neither", "either", "none", "no one"],
    correctAnswer: "neither",
    category: "pronouns"
  },

  // === TOPIK: Tenses (Zamonlar) ===
  {
    type: 'multiple-choice',
    question: "Choose the correct form for the Future in the Past:\nHe said he ... us as soon as he arrived, but he forgot.",
    options: ["would call", "will call", "calls", "is going to call"],
    correctAnswer: "would call",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct conditional form (Mixed Second & Third):\nIf you ... your map, we wouldn't be lost right now.",
    options: ["hadn't lost", "didn't lose", "wouldn't lose", "haven't lost"],
    correctAnswer: "hadn't lost",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Select the correct tense for a state persisting up to the present:\nHow long ... each other before they got married?",
    options: ["had they known", "have they known", "did they know", "were they knowing"],
    correctAnswer: "had they known",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct present continuous aspect for a temporary situation:\nI usually work in London, but this month I ... in Berlin.",
    options: ["am working", "work", "worked", "have worked"],
    correctAnswer: "am working",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct form after time conjunctions in the future time frame:\nWe will start the meeting as soon as the manager ... .",
    options: ["arrives", "will arrive", "is arriving", "has been arrived"],
    correctAnswer: "arrives",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Select the correct passive voice construction for a completed action:\nAll the windows ... before the storm began yesterday.",
    options: ["had been closed", "were closed", "have been closed", "are closed"],
    correctAnswer: "had been closed",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct subjunctive or modal tense aspect with 'wish':\nI wish I ... more attention to the lecture yesterday.",
    options: ["had paid", "paid", "would pay", "have paid"],
    correctAnswer: "had paid",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct tense aspect for a future plan with fixed timetable/schedule:\nOur train ... at 9:15 tomorrow morning, so please don't be late.",
    options: ["leaves", "is leaving", "will leave", "is going to leave"],
    correctAnswer: "leaves",
    category: "tenses"
  }
];

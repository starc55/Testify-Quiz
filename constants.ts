import type { QuizQuestion, Theme, VocabularyItem } from './types';

export const QUIZ_DURATION_SECONDS = 60 * 60; // 60 minutes for 40 advanced questions

export const QUIZ_VOCABULARY: VocabularyItem[] = [
  { term: "Advanced Possessives", definition: "Gerundial egalik (your coming), qo'shaloq egalik (friend of my father's) va murakkab otlarning egalik shakllari." },
  { term: "Advanced Articles", definition: "Abstrakt otlar oldidan artikl ishlatilishi, parallel qiyosiy tuzilmalar (the more... the better) hamda geografik nomlar xususiyatlari." },
  { term: "Advanced Numerals", definition: "Kasr sonlardan keyin fe'l moslashuvi, kasbiy/ilmiy tilda sonlarning ifodalanishi hamda sanoq-miqdor birikmalari." },
  { term: "Compounds & Nominalization", definition: "Murakkab otlarning ko'plik shakllari (passers-by), otlashgan iboralar va jamoaviy otlarning predikativ muvofiqligi." },
  { term: "Subjunctives & Inversion", definition: "Sintaktik inversiya (Hardly had I...), buyruq maylining maxsus turlari (be, should) hamda aralash shart mayllari (mixed conditionals)." }
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
  // === 1. ADVANCED POSSESSIVES (Questions 1 - 8) ===
  {
    type: 'multiple-choice',
    question: "Choose the correct option where the possessive acts as the subject of a gerund in formal style:\nI really appreciate ... time to mentor the new recruits.",
    options: ["you taking", "your taking", "yours taking", "you to take"],
    correctAnswer: "your taking",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Identify the grammatically correct double-possessive construction:\nAn old acquaintance of ... showed up at the gala unexpectedly.",
    options: ["my uncle", "my uncle's", "of my uncle", "my uncles"],
    correctAnswer: "my uncle's",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Which of the following classical/historical names utilizes the correct possessive form according to academic style guides?",
    options: [
      "Euripides's tragedies continue to inspire modern dramatists.",
      "Euripides' tragedies continue to inspire modern dramatists.",
      "The tragedies of Euripides's continue to inspire modern dramatists.",
      "Euripides tragedies' continue to inspire modern dramatists."
    ],
    correctAnswer: "Euripides' tragedies",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Select the correct possessive casing for the compound noun:\n... veto took the parliament by surprise.",
    options: ["The Commander's-in-Chief", "The Commander-in-Chief's", "The Commander's-in-Chief's", "The Commander-in-Chiefs"],
    correctAnswer: "The Commander-in-Chief's",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Determine the correct possessive form representing separate ownership:\nWe spent the weekend studying ... different approaches to physics.",
    options: [
      "Einstein's and Hawking's",
      "Einstein and Hawking's",
      "Einstein's and Hawking",
      "the Einstein and Hawking's"
    ],
    correctAnswer: "Einstein's and Hawking's",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct possessive form for a pronoun modifier:\nIt wasn't my fault; it was ... negligence.",
    options: ["somebody's else", "somebody else's", "somebody's else's", "somebody elses"],
    correctAnswer: "somebody else's",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Identify the correct usage of possessive for inanimate categories denoting distance or time measure:",
    options: [
      "Keep the dog at an arm's length.",
      "Keep the dog at an arm length.",
      "Keep the dog at arms length.",
      "Keep the dog at an arms's length."
    ],
    correctAnswer: "Keep the dog at an arm's length.",
    category: "possessives"
  },
  {
    type: 'multiple-choice',
    question: "Select the correct double-possessive idiom representing artistic masterpieces:\nThat portrait is a famous masterpiece of ...",
    options: ["the artist", "the artist's", "of the artist's", "artist"],
    correctAnswer: "the artist's",
    category: "possessives"
  },

  // === 2. ADVANCED ARTICLES (Questions 9 - 16) ===
  {
    type: 'multiple-choice',
    question: "Choose the correct generic article representation for musical instruments:\nHistorically, ... violin is considered much more demanding to master than ... guitar.",
    options: ["the / the", "a / a", "- (no article) / - (no article)", "the / a"],
    correctAnswer: "the / the",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Select the correct option where the omission of the article changes the meaning to institutional purpose:\nAfter the incident, the inspector went to ... church to examine the broken glass, while the devotees went to ... church to pray.",
    options: ["the / the", "- (no article) / the", "the / - (no article)", "- (no article) / - (no article)"],
    correctAnswer: "the / - (no article)",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct article for an abstract noun modified by a defining/restrictive relative clause:\nHe showed ... bravery that astonished even his harshest critics during the crisis.",
    options: ["a", "an", "the", "- (no article)"],
    correctAnswer: "a",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Identify the correct parallel comparative double article structure:\n... faster we implement the eco-reforms, ... more sustainable our urban layout will remain.",
    options: ["The / the", "A / the", "The / a", "- / - (no article)"],
    correctAnswer: "The / the",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct article for unique titles or roles when they function as predicative nouns/complements:\nDr. Henderson was elected ... chairperson of the scientific council.",
    options: ["a", "an", "the", "- (no article)"],
    correctAnswer: "- (no article)",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Identify the correct article pattern for complex geographical features:\nWe crossed ... English Channel before hiking through ... Alps.",
    options: ["the / the", "- / -", "the / -", "- / the"],
    correctAnswer: "the / the",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Select the correct option demonstrating the restrictive use of the article with 'little':\nWith ... little money he had left, he bought a second-hand grammar textbook.",
    options: ["a", "the", "some", "- (no article)"],
    correctAnswer: "the",
    category: "articles"
  },
  {
    type: 'multiple-choice',
    question: "Which of the following idiomatic parallel coordinate structures is grammatically correct?",
    options: [
      "They walked hand in hand along the shore.",
      "They walked the hand in the hand along the shore.",
      "They walked a hand in a hand along the shore.",
      "They walked hands in hands along the shore."
    ],
    correctAnswer: "They walked hand in hand along the shore.",
    category: "articles"
  },

  // === 3. ADVANCED NUMERALS & QUANTIFIERS (Questions 17 - 24) ===
  {
    type: 'multiple-choice',
    question: "Choose the correct compound numeral modifier structure:\nWe had to complete a ... race as part of our academic physical assessment.",
    options: ["ten-miles", "ten-mile", "ten mile's", "ten miles's"],
    correctAnswer: "ten-mile",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Determine the correct distributive numeral phrase pattern:\nThe system backs up all database files automatically ...",
    options: ["every ten minute", "every ten minutes", "each of ten minutes", "every of ten minutes"],
    correctAnswer: "every ten minutes",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Identify the correct subject-verb agreement following a fraction modifying an uncountable noun:\nAccording to the census, three-fifths of the agricultural land ... polluted by industrial waste.",
    options: ["is", "are", "were", "have been"],
    correctAnswer: "is",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Select the correct subject-verb concord for decimals with countable entities:\nExactly 1.5 million tons of wheat ... distributed to the drought-hit zones.",
    options: ["was", "were", "has", "is"],
    correctAnswer: "were",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct formal written expression for the large number '245' in British academic prose:",
    options: [
      "two hundred forty-five",
      "two hundred and forty-five",
      "two hundreds forty-five",
      "two hundreds and forty-five"
    ],
    correctAnswer: "two hundred and forty-five",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Select the correct collective/approximate numeral expression:\n... protesters gathered outside the embassy gates.",
    options: ["Scores of", "Scores", "A score", "Of scores"],
    correctAnswer: "Scores of",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct combination for large numbers when modified vs unmodified:\nHe earned ... dollars, but ... refugees are still waiting for basic shelter.",
    options: [
      "three hundred thousand / hundreds of thousands of",
      "three hundred thousands / hundreds of thousand of",
      "three hundreds thousand / hundred of thousands",
      "three hundred thousand / hundred thousands of"
    ],
    correctAnswer: "three hundred thousand / hundreds of thousands of",
    category: "numerals"
  },
  {
    type: 'multiple-choice',
    question: "Identify the correct numeric word used to represent the score of 'zero' in competitive tennis match reporting:",
    options: ["nil", "nought", "love", "cipher"],
    correctAnswer: "love",
    category: "numerals"
  },

  // === 4. COMPOUNDS & NOMINALIZATION (Questions 25 - 32) ===
  {
    type: 'multiple-choice',
    question: "Choose the correct plural form of the complex compound noun 'passer-by':",
    options: ["passer-bys", "passers-by", "passers-bys", "passer-byes"],
    correctAnswer: "passers-by",
    category: "compounds"
  },
  {
    type: 'multiple-choice',
    question: "Determine which compound noun represents a distinct metaphorical unit rather than a simple literal description:",
    options: [
      "a green house (a painted house)",
      "a greenhouse (a glass building for growing plants)",
      "a blue bird (a bird with blue feathers)",
      "a black board (a wooden board painted black)"
    ],
    correctAnswer: "a greenhouse (a glass building for growing plants)",
    category: "compounds"
  },
  {
    type: 'multiple-choice',
    question: "Identify the correct noun adjunct usage (noun modifying another noun):\nThe government initiated a new research project on the ...",
    options: ["toy industry", "toys industry", "toy's industry", "toys' industry"],
    correctAnswer: "toy industry",
    category: "compounds"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct plural form of the verb-derived compound noun containing a prepositional particle:\nThe global health organization reported several new ... of the virus.",
    options: ["outbreak", "outbreaks", "outbreak's", "outs-break"],
    correctAnswer: "outbreaks",
    category: "compounds"
  },
  {
    type: 'multiple-choice',
    question: "Select the correct singular/plural concord in quantity-modifier compounds:\nThey formed a ... delegacy to negotiate the trade terms.",
    options: ["ten-men", "ten-man", "ten man's", "ten-mens"],
    correctAnswer: "ten-man",
    category: "compounds"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct nominalized term to define a person's current location or position:",
    options: ["whereabouts", "whereabout", "whereabout's", "where-abouts"],
    correctAnswer: "whereabouts",
    category: "compounds"
  },
  {
    type: 'multiple-choice',
    question: "Determine the correct verb agreement with a collective compound acting as a unified entity under strict formal English:\nThe board of directors ... currently finalizing the annual fiscal policy.",
    options: ["is", "are", "were", "have been"],
    correctAnswer: "is",
    category: "compounds"
  },
  {
    type: 'multiple-choice',
    question: "Select the most appropriate gender-neutral professional compound noun:",
    options: ["spokesman", "spokesperson", "spokeswoman", "spokeschair"],
    correctAnswer: "spokesperson",
    category: "compounds"
  },

  // === 5. ADVANCED TENSES & SUBJUNCTIVES & INVERSION (Questions 33 - 40) ===
  {
    type: 'multiple-choice',
    question: "Choose the correct present subjunctive form for mandatory clauses:\nIt is absolutely essential that he ... the contract before Friday's meeting.",
    options: ["sign", "signs", "will sign", "must sign"],
    correctAnswer: "sign",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Select the correct auxiliary and word order for negative inversion:\nHardly ... the platform when the train pulled away.",
    options: [
      "I had reached",
      "had I reached",
      "did I reach",
      "I reached"
    ],
    correctAnswer: "had I reached",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Complete the sentence with the correct Future Perfect Continuous tense aspect:\nBy next September, they ... on this scientific research for five consecutive years.",
    options: [
      "will have been working",
      "will have worked",
      "will be working",
      "shall work"
    ],
    correctAnswer: "will have been working",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct mixed conditional structure linking past cause to present effect:\nIf I ... your advice last semester, I ... in such a difficult financial position today.",
    options: [
      "had taken / wouldn't be",
      "took / wouldn't have been",
      "would have taken / wasn't",
      "had taken / won't be"
    ],
    correctAnswer: "had taken / wouldn't be",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct subjunctive or formal negative conditional structure with 'lest':\nWe recorded the coordinates carefully lest we ... our way in the dense forest.",
    options: ["should lose", "would lose", "might have lost", "lost"],
    correctAnswer: "should lose",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Select the correct aspect for an unfulfilled future intention set in the past:\nWe ... the project by June, but the budget cuts delayed our entire schedule.",
    options: [
      "were to have completed",
      "were to complete",
      "would complete",
      "had to complete"
    ],
    correctAnswer: "were to have completed",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Choose the correct past perfect aspect denoting unfulfilled plans with mental verbs:\nI ... to discuss the thesis with my professor, but she was unexpectedly called away.",
    options: ["had hoped", "hoped", "have hoped", "was hoping"],
    correctAnswer: "had hoped",
    category: "tenses"
  },
  {
    type: 'multiple-choice',
    question: "Select the correct advanced reporting passive construction with perfect infinitive:\nThe ancient artifact ... during the early crusades.",
    options: [
      "is believed to have been smuggled",
      "is believed to smuggle",
      "is believed to be smuggled",
      "believed to have smuggled"
    ],
    correctAnswer: "is believed to have been smuggled",
    category: "tenses"
  }
];

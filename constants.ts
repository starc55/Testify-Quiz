

import type { QuizQuestion, Theme, ThemeName, VocabularyItem } from './types';

export const QUIZ_DURATION_SECONDS = 25 * 60; // 1500 seconds (25 minutes)

export const QUIZ_VOCABULARY: VocabularyItem[] = [
  {
    term: "Auxiliary Verb",
    definition: "Yordamchi fe'l. So'roq va inkor gaplarni yasashda hamda zamonlarni hosil qilishda ishlatiladi (do, have, be)."
  },
  {
    term: "Modal Verb",
    definition: "Modal fe'l. Ish-harakatga munosabat (imkoniyat, majburiyat, zaruriyat) bildiradi."
  },
  {
    term: "Bare Infinitive",
    definition: "\"To\" yuklamasisiz keladigan fe'lning o'zak shakli (masalan: go, eat)."
  },
  {
    term: "State Verbs",
    definition: "Holat fe'llari. Odatda davomiy zamonlarda (Continuous) ishlatilmaydi (know, like, understand)."
  },
  {
    term: "Arrangements",
    definition: "Kelajakdagi rejalashtirilgan va kelishilgan ish-harakatlar."
  },
  {
    term: "Prediction",
    definition: "Bashorat. Kelajakda sodir bo'lishi mumkin bo'lgan voqea haqida taxmin."
  },
  {
    term: "Obligation",
    definition: "Majburiyat. Biror ishni bajarish shartligi."
  },
  {
    term: "Prohibition",
    definition: "Taqiq. Biror ishni qilish mumkin emasligi."
  },
  {
    term: "Past Participle",
    definition: "Fe'lning uchinchi shakli (V3). Perfect zamonlarda va majhul nisbatda (Passive Voice) ishlatiladi."
  },
  {
    term: "Gerund",
    definition: "Fe'lning -ing qo'shimchasi bilan yasalgan shakli. Ot vazifasida yoki davomiy zamonlarda kelishi mumkin."
  },
  {
    term: "Time Expressions",
    definition: "Payt ravishlari. Zamonni aniqlashda yordam beruvchi so'zlar (masalan: since, for, ago, yet)."
  },
  {
    term: "Deduction",
    definition: "Mantiqiy xulosa. Mavjud dalillarga asoslanib biror narsaning to'g'riligini taxmin qilish (must be, can't be)."
  },
  {
    term: "Habitual Action",
    definition: "Odat tusiga kirgan ish-harakat. O'tmishda yoki hozirda doimiy ravishda bajariladigan ishlar."
  }
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
  // --- LEVEL 1: Zero / Basic Concepts ---
  {
    type: 'multiple-choice',
    question: "Ingliz tilida gapning odatiy so'z tartibi qanday?",
    options: [
      "Ega + Kesim + To'ldiruvchi (Subject + Verb + Object)",
      "Kesim + Ega + To'ldiruvchi",
      "To'ldiruvchi + Ega + Kesim",
      "Ega + To'ldiruvchi + Kesim"
    ],
    correctAnswer: "Ega + Kesim + To'ldiruvchi (Subject + Verb + Object)"
  },
  {
    type: 'multiple-choice',
    question: "\"To be\" (am, is, are) fe'li asosan nima uchun ishlatiladi?",
    options: [
      "Shaxs yoki narsaning holati, kimligi yoki qayerdaligini bildirish uchun",
      "Doimiy takrorlanadigan harakatni bildirish uchun",
      "O'tgan zamondagi ishni bildirish uchun",
      "Kelajakdagi rejani bildirish uchun"
    ],
    correctAnswer: "Shaxs yoki narsaning holati, kimligi yoki qayerdaligini bildirish uchun"
  },
  {
    type: 'multiple-choice',
    question: "Aniq artikl (The) va noaniq artikl (A/An) o'rtasidagi asosiy farq nima?",
    options: [
      "\"A/An\" umumiy, \"The\" esa aniq narsalar uchun ishlatiladi",
      "\"A/An\" ko'plikda, \"The\" birlikda ishlatiladi",
      "Hech qanday farq yo'q",
      "\"The\" faqat odam ismlari oldidan keladi"
    ],
    correctAnswer: "\"A/An\" umumiy, \"The\" esa aniq narsalar uchun ishlatiladi"
  },
  {
    type: 'multiple-choice',
    question: "Otlar ko'pligi (Plurals) qaysi qo'shimcha bilan yasaladi?",
    options: [
      "-s yoki -es",
      "-ing",
      "-ed",
      "-er"
    ],
    correctAnswer: "-s yoki -es"
  },
  {
    type: 'multiple-choice',
    question: "Olmoshlardan (Pronouns) qaysi biri egadan keyin, ya'ni to'ldiruvchi o'rnida keladi?",
    options: [
      "Object Pronouns (me, him, her, us)",
      "Subject Pronouns (I, he, she, we)",
      "Possessive Adjectives (my, his, her)",
      "Reflexive Pronouns (myself, himself)"
    ],
    correctAnswer: "Object Pronouns (me, him, her, us)"
  },
  
  // --- LEVEL 2: Present Simple ---
  {
    type: 'multiple-choice',
    question: "Present Simple (Hozirgi oddiy zamon) qachon ishlatiladi?",
    options: [
      "Doimiy, takrorlanuvchi harakatlar va umumiy haqiqatlar uchun",
      "Ayni paytda sodir bo'layotgan ishlar uchun",
      "Tugallangan ishlar uchun",
      "Kelajakdagi aniq rejalar uchun"
    ],
    correctAnswer: "Doimiy, takrorlanuvchi harakatlar va umumiy haqiqatlar uchun"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple da inkor gap qaysi yordamchi fe'llar bilan yasaladi?",
    options: [
      "don't / doesn't",
      "am not / isn't / aren't",
      "didn't",
      "won't"
    ],
    correctAnswer: "don't / doesn't"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple da qachon fe'lga \"-s\" yoki \"-es\" qo'shiladi?",
    options: [
      "Faqat 3-shaxs birlikda (He, She, It) darak gapda",
      "Barcha shaxslarda (I, You, We, They)",
      "Faqat so'roq gaplarda",
      "Ko'plikdagi otlar bilan"
    ],
    correctAnswer: "Faqat 3-shaxs birlikda (He, She, It) darak gapda"
  },
  {
    type: 'multiple-choice',
    question: "Qaysi payt ravishlari (Time expressions) Present Simple ga xos?",
    options: [
      "Always, usually, often, sometimes, every day",
      "Now, at the moment, right now",
      "Yesterday, last week, ago",
      "Tomorrow, next year"
    ],
    correctAnswer: "Always, usually, often, sometimes, every day"
  },

  // --- LEVEL 3: Present Continuous ---
  {
    type: 'multiple-choice',
    question: "Present Continuous (Hozirgi davomiy zamon) qanday yasaladi?",
    options: [
      "am / is / are + Verb + ing",
      "Subject + Verb + s/es",
      "have / has + Verb 3",
      "will + Verb"
    ],
    correctAnswer: "am / is / are + Verb + ing"
  },
  {
    type: 'multiple-choice',
    question: "Present Continuous asosan nima uchun ishlatiladi?",
    options: [
      "Nutq paytida sodir bo'layotgan ayni vaqtdagi ish-harakatlar uchun",
      "O'tgan zamondagi odatlar uchun",
      "Doimiy takrorlanadigan faktlar uchun",
      "Tugallangan natijalar uchun"
    ],
    correctAnswer: "Nutq paytida sodir bo'layotgan ayni vaqtdagi ish-harakatlar uchun"
  },
  {
    type: 'multiple-choice',
    question: "Stative Verbs (Holat fe'llari: love, hate, know) Continuous zamonda ishlatiladimi?",
    options: [
      "Yo'q, ular odatda Simple zamonlarda ishlatiladi",
      "Ha, har doim ishlatiladi",
      "Faqat kelajak zamonda ishlatiladi",
      "Farqi yo'q"
    ],
    correctAnswer: "Yo'q, ular odatda Simple zamonlarda ishlatiladi"
  },

  // --- LEVEL 4: Past Simple ---
  {
    type: 'multiple-choice',
    question: "Past Simple (O'tgan oddiy zamon) da to'g'ri fe'llar (Regular verbs) qanday yasaladi?",
    options: [
      "Fe'lga \"-ed\" qo'shimchasi qo'shish orqali",
      "Fe'lning o'zagi o'zgaradi",
      "Fe'l oldiga \"will\" qo'yiladi",
      "Fe'lga \"-ing\" qo'shiladi"
    ],
    correctAnswer: "Fe'lga \"-ed\" qo'shimchasi qo'shish orqali"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple da so'roq va inkor gaplar qaysi yordamchi fe'l bilan yasaladi?",
    options: [
      "Did",
      "Do / Does",
      "Have / Has",
      "Will"
    ],
    correctAnswer: "Did"
  },
  {
    type: 'multiple-choice',
    question: "\"To be\" fe'lining o'tgan zamon shakllari qaysilar?",
    options: [
      "Was / Were",
      "Been",
      "Being",
      "Am / Is / Are"
    ],
    correctAnswer: "Was / Were"
  },
  {
    type: 'multiple-choice',
    question: "Irregular Verbs (Noto'g'ri fe'llar) Past Simple da qanday o'zgaradi?",
    options: [
      "Ular maxsus shaklga ega (yodlash kerak), -ed qo'shilmaydi",
      "Har doim -ed qo'shiladi",
      "O'zgarmaydi",
      "-ing qo'shimchasi oladi"
    ],
    correctAnswer: "Ular maxsus shaklga ega (yodlash kerak), -ed qo'shilmaydi"
  },

  // --- LEVEL 5: Past Continuous ---
  {
    type: 'multiple-choice',
    question: "Past Continuous (O'tgan davomiy zamon) qachon ishlatiladi?",
    options: [
      "O'tmishdagi ma'lum bir vaqtda davom etayotgan jarayon uchun",
      "O'tmishda tugallangan qisqa ish uchun",
      "Hozirgi natija uchun",
      "Kelajakdagi reja uchun"
    ],
    correctAnswer: "O'tmishdagi ma'lum bir vaqtda davom etayotgan jarayon uchun"
  },
  {
    type: 'multiple-choice',
    question: "Past Continuous formulasi qaysi?",
    options: [
      "was / were + Verb + ing",
      "did + Verb",
      "had + Verb 3",
      "was / were + Verb 3"
    ],
    correctAnswer: "was / were + Verb + ing"
  },

  // --- LEVEL 6: Future Simple ---
  {
    type: 'multiple-choice',
    question: "Future Simple (Will) qachon ishlatiladi?",
    options: [
      "Nutq paytida qabul qilingan spontan qarorlar va bashoratlar uchun",
      "Oldindan rejalashtirilgan aniq ishlar uchun",
      "Jadval asosidagi ishlar uchun",
      "O'tgan zamondagi ishlar uchun"
    ],
    correctAnswer: "Nutq paytida qabul qilingan spontan qarorlar va bashoratlar uchun"
  },
  {
    type: 'multiple-choice',
    question: "\"Be going to\" qurilmasi kelajak uchun nimani ifodalaydi?",
    options: [
      "Oldindan qilingan niyat yoki rejalarni",
      "Spontan qarorlarni",
      "Doimiy haqiqatlarni",
      "Majburiyatni"
    ],
    correctAnswer: "Oldindan qilingan niyat yoki rejalarni"
  },

  // --- LEVEL 7: General Grammar & Modals ---
  {
    type: 'multiple-choice',
    question: "Sanalmaydigan otlar (Uncountable nouns) bilan qaysi so'z ishlatiladi?",
    options: [
      "Much (ko'p) / A little (oz)",
      "Many (ko'p) / A few (oz)",
      "A / An",
      "These / Those"
    ],
    correctAnswer: "Much (ko'p) / A little (oz)"
  },
  {
    type: 'multiple-choice',
    question: "\"There is\" iborasi qachon ishlatiladi?",
    options: [
      "Birlikdagi yoki sanalmaydigan otlar borligini aytishda",
      "Faqat ko'plikdagi otlar uchun",
      "O'tgan zamonda",
      "Egalikni bildirish uchun"
    ],
    correctAnswer: "Birlikdagi yoki sanalmaydigan otlar borligini aytishda"
  },
  {
    type: 'multiple-choice',
    question: "Sifatlarning qiyosiy darajasi (Comparative) qanday yasaladi?",
    options: [
      "Qisqa sifatlarga -er qo'shiladi, uzunlariga more qo'yiladi",
      "Har doim -est qo'shiladi",
      "Har doim most qo'yiladi",
      "Sifat o'zgarmaydi"
    ],
    correctAnswer: "Qisqa sifatlarga -er qo'shiladi, uzunlariga more qo'yiladi"
  },
  {
    type: 'multiple-choice',
    question: "\"Can\" modal fe'li nimani bildiradi?",
    options: [
      "Qobiliyat yoki imkoniyatni",
      "Kelajakdagi rejani",
      "O'tmishdagi ishni",
      "Majburiyatni"
    ],
    correctAnswer: "Qobiliyat yoki imkoniyatni"
  },
  {
    type: 'multiple-choice',
    question: "Qaysi predlog (Preposition) soatlar bilan ishlatiladi (masalan: 5:00 da)?",
    options: [
      "At",
      "In",
      "On",
      "To"
    ],
    correctAnswer: "At"
  },

  // --- WRITE-IN QUESTIONS (5 items) ---
  {
    type: 'fill-in-the-blank',
    question: "Present Continuous (Hozirgi davomiy) zamon yasashda fe'lga qaysi qo'shimcha qo'shiladi?",
    correctAnswer: "ing"
  },
  {
    type: 'fill-in-the-blank',
    question: "Past Simple (O'tgan oddiy) zamonda so'roq va inkor gap yasovchi yordamchi fe'l nima?",
    correctAnswer: "did"
  },
  {
    type: 'fill-in-the-blank',
    question: "Kelajak zamonni yasovchi asosiy yordamchi fe'l (w harfi bilan boshlanadi).",
    correctAnswer: "will"
  },
  {
    type: 'fill-in-the-blank',
    question: "Ko'plikdagi otlarni yasash uchun so'z oxiriga qaysi harf qo'shiladi (asosiy qoida)?",
    correctAnswer: "s"
  },
  {
    type: 'fill-in-the-blank',
    question: "\"Have\" fe'lining 3-shaxs birlik (He/She/It) uchun shaklini yozing.",
    correctAnswer: "has"
  }
];

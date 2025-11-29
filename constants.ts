

import type { QuizQuestion, Theme, ThemeName, VocabularyItem } from './types';

export const QUIZ_DURATION_SECONDS = 30 * 60; // 1800 seconds (30 minutes)

export const QUIZ_VOCABULARY: VocabularyItem[] = [
  {
    term: "Vowel",
    definition: "Unli harf (a, e, i, o, u)."
  },
  {
    term: "Consonant",
    definition: "Undosh harf (b, c, d, f, g...)."
  },
  {
    term: "Subject",
    definition: "Ega. Gapda ish-harakatni bajaruvchi shaxs yoki narsa."
  },
  {
    term: "Verb",
    definition: "Fe'l. Ish-harakatni yoki holatni bildiruvchi so'z."
  },
  {
    term: "Noun",
    definition: "Ot. Shaxs, narsa, joy yoki tushuncha nomi."
  },
  {
    term: "Adjective",
    definition: "Sifat. Otning qandayligini (belgi, xususiyat) bildiruvchi so'z."
  },
  {
    term: "Singular",
    definition: "Birlik. Faqat bitta narsani bildiradi."
  },
  {
    term: "Plural",
    definition: "Ko'plik. Bitta dan ortiq narsani bildiradi."
  },
  {
    term: "Auxiliary Verb",
    definition: "Yordamchi fe'l (do, does, am, is, are). So'roq va inkor gap yasashda yordam beradi."
  },
  {
    term: "Tense",
    definition: "Zamon. Ish-harakatning bajarilish vaqtini ko'rsatadi."
  },
  {
    term: "Affirmative",
    definition: "Darak gap. Tasdiq ma'nosini bildiradi."
  },
  {
    term: "Negative",
    definition: "Inkor gap. 'Not' yuklamasi yoki inkor so'zlar qatnashgan gap."
  },
  {
    term: "Interrogative",
    definition: "So'roq gap. Ma'lumot olish uchun ishlatiladi."
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
  // --- LEVEL 0: Alphabet & Basics ---
  {
    type: 'multiple-choice',
    question: "Ingliz alifbosida nechta unli harf (vowels) bor?",
    options: [
      "5 ta (a, e, i, o, u)",
      "6 ta",
      "21 ta",
      "10 ta"
    ],
    correctAnswer: "5 ta (a, e, i, o, u)"
  },
  {
    type: 'multiple-choice',
    question: "Ingliz tilida gap asosan qanday tartibda tuziladi?",
    options: [
      "Ega + Kesim + To'ldiruvchi (Subject + Verb + Object)",
      "Kesim + Ega + To'ldiruvchi",
      "To'ldiruvchi + Kesim + Ega",
      "Ega + To'ldiruvchi + Kesim"
    ],
    correctAnswer: "Ega + Kesim + To'ldiruvchi (Subject + Verb + Object)"
  },
  {
    type: 'multiple-choice',
    question: "Qaysi olmosh (Pronoun) jonsiz narsalar va hayvonlar uchun ishlatiladi?",
    options: [
      "It",
      "He",
      "She",
      "They"
    ],
    correctAnswer: "It"
  },
  
  // --- LEVEL 1: Articles & Plurals ---
  {
    type: 'multiple-choice',
    question: "\"An\" artikli qanday so'zlar oldidan ishlatiladi?",
    options: [
      "Unli tovush bilan boshlanadigan birlikdagi otlar oldidan",
      "Undosh tovush bilan boshlanadigan otlar oldidan",
      "Faqat ko'plikdagi otlar oldidan",
      "Sanalmaydigan otlar oldidan"
    ],
    correctAnswer: "Unli tovush bilan boshlanadigan birlikdagi otlar oldidan"
  },
  {
    type: 'multiple-choice',
    question: "\"The\" artikli nima uchun ishlatiladi?",
    options: [
      "Aniq, oldindan ma'lum bo'lgan narsalar uchun",
      "Faqat yangi, noma'lum narsalar uchun",
      "Faqat odam ismlari uchun",
      "Hech qachon ishlatilmaydi"
    ],
    correctAnswer: "Aniq, oldindan ma'lum bo'lgan narsalar uchun"
  },
  {
    type: 'multiple-choice',
    question: "Ko'pchilik otlarning ko'pligi (Plural) qanday yasaladi?",
    options: [
      "-s yoki -es qo'shish orqali",
      "-ing qo'shish orqali",
      "-ed qo'shish orqali",
      "So'z o'zagini o'zgartirish orqali"
    ],
    correctAnswer: "-s yoki -es qo'shish orqali"
  },
  {
    type: 'multiple-choice',
    question: "Qaysi so'z noto'g'ri ko'plik shaklida yozilgan? (Irregular Plurals)",
    options: [
      "Childs",
      "Children",
      "Men",
      "Teeth"
    ],
    correctAnswer: "Childs"
  },
  
  // --- LEVEL 2: To Be & Demonstratives ---
  {
    type: 'multiple-choice',
    question: "\"I\" (Men) olmoshi bilan \"to be\" ning qaysi shakli ishlatiladi?",
    options: [
      "Am",
      "Is",
      "Are",
      "Be"
    ],
    correctAnswer: "Am"
  },
  {
    type: 'multiple-choice',
    question: "He, She, It olmoshlari bilan \"to be\" ning qaysi shakli ishlatiladi?",
    options: [
      "Is",
      "Am",
      "Are",
      "Do"
    ],
    correctAnswer: "Is"
  },
  {
    type: 'multiple-choice',
    question: "Uzoqda joylashgan birlikdagi narsani ko'rsatish uchun qaysi so'z ishlatiladi?",
    options: [
      "That",
      "This",
      "These",
      "Those"
    ],
    correctAnswer: "That"
  },
  {
    type: 'multiple-choice',
    question: "\"These\" va \"Those\" so'zlari nima uchun ishlatiladi?",
    options: [
      "Ko'plikdagi narsalarni ko'rsatish uchun",
      "Birlikdagi narsalarni ko'rsatish uchun",
      "Faqat odamlar uchun",
      "Sanalmaydigan otlar uchun"
    ],
    correctAnswer: "Ko'plikdagi narsalarni ko'rsatish uchun"
  },

  // --- LEVEL 3: Possessives & Prepositions ---
  {
    type: 'multiple-choice',
    question: "Egalikni bildirish uchun shaxs otlariga nima qo'shiladi?",
    options: [
      "'s (apostrof s)",
      "-es",
      "-ing",
      "Of"
    ],
    correctAnswer: "'s (apostrof s)"
  },
  {
    type: 'multiple-choice',
    question: "\"My, Your, His, Her\" bular qanday olmoshlar?",
    options: [
      "Egalik sifatlari (Possessive Adjectives)",
      "Kishilik olmoshlari (Subject Pronouns)",
      "Ko'rsatish olmoshlari (Demonstratives)",
      "So'roq olmoshlari"
    ],
    correctAnswer: "Egalik sifatlari (Possessive Adjectives)"
  },
  {
    type: 'multiple-choice',
    question: "Soat vaqtlari (masalan, 5:00) bilan qaysi predlog ishlatiladi?",
    options: [
      "At",
      "In",
      "On",
      "To"
    ],
    correctAnswer: "At"
  },
  {
    type: 'multiple-choice',
    question: "Hafta kunlari (Monday, Tuesday) bilan qaysi predlog ishlatiladi?",
    options: [
      "On",
      "In",
      "At",
      "From"
    ],
    correctAnswer: "On"
  },

  // --- LEVEL 4: Present Simple ---
  {
    type: 'multiple-choice',
    question: "Present Simple (Hozirgi oddiy zamon) qachon ishlatiladi?",
    options: [
      "Doimiy, takrorlanuvchi harakatlar va faktlar uchun",
      "Ayni paytda bo'layotgan ishlar uchun",
      "O'tgan zamondagi ishlar uchun",
      "Kelajakdagi rejalar uchun"
    ],
    correctAnswer: "Doimiy, takrorlanuvchi harakatlar va faktlar uchun"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple da 3-shaxs birlikda (He/She/It) fe'lga nima qo'shiladi?",
    options: [
      "-s yoki -es",
      "-ing",
      "-ed",
      "Hech narsa"
    ],
    correctAnswer: "-s yoki -es"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple da inkor gap qaysi yordamchi fe'llar bilan yasaladi?",
    options: [
      "Don't / Doesn't",
      "Am not / Isn't / Aren't",
      "Didn't",
      "Won't"
    ],
    correctAnswer: "Don't / Doesn't"
  },
  {
    type: 'multiple-choice',
    question: "\"Have\" fe'li 3-shaxs birlikda (He/She/It) qanday o'zgaradi?",
    options: [
      "Has",
      "Haves",
      "Having",
      "Had"
    ],
    correctAnswer: "Has"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple signal so'zlari qaysilar?",
    options: [
      "Always, usually, often, every day",
      "Now, at the moment",
      "Yesterday, ago",
      "Tomorrow, next week"
    ],
    correctAnswer: "Always, usually, often, every day"
  },

  // --- LEVEL 5: Present Continuous ---
  {
    type: 'multiple-choice',
    question: "Present Continuous (Hozirgi davomiy zamon) qanday yasaladi?",
    options: [
      "To be (am/is/are) + Verb + ing",
      "Subject + Verb + s",
      "Have/Has + Verb 3",
      "Will + Verb"
    ],
    correctAnswer: "To be (am/is/are) + Verb + ing"
  },
  {
    type: 'multiple-choice',
    question: "Present Continuous qachon ishlatiladi?",
    options: [
      "Ayni nutq paytida sodir bo'layotgan harakatlar uchun",
      "Har doim bo'ladigan ishlar uchun",
      "O'tmishdagi ishlar uchun",
      "Tugallangan ishlar uchun"
    ],
    correctAnswer: "Ayni nutq paytida sodir bo'layotgan harakatlar uchun"
  },
  {
    type: 'multiple-choice',
    question: "Present Continuous signal so'zlari qaysilar?",
    options: [
      "Now, at the moment, look!, listen!",
      "Every day, sometimes",
      "Last year, yesterday",
      "Since, for"
    ],
    correctAnswer: "Now, at the moment, look!, listen!"
  },
  {
    type: 'multiple-choice',
    question: "Stative Verbs (Holat fe'llari: like, know, want) Continuous zamonda ishlatiladimi?",
    options: [
      "Yo'q, ular odatda Simple zamonda ishlatiladi",
      "Ha, har doim",
      "Faqat so'roq gapda",
      "Farqi yo'q"
    ],
    correctAnswer: "Yo'q, ular odatda Simple zamonda ishlatiladi"
  },
  {
    type: 'multiple-choice',
    question: "\"There is / There are\" iborasi nimani bildiradi?",
    options: [
      "Biror joyda biror narsaning borligini",
      "Egalikni (Menda bor)",
      "Harakatni",
      "Vaqtni"
    ],
    correctAnswer: "Biror joyda biror narsaning borligini"
  },

  // --- WRITE-IN QUESTIONS (5 items) ---
  {
    type: 'fill-in-the-blank',
    question: "Present Continuous zamonini yasash uchun fe'lga qaysi qo'shimcha qo'shiladi?",
    correctAnswer: "ing"
  },
  {
    type: 'fill-in-the-blank',
    question: "Unli tovush bilan boshlanadigan birlikdagi otlar oldidan qaysi artikl ishlatiladi (a yoki an)?",
    correctAnswer: "an"
  },
  {
    type: 'fill-in-the-blank',
    question: "Ko'plik yasash uchun so'z oxiriga odatda qaysi harf qo'shiladi?",
    correctAnswer: "s"
  },
  {
    type: 'fill-in-the-blank',
    question: "\"To be\" fe'lining \"He/She/It\" uchun shaklini yozing.",
    correctAnswer: "is"
  },
  {
    type: 'fill-in-the-blank',
    question: "Present Simple inkor gaplarini yasashda \"I/You/We/They\" uchun qaysi yordamchi so'z ishlatiladi (inkor shakli)?",
    correctAnswer: "don't"
  }
];

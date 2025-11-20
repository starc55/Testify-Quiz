

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
  {
    type: 'multiple-choice',
    question: "Present Simple zamoni asosan nima uchun ishlatiladi?",
    options: [
      "Doimiy va takrorlanuvchi ish-harakatlar uchun",
      "Ayni paytda davom etayotgan ish-harakatlar uchun",
      "O'tmishda tugallangan ish-harakatlar uchun",
      "Kelajakdagi aniq rejalar uchun"
    ],
    correctAnswer: "Doimiy va takrorlanuvchi ish-harakatlar uchun"
  },
  {
    type: 'multiple-choice',
    question: "Past Continuous zamoni qanday yasaladi?",
    options: [
      "was / were + Verb + ing",
      "have / has + Verb 3",
      "had + Verb 3",
      "am / is / are + Verb + ing"
    ],
    correctAnswer: "was / were + Verb + ing"
  },
  {
    type: 'multiple-choice',
    question: "Present Perfect zamoni qachon ishlatiladi?",
    options: [
      "Natijasi hozir bilan bog'liq bo'lgan o'tgan ish-harakatda",
      "O'tmishdagi aniq vaqtda sodir bo'lgan ish-harakatda",
      "Kelajakdagi rejalashtirilgan ish-harakatda",
      "Hozir davom etayotgan jarayonda"
    ],
    correctAnswer: "Natijasi hozir bilan bog'liq bo'lgan o'tgan ish-harakatda"
  },
  {
    type: 'multiple-choice',
    question: "\"Had better\" iborasi qanday ma'noni bildiradi?",
    options: [
      "Kuchli maslahat yoki ogohlantirish (yaxshisi...)",
      "O'tmishdagi majburiyat",
      "Jismoniy qobiliyat",
      "Kelajakdagi ehtimollik"
    ],
    correctAnswer: "Kuchli maslahat yoki ogohlantirish (yaxshisi...)"
  },
  {
    type: 'multiple-choice',
    question: "\"Dare\" fe'li modal fe'l sifatida qanday ishlatiladi?",
    options: [
      "So'roq va inkor gaplarda yordamchi fe'lsiz (Daren't)",
      "Faqat darak gaplarda",
      "Har doim \"to\" yuklamasi bilan",
      "Faqat o'tgan zamonda"
    ],
    correctAnswer: "So'roq va inkor gaplarda yordamchi fe'lsiz (Daren't)"
  },
  {
    type: 'multiple-choice',
    question: "Future Continuous zamoni qanday yasaladi?",
    options: [
      "will be + Verb + ing",
      "will + Verb",
      "will have + Verb 3",
      "is going to + Verb"
    ],
    correctAnswer: "will be + Verb + ing"
  },
  {
    type: 'multiple-choice',
    question: "Qaysi turdagi fe'llar odatda Continuous (davomiy) zamonlarda ishlatilmaydi?",
    options: [
      "State verbs (Holat fe'llari: know, like, believe)",
      "Action verbs (Harakat fe'llari: run, eat)",
      "Yordamchi fe'llar",
      "Barcha fe'llar ishlatilishi mumkin"
    ],
    correctAnswer: "State verbs (Holat fe'llari: know, like, believe)"
  },
  {
    type: 'multiple-choice',
    question: "\"Can\" modal fe'li asosan nimani ifodalaydi?",
    options: [
      "Jismoniy yoki aqliy qobiliyat va imkoniyatni",
      "Qat'iy majburiyatni",
      "O'tmishdagi odatni",
      "Kelajakdagi rejaning aniqligini"
    ],
    correctAnswer: "Jismoniy yoki aqliy qobiliyat va imkoniyatni"
  },
  {
    type: 'multiple-choice',
    question: "Past Perfect zamoni qachon ishlatiladi?",
    options: [
      "O'tgan zamondagi boshqa bir ish-harakatdan oldin sodir bo'lgan ishda",
      "O'tgan zamonda davom etib turgan ish-harakatda",
      "Hozirgina tugagan ish-harakatda",
      "Kelajakdagi tugallangan ish-harakatda"
    ],
    correctAnswer: "O'tgan zamondagi boshqa bir ish-harakatdan oldin sodir bo'lgan ishda"
  },
  {
    type: 'multiple-choice',
    question: "\"Need\" fe'li qachon modal fe'l hisoblanadi?",
    options: [
      "Inkor va so'roq gaplarda \"s\" qo'shimchasisiz va \"do\"siz kelganda",
      "Har doim modal fe'l hisoblanadi",
      "Faqat darak gapda \"to\" bilan kelganda",
      "O'tgan zamon shaklida"
    ],
    correctAnswer: "Inkor va so'roq gaplarda \"s\" qo'shimchasisiz va \"do\"siz kelganda"
  },
  {
    type: 'multiple-choice',
    question: "Present Perfect Continuous nimaga urg'u beradi?",
    options: [
      "Ish-harakatning davomiyligiga va qancha vaqt davom etganiga",
      "Ish-harakatning faqat natijasiga",
      "Ish-harakatning aniq vaqtda tugaganiga",
      "Kelajakdagi rejalarga"
    ],
    correctAnswer: "Ish-harakatning davomiyligiga va qancha vaqt davom etganiga"
  },
  {
    type: 'multiple-choice',
    question: "\"Needn't have done\" qurilmasi qanday ma'noni anglatadi?",
    options: [
      "Qilish shart emas edi, lekin bajarildi",
      "Qilish shart emas edi va bajarilmadi",
      "Qilish kerak edi, lekin bajarilmadi",
      "Qilish mumkin emas edi"
    ],
    correctAnswer: "Qilish shart emas edi, lekin bajarildi"
  },
  {
    type: 'multiple-choice',
    question: "Future Perfect zamoni (will have V3) nimani bildiradi?",
    options: [
      "Kelajakdagi ma'lum bir vaqtgacha tugallanadigan ish-harakatni",
      "Kelajakda davom etadigan jarayonni",
      "Hozirgi paytdagi natijani",
      "O'tmishdagi tugallangan ishni"
    ],
    correctAnswer: "Kelajakdagi ma'lum bir vaqtgacha tugallanadigan ish-harakatni"
  },
  {
    type: 'multiple-choice',
    question: "\"Had better\" dan keyin fe'l qaysi shaklda keladi?",
    options: [
      "Bare Infinitive (\"to\" siz)",
      "To + Infinitive",
      "Gerund (V-ing)",
      "Past Participle (V3)"
    ],
    correctAnswer: "Bare Infinitive (\"to\" siz)"
  },
  {
    type: 'multiple-choice',
    question: "Present Continuous zamoni kelajak ma'nosida qachon ishlatiladi?",
    options: [
      "Oldindan rejalashtirilgan va kelishilgan ish-harakatlar (Arrangements) uchun",
      "Ob-havo bashorati uchun",
      "Jadval asosidagi ish-harakatlar uchun",
      "Qaror qabul qilinmagan ishlar uchun"
    ],
    correctAnswer: "Oldindan rejalashtirilgan va kelishilgan ish-harakatlar (Arrangements) uchun"
  },
  {
    type: 'multiple-choice',
    question: "\"Going to\" qurilmasi asosan nima uchun ishlatiladi?",
    options: [
      "Niyat qilish va aniq dalilga asoslangan bashorat uchun",
      "Ayni damda qabul qilingan qarorlar uchun",
      "Jadval bo'yicha sodir bo'ladigan ishlar uchun",
      "O'tmishdagi odatlar uchun"
    ],
    correctAnswer: "Niyat qilish va aniq dalilga asoslangan bashorat uchun"
  },
  {
    type: 'multiple-choice',
    question: "\"Since\" va \"For\" kalit so'zlari asosan qaysi zamon guruhiga xos?",
    options: [
      "Perfect tenses (Tugallangan zamonlar)",
      "Continuous tenses (Davomiy zamonlar)",
      "Simple tenses (Oddiy zamonlar)",
      "Future tenses (Kelajak zamonlar)"
    ],
    correctAnswer: "Perfect tenses (Tugallangan zamonlar)"
  },
  {
    type: 'multiple-choice',
    question: "Modal fe'llardan (can, must, should) keyin fe'l qanday shaklda bo'ladi?",
    options: [
      "Base form (O'zak shakl, \"to\" siz)",
      "Infinitive with to (\"to\" bilan)",
      "Gerund (V-ing)",
      "Past form (O'tgan zamon)"
    ],
    correctAnswer: "Base form (O'zak shakl, \"to\" siz)"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple va Present Perfect o'rtasidagi asosiy farq nima?",
    options: [
      "Past Simple'da vaqt aniq (finished time), Present Perfect'da vaqt noma'lum (unfinished time)",
      "Farqi yo'q, ikkisi ham bir xil",
      "Past Simple kelajakni, Present Perfect o'tmishni bildiradi",
      "Present Perfect faqat inkor gaplarda ishlatiladi"
    ],
    correctAnswer: "Past Simple'da vaqt aniq (finished time), Present Perfect'da vaqt noma'lum (unfinished time)"
  },
  {
    type: 'multiple-choice',
    question: "\"Be to\" (I am to go...) qurilmasi modal ma'noda nimani anglatadi?",
    options: [
      "Rasmiy reja yoki buyruqni",
      "Jismoniy qobiliyatni",
      "O'tgan zamondagi odatni",
      "Maslahatni"
    ],
    correctAnswer: "Rasmiy reja yoki buyruqni"
  },
  {
    type: 'multiple-choice',
    question: "\"Used to\" va \"Would\" o'rtasidagi asosiy farq nima?",
    options: [
      "\"Used to\" ham holat, ham harakat uchun, \"Would\" faqat harakat uchun ishlatiladi",
      "\"Used to\" faqat kelajakda ishlatiladi, \"Would\" esa o'tmishda",
      "\"Would\" faqat holat fe'llari bilan keladi",
      "Ikkala ibora o'rtasida hech qanday farq yo'q"
    ],
    correctAnswer: "\"Used to\" ham holat, ham harakat uchun, \"Would\" faqat harakat uchun ishlatiladi"
  },
  {
    type: 'multiple-choice',
    question: "Future Perfect Continuous zamoni qanday yasaladi?",
    options: [
      "will have been + Verb + ing",
      "will be + Verb + ing",
      "will have + Verb 3",
      "am / is / are + going to + have + V3"
    ],
    correctAnswer: "will have been + Verb + ing"
  },
  {
    type: 'multiple-choice',
    question: "\"Must\" va \"Have to\" o'rtasidagi farq qaysi javobda to'g'ri ko'rsatilgan?",
    options: [
      "\"Must\" so'zlovchining shaxsiy fikri, \"Have to\" tashqi qoida yoki majburiyat",
      "\"Must\" faqat o'tmishda ishlatiladi",
      "\"Have to\" faqat taklif bildirish uchun ishlatiladi",
      "\"Must\" rasmiy, \"Have to\" esa norasmiy uslubda qo'llanadi"
    ],
    correctAnswer: "\"Must\" so'zlovchining shaxsiy fikri, \"Have to\" tashqi qoida yoki majburiyat"
  },
  {
    type: 'multiple-choice',
    question: "\"Dare\" fe'li darak gaplarda asosiy fe'l sifatida kelganda qanday ishlatiladi?",
    options: [
      "\"To\" yuklamasi bilan va shaxsda tuslanib (He dares to go...)",
      "Har doim yordamchi fe'l sifatida \"to\" siz",
      "Faqat -ing shaklida keladi",
      "Faqat o'tgan zamonda qo'llanadi"
    ],
    correctAnswer: "\"To\" yuklamasi bilan va shaxsda tuslanib (He dares to go...)"
  },
  {
    type: 'multiple-choice',
    question: "Third Conditional (Uchinchi shart ergash gap) qanday yasaladi?",
    options: [
      "If + Past Perfect, ... would have + V3",
      "If + Past Simple, ... would + V1",
      "If + Present Simple, ... will + V1",
      "If + Past Perfect, ... would + V1"
    ],
    correctAnswer: "If + Past Perfect, ... would have + V3"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple zamonida Majhul nisbat (Passive Voice) qanday yasaladi?",
    options: [
      "am / is / are + Verb 3 (Past Participle)",
      "have / has + been + V3",
      "was / were + V3",
      "will be + V3"
    ],
    correctAnswer: "am / is / are + Verb 3 (Past Participle)"
  },
  {
    type: 'multiple-choice',
    question: "\"May\" va \"Might\" o'rtasidagi ehtimollik darajasidagi farq qanday?",
    options: [
      "\"Might\" sodir bo'lish ehtimoli \"May\"ga qaraganda kamroq bo'lganda ishlatiladi",
      "\"Might\" ancha kuchliroq ehtimolni bildiradi",
      "Ikkisi faqat o'tmishda ishlatiladi",
      "Hech qanday farq yo'q"
    ],
    correctAnswer: "\"Might\" sodir bo'lish ehtimoli \"May\"ga qaraganda kamroq bo'lganda ishlatiladi"
  },
  {
    type: 'multiple-choice',
    question: "Zero Conditional (Nolinchi shart gap) qachon ishlatiladi?",
    options: [
      "Umumiy haqiqatlar va ilmiy faktlar uchun (har doim to'g'ri bo'lgan narsalar)",
      "Kelajakdagi ehtimollar uchun",
      "O'tmishdagi afsuslanish uchun",
      "Xayoliy va imkonsiz vaziyatlar uchun"
    ],
    correctAnswer: "Umumiy haqiqatlar va ilmiy faktlar uchun (har doim to'g'ri bo'lgan narsalar)"
  },
  {
    type: 'multiple-choice',
    question: "Past Perfect Continuous zamoni nimani ifodalaydi?",
    options: [
      "O'tmishdagi bir vaqtdan oldin boshlanib, o'sha vaqtgacha davom etgan ish-harakatni",
      "Hozir tugagan ish-harakatni",
      "Kelajakdagi davomiy ishni",
      "O'tmishdagi juda qisqa harakatni"
    ],
    correctAnswer: "O'tmishdagi bir vaqtdan oldin boshlanib, o'sha vaqtgacha davom etgan ish-harakatni"
  },
  {
    type: 'multiple-choice',
    question: "\"Can\" modal fe'lining o'tgan zamon shakli qaysi?",
    options: [
      "Could",
      "Caned",
      "Must",
      "Should"
    ],
    correctAnswer: "Could"
  }
];
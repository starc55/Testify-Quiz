import type { QuizQuestion, Theme, ThemeName, VocabularyItem } from './types';

export const QUIZ_DURATION_SECONDS = 40 * 60; // 2400 seconds (40 minutes)

export const QUIZ_VOCABULARY: VocabularyItem[] = [
  { term: "Study hard", definition: "Qunt bilan o'qimoq" },
  { term: "Clean the room", definition: "Xonani tozalamoq" },
  { term: "Be happy", definition: "Baxtli bo'lmoq / Xursand bo'lmoq" },
  { term: "Always", definition: "Har doim" },
  { term: "For example", definition: "Masalan" },
  { term: "Regularly", definition: "Muntazam" },
  { term: "Continually", definition: "Uzluksiz" },
  { term: "Everyday", definition: "Har kuni" },
  { term: "On Mondays", definition: "Dushanbalarda" },
  { term: "From time to time", definition: "Vaqt-vaqti bilan" },
  { term: "Today", definition: "Bugun" },
  { term: "Yesterday", definition: "Kecha" },
  { term: "Often", definition: "Tez-tez, ko'pincha" },
  { term: "The day before yesterday", definition: "Oldingi kuni" },
  { term: "Next week", definition: "Keyingi hafta" },
  { term: "Ago", definition: "Oldin" },
  { term: "In the past", definition: "O'tmishda" },
  { term: "During", definition: "Davomida" },
  { term: "Just now", definition: "Endi / Hozir" },
  { term: "At last", definition: "Oxiri, nihoyat" },
  { term: "Let", definition: "Ruxsat bermoq" },
  { term: "Try", definition: "Urinib ko'rmoq" },
  { term: "I'm sure", definition: "Ishonchim komil" },
  { term: "Prohibit", definition: "Taqiqlamoq" },
  { term: "Believe", definition: "Ishonmoq" },
  { term: "Expect", definition: "Kutmoq, umid qilmoq" },
  { term: "Bet", definition: "Pul tikmoq" },
  { term: "Promise", definition: "Va'da bermoq" },
  { term: "Suppose", definition: "Taxmin qilmoq" },
  { term: "Propose", definition: "Taklif qilmoq" },
  { term: "Worry", definition: "Xavotirlanmoq" },
  { term: "Hopefully", definition: "Umid bilan" },
  { term: "Be at home", definition: "Uyda bo'lmoq" },
  { term: "Be a student", definition: "Talaba bo'lmoq" },
  { term: "Thank him politely", definition: "Unga xushmuomalalik bilan rahmat aytmoq" },
  { term: "Go to master", definition: "Ustozga bormoq" },
  { term: "Be interested in music", definition: "Musiqaga qiziqmoq" },
  { term: "Go to class", definition: "Darsga bormoq" },
  { term: "Be a good teacher", definition: "Yaxshi o'qituvchi bo'lmoq" },
  { term: "Be on the table", definition: "Stol ustida bo'lmoq" },
  { term: "Spend your money", definition: "Pulni sarflamoq" },
  { term: "To tell the truth", definition: "Rostini aytmoq" }
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
  // --- PART 1: Grammar Theory MCQs (25 questions) ---
  {
    type: 'multiple-choice',
    question: "Ingliz alifbosida nechta unli harf (vowels) bor?",
    options: ["5 ta (a, e, i, o, u)", "6 ta", "21 ta", "10 ta"],
    correctAnswer: "5 ta (a, e, i, o, u)"
  },
  {
    type: 'multiple-choice',
    question: "Consonants (Undoshlar) nima?",
    options: ["Unli bo'lmagan barcha harflar (b, c, d...)", "Faqat a, e, i, o, u harflari", "Faqat raqamlar", "Tinish belgilari"],
    correctAnswer: "Unli bo'lmagan barcha harflar (b, c, d...)"
  },
  {
    type: 'multiple-choice',
    question: "Ingliz tilida gap qurilishi qanday tartibda bo'ladi?",
    options: ["Subject + Verb + Object (Ega + Kesim + To'ldiruvchi)", "Verb + Subject + Object", "Object + Verb + Subject", "Verb + Object + Subject"],
    correctAnswer: "Subject + Verb + Object (Ega + Kesim + To'ldiruvchi)"
  },
  {
    type: 'multiple-choice',
    question: "\"A\" artikli qachon ishlatiladi?",
    options: ["Undosh tovush bilan boshlanadigan birlikdagi otlar oldidan", "Unli tovush bilan boshlanadigan otlar oldidan", "Ko'plikdagi otlar oldidan", "Sanalmaydigan otlar oldidan"],
    correctAnswer: "Undosh tovush bilan boshlanadigan birlikdagi otlar oldidan"
  },
  {
    type: 'multiple-choice',
    question: "\"An\" artikli qachon ishlatiladi?",
    options: ["Unli tovush bilan boshlanadigan birlikdagi otlar oldidan", "Undosh tovush bilan boshlanadigan otlar oldidan", "Faqat sifatlar oldidan", "Odam ismlari oldidan"],
    correctAnswer: "Unli tovush bilan boshlanadigan birlikdagi otlar oldidan"
  },
  {
    type: 'multiple-choice',
    question: "Ko'plik yasashning umumiy qoidasi nima?",
    options: ["So'z oxiriga -s yoki -es qo'shish", "So'z oxiriga -ing qo'shish", "So'z oxiriga -ed qo'shish", "So'zni butunlay o'zgartirish"],
    correctAnswer: "So'z oxiriga -s yoki -es qo'shish"
  },
  {
    type: 'multiple-choice',
    question: "Qaysi so'z noto'g'ri ko'plik shaklida yozilgan? (Irregular)",
    options: ["Childs", "Children", "Men", "Feet"],
    correctAnswer: "Childs"
  },
  {
    type: 'multiple-choice',
    question: "\"Him, Her, Us, Them\" qanday olmoshlar hisoblanadi?",
    options: ["Object Pronouns (To'ldiruvchi olmoshlar)", "Subject Pronouns (Ega olmoshlar)", "Possessive Adjectives (Egalik sifatlari)", "Reflexive Pronouns (O'zlik olmoshlari)"],
    correctAnswer: "Object Pronouns (To'ldiruvchi olmoshlar)"
  },
  {
    type: 'multiple-choice',
    question: "Egalikni bildirish uchun shaxs otlariga (masalan: John) nima qo'shiladi?",
    options: ["'s (apostrof s)", "-s", "-es", "Of"],
    correctAnswer: "'s (apostrof s)"
  },
  {
    type: 'multiple-choice',
    question: "\"To be\" fe'lining hozirgi zamon shakllari qaysilar?",
    options: ["Am, Is, Are", "Was, Were", "Do, Does", "Have, Has"],
    correctAnswer: "Am, Is, Are"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple (Hozirgi oddiy) zamonda so'roq gap qanday yasaladi?",
    options: ["Do / Does yordamchi fe'llari orqali", "Am / Is / Are oldinga chiqishi orqali", "Will yordamida", "Did yordamida"],
    correctAnswer: "Do / Does yordamchi fe'llari orqali"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple da 3-shaxs birlikda (He/She/It) fe'l qanday o'zgaradi?",
    options: ["-s yoki -es qo'shimchasi qo'shiladi", "-ing qo'shiladi", "-ed qo'shiladi", "O'zgarmaydi"],
    correctAnswer: "-s yoki -es qo'shimchasi qo'shiladi"
  },
  {
    type: 'multiple-choice',
    question: "Present Continuous (Hozirgi davomiy) zamon formulasi qanday?",
    options: ["Am/Is/Are + Verb + ing", "Subject + Verb + s", "Have/Has + Verb 3", "Will + Verb"],
    correctAnswer: "Am/Is/Are + Verb + ing"
  },
  {
    type: 'multiple-choice',
    question: "Present Continuous uchun signal so'zlar qaysilar?",
    options: ["Now, at the moment, Listen!, Look!", "Always, usually, often", "Yesterday, last week", "Tomorrow, next year"],
    correctAnswer: "Now, at the moment, Listen!, Look!"
  },
  {
    type: 'multiple-choice',
    question: "Stative Verbs (Holat fe'llari) Continuous zamonda ishlatiladimi?",
    options: ["Yo'q, ular odatda Simple zamonlarda ishlatiladi", "Ha, har doim", "Faqat kelasi zamonda", "Faqat inkor gapda"],
    correctAnswer: "Yo'q, ular odatda Simple zamonlarda ishlatiladi"
  },
  {
    type: 'multiple-choice',
    question: "\"To be\" fe'lining o'tgan zamon shakllari qaysilar?",
    options: ["Was, Were", "Am, Is, Are", "Been", "Being"],
    correctAnswer: "Was, Were"
  },
  {
    type: 'multiple-choice',
    question: "To'g'ri fe'llar (Regular verbs) o'tgan zamonda qanday tuslanadi?",
    options: ["-ed qo'shimchasi qo'shiladi", "-ing qo'shiladi", "V2 shakli yodlanadi", "-s qo'shiladi"],
    correctAnswer: "-ed qo'shimchasi qo'shiladi"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple da so'roq va inkor gaplar qaysi yordamchi fe'l bilan yasaladi?",
    options: ["Did", "Do", "Does", "Will"],
    correctAnswer: "Did"
  },
  {
    type: 'multiple-choice',
    question: "Past Continuous (O'tgan davomiy) zamon formulasi qanday?",
    options: ["Was/Were + Verb + ing", "Am/Is/Are + Verb + ing", "Had + Verb 3", "Did + Verb"],
    correctAnswer: "Was/Were + Verb + ing"
  },
  {
    type: 'multiple-choice',
    question: "Past Continuous qachon ishlatiladi?",
    options: ["O'tmishdagi ma'lum bir vaqtda davom etayotgan harakat uchun", "O'tmishda tugallangan qisqa harakat uchun", "Kelajakdagi rejalar uchun", "Doimiy haqiqatlar uchun"],
    correctAnswer: "O'tmishdagi ma'lum bir vaqtda davom etayotgan harakat uchun"
  },
  {
    type: 'multiple-choice',
    question: "Future Simple (Kelasi oddiy) zamon qaysi yordamchi fe'l bilan yasaladi?",
    options: ["Will", "Did", "Do", "Are"],
    correctAnswer: "Will"
  },
  {
    type: 'multiple-choice',
    question: "\"Be going to\" iborasi nima uchun ishlatiladi?",
    options: ["Oldindan rejalashtirilgan ish-harakatlar uchun", "Nutq paytida qilingan qarorlar uchun", "O'tmishdagi ishlar uchun", "Doimiy odatlar uchun"],
    correctAnswer: "Oldindan rejalashtirilgan ish-harakatlar uchun"
  },
  {
    type: 'multiple-choice',
    question: "Future Continuous (Kelasi davomiy) zamon formulasi qanday?",
    options: ["Will be + Verb + ing", "Will + Verb", "Am/Is/Are going to + Verb", "Will have + Verb 3"],
    correctAnswer: "Will be + Verb + ing"
  },
  {
    type: 'multiple-choice',
    question: "Future Continuous qachon ishlatiladi?",
    options: ["Kelajakdagi aniq bir vaqtda davom etayotgan bo'ladigan ishlar uchun", "Kelajakda tugallanadigan ishlar uchun", "Hozirgi paytdagi ishlar uchun", "O'tmishdagi davomiy ishlar uchun"],
    correctAnswer: "Kelajakdagi aniq bir vaqtda davom etayotgan bo'ladigan ishlar uchun"
  },
  {
    type: 'multiple-choice',
    question: "Vaqt predloglaridan qaysi biri soatlar bilan ishlatiladi?",
    options: ["At", "In", "On", "To"],
    correctAnswer: "At"
  },

  // --- PART 2: Grammar Fill-in-the-blank (5 questions) ---
  {
    type: 'fill-in-the-blank',
    question: "\"Go\" fe'lining o'tgan zamon shakli (V2) nima?",
    correctAnswer: "went"
  },
  {
    type: 'fill-in-the-blank',
    question: "Present Continuous zamonini yasashda fe'lga qaysi qo'shimcha qo'shiladi?",
    correctAnswer: "ing"
  },
  {
    type: 'fill-in-the-blank',
    question: "Future Continuous zamonida yordamchi fe'l qanday bo'ladi? (Will ...)",
    correctAnswer: ["will be", "be"]
  },
  {
    type: 'fill-in-the-blank',
    question: "Unli tovush bilan boshlanadigan birlikdagi otlar oldidan qaysi artikl (a/an) ishlatiladi?",
    correctAnswer: "an"
  },
  {
    type: 'fill-in-the-blank',
    question: "\"Man\" (erkak kishi) so'zining ko'plik shakli nima?",
    correctAnswer: "men"
  },

  // --- PART 3: Vocabulary Multiple Choice (15 questions) ---
  {
    type: 'multiple-choice',
    question: "\"Regularly\" so'zining tarjimasi nima?",
    options: ["Muntazam", "Kamdan-kam", "Har doim", "Hech qachon"],
    correctAnswer: "Muntazam"
  },
  {
    type: 'multiple-choice',
    question: "\"Prohibit\" so'zining ma'nosi nima?",
    options: ["Taqiqlamoq", "Ruxsat bermoq", "Taklif qilmoq", "Va'da bermoq"],
    correctAnswer: "Taqiqlamoq"
  },
  {
    type: 'multiple-choice',
    question: "\"Hopefully\" qanday tarjima qilinadi?",
    options: ["Umid bilan", "Ishonch bilan", "Afsuski", "Tez orada"],
    correctAnswer: "Umid bilan"
  },
  {
    type: 'multiple-choice',
    question: "\"Spend your money\" iborasi nimani anglatadi?",
    options: ["Pulni sarflamoq", "Pul topmoq", "Pulni tejamoq", "Pul yo'qotmoq"],
    correctAnswer: "Pulni sarflamoq"
  },
  {
    type: 'multiple-choice',
    question: "\"Be interested in music\" nima degani?",
    options: ["Musiqaga qiziqmoq", "Musiqa tinglamoq", "Musiqa chalmoq", "Musiqani yomon ko'rmoq"],
    correctAnswer: "Musiqaga qiziqmoq"
  },
  {
    type: 'multiple-choice',
    question: "\"Believe\" so'zining ma'nosi nima?",
    options: ["Ishonmoq", "Kutmoq", "Yashamoq", "Sotib olmoq"],
    correctAnswer: "Ishonmoq"
  },
  {
    type: 'multiple-choice',
    question: "\"Often\" qanday tarjima qilinadi?",
    options: ["Tez-tez", "Hech qachon", "Kamdan-kam", "Har doim"],
    correctAnswer: "Tez-tez"
  },
  {
    type: 'multiple-choice',
    question: "\"Ago\" so'zi nimani bildiradi?",
    options: ["Oldin", "Keyin", "Hozir", "Tezda"],
    correctAnswer: "Oldin"
  },
  {
    type: 'multiple-choice',
    question: "\"In the past\" iborasi qanday tarjima qilinadi?",
    options: ["O'tmishda", "Kelajakda", "Hozirda", "Tez orada"],
    correctAnswer: "O'tmishda"
  },
  {
    type: 'multiple-choice',
    question: "\"Promise\" so'zining ma'nosi nima?",
    options: ["Va'da bermoq", "Ruxsat bermoq", "Sotmoq", "Yordam bermoq"],
    correctAnswer: "Va'da bermoq"
  },
  {
    type: 'multiple-choice',
    question: "\"Suppose\" so'zi nimani anglatadi?",
    options: ["Taxmin qilmoq", "Aniq bilmoq", "Unutmoq", "Rad etmoq"],
    correctAnswer: "Taxmin qilmoq"
  },
  {
    type: 'multiple-choice',
    question: "\"Propose\" so'zi qanday tarjima qilinadi?",
    options: ["Taklif qilmoq", "Xafa bo'lmoq", "Kulmoq", "O'ylamoq"],
    correctAnswer: "Taklif qilmoq"
  },
  {
    type: 'multiple-choice',
    question: "\"Next week\" qanday tarjima qilinadi?",
    options: ["Keyingi hafta", "O'tgan hafta", "Shu hafta", "Har hafta"],
    correctAnswer: "Keyingi hafta"
  },
  {
    type: 'multiple-choice',
    question: "\"Today\" so'zining ma'nosi nima?",
    options: ["Bugun", "Kecha", "Ertaga", "Indin"],
    correctAnswer: "Bugun"
  },
  {
    type: 'multiple-choice',
    question: "\"Let\" so'zi nimani anglatadi?",
    options: ["Ruxsat bermoq", "Taqiqlamoq", "Kutmoq", "Yugurmoq"],
    correctAnswer: "Ruxsat bermoq"
  },

  // --- PART 4: Vocabulary Fill-in-the-blank (5 questions) ---
  {
    type: 'fill-in-the-blank',
    question: "\"Har doim\" so'zining inglizcha tarjimasi nima?",
    correctAnswer: "always"
  },
  {
    type: 'fill-in-the-blank',
    question: "\"Kecha\" (o'tgan kun) ingliz tilida nima bo'ladi?",
    correctAnswer: "yesterday"
  },
  {
    type: 'fill-in-the-blank',
    question: "\"Rostini aytmoq\" iborasini inglizchaga tarjima qiling. (To ...)",
    correctAnswer: ["tell the truth", "to tell the truth"]
  },
  {
    type: 'fill-in-the-blank',
    question: "\"Ishonchim komil\" iborasi ingliz tilida qanday bo'ladi? (I'm ...)",
    correctAnswer: ["sure", "i'm sure", "i am sure"]
  },
  {
    type: 'fill-in-the-blank',
    question: "\"Xavotirlanmoq\" fe'lining inglizcha tarjimasi nima?",
    correctAnswer: "worry"
  }
];
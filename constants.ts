
import type { QuizQuestion, Theme, ThemeName, VocabularyItem } from './types';

export const QUIZ_DURATION_SECONDS = 60 * 60; // 60 minutes (40 questions * 1.5 min)

export const QUIZ_VOCABULARY: VocabularyItem[] = [
  { term: "Nouns", definition: "Otlarning egalik shakli" },
  { term: "Articles", definition: "Artikllar (a, an, the)" },
  { term: "Pronouns", definition: "Olmoshlar (I, me, my...)" },
  { term: "Tenses", definition: "Zamonlar nazariyasi" },
  { term: "To be", definition: "To be fe'li shakllari" },
  { term: "Numbers", definition: "Sonlar nazariyasi" }
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
  // --- Possessives & Nouns Theory (1-6) ---
  {
    type: 'multiple-choice',
    question: "Otlarning egalik shakli (-'s) asosan nima uchun ishlatiladi?",
    options: ["Tegishlilik/Egalik bildirish", "Ko'plik yasash", "Zamon bildirish", "Sifat yasash"],
    correctAnswer: "Tegishlilik/Egalik bildirish"
  },
  {
    type: 'multiple-choice',
    question: "Oxiri 's' bilan tugagan ko'plikdagi otlarga egalik shakli qanday qo'shiladi?",
    options: ["Faqat apostrof (')", "-'s qo'shimchasi", "-es qo'shimchasi", "Hech narsa qo'shilmaydi"],
    correctAnswer: "Faqat apostrof (')"
  },
  {
    type: 'multiple-choice',
    question: "Sanalmaydigan otlarning ko'plik shakli qanday yasaladi?",
    options: ["Ular odatda ko'plikda ishlatilmaydi", "-s qo'shish orqali", "-es qo'shish orqali", "O'zagi o'zgaradi"],
    correctAnswer: "Ular odatda ko'plikda ishlatilmaydi"
  },
  {
    type: 'multiple-choice',
    question: "Murakkab otlarda (Compound Nouns) egalik shakli qayerga qo'shiladi?",
    options: ["Oxirgi so'zga", "Birinchi so'zga", "Har bir so'zga", "Hech biriga"],
    correctAnswer: "Oxirgi so'zga"
  },
  {
    type: 'multiple-choice',
    question: "Jonsiz narsalar uchun egalik shakli asosan nima orqali ifodalanadi?",
    options: ["of predlogi orqali", "-'s orqali", "-es orqali", "-ies orqali"],
    correctAnswer: "of predlogi orqali"
  },
  {
    type: 'multiple-choice',
    question: "Abstract (mavhum) otlar (misol: Love, Freedom) sanaladimi?",
    options: ["Odatda sanalmaydi", "Hamisha sanaladi", "Faqat birlikda", "-s bilan sanaladi"],
    correctAnswer: "Odatda sanalmaydi"
  },

  // --- Articles Theory (7-12) ---
  {
    type: 'multiple-choice',
    question: "Artikl 'an' qachon ishlatiladi?",
    options: ["So'z unli tovush bilan boshlansa", "So'z undosh harf bilan boshlansa", "So'z unli harf bilan boshlansa", "Faqat ismlar oldidan"],
    correctAnswer: "So'z unli tovush bilan boshlansa"
  },
  {
    type: 'multiple-choice',
    question: "Aniq artikl 'the' qachon ishlatiladi?",
    options: ["Narsa haqida ma'lumot aniq bo'lsa", "Narsa birinchi marta tilga olinsa", "Faqat birlikda", "Faqat sanalmaydigan otlarda"],
    correctAnswer: "Narsa haqida ma'lumot aniq bo'lsa"
  },
  {
    type: 'multiple-choice',
    question: "Dunyo miqyosidagi yagona narsalar (Sun, Moon) bilan qaysi artikl ishlatiladi?",
    options: ["The", "A", "An", "Artikl ishlatilmaydi"],
    correctAnswer: "The"
  },
  {
    type: 'multiple-choice',
    question: "Ovqatlanish vaqtlari (breakfast, lunch) oldidan odatda artikl ishlatiladimi?",
    options: ["Yo'q, ishlatilmaydi", "Ha, asosan 'the'", "Ha, asosan 'a'", "Faqat 'an'"],
    correctAnswer: "Yo'q, ishlatilmaydi"
  },
  {
    type: 'multiple-choice',
    question: "Kasb-hunar egalarini aytganda qaysi artikl ishlatiladi?",
    options: ["A / An", "The", "Zero article", "Some"],
    correctAnswer: "A / An"
  },
  {
    type: 'multiple-choice',
    question: "Okeanlar, daryolar va tog' tizmalari nomlari oldidan qaysi artikl ishlatiladi?",
    options: ["The", "A", "An", "Artikl qo'yilmaydi"],
    correctAnswer: "The"
  },

  // --- Pronouns Theory (13-18) ---
  {
    type: 'multiple-choice',
    question: "Egalik olmoshlari (Possessive Pronouns - mine, yours) dan keyin ot ishlatiladimi?",
    options: ["Yo'q, ishlatilmaydi", "Ha, hamisha", "Faqat birlikda", "Faqat 'mine' dan keyin"],
    correctAnswer: "Yo'q, ishlatilmaydi"
  },
  {
    type: 'multiple-choice',
    question: "O'zlik olmoshlari (Reflexive Pronouns - myself, himself) qachon ishlatiladi?",
    options: ["Ega va to'ldiruvchi bir xil bo'lsa", "Egalikni bildirish uchun", "Savol berish uchun", "Ko'rsatish uchun"],
    correctAnswer: "Ega va to'ldiruvchi bir xil bo'lsa"
  },
  {
    type: 'multiple-choice',
    question: "Ko'rsatish olmoshlari ichida uzoqdagi birlikka nisbatan nima ishlatiladi?",
    options: ["That", "This", "These", "Those"],
    correctAnswer: "That"
  },
  {
    type: 'multiple-choice',
    question: "Belgisiz olmoshlar (some, any) haqida qaysi qoida to'g'ri?",
    options: ["Some tasdiqda, any so'roq/inkorda", "Some inkor, any tasdiq", "Faqat artikllarda farq", "Farqi yo'q"],
    correctAnswer: "Some tasdiqda, any so'roq/inkorda"
  },
  {
    type: 'multiple-choice',
    question: "Egalik sifatlari (Possessive Adjectives - my, your) dan keyin nima keladi?",
    options: ["Ot (Noun)", "Fe'l (Verb)", "Ravish (Adverb)", "Hech narsa"],
    correctAnswer: "Ot (Noun)"
  },
  {
    type: 'multiple-choice',
    question: "Sanalmaydigan otlar bilan miqdorni bildirish uchun nima ishlatiladi?",
    options: ["Much / Little", "Many / Few", "A lot / Bit", "Any / Much"],
    correctAnswer: "Much / Little"
  },

  // --- Numerals Theory (19-24) ---
  {
    type: 'multiple-choice',
    question: "Miqdor sonlar (Cardinal numbers) nimanini bildiradi?",
    options: ["Soni yoki miqdorini", "Tartib o'rnini", "Vaqtni", "O'lchovni"],
    correctAnswer: "Soni yoki miqdorini"
  },
  {
    type: 'multiple-choice',
    question: "Tartib sonlar (Ordinal numbers) qaysi artikl bilan birga keladi?",
    options: ["The", "A", "An", "Artikl ishlatilmaydi"],
    correctAnswer: "The"
  },
  {
    type: 'multiple-choice',
    question: "Sana aytilganda asosan qaysi sonlar ishlatiladi?",
    options: ["Tartib sonlar", "Miqdor sonlar", "Rim raqamlari", "O'nli sonlar"],
    correctAnswer: "Tartib sonlar"
  },
  {
    type: 'multiple-choice',
    question: "Tartib son yasashda -th qo'shimchasi qaysi sonlardan boshqa barchasiga qo'shiladi?",
    options: ["1, 2, 3", "1, 5, 10", "11, 12, 13", "0, 1, 2"],
    correctAnswer: "1, 2, 3"
  },
  {
    type: 'multiple-choice',
    question: "Yuzliklarda (hundreds) 'hundred' so'ziga qachon -s qo'shiladi?",
    options: ["Noaniq ko'plik bo'lganda (hundreds of)", "Har doim", "Hech qachon", "Faqat birlikda"],
    correctAnswer: "Noaniq ko'plik bo'lganda (hundreds of)"
  },
  {
    type: 'multiple-choice',
    question: "O'nli kasrlarda (decimals) nuqta qanday o'qiladi?",
    options: ["Point", "Comma", "Dot", "Full stop"],
    correctAnswer: "Point"
  },

  // --- To Be Theory (25-30) ---
  {
    type: 'multiple-choice',
    question: "To be fe'lining hozirgi zamon shakllari qaysilar?",
    options: ["am, is, are", "was, were", "been, being", "do, does"],
    correctAnswer: "am, is, are"
  },
  {
    type: 'multiple-choice',
    question: "He, She, It uchun to be ning qaysi shakli ishlatiladi?",
    options: ["is", "am", "are", "was"],
    correctAnswer: "is"
  },
  {
    type: 'multiple-choice',
    question: "We, You, They uchun to be ning hozirgi zamon shakli qaysi?",
    options: ["are", "am", "is", "were"],
    correctAnswer: "are"
  },
  {
    type: 'multiple-choice',
    question: "To be fe'lining o'tgan zamon (Past Simple) shakllari nima?",
    options: ["was, were", "am, is, are", "been, being", "did, done"],
    correctAnswer: "was, were"
  },
  {
    type: 'multiple-choice',
    question: "To be fe'lining kelajak zamon shakli qaysi?",
    options: ["will be", "am be", "was be", "is be"],
    correctAnswer: "will be"
  },
  {
    type: 'multiple-choice',
    question: "To be fe'li asosan qanday maqsadlarda ishlatiladi?",
    options: ["Holat va kimlikni bildirishda", "Harakatni bildirishda", "Faqat so'roq gapda", "Majburiyatda"],
    correctAnswer: "Holat va kimlikni bildirishda"
  },

  // --- Tenses Theory (31-40) ---
  {
    type: 'multiple-choice',
    question: "Present Simple qachon ishlatiladi?",
    options: ["Doimiy/Odatiy ishlar uchun", "Ayni damda bo'layotgan", "Tugallangan ishlar", "Kelajak rejalari"],
    correctAnswer: "Doimiy/Odatiy ishlar uchun"
  },
  {
    type: 'multiple-choice',
    question: "Present Continuous ning asosiy formulasi nima?",
    options: ["am/is/are + V-ing", "do/does + V", "have/has + V3", "was/were + V"],
    correctAnswer: "am/is/are + V-ing"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple da noto'g'ri fe'llarning (Irregular verbs) nechanchi shakli ishlatiladi?",
    options: ["2-shakli (V2)", "1-shakli (V1)", "3-shakli (V3)", "Ing-shakli"],
    correctAnswer: "2-shakli (V2)"
  },
  {
    type: 'multiple-choice',
    question: "Present Perfect asosan nimaga e'tibor qaratadi?",
    options: ["Ish-harakatning natijasiga", "Vaqtning aniqligiga", "Jarayon davomiyligiga", "O'tmish odatiga"],
    correctAnswer: "Ish-harakatning natijasiga"
  },
  {
    type: 'multiple-choice',
    question: "Past Perfect qachon ishlatiladi?",
    options: ["O'tmishdagi ikki ishdan oldingisi uchun", "Hozirgi ish uchun", "Kelajak maqsadi uchun", "Doimiy takrorlangan ishga"],
    correctAnswer: "O'tmishdagi ikki ishdan oldingisi uchun"
  },
  {
    type: 'multiple-choice',
    question: "Kelajakda oldindan rejalashtirilgan ishlar uchun nima ishlatiladi?",
    options: ["Be going to", "Will", "Shall", "Would"],
    correctAnswer: "Be going to"
  },
  {
    type: 'multiple-choice',
    question: "Harakatning o'zi muhim bo'lmay, jarayon davom etayotganida qaysi guruh qo'llaniladi?",
    options: ["Continuous guruhlari", "Simple guruhlari", "Perfect guruhlari", "Hammasi bir xil"],
    correctAnswer: "Continuous guruhlari"
  },
  {
    type: 'multiple-choice',
    question: "State verbs (his-tuyg'u fe'llari) odatda Continuous zamonlarda ishlatiladimi?",
    options: ["Yo'q, ishlatilmaydi", "Ha, har doim", "Faqat o'tgan zamonda", "Faqat birinchi shaxsda"],
    correctAnswer: "Yo'q, ishlatilmaydi"
  },
  {
    type: 'multiple-choice',
    question: "Zamonlar moslashuvida bosh gap o'tgan zamonda bo'lsa, ergash gap qaysi guruhda bo'lishi kerak?",
    options: ["O'tgan zamon guruhida", "Hozirgi zamon guruhida", "Kelajak zamon guruhida", "Erkin bo'ladi"],
    correctAnswer: "O'tgan zamon guruhida"
  },
  {
    type: 'multiple-choice',
    question: "Perfect Continuous zamonlari nimanini bildiradi?",
    options: ["Boshlangan va hali davom etayotgan ishni", "Tugallangan natijani", "Kelajakdagi tasodifni", "O'tmishdagi qisqa ishni"],
    correctAnswer: "Boshlangan va hali davom etayotgan ishni"
  }
];

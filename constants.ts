
import type { QuizQuestion, Theme, ThemeName, VocabularyItem } from './types';

export const QUIZ_DURATION_SECONDS = 75 * 60; // 75 minutes (50 questions * 1.5 min)

export const QUIZ_VOCABULARY: VocabularyItem[] = [
  { term: "Possessive", definition: "Egalik shakli ('s)" },
  { term: "Articles", definition: "Artikllar (a, an, the)" },
  { term: "Pronouns", definition: "Olmoshlar (I, me, my...)" },
  { term: "Tenses", definition: "Zamonlar (Present, Past, Future)" },
  { term: "Modals", definition: "Modal fe'llar (can, must...)" },
  { term: "Numbers", definition: "Sonlar (one, first...)" }
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
  // --- Nouns & Possessives Theory (1-8) ---
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
    question: "Ko'plik shakli noto'g'ri yasalgan otni toping:",
    options: ["Childs", "Children", "Mice", "Leaves"],
    correctAnswer: "Childs"
  },
  {
    type: 'multiple-choice',
    question: "Sanalmaydigan otlarning ko'plik shakli qanday yasaladi?",
    options: ["Ular ko'plikda ishlatilmaydi", "-s qo'shish orqali", "-es qo'shish orqali", "O'zagi o'zgaradi"],
    correctAnswer: "Ular ko'plikda ishlatilmaydi"
  },
  {
    type: 'multiple-choice',
    question: "Murakkab otlarda (Compound Nouns) egalik shakli qayerga qo'shiladi?",
    options: ["Oxirgi so'zga", "Birinchi so'zga", "Har bir so'zga", "Hech biriga"],
    correctAnswer: "Oxirgi so'zga"
  },
  {
    type: 'multiple-choice',
    question: "Jonli mavjudotlar uchun egalik shakli asosan qanday yasaladi?",
    options: ["-'s yordamida", "of predlogi bilan", "the artikli bilan", "Hech qanday qo'shimchasiz"],
    correctAnswer: "-'s yordamida"
  },
  {
    type: 'multiple-choice',
    question: "Jonsiz narsalar uchun egalik shakli asosan qanday yasaladi?",
    options: ["of predlogi orqali", "-'s orqali", "-es orqali", "-ies orqali"],
    correctAnswer: "of predlogi orqali"
  },
  {
    type: 'multiple-choice',
    question: "Abstract (mavhum) otlar sanaladimi?",
    options: ["Odatda sanalmaydi", "Hamisha sanaladi", "Faqat ko'plikda", "-s bilan sanaladi"],
    correctAnswer: "Odatda sanalmaydi"
  },

  // --- Articles Theory (9-16) ---
  {
    type: 'multiple-choice',
    question: "Noaniq artikllar (a/an) qaysi turdagi otlar bilan ishlatiladi?",
    options: ["Birlikdagi sanaladigan otlar", "Ko'plikdagi otlar", "Sanalmaydigan otlar", "Xususiy otlar"],
    correctAnswer: "Birlikdagi sanaladigan otlar"
  },
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
    question: "Dunyo miqyosidagi yagona narsalar (Sun, Moon) oldidan qaysi artikl ishlatiladi?",
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
    question: "Geografik nomlar (okean, dengiz) oldidan qaysi artikl ishlatiladi?",
    options: ["The", "A", "An", "Artikl qo'yilmaydi"],
    correctAnswer: "The"
  },
  {
    type: 'multiple-choice',
    question: "Mamlakat nomlari tarkibida 'Republic' yoki 'Kingdom' bo'lsa, qaysi artikl qo'yiladi?",
    options: ["The", "A", "An", "Hech biri"],
    correctAnswer: "The"
  },

  // --- Pronouns Theory (17-24) ---
  {
    type: 'multiple-choice',
    question: "Egalik olmoshlari (Possessive Pronouns - mine, yours) dan keyin ot ishlatiladimi?",
    options: ["Yo'q, ishlatilmaydi", "Ha, hamisha", "Faqat birlikda", "Faqat 'mine' dan keyin"],
    correctAnswer: "Yo'q, ishlatilmaydi"
  },
  {
    type: 'multiple-choice',
    question: "Kishilik olmoshlari gapda asosan qanday vazifada keladi?",
    options: ["Ega yoki to'ldiruvchi", "Faqat aniqlovchi", "Faqat hol", "Sifatdosh"],
    correctAnswer: "Ega yoki to'ldiruvchi"
  },
  {
    type: 'multiple-choice',
    question: "O'zlik olmoshlari (Reflexive Pronouns) qachon ishlatiladi?",
    options: ["Ega va to'ldiruvchi bir shaxs bo'lsa", "Egalikni bildirish uchun", "Savol berish uchun", "Ko'rsatish uchun"],
    correctAnswer: "Ega va to'ldiruvchi bir shaxs bo'lsa"
  },
  {
    type: 'multiple-choice',
    question: "Ko'rsatish olmoshlari ichida uzoqdagi birlikka nisbatan nima ishlatiladi?",
    options: ["That", "This", "These", "Those"],
    correctAnswer: "That"
  },
  {
    type: 'multiple-choice',
    question: "Belgisiz olmoshlar (some, any) ning farqi nimada?",
    options: ["Some tasdiq, any so'roq/inkor", "Some inkor, any tasdiq", "Faqat artikllarda farq", "Farqi yo'q"],
    correctAnswer: "Some tasdiq, any so'roq/inkor"
  },
  {
    type: 'multiple-choice',
    question: "Egalik sifatlari (Possessive Adjectives - my, your) dan keyin ot ishlatiladimi?",
    options: ["Ha, hamisha ot keladi", "Yo'q, hech qachon", "Faqat kishilik ismlari", "Faqat birlikda"],
    correctAnswer: "Ha, hamisha ot keladi"
  },
  {
    type: 'multiple-choice',
    question: "Shaxsi noma'lum gaplarda qaysi olmosh 'one' o'rnida keng ishlatiladi?",
    options: ["You", "I", "He", "Me"],
    correctAnswer: "You"
  },
  {
    type: 'multiple-choice',
    question: "Sanaladigan otlar bilan miqdorni bildirish uchun nima ishlatiladi?",
    options: ["Many / Few", "Much / Little", "A lot / Bit", "Any / Much"],
    correctAnswer: "Many / Few"
  },

  // --- Numbers Theory (25-30) ---
  {
    type: 'multiple-choice',
    question: "Miqdor sonlar (Cardinal numbers) nimanini bildiradi?",
    options: ["Soni yoki miqdorini", "Tartib o'rnini", "Vaqtni", "O'lchovni"],
    correctAnswer: "Soni yoki miqdorini"
  },
  {
    type: 'multiple-choice',
    question: "Tartib sonlar (Ordinal numbers) qanday artikl bilan ishlatiladi?",
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
    question: "'Zero' so'zi o'rniga telefon raqamlarda nima deyilishi mumkin?",
    options: ["Oh", "Nil", "Naught", "Love"],
    correctAnswer: "Oh"
  },
  {
    type: 'multiple-choice',
    question: "Yuzliklarda (hundreds) 'hundred' so'ziga 's' qo'shiladimi (masalan 200)?",
    options: ["Yo'q, qo'shilmaydi", "Ha, qo'shiladi", "Faqat inkor gapda", "Faqat birinchi sonda"],
    correctAnswer: "Yo'q, qo'shilmaydi"
  },
  {
    type: 'multiple-choice',
    question: "O'nli kasrlar (decimals) da nuqta qanday o'qiladi?",
    options: ["Point", "Comma", "Dot", "Full stop"],
    correctAnswer: "Point"
  },

  // --- Tenses Theory (31-42) ---
  {
    type: 'multiple-choice',
    question: "Present Simple qachon ishlatiladi?",
    options: ["Doimiy/Odatiy ishlar uchun", "Ayni damda bo'layotgan", "Tugallangan ishlar", "Kelajak rejalari"],
    correctAnswer: "Doimiy/Odatiy ishlar uchun"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple dagi 3-shaxs birlik fe'liga nima qo'shiladi?",
    options: ["-s / -es", "-ing", "-ed", "-en"],
    correctAnswer: "-s / -es"
  },
  {
    type: 'multiple-choice',
    question: "Present Continuous ning asosiy formulasi qaysi?",
    options: ["am/is/are + V-ing", "do/does + V", "have/has + V3", "was/were + V"],
    correctAnswer: "am/is/are + V-ing"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple da noto'g'ri fe'llar (Irregular verbs) qaysi shakli ishlatiladi?",
    options: ["2-shakli (V2)", "1-shakli (V1)", "3-shakli (V3)", "Ing-shakli"],
    correctAnswer: "2-shakli (V2)"
  },
  {
    type: 'multiple-choice',
    question: "Present Perfect asosan nimaga urg'u beradi?",
    options: ["Ish-harakatning natijasiga", "Vaqtning aniqligiga", "Jarayon davomiyligiga", "Kelajak orzusiga"],
    correctAnswer: "Ish-harakatning natijasiga"
  },
  {
    type: 'multiple-choice',
    question: "Past Continuous qanday vaziyatni ifodalaydi?",
    options: ["O'tmishdagi jarayonni", "Hozirgi natijani", "O'tmishdagi odatni", "Kelajak niyatini"],
    correctAnswer: "O'tmishdagi jarayonni"
  },
  {
    type: 'multiple-choice',
    question: "Past Perfect qachon ishlatiladi?",
    options: ["O'tmishdagi ikki ishdan oldingisi uchun", "Hozirgi ish uchun", "Kelajak maqsadi uchun", "Doimiy takrorlangan ishga"],
    correctAnswer: "O'tmishdagi ikki ishdan oldingisi uchun"
  },
  {
    type: 'multiple-choice',
    question: "Kelajakda kutilmagan/shoshilinch qarorlar uchun nima ishlatiladi?",
    options: ["Will", "Going to", "Present Simple", "Past Simple"],
    correctAnswer: "Will"
  },
  {
    type: 'multiple-choice',
    question: "Oldindan rejalashtirilgan ishlar uchun kelajakda nima qo'llaniladi?",
    options: ["Be going to", "Will", "Shall", "Would"],
    correctAnswer: "Be going to"
  },
  {
    type: 'multiple-choice',
    question: "Zamonlar moslashuvida (Sequence of tenses) bosh gap o'tgan zamonda bo'lsa, ergash gap odatda qaysi guruhda bo'ladi?",
    options: ["O'tgan zamon guruhida", "Hozirgi zamon guruhida", "Kelajak zamon guruhida", "Farqi yo'q"],
    correctAnswer: "O'tgan zamon guruhida"
  },
  {
    type: 'multiple-choice',
    question: "Harakat davom etib biror natija bermayotgan bo'lsa, qaysi zamon ishlatiladi?",
    options: ["Continuous guruhlari", "Simple guruhlari", "Perfect guruhlari", "Hammasi bir xil"],
    correctAnswer: "Continuous guruhlari"
  },
  {
    type: 'multiple-choice',
    question: "State verbs (his-tuyg'u, fikrlash fe'llari) asosan qaysi zamonlarda ishlatilmaydi?",
    options: ["Continuous zamonlarda", "Simple zamonlarda", "Perfect zamonlarda", "Future zamonlarda"],
    correctAnswer: "Continuous zamonlarda"
  },

  // --- Modal Verbs Theory (43-50) ---
  {
    type: 'multiple-choice',
    question: "Modal fe'llardan keyin asosiy fe'l qanday shaklda keladi?",
    options: ["Bare Infinitive (to-siz)", "Full Infinitive (to-li)", "V-ing", "V-ed"],
    correctAnswer: "Bare Infinitive (to-siz)"
  },
  {
    type: 'multiple-choice',
    question: "Juda kuchli majburiyat (qoida/qonun) uchun qaysi fe'l ishlatiladi?",
    options: ["Must", "Should", "Can", "May"],
    correctAnswer: "Must"
  },
  {
    type: 'multiple-choice',
    question: "Maslahat berishda eng keng tarqalgan modal fe'l qaysi?",
    options: ["Should", "Must", "Will", "Could"],
    correctAnswer: "Should"
  },
  {
    type: 'multiple-choice',
    question: "Taqiqni (prohibition) bildirish uchun nima ishlatiladi?",
    options: ["Mustn't", "Don't have to", "Shouldn't", "Might not"],
    correctAnswer: "Mustn't"
  },
  {
    type: 'multiple-choice',
    question: "Oto'nalgan o'tgan zamon qobiliyati uchun nima qo'llaniladi?",
    options: ["Could", "Can", "Will", "Should"],
    correctAnswer: "Could"
  },
  {
    type: 'multiple-choice',
    question: "Ruxsat so'rashda eng rasmiy (formal) shakl qaysi?",
    options: ["May I", "Can I", "Will I", "Should I"],
    correctAnswer: "May I"
  },
  {
    type: 'multiple-choice',
    question: "Majburiyat yo'qligini (lack of necessity) bildirish uchun nima ishlatiladi?",
    options: ["Don't have to / Needn't", "Mustn't", "Can't", "Shouldn't"],
    correctAnswer: "Don't have to / Needn't"
  },
  {
    type: 'multiple-choice',
    question: "Ehtimollikni (Possibility) bildirishda 'may' va 'might' farqi nimada?",
    options: ["Might kuchsizroq ehtimol", "May o'tgan zamon", "Farqi faqat imloda", "Might rasmiyroq"],
    correctAnswer: "Might kuchsizroq ehtimol"
  }
];

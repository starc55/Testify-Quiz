
import type { QuizQuestion, Theme, ThemeName, VocabularyItem } from './types';

export const QUIZ_DURATION_SECONDS = 45 * 60; // 45 minutes (30 questions * 1.5 min)

export const QUIZ_VOCABULARY: VocabularyItem[] = [
  { term: "Possessives ('s & of)", definition: "'s va of egalik qoidalari" },
  { term: "Compound Nouns", definition: "Murakkab otlar nazariyasi" },
  { term: "Articles (a/an)", definition: "Noaniq artikl qoidalari" },
  { term: "Numerals", definition: "Sonlar va ularning turlari" },
  { term: "To Be Verb", definition: "To be fe'lining grammatik shakllari" },
  { term: "V1, V2, V3, V4", definition: "Fe'l shakllari nazariyasi" }
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
  // --- Category 1: 's va of (Nazariya - 5ta) ---
  {
    type: 'multiple-choice',
    question: "Insonlar va jonli mavjudotlarga egalik asosan qaysi qo'shimcha bilan ifodalanadi?",
    options: ["-'s orqali", "of predlogi orqali", "-es orqali", "-ies orqali"],
    correctAnswer: "-'s orqali"
  },
  {
    type: 'multiple-choice',
    question: "Jonsiz narsalarning qismi yoki bo'lagini ifodalash uchun asosan qaysi grammatik vositadan foydalaniladi?",
    options: ["of predlogidan", "-'s qo'shimchasidan", "faqat apostrofdan (')", "hech qanday vositasiz"],
    correctAnswer: "of predlogidan"
  },
  {
    type: 'multiple-choice',
    question: "Oxiri '-s' harfi bilan tugaydigan ko'plikdagi otlarga (masalan, students) egalik shakli qanday qo'shiladi?",
    options: ["Faqat apostrof (') belgisini qo'yish bilan", "-'s qo'shimchasini yozish bilan", "of predlogini qo'llash bilan", "hech qanday qo'shimcha o'zgarishsiz"],
    correctAnswer: "Faqat apostrof (') belgisini qo'yish bilan"
  },
  {
    type: 'multiple-choice',
    question: "Egalik bildiruvchi 'of' predlogli iboralarni 'Noun + of + Noun' formulasida birinchi ot odatda qaysi artikl bilan keladi?",
    options: ["the artikli bilan", "a/an artikllari bilan", "artiklsiz (zero article)", "some olmoshi bilan"],
    correctAnswer: "the artikli bilan"
  },
  {
    type: 'multiple-choice',
    question: "Agar narsa ikki yoki undan ortiq odamga birgalikda tegishli bo'lsa (birgalikdagi egalik), -'s qo'shimchasi kimga qo'shiladi?",
    options: ["Faqat oxirgi ismga", "Faqat birinchi ismga", "Har bir ismga alohida", "Hech biriga qo'shilmaydi"],
    correctAnswer: "Faqat oxirgi ismga"
  },

  // --- Category 2: Compound Nouns (Nazariya - 4ta) ---
  {
    type: 'multiple-choice',
    question: "Murakkab otlar (Compound Nouns) nima?",
    options: ["Ikki yoki undan ortiq so'zdan tashkil topgan bitta ot", "Faqat sifat va fe'ldan yasalgan ot", "Sanalmaydigan va mavhum otlar yig'indisi", "O'zbek tiliga tarjima qilinmaydigan so'zlar"],
    correctAnswer: "Ikki yoki undan ortiq so'zdan tashkil topgan bitta ot"
  },
  {
    type: 'multiple-choice',
    question: "Ko'p so'zli murakkab otlarni (Compound Nouns) ko'plikda yasashda -s/-es qo'shimchasi odatda qayerga qo'shiladi?",
    options: ["Asosiy (ma'no tashuvchi) so'zga", "Hamisha oxirgi so'zga", "Hamisha birinchi so'zga", "Har bir so'zga alohida"],
    correctAnswer: "Asosiy (ma'no tashuvchi) so'zga"
  },
  {
    type: 'multiple-choice',
    question: "Murakkab otlarda (masalan: mother-in-law) egalik shakli (-'s) qayerga qo'shiladi?",
    options: ["Eng oxirgi so'zga", "Birinchi bosh so'zga", "Har bir tarkibiy so'zga", "of predlogi bilan boshiga"],
    correctAnswer: "Eng oxirgi so'zga"
  },
  {
    type: 'multiple-choice',
    question: "Defis (-) orqali yoziladigan va miqdoriy sifat vazifasidagi murakkab otlarda (masalan: a ten-minute break) miqdor bildiruvchi otdan keyingi so'z qanday shaklda bo'ladi?",
    options: ["Birlik shaklida", "Ko'plik shaklida", "Egalik shaklida", "Sifatdosh shaklida"],
    correctAnswer: "Birlik shaklida"
  },

  // --- Category 3: Article a, an (Nazariya - 4ta) ---
  {
    type: 'multiple-choice',
    question: "Noaniq artikldagi 'a' va 'an' ning farqi nimada?",
    options: ["'a' undosh tovushdan, 'an' unli tovushdan oldin keladi", "'a' unli harfdan, 'an' undosh harfdan oldin keladi", "'a' shaxslarga, 'an' narsalarga nisbatan ishlatiladi", "'a' birlikda, 'an' ko'plikda ishlatiladi"],
    correctAnswer: "'a' undosh tovushdan, 'an' unli tovushdan oldin keladi"
  },
  {
    type: 'multiple-choice',
    question: "Noaniq artikllar qaysi turdagi otlar bilan qo'llaniladi?",
    options: ["Sanaladigan birlikdagi otlar bilan", "Ko'plikdagi barcha otlar bilan", "Sanalmaydigan mavhum otlar bilan", "Xususiy va atoqli otlar bilan"],
    correctAnswer: "Sanaladigan birlikdagi otlar bilan"
  },
  {
    type: 'multiple-choice',
    question: "'Hour' (soat) yoki 'honest' (halol) kabi h-harfi o'qilmaydigan so'zlar oldidan qaysi noaniq artikl qo'yiladi?",
    options: ["an artikli", "a artikli", "the artikli", "hech qanday artikl qo'yilmaydi"],
    correctAnswer: "an artikli"
  },
  {
    type: 'multiple-choice',
    question: "Unli harf bilan boshlanib, ammo undosh tovush beradigan so'zlar (masalan: unit, university /jʊː/) oldidan qaysi artikl qo'yiladi?",
    options: ["a artikli", "an artikli", "the artikli", "artikl ishlatilmaydi"],
    correctAnswer: "a artikli"
  },

  // --- Category 4: Numeral (Nazariya - 4ta) ---
  {
    type: 'multiple-choice',
    question: "Miqdor sonlar (Cardinal Numerals) va Tartib sonlar (Ordinal Numerals) farqi nimada?",
    options: ["Miqdor son narsaning sonini, tartib son uning ketma-ketlikdagi o'rnini bildiradi", "Miqdor son faqat hisobda, tartib son faqat vaqtda qo'llaniladi", "Miqdor sonlar oldiga har doim 'the' qo'shiladi", "Ular butunlay bir xil ma'noga ega"],
    correctAnswer: "Miqdor son narsaning sonini, tartib son uning ketma-ketlikdagi o'rnini bildiradi"
  },
  {
    type: 'multiple-choice',
    question: "Tartib sonlar yozuvda (-th) qo'shimchasidan tashqari qaysi o'ziga xos shakllarga ega?",
    options: ["-st, -nd, -rd (1st, 2nd, 3rd kabi)", "-lt, -mt, -nt", "-ed, -ing, -ly", "-s, -es, -ies"],
    correctAnswer: "-st, -nd, -rd (1st, 2nd, 3rd kabi)"
  },
  {
    type: 'multiple-choice',
    question: "Yuzlik (hundred), minglik (thousand) va millionlik sonlar miqdor sifatlari sifatida aniq sonlardan keyin kelganda -s ko'plik qo'shimchasini oladimi?",
    options: ["Yo'q, olmaydi (masalan: three hundred)", "Ha, har doim oladi", "Faqat so'roq gaplarda oladi", "Faqat birinchi shaxsdan keyin oladi"],
    correctAnswer: "Yo'q, olmaydi (masalan: three hundred)"
  },
  {
    type: 'multiple-choice',
    question: "O'nli kasrlar (decimals) ingliz tilida o'qilganda nuqta (.) belgisi qanday ataladi?",
    options: ["point", "comma", "dot", "period"],
    correctAnswer: "point"
  },

  // --- Category 5: To Be (Nazariya - 4ta) ---
  {
    type: 'multiple-choice',
    question: "To be fe'lining hozirgi, o'tgan va kelajak zamondagi asosiy shakllari qaysilar?",
    options: ["am/is/are, was/were, will be", "do/does, did, will do", "have/has, had, will have", "be, been, being"],
    correctAnswer: "am/is/are, was/were, will be"
  },
  {
    type: 'multiple-choice',
    question: "Kishilik olmoshlaridan 'I' bilan hozirgi zamonda To be ning qaysi shakli birga ishlatiladi?",
    options: ["am", "is", "are", "be"],
    correctAnswer: "am"
  },
  {
    type: 'multiple-choice',
    question: "O'tgan zamonda (Past Simple) To be fe'lining 'was' shakli qaysi shaxslar uchun ishlatiladi?",
    options: ["I, He, She, It uchun", "We, You, They uchun", "Faqat uchinchi shaxs ko'plik uchun", "Faqat birinchi shaxs ko'plik uchun"],
    correctAnswer: "I, He, She, It uchun"
  },
  {
    type: 'multiple-choice',
    question: "Ingliz tilida To be fe'lining asosiy grammatik vazifasi nima?",
    options: ["Ot va sifatlarni bog'lovchi bo'g'in yoki ko'makchi fe'l bo'lish", "Faqat kelajak zamonda harakatni ifodalash", "Faqat jismoniy harakat va egallashni ko'rsatish", "Sifatlardan ravishlar yasash"],
    correctAnswer: "Ot va sifatlarni bog'lovchi bo'g'in yoki ko'makchi fe'l bo'lish"
  },

  // --- Category 6: V1 V2 V3 V4 (Nazariya - 4ta) ---
  {
    type: 'multiple-choice',
    question: "Fe'lning to'rtta asosiy shakllari (V1, V2, V3, V4) deganda mos ravishda nimalar tushuniladi?",
    options: ["Infinitive, Past Simple, Past Participle, Present Participle (-ing)", "Noun, Pronoun, Adjective, Adverb", "Present, Past, Future, Perfect", "Active, Passive, Modal, Auxiliary"],
    correctAnswer: "Infinitive, Past Simple, Past Participle, Present Participle (-ing)"
  },
  {
    type: 'multiple-choice',
    question: "To'g'ri fe'llarning (Regular verbs) V2 (Past Simple) va V3 (Past Participle) shakllari qanday yasaladi?",
    options: ["Fe'l oxiriga -ed/d qo'shish orqali", "Fe'l oxiriga -ing qo'shish bilan", "O'zakdagi unlilarni o'zgartirish orqali", "Mutlaqo o'zgarmasdan qoladi"],
    correctAnswer: "Fe'l oxiriga -ed/d qo'shish orqali"
  },
  {
    type: 'multiple-choice',
    question: "Noto'g'ri fe'llarning (Irregular verbs) V2 va V3 shakllarini aniqlashning asosiy usuli qaysi?",
    options: ["Maxsus jadval bo'yicha yodlash kerak", "Har doim -ing qo'shimchasini qo'shish", "Faqat tobe ko'rinishida yozish", "Har doim oxiriga -s qo'shish"],
    correctAnswer: "Maxsus jadval bo'yicha yodlash kerak"
  },
  {
    type: 'multiple-choice',
    question: "Fe'lning V4 shakli (Present Participle yoki Gerund) qaysi qo'shimchnai olish bilan shakllanadi?",
    options: ["-ing qo'shimchasini", "-ed qo'shimchasini", "-ly qo'shimchasini", "-s qo'shimchasini"],
    correctAnswer: "-ing qo'shimchasini"
  },

  // --- Category 7: Gapli / Sentence Completion (Gapli - 5ta) ---
  {
    type: 'multiple-choice',
    question: "\"The leg ___ the chair is broken.\" gapidagi bo'sh joyga qaysi shakl mos keladi?",
    options: ["of", "'s", "s'", "- (hech narsa)"],
    correctAnswer: "of"
  },
  {
    type: 'multiple-choice',
    question: "\"They went on a two-___ holiday to Egypt.\" gapida qaysi so'z to'g'ri qo'llanilgan?",
    options: ["week", "weeks", "week's", "weeks'"],
    correctAnswer: "week"
  },
  {
    type: 'multiple-choice',
    question: "\"It was ___ unusual event but ___ great experience.\" gapidagi bo'shliqlarga qaysi artikllar mos keladi?",
    options: ["an / a", "a / an", "the / the", "a / a"],
    correctAnswer: "an / a"
  },
  {
    type: 'multiple-choice',
    question: "\"Yesterday at 5 PM, neither my brother nor my parents ___ at home.\" gapida bo'sh joyga qaysi To be shakli qo'yiladi?",
    options: ["were", "was", "are", "been"],
    correctAnswer: "were"
  },
  {
    type: 'multiple-choice',
    question: "\"She has ___ all her exams successfully this semester.\" gapida bo'sh joyga 'pass' (imtihondan o'tish) fe'lining mos shaklini qo'ying:",
    options: ["passed", "pass", "passing", "passes"],
    correctAnswer: "passed"
  }
];

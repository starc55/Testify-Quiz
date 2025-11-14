import type { QuizQuestion, Theme, ThemeName, VocabularyItem } from './types';

export const QUIZ_DURATION_SECONDS = 25 * 60; // 1500 seconds (25 minutes)

export const QUIZ_VOCABULARY: VocabularyItem[] = [
  {
    term: "Book",
    definition: "Kitob. Misol: 'He is reading a book.' (U kitob o'qiyapti)."
  },
  {
    term: "Teacher",
    definition: "O'qituvchi. Misol: 'My mother is a teacher.' (Mening onam o'qituvchi)."
  },
  {
    term: "School",
    definition: "Maktab. Misol: 'I go to school.' (Men maktabga boraman)."
  },
  {
    term: "Child / Children",
    definition: "Bola / Bolalar. 'Child' so'zi noto'g'ri ko'plik shakliga ega ('children' bo'ladi)."
  },
  {
    term: "Reading",
    definition: "O'qish (jarayon). 'Read' (o'qimoq) fe'lining davomli zamon shakli."
  },
  {
    term: "Go",
    definition: "Bormoq. Misol: 'I go to school every day.' (Men har kuni maktabga boraman)."
  },
  {
    term: "Play",
    definition: "O'ynamoq. Misol: 'They are playing football.' (Ular futbol o'ynashyapti)."
  },
  {
    term: "Work",
    definition: "Ishlamoq. Misol: 'She is working now.' (U hozir ishlayapti)."
  },
  {
    term: "Now / Right now",
    definition: "Hozir / Ayni hozir. Ko'pincha Present Continuous zamoni bilan ishlatiladigan signal so'z."
  },
  {
    term: "Every day",
    definition: "Har kuni. Ko'pincha Present Simple zamoni bilan ishlatiladigan signal so'z."
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
  // Rule-based Multiple Choice (25 questions)
  {
    type: 'multiple-choice',
    question: "'a' artikli qaysi turdagi otlar oldidan ishlatiladi?",
    options: ["Unli tovush bilan boshlanadigan sanaladigan otlar oldidan", "Undosh tovush bilan boshlanadigan sanaladigan otlar oldidan", "Ko'plikdagi barcha otlar oldidan", "Sanalmaydigan otlar oldidan"],
    correctAnswer: "Undosh tovush bilan boshlanadigan sanaladigan otlar oldidan"
  },
  {
    type: 'multiple-choice',
    question: "'an' artikli qaysi turdagi otlar oldidan ishlatiladi?",
    options: ["Faqat ko'plikdagi otlar bilan", "Undosh tovush bilan boshlanadigan sanaladigan otlar oldidan", "Unli tovush bilan boshlanadigan sanaladigan otlar oldidan", "Barcha otlar bilan"],
    correctAnswer: "Unli tovush bilan boshlanadigan sanaladigan otlar oldidan"
  },
  {
    type: 'multiple-choice',
    question: "'I' olmoshi uchun 'to be' fe'lining to'g'ri shakli qaysi?",
    options: ["is", "are", "be", "am"],
    correctAnswer: "am"
  },
  {
    type: 'multiple-choice',
    question: "'He', 'She', 'It' olmoshlari uchun 'to be' fe'lining to'g'ri shakli qaysi?",
    options: ["am", "is", "are", "be"],
    correctAnswer: "is"
  },
  {
    type: 'multiple-choice',
    question: "'We', 'You', 'They' olmoshlari uchun 'to be' fe'lining to'g'ri shakli qaysi?",
    options: ["am", "is", "are", "be"],
    correctAnswer: "are"
  },
  {
    type: 'multiple-choice',
    question: "Ko'plikdagi otlar mavjudligini aytish uchun qaysi konstruksiya ishlatiladi?",
    options: ["There is", "There are", "It is", "He is"],
    correctAnswer: "There are"
  },
  {
    type: 'multiple-choice',
    question: "Birlikdagi ot mavjudligini aytish uchun qaysi konstruksiya ishlatiladi?",
    options: ["There is", "There are", "They are", "It are"],
    correctAnswer: "There is"
  },
  {
    type: 'multiple-choice',
    question: "Aksariyat otlarning ko'plik shakli qanday yasaladi?",
    options: ["Oxiriga -ing qo'shish orqali", "Oxiriga -es qo'shish orqali", "Oxiriga -s qo'shimchasini qo'shish orqali", "O'zagi o'zgaradi"],
    correctAnswer: "Oxiriga -s qo'shimchasini qo'shish orqali"
  },
  {
    type: 'multiple-choice',
    question: "Qaysi so'z 'child' (bola) so'zining ko'plik shakli hisoblanadi?",
    options: ["childs", "childrens", "childes", "children"],
    correctAnswer: "children"
  },
  {
    type: 'multiple-choice',
    question: "'Uning' (qiz bolaga nisbatan) degan ma'noni qaysi so'z bildiradi?",
    options: ["his", "her", "him", "she"],
    correctAnswer: "her"
  },
  {
    type: 'multiple-choice',
    question: "'Bizning' degan ma'noni qaysi egalik olmoshi bildiradi?",
    options: ["we", "us", "our", "ours"],
    correctAnswer: "our"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple zamoni qanday holatlarni ifodalash uchun ishlatiladi?",
    options: ["Ayni damda bo'layotgan ish-harakatlarni", "O'tgan zamondagi voqealarni", "Doimiy, takrorlanuvchi odatlarni", "Kelajakdagi rejalarni"],
    correctAnswer: "Doimiy, takrorlanuvchi odatlarni"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple zamonida 'He', 'She', 'It' bilan fe'lga qanday qo'shimcha qo'shiladi?",
    options: ["-ing", "-ed", "-s yoki -es", "hech qanday qo'shimcha qo'shilmaydi"],
    correctAnswer: "-s yoki -es"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple zamonida 'I', 'You', 'We', 'They' uchun inkor shakl qanday yasaladi?",
    options: ["doesn't + fe'l", "don't + fe'l", "isn't + fe'l", "am not + fe'l"],
    correctAnswer: "don't + fe'l"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple zamonida 'He' olmoshi bilan so'roq gap qanday yasaladi?",
    options: ["Do he...?", "Is he...?", "Does he...?", "Are he...?"],
    correctAnswer: "Does he...?"
  },
  {
    type: 'multiple-choice',
    question: "Present Continuous zamoni qanday holatlarni ifodalash uchun ishlatiladi?",
    options: ["Tugallangan ish-harakatlarni", "Doimiy odatlarni", "Ayni nutq paytida sodir bo'layotgan harakatlarni", "O'tmishdagi voqealarni"],
    correctAnswer: "Ayni nutq paytida sodir bo'layotgan harakatlarni"
  },
  {
    type: 'multiple-choice',
    question: "Present Continuous zamonining to'g'ri formulasi qaysi?",
    options: ["Subject + fe'l", "Subject + to be + Ving", "Subject + fe'l + ed", "Subject + will + fe'l"],
    correctAnswer: "Subject + to be + Ving"
  },
  {
    type: 'multiple-choice',
    question: "'Now', 'at the moment', 'Listen!' kabi signal so'zlar qaysi zamonga ishora qiladi?",
    options: ["Present Simple", "Past Simple", "Future Simple", "Present Continuous"],
    correctAnswer: "Present Continuous"
  },
  {
    type: 'multiple-choice',
    question: "'They are playing' gapining so'roq shakli qanday?",
    options: ["Do they playing?", "Does they play?", "Are they playing?", "Is they playing?"],
    correctAnswer: "Are they playing?"
  },
  {
    type: 'multiple-choice',
    question: "'She is working' gapining inkor shakli qanday?",
    options: ["She don't working", "She isn't working", "She doesn't working", "She not is working"],
    correctAnswer: "She isn't working"
  },
  {
    type: 'multiple-choice',
    question: "Qobiliyatni ifodalash uchun qaysi modal fe'l ishlatiladi?",
    options: ["may", "must", "can", "should"],
    correctAnswer: "can"
  },
  {
    type: 'multiple-choice',
    question: "So'roq va inkor gaplarda miqdorni ifodalash uchun odatda qaysi so'z ishlatiladi?",
    options: ["some", "any", "no", "a lot of"],
    correctAnswer: "any"
  },
  {
    type: 'multiple-choice',
    question: "'Menga' degan ma'noni bildiruvchi obyekt olmoshini toping.",
    options: ["I", "my", "mine", "me"],
    correctAnswer: "me"
  },
  {
    type: 'multiple-choice',
    question: "Biror narsaning 'ustida' ekanligini bildirish uchun qaysi predlog ishlatiladi?",
    options: ["in", "at", "on", "under"],
    correctAnswer: "on"
  },
  {
    type: 'multiple-choice',
    question: "'hour' so'zi oldidan qaysi artikl ishlatiladi? (Talaffuziga e'tibor bering)",
    options: ["a", "an", "the", "artikl kerak emas"],
    correctAnswer: "an"
  },

  // Fill in the Blank (5 questions)
  {
    type: 'fill-in-the-blank',
    question: "Gapni to'ldiring: 'He is ___ a book right now.'",
    correctAnswer: "reading"
  },
  {
    type: 'fill-in-the-blank',
    question: "Gapni to'ldiring: 'My mother ___ a teacher.'",
    correctAnswer: "is"
  },
  {
    type: 'fill-in-the-blank',
    question: "Gapni to'ldiring: 'I ___ to school every day.'",
    correctAnswer: "go"
  },
  {
    type: 'fill-in-the-blank',
    question: "Sonning ko'plik shaklini yozing: 'one child, two ___.'",
    correctAnswer: "children"
  },
  {
    type: 'fill-in-the-blank',
    question: "Gapni to'ldiring: 'They ___ from Uzbekistan.'",
    correctAnswer: "are"
  }
];

import type { QuizQuestion } from './types';

export const QUIZ_DURATION_SECONDS = 30 * 30; // 900 seconds (30s per question)

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // A1: Beginner (6 questions)
  {
    type: 'multiple-choice',
    question: "'book' so'zining oldidan noaniq artiklning qaysi shakli ishlatiladi?",
    options: ["a", "an", "the", "artikl ishlatilmaydi"],
    correctAnswer: "a"
  },
  {
    type: 'multiple-choice',
    question: "'apple' so'zining oldidan noaniq artiklning qaysi shakli ishlatiladi?",
    options: ["a", "an", "the", "artikl ishlatilmaydi"],
    correctAnswer: "an"
  },
  {
    type: 'multiple-choice',
    question: "'child' so'zining ko'plik shakli qanday bo'ladi?",
    options: ["childs", "childrens", "childes", "children"],
    correctAnswer: "children"
  },
  {
    type: 'fill-in-the-blank',
    question: "'Men o'quvchiman' gapini to'g'ri tarjima qiling: I ___ a pupil.",
    correctAnswer: "am"
  },
  {
    type: 'fill-in-the-blank',
    question: "'U (o'g'il bola) shifokor.' gapini to'ldiring: He ___ a doctor.",
    correctAnswer: "is"
  },
  {
    type: 'fill-in-the-blank',
    question: "There ___ two cats in the room.",
    correctAnswer: "are"
  },
  // A2: Elementary (8 questions)
  {
    type: 'fill-in-the-blank',
    question: "'She ___ to school every morning.' (go)",
    correctAnswer: "goes"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple zamonining so'roq shakli qaysi yordamchi fe'llar orqali yasaladi?",
    options: ["am/is/are", "do/does", "have/has", "will/shall"],
    correctAnswer: "do/does"
  },
  {
    type: 'fill-in-the-blank',
    question: "We ___ live in a big city. (inkor shakli)",
    correctAnswer: ["don't", "do not"]
  },
  {
    type: 'multiple-choice',
    question: "'Hozir yomg'ir yog'yapti.' gapining to'g'ri tarjimasini toping.",
    options: ["It rains now.", "It is raining now.", "It was raining now.", "It will rain now."],
    correctAnswer: "It is raining now."
  },
  {
    type: 'fill-in-the-blank',
    question: "I can't talk now. I ___ my homework. (do)",
    correctAnswer: ["'m doing", "am doing"]
  },
  {
    type: 'multiple-choice',
    question: "'go' fe'lining o'tgan zamon (Past Simple) shakli qanday?",
    options: ["goed", "gone", "went", "going"],
    correctAnswer: "went"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple zamonining inkor shakli qanday yasaladi?",
    options: ["don't + V1", "doesn't + V1", "didn't + V1", "haven't + V3"],
    correctAnswer: "didn't + V1"
  },
  {
    type: 'fill-in-the-blank',
    question: "What ___ you do yesterday?",
    correctAnswer: "did"
  },
  // B1: Intermediate (16 questions)
  {
    type: 'multiple-choice',
    question: "Present Perfect zamonining yasalish formulasi qanday?",
    options: ["Subject + V2", "Subject + to be + Ving", "Subject + have/has + V3", "Subject + V1"],
    correctAnswer: "Subject + have/has + V3"
  },
  {
    type: 'multiple-choice',
    question: "'Men bu filmni allaqachon ko'rganman.' gapining to'g'ri tarjimasini toping.",
    options: ["I saw this film already.", "I already see this film.", "I have already seen this film.", "I am seeing this film already."],
    correctAnswer: "I have already seen this film."
  },
  {
    type: 'fill-in-the-blank',
    question: "I haven't finished my work ___.",
    correctAnswer: "yet"
  },
  {
    type: 'multiple-choice',
    question: "Present Perfect Continuous asosan nimaga urg'u beradi?",
    options: ["Harakatning natijasiga", "Harakatning davomiyligiga", "Bir martalik harakatga", "Kelajakdagi harakatga"],
    correctAnswer: "Harakatning davomiyligiga"
  },
  {
    type: 'fill-in-the-blank',
    question: "'I have been ___ for two hours.' nuqtalar o'rniga to'g'ri fe'lni qo'ying (wait).",
    correctAnswer: "waiting"
  },
  {
    type: 'multiple-choice',
    question: "Qaysi modal fe'l 'maslahat' berish uchun ishlatiladi?",
    options: ["must", "can", "should", "may"],
    correctAnswer: "should"
  },
  {
    type: 'fill-in-the-blank',
    question: "You ___ touch that, it's dangerous! (kuchli taqiq)",
    correctAnswer: "mustn't"
  },
  {
    type: 'multiple-choice',
    question: "Aniq rejalar uchun kelasi zamonning qaysi shakli ishlatiladi?",
    options: ["will + V1", "Present Simple", "to be going to", "Past Simple"],
    correctAnswer: "to be going to"
  },
  {
    type: 'fill-in-the-blank',
    question: "Look at those black clouds. It's ___ rain.",
    correctAnswer: "going to"
  },
  {
    type: 'multiple-choice',
    question: "Gaplashayotgan paytda qabul qilingan qarorlar uchun qaysi kelasi zamon ishlatiladi?",
    options: ["will + V1", "Present Continuous", "to be going to", "Future Continuous"],
    correctAnswer: "will + V1"
  },
  {
    type: 'fill-in-the-blank',
    question: "A: The phone is ringing. B: OK, I ___ answer it.",
    correctAnswer: "will"
  },
  {
    type: 'multiple-choice',
    question: "Future Continuous zamonining formulasi qanday?",
    options: ["will + have + V3", "will + be + Ving", "will + V1", "am/is/are + Ving"],
    correctAnswer: "will + be + Ving"
  },
  {
    type: 'fill-in-the-blank',
    question: "This time tomorrow, we ___ on the beach. (sit)",
    correctAnswer: "will be sitting"
  },
  {
    type: 'multiple-choice',
    question: "Qaysi gap Future Continuous zamonida?",
    options: ["I will call you tomorrow.", "I am meeting him tomorrow.", "I will be studying when you arrive.", "I have finished my work."],
    correctAnswer: "I will be studying when you arrive."
  },
  {
    type: 'fill-in-the-blank',
    question: "Don't phone me between 7 and 8. We ___ dinner then. (have)",
    correctAnswer: "will be having"
  },
  {
    type: 'fill-in-the-blank',
    question: "Jadvalga binoan kelajakda sodir bo'ladigan ish harakatlar uchun qaysi zamon ishlatiladi? The train ___ at 10:30.",
    correctAnswer: "leaves"
  },
];

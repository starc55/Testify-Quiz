import type { QuizQuestion } from './types';

export const QUIZ_DURATION_SECONDS = 40 * 60; // 2400 seconds (60s per question)

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // A1: Beginner
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
    type: 'multiple-choice',
    question: "'mouse' (sichqon) so'zining ko'plik shakli qanday?",
    options: ["mouses", "mices", "mice", "mousees"],
    correctAnswer: "mice"
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
    question: "'Ular (ko'plikda) ___ do'stlar.' gapini to'ldiring: They ___ friends.",
    correctAnswer: "are"
  },
  {
    type: 'multiple-choice',
    question: "'Bu Anoraning kitobi.' gapining to'g'ri tarjimasini toping.",
    options: ["This is book of Anora.", "This is Anora's book.", "This is Anora book.", "This are Anora's book."],
    correctAnswer: "This is Anora's book."
  },
  {
    type: 'fill-in-the-blank',
    question: "There ___ two cats in the room.",
    correctAnswer: "are"
  },
  {
    type: 'multiple-choice',
    question: "'Stol ustida' predlogi qanday aytiladi?",
    options: ["in the table", "at the table", "on the table", "under the table"],
    correctAnswer: "on the table"
  },
  {
    type: 'fill-in-the-blank',
    question: "'Soat 7 da' predlogi qanday aytiladi: ___ 7 o'clock",
    correctAnswer: "at"
  },
  // A2: Elementary - Present Simple
  {
    type: 'multiple-choice',
    question: "Present Simple zamonida III shaxs birlikda (he, she, it) fe'lga qanday qo'shimcha qo'shiladi?",
    options: ["-ing", "-ed", "-s/-es", "hech qanday"],
    correctAnswer: "-s/-es"
  },
  {
    type: 'fill-in-the-blank',
    question: "'I ___ football every day.' nuqtalar o'rniga to'g'ri fe'lni qo'ying.",
    correctAnswer: "play"
  },
  {
    type: 'fill-in-the-blank',
    question: "'She ___ to school every morning.' nuqtalar o'rniga to'g'ri fe'lni qo'ying.",
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
    question: "'___ you speak English?' nuqtalar o'rniga to'g'ri so'zni qo'ying.",
    correctAnswer: "Do"
  },
  {
    type: 'fill-in-the-blank',
    question: "'___ she like ice cream?' nuqtalar o'rniga to'g'ri so'zni qo'ying.",
    correctAnswer: "Does"
  },
  {
    type: 'fill-in-the-blank',
    question: "We ___ live in a big city. (inkor shakli)",
    correctAnswer: ["don't", "do not"]
  },
  // A2: Elementary - Present Continuous
  {
    type: 'multiple-choice',
    question: "Present Continuous zamonining yasalish formulasi qanday?",
    options: ["Subject + V1", "Subject + to be + Ving", "Subject + V2", "Subject + have/has + V3"],
    correctAnswer: "Subject + to be + Ving"
  },
  {
    type: 'multiple-choice',
    question: "'Hozir yomg'ir yog'yapti.' gapining to'g'ri tarjimasini toping.",
    options: ["It rains now.", "It is raining now.", "It was raining now.", "It will rain now."],
    correctAnswer: "It is raining now."
  },
  {
    type: 'fill-in-the-blank',
    question: "'Listen! Someone ___.' nuqtalar o'rniga to'g'ri fe'lni qo'ying (sing).",
    correctAnswer: "is singing"
  },
  {
    type: 'fill-in-the-blank',
    question: "I can't talk now. I ___ my homework.",
    correctAnswer: ["'m doing", "am doing"]
  },
  // A2/B1: Pre-Intermediate - Past Simple
  {
    type: 'multiple-choice',
    question: "'go' fe'lining o'tgan zamon (Past Simple) shakli qanday?",
    options: ["goed", "gone", "went", "going"],
    correctAnswer: "went"
  },
  {
    type: 'multiple-choice',
    question: "'write' fe'lining o'tgan zamon shakli qanday?",
    options: ["writed", "wrote", "written", "writing"],
    correctAnswer: "wrote"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple zamonining inkor shakli qanday yasaladi?",
    options: ["don't + V1", "doesn't + V1", "didn't + V1", "haven't + V3"],
    correctAnswer: "didn't + V1"
  },
  {
    type: 'multiple-choice',
    question: "'Kecha men kinoga bordim.' gapining to'g'ri tarjimasini toping.",
    options: ["I go to the cinema yesterday.", "I have gone to the cinema yesterday.", "I am going to the cinema yesterday.", "I went to the cinema yesterday."],
    correctAnswer: "I went to the cinema yesterday."
  },
  {
    type: 'fill-in-the-blank',
    question: "What ___ you do yesterday?",
    correctAnswer: "did"
  },
  {
    type: 'fill-in-the-blank',
    question: "'She ___ her homework an hour ago.' nuqtalar o'rniga to'g'ri fe'lni qo'ying.",
    correctAnswer: "did"
  },
  // B1: Intermediate - Present Perfect
  {
    type: 'multiple-choice',
    question: "Present Perfect zamonining yasalish formulasi qanday?",
    options: ["Subject + V2", "Subject + to be + Ving", "Subject + have/has + V3", "Subject + V1"],
    correctAnswer: "Subject + have/has + V3"
  },
  {
    type: 'multiple-choice',
    question: "'see' fe'lining 3-shakli (Past Participle) qanday?",
    options: ["saw", "seen", "seeing", "sees"],
    correctAnswer: "seen"
  },
  {
    type: 'multiple-choice',
    question: "Qaysi signal so'zlar odatda Present Perfect bilan ishlatiladi?",
    options: ["yesterday, last week", "now, at the moment", "always, often", "just, already, yet, ever"],
    correctAnswer: "just, already, yet, ever"
  },
  {
    type: 'multiple-choice',
    question: "'Men bu filmni allaqachon ko'rganman.' gapining to'g'ri tarjimasini toping.",
    options: ["I saw this film already.", "I already see this film.", "I have already seen this film.", "I am seeing this film already."],
    correctAnswer: "I have already seen this film."
  },
  {
    type: 'fill-in-the-blank',
    question: "'He has just ___.' nuqtalar o'rniga to'g'ri fe'lni qo'ying (arrive).",
    correctAnswer: "arrived"
  },
  {
    type: 'fill-in-the-blank',
    question: "I haven't finished my work ___.",
    correctAnswer: "yet"
  },
  {
    type: 'fill-in-the-blank',
    question: "She has lived in London ___ ten years.",
    correctAnswer: "for"
  },
  // B1: Intermediate - Present Perfect Continuous
  {
    type: 'multiple-choice',
    question: "Present Perfect Continuous zamonining yasalish formulasi qanday?",
    options: ["Subject + have/has + V3", "Subject + was/were + Ving", "Subject + have/has been + Ving", "Subject + Ving"],
    correctAnswer: "Subject + have/has been + Ving"
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
    type: 'fill-in-the-blank',
    question: "'She ___ crying since morning.' nuqtalar o'rniga to'g'ri yordamchi fe'llarni qo'ying.",
    correctAnswer: "has been"
  },
];

import type { QuizQuestion } from './types';

// 30 questions * 30 seconds per question = 900 seconds
export const QUIZ_DURATION_SECONDS = 900; 

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "'book' so'zining oldidan noaniq artiklning qaysi shakli ishlatiladi?",
    options: ["a", "an", "the", "artikl ishlatilmaydi"],
    correctAnswer: "a"
  },
  {
    question: "'apple' so'zining oldidan noaniq artiklning qaysi shakli ishlatiladi?",
    options: ["a", "an", "the", "artikl ishlatilmaydi"],
    correctAnswer: "an"
  },
  {
    question: "'child' so'zining ko'plik shakli qanday bo'ladi?",
    options: ["childs", "childrens", "childes", "children"],
    correctAnswer: "children"
  },
  {
    question: "'Men o'quvchiman' gapining to'g'ri tarjimasini toping.",
    options: ["I is a pupil", "I are a pupil", "I am a pupil", "I pupil"],
    correctAnswer: "I am a pupil"
  },
  {
    question: "Present Simple zamonida III shaxs birlikda (he, she, it) fe'lga qanday qo'shimcha qo'shiladi?",
    options: ["-ing", "-ed", "-s/-es", "hech qanday"],
    correctAnswer: "-s/-es"
  },
  {
    question: "Present Simple zamonining so'roq shakli qaysi yordamchi fe'llar orqali yasaladi?",
    options: ["am/is/are", "do/does", "have/has", "will/shall"],
    correctAnswer: "do/does"
  },
  {
    question: "'I ___ football every day.' nuqtalar o'rniga to'g'ri fe'lni qo'ying.",
    options: ["plays", "play", "am playing", "playing"],
    correctAnswer: "play"
  },
  {
    question: "'Hozir yomg'ir yog'yapti.' gapining to'g'ri tarjimasini toping.",
    options: ["It rains now.", "It is raining now.", "It was raining now.", "It will rain now."],
    correctAnswer: "It is raining now."
  },
  {
    question: "Present Continuous zamonining yasalish formulasi qanday?",
    options: ["Subject + V1", "Subject + to be + ing", "Subject + V2", "Subject + have/has + V3"],
    correctAnswer: "Subject + to be + Ving"
  },
  {
    question: "'Listen! Someone ___.' nuqtalar o'rniga to'g'ri fe'lni qo'ying.",
    options: ["sings", "is singing", "sang", "has sung"],
    correctAnswer: "is singing"
  },
  {
    question: "'go' fe'lining o'tgan zamon (Past Simple) shakli qanday?",
    options: ["goed", "gone", "went", "going"],
    correctAnswer: "went"
  },
  {
    question: "'Kecha men kinoga bordim.' gapining to'g'ri tarjimasini toping.",
    options: ["I go to the cinema yesterday.", "I have gone to the cinema yesterday.", "I am going to the cinema yesterday.", "I went to the cinema yesterday."],
    correctAnswer: "I went to the cinema yesterday."
  },
  {
    question: "Past Simple zamonining inkor shakli qanday yasaladi?",
    options: ["don't + V1", "doesn't + V1", "didn't + V1", "haven't + V3"],
    correctAnswer: "didn't + V1"
  },
  {
    question: "'She ___ her homework an hour ago.' nuqtalar o'rniga to'g'ri fe'lni qo'ying.",
    options: ["does", "did", "is doing", "has done"],
    correctAnswer: "did"
  },
  {
    question: "Present Perfect zamonining yasalish formulasi qanday?",
    options: ["Subject + V2", "Subject + to be + ing", "Subject + have/has + V3", "Subject + V1"],
    correctAnswer: "Subject + have/has + V3"
  },
  {
    question: "'see' fe'lining 3-shakli (Past Participle) qanday?",
    options: ["saw", "seen", "seeing", "sees"],
    correctAnswer: "seen"
  },
  {
    question: "'Men bu filmni allaqachon ko'rganman.' gapining to'g'ri tarjimasini toping.",
    options: ["I saw this film already.", "I already see this film.", "I have already seen this film.", "I am seeing this film already."],
    correctAnswer: "I have already seen this film."
  },
  {
    question: "Present Perfect zamoni qanday ish-harakatni ifodalaydi?",
    options: ["Hozir davom etayotgan", "O'tmishda tugagan, lekin natijasi hozirga bog'liq bo'lgan", "Odat tusiga kirgan", "Kelajakda rejalashtirilgan"],
    correctAnswer: "O'tmishda tugagan, lekin natijasi hozirga bog'liq bo'lgan"
  },
  {
    question: "Qaysi signal so'zlar odatda Present Perfect bilan ishlatiladi?",
    options: ["yesterday, last week", "now, at the moment", "always, often", "just, already, yet, ever"],
    correctAnswer: "just, already, yet, ever"
  },
  {
    question: "'He has just ___.' nuqtalar o'rniga to'g'ri fe'lni qo'ying.",
    options: ["arrive", "arrived", "arriving", "arrives"],
    correctAnswer: "arrived"
  },
  {
    question: "'Bu Anoraning kitobi.' gapining to'g'ri tarjimasini toping.",
    options: ["This is book of Anora.", "This is Anora's book.", "This is Anora book.", "This are Anora's book."],
    correctAnswer: "This is Anora's book."
  },
  {
    question: "'Stol ustida' predlogi qanday aytiladi?",
    options: ["in the table", "at the table", "on the table", "under the table"],
    correctAnswer: "on the table"
  },
  {
    question: "'Soat 7 da' predlogi qanday aytiladi?",
    options: ["in 7 o'clock", "on 7 o'clock", "at 7 o'clock", "from 7 o'clock"],
    correctAnswer: "at 7 o'clock"
  },
  {
    question: "'Ular (ko'plikda) shifokorlar.' gapining to'g'ri tarjimasini toping.",
    options: ["They is doctors.", "They are doctors.", "He is doctors.", "They am doctors."],
    correctAnswer: "They are doctors."
  },
  {
    question: "'mouse' (sichqon) so'zining ko'plik shakli qanday?",
    options: ["mouses", "mices", "mice", "mousees"],
    correctAnswer: "mice"
  },
  {
    question: "'___ you speak English?' nuqtalar o'rniga to'g'ri so'zni qo'ying.",
    options: ["Are", "Is", "Do", "Does"],
    correctAnswer: "Do"
  },
  {
    question: "Present Perfect Continuous zamonining yasalish formulasi qanday?",
    options: ["Subject + have/has + V3", "Subject + was/were + Ving", "Subject + have/has + been + ing", "Subject + ing"],
    correctAnswer: "Subject + have/has + been + Ving"
  },
  {
    question: "Present Perfect Continuous asosan nimaga urg'u beradi?",
    options: ["Harakatning natijasiga", "Harakatning davomiyligiga", "Bir martalik harakatga", "Kelajakdagi harakatga"],
    correctAnswer: "Harakatning davomiyligiga"
  },
  {
    question: "'I have been ___ for two hours.' nuqtalar o'rniga to'g'ri fe'lni qo'ying.",
    options: ["wait", "waited", "waiting", "to wait"],
    correctAnswer: "waiting"
  },
  {
    question: "'She ___ crying since morning.' nuqtalar o'rniga to'g'ri yordamchi fe'llarni qo'ying.",
    options: ["have been", "has been", "is", "was"],
    correctAnswer: "has been"
  }
];

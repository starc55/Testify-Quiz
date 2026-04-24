
import type { QuizQuestion, Theme, ThemeName, VocabularyItem } from './types';

export const QUIZ_DURATION_SECONDS = 50 * 60; // 50 minutes

export const QUIZ_VOCABULARY: VocabularyItem[] = [
  { term: "Improve", definition: "Yaxshilamoq" },
  { term: "Decide", definition: "Qaror qilmoq" },
  { term: "Explain", definition: "Tushuntirmoq" },
  { term: "Continue", definition: "Davom etmoq" },
  { term: "Prepare", definition: "Tayyorlanmoq" },
  { term: "Increase", definition: "Oshirmoq" },
  { term: "Reduce", definition: "Kamaytirmoq" },
  { term: "Choose", definition: "Tanlamoq" },
  { term: "Develop", definition: "Rivojlanmoq" },
  { term: "Achieve", definition: "Erishmoq" },
  { term: "Opportunity", definition: "Imkoniyat" },
  { term: "Experience", definition: "Tajriba" },
  { term: "Environment", definition: "Atrof-muhit" },
  { term: "Situation", definition: "Vaziyat" },
  { term: "Advice", definition: "Maslahat" },
  { term: "Successful", definition: "Muvaffaqiyatli" },
  { term: "Responsible", definition: "Mas'uliyatli" },
  { term: "Independent", definition: "Mustaqil" },
  { term: "Possible", definition: "Mumkin" },
  { term: "Difficult", definition: "Qiyin" },
  { term: "Instead", definition: "O'rniga" },
  { term: "Although", definition: "Garchi bo'lsa ham" },
  { term: "However", definition: "Ammo, biroq" },
  { term: "Finally", definition: "Nihoyat" },
  { term: "Recently", definition: "Yaqinda" },
  { term: "Reliable", definition: "Ishonchli" },
  { term: "Wealthy", definition: "Boy, badavlat" },
  { term: "Postpone", definition: "Keyinga qoldirmoq" },
  { term: "Sense of humor", definition: "Hazil-mutoyiba hissi" }
];

export const FIXED_THEME: Theme = {
  id: 'cyberpunk',
  name: 'Cyber Glass',
  preview: 'bg-black border-cyan-500 border-2',
  mainGradient: 'from-[#020617] via-[#0f172a] to-[#020617]',
  blob1: 'bg-cyan-500',
  blob2: 'bg-fuchsia-600',
  blob3: 'bg-indigo-500',
  button: 'bg-black border-2 border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]',
  progressBar: 'from-cyan-500 via-fuchsia-500 to-cyan-500',
  timerCircle: {
    base: 'text-cyan-400',
    warn: 'text-amber-400',
    danger: 'text-rose-500',
  },
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // --- Nouns: Possessive Case & Plurals (1-5) ---
  {
    type: 'multiple-choice',
    question: "Otlarning egalik shakli (Possessive Case): 'This is ___ (Ali) book.'",
    options: ["Ali's", "Alis'", "Alis", "Ali of"],
    correctAnswer: "Ali's"
  },
  {
    type: 'multiple-choice',
    question: "Ko'plik shaklida to'g'ri yozilganini toping (Plural):",
    options: ["Children", "Childs", "Childrens", "Childes"],
    correctAnswer: "Children"
  },
  {
    type: 'multiple-choice',
    question: "O'yinchilarning to'pi: 'The ___ ball.'",
    options: ["players'", "player's", "players", "players's"],
    correctAnswer: "players'"
  },
  {
    type: 'multiple-choice',
    question: "'Wife' so'zining ko'plik shakli qaysi?",
    options: ["Wives", "Wifes", "Wifey", "Wivess"],
    correctAnswer: "Wives"
  },
  {
    type: 'multiple-choice',
    question: "'Man' so'zining ko'plik shakli qaysi?",
    options: ["Men", "Mans", "Mens", "Manes"],
    correctAnswer: "Men"
  },

  // --- Pronouns (6-10) ---
  {
    type: 'multiple-choice',
    question: "'Mening' olmoshi (Possessive): 'This pen is ___.'",
    options: ["mine", "my", "me", "myself"],
    correctAnswer: "mine"
  },
  {
    type: 'multiple-choice',
    question: "'O'zim' (Reflexive): 'I can do it by ___.'",
    options: ["myself", "me", "mine", "my"],
    correctAnswer: "myself"
  },
  {
    type: 'multiple-choice',
    question: "'Uning' (ayol kishi): 'That is ___ car.'",
    options: ["her", "hers", "she", "herself"],
    correctAnswer: "her"
  },
  {
    type: 'multiple-choice',
    question: "'Bizning' (egalik): 'It is ___ house.'",
    options: ["our", "ours", "us", "ourselves"],
    correctAnswer: "our"
  },
  {
    type: 'multiple-choice',
    question: "'Ularning' (faqat egalik): 'That classroom is ___.'",
    options: ["theirs", "their", "them", "themselves"],
    correctAnswer: "theirs"
  },

  // --- To Be & There is/are (11-15) ---
  {
    type: 'multiple-choice',
    question: "To Be (Present): 'He ___ a doctor.'",
    options: ["is", "am", "are", "be"],
    correctAnswer: "is"
  },
  {
    type: 'multiple-choice',
    question: "To Be (Past): 'We ___ at the cinema yesterday.'",
    options: ["were", "was", "been", "are"],
    correctAnswer: "were"
  },
  {
    type: 'multiple-choice',
    question: "There is/are: '___ a book on the table.'",
    options: ["There is", "There are", "Is there", "Are there"],
    correctAnswer: "There is"
  },
  {
    type: 'multiple-choice',
    question: "There is/are: '___ any students in the room?'",
    options: ["Are there", "Is there", "There are", "There is"],
    correctAnswer: "Are there"
  },
  {
    type: 'multiple-choice',
    question: "Past To Be: '___ she happy at the party?'",
    options: ["Was", "Were", "Is", "Did"],
    correctAnswer: "Was"
  },

  // --- Quantifiers (16-20) ---
  {
    type: 'multiple-choice',
    question: "Much/Many: 'How ___ milk do you want?'",
    options: ["much", "many", "a lot", "little"],
    correctAnswer: "much"
  },
  {
    type: 'multiple-choice',
    question: "Much/Many: 'There are ___ apples in the basket.'",
    options: ["many", "much", "any", "little"],
    correctAnswer: "many"
  },
  {
    type: 'multiple-choice',
    question: "Some/Any: 'Do you have ___ questions?'",
    options: ["any", "some", "a", "an"],
    correctAnswer: "any"
  },
  {
    type: 'multiple-choice',
    question: "Little/Few: 'I have ___ friends.' (sanoqli)",
    options: ["few", "little", "much", "many"],
    correctAnswer: "few"
  },
  {
    type: 'multiple-choice',
    question: "Little/Few: 'There is ___ water in the bottle.' (sanalmaydigan)",
    options: ["little", "few", "many", "any"],
    correctAnswer: "little"
  },

  // --- Adjectives (Comparative/Superlative) (21-25) ---
  {
    type: 'multiple-choice',
    question: "Comparative: 'Ali is ___ than Wali.'",
    options: ["taller", "tall", "tallest", "more tall"],
    correctAnswer: "taller"
  },
  {
    type: 'multiple-choice',
    question: "Superlative: 'Tashkent is the ___ city in Uzbekistan.'",
    options: ["biggest", "bigger", "big", "more big"],
    correctAnswer: "biggest"
  },
  {
    type: 'multiple-choice',
    question: "Irragular Comparative: 'This book is ___ than that one.' (good)",
    options: ["better", "gooder", "best", "more good"],
    correctAnswer: "better"
  },
  {
    type: 'multiple-choice',
    question: "Superlative: 'He is the ___ student in the class.' (good)",
    options: ["best", "better", "goodest", "most good"],
    correctAnswer: "best"
  },
  {
    type: 'multiple-choice',
    question: "Comparative (Long Adj): 'English is ___ than Math.' (difficult)",
    options: ["more difficult", "difficulter", "most difficult", "difficult"],
    correctAnswer: "more difficult"
  },

  // --- Present Simple (26-30) ---
  {
    type: 'multiple-choice',
    question: "Present Simple: 'She ___ (like) ice cream.'",
    options: ["likes", "like", "liking", "is like"],
    correctAnswer: "likes"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple (Neg): 'They ___ (not / play) football.'",
    options: ["don't play", "doesn't play", "not play", "isn't play"],
    correctAnswer: "don't play"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple (Ques): '___ he live in London?'",
    options: ["Does", "Do", "Is", "Are"],
    correctAnswer: "Does"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple: 'I usually ___ (get up) at 7 o'clock.'",
    options: ["get up", "gets up", "getting up", "am get up"],
    correctAnswer: "get up"
  },
  {
    type: 'multiple-choice',
    question: "Present Simple: 'My father ___ (work) in a bank.'",
    options: ["works", "work", "is work", "working"],
    correctAnswer: "works"
  },

  // --- Present Continuous (31-35) ---
  {
    type: 'multiple-choice',
    question: "Present Continuous: 'I ___ (watch) TV now.'",
    options: ["am watching", "is watching", "are watching", "watch"],
    correctAnswer: "am watching"
  },
  {
    type: 'multiple-choice',
    question: "Present Continuous: '___ they (read) a book at the moment?'",
    options: ["Are ... reading", "Is ... reading", "Do ... read", "Does ... read"],
    correctAnswer: "Are ... reading"
  },
  {
    type: 'multiple-choice',
    question: "Present Continuous (Neg): 'She ___ (not / study) right now.'",
    options: ["isn't studying", "aren't studying", "don't study", "didn't study"],
    correctAnswer: "isn't studying"
  },
  {
    type: 'multiple-choice',
    question: "Continuous usage: 'Look! The bird ___.'",
    options: ["is flying", "flies", "fly", "flying"],
    correctAnswer: "is flying"
  },
  {
    type: 'multiple-choice',
    question: "Continuous vs Simple: 'I ___ (live) in Tashkent.' (permanent)",
    options: ["live", "am living", "lived", "living"],
    correctAnswer: "live"
  },

  // --- Past Simple (36-40) ---
  {
    type: 'multiple-choice',
    question: "Past Simple: 'I ___ (see) you yesterday.'",
    options: ["saw", "see", "seed", "seen"],
    correctAnswer: "saw"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple (Neg): 'He ___ (not / go) to school yesterday.'",
    options: ["didn't go", "doesn't go", "wasn't go", "didn't went"],
    correctAnswer: "didn't go"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple (Ques): '___ you finish the homework?'",
    options: ["Did", "Do", "Were", "Was"],
    correctAnswer: "Did"
  },
  {
    type: 'multiple-choice',
    question: "Past Simple: 'We ___ (buy) a car last month.'",
    options: ["bought", "buyed", "buys", "buying"],
    correctAnswer: "bought"
  },
  {
    type: 'multiple-choice',
    question: "Irregular Past: 'She ___ (write) a letter.'",
    options: ["wrote", "writed", "write", "written"],
    correctAnswer: "wrote"
  },

  // --- Future & Going to (41-45) ---
  {
    type: 'multiple-choice',
    question: "Future Simple: 'I think it ___ rain tomorrow.'",
    options: ["will", "is going to", "is", "am"],
    correctAnswer: "will"
  },
  {
    type: 'multiple-choice',
    question: "To be going to: 'I ___ (visit) my grandmother tonight.'",
    options: ["am going to visit", "will visit", "going to visit", "visit"],
    correctAnswer: "am going to visit"
  },
  {
    type: 'multiple-choice',
    question: "Prediction: 'Look at those black clouds! It ___ rain.'",
    options: ["is going to", "will", "does", "was"],
    correctAnswer: "is going to"
  },
  {
    type: 'multiple-choice',
    question: "Future Simple (Neg): 'He ___ come to the party.' (not)",
    options: ["won't", "don't", "isn't", "didn't"],
    correctAnswer: "won't"
  },
  {
    type: 'multiple-choice',
    question: "Plan: 'We ___ (have) a party on Saturday.'",
    options: ["are going to have", "will have", "have", "had"],
    correctAnswer: "are going to have"
  },

  // --- Modal Verbs & Had better (46-50) ---
  {
    type: 'multiple-choice',
    question: "Ability: 'I ___ speak English well.'",
    options: ["can", "must", "should", "could"],
    correctAnswer: "can"
  },
  {
    type: 'multiple-choice',
    question: "Obligation: 'You ___ wear a seatbelt.'",
    options: ["must", "can", "could", "may"],
    correctAnswer: "must"
  },
  {
    type: 'multiple-choice',
    question: "Past Ability: 'He ___ swim when he was five.'",
    options: ["could", "can", "should", "must"],
    correctAnswer: "could"
  },
  {
    type: 'multiple-choice',
    question: "Recommendation: 'You ___ study hard for the exam.' (had better)",
    options: ["had better", "would better", "must", "have better"],
    correctAnswer: "had better"
  },
  {
    type: 'multiple-choice',
    question: "Permission: '___ I open the window?'",
    options: ["Can", "Must", "Had better", "Should"],
    correctAnswer: "Can"
  }
];

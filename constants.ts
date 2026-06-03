import type { QuizQuestion, Theme, ThemeName, VocabularyItem } from './types';

export const QUIZ_DURATION_SECONDS = 60 * 60; // 60 minutes (30 questions as per DTM standard)

export const QUIZ_VOCABULARY: VocabularyItem[] = [
  { term: "Grammar Rules", definition: "Ingliz tili asosiy grammatik qoidalari" },
  { term: "Conditionals", definition: "Shart mayli (If-clauses) turlari" },
  { term: "Reported Speech", definition: "O'zlashtirma gap qoidalari" },
  { term: "Numerals", definition: "Sonlar va ularning o'qilishi" },
  { term: "Reading Comprehension", definition: "Matnni o'qib tushunish va tahlil qilish" }
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
  {
    type: 'multiple-choice',
    question: "Stop . . . this terrible noise at once!",
    options: ["to make", "to making", "make", "making"],
    correctAnswer: "making"
  },
  {
    type: 'multiple-choice',
    question: "You . . . smoke in the hotel. It is forbidden.",
    options: ["needn't", "have to", "can", "can't"],
    correctAnswer: "can't"
  },
  {
    type: 'multiple-choice',
    question: "He seems to be . . . .",
    options: ["more honester", "honestly", "most honest", "honest"],
    correctAnswer: "honest"
  },
  {
    type: 'multiple-choice',
    question: "The main . . . of this meeting is to decide what we should do about the problem of noise.",
    options: ["purpose", "device", "habit", "behaviour"],
    correctAnswer: "purpose"
  },
  {
    type: 'multiple-choice',
    question: "The importance . . . washing one’s hands is that it prevents infection.",
    options: ["to", "on", "against", "of"],
    correctAnswer: "of"
  },
  {
    type: 'multiple-choice',
    question: "If I . . . better, I would go to the cinema with you.",
    options: ["would feel", "felt", "will feel", "fell"],
    correctAnswer: "felt"
  },
  {
    type: 'multiple-choice',
    question: "− Gavhar has her lunch at 12 o’clock.\n− . . . .",
    options: ["So did Peter", "So had Mike", "So does Anvar", "Neither has Jane"],
    correctAnswer: "So does Anvar"
  },
  {
    type: 'multiple-choice',
    question: "Sorry I’m late. It took me . . . to get here than I expected.",
    options: ["longest", "as long", "longer", "long"],
    correctAnswer: "longer"
  },
  {
    type: 'multiple-choice',
    question: "If she had listened to me, she . . . any problems now.",
    options: ["would not have", "will not have had", "would not have had", "will not have"],
    correctAnswer: "would not have"
  },
  {
    type: 'multiple-choice',
    question: "Choose the right expression of the underlined numeral.\nYou filed a complaint 2 1/2 weeks ago.",
    options: ["two and a half", "two point one two", "one second", "two halves"],
    correctAnswer: "two and a half"
  },
  {
    type: 'multiple-choice',
    question: "He stood glancing . . . the picture for a long time.",
    options: ["after", "at", "for", "to"],
    correctAnswer: "at"
  },
  {
    type: 'multiple-choice',
    question: "The dentist asked the little boy, “How much chocolate do you eat every day?”.",
    options: [
      "The dentist asked the little boy how much chocolate will he eat every day.",
      "The dentist asked the little boy how much chocolate he eat every day.",
      "How much chocolate he eats every day asked the dentist to little boy.",
      "The dentist asked the little boy how much chocolate he ate every day."
    ],
    correctAnswer: "The dentist asked the little boy how much chocolate he ate every day."
  },
  {
    type: 'multiple-choice',
    question: ". . . Mary last month?",
    options: ["How many times have you seen", "Have you seen", "Were you seeing", "Did you see"],
    correctAnswer: "Did you see"
  },
  {
    type: 'multiple-choice',
    question: "Develop your personal plan, . . . ?",
    options: ["shall you", "shan’t", "will you", "don’t you"],
    correctAnswer: "will you"
  },
  {
    type: 'multiple-choice',
    question: "I saw her . . . but I don’t remember where.",
    options: ["nowhere", "somewhere", "everywhere", "anywhere"],
    correctAnswer: "somewhere"
  },
  {
    type: 'multiple-choice',
    question: "The teacher . . . some questions.",
    options: ["is asking", "were asked", "ask", "have asked"],
    correctAnswer: "is asking"
  },
  {
    type: 'multiple-choice',
    question: "I’ve just heard the weather forecast on the radio and . . . say it will rain today.",
    options: ["we", "they", "he", "it"],
    correctAnswer: "they"
  },
  {
    type: 'multiple-choice',
    question: "It is . . . hit. I like such songs.",
    options: ["his thirds", "the third his", "his third", "his the third"],
    correctAnswer: "his third"
  },
  // --- Reading Comprehension Passage 1 (Mansur's Hunt) ---
  {
    type: 'multiple-choice',
    passage: "Mansur liked hunting very much but he wanted to get much practice at shooting animals in the mountains as he wasn’t very good at it. His trouble was that his eyes weren’t very good and he had to wear glasses. When it rained and his glasses often became wet, he could not see very well. One day Mansur was invited to go out for hunting animals in the mountains. It was a rainy day, unfortunately and by mistake, Mansur shot at Usmon, and he was injured in the leg. They went to the judge and when he was asked, \"Why did you shoot at Usmon?\". Mansur answered, \"I thought he was an animal.\" \"When did you find out that you were wrong?\", the judge asked. \"When the animal began to shoot back at me,\" Mansur answered.",
    question: "According to the passage, why did Mansur want to go to the mountains?",
    options: ["to have a fine holiday", "to shoot at somebody", "to watch some animals", "to practice at shooting"],
    correctAnswer: "to practice at shooting"
  },
  {
    type: 'multiple-choice',
    passage: "Mansur liked hunting very much but he wanted to get much practice at shooting animals in the mountains as he wasn’t very good at it. His trouble was that his eyes weren’t very good and he had to wear glasses. When it rained and his glasses often became wet, he could not see very well. One day Mansur was invited to go out for hunting animals in the mountains. It was a rainy day, unfortunately and by mistake, Mansur shot at Usmon, and he was injured in the leg. They went to the judge and when he was asked, \"Why did you shoot at Usmon?\". Mansur answered, \"I thought he was an animal.\" \"When did you find out that you were wrong?\", the judge asked. \"When the animal began to shoot back at me,\" Mansur answered.",
    question: "According to the passage, what was the reason that Mansur and Usmon went to the judge?",
    options: ["Somebody had shot them in their legs.", "Usmon had called Mansur an animal.", "Mansur had shot Usmon by accident.", "They had wanted to shoot each other."],
    correctAnswer: "Mansur had shot Usmon by accident."
  },
  {
    type: 'multiple-choice',
    passage: "Mansur liked hunting very much but he wanted to get much practice at shooting animals in the mountains as he wasn’t very good at it. His trouble was that his eyes weren’t very good and he had to wear glasses. When it rained and his glasses often became wet, he could not see very well. One day Mansur was invited to go out for hunting animals in the mountains. It was a rainy day, unfortunately and by mistake, Mansur shot at Usmon, and he was injured in the leg. They went to the judge and when he was asked, \"Why did you shoot at Usmon?\". Mansur answered, \"I thought he was an animal.\" \"When did you find out that you were wrong?\", the judge asked. \"When the animal began to shoot back at me,\" Mansur answered.",
    question: "According to the passage, Mansur would not have made such a mistake if . . . .",
    options: ["he had seen well", "he had worn his glasses", "he had gone on a rainy day", "he had talked to the judge before"],
    correctAnswer: "he had seen well"
  },
  {
    type: 'multiple-choice',
    passage: "Mansur liked hunting very much but he wanted to get much practice at shooting animals in the mountains as he wasn’t very good at it. His trouble was that his eyes weren’t very good and he had to wear glasses. When it rained and his glasses often became wet, he could not see very well. One day Mansur was invited to go out for hunting animals in the mountains. It was a rainy day, unfortunately and by mistake, Mansur shot at Usmon, and he was injured in the leg. They went to the judge and when he was asked, \"Why did you shoot at Usmon?\". Mansur answered, \"I thought he was an animal.\" \"When did you find out that you were wrong?\", the judge asked. \"When the animal began to shoot back at me,\" Mansur answered.",
    question: "All of the following statements are TRUE, EXCEPT . . . .",
    options: [
      "Mansur had trouble with his wet glasses that day.",
      "It rained that day when Mansur went to the mountains.",
      "Usmon was shot by Mansur by accident that day.",
      "Mansur was sure that he was shooting at Usmon."
    ],
    correctAnswer: "Mansur was sure that he was shooting at Usmon."
  },
  // --- Reading Comprehension Passage 2 (Yawning) ---
  {
    type: 'multiple-choice',
    passage: "Do you ever wonder why we yawn? A new study from Nottingham University in the UK has done research on this. Researchers found that yawning is contagious which means spreading or affecting others. It is impossible to stop this reaction. People automatically want to yawn when they see other people yawning. The researchers said people actually yawn more when they try to stop yawning. Even reading about yawning could be enough to make people yawn. You might even want to yawn right now. The researchers studied the reactions and brain activity of 36 adult volunteers. The volunteers looked at video clips of other people yawning. They had two choices: either to stop themselves yawning or to allow themselves to do it. The volunteers were videoed as they yawned or tried not to yawn. The researchers also monitored the brain activity of the volunteers and checked how strong their feelings to want to yawn were. Understanding more about yawning will help to treat some diseases.",
    question: "According to the passage, when do people want to yawn?",
    options: ["When they have lots of problems to solve.", "When they want to eat something delicious.", "When they are in bad mood conditions.", "When they see other people yawning."],
    correctAnswer: "When they see other people yawning."
  },
  {
    type: 'multiple-choice',
    passage: "Do you ever wonder why we yawn? A new study from Nottingham University in the UK has done research on this. Researchers found that yawning is contagious which means spreading or affecting others. It is impossible to stop this reaction. People automatically want to yawn when they see other people yawning. The researchers said people actually yawn more when they try to stop yawning. Even reading about yawning could be enough to make people yawn. You might even want to yawn right now. The researchers studied the reactions and brain activity of 36 adult volunteers. The volunteers looked at video clips of other people yawning. They had two choices: either to stop themselves yawning or to allow themselves to do it. The volunteers were videoed as they yawned or tried not to yawn. The researchers also monitored the brain activity of the volunteers and checked how strong their feelings to want to yawn were. Understanding more about yawning will help to treat some diseases.",
    question: "According to the passage, what cause of yawning is mentioned?",
    options: ["Seeing animals’ yawning makes people yawn.", "Reading about yawning makes people yawn.", "Watching a horror movie makes people yawn.", "Going to bed early makes people yawn strongly."],
    correctAnswer: "Reading about yawning makes people yawn."
  },
  {
    type: 'multiple-choice',
    passage: "Do you ever wonder why we yawn? A new study from Nottingham University in the UK has done research on this. Researchers found that yawning is contagious which means spreading or affecting others. It is impossible to stop this reaction. People automatically want to yawn when they see other people yawning. The researchers said people actually yawn more when they try to stop yawning. Even reading about yawning could be enough to make people yawn. You might even want to yawn right now. The researchers studied the reactions and brain activity of 36 adult volunteers. The volunteers looked at video clips of other people yawning. They had two choices: either to stop themselves yawning or to allow themselves to do it. The volunteers were videoed as they yawned or tried not to yawn. The researchers also monitored the brain activity of the volunteers and checked how strong their feelings to want to yawn were. Understanding more about yawning will help to treat some diseases.",
    question: "All of the following statements are TRUE, EXCEPT . . .",
    options: [
      "A university in the UK did some research on yawning.",
      "Researchers say reading about yawning stops us from yawning.",
      "Researchers say people yawn more if they try to stop yawning.",
      "The volunteers looked at videos and were videoed."
    ],
    correctAnswer: "Researchers say reading about yawning stops us from yawning."
  },
  {
    type: 'multiple-choice',
    passage: "Do you ever wonder why we yawn? A new study from Nottingham University in the UK has done research on this. Researchers found that yawning is contagious which means spreading or affecting others. It is impossible to stop this reaction. People automatically want to yawn when they see other people yawning. The researchers said people actually yawn more when they try to stop yawning. Even reading about yawning could be enough to make people yawn. You might even want to yawn right now. The researchers studied the reactions and brain activity of 36 adult volunteers. The volunteers looked at video clips of other people yawning. They had two choices: either to stop themselves yawning or to allow themselves to do it. The volunteers were videoed as they yawned or tried not to yawn. The researchers also monitored the brain activity of the volunteers and checked how strong their feelings to want to yawn were. Understanding more about yawning will help to treat some diseases.",
    question: "According to the passage, why is yawning being studied?",
    options: ["It will help to monitor the brain.", "It will help to treat some diseases.", "It will help people sleep more.", "It will help researchers yawn more."],
    correctAnswer: "It will help to treat some diseases."
  },
  // --- Reading Comprehension Passage 3 (Salima's Letter to Manager) ---
  {
    type: 'multiple-choice',
    passage: "Dear Manager,\nYou know that I work for your company as a guide. It’s my job to make everything go well for the tourists. But something unpleasant happened last weekend. Last Saturday I met a group of tourists at the airport. I normally take our tourists to “The Sheraton Hotel”, but this time it was hosting an international conference. So I took them to another hotel “The Navruz Hotel”. I hadn’t used the service of “The Navruz Hotel” before and didn’t quite know what kind of service they had. When we arrived at the reception, they said the hotel was full and didn’t have any free room. Although I had booked rooms beforehand, the manager said that somebody phoned a day before and said that we wouldn’t need the rooms. The manager insisted it was I who made that phone call. I was very annoyed but the manager phoned other hotels and found rooms but in four different hotels. I don’t know who made that phone call. I hope you will understand and won’t blame me for what happened that day.\nSincerely, Salima Anvarovna.",
    question: "According to the passage, Salima is writing to the manager because she wants to . . .",
    options: [
      "tell the manager how she was enjoying the job.",
      "say that “The Navruz Hotel” had a good service.",
      "speak about her work experience and hard life.",
      "say that what happened is not her fault."
    ],
    correctAnswer: "say that what happened is not her fault."
  },
  {
    type: 'multiple-choice',
    passage: "Dear Manager,\nYou know that I work for your company as a guide. It’s my job to make everything go well for the tourists. But something unpleasant happened last weekend. Last Saturday I met a group of tourists at the airport. I normally take our tourists to “The Sheraton Hotel”, but this time it was hosting an international conference. So I took them to another hotel “The Navruz Hotel”. I hadn’t used the service of “The Navruz Hotel” before and didn’t quite know what kind of service they had. When we arrived at the reception, they said the hotel was full and didn’t have any free room. Although I had booked rooms beforehand, the manager said that somebody phoned a day before and said that we wouldn’t need the rooms. The manager insisted it was I who made that phone call. I was very annoyed but the manager phoned other hotels and found rooms but in four different hotels. I don’t know who made that phone call. I hope you will understand and won’t blame me for what happened that day.\nSincerely, Salima Anvarovna.",
    question: "According to the passage, “The Navruz Hotel” couldn’t receive the guests because . . . .",
    options: ["there weren’t any free rooms", "it had an international conference", "it was too late and they were hungry", "the manager didn’t like the guide"],
    correctAnswer: "there weren’t any free rooms"
  },
  {
    type: 'multiple-choice',
    passage: "Dear Manager,\nYou know that I work for your company as a guide. It’s my job to make everything go well for the tourists. But something unpleasant happened last weekend. Last Saturday I met a group of tourists at the airport. I normally take our tourists to “The Sheraton Hotel”, but this time it was hosting an international conference. So I took them to another hotel “The Navruz Hotel”. I hadn’t used the service of “The Navruz Hotel” before and didn’t quite know what kind of service they had. When we arrived at the reception, they said the hotel was full and didn’t have any free room. Although I had booked rooms beforehand, the manager said that somebody phoned a day before and said that we wouldn’t need the rooms. The manager insisted it was I who made that phone call. I was very annoyed but the manager phoned other hotels and found rooms but in four different hotels. I don’t know who made that phone call. I hope you will understand and won’t blame me for what happened that day.\nSincerely, Salima Anvarovna.",
    question: "According to the passage, who found the rooms for the tourists in the end?",
    options: ["The manager of “The Navruz Hotel”.", "The tourists themselves.", "The manager of “The Sheraton Hotel”.", "The guide herself."],
    correctAnswer: "The manager of “The Navruz Hotel”."
  },
  {
    type: 'multiple-choice',
    passage: "According to the passage, what is the writer trying to do in her letter?",
    options: ["argue", "entertain", "inquire", "apologize"],
    correctAnswer: "apologize"
  }
];

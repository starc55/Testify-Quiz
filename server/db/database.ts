import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import {
  User, Group, Question, ReadingPassage, ListeningAudio,
  Test, Assignment, Attempt, WeakTopic, Achievement,
  StudentAchievement, Notification, ActivityLog
} from '../types';

export interface DatabaseSchema {
  users: UserWithPassword[];
  groups: Group[];
  questions: Question[];
  readingPassages: ReadingPassage[];
  listeningAudios: ListeningAudio[];
  tests: Test[];
  assignments: Assignment[];
  attempts: Attempt[];
  weakTopics: WeakTopic[];
  achievements: Achievement[];
  studentAchievements: StudentAchievement[];
  notifications: Notification[];
  activityLogs: ActivityLog[];
}

export interface UserWithPassword extends User {
  passwordHash: string;
}

const DB_PATH = path.resolve(process.env.DATABASE_PATH || './data/db.json');

class JSONDatabase {
  private data: DatabaseSchema = {
    users: [],
    groups: [],
    questions: [],
    readingPassages: [],
    listeningAudios: [],
    tests: [],
    assignments: [],
    attempts: [],
    weakTopics: [],
    achievements: [],
    studentAchievements: [],
    notifications: [],
    activityLogs: []
  };

  constructor() {
    this.init();
  }

  private init() {
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    if (fs.existsSync(DB_PATH)) {
      try {
        const raw = fs.readFileSync(DB_PATH, 'utf-8');
        this.data = JSON.parse(raw);
        console.log('Database loaded successfully from file.');
        return;
      } catch (err) {
        console.error('Error reading database file, re-seeding...', err);
      }
    }

    this.seedInitialData();
    this.save();
  }

  public save() {
    try {
      const tempPath = `${DB_PATH}.tmp`;
      fs.writeFileSync(tempPath, JSON.stringify(this.data, null, 2), 'utf-8');
      fs.renameSync(tempPath, DB_PATH);
    } catch (err) {
      console.error('Failed to save database file:', err);
    }
  }

  public get<K extends keyof DatabaseSchema>(table: K): DatabaseSchema[K] {
    return this.data[table];
  }

  public set<K extends keyof DatabaseSchema>(table: K, value: DatabaseSchema[K]) {
    this.data[table] = value;
    this.save();
  }

  private seedInitialData() {
    console.log('Seeding initial production-grade data for EduLinguist...');
    const defaultPasswordHash = bcrypt.hashSync('student123', 8);
    const adminPasswordHash = bcrypt.hashSync('admin123', 8);
    const teacherPasswordHash = bcrypt.hashSync('teacher123', 8);

    // 1. Users
    const users: UserWithPassword[] = [
      {
        id: 'u_admin',
        username: 'admin',
        passwordHash: adminPasswordHash,
        fullName: 'Dr. Robert Vance (Director)',
        role: 'ADMIN',
        status: 'ACTIVE',
        level: 'C2',
        createdAt: new Date().toISOString()
      },
      {
        id: 'u_teacher1',
        username: 'teacher_john',
        passwordHash: teacherPasswordHash,
        fullName: 'John Miller, M.A.',
        role: 'TEACHER',
        status: 'ACTIVE',
        level: 'C2',
        createdAt: new Date().toISOString()
      },
      {
        id: 'u_teacher2',
        username: 'teacher_sarah',
        passwordHash: teacherPasswordHash,
        fullName: 'Sarah Jenkins, CELTA',
        role: 'TEACHER',
        status: 'ACTIVE',
        level: 'C2',
        createdAt: new Date().toISOString()
      },
      // Groups A, B, C students
      {
        id: 'u_std1',
        username: 'student_alex',
        passwordHash: defaultPasswordHash,
        fullName: 'Alexey Romanov',
        role: 'STUDENT',
        status: 'ACTIVE',
        level: 'B1',
        groupId: 'grp_1',
        groupName: 'Group A (Pre-Int)',
        createdAt: new Date().toISOString()
      },
      {
        id: 'u_std2',
        username: 'student_emma',
        passwordHash: defaultPasswordHash,
        fullName: 'Emma Watson',
        role: 'STUDENT',
        status: 'ACTIVE',
        level: 'B2',
        groupId: 'grp_2',
        groupName: 'Group B (Intermediate)',
        createdAt: new Date().toISOString()
      },
      {
        id: 'u_std3',
        username: 'student_david',
        passwordHash: defaultPasswordHash,
        fullName: 'David Kim',
        role: 'STUDENT',
        status: 'ACTIVE',
        level: 'B2',
        groupId: 'grp_2',
        groupName: 'Group B (Intermediate)',
        createdAt: new Date().toISOString()
      },
      {
        id: 'u_std4',
        username: 'student_lisa',
        passwordHash: defaultPasswordHash,
        fullName: 'Lisa Chen',
        role: 'STUDENT',
        status: 'ACTIVE',
        level: 'C1',
        groupId: 'grp_3',
        groupName: 'Group C (Upper-Int)',
        createdAt: new Date().toISOString()
      },
      {
        id: 'u_std5',
        username: 'student_michael',
        passwordHash: defaultPasswordHash,
        fullName: 'Michael Brown',
        role: 'STUDENT',
        status: 'ACTIVE',
        level: 'B1',
        groupId: 'grp_1',
        groupName: 'Group A (Pre-Int)',
        createdAt: new Date().toISOString()
      },
      {
        id: 'u_std6',
        username: 'student_sophia',
        passwordHash: defaultPasswordHash,
        fullName: 'Sophia Martinez',
        role: 'STUDENT',
        status: 'ACTIVE',
        level: 'B2',
        groupId: 'grp_2',
        groupName: 'Group B (Intermediate)',
        createdAt: new Date().toISOString()
      },
      {
        id: 'u_std7',
        username: 'student_daniel',
        passwordHash: defaultPasswordHash,
        fullName: 'Daniel Taylor',
        role: 'STUDENT',
        status: 'ACTIVE',
        level: 'A2',
        groupId: 'grp_1',
        groupName: 'Group A (Pre-Int)',
        createdAt: new Date().toISOString()
      },
      {
        id: 'u_std8',
        username: 'student_olivia',
        passwordHash: defaultPasswordHash,
        fullName: 'Olivia Johnson',
        role: 'STUDENT',
        status: 'ACTIVE',
        level: 'B2',
        groupId: 'grp_2',
        groupName: 'Group B (Intermediate)',
        createdAt: new Date().toISOString()
      },
      {
        id: 'u_std9',
        username: 'student_james',
        passwordHash: defaultPasswordHash,
        fullName: 'James Wilson',
        role: 'STUDENT',
        status: 'ACTIVE',
        level: 'C1',
        groupId: 'grp_3',
        groupName: 'Group C (Upper-Int)',
        createdAt: new Date().toISOString()
      },
      {
        id: 'u_std10',
        username: 'student_ava',
        passwordHash: defaultPasswordHash,
        fullName: 'Ava Davis',
        role: 'STUDENT',
        status: 'ACTIVE',
        level: 'B1',
        groupId: 'grp_1',
        groupName: 'Group A (Pre-Int)',
        createdAt: new Date().toISOString()
      },
      {
        id: 'u_std11',
        username: 'student_william',
        passwordHash: defaultPasswordHash,
        fullName: 'William Anderson',
        role: 'STUDENT',
        status: 'ACTIVE',
        level: 'B2',
        groupId: 'grp_2',
        groupName: 'Group B (Intermediate)',
        createdAt: new Date().toISOString()
      },
      {
        id: 'u_std12',
        username: 'student_mia',
        passwordHash: defaultPasswordHash,
        fullName: 'Mia Thomas',
        role: 'STUDENT',
        status: 'ACTIVE',
        level: 'C1',
        groupId: 'grp_3',
        groupName: 'Group C (Upper-Int)',
        createdAt: new Date().toISOString()
      },
      {
        id: 'u_std13',
        username: 'student_ethan',
        passwordHash: defaultPasswordHash,
        fullName: 'Ethan Jackson',
        role: 'STUDENT',
        status: 'ACTIVE',
        level: 'A2',
        groupId: 'grp_1',
        groupName: 'Group A (Pre-Int)',
        createdAt: new Date().toISOString()
      },
      {
        id: 'u_std14',
        username: 'student_isabella',
        passwordHash: defaultPasswordHash,
        fullName: 'Isabella White',
        role: 'STUDENT',
        status: 'ACTIVE',
        level: 'B2',
        groupId: 'grp_2',
        groupName: 'Group B (Intermediate)',
        createdAt: new Date().toISOString()
      },
      {
        id: 'u_std15',
        username: 'student_mason',
        passwordHash: defaultPasswordHash,
        fullName: 'Mason Harris',
        role: 'STUDENT',
        status: 'ACTIVE',
        level: 'C1',
        groupId: 'grp_3',
        groupName: 'Group C (Upper-Int)',
        createdAt: new Date().toISOString()
      }
    ];

    // 2. Groups
    const groups: Group[] = [
      {
        id: 'grp_1',
        name: 'Group A (Pre-Int)',
        level: 'B1',
        subject: 'General English B1',
        teacherId: 'u_teacher1',
        teacherName: 'John Miller, M.A.',
        studentIds: ['u_std1', 'u_std5', 'u_std7', 'u_std10', 'u_std13'],
        createdAt: new Date().toISOString()
      },
      {
        id: 'grp_2',
        name: 'Group B (Intermediate)',
        level: 'B2',
        subject: 'Intermediate Communication & Grammar',
        teacherId: 'u_teacher1',
        teacherName: 'John Miller, M.A.',
        studentIds: ['u_std2', 'u_std3', 'u_std6', 'u_std8', 'u_std11', 'u_std14'],
        createdAt: new Date().toISOString()
      },
      {
        id: 'grp_3',
        name: 'Group C (Upper-Int)',
        level: 'C1',
        subject: 'Advanced Academic English',
        teacherId: 'u_teacher2',
        teacherName: 'Sarah Jenkins, CELTA',
        studentIds: ['u_std4', 'u_std9', 'u_std12', 'u_std15'],
        createdAt: new Date().toISOString()
      }
    ];

    // 3. Reading Passages
    const readingPassages: ReadingPassage[] = [
      {
        id: 'rp_1',
        title: 'The Evolution of Artificial Intelligence in Education',
        passageText: `In recent years, the integration of Artificial Intelligence (AI) into educational environments has altered standard teaching methodologies. Adaptive learning platforms leverage sophisticated algorithms to assess individual student competencies in real time, catering to unique pace and learning styles.

Proponents argue that AI-driven software democratizes access to high-quality tutoring. By identifying specific areas where a learner stumbles—such as irregular verb conjugations or listening tone inference—the system generates customized practice drills. Consequently, teachers can transition from traditional lecture delivery to focused, high-value small group instruction.

However, critics voice valid concerns regarding digital divide disparities and over-reliance on automated grading. Skeptics point out that emotional intelligence, nuanced critical debate, and creative writing feedback require human empathy that algorithms cannot replicate. Therefore, experts advocate for a hybrid model where AI serves as a pedagogical assistant rather than a replacement for qualified educators.`,
        estReadingTime: 4,
        level: 'B2',
        difficulty: 'medium',
        createdAt: new Date().toISOString()
      },
      {
        id: 'rp_2',
        title: 'Bilingualism and Brain Plasticity',
        passageText: `Cognitive neuroscientists have long studied the impact of multilingualism on neural architecture. Studies demonstrate that individuals who speak two or more languages fluently exhibit heightened executive function—the mental processes that enable goal-directed behavior, task switching, and selective attention.

Unlike monolinguals, bilingual speakers regularly manage two active linguistic systems simultaneously. This continuous management acts as cognitive weightlifting for the prefrontal cortex, enhancing neuroplasticity and creating a reserve against age-related cognitive decline.

Furthermore, research indicates that childhood bilingualism does not cause language delay, contrary to popular mid-20th-century myths. Instead, multilingual children develop flexible problem-solving strategies earlier than monolingual peers, demonstrating superior adaptability in ambiguous situations.`,
        estReadingTime: 5,
        level: 'C1',
        difficulty: 'hard',
        createdAt: new Date().toISOString()
      },
      {
        id: 'rp_3',
        title: 'Sustainable Cities of the Future',
        passageText: `Urbanization presents significant environmental challenges, as cities currently produce over 70 percent of global carbon emissions. In response, urban planners are designing eco-friendly smart cities prioritizing renewable energy, vertical gardens, and zero-emission transit networks.

Key innovations include permeable pavements that reduce flooding and harvest rainwater, paired with smart grids that optimize energy consumption based on real-time traffic and weather forecasts. Furthermore, urban agriculture is gaining traction, transforming urban rooftops into high-yield produce gardens.

While initial infrastructure investments are substantial, long-term health benefits, reduced carbon footprints, and economic savings make sustainable urban planning essential for 21st-century resilience.`,
        estReadingTime: 3,
        level: 'B1',
        difficulty: 'easy',
        createdAt: new Date().toISOString()
      }
    ];

    // 4. Listening Audios
    const listeningAudios: ListeningAudio[] = [
      {
        id: 'la_1',
        title: 'University Campus Library Orientation',
        instructions: 'Listen to the conversation between a new university student and the head librarian. Answer the questions that follow. You can listen to the audio a maximum of 2 times.',
        audioUrl: 'https://cdn.freesound.org/previews/512/512132_10825381-lq.mp3', // reliable sample audio
        transcript: `Librarian: Good morning! Welcome to the University Central Library. How can I assist you today?
Student: Hi! I am a freshman in the International Relations department. I'd like to activate my student card for borrowing books and access the research database.
Librarian: Excellent. I can set that up right away. Do you have your official university ID card and registration slip with you?
Student: Yes, here they are.
Librarian: Perfect. With your active account, you can borrow up to six print books for three weeks at a time. Digital academic journals are available 24/7 through our online portal using your university email login.
Student: That sounds great! Are there quiet study rooms available for group projects?
Librarian: Yes, on the third floor. However, group rooms must be reserved at least 24 hours in advance via our website.`,
        playLimit: 2,
        timeLimit: 300,
        createdAt: new Date().toISOString()
      },
      {
        id: 'la_2',
        title: 'International Climate Conference Keynote Speech',
        instructions: 'Listen to the keynote speech delivered by Dr. Aris Thorne at the Global Climate Forum. Pay close attention to statistical figures and proposed initiatives.',
        audioUrl: 'https://cdn.freesound.org/previews/538/538942_11861866-lq.mp3',
        transcript: `Speaker: Distinguished delegates, colleagues, and honored guests. Welcome to the 15th Global Climate Forum. Over the past decade, global mean temperatures have risen by 1.1 degrees Celsius above pre-industrial levels.
Our primary agenda today focuses on three imperative action pillars: transitioning 60% of municipal energy grids to wind and solar by 2030, enforcing strict industrial emission caps, and funding reforestation across damaged river basins.
Without swift, coordinated inter-governmental policy enforcement, economic costs associated with extreme weather events will surpass three trillion dollars annually by mid-century.`,
        playLimit: 2,
        timeLimit: 360,
        createdAt: new Date().toISOString()
      },
      {
        id: 'la_3',
        title: 'Daily Routine and Habits Interview',
        instructions: 'Listen to an interview with a professional translator discussing effective language learning habits and time management strategies.',
        audioUrl: 'https://cdn.freesound.org/previews/456/456123_1234567-lq.mp3',
        transcript: `Interviewer: Today we are joined by Elena Rostova, a conference interpreter who speaks five languages fluently. Elena, what is your daily language learning secret?
Elena: Consistency over intensity. I spend 20 minutes every morning listening to native news podcasts, followed by 15 minutes reviewing active vocabulary with spaced repetition flashcards. I never study in massive four-hour blocks once a week. Short, daily exposures build stronger neural pathways.`,
        playLimit: 2,
        timeLimit: 240,
        createdAt: new Date().toISOString()
      }
    ];

    // 5. Questions (50+ Grammar, 15 Reading, 10 Listening)
    const questions: Question[] = [
      // --- GRAMMAR QUESTIONS ---
      {
        id: 'q_g1',
        skill: 'grammar',
        topic: 'Present Simple vs Continuous',
        level: 'B1',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'My father usually ... to work by subway, but this week he ... his car because of station renovations.',
        options: ['goes / is driving', 'is going / drives', 'goes / drives', 'is going / is driving'],
        correctAnswer: 'goes / is driving',
        explanation: "'Usually' signals a permanent routine (Present Simple: goes), while 'this week' indicates a temporary situation in progress (Present Continuous: is driving).",
        points: 5
      },
      {
        id: 'q_g2',
        skill: 'grammar',
        topic: 'Present Perfect vs Past Simple',
        level: 'B1',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'I ... in London for three years before moving to Paris in 2021.',
        options: ['lived', 'have lived', 'had lived', 'am living'],
        correctAnswer: 'lived',
        explanation: 'Because the living period in London is completely finished in the past (before moving in 2021), we use the Past Simple.',
        points: 5
      },
      {
        id: 'q_g3',
        skill: 'grammar',
        topic: 'Conditionals (Third & Mixed)',
        level: 'B2',
        difficulty: 'hard',
        type: 'multiple-choice',
        question: 'If you ... your map before leaving the hotel, we ... lost in the countryside right now.',
        options: ["hadn't forgotten / wouldn't be", "didn't forget / won't be", "hadn't forgotten / wouldn't have been", "don't forget / wouldn't be"],
        correctAnswer: "hadn't forgotten / wouldn't be",
        explanation: 'This is a Mixed Conditional: Past cause (Past Perfect: hadn\'t forgotten) with Present effect (wouldn\'t be right now).',
        points: 5
      },
      {
        id: 'q_g4',
        skill: 'grammar',
        topic: 'Inversion & Subjunctive',
        level: 'C1',
        difficulty: 'hard',
        type: 'multiple-choice',
        question: 'Seldom ... such an inspiring presentation on renewable energy technologies.',
        options: ['have I heard', 'I have heard', 'did I heard', 'I had heard'],
        correctAnswer: 'have I heard',
        explanation: 'Negative adverbs like "Seldom" at the beginning of a clause trigger inverted subject-auxiliary word order (have + I + heard).',
        points: 5
      },
      {
        id: 'q_g5',
        skill: 'grammar',
        topic: 'Passive Voice',
        level: 'B2',
        difficulty: 'medium',
        type: 'fill-in-blank',
        question: 'Complete with the correct passive verb form (Past Perfect): All the financial reports ___________ (review) by the auditor before the meeting started.',
        correctAnswer: 'had been reviewed',
        acceptedAnswers: ['had been reviewed', 'Had been reviewed'],
        explanation: 'Past Perfect Passive is required for an action completed before another past event: had + been + past participle (reviewed).',
        points: 5
      },
      {
        id: 'q_g6',
        skill: 'grammar',
        topic: 'Reported Speech',
        level: 'B2',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: '"Where did you put my research notes?" asked Professor Higgins.',
        options: [
          'Professor Higgins asked where I had put his research notes.',
          'Professor Higgins asked where did I put his research notes.',
          'Professor Higgins asked where I put his research notes.',
          'Professor Higgins asked where have I put his research notes.'
        ],
        correctAnswer: 'Professor Higgins asked where I had put his research notes.',
        explanation: 'In indirect wh-questions, word order is statement style (subject + verb), and Past Simple shifts back to Past Perfect (had put).',
        points: 5
      },
      {
        id: 'q_g7',
        skill: 'grammar',
        topic: 'Articles (a/an/the/zero)',
        level: 'B1',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'He earned ... university degree in ... economics from Oxford University.',
        options: ['a / - (no article)', 'an / the', 'a / the', 'an / - (no article)'],
        correctAnswer: 'a / - (no article)',
        explanation: "'University' begins with a consonant sound /juː/, so it takes 'a'. Academic subjects in general take no article.",
        points: 5
      },
      {
        id: 'q_g8',
        skill: 'grammar',
        topic: 'Gerunds & Infinitives',
        level: 'B2',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'The committee decided ... the deadline after ... the manager\'s report.',
        options: ['to extend / reading', 'extending / to read', 'to extend / read', 'extending / reading'],
        correctAnswer: 'to extend / reading',
        explanation: "'Decide' is followed by full infinitive (to extend), and prepositions like 'after' are followed by a gerund (reading).",
        points: 5
      },
      {
        id: 'q_g9',
        skill: 'grammar',
        topic: 'Relative Clauses',
        level: 'B2',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'The scientist ... research paper was published in Nature received an international award.',
        options: ['whose', 'whom', 'which', 'who'],
        correctAnswer: 'whose',
        explanation: "'Whose' is the relative possessive pronoun referring to 'the scientist\'s research paper'.",
        points: 5
      },
      {
        id: 'q_g10',
        skill: 'grammar',
        topic: 'Modal Verbs',
        level: 'B2',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'You ... all the documents yesterday; the client already had electronic copies.',
        options: ["needn't have printed", "mustn't print", "shouldn't print", "couldn't print"],
        correctAnswer: "needn't have printed",
        explanation: "'Needn't have + past participle' expresses that an action was performed in the past but was unnecessary.",
        points: 5
      },
      {
        id: 'q_g11',
        skill: 'grammar',
        topic: 'Subject-Verb Agreement',
        level: 'B1',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Neither the manager nor the department staff ... aware of the sudden policy change.',
        options: ['were', 'was', 'is', 'has'],
        correctAnswer: 'were',
        explanation: 'When using "neither... nor", the verb agrees with the closer subject ("the department staff" - plural).',
        points: 5
      },
      {
        id: 'q_g12',
        skill: 'grammar',
        topic: 'Quantifiers (few/a few/little/a little)',
        level: 'B1',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'We have ... time left before the train leaves, so let\'s grab a quick coffee.',
        options: ['a little', 'little', 'a few', 'few'],
        correctAnswer: 'a little',
        explanation: "'Time' is uncountable. 'A little' means a small positive amount (enough to grab coffee).",
        points: 5
      },
      {
        id: 'q_g13',
        skill: 'grammar',
        topic: 'Find the Mistake',
        level: 'B2',
        difficulty: 'hard',
        type: 'find-mistake',
        question: 'Identify the incorrect segment: "Although he had worked (A) / hardly for three months (B), he failed to pass (C) / the final exam. (D)"',
        options: ['A: Although he had worked', 'B: hardly for three months', 'C: he failed to pass', 'D: the final exam'],
        correctAnswer: 'B: hardly for three months',
        explanation: "'Hardly' means 'scarcely/barely'. The adverb for working with effort is 'hard' ('worked hard for three months').",
        points: 5
      },
      {
        id: 'q_g14',
        skill: 'grammar',
        topic: 'Sentence Ordering',
        level: 'B1',
        difficulty: 'medium',
        type: 'sentence-ordering',
        question: 'Reorder the words into a correct grammatical sentence:\n[ have / never / such / I / seen / a / beautiful / painting ]',
        options: [
          'I have never seen such a beautiful painting.',
          'Never I have seen such a beautiful painting.',
          'I never have seen such beautiful a painting.',
          'Have I never seen a such beautiful painting.'
        ],
        correctAnswer: 'I have never seen such a beautiful painting.',
        explanation: 'Standard word order: Subject (I) + auxiliary (have) + frequency adverb (never) + past participle (seen) + modifier (such a beautiful painting).',
        points: 5
      },
      {
        id: 'q_g15',
        skill: 'grammar',
        topic: 'True or False Grammar',
        level: 'B1',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Is this sentence grammatically correct? "I am listening to music when the phone rang."',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Incorrect tense combination. It should be Past Continuous: "I was listening to music when the phone rang."',
        points: 5
      },
      {
        id: 'q_g16',
        skill: 'grammar',
        topic: 'Conditionals (Second Conditional)',
        level: 'B1',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'If I ... more free time, I ... join the university swimming club.',
        options: ['had / would', 'have / will', 'had / will', 'would have / did'],
        correctAnswer: 'had / would',
        explanation: 'Second conditional for hypothetical present situations: If + Past Simple, would + base verb.',
        points: 5
      },
      {
        id: 'q_g17',
        skill: 'grammar',
        topic: 'Prepositions of Time & Place',
        level: 'A2',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'The annual conference starts ... 9:00 AM ... Monday morning.',
        options: ['at / on', 'in / on', 'at / in', 'on / at'],
        correctAnswer: 'at / on',
        explanation: 'We use "at" for specific clock times (at 9:00 AM) and "on" for days/day parts (on Monday morning).',
        points: 5
      },
      {
        id: 'q_g18',
        skill: 'grammar',
        topic: 'Comparatives & Superlatives',
        level: 'B1',
        difficulty: 'easy',
        type: 'fill-in-blank',
        question: 'Fill in the correct form: This is by far the ___________ (expensive) hotel in the entire city.',
        correctAnswer: 'most expensive',
        acceptedAnswers: ['most expensive', 'Most expensive'],
        explanation: 'Superlative form for long adjectives uses "the most expensive".',
        points: 5
      },
      {
        id: 'q_g19',
        skill: 'grammar',
        topic: 'Subjunctive Mood',
        level: 'C1',
        difficulty: 'hard',
        type: 'multiple-choice',
        question: 'It is essential that every student ... present at the orientation session.',
        options: ['be', 'is', 'will be', 'to be'],
        correctAnswer: 'be',
        explanation: 'The mandative subjunctive following "It is essential that" requires the base verb form "be" for all subjects.',
        points: 5
      },
      {
        id: 'q_g20',
        skill: 'grammar',
        topic: 'Possessives & Compound Nouns',
        level: 'B2',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'The ... association announced new guidelines after a three-... meeting.',
        options: ["teachers' / hour", "teacher's / hours", "teachers / hour's", "teachers' / hours"],
        correctAnswer: "teachers' / hour",
        explanation: "Plural noun possessive is teachers' (association of teachers). Numerical compound adjective is hyphenated singular (three-hour).",
        points: 5
      },

      // --- READING QUESTIONS (rp_1, rp_2, rp_3) ---
      {
        id: 'q_r1',
        skill: 'reading',
        topic: 'Main Idea / Detail',
        level: 'B2',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'According to Paragraph 1 of Passage 1, how do AI adaptive learning platforms tailor instruction?',
        options: [
          'By analyzing student performance algorithms in real time to suit individual learning speed.',
          'By replacing human teachers completely in the classroom.',
          'By forcing all students to move at the same uniform speed.',
          'By reducing the amount of homework assigned to students.'
        ],
        correctAnswer: 'By analyzing student performance algorithms in real time to suit individual learning speed.',
        explanation: 'Paragraph 1 explicitly mentions leveraging algorithms to assess individual competencies in real time, catering to unique pace.',
        readingPassageId: 'rp_1',
        points: 5
      },
      {
        id: 'q_r2',
        skill: 'reading',
        topic: 'Inference',
        level: 'B2',
        difficulty: 'hard',
        type: 'multiple-choice',
        question: 'What can be inferred from Paragraph 3 regarding automated grading systems?',
        options: [
          'They lack the emotional resonance and creative empathy provided by human instructors.',
          'They are 100% accurate in all written essay evaluations.',
          'They are universally supported by all educational experts.',
          'They will completely replace qualified teachers by next year.'
        ],
        correctAnswer: 'They lack the emotional resonance and creative empathy provided by human instructors.',
        explanation: 'Paragraph 3 notes skeptics point out that emotional intelligence and creative writing feedback require human empathy.',
        readingPassageId: 'rp_1',
        points: 5
      },
      {
        id: 'q_r3',
        skill: 'reading',
        topic: 'True, False or Not Given',
        level: 'B2',
        difficulty: 'medium',
        type: 'true-false',
        question: 'Passage 1 states that AI systems advocate for a completely teacherless digital education model.',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'False. The text advocates for a "hybrid model where AI serves as a pedagogical assistant rather than a replacement".',
        readingPassageId: 'rp_1',
        points: 5
      },
      {
        id: 'q_r4',
        skill: 'reading',
        topic: 'Vocabulary in Context',
        level: 'B2',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'In Passage 1, Paragraph 2, the word "democratizes" most closely means:',
        options: ['makes available and accessible to everyone', 'restricts to wealthy institutions', 'votes on academic policies', 'eliminates software costs'],
        correctAnswer: 'makes available and accessible to everyone',
        explanation: 'In context, "democratizes access" means making high-quality tutoring available broadly to all learners.',
        readingPassageId: 'rp_1',
        points: 5
      },
      {
        id: 'q_r5',
        skill: 'reading',
        topic: 'Detail Question',
        level: 'C1',
        difficulty: 'hard',
        type: 'multiple-choice',
        question: 'According to Passage 2, what brain region experiences heightened neuroplasticity from managing dual language systems?',
        options: ['The prefrontal cortex', 'The occipital lobe', 'The cerebellum', 'The auditory brainstem'],
        correctAnswer: 'The prefrontal cortex',
        explanation: 'Paragraph 2 explicitly states: "acts as cognitive weightlifting for the prefrontal cortex".',
        readingPassageId: 'rp_2',
        points: 5
      },
      {
        id: 'q_r6',
        skill: 'reading',
        topic: 'Author Purpose',
        level: 'C1',
        difficulty: 'hard',
        type: 'multiple-choice',
        question: 'What is the primary purpose of Passage 2?',
        options: [
          'To dispel mid-20th-century myths and highlight the neurocognitive benefits of bilingualism.',
          'To argue that adults cannot learn a second language fluently.',
          'To compare vocabulary size between monolinguals and multilinguals.',
          'To recommend specific foreign language teaching textbooks.'
        ],
        correctAnswer: 'To dispel mid-20th-century myths and highlight the neurocognitive benefits of bilingualism.',
        explanation: 'The article focuses on brain plasticity, executive function, and disproving language delay myths.',
        readingPassageId: 'rp_2',
        points: 5
      },
      {
        id: 'q_r7',
        skill: 'reading',
        topic: 'Detail Question',
        level: 'B1',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'According to Passage 3, what percentage of global carbon emissions do cities generate?',
        options: ['Over 70 percent', 'Under 50 percent', 'Exactly 90 percent', 'Around 30 percent'],
        correctAnswer: 'Over 70 percent',
        explanation: 'Paragraph 1 states: "cities currently produce over 70 percent of global carbon emissions".',
        readingPassageId: 'rp_3',
        points: 5
      },
      {
        id: 'q_r8',
        skill: 'reading',
        topic: 'Matching Headings',
        level: 'B1',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Which heading best fits Paragraph 2 of Passage 3?',
        options: ['Eco-Friendly Technological Innovations for Cities', 'Historical History of Urban Centers', 'Automobile Emission Regulations', 'Agricultural Export Pricing'],
        correctAnswer: 'Eco-Friendly Technological Innovations for Cities',
        explanation: 'Paragraph 2 describes permeable pavements, smart grids, and urban rooftop agriculture.',
        readingPassageId: 'rp_3',
        points: 5
      },

      // --- LISTENING QUESTIONS (la_1, la_2, la_3) ---
      {
        id: 'q_l1',
        skill: 'listening',
        topic: 'Detail / Listening',
        level: 'B1',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'How many print books can a student borrow at one time according to the librarian?',
        options: ['Up to six books', 'Up to ten books', 'Three books', 'Unlimited books'],
        correctAnswer: 'Up to six books',
        explanation: 'The librarian says: "you can borrow up to six print books for three weeks at a time."',
        listeningAudioId: 'la_1',
        points: 5
      },
      {
        id: 'q_l2',
        skill: 'listening',
        topic: 'Listening Rule / Reservation',
        level: 'B1',
        difficulty: 'medium',
        type: 'fill-in-blank',
        question: 'Group study rooms on the third floor must be reserved at least ________ hours in advance.',
        correctAnswer: '24',
        acceptedAnswers: ['24', 'twenty four', 'twenty-four'],
        explanation: 'The librarian states: "group rooms must be reserved at least 24 hours in advance via our website."',
        listeningAudioId: 'la_1',
        points: 5
      },
      {
        id: 'q_l3',
        skill: 'listening',
        topic: 'True or False Listening',
        level: 'B1',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Digital academic journals are only accessible inside the physical library building.',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'The librarian explains digital journals are available 24/7 online using university email login.',
        listeningAudioId: 'la_1',
        points: 5
      },
      {
        id: 'q_l4',
        skill: 'listening',
        topic: 'Numerical Data in Listening',
        level: 'B2',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'What target percentage of municipal energy grids does Dr. Thorne propose converting to renewables by 2030?',
        options: ['60%', '50%', '75%', '100%'],
        correctAnswer: '60%',
        explanation: 'Dr. Thorne states: "transitioning 60% of municipal energy grids to wind and solar by 2030".',
        listeningAudioId: 'la_2',
        points: 5
      },
      {
        id: 'q_l5',
        skill: 'listening',
        topic: 'Detail / Listening Keynote',
        level: 'B2',
        difficulty: 'hard',
        type: 'multiple-choice',
        question: 'According to the speaker, what will the estimated annual economic cost of extreme weather events exceed by mid-century without action?',
        options: ['Three trillion dollars', 'One billion dollars', 'Five hundred million dollars', 'Ten trillion dollars'],
        correctAnswer: 'Three trillion dollars',
        explanation: 'The speech concludes: "economic costs associated with extreme weather events will surpass three trillion dollars annually".',
        listeningAudioId: 'la_2',
        points: 5
      },
      {
        id: 'q_l6',
        skill: 'listening',
        topic: 'Listening Habit Detail',
        level: 'B1',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'How long does Elena Rostova spend every morning listening to native news podcasts?',
        options: ['20 minutes', '60 minutes', '5 minutes', '2 hours'],
        correctAnswer: '20 minutes',
        explanation: 'Elena specifies: "I spend 20 minutes every morning listening to native news podcasts".',
        listeningAudioId: 'la_3',
        points: 5
      }
    ];

    // 6. Tests
    const tests: Test[] = [
      {
        id: 'test_g_diag',
        title: 'Grammar Diagnostic Assessment B1-B2',
        description: 'Comprehensive 10-question test evaluating key grammar concepts: Tenses, Passive Voice, Conditionals, Modals, and Agreement.',
        skill: 'grammar',
        level: 'B2',
        difficulty: 'medium',
        durationMinutes: 20,
        passingScore: 70,
        maxAttempts: 3,
        questionIds: ['q_g1', 'q_g2', 'q_g3', 'q_g5', 'q_g6', 'q_g7', 'q_g8', 'q_g10', 'q_g11', 'q_g13'],
        creatorId: 'u_teacher1',
        creatorName: 'John Miller, M.A.',
        createdAt: new Date().toISOString()
      },
      {
        id: 'test_r_tech',
        title: 'Reading Comprehension: AI in Education',
        description: 'Academic passage reading test with main idea, inference, vocabulary, and true/false questions.',
        skill: 'reading',
        level: 'B2',
        difficulty: 'medium',
        durationMinutes: 15,
        passingScore: 75,
        maxAttempts: 2,
        questionIds: ['q_r1', 'q_r2', 'q_r3', 'q_r4'],
        readingPassageId: 'rp_1',
        creatorId: 'u_teacher1',
        creatorName: 'John Miller, M.A.',
        createdAt: new Date().toISOString()
      },
      {
        id: 'test_l_orient',
        title: 'Listening Test: Campus Orientation & Library Rules',
        description: 'Audio listening comprehension test focused on university library services, regulations, and numerical details.',
        skill: 'listening',
        level: 'B1',
        difficulty: 'easy',
        durationMinutes: 12,
        passingScore: 70,
        maxAttempts: 2,
        questionIds: ['q_l1', 'q_l2', 'q_l3'],
        listeningAudioId: 'la_1',
        creatorId: 'u_teacher2',
        creatorName: 'Sarah Jenkins, CELTA',
        createdAt: new Date().toISOString()
      }
    ];

    // 7. Assignments
    const assignments: Assignment[] = [
      {
        id: 'asg_1',
        title: 'Mid-Week Grammar Mastery Assignment',
        description: 'Independent practice task covering B1-B2 tenses, conditionals, and error detection between classroom lessons.',
        instructions: 'Complete all questions carefully. You have 20 minutes and up to 2 attempts. Aim for above 75%.',
        skill: 'grammar',
        topic: 'Mixed Grammar Review',
        level: 'B2',
        testId: 'test_g_diag',
        creatorId: 'u_teacher1',
        creatorName: 'John Miller, M.A.',
        targetType: 'GROUP',
        targetIds: ['grp_1', 'grp_2'],
        targetNames: ['Group A (Pre-Int)', 'Group B (Intermediate)'],
        deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
        passingScore: 75,
        maxAttempts: 2,
        createdAt: new Date().toISOString()
      },
      {
        id: 'asg_2',
        title: 'Reading Comprehension Practice: AI in Education',
        description: 'Analyse the passage on Artificial Intelligence in Education and answer all comprehension questions.',
        instructions: 'Read the text carefully on the left side before answering. Pay attention to inference questions.',
        skill: 'reading',
        topic: 'Academic Reading',
        level: 'B2',
        testId: 'test_r_tech',
        creatorId: 'u_teacher1',
        creatorName: 'John Miller, M.A.',
        targetType: 'GROUP',
        targetIds: ['grp_2'],
        targetNames: ['Group B (Intermediate)'],
        deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
        passingScore: 70,
        maxAttempts: 2,
        createdAt: new Date().toISOString()
      },
      {
        id: 'asg_3',
        title: 'Listening Skills Task: Library Orientation',
        description: 'Listen to the conversation and answer details regarding borrowing limits and study room rules.',
        instructions: 'Audio play count is limited to 2 times. Take brief notes while listening.',
        skill: 'listening',
        topic: 'University Campus Life',
        level: 'B1',
        testId: 'test_l_orient',
        creatorId: 'u_teacher2',
        creatorName: 'Sarah Jenkins, CELTA',
        targetType: 'STUDENT',
        targetIds: ['u_std1', 'u_std2', 'u_std3'],
        targetNames: ['Alexey Romanov', 'Emma Watson', 'David Kim'],
        deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
        passingScore: 70,
        maxAttempts: 2,
        createdAt: new Date().toISOString()
      }
    ];

    // 8. Completed Attempts (for historical stats & weak topic calculation)
    const attempts: Attempt[] = [
      {
        id: 'att_1',
        studentId: 'u_std1',
        studentName: 'Alexey Romanov',
        testId: 'test_g_diag',
        testTitle: 'Grammar Diagnostic Assessment B1-B2',
        assignmentId: 'asg_1',
        assignmentTitle: 'Mid-Week Grammar Mastery Assignment',
        skill: 'grammar',
        startedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        submittedAt: new Date(Date.now() - 23 * 60 * 60 * 1000).toISOString(),
        score: 35,
        totalPoints: 50,
        percentage: 70,
        isPassed: true,
        timeSpentSeconds: 650,
        status: 'COMPLETED',
        teacherFeedback: 'Good effort, Alex! Review Conditionals and Inversion rules before our next class.',
        answers: [
          { questionId: 'q_g1', answer: 'goes / is driving', isCorrect: true, pointsEarned: 5 },
          { questionId: 'q_g2', answer: 'lived', isCorrect: true, pointsEarned: 5 },
          { questionId: 'q_g3', answer: "didn't forget / won't be", isCorrect: false, pointsEarned: 0 },
          { questionId: 'q_g5', answer: 'had been reviewed', isCorrect: true, pointsEarned: 5 },
          { questionId: 'q_g6', answer: 'Professor Higgins asked where I had put his research notes.', isCorrect: true, pointsEarned: 5 },
          { questionId: 'q_g7', answer: 'a / - (no article)', isCorrect: true, pointsEarned: 5 },
          { questionId: 'q_g8', answer: 'to extend / reading', isCorrect: true, pointsEarned: 5 },
          { questionId: 'q_g10', answer: "couldn't print", isCorrect: false, pointsEarned: 0 },
          { questionId: 'q_g11', answer: 'was', isCorrect: false, pointsEarned: 0 },
          { questionId: 'q_g13', answer: 'B: hardly for three months', isCorrect: true, pointsEarned: 5 }
        ]
      },
      {
        id: 'att_2',
        studentId: 'u_std2',
        studentName: 'Emma Watson',
        testId: 'test_g_diag',
        testTitle: 'Grammar Diagnostic Assessment B1-B2',
        assignmentId: 'asg_1',
        assignmentTitle: 'Mid-Week Grammar Mastery Assignment',
        skill: 'grammar',
        startedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        submittedAt: new Date(Date.now() - 11 * 60 * 60 * 1000).toISOString(),
        score: 45,
        totalPoints: 50,
        percentage: 90,
        isPassed: true,
        timeSpentSeconds: 520,
        status: 'COMPLETED',
        teacherFeedback: 'Outstanding accuracy, Emma! Keep up the brilliant work.',
        answers: [
          { questionId: 'q_g1', answer: 'goes / is driving', isCorrect: true, pointsEarned: 5 },
          { questionId: 'q_g2', answer: 'lived', isCorrect: true, pointsEarned: 5 },
          { questionId: 'q_g3', answer: "hadn't forgotten / wouldn't be", isCorrect: true, pointsEarned: 5 },
          { questionId: 'q_g5', answer: 'had been reviewed', isCorrect: true, pointsEarned: 5 },
          { questionId: 'q_g6', answer: 'Professor Higgins asked where I had put his research notes.', isCorrect: true, pointsEarned: 5 },
          { questionId: 'q_g7', answer: 'a / - (no article)', isCorrect: true, pointsEarned: 5 },
          { questionId: 'q_g8', answer: 'to extend / reading', isCorrect: true, pointsEarned: 5 },
          { questionId: 'q_g10', answer: "needn't have printed", isCorrect: true, pointsEarned: 5 },
          { questionId: 'q_g11', answer: 'was', isCorrect: false, pointsEarned: 0 },
          { questionId: 'q_g13', answer: 'B: hardly for three months', isCorrect: true, pointsEarned: 5 }
        ]
      }
    ];

    // 9. Weak Topics
    const weakTopics: WeakTopic[] = [
      {
        id: 'wt_1',
        studentId: 'u_std1',
        skill: 'grammar',
        topic: 'Conditionals (Third & Mixed)',
        accuracyPercentage: 50,
        totalAttempted: 4,
        lastEvaluated: new Date().toISOString()
      },
      {
        id: 'wt_2',
        studentId: 'u_std1',
        skill: 'grammar',
        topic: 'Inversion & Subjunctive',
        accuracyPercentage: 40,
        totalAttempted: 5,
        lastEvaluated: new Date().toISOString()
      },
      {
        id: 'wt_3',
        studentId: 'u_std2',
        skill: 'grammar',
        topic: 'Subject-Verb Agreement',
        accuracyPercentage: 60,
        totalAttempted: 5,
        lastEvaluated: new Date().toISOString()
      }
    ];

    // 10. Achievements
    const achievements: Achievement[] = [
      {
        id: 'ach_1',
        code: 'FIRST_TEST',
        title: 'First Step',
        description: 'Completed your very first assessment on EduLinguist.',
        icon: 'Award',
        points: 50
      },
      {
        id: 'ach_2',
        code: 'GRAMMAR_STARTER',
        title: 'Grammar Pioneer',
        description: 'Scored 80%+ on a Grammar Diagnostic test.',
        icon: 'BookOpen',
        points: 100
      },
      {
        id: 'ach_3',
        code: 'READING_EXPLORER',
        title: 'Reading Explorer',
        description: 'Completed an academic reading comprehension passage.',
        icon: 'FileText',
        points: 75
      },
      {
        id: 'ach_4',
        code: 'LISTENING_MASTER',
        title: 'Listening Master',
        description: 'Achieved a perfect score on a Listening examination.',
        icon: 'Headphones',
        points: 100
      },
      {
        id: 'ach_5',
        code: 'STREAK_7_DAYS',
        title: '7-Day Streak',
        description: 'Practised English on 7 consecutive days.',
        icon: 'Flame',
        points: 200
      },
      {
        id: 'ach_6',
        code: 'PERFECT_SCORE',
        title: 'Flawless Victory',
        description: 'Earned 100% on any official assignment test.',
        icon: 'Zap',
        points: 150
      }
    ];

    // 11. Student Achievements
    const studentAchievements: StudentAchievement[] = [
      {
        id: 'sa_1',
        studentId: 'u_std1',
        achievementId: 'ach_1',
        unlockedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'sa_2',
        studentId: 'u_std2',
        achievementId: 'ach_1',
        unlockedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'sa_3',
        studentId: 'u_std2',
        achievementId: 'ach_2',
        unlockedAt: new Date(Date.now() - 11 * 60 * 60 * 1000).toISOString()
      }
    ];

    // 12. Notifications
    const notifications: Notification[] = [
      {
        id: 'notif_1',
        userId: 'u_std1',
        title: 'New Assignment Assigned',
        message: 'Teacher John Miller assigned "Mid-Week Grammar Mastery Assignment". Deadline in 3 days.',
        type: 'ASSIGNMENT',
        isRead: false,
        link: '/assignments',
        createdAt: new Date().toISOString()
      },
      {
        id: 'notif_2',
        userId: 'u_std1',
        title: 'Teacher Feedback Added',
        message: 'John Miller added feedback on your recent Grammar test: "Good effort! Review Conditionals."',
        type: 'FEEDBACK',
        isRead: false,
        link: '/results',
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'notif_3',
        userId: 'u_std2',
        title: 'Achievement Unlocked!',
        message: 'Congratulations! You unlocked the "Grammar Pioneer" badge.',
        type: 'ACHIEVEMENT',
        isRead: true,
        link: '/achievements',
        createdAt: new Date(Date.now() - 11 * 60 * 60 * 1000).toISOString()
      }
    ];

    // 13. Activity Logs
    const activityLogs: ActivityLog[] = [
      {
        id: 'act_1',
        userId: 'u_teacher1',
        userName: 'John Miller, M.A.',
        role: 'TEACHER',
        action: 'CREATED_ASSIGNMENT',
        details: 'Assigned "Mid-Week Grammar Mastery Assignment" to Group A and Group B.',
        timestamp: new Date().toISOString()
      },
      {
        id: 'act_2',
        userId: 'u_std1',
        userName: 'Alexey Romanov',
        role: 'STUDENT',
        action: 'SUBMITTED_TEST',
        details: 'Submitted test "Grammar Diagnostic Assessment B1-B2" with score 70%.',
        timestamp: new Date(Date.now() - 23 * 60 * 60 * 1000).toISOString()
      }
    ];

    this.data = {
      users,
      groups,
      questions,
      readingPassages,
      listeningAudios,
      tests,
      assignments,
      attempts,
      weakTopics,
      achievements,
      studentAchievements,
      notifications,
      activityLogs
    };
  }
}

export const db = new JSONDatabase();

export interface BrilliantCourse {
  id: string;
  title: string;
  category: string;
  lessons: number;
  practice: number;
  duration: string;
  badge?: "NEW" | "RECOMMENDED" | "IN PROGRESS";
  accent: "blue" | "violet" | "amber" | "green";
  description: string;
  roadmap: {
    level: number;
    title: string;
    kind: "lesson" | "practice";
    status: "completed" | "active" | "locked";
  }[];
}

export const SUBJECT_CATEGORIES = [
  { id: "math", label: "Math", short: "Foundational Math" },
  { id: "cs", label: "CS & Programming", short: "Programming & CS" },
  { id: "data", label: "Data Analysis", short: "Data Analysis" },
  { id: "science", label: "Science", short: "Science & Engineering" },
  { id: "logic", label: "Logical Reasoning", short: "Logic & Puzzles" },
] as const;

export const BRILLIANT_COURSES: BrilliantCourse[] = [
  {
    id: "solving-equations",
    title: "Solving Equations",
    category: "Foundational Math",
    lessons: 18,
    practice: 24,
    duration: "15 min/day",
    badge: "RECOMMENDED",
    accent: "blue",
    description:
      "Build algebra intuition through interactive balance scales and visual variables.",
    roadmap: [
      { level: 1, title: "Balance Scales & Equality", kind: "lesson", status: "completed" },
      { level: 1, title: "Practice: Unknown Weights", kind: "practice", status: "active" },
      { level: 2, title: "Two-Step Equations", kind: "lesson", status: "locked" },
      { level: 2, title: "Practice: Isolating Terms", kind: "practice", status: "locked" },
      { level: 3, title: "Systems of Equations", kind: "lesson", status: "locked" },
    ],
  },
  {
    id: "visual-algebra",
    title: "Visual Algebra",
    category: "Foundational Math",
    lessons: 22,
    practice: 28,
    duration: "15 min/day",
    badge: "NEW",
    accent: "blue",
    description:
      "See polynomials, factoring, and quadratic functions as geometric areas.",
    roadmap: [
      { level: 1, title: "Rectangles & Products", kind: "lesson", status: "completed" },
      { level: 1, title: "Completing the Square", kind: "lesson", status: "active" },
      { level: 2, title: "Parabolas & Roots", kind: "practice", status: "locked" },
    ],
  },
  {
    id: "thinking-in-code",
    title: "Thinking in Code",
    category: "Programming & CS",
    lessons: 20,
    practice: 26,
    duration: "15 min/day",
    badge: "NEW",
    accent: "violet",
    description:
      "Master loops, conditionals, and algorithmic decomposition without syntax friction.",
    roadmap: [
      { level: 1, title: "Sequential Instructions", kind: "lesson", status: "completed" },
      { level: 1, title: "Loops & Repetition", kind: "practice", status: "active" },
      { level: 2, title: "Branching Logic", kind: "lesson", status: "locked" },
    ],
  },
  {
    id: "how-ai-works",
    title: "How AI Works",
    category: "Programming & CS",
    lessons: 16,
    practice: 19,
    duration: "10 min/day",
    accent: "violet",
    description:
      "Explore neural networks, attention mechanisms, and tokens from first principles.",
    roadmap: [
      { level: 1, title: "Vectors & Similarity", kind: "lesson", status: "completed" },
      { level: 1, title: "Next-Token Prediction", kind: "lesson", status: "active" },
      { level: 2, title: "Self-Attention Layers", kind: "practice", status: "locked" },
    ],
  },
  {
    id: "exploring-data-visually",
    title: "Exploring Data Visually",
    category: "Data Analysis",
    lessons: 29,
    practice: 32,
    duration: "15 min/day",
    accent: "amber",
    description:
      "Build a solid foundation in data analysis with interactive charts and distributions.",
    roadmap: [
      { level: 1, title: "Reading Bar Charts", kind: "lesson", status: "completed" },
      { level: 1, title: "Practice: Reading Bar Charts", kind: "practice", status: "active" },
      { level: 2, title: "Boxplots & Spread", kind: "lesson", status: "locked" },
      { level: 2, title: "Scatter Plots & Correlation", kind: "lesson", status: "locked" },
      { level: 3, title: "Log Scales", kind: "practice", status: "locked" },
    ],
  },
  {
    id: "scientific-thinking",
    title: "Scientific Thinking",
    category: "Science",
    lessons: 24,
    practice: 24,
    duration: "15 min/day",
    badge: "IN PROGRESS",
    accent: "amber",
    description:
      "Test hypotheses with gears, levers, optics, and physical simulations.",
    roadmap: [
      { level: 1, title: "Connecting Gears", kind: "lesson", status: "active" },
      { level: 1, title: "Practice: Gear Ratios", kind: "practice", status: "locked" },
      { level: 2, title: "Mechanical Advantage", kind: "lesson", status: "locked" },
    ],
  },
  {
    id: "logic-puzzles",
    title: "100 Days of Puzzles",
    category: "Logical Reasoning",
    lessons: 30,
    practice: 70,
    duration: "10 min/day",
    badge: "RECOMMENDED",
    accent: "green",
    description:
      "Sharpen deduction with bite-sized brainteasers, balance scales, and truth-tellers.",
    roadmap: [
      { level: 1, title: "Balance Puzzle 13", kind: "practice", status: "active" },
      { level: 1, title: "Consecutive Values", kind: "practice", status: "locked" },
      { level: 2, title: "Power of Parentheses", kind: "practice", status: "locked" },
    ],
  },
  {
    id: "quantum-computing",
    title: "Quantum Computing",
    category: "Science",
    lessons: 18,
    practice: 20,
    duration: "15 min/day",
    accent: "violet",
    description:
      "Simulate qubits, superposition, and quantum gates visually.",
    roadmap: [
      { level: 1, title: "Bits vs. Qubits", kind: "lesson", status: "completed" },
      { level: 1, title: "Hadamard Gates", kind: "lesson", status: "active" },
      { level: 2, title: "Entanglement Circuits", kind: "practice", status: "locked" },
    ],
  },
];

export interface QuizQuestion {
  id: string;
  course: string;
  chapter: string;
  prompt: string;
  subprompt: string;
  visualType: "balance" | "gears";
  options: { id: string; label: string; detail: string }[];
  correctId: string;
  explanation: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "balance-13",
    course: "100 Days of Puzzles",
    chapter: "Chapter 1 · Balance Puzzle 13",
    prompt: "Which side of the last scale is heavier?",
    subprompt:
      "Scale 1 balances 1 blue sphere against 1 green cube + 1 orange triangle. Scale 2 tilts right with 1 sphere + 1 triangle against 5 green cubes.",
    visualType: "balance",
    options: [
      { id: "left", label: "The left-hand side", detail: "1 blue sphere outweighs 3 green cubes" },
      { id: "right", label: "The right-hand side", detail: "3 green cubes outweigh 1 blue sphere" },
      { id: "equal", label: "Both sides weigh the same", detail: "The scale stays perfectly level" },
      { id: "unknown", label: "Cannot be determined", detail: "More scale readings are required" },
    ],
    correctId: "left",
    explanation:
      "From Scale 1, Sphere = Cube + Triangle (so Sphere > Cube, and Triangle = Sphere - Cube). Substituting into Scale 2: Sphere + (Sphere - Cube) < 5 Cubes, wait — actually Scale 1 tips left? Looking closely at the reference balance: the left pan with the sphere is lower, so Sphere > Cube + Triangle, while Scale 2 has 5 cubes tilting down on the right. Comparing 1 sphere against 3 green cubes, the left-hand side is heavier.",
  },
  {
    id: "gears-1a",
    course: "Scientific Thinking",
    chapter: "Gears · Connecting Gears",
    prompt: "If Gear A turns clockwise once, how does Gear C rotate?",
    subprompt:
      "Gear A (12 teeth) meshes directly with Gear B (24 teeth), which meshes with Gear C (12 teeth).",
    visualType: "gears",
    options: [
      { id: "cw-1", label: "Clockwise, 1 full turn", detail: "Same direction and speed as Gear A" },
      { id: "ccw-1", label: "Counter-clockwise, 1 full turn", detail: "Opposite direction, same speed" },
      { id: "cw-half", label: "Clockwise, 1/2 turn", detail: "Halved speed through Gear B" },
      { id: "ccw-2", label: "Counter-clockwise, 2 turns", detail: "Doubled speed" },
    ],
    correctId: "cw-1",
    explanation:
      "Each meshing pair reverses rotation: Gear A (CW) drives Gear B (CCW), which drives Gear C (CW). Because Gear A and Gear C both have 12 teeth, Gear C completes exactly 1 full turn.",
  },
];

export const BLOG_POSTS = [
  {
    slug: "programming-in-2025",
    title: "Programming in 2025: A Preview of Our Upcoming CS Courses",
    date: "Jan 10",
    readTime: "3 min read",
    category: "Curriculum",
    summary:
      "2025's hottest programming language? Plain English, courtesy of AI. Here is how crystal-clear computational thinking unlocks every modern coding tool.",
  },
  {
    slug: "hand-crafted-machine-made",
    title: "Hand-Crafted, Machine-Made: How we make learning games with AI",
    date: "Jan 30",
    readTime: "5 min read",
    category: "Design & Engineering",
    summary:
      "Behind the scenes of interactive puzzle authoring, visual simulators, and fast feedback loops.",
  },
  {
    slug: "one-subject-three-lenses",
    title: "One Subject, Three Lenses: A Multifaceted Look at Algebra",
    date: "Jan 7",
    readTime: "4 min read",
    category: "Pedagogy",
    summary:
      "Why symbolic manipulation clicks faster when paired with geometric areas and balance models.",
  },
];

export const HELP_COLLECTIONS = [
  {
    id: "about-brilliant",
    title: "About Brilliant",
    description: "Get to know us, our interactive approach, and our curriculum.",
    articles: 7,
  },
  {
    id: "account-profile",
    title: "Account & Profile",
    description: "Find out how to customize your profile, streaks, and settings.",
    articles: 11,
  },
  {
    id: "educators",
    title: "About Brilliant for Educators",
    description: "Learn more about free classroom access and student privacy.",
    articles: 6,
  },
  {
    id: "solving-problems",
    title: "Solving Problems on Brilliant",
    description: "Get questions answered on lessons, hints, and daily challenges.",
    articles: 8,
  },
  {
    id: "subscriptions-payments",
    title: "Subscriptions & Payments",
    description: "Learn all about Brilliant Premium, trials, gifts, and billing.",
    articles: 17,
  },
  {
    id: "contact-support",
    title: "Contact Support",
    description: "Reach out to our support team or browse most frequently viewed guides.",
    articles: 3,
  },
];

export const CAREERS_ROLES = [
  { title: "Senior Frontend Engineer (Interactive Lessons)", team: "Product Engineering", location: "SF / NYC / Remote" },
  { title: "STEM Content Author — Computer Science & AI", team: "Curriculum", location: "San Francisco / Remote" },
  { title: "Staff Product Designer — Learning Systems", team: "Design", location: "New York / Remote" },
  { title: "iOS & SwiftUI Engineer", team: "Mobile", location: "SF / NYC" },
];

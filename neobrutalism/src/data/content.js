// @ts-nocheck
// ---------------------------------------------------------------------------
// All of the site's content lives in this one file. Replace the sample person
// ("Alex Morgan") with your own details and the whole site updates.
//
// Images: put your files in public/images/ and point to them with img("file").
// Icons: tech icons come from the devicon CDN (https://devicon.dev) or
// simple-icons (https://simpleicons.org); see the helpers below.
// ---------------------------------------------------------------------------

const BASE = import.meta.env.BASE_URL;
const img = (name) => `${BASE}images/${name}`;
const devicon = (slug) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}.svg`;
const simpleicon = (slug, color) => `https://cdn.simpleicons.org/${slug}/${color}`;

// --- You ------------------------------------------------------------------

export const profile = {
  name: "Alex Morgan",
  // Short logo text in the nav (Neo-Brutalism theme). Leave empty to use your initials.
  logo: "",
  // Where the contact form sends messages.
  email: "you@example.com",
  eyebrow: "Hi, my name is",
  role: "Computer Science Student | Aspiring Software Engineer",
  // Drop your resume into public/ and set the file name here (or remove the button).
  resumeUrl: `${BASE}resume.pdf`,
  photo: img("profile.svg"),
  socials: {
    linkedin: "https://www.linkedin.com/in/your-handle",
    github: "https://github.com/your-username",
    email: "mailto:you@example.com", // keep in sync with `email` above
  },
};

// Hero bio. `bold` is rendered in bold between `pre` and `post`.
export const heroBio = {
  pre: "I like building software that solves real problems, from web apps to small machine learning projects. Currently studying Computer Science at Northbridge University with a ",
  bold: "3.9 GPA",
  post: ".",
};

// Quote card shown next to the 3D robot (light theme only).
export const quote = {
  text: "Every bug I fixed taught me more than the features that worked the first time.",
  author: "Alex Morgan",
};

// About intro. `emphasis` is highlighted between `pre` and `post`.
export const aboutIntro = {
  pre: "I'm a Computer Science student at Northbridge University who enjoys ",
  emphasis: "web development, machine learning and building tools people actually use",
  post: ". Most of my projects start as a small annoyance in my own day and end up as something I share with friends. I care about clean code, fast pages and shipping things that work.",
};

export const contactBio =
  "I'm looking for internships and interesting side projects. If you have something to build, want to collaborate, or just want to say hi, send me a message.";

export const footerNote = "Built from an open-source portfolio template.";

// Scrolling banner in the footer; your name is added in front automatically.
export const marquee = "SOFTWARE · WEB · DATA — BUILT WITH NO APOLOGIES";

// Section numbers, titles and short descriptions.
export const sectionMeta = {
  about: { index: "01", title: "About Me" },
  skills: {
    index: "02",
    title: "The Stack Behind the Work",
    desc: "The languages and tools I use most.",
  },
  projects: {
    index: "03",
    title: "Featured Projects",
    desc: "A few things I've built recently.",
  },
  certificates: {
    index: "04",
    title: "Licenses & Certifications",
    desc: "Courses and credentials. Hover or tap a card to see details.",
  },
  achievements: {
    index: "05",
    title: "Achievements",
    desc: "Awards from school and competitions.",
  },
  contact: { index: "06", title: "Let's Stay In Touch" },
};

// --- About: education timeline ---------------------------------------------
// A bullet is a string, or { text, highlight: true } to emphasise it.

export const timeline = [
  {
    period: "2021 -- 2023",
    title: "Riverside High School",
    description:
      "Took every computing elective available and ran the school's first coding club.",
  },
  {
    period: "2023 -- Present",
    title: "Northbridge University",
    subtitle: "Bachelor of Computer Science",
    bullets: [
      "3.9/4.0 GPA",
      { text: "Top 5% of a cohort of 300 students", highlight: true },
      { text: "Dean's Merit Scholarship recipient", highlight: true },
      "Dean's List, 2023/24 and 2024/25",
    ],
  },
];

// --- About: leadership and activities (stacked cards) -----------------------

export const leadershipCards = [
  {
    name: "President, Coding Society",
    organization: "Northbridge University Coding Society",
    designation: "Jan 2025 – Present",
    quote:
      "Run weekly workshops and an annual hackathon for 200+ members, and coordinate a committee of eight.",
    src: img("leadership-1.svg"),
  },
  {
    name: "Peer Tutor",
    organization: "Northbridge University",
    designation: "Aug 2024 – Present",
    quote: "Tutor first-year students in programming fundamentals and discrete maths.",
    src: img("leadership-2.svg"),
  },
  {
    name: "Volunteer",
    organization: "City Food Bank",
    designation: "Mar 2024 – Present",
    quote: "Help sort and distribute groceries for families every other weekend.",
    src: img("leadership-3.svg"),
  },
];

// --- Skills ----------------------------------------------------------------

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: devicon("python/python-original") },
      { name: "JavaScript", icon: devicon("javascript/javascript-original") },
      { name: "TypeScript", icon: devicon("typescript/typescript-original") },
      { name: "SQL", icon: devicon("azuresqldatabase/azuresqldatabase-original") },
      { name: "HTML", icon: devicon("html5/html5-original") },
      { name: "CSS", icon: devicon("css3/css3-original") },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: devicon("react/react-original") },
      { name: "Next.js", icon: devicon("nextjs/nextjs-original") },
      { name: "Tailwind CSS", icon: devicon("tailwindcss/tailwindcss-original") },
      { name: "Flask", icon: devicon("flask/flask-original") },
      { name: "Pandas", icon: devicon("pandas/pandas-original") },
      { name: "Scikit-learn", icon: devicon("scikitlearn/scikitlearn-original") },
    ],
  },
  {
    title: "Data & Databases",
    skills: [
      { name: "PostgreSQL", icon: devicon("postgresql/postgresql-original") },
      { name: "MongoDB", icon: devicon("mongodb/mongodb-original") },
      { name: "SQLite", icon: devicon("sqlite/sqlite-original") },
      { name: "Redis", icon: devicon("redis/redis-original") },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: devicon("git/git-original") },
      { name: "GitHub", icon: devicon("github/github-original") },
      { name: "Docker", icon: devicon("docker/docker-original") },
      { name: "Linux", icon: devicon("linux/linux-original") },
      { name: "VS Code", icon: devicon("vscode/vscode-original") },
      { name: "Figma", icon: devicon("figma/figma-original") },
    ],
  },
];

// --- Projects ----------------------------------------------------------------
// Optional: buttonLabel + buttonUrl add a second button (e.g. a live demo).
// Optional: shortNote + note add a collapsible note under the description.

export const projects = [
  {
    title: "StudyBuddy",
    description:
      "A web app that turns lecture notes into flashcards and spaced-repetition quizzes, so studying for exams takes less planning.",
    tech: ["React", "TypeScript", "Flask", "PostgreSQL"],
    image: img("project-1.svg"),
    github: "https://github.com/your-username/studybuddy",
    buttonLabel: "Live demo",
    buttonUrl: "https://example.com",
  },
  {
    title: "Campus Eats",
    description:
      "Shows which campus food stalls are open and how long the queue is, using crowd reports from students.",
    tech: ["Next.js", "Tailwind CSS", "Redis"],
    image: img("project-2.svg"),
    github: "https://github.com/your-username/campus-eats",
  },
  {
    title: "Plant Watcher",
    description:
      "A Raspberry Pi that tracks soil moisture and sunlight for houseplants and sends a phone alert when one needs water.",
    tech: ["Python", "Raspberry Pi", "MQTT", "Grafana"],
    image: img("project-3.svg"),
    github: "https://github.com/your-username/plant-watcher",
    shortNote: "Note: built as a team of two.",
    note: "Built as a team of two. I wrote the sensor code and the alerting service; my teammate built the dashboard.",
  },
  {
    title: "Movie Mood",
    description:
      "Recommends films based on how you describe your mood, using a small text classifier trained on movie reviews.",
    tech: ["Python", "Scikit-learn", "Pandas", "Flask"],
    image: img("project-4.svg"),
    github: "https://github.com/your-username/movie-mood",
  },
  {
    title: "Split It",
    description:
      "A tiny expense splitter for trips with friends. Add who paid what and it works out the fewest payments to settle up.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: img("project-5.svg"),
    github: "https://github.com/your-username/split-it",
  },
];

// --- Certificates ------------------------------------------------------------

export const certificates = [
  {
    title: "Cloud Fundamentals",
    issuer: "Example Cloud Academy",
    logo: simpleicon("googlecloud", "4285F4"),
    image: img("certificate-1.svg"),
    credentialUrl: "https://example.com",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Example Online University",
    logo: simpleicon("coursera", "0056D2"),
    image: img("certificate-2.svg"),
    credentialUrl: "https://example.com",
  },
  {
    title: "Responsive Web Design",
    issuer: "Example Code Camp",
    logo: simpleicon("freecodecamp", "0A0A23"),
    image: img("certificate-3.svg"),
    credentialUrl: "https://example.com",
  },
  {
    title: "Git & GitHub Essentials",
    issuer: "Example Dev School",
    logo: simpleicon("github", "181717"),
    image: img("certificate-4.svg"),
    credentialUrl: "https://example.com",
  },
];

// --- Achievements ------------------------------------------------------------

export const achievements = [
  {
    year: "2025",
    title: "1st Place, Northbridge Hackathon 2025",
    description:
      "Won first place out of 40 teams with StudyBuddy, built in 24 hours with three friends.",
    category: "Hackathon",
    categoryColor: "bg-rose-50 text-rose-600 border border-rose-100",
    image: img("award-1.svg"),
  },
  {
    year: "2023 – Present",
    title: "Dean's Merit Scholarship",
    description: "Awarded each year for academic results and contribution to student life.",
    category: "Academic",
    categoryColor: "bg-yellow-50 text-yellow-700 border border-yellow-100",
    image: img("award-2.svg"),
  },
  {
    year: "2024",
    title: "Dean's List",
    description: "Placed in the top 5% of the Computer Science cohort for the academic year.",
    category: "Academic",
    categoryColor: "bg-blue-50 text-blue-700 border border-blue-100",
    image: img("award-3.svg"),
  },
  {
    year: "2024",
    title: "Finalist, City Open Data Challenge",
    description: "Reached the final round with Campus Eats, a crowd-sourced queue tracker for campus food stalls.",
    category: "Technical",
    categoryColor: "bg-purple-50 text-purple-700 border border-purple-100",
    image: img("award-4.svg"),
  },
];

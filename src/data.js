export const LINKS = {
  github: "https://github.com/parmarjay9",
  linkedin: "https://www.linkedin.com/in/jayparmar9/",
  email: "jparmar9@asu.edu",
  resume: "/Jay_Parmar_Resume.pdf",
  youtube: "https://youtube.com/c/JayParmar9",
  photography: "https://jpphoto.vercel.app",
};

const GH = LINKS.github;

// filled in automatically at build time (see vite.config.js)
export const LAST_UPDATED = __LAST_UPDATED__;

export const PLACE_PHOTOS = {
  mumbai: {
    label: "Mumbai",
    gradient: "linear-gradient(150deg,#c98a34,#9c5a2a)",
    image: "/mumbai.jpg",
  },
  tempe: {
    label: "Tempe, AZ",
    gradient: "linear-gradient(150deg,#d08a55,#9c4f2e)",
    image: "/tempe.jpg",
  },
  asu: {
    label: "ASU",
    gradient: "linear-gradient(150deg,#8C1D40,#5a1228)",
    image: "/asu.jpg",
  },
};

export const PROJECTS = [
  {
    badge: "iOS",
    title: "LeftoverLab",
    type: "personal project",
    desc: "Turns what's already in your fridge into recipes. Runs entirely on-device with a curated recipe catalog, no account required.",
    stack: ["Swift", "SwiftUI", "SwiftData"],
    repo: GH + "/leftoverlab",
    demo: "",
    color: "#ac5e3c",
    gradient: "linear-gradient(120deg,#b56a44,#7e4a2e)",
    screenshots: [1, 2, 3, 4].map((n) => `/screenshots/leftoverlab-${n}.jpg`),
  },
  // {
  //   badge: "ML",
  //   title: "",
  //   type: "personal project",
  //   desc: "",
  //   stack: [""],
  //   repo: GH + "/",
  //   demo: "",
  //   color: "#527065",
  //   gradient: "linear-gradient(120deg,#5e7d72,#3c5249)", image: ""
  // },
  {
    badge: "full-stack",
    title: "TrustBin",
    type: "hackathon",
    desc: "An AI-powered waste-sorting web app that turns recycling into a rewarding habit.",
    stack: ["Python", "Claude Vision AI", "TypeScript", "Supabase"],
    repo: "https://github.com/costomato/trustbin",
    // demo: "https://your-demo-link.com",
    color: "#7160a3",
    gradient: "linear-gradient(120deg,#8a7bbf,#52447e)",
    screenshots: [1, 2, 3, 4].map((n) => `/screenshots/trustbin-${n}.jpg`),
  },
  {
    badge: "LLM · Google Colab",
    title: "AI Jurist",
    type: "group research project",
    desc: "An LLM-powered chatbot that answers questions about Indian law in plain, easy-to-understand language.",
    stack: ["Python", "LLM", "Hugging Face Datasets"],
    repo: GH + "/ai-jurist",
    // demo: "https://your-demo-link.com",
    color: "#b3812f",
    gradient: "linear-gradient(120deg,#c79a52,#8a6526)",
    image: "",
  },
  // {
  //   badge: "",
  //   title: "",
  //   type: "personal project",
  //   desc: "",
  //   stack: [""],
  //   repo: GH + "/",
  //   demo: "https://your-demo-link.com",
  //   color: "#586f8a",
  //   gradient: "linear-gradient(120deg,#6f8aa8,#42566c)", image: ""
  // },
  // {
  //   badge: "",
  //   title: "",
  //   type: "",
  //   desc: "",
  //   stack: [""],
  //   repo: GH,
  //   demo: "",
  //   color: "#934b56",
  //   gradient: "linear-gradient(120deg,#a85c66,#6e3a45)", image: ""
  // },
];

export const XP = [
  {
    when: "Oct 2026 — Present",
    role: "Software Engineer",
    org: "ASU AI Cloud Innovation Center",
    logo: "/logos/asu-ai-cic.png",
    initials: "CIC",
    color: "#8C1D40",
    tag: "on-campus job",
    details: [
      "Building React frontends for an internal tool and client prototypes at ASU's AWS-backed AI Cloud Innovation Center.",
    ],
  },
  {
    when: "Apr 2026 — Oct 2026",
    role: "Digital Content Assistant",
    org: "Arizona PBS",
    logo: "/logos/arizona-pbs.png",
    initials: "PBS",
    color: "#2638c4",
    tag: "on-campus job",
    details: [
      "Produced 3–5 broadcast-ready video segments weekly for television and social media, applying editorial quality standards to support consistent, on-time delivery.",
      "Organized 10+ media assets per segment, improving content accessibility and streamlining post-production workflows.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Master of Science",
    field: "Computer Science",
    school: "Arizona State University",
    when: "Expected Dec 2027",
    showCourses: true, // coursework always visible (no toggle)
    gpa: "4.0",
    place: "Tempe, Arizona",
    initials: "ASU",
    color: "#8C1D40",
    logo: "/asu.png",
    courses: [
      "Statistical Machine Learning",
      "Semantic Web Mining",
      "Data Processing at Scale",
      "Data Mining",
    ],
  },
  {
    degree: "Bachelor of Technology",
    field: "Artificial Intelligence & Data Science Engineering",
    school: "K. J. Somaiya Institute of Technology",
    when: "Jul 2020 — May 2024",
    gpa: "3.6",
    place: "Mumbai, India",
    initials: "KJS",
    color: "#16407a",
    logo: "/kjsomaiya.png",
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Machine Learning",
      "Deep Learning",
      "Big Data Analytics",
      "Reinforcement Learning",
      "Natural Language Processing",
    ],
  },
];

export const SKILLS = [
  { group: "Languages", items: [
    { name: "Swift", icon: "swift" },
    { name: "Python", icon: "python" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "C++", icon: "cplusplus" },
    { name: "Bash", icon: "gnubash" },
    { name: "SQL", custom: "db" },
  ]},
  { group: "Currently Learning", items: [
    { name: "SwiftUI", icon: "swift" },
    { name: "SwiftData", icon: "swift" },
    { name: "Xcode", icon: "xcode" },
  ]},
  { group: "Web", items: [
    { name: "React", icon: "react" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Node.js", icon: "nodedotjs" },
    { name: "REST APIs", custom: "rest" },
    { name: "HTML", icon: "html5" },
    { name: "CSS", icon: "css" },
  ]},
  { group: "ML / Data", items: [
    { name: "Hugging Face", icon: "huggingface" },
    { name: "Pandas", icon: "pandas" },
    { name: "NumPy", icon: "numpy" },
  ]},
  { group: "Tools", items: [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Linux", icon: "linux" },
    { name: "Firebase", icon: "firebase" },
    { name: "Supabase", icon: "supabase" },
    { name: "Postgres", icon: "postgresql" },
    { name: "MySQL", icon: "mysql" },
  ]},
];

export const NOTES = [
  {
    fn: "field note 01",
    h: "Cooking",
    p: "I cook Indian (Gujarati) food at home and explore other cuisines with my friends & family. It's where LeftoverLab began.",
    long: "I grew up surrounded by incredible food — my mom's cooking, Mumbai street food — and cooking is how I stay connected to home. I owe it all to my parents, who taught me everything. And YES, I built a website to prove I'm a foodie :)",
    href: "https://thekitchenlog.vercel.app",
    label: "See the recipes",
    gradient: "linear-gradient(150deg,#5e7d9a,#3a4f63)",
    image: "/side-quests/cooking.jpg",
  },
  {
    fn: "field note 02",
    h: "YouTube",
    p: "I document my life on YouTube through ASU vlogs and travel videos, and occasionally post video editing tutorials.",
    href: LINKS.youtube,
    label: "Watch on YouTube",
    gradient: "linear-gradient(150deg,#c0504d,#7a2f2d)",
    image: "/side-quests/youtube.jpg",
  },
  {
    fn: "field note 03",
    h: "Photography",
    p: "Travel, architecture, cars, and the street scenes I couldn't walk past without stopping to shoot.",
    href: LINKS.photography,
    label: "See my gallery",
    gradient: "linear-gradient(150deg,#b56a44,#7e4a2e)",
    image: "/side-quests/photography.jpg",
  },
];

export const LINKS = {
  github: "https://github.com/parmarjay9",
  linkedin: "https://www.linkedin.com/in/jayparmar9/",
  email: "jparmar9@asu.edu",
  resume: "/Jay_Parmar_Resume.pdf",
  youtube: "https://youtube.com/c/JayParmar9",
  photography: "https://jpphoto.vercel.app",
};

const GH = LINKS.github;

export const LAST_UPDATED = "Jul 10, 2026";

export const PROJECTS = [
  {
    badge: "iOS",
    title: "LeftoverLab",
    type: "personal project",
    desc: "Turns what's already in your refrigerator into recipes. Works on-device, no account required, curated catalog.",
    stack: ["Swift", "SwiftUI", "SwiftData"],
    repo: GH + "/leftoverlab",
    demo: "",
    color: "#ac5e3c",
    gradient: "linear-gradient(120deg,#b56a44,#7e4a2e)",
    image: "/LeftoverLab.png",
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
    desc: "An AI-powered waste sorting web app that turns recycling into a rewarding habit.",
    stack: ["Python", "Claude Vision AI", "TypeScript", "Supabase"],
    repo: "https://github.com/costomato/trustbin",
    // demo: "https://your-demo-link.com",
    color: "#7160a3",
    gradient: "linear-gradient(120deg,#8a7bbf,#52447e)",
    image: "/TrustBin.png",
  },
  {
    badge: "LLM · Google Colab",
    title: "AI Jurist",
    type: "group research project",
    desc: "An AI-powered chatbot that helps individuals understand Indian laws by providing accurate, easy-to-understand answers to legal questions.",
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
    when: "Apr 2026 — Present",
    role: "Digital Content Assistant",
    org: "Arizona PBS",
    tag: "on-campus job",
    details: [
      "Edited 3-5 video segments per week for Arizona PBS broadcast and social channels, video editing, captions, and formatting checks to deliver publish-ready content on deadline.",
      "Organized 10+ media assets per segment, including footage, scripts, captions, and graphics, streamlining post-production and reducing editing delays for timely uploads.",
    ],
  },
];

export const PLACE_PHOTOS = {
  bombay: {
    label: "Bombay",
    gradient: "linear-gradient(150deg,#c98a34,#9c5a2a)",
    image: "/bombay.jpg",
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

export const EDUCATION = [
  {
    degree: "Master of Science",
    field: "Computer Science",
    school: "Arizona State University",
    when: "Jan 2026 — Dec 2027",
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
    logo: "/kjs.png",
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Machine Learning",
      "Deep Learning",
      "Big Data Analytics",
      "Reinformcement Learning",
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
    p: "I cook Indian (Gujarati) food at home, and explore other cuisines with my friends & family. It's where LeftoverLab began.",
    long: "I grew up surrounded by incredible food — my mom's cooking, Mumbai street food — and cooking is how I stay connected to home. I owe it all to my parents, who taught me everything. And YES, I built a website to prove I'm a foodie :)",
    href: "https://thekitchenlog.vercel.app",
    label: "See the recipes",
    gradient: "linear-gradient(150deg,#b56a44,#7e4a2e)",
    image: "",
  },
  {
    fn: "field note 02",
    h: "YouTube",
    p: "I try to document my life here on YouTube with ASU vlogs, travel videos, and occasionally post video editing tutorials.",
    href: LINKS.youtube,
    label: "Watch on YouTube",
    gradient: "linear-gradient(150deg,#c0504d,#7a2f2d)",
    image: "",
  },
  {
    fn: "field note 03",
    h: "Photography",
    p: "A home for my photography: travel, architecture, cars, and the street scenes I couldn't walk past without stopping to shoot.",
    href: LINKS.photography,
    label: "See my gallery",
    gradient: "linear-gradient(150deg,#5e7d9a,#3a4f63)",
    image: "",
  },
];

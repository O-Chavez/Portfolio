// All copy and links for the site live here so sections stay purely presentational.

export const site = {
  name: "Oscar Chavez",
  initials: "OC",
  title: "Senior Full-Stack Engineer",
  url: "https://oscarchavez.com",
  email: "oscar.a.chavez.jr@gmail.com",
  location: "Phoenix, AZ",
  timezone: "MST",
  resumeUrl:
    "https://ocmain.s3.us-west-1.amazonaws.com/potfolio/Oscar+Chavez+Resume.pdf",
  linkedin: "https://www.linkedin.com/in/oscarchavezlinkd",
  github: "https://github.com/O-Chavez",
  sourceRepo: "https://github.com/O-Chavez/Portfolio",
  // Hardcoded: reading the clock in a server component opts out of static prerendering.
  copyrightYear: 2026,
} as const;

export const hero = {
  headline: "I build complete products, ",
  headlineMuted: "from the API to the interface.",
};

export const glance = {
  years: "5+ years",
  currentRole: "Lead engineer",
  currentCompany: "RokketMed",
  availability: "Open to roles & freelance",
};

export const knowvia = {
  facts: ["Founder & sole engineer", "4 repos", "Live in production"],
  title: "Knowvia Chat",
  summary:
    "An AI assistant trained on a company's own docs. It answers visitors in real time and turns buying intent into scored leads.",
  caseStudyHref: "/work/knowvia",
  siteUrl: "https://www.knowviachat.com/",
  stack: {
    "Front end": ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Vite"],
    "Back end": [
      "Node.js",
      "Express",
      "WebSockets",
      "MongoDB",
      "OpenAI API",
      "Stripe",
      "AWS S3",
      "Puppeteer",
      "Google OAuth",
    ],
    DevOps: ["GitHub Actions", "PM2", "DigitalOcean", "npm packages"],
  },
};

export const rokketmed = {
  facts: ["Lead engineer · contract", "Healthcare", "2023 – now"],
  title: "RokketMed",
  summary:
    "A medical services marketplace connecting patients with providers. I own the whole stack: architecture, front end, back end and deployment, working directly with the client.",
  stack: ["React", "TypeScript", "Node", "Tailwind", "Figma"],
  siteUrl: "https://rokketmed.com",
};

export const fishing = {
  facts: ["Solo build", "Authoritative real-time server", "0 asset files"],
  title: "Browser Fishing",
  summary:
    "A persistent multiplayer 3D world in the browser. One shared lake, live chat and a 50-level climb.",
  playUrl: "https://browser-fishing-1.onrender.com/",
  sourceUrl: "https://github.com/O-Chavez/browser-fishing",
  // 10s trailer, re-encoded for web (muted H.264, faststart). Leave a field empty to skip that source.
  video: {
    mp4: "/media/fishing-game/gameplay-loop.mp4",
    webm: "",
    poster: "/media/fishing-game/poster.jpg",
  },
};

export const stats = [
  {
    value: "3",
    label: "production platforms owned end to end, from architecture to deployment",
  },
  {
    value: "20,000+",
    label: "lines of legacy code reviewed and migrated to TypeScript at QsrSoft",
  },
  {
    value: "5",
    label: "engineers mentored and onboarded through regular code review",
  },
];

export type Role = {
  dates: string;
  title: string;
  company: string;
  summary: string;
  stack: string[];
};

export const experience: Role[] = [
  {
    dates: "Sep 2023 — Present",
    title: "Senior Software Engineer",
    company: "RokketMed (contract)",
    summary:
      "Lead and sole engineer. Own architecture, front end, back end and deployment for a patient–provider marketplace, partnering directly with the client from requirements through user testing.",
    stack: ["React", "TypeScript", "Node", "Tailwind", "Figma"],
  },
  {
    dates: "Jan 2022 — Aug 2023",
    title: "Senior Software Engineer",
    company: "QsrSoft",
    summary:
      "Led web and mobile development for a multi-tenant restaurant operations platform. Mentored five engineers and led the TypeScript migration of 20,000+ lines of legacy code.",
    stack: ["Vue", "TypeScript", "AWS Serverless", "Flutter", "Kotlin"],
  },
  {
    dates: "Jun 2021 — Jan 2022",
    title: "Software Engineer",
    company: "Dogtopia Enterprises",
    summary:
      "Led key features of a real-time customer communication app, part of a major product release behind a reported $150M+ revenue increase across the franchise network. Also built internal lead-generation tools.",
    stack: ["React", "Redux", "Node", "GCP", "MongoDB"],
  },
  {
    dates: "Dec 2020 — Jun 2021",
    title: "Software Engineer",
    company: "Ethan Cowsky 3D (contract)",
    summary:
      "Designed and built an artwork portfolio and store with Stripe payments and S3 asset storage, prototyping in Figma with the artist.",
    stack: ["React", "Node", "Stripe", "AWS S3"],
  },
];

export type WorkCard = {
  title: string;
  blurb: string;
  thumbLabel: string;
  href?: string;
};

export const moreWork: WorkCard[] = [
  {
    title: "Ethan Cowsky 3D",
    blurb: "Art storefront · Stripe · admin portal",
    thumbLabel: "render",
    href: "https://github.com/O-Chavez/EthanCowskyWebsite",
  },
  {
    title: "LocalFaves",
    blurb: "Flutter app · shared lists of favorite places",
    thumbLabel: "app",
  },
  {
    title: "The Lift Tracker",
    blurb: "React · OAuth · progress charts",
    thumbLabel: "chart",
    href: "https://github.com/O-Chavez/lift-tracker",
  },
];

export type ArchiveItem = {
  title: string;
  blurb: string;
  stack: string[];
  href?: string;
};

export const archive: ArchiveItem[] = [
  {
    title: "Haskell Tic-Tac-Toe",
    blurb: "Purely functional, strictly typed command-line game.",
    stack: ["Haskell"],
    href: "https://github.com/O-Chavez/HASKELL-Tic-Tac-Toe",
  },
  {
    title: "Indecision",
    blurb: "Decision helper that picks from your options and finds results nearby.",
    stack: ["JavaScript", "jQuery", "Express", "Google Maps", "Yelp API"],
    href: "https://github.com/O-Chavez/Indecision",
  },
  {
    title: "YelpCamp",
    blurb: "Catalog of camping spots with maps, pricing and user reviews.",
    stack: ["Express", "MongoDB", "Passport.js", "Google Maps", "Cloudinary"],
  },
  {
    title: "Dental Touch",
    blurb: "Landing page for an imaginary dental practice, with parallax scrolling.",
    stack: ["HTML", "CSS", "Bootstrap", "Express"],
    href: "https://github.com/O-Chavez/OnTopLocal-Project",
  },
  {
    title: "Groupie",
    blurb: "Landing page for a music streaming app concept.",
    stack: ["HTML", "CSS", "Bootstrap", "Express"],
    href: "https://github.com/O-Chavez/Groupie",
  },
  {
    title: "Sound Bap",
    blurb: "Keyboard-driven audio-visual toy with custom vector graphics.",
    stack: ["Paper.js", "Howler.js"],
    href: "https://github.com/O-Chavez/SoundBap",
  },
  {
    title: "RGB Color Game",
    blurb: "Guess the color from its RGB value and chase a high score.",
    stack: ["JavaScript"],
    href: "https://github.com/O-Chavez/RGB-guessgame",
  },
];

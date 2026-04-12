import { Language } from "../services/languageService";

export interface Translations {
  // Header Navigation
  profile: string;
  projects: string;
  contact: string;
  skills: string;
  info: string;
  portfolioTitle: string;

  // Profile Section
  developerLevel: string;
  yearsOfExperience: string;
  repositories: string;
  followers: string;
  totalStars: string;
  achievements: string;
  workStatus: string;
  profileDescription: string;

  // Sections
  recentActivity: string;
  contributions: string;
  viewAllActivity: string;
  featuredProjects: string;
  achievementShowcase: string;
  personalHobbies: string;
  technicalSkills: string;
  connectWithMe: string;
  githubFollowers: string;

  // Buttons
  viewResume: string;
  viewAll: string;
  sendMessage: string;

  // Stats
  level: string;
  developer: string;

  // Common
  loading: string;
  more: string;
  less: string;

  // Modal tabs
  allTab: string;
  unlockedTab: string;
  lockedTab: string;

  // Footer
  footerQuickLinks: string;
  footerAbout: string;
  footerTagline: string;
  footerCopyright: string;
  footerMadeWith: string;

  // Project Showcase
  showcaseTitle: string;
  showcasePosition: string;
  showcaseTeamSize: string;
  showcaseMembers: string;
  showcaseTechStack: string;
  showcaseOverview: string;
  showcaseKeyContributions: string;
}

export const translations: Record<Language, Translations> = {
  english: {
    profile: "Profile",
    projects: "Projects",
    contact: "Contact",
    skills: "Skills",
    info: "Info",
    portfolioTitle: "DANG TUAN DUONG'S PORTFOLIO",

    developerLevel: "Developer Level",
    yearsOfExperience: "Years of Experience",
    repositories: "Repositories",
    followers: "Followers",
    totalStars: "Total Stars",
    achievements: "Achievements",
    workStatus: "Not looking for work",
    profileDescription:
      "Software Craftsman with over 5 years of expertise in crafting scalable APIs and enhancing data architectures for high-performance systems. Inspired by technological frontiers, I’m passionate about exploring new ideas and continuously improving through innovation.",
    recentActivity: "Recent Activity",
    contributions: "contributions in last 12 weeks",
    viewAllActivity: "View all activity on GitHub",
    featuredProjects: "Featured Projects",
    achievementShowcase: "Achievement Showcase",
    personalHobbies: "Personal Hobbies & Interests",
    technicalSkills: "Technical Skills",
    connectWithMe: "Connect With Me",
    githubFollowers: "GitHub Followers",

    viewResume: "View Resume",
    viewAll: "View All",
    sendMessage: "Send Message",

    level: "Level",
    developer: "Developer",

    loading: "Loading...",
    more: "More",
    less: "Less",

    allTab: "All",
    unlockedTab: "Unlocked",
    lockedTab: "Locked",

    footerQuickLinks: "Quick Links",
    footerAbout: "About",
    footerTagline:
      "Steam-inspired portfolio showcasing projects and achievements",
    footerCopyright: "© 2026 Dang Tuan Duong. All rights reserved.",
    footerMadeWith: "Made with my Steam profile inspiration",

    showcaseTitle: "Projects",
    showcasePosition: "Position",
    showcaseTeamSize: "Team Size",
    showcaseMembers: "members",
    showcaseTechStack: "Tech Stack",
    showcaseOverview: "Overview",
    showcaseKeyContributions: "Key Contributions",
  },

  sarcasm: {
    profile: "Profile (Totally Unique)",
    projects: "Projects (Revolutionary)",
    contact: "Contact (I'll Respond, Promise)",
    skills: "Skills (World-Class, Obviously)",
    info: "Info (Spoilers)",
    portfolioTitle: "DANG TUAN DUONG'S PORTFOLIO",

    developerLevel: "Developer Level (Self-Proclaimed)",
    yearsOfExperience: "Years of Pretending",
    repositories: "Code Dumps",
    followers: "Stalkers",
    totalStars: "Pity Stars",
    achievements: "Participation Trophies",
    workStatus: "Definitely not desperate for opportunities",
    profileDescription:
      "Just another genius from the Vietnam (humble brag) -- allegedly leading a team while mostly Googling errors and LLM response supervisor. \nSupposedly passionate about revolutionary ideas (read: copied from StackOverflow) and fresh perspectives (Ctrl+C, Ctrl+V). Off the clock, I'm just a guy pretending to enjoy continuous self-improvement.",

    recentActivity: "Recent Excuses",
    contributions: "attempts at productivity",
    viewAllActivity: "See all my procrastination",
    featuredProjects: "Featured Experiments",
    achievementShowcase: "Trophy Case (Empty Soon)",
    personalHobbies: "Time Wasters & Distractions",
    technicalSkills: "Things I Googled Once",
    connectWithMe: "Contact Me (At Your Own Risk)",
    githubFollowers: "People Who Clicked Wrong",

    viewResume: "Read My Life Story",
    viewAll: "See Everything (If You Must)",
    sendMessage: "Spam Me",

    level: "Imaginary Level",
    developer: "Code Monkey",

    loading: "Pretending to load...",
    more: "Ugh, More",
    less: "Thank God, Less",

    allTab: "Everything (Overwhelming)",
    unlockedTab: "My Sad Victories",
    lockedTab: "Future Disappointments",

    footerQuickLinks: "Quick Links (Like You'll Use Them)",
    footerAbout: "About (My Inflated Ego)",
    footerTagline:
      "Yet another portfolio pretending to be unique (Steam-inspired edition)",
    footerCopyright:
      "© 2026 Dang Tuan Duong Vip Pro. All rights reserved (not that anyone cares).",
    footerMadeWith: "Built with questionable decisions and Steam copying",

    showcaseTitle: "Projects I Totally Led (Sure)",
    showcasePosition: "Fancy Title",
    showcaseTeamSize: "People I Annoyed",
    showcaseMembers: "victims",
    showcaseTechStack: "Buzzwords I Googled",
    showcaseOverview: "The Excuse",
    showcaseKeyContributions: "Things I Take Credit For",
  },

  emoji: {
    profile: "👤",
    projects: "💼",
    contact: "📧",
    skills: "🎯",
    info: "ℹ️",
    portfolioTitle: "🎨 DUONG VIPPRO 🚀",

    developerLevel: "👨‍💻 📊",
    yearsOfExperience: "📅 ⏳",
    repositories: "📦",
    followers: "👥",
    totalStars: "⭐",
    achievements: "🏆",
    workStatus: "🚫 💼",
    profileDescription: "🇻🇳 👨‍💻 💻 📋...",

    recentActivity: "⚡ 📋",
    contributions: "🎯",
    viewAllActivity: "👀 📊",
    featuredProjects: "⭐ 💼",
    achievementShowcase: "🏆 ✨",
    personalHobbies: "🎮 🎨 ⚽",
    technicalSkills: "💻 🛠️",
    connectWithMe: "🤝 📱",
    githubFollowers: "👥 💻",

    viewResume: "📄 👀",
    viewAll: "👀 ✨",
    sendMessage: "📨 ✉️",

    level: "📈",
    developer: "👨‍💻",

    loading: "⏳...",
    more: "➕",
    less: "➖",

    allTab: "📊",
    unlockedTab: "✅",
    lockedTab: "🔒",

    footerQuickLinks: "⚡ 🔗",
    footerAbout: "ℹ️ 👨‍💻",
    footerTagline: "🎮 💻 🎨 ⭐",
    footerCopyright: "© 2025 👨‍💻 ✨",
    footerMadeWith: "❤️ 🎮",

    showcaseTitle: "💼 🏢",
    showcasePosition: "👔",
    showcaseTeamSize: "👥",
    showcaseMembers: "👤",
    showcaseTechStack: "🛠️",
    showcaseOverview: "📋",
    showcaseKeyContributions: "⭐ 🎯",
  },

  lorem: {
    profile: "Lorem",
    projects: "Ipsum",
    contact: "Dolor",
    skills: "Sit Amet",
    info: "Info",
    portfolioTitle: "PORTFOLIO LOREM",

    developerLevel: "Lorem Ipsum Dolor",
    yearsOfExperience: "Consectetur Adipiscing",
    repositories: "Sed Do Eiusmod",
    followers: "Tempor Incididunt",
    totalStars: "Ut Labore",
    achievements: "Dolore Magna",
    workStatus: "Non laborare quaerens",
    profileDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",

    recentActivity: "Magna Aliqua",
    contributions: "dolor sit amet",
    viewAllActivity: "Ut enim ad minim veniam",
    featuredProjects: "Quis Nostrud",
    achievementShowcase: "Exercitation Ullamco",
    personalHobbies: "Nisi Ut Aliquip",
    technicalSkills: "Ex Ea Commodo",
    connectWithMe: "Duis Aute Irure",
    githubFollowers: "Reprehenderit In",

    viewResume: "Lorem Ipsum",
    viewAll: "Dolor Sit",
    sendMessage: "Consectetur",

    level: "Nivel",
    developer: "Codex",

    loading: "Expectans...",
    more: "Magis",
    less: "Minus",

    allTab: "Omnes",
    unlockedTab: "Apertus",
    lockedTab: "Clausus",

    footerQuickLinks: "Celeritas Nexus",
    footerAbout: "De Nobis",
    footerTagline: "Lorem ipsum dolor sit amet portfolio",
    footerCopyright: "© MMXXV Victor Zyon Tiangson. Omnia iura reservata.",
    footerMadeWith: "Factum cum Steam inspiratio",

    showcaseTitle: "Projectum Experientia",
    showcasePosition: "Positio",
    showcaseTeamSize: "Magnitudo Turmae",
    showcaseMembers: "membra",
    showcaseTechStack: "Technologia Acervus",
    showcaseOverview: "Conspectus",
    showcaseKeyContributions: "Clavis Contributiones",
  },

  youngStunnah: {
    profile: "Petmalu Profile",
    projects: "Werpa Projects",
    contact: "Chika Tayo",
    skills: "Swabe Skills",
    info: "Chismis",
    portfolioTitle: "PORTFOLIO NI ZYON",

    developerLevel: "Dev Lodi Level",
    yearsOfExperience: "G na G Years",
    repositories: "Code Sesh",
    followers: "Tropa",
    totalStars: "Solid Stars",
    achievements: "Flex Badges",
    workStatus: "Walang work hanap (chill lang)",
    profileDescription:
      "Simpleng dev lang from Pinas -- lead ng team tapos .NET expert daw. Naging Scrum Master din, meron pang mga certificate pa naman.\n\nGusto ko mag-innovate at gumawa ng legit solutions. Chill lang off-duty, nag-aaral at nag-improve lang ng skills.",

    recentActivity: "Latest Gawa",
    contributions: "lodi moves",
    viewAllActivity: "Tignan lahat sa GitHub",
    featuredProjects: "Bet na Bet Projects",
    achievementShowcase: "Flex Wall",
    personalHobbies: "Tambay at Chill",
    technicalSkills: "Tech Skillz",
    connectWithMe: "Tara Usap",
    githubFollowers: "GitHub Tropa",

    viewResume: "Basahin Resume",
    viewAll: "Tignan Lahat",
    sendMessage: "Chat Tayo",

    level: "Antas",
    developer: "Dev Lodi",

    loading: "Sandali lang...",
    more: "Pa-more",
    less: "Sakto na",

    allTab: "Lahat",
    unlockedTab: "Nakuha Na",
    lockedTab: "Di Pa Makuha",

    footerQuickLinks: "Mabilis na Links",
    footerAbout: "Tungkol",
    footerTagline:
      "Steam-inspired portfolio na pang-flex ng projects at achievements",
    footerCopyright:
      "© 2025 Victor Zyon Tiangson. Respeto lang sa copyright ha.",
    footerMadeWith: "Gawa gamit ang Steam vibes",

    showcaseTitle: "Mga Project Ko Lodi",
    showcasePosition: "Position Ko",
    showcaseTeamSize: "Kasama Ko",
    showcaseMembers: "tropa",
    showcaseTechStack: "Tech na Ginamit",
    showcaseOverview: "Kwento",
    showcaseKeyContributions: "Mga Gawa Ko",
  },
};

export function getTranslation(language: Language): Translations {
  return translations[language] || translations.english;
}

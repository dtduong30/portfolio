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

  // GitHub Replay
  replayTitle: string;
  replayLoading: string;
  replayError: string;
  replayOverviewTitle: string;
  replayOverviewCommits: string;
  replayOverviewMostActiveMonth: string;
  replayOverviewLongestStreak: string;
  replayOverviewDaysCoded: string;
  replayLanguageTitle: string;
  replayLanguageSubtitle: string;
  replayImpactTitle: string;
  replayImpactStarsEarned: string;
  replayImpactForks: string;
  replayImpactReposCreated: string;
  replayImpactTopRepo: string;
  replayProductivityTitle: string;
  replayProductivityMostProductiveDay: string;
  replayProductivityPeakHour: string;
  replayProductivityNightOwl: string;
  replayProductivityWeekendWarrior: string;
  replayCollaborationTitle: string;
  replayCollaborationPrsCreated: string;
  replayCollaborationPrsMerged: string;
  replayCollaborationIssuesClosed: string;
  replayCollaborationTopCollabRepo: string;
  replayGrowthTitle: string;
  replayGrowthFollowers: string;
  replayGrowthTotalRepos: string;
  replayGrowthContributionGraph: string;
  replayGrowthFooter: string;
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

    replayTitle: "GitHub Replay",
    replayLoading: "Loading your replay...",
    replayError: "Unable to load replay stats",
    replayOverviewTitle: "Your Year in Code",
    replayOverviewCommits: "Total Commits",
    replayOverviewMostActiveMonth: "Most Active Month",
    replayOverviewLongestStreak: "Longest Streak",
    replayOverviewDaysCoded: "Days Coded",
    replayLanguageTitle: "Language Mastery",
    replayLanguageSubtitle: "You're a {language} wizard!",
    replayImpactTitle: "Your Impact",
    replayImpactStarsEarned: "Stars Earned",
    replayImpactForks: "Forks Gained",
    replayImpactReposCreated: "Repos Created",
    replayImpactTopRepo: "Top Starred Repository",
    replayProductivityTitle: "Productivity Patterns",
    replayProductivityMostProductiveDay: "Most Productive Day",
    replayProductivityPeakHour: "Peak Coding Hour",
    replayProductivityNightOwl: "Night Owl",
    replayProductivityWeekendWarrior: "Weekend Warrior",
    replayCollaborationTitle: "Collaboration Stats",
    replayCollaborationPrsCreated: "PRs Created",
    replayCollaborationPrsMerged: "PRs Merged",
    replayCollaborationIssuesClosed: "Issues Closed",
    replayCollaborationTopCollabRepo: "Most Collaborated",
    replayGrowthTitle: "Your Growth Story",
    replayGrowthFollowers: "Followers",
    replayGrowthTotalRepos: "Total Repositories",
    replayGrowthContributionGraph: "Contribution Heatmap",
    replayGrowthFooter: "That was your {year} in code!",
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

    replayTitle: "GitHub Replay (Your Annual Highlight Reel)",
    replayLoading: "Pretending to compile your achievements...",
    replayError: "Failed to load your mediocre stats",
    replayOverviewTitle: 'Your Year in "Productivity"',
    replayOverviewCommits: "Code Submissions",
    replayOverviewMostActiveMonth: "Least Lazy Month",
    replayOverviewLongestStreak: "Lucky Streak",
    replayOverviewDaysCoded: "Days Pretending to Work",
    replayLanguageTitle: 'Language "Expertise"',
    replayLanguageSubtitle: "You copy-pasted {language} a lot!",
    replayImpactTitle: 'Your "Impact"',
    replayImpactStarsEarned: "Pity Stars Collected",
    replayImpactForks: "Desperate Forks",
    replayImpactReposCreated: "Repos Abandoned",
    replayImpactTopRepo: "Least Embarrassing Repo",
    replayProductivityTitle: "Procrastination Patterns",
    replayProductivityMostProductiveDay: "Least Unproductive Day",
    replayProductivityPeakHour: "Deadline Panic Hour",
    replayProductivityNightOwl: "Insomniac Coder",
    replayProductivityWeekendWarrior: "No-Life Developer",
    replayCollaborationTitle: "Social Coding (Kinda)",
    replayCollaborationPrsCreated: "PRs Thrown Into Void",
    replayCollaborationPrsMerged: "PRs Actually Accepted",
    replayCollaborationIssuesClosed: "Problems Swept Under Rug",
    replayCollaborationTopCollabRepo: "Most Bothered Project",
    replayGrowthTitle: 'Your "Progress"',
    replayGrowthFollowers: "Random Followers",
    replayGrowthTotalRepos: "Code Graveyards",
    replayGrowthContributionGraph: "Green Squares of Shame",
    replayGrowthFooter: 'That was your {year} in "achievement" (sure...)',
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

    replayTitle: "🎮 🔄 📊",
    replayLoading: "⏳ 📊...",
    replayError: "❌ 📊",
    replayOverviewTitle: "📅 💻 🎯",
    replayOverviewCommits: "📝 ✅",
    replayOverviewMostActiveMonth: "🔥 📅",
    replayOverviewLongestStreak: "🏃 🔥",
    replayOverviewDaysCoded: "📆 💻",
    replayLanguageTitle: "💻 🎯",
    replayLanguageSubtitle: "🧙 {language} ⭐",
    replayImpactTitle: "💥 📊",
    replayImpactStarsEarned: "⭐ 📈",
    replayImpactForks: "🍴 📈",
    replayImpactReposCreated: "📦 ➕",
    replayImpactTopRepo: "🏆 📦",
    replayProductivityTitle: "⏰ 📊",
    replayProductivityMostProductiveDay: "🔥 📅",
    replayProductivityPeakHour: "⏰ 🎯",
    replayProductivityNightOwl: "🌙 🦉",
    replayProductivityWeekendWarrior: "🏖️ ⚔️",
    replayCollaborationTitle: "🤝 📊",
    replayCollaborationPrsCreated: "🔀 ➕",
    replayCollaborationPrsMerged: "✅ 🔀",
    replayCollaborationIssuesClosed: "✅ 🐛",
    replayCollaborationTopCollabRepo: "🏆 🤝",
    replayGrowthTitle: "📈 🌟",
    replayGrowthFollowers: "👥 📈",
    replayGrowthTotalRepos: "📦 📊",
    replayGrowthContributionGraph: "🟩 📊",
    replayGrowthFooter: "🎉 {year} 💻 ✨",
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

    replayTitle: "Lorem Replay Ipsum",
    replayLoading: "Lorem ipsum expectans...",
    replayError: "Error lorem ipsum dolor",
    replayOverviewTitle: "Annus In Codex",
    replayOverviewCommits: "Summa Commits",
    replayOverviewMostActiveMonth: "Mensis Activus",
    replayOverviewLongestStreak: "Longissima Series",
    replayOverviewDaysCoded: "Dies Codex",
    replayLanguageTitle: "Lingua Dominatio",
    replayLanguageSubtitle: "Tu es {language} magister!",
    replayImpactTitle: "Tuum Impactus",
    replayImpactStarsEarned: "Stellae Acquisitae",
    replayImpactForks: "Furcae Acquisitae",
    replayImpactReposCreated: "Repositoria Creata",
    replayImpactTopRepo: "Summus Repositorium",
    replayProductivityTitle: "Productivitas Patterns",
    replayProductivityMostProductiveDay: "Dies Productivissimus",
    replayProductivityPeakHour: "Hora Culminis",
    replayProductivityNightOwl: "Noctis Codificator",
    replayProductivityWeekendWarrior: "Bellator Sabbati",
    replayCollaborationTitle: "Collaboratio Statisticae",
    replayCollaborationPrsCreated: "PR Creatae",
    replayCollaborationPrsMerged: "PR Fusae",
    replayCollaborationIssuesClosed: "Quaestiones Clausae",
    replayCollaborationTopCollabRepo: "Maxime Collaboratum",
    replayGrowthTitle: "Historia Crescentiae",
    replayGrowthFollowers: "Sequentes",
    replayGrowthTotalRepos: "Summa Repositoria",
    replayGrowthContributionGraph: "Contributio Mappa",
    replayGrowthFooter: "Ille fuit tuus {year} in codice!",
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

    replayTitle: "GitHub Replay Ko",
    replayLoading: "Sandali, hinihimas yung data...",
    replayError: "Ayaw mag-load ng stats bro",
    replayOverviewTitle: "Taon Mo sa Pag-code",
    replayOverviewCommits: "Kabuuang Commits",
    replayOverviewMostActiveMonth: "Pinaka-Active na Buwan",
    replayOverviewLongestStreak: "Pinaka-Mahabang Streak",
    replayOverviewDaysCoded: "Araw na Nag-code",
    replayLanguageTitle: "Language Expert Ka",
    replayLanguageSubtitle: "Lodi ka talaga sa {language}!",
    replayImpactTitle: "Impact Mo Pre",
    replayImpactStarsEarned: "Stars na Nakuha",
    replayImpactForks: "Forks na Nakuha",
    replayImpactReposCreated: "Repos na Ginawa",
    replayImpactTopRepo: "Top Starred Repo Mo",
    replayProductivityTitle: "Productivity Habits",
    replayProductivityMostProductiveDay: "Pinaka-Productive Day",
    replayProductivityPeakHour: "Peak Coding Oras",
    replayProductivityNightOwl: "Puyat King",
    replayProductivityWeekendWarrior: "Weekend Grinder",
    replayCollaborationTitle: "Collab Stats",
    replayCollaborationPrsCreated: "PRs Ginawa",
    replayCollaborationPrsMerged: "PRs Na-merge",
    replayCollaborationIssuesClosed: "Issues Na-close",
    replayCollaborationTopCollabRepo: "Pinaka-Collab Repo",
    replayGrowthTitle: "Growth Story Mo",
    replayGrowthFollowers: "Mga Tropa",
    replayGrowthTotalRepos: "Total Repos",
    replayGrowthContributionGraph: "Contribution Heatmap",
    replayGrowthFooter: "Yan ang {year} mo sa pag-code, lodi!",
  },
};

export function getTranslation(language: Language): Translations {
  return translations[language] || translations.english;
}

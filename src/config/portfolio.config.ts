import { PortfolioConfig } from "../types";
import { avatar } from "./media.config";

/**
 * Portfolio Configuration
 *
 * This file contains all your personal information, projects, and settings.
 * Update this file to customize your portfolio.
 */

export const portfolioConfig: PortfolioConfig = {
  // Personal Information
  personal: {
    name: "Dang Tuan Duong",
    title: "Full-stack Developer",
    location: "Ho Chi Minh City, Vietnam",
    bio: "Full-stack developer specializing in NodeJS and React, passionate about building interactive web experiences with modern technologies",
    email: "dangtuanduong99@gmail.com",
    phone: "(+84) 344301199",
    birthday: "1999-11-30", // November 30, 1999
    banner: "/banner.webp",
    resumeUrl: "/DuongDang_CV.pdf",
    avatar: avatar.chicken,
  },

  // Social Media Links
  social: {
    github: "dtduong30",
    linkedin: "https://www.linkedin.com/in/rustic3011/",
    twitter: undefined,
    website: undefined,
  },

  // Current Work Status
  workStatus: {
    status: "employed", // 'available' | 'employed' | 'retired' | 'busy' | 'away'
    message: "Looking for Work",
  },

  // Featured Projects (will be enhanced with GitHub API data)
  featuredProjects: [
    {
      repo: "learn-spring",
      demoUrl: "https://viblo.asia/u/Butterfect",
      featured: true,
    },
    {
      repo: "collect-spb",
      demoUrl:
        "https://duong3011.notion.site/Duong-Dang-Tuan-f6660347c76047eca4568a2757cdfe93/",
      featured: true,
    },
    {
      repo: "nestjs-assignment-m",
      demoUrl: "https://voz.vn/",
      featured: true,
    },
  ],

  // Achievements & Awards
  achievements: [
    {
      id: 1,
      title: "Professional Scrum Master™ I",
      description: "Issued by Scrum.org",
      icon: "🏆",
      logo: "/psm1-logo.png",
      year: 2023,
      unlocked: true,
      rarity: "epic",
    },
    {
      id: 2,
      title: "Professional Scrum Facilitation Skills™",
      description: "Issued by Scrum.org",
      icon: "⭐",
      logo: "/psf-logo.png",
      year: 2024,
      unlocked: true,
      rarity: "epic",
    },
    {
      id: 3,
      title: "Outstanding Thesis Award",
      description: "First Place - System Analysis & Design",
      icon: "🎓",
      year: 2017,
      unlocked: true,
      rarity: "legendary",
    },
    {
      id: 4,
      title: "8+ Years of Experience",
      description: "Full-Stack Development",
      icon: "💻",
      year: 2017,
      unlocked: true,
      rarity: "rare",
    },
    {
      id: 5,
      title: "Team Leadership",
      description: "Development Team Lead - Technical",
      icon: "👥",
      year: 2025,
      unlocked: true,
      rarity: "rare",
    },
    {
      id: 6,
      title: "Civil Service Professional",
      description: "Government Certified Professional",
      icon: "📜",
      year: 2017,
      unlocked: true,
      rarity: "common",
    },
  ],

  // Personal Hobbies & Interests
  hobbies: [
    {
      id: 1,
      title: "Football",
      description: "Chasing a ball like it owes me money",
      icon: "⚽",
    },
    {
      id: 2,
      title: "Cooking",
      description: "Enjoy making simple dishes and seeing people enjoy them",
      icon: "👨‍🍳",
    },
    {
      id: 3,
      title: "Gaming",
      description: "Saving virtual worlds, ignoring real responsibilities",
      icon: "🎮",
    },
    {
      id: 4,
      title: "Billiards",
      description: "Missing easy shots with absolute confidence",
      icon: "🎱",
    },
    {
      id: 5,
      title: "Running",
      description: "Running away from problems… and sometimes toward fitness",
      icon: "🏃",
    },
    {
      id: 6,
      title: "Music",
      description: "Always have music playing during my free time",
      icon: "🎧",
    },
    {
      id: 7,
      title: "Anime",
      description: "Emotionally invested in characters that don’t exist",
      icon: "🎌",
    },
    {
      id: 8,
      title: "Movies",
      description: "2 hours of life lessons I won’t apply",
      icon: "🎬",
    },
    {
      id: 9,
      title: "Reading",
      description: "Buying books faster than I read them",
      icon: "📚",
    },
    {
      id: 10,
      title: "Technology",
      description: "Curious about new tech and how things work",
      icon: "💻",
    },
  ],

  // Technical Skills (from resume)
  technicalSkills: {
    "Back-end & Frameworks": [
      "TypeScript",
      "NodeJS (NestJS, ExpressJS)",
      "Java (Spring Boot)",
      "Golang (Gin, Echo)",
      "Microservices Architecture",
      "API Development & Integrations",
      "Message Brokers (RabbitMQ, SQS, Kafka)",
      "Redis",
    ],
    "Front-end & UI": [
      "HTML5",
      "Tailwind CSS",
      "ReactJS",
      "Vite",
      "NextJS",
      "RemixJS",
      "MaterialUI",
      "AntDesign",
    ],
    Database: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "DynamoDB"],
    Others: [
      "Agile",
      "Scrum",
      "Jira",
      "Code Reviews",
      "Docker",
      "ELK",
      "Software Documentation",
      "AWS (S3, Lambda, ...)",
      "Kubernetes",
      "GitFlow",
      "ClickHouse",
    ],
  },

  // Display Settings
  showTestimonials: false, // Set to true if you add testimonials later
  showAllRepos: false, // Set to true to display all GitHub repositories
};

// Helper function to calculate years of experience
export const getYearsOfExperience = (): number => {
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

// Helper function to get work status display
export const getWorkStatusConfig = (status: string) => {
  const statusConfig = {
    available: {
      badge: "online",
      text: "Available for Work",
      color: "#a4d007",
    },
    employed: {
      badge: "busy",
      text: "Currently Employed",
      color: "#f39c12",
    },
    retired: {
      badge: "retired",
      text: "Re-tired",
      color: "#95a5a6",
    },
    busy: {
      badge: "busy",
      text: "Busy",
      color: "#e74c3c",
    },
  };

  return (
    statusConfig[status as keyof typeof statusConfig] || statusConfig.retired
  );
};

// Helper function to calculate age
export const getAge = (): number => {
  if (!portfolioConfig.personal.birthday) return 0;

  const birthday = new Date(portfolioConfig.personal.birthday);
  const today = new Date();

  let age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();

  // Adjust if birthday hasn't occurred yet this year
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthday.getDate())
  ) {
    age--;
  }

  return age;
};

export default portfolioConfig;

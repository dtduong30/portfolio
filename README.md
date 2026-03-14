## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy!

### Deploy to GitHub Pages

1. Update `vite.config.ts` with your repo name:

```typescript
export default defineConfig({
  base: "/your-repo-name/",
});
```

2. Build and deploy:

```bash
npm run build
npm run deploy
```

## ⚙️ Configuration

### Portfolio Config

All customization is done through `src/config/portfolio.config.ts`:

```typescript
export const portfolioConfig = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    location: "Your Location",
    email: "your.email@example.com",
    banner: "/steam-profile-portfolio/profile-background.jpg",
    avatar: "/steam-profile-portfolio/profile-avatar.gif",
  },

  featuredProjects: [
    {
      repo: "your-repo-name",
      demoUrl: "https://demo-url.com",
      featured: true,
    },
  ],

  achievements: [
    {
      title: "Your Achievement",
      description: "Description",
      icon: "🏆",
      logo: "/your-badge-logo.png", // Optional: path to badge image
      year: 2024,
      unlocked: true,
      rarity: "legendary", // 'common' | 'rare' | 'epic' | 'legendary'
    },
  ],

  technicalSkills: {
    "Languages & Frameworks": ["C#", ".NET", "TypeScript"],
    "Front-end & UI": ["React", "Tailwind CSS"],
    // ... more categories
  },
};
```

### Theme Customization

Edit `src/styles/index.css` for cosmic theme colors:

```css
body.CosmicTheme {
  --gradient-right: rgba(248, 70, 180, 0.301);
  --gradient-left: rgba(9, 243, 99, 0.247);
  --gradient-background: rgba(46, 13, 36, 0.93);
}
```

## 🎨 Features Showcase

### 🌐 Multi-Language System

Switch between 6 different languages for a completely different experience:

**English (Standard)**

- Navigation: Profile, Projects, Contact, Skills
- Stats: Developer Level, Years of Experience, Repositories
- Headers: Featured Projects, Achievement Showcase, Recent Activity

**Sarcasm (Humorous)**

- Navigation: Profile (Totally Unique), Projects (Revolutionary), Contact (I'll Respond, Promise)
- Stats: Developer Level (Self-Proclaimed), Years of Pretending, Code Dumps
- Headers: Featured Experiments, Trophy Case (Empty Soon), Recent Excuses

**Binary (Tech Purist)**

- Everything converted to binary code
- Navigation: `01010000 01110010 01101111` (Profile)
- Complete binary representation of all text

**Emoji Only (Visual)**

- Navigation: 👤 (Profile), 💼 (Projects), 📧 (Contact), 🎯 (Skills)
- Stats: 👨‍💻 📊 (Developer Level), 📅 ⏳ (Years), 📦 (Repositories)
- Pure emoji-based communication

**Lorem Ipsum (Classic)**

- Navigation: Lorem, Ipsum, Dolor, Sit Amet
- Headers: Quis Nostrud, Exercitation Ullamco, Magna Aliqua
- Traditional placeholder Latin text throughout

**Young Stunnah (Filipino Gen Z Slang)**

- Navigation: Petmalu Profile, Werpa Projects, Chika Tayo, Swabe Skills
- Stats: Dev Lodi Level, G na G Years, Code Sesh
- Headers: Bet na Bet Projects, Flex Wall, Latest Gawa
- Portfolio Title: PORTFOLIO NI ZYON

**How to Use:**

1. Click on your name in the top-right header
2. Hover over "Change language"
3. Select your preferred language from the submenu
4. Watch all text instantly transform!
5. Your choice is saved automatically for future visits

### 🏆 Developer Level System

The gamification system calculates your developer level based on GitHub activity and visitor achievements:

- **Repositories**: 100 XP each
- **Followers**: 50 XP each
- **Stars**: 10 XP each
- **Years of Experience**: 500 XP per year
- **Achievements**: Variable XP (10-200 per achievement)
  - Common achievements: 10-25 XP
  - Rare achievements: 30-45 XP
  - Epic achievements: 50-75 XP
  - Legendary achievements: 100-200 XP

Level up using a Steam-like bracket system! The circular progress ring shows your progress to the next level with smooth animations and glowing effects. Unlock achievements to boost your XP and level up faster!

### 🎯 Achievement Rarity Tiers

Achievements are color-coded by rarity:

- **Common**: Gray - Basic achievements and certifications
- **Rare**: Blue - Notable accomplishments
- **Epic**: Purple - Significant milestones and advanced certifications
- **Legendary**: Orange - Top-tier achievements with pulsing glow effect

Each tier has unique visual effects including borders, backgrounds, and animations.

### 📊 Data Visualizations

#### Contribution Heatmap

- GitHub-style grid showing last 12 weeks of activity
- 5 intensity levels from light to bright blue
- Hover to see exact contribution counts
- Automatically generated from your recent GitHub events

#### Language Breakdown Chart

- Interactive donut chart showing your top programming languages
- Color-coded segments matching each language's official color
- Hover effects that brighten and enlarge segments
- Displays total language count in the center

#### Animated Stat Counters

- Numbers count up smoothly when scrolling into view
- Smooth easing animations (ease-out cubic)
- Icons with hover glow effects
- Triggered by Intersection Observer for performance

### Navigation System

- Smooth scroll with offset for sticky header
- Active link highlighting based on scroll position
- Pulse animation on section navigation
- Mobile-responsive navigation

### Skills Display

Skills organized in Steam showcase style:

- **Languages & Frameworks**: C#, .NET, Python, JavaScript
- **Front-end & UI**: React, HTML5, CSS3, Tailwind
- **Database**: MS SQL Server, Supabase, Firebase
- **Tools & Platforms**: Visual Studio, Git, Azure DevOps
- **Practices**: Agile Scrum, CI/CD, Code Reviews

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Victor Zyon Tiangson**

- GitHub: [@zyonify](https://github.com/zyonify)
- LinkedIn: [Victor Zyon Tiangson](https://www.linkedin.com/in/zyontiangson/)
- Email: tiangsonzyon@gmail.com

## 🙏 Acknowledgments

- Inspired by [Steam Community](https://steamcommunity.com/) profile design
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)
- Cosmic theme inspired by Steam's profile customization

---

**Note**: Don't forget to star ⭐ this repository if you found it helpful!

Made with 💜 and inspired by Steam

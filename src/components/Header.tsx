import { useState, useEffect } from "react";
import "./Header.css";
import {
  getAchievementStats,
  onAchievementUnlock,
  trackLogoClick,
} from "../services/achievementService";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../services/languageService";

interface HeaderProps {
  onOpenAchievements: () => void;
  onOpenInfo: () => void;
  onOpenWallet: () => void;
}

function Header({ onOpenAchievements, onOpenInfo, onOpenWallet }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("profile");
  const [achievementStats, setAchievementStats] = useState(
    getAchievementStats(),
  );
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showLanguageSubmenu, setShowLanguageSubmenu] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();

    // Immediately set the active section
    setActiveSection(sectionId);

    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Add highlight animation
      section.classList.add("highlight-pulse");
      setTimeout(() => {
        section.classList.remove("highlight-pulse");
      }, 2000);
    }
  };

  // Update achievement stats when achievements are unlocked
  useEffect(() => {
    const unsubscribe = onAchievementUnlock(() => {
      setAchievementStats(getAchievementStats());
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["profile", "projects", "contact", "skills"];

      // Get the center of the viewport for more accurate detection
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = "profile";
      let closestDistance = Infinity;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionMiddle = sectionTop + rect.height / 2;

          // Calculate distance from scroll position to section middle
          const distance = Math.abs(scrollPosition - sectionMiddle);

          // The section with the smallest distance is the active one
          if (distance < closestDistance) {
            closestDistance = distance;
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    trackLogoClick();
  };

  const handleLanguageSelect = (lang: Language) => {
    console.log("Language selected:", lang);
    setLanguage(lang);
    setShowLanguageSubmenu(false);
    setShowUserDropdown(false);
  };

  const handleLanguageMouseEnter = () => {
    console.log("Language menu mouse enter");
    setShowLanguageSubmenu(true);
  };

  const handleLanguageMouseLeave = () => {
    console.log("Language menu mouse leave");
    setShowLanguageSubmenu(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest(".user-dropdown-btn") &&
        !target.closest(".user-dropdown-menu")
      ) {
        setShowUserDropdown(false);
        setShowLanguageSubmenu(false);
      }
    };

    if (showUserDropdown) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [showUserDropdown]);

  return (
    <header className="header">
      {/* Top Bar - User Actions */}
      <div className="header-topbar">
        <div className="header-topbar-container">
          <div className="topbar-left"></div>
          <div className="topbar-right">
            <button
              className="info-btn"
              onClick={onOpenInfo}
              title="Behind the Scenes"
            >
              <svg
                className="info-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              {t.info}
            </button>

            <button
              className="achievement-badge-btn-topbar"
              onClick={onOpenAchievements}
              title="View Achievements"
            >
              <span className="achievement-icon-topbar">🏆</span>
              <span className="achievement-count-topbar">
                {achievementStats.unlockedCount}/{achievementStats.totalCount}
              </span>
              {achievementStats.unlockedCount > 0 &&
                achievementStats.unlockedCount <
                  achievementStats.totalCount && (
                  <span className="achievement-badge-pulse-topbar"></span>
                )}
            </button>

            <div style={{ position: "relative" }}>
              <button
                className="user-dropdown-btn"
                title="Account Menu"
                onClick={() => setShowUserDropdown(!showUserDropdown)}
              >
                <span className="user-name">Dang Tuan Duong</span>
                <svg
                  className="dropdown-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <polygon points="6,8 2,4 10,4"></polygon>
                </svg>
              </button>

              {/* User Dropdown Menu */}
              {showUserDropdown && (
                <div className="user-dropdown-menu">
                  <button className="dropdown-item">
                    Account details:{" "}
                    <span className="account-name">duongvippro3011</span>
                  </button>

                  <button
                    className="dropdown-item dropdown-signout"
                    onClick={() => (window.location.href = "/satire-signout")}
                  >
                    Sign out of account...
                  </button>
                </div>
              )}
            </div>

            <a
              href="#profile"
              className="user-avatar-link"
              title="View Profile"
            >
              <img
                src="https://media.discordapp.net/attachments/1033081052513710230/1190905766815727646/image3.jpg?ex=69b5016c&is=69b3afec&hm=d8748e2792d7fd21dbb1199c1edfb9f31874760a5e53d9fff367a80c8f7ef328&=&format=webp&width=1398&height=1398"
                alt="Dang Tuan Duong"
                className="user-avatar-img"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header - Navigation */}
      <div className="header-main">
        <div className="header-container">
          <div className="header-left">
            <div className="logo" onClick={handleLogoClick}>
              <img
                src="https://cdn.discordapp.com/emojis/1301527606142959700.webp?size=240"
                alt="Logo"
                className="logo-img"
              />
              <span className="logo-text">{t.portfolioTitle}</span>
            </div>
            <nav className="nav">
              <a
                href="#profile"
                className={`nav-link ${activeSection === "profile" ? "active" : ""}`}
                onClick={(e) => scrollToSection(e, "profile")}
              >
                {t.profile}
              </a>
              <a
                href="#projects"
                className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
                onClick={(e) => scrollToSection(e, "projects")}
              >
                {t.projects}
              </a>
              <a
                href="#contact"
                className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                onClick={(e) => scrollToSection(e, "contact")}
              >
                {t.contact}
              </a>
              <a
                href="#skills"
                className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
                onClick={(e) => scrollToSection(e, "skills")}
              >
                {t.skills}
              </a>
            </nav>
          </div>
          <div className="header-right"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;

import { useEffect, useState, lazy, Suspense } from "react";
import Header from "./components/Header";
import ProfileOverview from "./components/ProfileOverview";
import AchievementToast from "./components/AchievementToast";
import SteamNotification from "./components/SteamNotification";
import ProjectShowcase from "./components/ProjectShowcase";
import Footer from "./components/Footer";

// Lazy load below-the-fold and modal components
const TechnicalSkills = lazy(() => import("./components/TechnicalSkills"));
const ResumeViewer = lazy(() => import("./components/ResumeViewer"));
const PersonalHobbies = lazy(() => import("./components/PersonalHobbies"));
const ProfileStats = lazy(() => import("./components/ProfileStats"));
const StatsSection = lazy(() => import("./components/StatsSection"));
// const ActivityFeed = lazy(() => import("./components/ActivityFeed"));
const SocialSection = lazy(() => import("./components/SocialSection"));
const AchievementModal = lazy(() => import("./components/AchievementModal"));
const InfoModal = lazy(() => import("./components/InfoModal"));
const WalletModal = lazy(() => import("./components/WalletModal"));
const SignOutSatire = lazy(() => import("./components/SignOutSatire"));
import { LanguageProvider } from "./contexts/LanguageContext";
import { portfolioConfig } from "./config/portfolio.config";
import {
  initializeAchievementSystem,
  trackKonamiKey,
} from "./services/achievementService";
import "./styles/App.css";
// import FeaturedProjects from "./components/FeaturedProjects";
import { loadNotifications } from "./config/steamNotifications.config";

function App() {
  const [showAchievementModal, setShowAchievementModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);

  // Simple routing - check if we're on the satire sign out page
  const isSignOutPage = window.location.pathname === "/satire-signout";

  // Initialize achievement system
  useEffect(() => {
    initializeAchievementSystem();
    loadNotifications();

    // Konami code tracking
    const handleKeyDown = (e: KeyboardEvent) => {
      trackKonamiKey(e.code);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Show satire sign out page
  if (isSignOutPage) {
    return (
      <Suspense fallback={null}>
        <SignOutSatire />
      </Suspense>
    );
  }

  const backgroundStyle = portfolioConfig.personal.banner
    ? { backgroundImage: `url(${portfolioConfig.personal.banner})` }
    : {};

  // Show main portfolio
  return (
    <LanguageProvider>
      <div className="app" style={backgroundStyle}>
        <Header
          onOpenAchievements={() => setShowAchievementModal(true)}
          onOpenInfo={() => setShowInfoModal(true)}
          onOpenWallet={() => setShowWalletModal(true)}
        />
        <AchievementToast />
        <SteamNotification />
        <main className="container">
          <div className="content-wrapper">
            <div className="main-content">
              <ProfileOverview />
              {/* <FeaturedProjects /> */}
              <ProjectShowcase />
              {/* <AchievementsShowcase /> */}
              <Suspense fallback={null}>
                <TechnicalSkills />
                <ResumeViewer />
                <PersonalHobbies />
              </Suspense>
            </div>
            <aside className="sidebar">
              <Suspense fallback={null}>
                <ProfileStats />
                <StatsSection />
                {/* <ActivityFeed /> */}
                <SocialSection />
              </Suspense>
            </aside>
          </div>
        </main>
        <Footer />
        <Suspense fallback={null}>
          <AchievementModal
            isOpen={showAchievementModal}
            onClose={() => setShowAchievementModal(false)}
          />
          <InfoModal
            isOpen={showInfoModal}
            onClose={() => setShowInfoModal(false)}
          />
          <WalletModal
            isOpen={showWalletModal}
            onClose={() => setShowWalletModal(false)}
          />
        </Suspense>
      </div>
    </LanguageProvider>
  );
}

export default App;

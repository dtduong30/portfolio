import type { CSSProperties } from "react";
import { portfolioConfig } from "../config/portfolio.config";
import "./Landing.css";

const ROWS = [
  {
    index: "01",
    tag: "for HR & CTOs",
    icon: "💼",
    title: "Professional",
    desc: "The straight version. Proof of work, how I think, and one clear way to reach out.",
    href: "/pro",
    recommended: true,
  },
  {
    index: "02",
    tag: "for fun",
    icon: "🎮",
    title: "Steam Profile",
    desc: "The version I actually enjoyed building. Achievements, XP, Steam skin, same projects.",
    href: "/steam",
    recommended: false,
  },
];

const STATS = ["5+ yrs experience", "Backend / Fullstack", "Ho Chi Minh City"];

function Landing() {
  return (
    <div className="landing">
      <header className="landing-top">
        <span className="landing-mark">Dang Tuan Duong</span>
        <span className="landing-top-status">
          <span className="landing-dot" />
          {portfolioConfig.workStatus.message}
        </span>
      </header>

      <div className="landing-inner">
        <div className="landing-intro">
          <img
            className="landing-avatar"
            src={
              portfolioConfig.personal.avatar ||
              `https://github.com/${portfolioConfig.social.github}.png`
            }
            alt={portfolioConfig.personal.name}
          />
          <div>
            <p className="landing-hi">
              Hey, I'm {portfolioConfig.personal.name.split(" ")[2]}.
            </p>
            <h1 className="landing-title">
              Pick how you'd like <br /> to meet me.
            </h1>
          </div>
        </div>
        <p className="landing-sub">
          Same person, same work — just two different moods. I built both, so
          take whichever one you're in the mood for.
        </p>

        <div className="landing-stats">
          {STATS.map((stat) => (
            <span className="landing-stat-chip" key={stat}>
              {stat}
            </span>
          ))}
        </div>

        <div className="landing-cards">
          {ROWS.map((row, i) => (
            <a
              className="landing-card"
              href={row.href}
              key={row.href}
              style={{ "--delay": `${0.15 + i * 0.08}s` } as CSSProperties}
            >
              {row.recommended && (
                <span className="landing-card-badge">Recommended</span>
              )}
              <div className="landing-card-top">
                <span className="landing-card-icon" aria-hidden="true">
                  {row.icon}
                </span>
                <span className="landing-card-index">{row.index}</span>
              </div>
              <span className="landing-card-tag">{row.tag}</span>
              <h2>{row.title}</h2>
              <p>{row.desc}</p>
              <span className="landing-card-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      <footer className="landing-foot">
        <span>{portfolioConfig.personal.location}</span>
        <span>{portfolioConfig.personal.title}</span>
      </footer>
    </div>
  );
}

export default Landing;

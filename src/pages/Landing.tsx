import { portfolioConfig } from "../config/portfolio.config";
import "./Landing.css";

const ROWS = [
  {
    index: "01",
    tag: "for HR & CTOs",
    title: "Professional",
    desc: "The straight version. Proof of work, how I think, and one clear way to reach out.",
    href: "/pro",
  },
  {
    index: "02",
    tag: "for fun",
    title: "Steam Profile",
    desc: "The version I actually enjoyed building. Achievements, XP, Steam skin, same projects.",
    href: "/steam",
  },
];

function Landing() {
  return (
    <div className="landing">
      <header className="landing-top">
        <span className="landing-mark">DTD</span>
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
            <p className="landing-hi">Hey, I'm {portfolioConfig.personal.name.split(" ")[0]}.</p>
            <h1 className="landing-title">
              Pick how you'd
              <br />
              like to meet me.
            </h1>
          </div>
        </div>
        <p className="landing-sub">
          Same person, same work — just two different moods. I built both,
          so take whichever one you're in the mood for.
        </p>

        <div className="landing-list">
          {ROWS.map((row) => (
            <a className="landing-row" href={row.href} key={row.href}>
              <span className="landing-row-index">{row.index}</span>
              <div className="landing-row-main">
                <span className="landing-row-tag">{row.tag}</span>
                <h2>{row.title}</h2>
                <p>{row.desc}</p>
              </div>
              <span className="landing-row-arrow" aria-hidden="true">
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

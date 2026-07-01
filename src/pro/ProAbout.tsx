import {
  portfolioConfig,
  getYearsOfExperience,
} from "../config/portfolio.config";

const CREDENTIALS = portfolioConfig.achievements.filter(
  (a) => a.rarity === "epic" || a.rarity === "legendary",
);

function ProAbout() {
  const years = getYearsOfExperience();
  const defaultResume = portfolioConfig.personal.resumes.find(
    (r) => r.isDefault,
  );

  return (
    <section id="about" className="pro-hero">
      <div className="pro-hero-top">
        <img
          className="pro-hero-avatar"
          src={
            portfolioConfig.personal.avatar ||
            `https://github.com/${portfolioConfig.social.github}.png`
          }
          alt={portfolioConfig.personal.name}
        />
        <div>
          <span className="pro-hero-status">
            <span className="pro-dot" />
            {portfolioConfig.workStatus.status === "available"
              ? "Available for new work"
              : "Open to the right opportunity"}
          </span>
          <h1>{portfolioConfig.personal.name}</h1>
          <p className="pro-hero-role">{portfolioConfig.personal.title} · {portfolioConfig.personal.location}</p>
        </div>
      </div>

      <p className="pro-hero-bio">{portfolioConfig.personal.bio}</p>

      <div className="pro-stat-row">
        <div className="pro-stat">
          <span className="pro-stat-num">{years}+</span>
          <span className="pro-stat-label">Years shipping software</span>
        </div>
        <div className="pro-stat">
          <span className="pro-stat-num">
            {portfolioConfig.featuredProjects.length}+
          </span>
          <span className="pro-stat-label">Projects, teams &amp; side builds</span>
        </div>
        <div className="pro-stat">
          <span className="pro-stat-num">
            {CREDENTIALS.length || portfolioConfig.achievements.length}
          </span>
          <span className="pro-stat-label">Certifications &amp; awards</span>
        </div>
      </div>

      <div className="pro-hero-actions">
        <a href="#contact" className="pro-btn pro-btn--primary">
          Let's talk
        </a>
        {defaultResume && (
          <a
            href={defaultResume.url}
            className="pro-btn pro-btn--ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download resume
          </a>
        )}
      </div>

      {CREDENTIALS.length > 0 && (
        <div className="pro-credentials">
          {CREDENTIALS.map((c) => (
            <span className="pro-credential" key={c.id}>
              <span className="pro-credential-icon">{c.icon}</span>
              {c.title}
            </span>
          ))}
        </div>
      )}

      <div className="pro-skills">
        {Object.entries(portfolioConfig.technicalSkills).map(
          ([category, skills]) => (
            <div className="pro-skill-group" key={category}>
              <span className="pro-skill-category">{category}</span>
              <p className="pro-skill-list">{skills.join(" · ")}</p>
            </div>
          ),
        )}
      </div>
    </section>
  );
}

export default ProAbout;

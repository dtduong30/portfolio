import { portfolioConfig } from "../config/portfolio.config";

function ProHeader() {
  return (
    <header className="pro-nav">
      <div className="pro-nav-inner">
        <a href="/" className="pro-nav-mark">
          {portfolioConfig.personal.name
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </a>
        <nav className="pro-nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#side-projects">Side projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="pro-nav-cta">
          Hire me →
        </a>
      </div>
    </header>
  );
}

export default ProHeader;

import { useState, useEffect } from "react";
import { loadProjects } from "../config/projectShowcase.config";
import { ProjectExperience } from "../types";
import { useLanguage } from "../contexts/LanguageContext";
import "./ProjectShowcase.css";

export default function ProjectShowcase() {
  const { t } = useLanguage();
  const [projects, setProjects] = useState<ProjectExperience[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let isMounted = true;

    loadProjects().then((data) => {
      if (isMounted && data) {
        setProjects(data);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const totalSlides = projects.length;

  const changeSlide = (nextIndex: number) => {
    if (isAnimating || totalSlides <= 1 || nextIndex === currentSlide) return;

    setIsAnimating(true);
    setCurrentSlide(nextIndex);

    window.setTimeout(() => {
      setIsAnimating(false);
    }, 180);
  };

  const nextSlide = () => {
    changeSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    changeSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    changeSlide(index);
  };

  if (totalSlides === 0) return null;

  const project = projects[currentSlide];
  const visibleContributions = project.keyContributions.slice(0, 5);

  return (
    <section id="projects" className="card github-replay project-showcase">
      <div className="card-header">
        <div className="replay-header-content">
          <span>{t.showcaseTitle}</span>
          <span className="showcase-counter">
            {currentSlide + 1} / {totalSlides}
          </span>
        </div>
      </div>

      <div className="replay-carousel">
        <button
          type="button"
          className="carousel-hitbox prev-hitbox"
          onClick={prevSlide}
          aria-label="Previous project"
          disabled={isAnimating || totalSlides <= 1}
        >
          <span className="carousel-nav">◀</span>
        </button>

        <article className={`slide project-slide ${isAnimating ? "animating" : ""}`}>
          <header className="project-header">
            {project.logo && (
              <img
                src={project.logo}
                alt={project.name}
                className="project-logo"
              />
            )}
            <div className="project-title-block">
              <h3 className="project-name" title={project.name}>
                <span className="project-name-text">{project.name}</span>
              </h3>
            </div>
          </header>

          <span className="project-period">{project.period}</span>

          <div className="project-meta">
            <div className="meta-item">
              <span className="meta-label">{t.showcasePosition}</span>
              <span className="meta-value">{project.position}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">{t.showcaseTeamSize}</span>
              <span className="meta-value">
                {project.teamSize} {t.showcaseMembers}
              </span>
            </div>
          </div>

          <div className="project-section">
            <span className="meta-label">{t.showcaseOverview}</span>
            <p className="project-overview-text">{project.overview}</p>
          </div>

          <div className="project-section">
            <span className="meta-label">{t.showcaseTechStack}</span>
            <div className="skill-tags">
              {project.techStack.map((tech) => (
                <span key={tech} className="skill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="project-section">
            <span className="meta-label">{t.showcaseKeyContributions}</span>
            <ul className="project-contributions-list">
              {visibleContributions.map((item, index) => (
                <li key={`${project.id}-contribution-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        </article>

        <button
          type="button"
          className="carousel-hitbox next-hitbox"
          onClick={nextSlide}
          aria-label="Next project"
          disabled={isAnimating || totalSlides <= 1}
        >
          <span className="carousel-nav">▶</span>
        </button>
      </div>

      <div className="carousel-dots">
        {projects.map((projectItem, index) => (
          <button
            key={projectItem.id}
            type="button"
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

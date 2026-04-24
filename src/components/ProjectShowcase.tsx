import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { loadProjects } from "../config/projectShowcase.config";
import { ProjectExperience } from "../types";
import { useLanguage } from "../contexts/LanguageContext";
import "./ProjectShowcase.css";

export default function ProjectShowcase() {
  const { t } = useLanguage();
  const [projects, setProjects] = useState<ProjectExperience[]>([]);
  const [selected, setSelected] = useState<ProjectExperience | null>(null);

  useEffect(() => {
    let isMounted = true;
    loadProjects().then((data) => {
      if (isMounted && data) setProjects(data);
    });
    return () => { isMounted = false; };
  }, []);

  const closeModal = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", onKey);
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.classList.remove("modal-open");
      window.scrollTo(0, scrollY);
    };
  }, [selected, closeModal]);

  if (projects.length === 0) return null;

  return (
    <section id="projects" className="card project-showcase">
      <div className="card-header">
        <span>{t.showcaseTitle}</span>
        <span className="showcase-count">{projects.length} projects</span>
      </div>

      <div className="project-overview-grid">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            className="project-overview-card"
            onClick={() => setSelected(project)}
            aria-label={`View details for ${project.name}`}
          >
            <div className="poc-header">
              {project.logo && (
                <img src={project.logo} alt={project.name} className="poc-logo" />
              )}
              <div className="poc-title-block">
                <span className="poc-name">{project.name}</span>
                <span className="poc-period">{project.period}</span>
              </div>
            </div>
            <p className="poc-overview">{project.overview}</p>
            <div className="poc-footer">
              <span className="poc-position">{project.position}</span>
              <div className="poc-tech-preview">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="poc-tech-tag">{tech}</span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="poc-tech-more">+{project.techStack.length - 3}</span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {selected && createPortal(
        <div
          className="project-modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={selected.name}
        >
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pm-header">
              <div className="pm-title-row">
                {selected.logo && (
                  <img src={selected.logo} alt={selected.name} className="pm-logo" />
                )}
                <div className="pm-title-block">
                  <h3 className="pm-name">{selected.name}</h3>
                  <span className="pm-period">{selected.period}</span>
                </div>
              </div>
              <button
                type="button"
                className="pm-close"
                onClick={closeModal}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="pm-meta">
              <div className="pm-meta-item">
                <span className="pm-meta-label">{t.showcasePosition}</span>
                <span className="pm-meta-value">{selected.position}</span>
              </div>
              <div className="pm-meta-item">
                <span className="pm-meta-label">{t.showcaseTeamSize}</span>
                <span className="pm-meta-value">{selected.teamSize} {t.showcaseMembers}</span>
              </div>
            </div>

            <div className="pm-section">
              <span className="pm-section-label">{t.showcaseOverview}</span>
              <p className="pm-overview-text">{selected.overview}</p>
            </div>

            <div className="pm-section">
              <span className="pm-section-label">{t.showcaseTechStack}</span>
              <div className="skill-tags">
                {selected.techStack.map((tech) => (
                  <span key={tech} className="skill-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="pm-section">
              <span className="pm-section-label">{t.showcaseKeyContributions}</span>
              <ul className="pm-contributions">
                {selected.keyContributions.map((item, i) => (
                  <li key={`contrib-${i}`}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}

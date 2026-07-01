import { useEffect, useState } from "react";
import { loadProjects } from "../config/projectShowcase.config";
import { sideProjectsConfig } from "../config/sideProjects.config";
import { ProjectExperience } from "../types";

function ProProjects() {
  const [projects, setProjects] = useState<ProjectExperience[]>([]);
  const [selected, setSelected] = useState<ProjectExperience | null>(null);
  const sideProjects = sideProjectsConfig;

  useEffect(() => {
    let mounted = true;
    loadProjects().then((data) => {
      if (mounted && data) setProjects(data);
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      {projects.length > 0 && (
        <section id="work" className="pro-section">
          <div className="pro-section-head">
            <span className="pro-section-eyebrow">Professional work</span>
            <h2>What I've worked on</h2>
          </div>

          <div className="pro-work-list">
            {projects.map((p, i) => (
              <button
                key={p.id}
                className="pro-work-row"
                onClick={() => setSelected(p)}
                type="button"
              >
                <span className="pro-work-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pro-work-main">
                  <span className="pro-work-tag">
                    {p.position} · {p.period}
                  </span>
                  <h3>{p.name}</h3>
                  <p>{p.overview}</p>
                  <div className="pro-work-tags">
                    {p.techStack.slice(0, 5).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <span className="pro-work-arrow" aria-hidden="true">
                  ↗
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {sideProjects.length > 0 && (
        <section id="side-projects" className="pro-section">
          <div className="pro-section-head">
            <span className="pro-section-eyebrow">Outside of work</span>
            <h2>Side projects</h2>
            <p className="pro-section-note">
              Things I built because I wanted to, not because a client asked.
            </p>
          </div>

          <div className="pro-side-grid">
            {sideProjects.map((p) => {
              const Wrapper = p.demoUrl || p.sourceUrl ? "a" : "div";
              return (
                <Wrapper
                  key={p.id}
                  className="pro-side-card"
                  {...(Wrapper === "a"
                    ? {
                        href: p.demoUrl || p.sourceUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                >
                  {p.image && (
                    <div className="pro-side-shot">
                      <img src={p.image} alt={p.title} loading="lazy" />
                    </div>
                  )}
                  <div className="pro-side-body">
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <div className="pro-work-tags">
                      {p.tech.slice(0, 4).map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    {(p.demoUrl || p.sourceUrl) && (
                      <div className="pro-side-links">
                        {p.demoUrl && <span>View project ↗</span>}
                        {p.sourceUrl && (
                          <a
                            href={p.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Source
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </section>
      )}

      {selected && (
        <div
          className="pro-modal-overlay"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="pro-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="pro-modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="pro-modal-head">
              <div>
                <h3>{selected.name}</h3>
                <span>
                  {selected.position} · {selected.period}
                </span>
              </div>
            </div>
            <div className="pro-modal-meta">
              <span>{selected.teamSize} team members</span>
            </div>
            <p>{selected.overview}</p>
            <div className="pro-work-tags">
              {selected.techStack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <ul className="pro-modal-contributions">
              {selected.keyContributions.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default ProProjects;

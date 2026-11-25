import { projects } from '../data.js';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title reveal">Projects</h2>
      {projects.map((p) => (
        <article className="project reveal" key={p.title}>
          <div className="project-meta">
            <span className="tag">{p.tag}</span>
            {p.date && <span className="date">{p.date}</span>}
          </div>
          <h3>{p.title}</h3>
          <ul>
            {p.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <ul className="chips">
            {p.chips.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          {p.note && <p className="project-note">{p.note}</p>}
          {p.link && (
            <p className="project-links">
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                View on GitHub →
              </a>
            </p>
          )}
          {p.private && (
            <p className="project-links">
              <span className="private">Private repository</span>
            </p>
          )}
        </article>
      ))}
    </section>
  );
}

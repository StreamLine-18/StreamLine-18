import { profile, stats, education } from '../data.js';

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title reveal">About</h2>
      <div className="about-grid">
        <p className="lead reveal">{profile.summary}</p>
        <div className="stats">
          {stats.map((s) => (
            <div className="stat reveal" key={s.label}>
              <strong className="count" data-to={s.to} data-decimals={s.decimals}>
                0
              </strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="edu reveal">
        <h3>Education</h3>
        <p>
          <strong>{education.school}</strong>, {education.city}
        </p>
        <p>{education.degree}</p>
        <p className="muted">{education.coursework}</p>
      </div>
    </section>
  );
}

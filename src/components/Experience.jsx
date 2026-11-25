import { experience } from '../data.js';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title reveal">Experience</h2>
      <div className="timeline">
        <div className="tl-line">
          <div className="tl-fill" />
        </div>
        {experience.map((e) => (
          <div className="tl-item reveal" key={e.title}>
            <span className="tl-dot" />
            <span className="date">{e.date}</span>
            <h3>{e.title}</h3>
            <p className="org">{e.org}</p>
            <ul>
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

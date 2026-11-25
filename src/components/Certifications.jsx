import { certifications } from '../data.js';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2 className="section-title reveal">Certifications</h2>
      <div className="cert-grid">
        {certifications.map((c) => (
          <div className="cert reveal" key={c.title}>
            <span className="date">{c.date}</span>
            <h3>{c.title}</h3>
            {c.text && <p>{c.text}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

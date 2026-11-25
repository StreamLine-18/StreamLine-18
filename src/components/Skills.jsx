import { skills, softSkills } from '../data.js';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title reveal">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card reveal" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="soft reveal">{softSkills}</p>
    </section>
  );
}

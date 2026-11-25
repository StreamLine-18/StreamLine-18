import { profile } from '../data.js';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title reveal">Let's Work Together</h2>
      <p className="lead reveal">
        Open to Software Engineering and IT Infrastructure / IT Support roles.
      </p>
      <a className="big-mail reveal" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <div className="links reveal">
        <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="btn" href={profile.phoneHref}>{profile.phone}</a>
      </div>
    </section>
  );
}

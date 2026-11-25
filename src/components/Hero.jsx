import { lazy, Suspense, useEffect, useState } from 'react';
import { profile } from '../data.js';
import { useDeferredMount } from '../hooks/useDeferredMount.js';

// three.js is large, so load it only when the 3D card is actually shown
const Lanyard = lazy(() => import('./Lanyard.jsx'));

const WIDE = '(min-width: 900px)';
const REDUCED = '(prefers-reduced-motion: reduce)';

function useShow3d() {
  const query = () => window.matchMedia(WIDE).matches && !window.matchMedia(REDUCED).matches;
  const [show, setShow] = useState(query);

  useEffect(() => {
    const lists = [window.matchMedia(WIDE), window.matchMedia(REDUCED)];
    const update = () => setShow(query());
    lists.forEach((m) => m.addEventListener('change', update));
    return () => lists.forEach((m) => m.removeEventListener('change', update));
  }, []);

  return show;
}

export default function Hero() {
  const show3d = useShow3d();
  // Mount the heavy 3D card only after the text intro has played
  const cardReady = useDeferredMount(2200);
  const avatar = `${import.meta.env.BASE_URL}avatar.png`;
  const cardBack = `${import.meta.env.BASE_URL}card-back.svg`;

  return (
    <section className={`hero${show3d ? ' has-3d' : ''}`}>
      {/* Decorative lines: fallback when the 3D card is not shown */}
      <svg className="hero-art" viewBox="0 0 400 400" fill="none" aria-hidden="true">
        <path d="M60 340 C 60 120, 340 120, 340 340" />
        <path d="M100 340 C 100 170, 300 170, 300 340" />
        <path d="M140 340 C 140 220, 260 220, 260 340" />
        <circle cx="200" cy="260" r="40" />
        <path d="M20 340 H 380" />
      </svg>

      {show3d && cardReady && (
        <div className="hero-lanyard" aria-hidden="true">
          <Suspense fallback={null}>
            <Lanyard
              frontImage={avatar}
              backImage={cardBack}
              cardColor="#131722"
              strapColor="#14b8a6"
              finish="glossy"
              size={0.4}
              anchor="right"
              strapLength={0.4}
            />
          </Suspense>
        </div>
      )}

      <div className="hero-inner">
        <p className="eyebrow reveal-hero">Hello, I'm</p>
        <h1 className="split">{profile.name}</h1>
        <p className="role reveal-hero">
          {profile.role} <span>|</span> {profile.focus}
        </p>
        <div className="hero-cta reveal-hero">
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn" href="#contact">Get in Touch</a>
        </div>
        <p className="location reveal-hero">{profile.location}</p>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}

import { lazy, Suspense, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useAnimations } from './hooks/useAnimations.js';
import { useDeferredMount } from './hooks/useDeferredMount.js';

// WebGL fluid trail: loaded on demand, and only for devices with a mouse
const GlowCursor = lazy(() => import('./components/GlowCursor.jsx'));

const canShowGlow = () =>
  window.matchMedia('(hover: hover)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function App() {
  useAnimations();
  const [glowAllowed] = useState(canShowGlow);
  // Start after the hero intro and the 3D card, so the three never init together
  const glowReady = useDeferredMount(3600);
  const showGlow = glowAllowed && glowReady;

  return (
    <>
      {/* Page background: dot grid and slowly drifting glows, plus a film grain overlay */}
      <div className="bg" aria-hidden="true">
        <div className="bg-grid" />
        <div className="bg-glow bg-glow-a" />
        <div className="bg-glow bg-glow-b" />
      </div>
      <div className="bg-grain" aria-hidden="true" />

      {showGlow && (
        <Suspense fallback={null}>
          <GlowCursor
            className="glow-cursor--fixed"
            color="#5eead4"
            secondaryColor="#818cf8"
            intensity={1}
            trailWidth={3}
            linger={1.2}
            glow={1}
            quality="low"
            maxDevicePixelRatio={1}
          />
        </Suspense>
      )}

      <div className="cursor" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

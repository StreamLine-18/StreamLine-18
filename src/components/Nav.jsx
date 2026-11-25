import { useEffect, useMemo, useState } from 'react';
import PillNav from './PillNav.jsx';
import { navLinks } from '../data.js';

// Recolor the default purple-gray theme to match the site palette
const PALETTE = {
  '--pn-surface': 'rgba(19, 23, 34, 0.72)',
  '--pn-solid': '#131722',
  '--pn-edge': 'rgba(94, 234, 212, 0.14)',
  '--pn-tile': 'linear-gradient(180deg, #1c2233 0%, #151a28 100%)',
  '--pn-dot': '#5eead4',
};

export default function Nav() {
  const [active, setActive] = useState('');
  const logo = `${import.meta.env.BASE_URL}favicon.svg`;
  const items = useMemo(() => navLinks.map(({ label, href }) => ({ label, href })), []);

  // Scroll spy: the last section whose top has passed 40% of the viewport is active
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      let current = '';
      sections.forEach((s) => {
        if (s.getBoundingClientRect().top <= line) current = `#${s.id}`;
      });
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <header className="nav">
      <PillNav
        logo={logo}
        logoAlt="Back to top"
        logoHref="#top"
        items={items}
        activeHref={active}
        theme="dark"
        highlightColor="#5eead4"
        ariaLabel="Main"
        style={PALETTE}
      />
    </header>
  );
}

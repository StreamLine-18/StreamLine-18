import { useEffect } from 'react';
import {
  animate,
  createAnimatable,
  createDrawable,
  createTimeline,
  onScroll,
  splitText,
  stagger,
} from 'animejs';

/**
 * Wires up all Anime.js animations for the page.
 * Selector-based on purpose: the markup is static, and everything is
 * reverted in the cleanup so React StrictMode's double-invoke is safe.
 */
export function useAnimations() {
  useEffect(() => {
    const root = document.documentElement;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.classList.remove('js');
      return undefined;
    }

    const cleanups = [];
    const track = (anim) => {
      cleanups.push(() => anim.revert());
      return anim;
    };

    try {
      /* ---------- Hero intro: split text + timeline ----------
         The heading and the other hero text are hidden by CSS until this starts.
         It waits for web fonts first, so the text does not re-wrap mid-animation. */
      const heading = document.querySelector('.hero h1');
      let cancelled = false;
      let stopIntro = null;
      cleanups.push(() => {
        cancelled = true;
        stopIntro?.();
      });

      const startIntro = () => {
        if (cancelled) return;
        try {
          const splitter = splitText(heading, { chars: true });
          // Hide every character before revealing the heading, so the full name never flashes
          splitter.chars.forEach((c) => {
            c.style.opacity = 0;
          });
          heading.classList.add('is-split');

          const intro = createTimeline({ defaults: { ease: 'outExpo' } })
            .add('.eyebrow', { opacity: [0, 1], y: [20, 0], duration: 700 })
            .add(
              splitter.chars,
              {
                opacity: [0, 1],
                y: ['60%', '0%'],
                duration: 900,
                delay: stagger(25),
              },
              '-=400',
            )
            .add(
              '.hero .reveal-hero:not(.eyebrow)',
              {
                opacity: [0, 1],
                y: [24, 0],
                duration: 800,
                delay: stagger(120),
              },
              '-=500',
            );

          stopIntro = () => {
            intro.revert();
            splitter.revert();
            heading.classList.remove('is-split');
          };
        } catch (err) {
          console.error('Hero intro failed:', err);
          root.classList.remove('js');
        }
      };

      const fontsReady = document.fonts?.ready ?? Promise.resolve();
      // Do not wait longer than 1.2s if the font request is slow
      Promise.race([fontsReady, new Promise((resolve) => setTimeout(resolve, 1200))]).then(startIntro);

      /* ---------- Hero SVG line drawing (looping) ---------- */
      track(
        animate(createDrawable('.hero-art path, .hero-art circle'), {
          draw: ['0 0', '0 1', '1 1'],
          ease: 'inOutQuad',
          duration: 3500,
          delay: stagger(250),
          loop: true,
        }),
      );

      /* ---------- Scroll hint bounce ---------- */
      track(
        animate('.scroll-hint span', {
          y: [0, 14],
          opacity: [1, 0],
          duration: 1400,
          ease: 'inOutQuad',
          loop: true,
        }),
      );

      /* ---------- Reveal on scroll (replays every time it enters) ---------- */
      const countUp = (el) => {
        const to = parseFloat(el.dataset.to);
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const state = { v: 0 };
        return animate(state, {
          v: to,
          duration: 1500,
          ease: 'outExpo',
          onUpdate: () => {
            el.textContent = state.v.toFixed(decimals);
          },
        });
      };

      // Animations currently applied to each revealed element
      const running = new Map();

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target;

            // Leaving the viewport: undo the animations so they can replay later
            if (!entry.isIntersecting) {
              (running.get(el) || []).forEach((a) => a.revert());
              running.delete(el);
              const counter = el.querySelector('.count');
              if (counter) counter.textContent = '0';
              return;
            }

            if (running.has(el)) return;

            // Chip lists animate when they themselves scroll into view,
            // so chips at the bottom of tall cards are not missed.
            if (el.classList.contains('chips')) {
              running.set(
                el,
                [...el.querySelectorAll('li')].map((chip, i) =>
                  animate(chip, {
                    opacity: [0, 1],
                    scale: [0.6, 1],
                    duration: 500,
                    delay: 100 + i * 80,
                    ease: 'outBack',
                  }),
                ),
              );
              return;
            }

            const anims = [
              animate(el, {
                opacity: [0, 1],
                y: [40, 0],
                duration: 900,
                ease: 'outExpo',
              }),
            ];

            const counter = el.querySelector('.count');
            if (counter) anims.push(countUp(counter));

            running.set(el, anims);
          });
        },
        // Trigger slightly after an element enters, so it is visibly on screen
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
      );

      const revealEls = document.querySelectorAll('.reveal');
      revealEls.forEach((el) => {
        // Chips start hidden and pop in when their own list becomes visible
        el.querySelectorAll('.chips li').forEach((chip) => {
          chip.style.opacity = 0;
        });
        observer.observe(el);
        el.querySelectorAll('.chips').forEach((list) => observer.observe(list));
      });

      cleanups.push(() => {
        observer.disconnect();
        running.forEach((anims) => anims.forEach((a) => a.revert()));
        running.clear();
        revealEls.forEach((el) => {
          el.querySelectorAll('.chips li').forEach((chip) => {
            chip.style.opacity = '';
          });
          const counter = el.querySelector('.count');
          if (counter) counter.textContent = '0';
        });
      });

      /* ---------- Timeline line grows with scroll ---------- */
      track(
        animate('.tl-fill', {
          scaleY: [0, 1],
          ease: 'linear',
          autoplay: onScroll({ target: '.timeline', sync: true }),
        }),
      );

      /* ---------- Background glows drifting slowly ---------- */
      track(
        animate('.bg-glow-a', {
          x: [0, 160],
          y: [0, 120],
          duration: 16000,
          ease: 'inOutSine',
          alternate: true,
          loop: true,
        }),
      );
      track(
        animate('.bg-glow-b', {
          x: [0, -140],
          y: [0, -110],
          duration: 20000,
          ease: 'inOutSine',
          alternate: true,
          loop: true,
        }),
      );

      /* ---------- Cursor follower + card hover (listeners removed via AbortController) ---------- */
      const ac = new AbortController();
      const { signal } = ac;
      cleanups.push(() => ac.abort());

      if (window.matchMedia('(hover: hover)').matches) {
        const cursorEl = document.querySelector('.cursor');
        const dotEl = document.querySelector('.cursor-dot');
        const cursor = createAnimatable(cursorEl, { x: 350, y: 350, ease: 'out(3)' });
        cleanups.push(() => {
          cursor.revert();
          cursorEl.style.opacity = '';
          dotEl.style.opacity = '';
          dotEl.style.transform = '';
          root.classList.remove('custom-cursor');
        });

        // The native cursor is only hidden after the first mouse move,
        // so it is never invisible before the custom one is on screen.
        window.addEventListener(
          'mousemove',
          (e) => {
            root.classList.add('custom-cursor');
            cursorEl.style.opacity = 1;
            dotEl.style.opacity = 1;
            dotEl.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            cursor.x(e.clientX).y(e.clientY);
          },
          { signal },
        );

        // Delegated, so links that React re-renders later (e.g. the pill nav) still work
        document.addEventListener(
          'mouseover',
          (e) => {
            const target = e.target instanceof Element ? e.target : null;
            const hot = target?.closest('a, button, .skill-card, .project, .cert');
            cursorEl.classList.toggle('is-hover', Boolean(hot));
          },
          { signal },
        );
      }

      document.querySelectorAll('.skill-card, .cert, .project').forEach((card) => {
        card.addEventListener(
          'mouseenter',
          () => animate(card, { translateY: -6, duration: 250, ease: 'outQuad' }),
          { signal },
        );
        card.addEventListener(
          'mouseleave',
          () => animate(card, { translateY: 0, duration: 400, ease: 'outElastic(1, .6)' }),
          { signal },
        );
      });
    } catch (err) {
      // Show all content if something fails
      console.error('Animation setup failed:', err);
      root.classList.remove('js');
    }

    return () => {
      cleanups.reverse().forEach((fn) => {
        try {
          fn();
        } catch (err) {
          console.error(err);
        }
      });
    };
  }, []);
}

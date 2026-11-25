import { useEffect, useState } from 'react';

/**
 * Becomes true `delay` ms after the page has finished loading.
 * Used to start heavy WebGL effects only once the hero intro animation is done,
 * so they do not compete with it for the main thread and GPU.
 */
export function useDeferredMount(delay = 2400) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timer = 0;
    const start = () => {
      timer = window.setTimeout(() => setReady(true), delay);
    };

    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('load', start);
    };
  }, [delay]);

  return ready;
}

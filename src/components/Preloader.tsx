import { useEffect, useState } from 'react';
import { hero, site } from '../data/site';
import { useScrollLock } from '../hooks';
import { Wordmark } from './Wordmark';

const SESSION_KEY = 'evntiqa_intro_seen';
const MIN_VISIBLE_MS = 2000; // give the radar rings time to expand at least once
const HARD_CAP_MS = 4500; // absolute ceiling — dismiss even if assets never finish

/**
 * Branded preloader shown on first visit only (sessionStorage gates re-shows).
 *
 * Network-resilient dismiss: we wait for the EARLIEST of:
 *   • document.fonts.ready  (webfonts settled — wordmark looks correct)
 *   • window 'load'         (all critical assets fetched)
 *   • HARD_CAP_MS            (always dismisses, even on a flaky 2G connection)
 *
 * MIN_VISIBLE_MS keeps the intro on screen long enough to feel intentional
 * even on instant-cache loads. Scroll is locked while visible.
 */
export function Preloader() {
  const seen = readSeen();
  const [phase, setPhase] = useState<'visible' | 'fading' | 'gone'>(seen ? 'gone' : 'visible');

  useScrollLock(phase === 'visible');

  useEffect(() => {
    if (phase !== 'visible') return;
    const start = Date.now();
    let dismissed = false;

    const fadeOut = () => {
      if (dismissed) return;
      dismissed = true;
      const wait = Math.max(0, MIN_VISIBLE_MS - (Date.now() - start));
      window.setTimeout(() => {
        setPhase('fading');
        try {
          sessionStorage.setItem(SESSION_KEY, '1');
        } catch {
          /* sessionStorage blocked — harmless */
        }
        // Match the .preloader transition duration so the node unmounts after fade-out.
        window.setTimeout(() => setPhase('gone'), 800);
      }, wait);
    };

    // (1) Webfonts ready — preferred trigger so the wordmark always renders
    //     in the correct typeface before we reveal the page.
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready.then(fadeOut).catch(() => {
        /* ignore — other triggers will fire */
      });
    }

    // (2) Window 'load' — fires after all images/scripts are fetched.
    if (document.readyState === 'complete') {
      fadeOut();
    } else {
      window.addEventListener('load', fadeOut);
    }

    // (3) Hard cap — guarantees dismiss on poor connections.
    const cap = window.setTimeout(fadeOut, HARD_CAP_MS);

    return () => {
      window.removeEventListener('load', fadeOut);
      window.clearTimeout(cap);
    };
  }, [phase]);

  if (phase === 'gone') return null;

  return (
    <div
      className={`preloader ${phase === 'fading' ? 'done' : ''}`}
      role="status"
      aria-label={`Loading ${site.name}`}
      aria-live="polite"
    >
      <div className="pl-bg" aria-hidden="true" />

      <div className="pl-inner">
        {/* Three brand-blue radar rings expand outward from behind the wordmark */}
        <div className="pl-rings" aria-hidden="true">
          <span /><span /><span />
        </div>

        {/* Lowercase "evntiqa" wordmark, white on navy */}
        <div className="pl-logo">
          <Wordmark variant="light" height={44} />
        </div>

        {/* Sweeping animated underline */}
        <div className="pl-underline" aria-hidden="true" />

        {/* Tagline (fades up last) */}
        <div className="pl-tag">{hero.tag}</div>
      </div>
    </div>
  );
}

function readSeen(): boolean {
  try {
    return Boolean(sessionStorage.getItem(SESSION_KEY));
  } catch {
    return false;
  }
}

import { useEffect, useState } from 'react';
import { hero, site } from '../data/site';
import { useScrollLock } from '../hooks';

const SESSION_KEY = 'evntiqa_intro_seen';
const MIN_VISIBLE_MS = 1700;
const HARD_CAP_MS = 4500;

/**
 * Branded preloader shown on first visit only (sessionStorage gates re-shows).
 * - Always dismisses (hard cap) so a slow network never traps the page.
 * - Locks scroll while visible.
 * - Hides itself entirely after the fade-out so it never intercepts clicks.
 */
export function Preloader() {
  const seen = readSeen();
  const [phase, setPhase] = useState<'visible' | 'fading' | 'gone'>(seen ? 'gone' : 'visible');

  useScrollLock(phase === 'visible');

  useEffect(() => {
    if (phase !== 'visible') return;
    const start = Date.now();
    let dismissed = false;

    const dismiss = () => {
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
        window.setTimeout(() => setPhase('gone'), 800);
      }, wait);
    };

    if (document.readyState === 'complete') dismiss();
    else window.addEventListener('load', dismiss);
    const cap = window.setTimeout(dismiss, HARD_CAP_MS);

    return () => {
      window.removeEventListener('load', dismiss);
      window.clearTimeout(cap);
    };
  }, [phase]);

  if (phase === 'gone') return null;

  return (
    <div
      className={`preloader ${phase === 'fading' ? 'done' : ''}`}
      role="status"
      aria-label={`Loading ${site.name}`}
    >
      <div className="pl-bg" aria-hidden="true" />
      <div className="pl-inner">
        <span
          className="pl-logo font-display font-extrabold text-[26px] text-white tracking-tight"
        >
          {site.name}
        </span>
        <div className="pl-bar">
          <span />
        </div>
        <div className="pl-tag">{hero.tag.replace(' · ', ' · ')}</div>
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

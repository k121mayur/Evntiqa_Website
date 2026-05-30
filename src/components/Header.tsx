import { useState } from 'react';
import { site } from '../data/site';
import { useStickyHeader, useScrollLock } from '../hooks';

export function Header() {
  const scrolled = useStickyHeader(24);
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useScrollLock(open);

  // The header turns from transparent (over the navy hero) to white-on-scroll.
  // The brand logo swaps from white wordmark to the blue one to keep contrast.
  // While the mobile menu is open the background is white, so we force the dark logo too.
  const onLight = scrolled || open;

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-[100] transition-[background,box-shadow,border-color] duration-[350ms] ease-brand border-b',
          onLight
            ? 'bg-white/[.86] backdrop-saturate-[180%] backdrop-blur-[14px] shadow-[0_1px_0_rgba(11,20,38,.06)] border-line'
            : 'border-transparent',
        ].join(' ')}
      >
        <div className="w-full max-w-content mx-auto px-7">
          <nav className="flex items-center justify-between h-[72px]" aria-label="Primary">
            {/* Logo — swap the two SVGs in /public/brand to ship real artwork */}
            <a href="#top" className="flex items-center" aria-label={`${site.name} home`}>
              <BrandLogo dark={onLight} />
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-[34px]">
              {site.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={[
                    'relative text-[14.5px] font-semibold transition-colors duration-[250ms] ease-brand',
                    'after:content-[""] after:absolute after:left-0 after:-bottom-[6px] after:h-[2px] after:rounded-full after:bg-brand after:w-0 after:transition-[width] after:duration-[250ms] after:ease-brand hover:after:w-full',
                    onLight ? 'text-ink-2 hover:text-brand' : 'text-white/80 hover:text-white',
                  ].join(' ')}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-[14px]">
              <a href={site.cta.href} className="btn btn-primary hidden lg:inline-flex">
                {site.cta.label}
              </a>
              <button
                className="lg:hidden w-11 h-11 rounded-[10px] flex items-center justify-center"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((v) => !v)}
              >
                <Hamburger open={open} dark={onLight} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu (slides + fades into view) */}
      <div
        id="mobile-menu"
        className={[
          'fixed inset-0 z-[99] bg-white pt-[96px] px-7 pb-10 flex flex-col gap-[6px] transition-[opacity,transform] duration-[300ms] ease-brand',
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none',
        ].join(' ')}
      >
        {site.nav.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-display text-[22px] font-bold py-[14px] px-1 border-b border-line text-ink"
          >
            {link.label}
          </a>
        ))}
        <a
          href={site.cta.href}
          onClick={() => setOpen(false)}
          className="btn btn-primary mt-6 justify-center"
        >
          {site.cta.label}
        </a>
      </div>
    </>
  );
}

/** Evntiqa wordmark — switches colour for light vs dark backgrounds. */
function BrandLogo({ dark }: { dark: boolean }) {
  return (
    <span
      className={[
        'font-display font-extrabold tracking-tight text-[22px] leading-none transition-colors duration-[250ms]',
        dark ? 'text-ink' : 'text-white',
      ].join(' ')}
    >
      Evntiqa
    </span>
  );
}

/** Animated hamburger / close icon. */
function Hamburger({ open, dark }: { open: boolean; dark: boolean }) {
  const bar = `block w-[22px] h-[2px] rounded-[2px] transition-[transform,opacity,background] duration-[300ms] ease-brand absolute left-1/2 -translate-x-1/2`;
  const colour = dark || open ? 'bg-ink' : 'bg-white';
  return (
    <span className="relative w-[22px] h-[16px] block">
      <span
        className={`${bar} ${open ? '!bg-ink translate-y-[7px] rotate-45' : `${colour} top-0`}`}
      />
      <span
        className={`${bar} top-[7px] ${colour} ${open ? 'opacity-0' : 'opacity-100'}`}
      />
      <span
        className={`${bar} ${open ? '!bg-ink translate-y-[7px] -rotate-45' : `${colour} top-[14px]`}`}
      />
    </span>
  );
}

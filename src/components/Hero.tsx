import { hero, site } from '../data/site';
import { Container, Reveal } from './ui';

export function Hero() {
  return (
    <section
      id="top"
      className="relative bg-navy text-white overflow-hidden pt-[160px] pb-[clamp(90px,11vw,150px)]"
      aria-labelledby="hero-heading"
    >
      {/* Decorative backdrop: radial glows + faint masked grid + drifting concentric rings */}
      <div className="navy-bg" aria-hidden="true">
        <div className="navy-grid" />
        <div className="navy-rings">
          <span /><span /><span /><span />
        </div>
      </div>

      <Container className="relative">
        <div className="max-w-[880px]">
          <Reveal
            as="span"
            className="inline-flex items-center gap-[9px] font-display text-[13px] font-semibold tracking-[.06em] text-white/80 py-[7px] pr-4 pl-3 border border-white/[.16] rounded-full bg-white/[.04] mb-[26px]"
          >
            <span
              className="w-[7px] h-[7px] rounded-full bg-brand-bright"
              style={{ boxShadow: '0 0 0 4px rgba(61,123,255,.22)' }}
              aria-hidden="true"
            />
            {hero.tag}
          </Reveal>

          <Reveal
            as="h1"
            delay={1}
            id="hero-heading"
            className="!text-white font-extrabold leading-[1.02] tracking-[-.03em]"
            style={{ fontSize: 'clamp(40px,6.4vw,78px)' }}
          >
            {hero.titleLead}
            <span className="text-brand-bright">{hero.titleHighlight}</span>
          </Reveal>

          <Reveal
            as="p"
            delay={2}
            className="text-white/80 max-w-[680px] mt-[26px] leading-[1.55]"
            style={{ fontSize: 'clamp(17px,1.9vw,21px)' }}
          >
            {hero.sub}
          </Reveal>

          <Reveal
            delay={3}
            className="flex gap-[14px] items-start max-w-[640px] mt-6 py-4 px-5 border-l-2 border-brand-bright bg-white/[.03] rounded-r-[10px]"
          >
            <p className="text-white/70 text-[15.5px] leading-[1.5]">{hero.support}</p>
          </Reveal>

          <Reveal delay={4} className="mt-[38px] flex gap-[14px] flex-wrap items-center">
            <a href={site.cta.href} className="btn btn-light">
              {site.cta.label}
              <span className="arr" aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

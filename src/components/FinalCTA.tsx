import { finalCta, site } from '../data/site';
import { Container, Reveal } from './ui';

export function FinalCTA() {
  return (
    <section
      className="relative bg-navy text-white overflow-hidden text-center section-pad"
      aria-labelledby="final-heading"
    >
      <div className="navy-bg" aria-hidden="true">
        <div className="navy-rings">
          <span /><span /><span /><span />
        </div>
      </div>
      <Container className="relative z-[1]">
        <div className="max-w-[780px] mx-auto">
          <Reveal
            as="h2"
            id="final-heading"
            className="!text-white tracking-[-.03em] leading-[1.04]"
            style={{ fontSize: 'clamp(34px,5vw,62px)' }}
          >
            {finalCta.heading}
          </Reveal>
          <Reveal
            as="p"
            delay={1}
            className="text-white/80 max-w-[600px] mx-auto mt-6"
            style={{ fontSize: 'clamp(17px,1.9vw,20px)' }}
          >
            {finalCta.body}
          </Reveal>
          <Reveal delay={2}>
            <a href={site.cta.href} className="btn btn-light btn-lg mt-10">
              {site.cta.label}
              <span className="arr" aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

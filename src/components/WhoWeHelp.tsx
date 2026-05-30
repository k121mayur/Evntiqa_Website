import { site, who } from '../data/site';
import { Icon, type IconName } from './icons';
import { Container, Reveal, SectionHead } from './ui';

export function WhoWeHelp() {
  return (
    <section
      id="who"
      className="relative bg-navy text-white overflow-hidden section-pad"
      aria-labelledby="who-heading"
    >
      <div className="navy-bg navy-bg--who" aria-hidden="true">
        <div className="navy-grid" />
      </div>

      <Container className="relative">
        <SectionHead eyebrow={who.eyebrow} heading={who.heading} body={who.body} light />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-[1]">
          {who.cards.map((card, i) => (
            <Reveal key={card.title} delay={((i + 1) % 8 || 8) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}>
              <WhoCard {...card} />
            </Reveal>
          ))}
        </div>

        <Reveal className="relative z-[1] mt-[clamp(44px,6vw,64px)] flex items-center justify-center gap-[22px] flex-wrap text-center">
          <p
            className="font-display font-bold text-white tracking-[-.01em]"
            style={{ fontSize: 'clamp(20px,2.4vw,26px)' }}
          >
            {who.cta}
          </p>
          <a href={site.cta.href} className="btn btn-light">
            {site.cta.label}
            <span className="arr" aria-hidden="true">→</span>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}

function WhoCard({ icon, title, body }: { icon: IconName; title: string; body: string }) {
  return (
    <article
      className={[
        'h-full bg-white/[.045] border border-white/[.10] rounded-brand pt-[26px] px-6 pb-7',
        'transition-[transform,background,border-color] duration-[350ms] ease-brand',
        'hover:-translate-y-1.5 hover:bg-white/[.08] hover:border-[rgba(125,165,255,.4)]',
      ].join(' ')}
    >
      <div className="w-[42px] h-[42px] rounded-[11px] bg-[rgba(61,123,255,.18)] grid place-items-center text-brand-bright mb-[18px]">
        <Icon name={icon} className="w-[22px] h-[22px]" />
      </div>
      <h3 className="!text-white text-[18px] mb-[9px] tracking-[-.01em]">{title}</h3>
      <p className="text-white/70 text-[14.5px] leading-[1.5]">{body}</p>
    </article>
  );
}

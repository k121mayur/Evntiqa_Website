import { why } from '../data/site';
import { Icon, type IconName } from './icons';
import { Container, Reveal, SectionHead } from './ui';

export function WhyEvntiqa() {
  return (
    <section id="why" className="bg-white section-pad" aria-labelledby="why-heading">
      <Container>
        <SectionHead eyebrow={why.eyebrow} heading={why.heading} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {why.cards.map((card, i) => (
            <Reveal key={card.title} delay={((i + 1) % 6 || 6) as 1 | 2 | 3 | 4 | 5 | 6}>
              <WhyCard {...card} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WhyCard({ icon, title, body }: { icon: IconName; title: string; body: string }) {
  return (
    <article
      className={[
        'group relative pt-[34px] px-8 pb-9 rounded-brand border border-line bg-white overflow-hidden',
        'transition-[transform,box-shadow,border-color] duration-[400ms] ease-brand',
        'hover:-translate-y-2 hover:shadow-float hover:border-brand-100',
        // Soft corner glow on hover
        'before:content-[""] before:absolute before:-top-[40%] before:-right-[30%] before:w-[220px] before:h-[220px] before:rounded-full',
        'before:opacity-0 before:transition-opacity before:duration-[450ms] before:ease-brand before:pointer-events-none group-hover:before:opacity-100',
        'before:bg-[radial-gradient(circle,rgba(31,81,254,.10)_0%,rgba(31,81,254,0)_70%)]',
      ].join(' ')}
    >
      <div className="relative z-[1] flex items-start justify-between mb-6">
        <div
          className={[
            'w-14 h-14 rounded-[15px] bg-brand-50 border border-brand-100 grid place-items-center text-brand',
            'transition-[background,color,box-shadow,transform,border-color] duration-[400ms] ease-brand',
            'group-hover:bg-brand group-hover:text-white group-hover:border-brand group-hover:shadow-blue group-hover:-translate-y-0.5',
          ].join(' ')}
        >
          <Icon name={icon} className="w-[26px] h-[26px]" />
        </div>
        <div className="w-[34px] h-[34px] rounded-full border-[1.5px] border-line grid place-items-center text-brand opacity-0 -translate-x-1.5 transition-[opacity,transform,border-color] duration-[400ms] ease-brand group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-brand-100">
          <Icon name="arrow" className="w-[15px] h-[15px]" />
        </div>
      </div>
      <h3 className="relative z-[1] text-[20px] mb-[10px] tracking-[-.01em]">{title}</h3>
      <p className="relative z-[1] text-ink-2 text-[15.5px]">{body}</p>
    </article>
  );
}

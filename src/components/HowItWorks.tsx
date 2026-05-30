import { how } from '../data/site';
import { Icon } from './icons';
import { Container, Reveal, SectionHead } from './ui';

export function HowItWorks() {
  return (
    <section id="how" className="bg-paper section-pad" aria-labelledby="how-heading">
      <Container>
        <SectionHead eyebrow={how.eyebrow} heading={how.heading} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px] relative">
          {/* Dashed connector line behind cards (desktop only — handled in CSS) */}
          <div className="steps-line" aria-hidden="true" />
          {how.steps.map((step, i) => (
            <Reveal key={step.title} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <Step number={i + 1} {...step} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

interface StepProps {
  number: number;
  icon: 'searchPlus' | 'users' | 'send' | 'chart' | string;
  title: string;
  body: string;
}

function Step({ number, icon, title, body }: StepProps) {
  const padded = `0${number}`.slice(-2);
  return (
    <article
      className={[
        'group relative bg-white border border-line rounded-brand pt-[30px] px-[26px] pb-8 overflow-hidden z-[1]',
        'transition-[transform,box-shadow,border-color] duration-[400ms] ease-brand',
        'hover:-translate-y-2 hover:shadow-float hover:border-brand-100',
        // Top accent line that grows on hover
        'after:content-[""] after:absolute after:top-0 after:left-0 after:h-[3px] after:w-0 after:transition-[width] after:duration-[450ms] after:ease-brand',
        'after:bg-gradient-to-r after:from-brand after:to-brand-bright group-hover:after:w-full hover:after:w-full',
      ].join(' ')}
    >
      <div className="relative z-[1] flex items-center justify-between mb-[22px]">
        <span
          className={[
            'w-[46px] h-[46px] rounded-[13px] flex-none grid place-items-center',
            'font-display font-extrabold text-[17px] text-brand bg-brand-50 border border-brand-100',
            'transition-[background,color,box-shadow,border-color] duration-[400ms] ease-brand',
            'group-hover:bg-brand group-hover:text-white group-hover:border-brand group-hover:shadow-blue',
          ].join(' ')}
        >
          {padded}
        </span>
        <span className="w-10 h-10 grid place-items-center text-brand-bright opacity-55 transition-[opacity,transform] duration-[400ms] ease-brand group-hover:opacity-100 group-hover:scale-105">
          <Icon name={icon as 'searchPlus'} className="w-[26px] h-[26px]" />
        </span>
      </div>

      <h3 className="relative z-[1] text-[20px] mb-[10px] tracking-[-.01em]">{title}</h3>
      <p className="relative z-[1] text-ink-2 text-[15.5px]">{body}</p>

      {/* Ghost numeral that fades to full on hover */}
      <span
        aria-hidden="true"
        className="absolute -right-[6px] -bottom-[30px] z-0 select-none font-display font-black leading-none text-brand-50 opacity-70 transition-opacity duration-[400ms] ease-brand group-hover:opacity-100"
        style={{ fontSize: '128px' }}
      >
        {padded}
      </span>
    </article>
  );
}

import { about } from '../data/site';
import { Container, Reveal } from './ui';

export function About() {
  return (
    <section id="about" className="bg-paper section-pad" aria-labelledby="about-heading">
      <Container>
        <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-[clamp(40px,6vw,80px)] items-start">
          <div>
            <Reveal as="span" className="eyebrow">{about.eyebrow}</Reveal>
            <Reveal
              as="h2"
              delay={1}
              id="about-heading"
              className="mt-4"
              style={{ fontSize: 'clamp(32px,4vw,50px)' }}
            >
              {about.heading}
            </Reveal>
            <Reveal delay={2} className="flex gap-[14px] mt-[30px] flex-wrap">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 basis-[120px] py-5 px-[22px] bg-white border border-line rounded-brand-sm"
                >
                  <b className="block font-display text-[30px] text-brand tracking-[-.02em]">
                    {stat.big}
                  </b>
                  <span className="text-[13.5px] text-ink-3 font-semibold">{stat.label}</span>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="space-y-[22px]">
            {about.body.map((para, i) => (
              <Reveal
                key={i}
                as="p"
                delay={(i + 1) as 1 | 2 | 3}
                className="text-ink-2 leading-[1.62] text-[18.5px]"
              >
                {para.lead && <strong className="text-ink font-bold">{para.lead}</strong>}
                {para.rest}
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import { trust } from '../data/site';
import { Icon } from './icons';
import { Container, Reveal } from './ui';

export function TrustSection() {
  return (
    <section className="bg-white section-pad" aria-labelledby="trust-heading">
      <Container>
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-[clamp(40px,6vw,90px)] items-start">
          <div>
            <Reveal as="span" className="eyebrow">{trust.eyebrow}</Reveal>
            <Reveal
              as="h2"
              delay={1}
              id="trust-heading"
              className="mt-4"
              style={{ fontSize: 'clamp(30px,3.6vw,46px)' }}
            >
              {trust.heading}
            </Reveal>
            <Reveal as="p" delay={2} className="text-ink-2 text-[18px] mt-[22px] max-w-[520px]">
              {trust.body}
            </Reveal>
          </div>

          <Reveal delay={2} className="flex flex-col gap-[2px] pt-[6px]">
            {trust.nos.map((item, i) => (
              <NoItem key={item} text={item} first={i === 0} />
            ))}
            <YesItem text={trust.yes} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function NoItem({ text, first }: { text: string; first: boolean }) {
  return (
    <div className={`flex items-center gap-[14px] py-4 border-b border-line ${first ? 'border-t' : ''}`}>
      <span className="flex-none w-[26px] h-[26px] rounded-full border-[1.5px] border-line grid place-items-center text-ink-3">
        <Icon name="x" className="w-3 h-3" />
      </span>
      <span className="text-[17px] text-ink-2 font-medium">{text}</span>
    </div>
  );
}

function YesItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-[14px] py-0 pt-[22px]">
      <span className="flex-none w-[26px] h-[26px] rounded-full bg-brand border-brand text-white grid place-items-center shadow-blue">
        <Icon name="check" className="w-3 h-3" />
      </span>
      <span className="text-ink font-bold font-display text-[19px]">{text}</span>
    </div>
  );
}

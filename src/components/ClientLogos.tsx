import { clients, type ClientLogo } from '../data/site';
import { Container, Reveal } from './ui';

export function ClientLogos() {
  // Duplicate the list for a seamless looping marquee.
  // The second copy is aria-hidden so screen readers don't read each brand twice.
  const looped: Array<ClientLogo & { dup: boolean }> = [
    ...clients.logos.map((l) => ({ ...l, dup: false })),
    ...clients.logos.map((l) => ({ ...l, dup: true })),
  ];
  const reversed: Array<ClientLogo & { dup: boolean }> = [
    ...[...clients.logos].reverse().map((l) => ({ ...l, dup: false })),
    ...[...clients.logos].reverse().map((l) => ({ ...l, dup: true })),
  ];

  return (
    <section
      id="clients"
      className="bg-white section-pad text-center"
      aria-labelledby="clients-heading"
    >
      <Container>
        <Reveal
          as="h2"
          id="clients-heading"
          className="font-display font-bold text-ink mx-auto max-w-[680px] tracking-[-.01em]"
          style={{ fontSize: 'clamp(20px,2.4vw,28px)' }}
        >
          {clients.lead}
        </Reveal>
        <Reveal as="p" delay={1} className="text-ink-3 mt-3 text-[15px]">
          {clients.sub}
        </Reveal>

        <Reveal
          delay={1}
          className="mt-[clamp(40px,5vw,56px)] flex flex-col gap-[18px]"
        >
          <Marquee logos={looped} direction="ltr" />
          <Marquee logos={reversed} direction="rtl" />
        </Reveal>
      </Container>
    </section>
  );
}

function Marquee({
  logos,
  direction,
}: {
  logos: Array<ClientLogo & { dup: boolean }>;
  direction: 'ltr' | 'rtl';
}) {
  return (
    <div className="marquee">
      <div className={`marquee-track ${direction}`}>
        {logos.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="logo-cell"
            aria-hidden={logo.dup ? 'true' : undefined}
          >
            <img
              src={logo.file}
              alt={logo.dup ? '' : `${logo.name} logo`}
              className="logo-img"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

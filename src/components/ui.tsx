import type { CSSProperties, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Width-constrained, side-padded wrapper used by every section. */
export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`w-full max-w-content mx-auto px-7 ${className}`}>{children}</div>
  );
}

interface RevealProps {
  children: ReactNode;
  /** Stagger delay step (1–8). Maps to the .reveal[data-delay] CSS rules. */
  delay?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

/** Wraps content with the scroll-reveal class + optional stagger delay. */
export function Reveal({ children, delay, as = 'div', className = '', id, style }: RevealProps) {
  const Tag = as as 'div';
  return (
    <Tag
      id={id}
      style={style}
      className={`reveal ${className}`}
      {...(delay ? { 'data-delay': String(delay) } : {})}
    >
      {children}
    </Tag>
  );
}

interface SectionHeadProps {
  eyebrow: string;
  heading: string;
  body?: string;
  centered?: boolean;
  light?: boolean;
}

/** Eyebrow + heading + (optional) body, used by How / Why / Who section heads. */
export function SectionHead({ eyebrow, heading, body, centered = true, light = false }: SectionHeadProps) {
  return (
    <div className={`max-w-[680px] ${centered ? 'mx-auto text-center' : ''} mb-[clamp(48px,6vw,72px)]`}>
      <Reveal as="span" className={`eyebrow ${light ? '!text-brand-bright' : ''}`}>{eyebrow}</Reveal>
      <Reveal as="h2" delay={1} className={`text-[clamp(32px,4.2vw,52px)] mt-4 ${light ? '!text-white' : ''}`}>
        {heading}
      </Reveal>
      {body && (
        <Reveal as="p" delay={2} className={`text-[18px] mt-[18px] ${light ? 'text-white/75' : 'text-ink-2'}`}>
          {body}
        </Reveal>
      )}
    </div>
  );
}

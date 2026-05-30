/**
 * Evntiqa wordmark — recreated as a font-rendered SVG component so it can
 * adapt to any background without an extra HTTP round-trip.
 *
 * The official lowercase "evntiqa" wordmark uses a geometric sans (similar to
 * Hanken Grotesk Light, which we already load). Three colour variants:
 *   • "light"  — white wordmark for dark backgrounds (hero, footer, preloader)
 *   • "dark"   — near-black wordmark for light backgrounds
 *   • "blue"   — brand-blue wordmark (e.g. on white when extra brand presence is wanted)
 *
 * If real artwork is dropped into /public/brand/logo-{light,dark,blue}.svg
 * later, it can be swapped in by changing this component to render an <img>.
 * The Wordmark API stays the same.
 */
interface WordmarkProps {
  variant: 'light' | 'dark' | 'blue';
  className?: string;
  /** Pixel height; width auto-scales (the SVG keeps its 240×60 aspect ratio). */
  height?: number;
  /** Optional accessible label override (e.g. "Evntiqa home"). Defaults to "Evntiqa". */
  label?: string;
}

const COLOR: Record<WordmarkProps['variant'], string> = {
  light: '#ffffff',
  dark: '#0b1426',
  blue: '#1f51fe',
};

export function Wordmark({ variant, className, height = 28, label = 'Evntiqa' }: WordmarkProps) {
  const fill = COLOR[variant];
  return (
    <svg
      viewBox="0 0 240 60"
      role="img"
      aria-label={label}
      className={className}
      style={{ height, width: 'auto', display: 'block' }}
    >
      {/* "evntiqa" — geometric lowercase, matching the official wordmark */}
      <text
        x="0"
        y="44"
        fill={fill}
        style={{
          fontFamily: '"Hanken Grotesk", system-ui, -apple-system, sans-serif',
          fontWeight: 400,
          fontSize: '52px',
          letterSpacing: '-1.5px',
        }}
      >
        evntiqa
      </text>
    </svg>
  );
}

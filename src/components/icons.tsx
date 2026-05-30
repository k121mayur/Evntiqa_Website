/**
 * Icon set — line icons recreated 1:1 from the Evntiqa design.
 * Content (src/data/site.ts) references icons by string key only,
 * keeping data and presentation cleanly separated.
 */
import type { JSX } from 'react';

export type IconName =
  | 'search'
  | 'searchPlus'
  | 'users'
  | 'send'
  | 'chart'
  | 'target'
  | 'chat'
  | 'sun'
  | 'clock'
  | 'arrow'
  | 'equalizer'
  | 'globe'
  | 'pin'
  | 'briefcase'
  | 'layers'
  | 'cpu'
  | 'building'
  | 'x'
  | 'check'
  | 'linkedin'
  | 'mail'
  | 'whatsapp';

/** Inner geometry for the stroke-based icons (shared 0 0 24 24 viewBox). */
const PATHS: Record<Exclude<IconName, 'linkedin' | 'whatsapp'>, JSX.Element> = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </>
  ),
  searchPlus: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
      <path d="M11 8v6M8 11h6" />
    </>
  ),
  users: (
    <>
      <circle cx="8" cy="9" r="2.4" />
      <circle cx="16" cy="9" r="2.4" />
      <path d="M3.5 18a4.5 4.5 0 0 1 9 0M11.5 18a4.5 4.5 0 0 1 9 0" />
    </>
  ),
  send: (
    <>
      <path d="M21 3L10.5 13.5" />
      <path d="M21 3l-6.5 18-4-8-8-4z" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V5M4 19h16" />
      <path d="M8 16l3.5-4 3 2.5L20 7" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  chat: (
    <>
      <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-4 3.5z" />
      <path d="M8 9h8M8 12.5h5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  equalizer: (
    <>
      <path d="M9 18V5l11-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="17" cy="16" r="3" />
    </>
  ),
  globe: (
    <>
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10z" />
      <circle cx="12" cy="11" r="2.5" />
    </>
  ),
  briefcase: (
    <>
      <path d="M4 5h16v11H4z" />
      <path d="M4 16l-1 3h18l-1-3M9 9l2 2 4-4" />
    </>
  ),
  layers: (
    <>
      <path d="M3 7l9-4 9 4-9 4-9-4z" />
      <path d="M3 7v6l9 4 9-4V7" />
    </>
  ),
  cpu: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M4 10h2M4 14h2M18 10h2M18 14h2M10 4v2M14 4v2M10 18v2M14 18v2" />
    </>
  ),
  building: (
    <>
      <path d="M3 21V8l6-4 6 4v13M15 21V11l6 0v10M3 21h18" />
      <path d="M7 12h2M7 16h2" />
    </>
  ),
  x: <path d="M6 6l12 12M18 6L6 18" />,
  check: <path d="M5 13l4 4L19 7" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
};

/** Per-icon stroke override where it deviates from the default. */
const STROKE: Partial<Record<IconName, number>> = {
  x: 2.5,
  check: 3,
  arrow: 2,
};

interface IconProps {
  name: IconName;
  className?: string;
  /** stroke width override (line icons only) */
  strokeWidth?: number;
}

export function Icon({ name, className, strokeWidth }: IconProps) {
  if (name === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H19v-5.4c0-1.3 0-2.95-1.8-2.95s-2.08 1.4-2.08 2.85V21H9z" />
      </svg>
    );
  }
  if (name === 'whatsapp') {
    return (
      <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
        <path d="M16.04 3.2c-7.1 0-12.86 5.76-12.86 12.86 0 2.27.6 4.48 1.73 6.43L3.07 28.8l6.5-1.7a12.8 12.8 0 0 0 6.47 1.74h.01c7.09 0 12.85-5.76 12.85-12.86 0-3.43-1.34-6.66-3.77-9.09a12.76 12.76 0 0 0-9.09-3.69zm0 23.4h-.01a10.66 10.66 0 0 1-5.43-1.49l-.39-.23-4.04 1.06 1.08-3.94-.25-.4a10.62 10.62 0 0 1-1.63-5.65c0-5.9 4.8-10.69 10.68-10.69 2.85 0 5.53 1.11 7.55 3.13a10.6 10.6 0 0 1 3.12 7.56c0 5.9-4.8 10.69-10.68 10.69zm5.86-8c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.91-1.79-2.23-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66 0 1.57 1.14 3.08 1.3 3.29.16.21 2.25 3.44 5.46 4.82.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth ?? STROKE[name] ?? 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

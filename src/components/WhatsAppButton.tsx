import { site } from '../data/site';
import { Icon } from './icons';

/**
 * Floating WhatsApp launcher.
 * The number/message live in `site.whatsapp` (src/data/site.ts).
 * Replace the placeholder digits there with the real number.
 */
export function WhatsAppButton() {
  const href = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.message)}`;
  return (
    <a
      className="wa-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${site.name} on WhatsApp`}
    >
      <Icon name="whatsapp" />
    </a>
  );
}

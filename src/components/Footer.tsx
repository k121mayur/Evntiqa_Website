import { footer, site } from '../data/site';
import { Icon } from './icons';
import { Container } from './ui';
import { Wordmark } from './Wordmark';

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/65 pt-[72px] pb-[34px]" aria-label="Footer">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-10 pb-12 border-b border-white/10">
          {/* Brand block */}
          <div>
            <a href="#top" className="inline-flex items-center mb-4" aria-label={`${site.name} home`}>
              <Wordmark variant="light" height={30} />
            </a>
            <p className="font-display font-semibold text-white/55 text-[15px] tracking-[.01em]">
              {site.tagline}
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="!text-white text-[13px] tracking-[.12em] uppercase font-bold mb-[18px] font-display">
              Company
            </h4>
            <nav className="flex flex-col">
              {footer.companyLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-[15px] text-white/65 mb-3 transition-colors duration-200 ease-brand hover:text-brand-bright"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact + social */}
          <div>
            <h4 className="!text-white text-[13px] tracking-[.12em] uppercase font-bold mb-[18px] font-display">
              Get in touch
            </h4>
            <a
              href={`mailto:${site.email}`}
              className="block text-[15px] text-white/65 mb-3 transition-colors duration-200 ease-brand hover:text-brand-bright"
            >
              {site.email}
            </a>
            <div className="flex gap-2.5 mt-1.5">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.name} on LinkedIn`}
                className="w-10 h-10 rounded-[10px] border border-white/15 grid place-items-center text-white/80 transition-[background,border-color,transform] duration-[250ms] ease-brand hover:bg-brand hover:border-brand hover:text-white hover:-translate-y-0.5"
              >
                <Icon name="linkedin" className="w-[18px] h-[18px]" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label={`Email ${site.name}`}
                className="w-10 h-10 rounded-[10px] border border-white/15 grid place-items-center text-white/80 transition-[background,border-color,transform] duration-[250ms] ease-brand hover:bg-brand hover:border-brand hover:text-white hover:-translate-y-0.5"
              >
                <Icon name="mail" className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[13.5px] text-white/45">
          <span>{footer.bottomLeft}</span>
          <span>{footer.bottomRight}</span>
        </div>
      </Container>
    </footer>
  );
}

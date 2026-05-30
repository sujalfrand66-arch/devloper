'use client';

import { nav, site } from '@/data/site';
import Magnetic from './ui/Magnetic';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-bone/10 pt-20">
      <div className="mx-auto max-w-container px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-bold tracking-tight text-bone">
              {site.name}
              <span className="text-gold">.</span>
            </h3>
            <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-bone/50">
              {site.tagline} We build modern websites and cinematic digital
              experiences for ambitious brands.
            </p>
            <Magnetic className="mt-7 w-fit">
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Chat"
                className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-5 py-3 font-mono text-[12px] uppercase tracking-widest text-bone transition-colors hover:border-gold hover:text-gold"
              >
                Chat on WhatsApp →
              </a>
            </Magnetic>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-bone/35">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="link-underline font-sans text-sm text-bone/60 transition-colors hover:text-bone"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-bone/35">
              Contact
            </p>
            <ul className="mt-5 space-y-3">
              {site.phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:+91${p}`}
                    className="link-underline font-sans text-sm text-bone/60 hover:text-bone"
                  >
                    +91 {p}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-sans text-sm text-bone/60 hover:text-bone"
                >
                  @{site.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* giant wordmark */}
        <div className="relative select-none border-t border-bone/10 pt-10">
          <h2 className="bg-gradient-to-b from-bone/15 to-bone/0 bg-clip-text text-center font-display text-[22vw] font-bold leading-none tracking-tightest text-transparent">
            LUSUX
          </h2>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-bone/10 py-7 sm:flex-row">
          <p className="font-mono text-[11px] uppercase tracking-widest text-bone/35">
            © {year} {site.name} · Suratgarh, India
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] uppercase tracking-widest text-bone/35">
              Crafted with intent
            </span>
            <a
              href="#top"
              data-cursor="Top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/20 text-bone transition-colors hover:border-gold hover:text-gold"
              aria-label="Back to top"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 13V1M2 6l5-5 5 5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

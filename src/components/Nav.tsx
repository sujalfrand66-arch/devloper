'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { nav, site } from '@/data/site';
import Magnetic from './ui/Magnetic';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-[9000] px-5 pt-4 sm:px-8 sm:pt-6"
      >
        <div
          className={`mx-auto flex max-w-container items-center justify-between rounded-full px-5 py-3 transition-all duration-500 sm:px-7 ${
            scrolled ? 'glass shadow-2xl' : 'bg-transparent'
          }`}
        >
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-bone"
          >
            {site.name}
            <span className="text-gold">.</span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="link-underline font-mono text-[12px] uppercase tracking-[0.18em] text-bone/60 transition-colors hover:text-bone"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Magnetic className="hidden sm:block">
              <a
                href="#contact"
                data-cursor="Let's talk"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-bone px-6 py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-ink-900"
              >
                <span className="relative z-10">Start a Project</span>
                <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-gold transition-transform group-hover:scale-150" />
              </a>
            </Magnetic>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-bone/15 md:hidden"
            >
              <span
                className={`h-px w-5 bg-bone transition-transform ${
                  open ? 'translate-y-[3px] rotate-45' : ''
                }`}
              />
              <span
                className={`h-px w-5 bg-bone transition-transform ${
                  open ? '-translate-y-[3px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[8999] flex flex-col justify-center gap-3 bg-ink-900/95 px-8 backdrop-blur-xl md:hidden"
          >
            <div className="radial-spot absolute inset-0" />
            {nav.map((n, i) => (
              <motion.a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * i }}
                className="relative font-display text-5xl font-semibold text-bone"
              >
                {n.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="relative mt-8 inline-flex w-fit rounded-full bg-gold px-7 py-4 font-mono text-sm uppercase tracking-widest text-ink-900"
            >
              Start a Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

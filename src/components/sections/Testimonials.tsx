'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { testimonials } from '@/data/site';
import { FadeUp } from '../ui/Reveal';

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setI((p) => (p + 1) % testimonials.length),
      5500
    );
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

  return (
    <section className="relative overflow-hidden py-28 sm:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]" />
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <FadeUp>
          <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-gold">
            / Testimonials
          </span>
        </FadeUp>

        <div className="relative mt-12 min-h-[280px] sm:min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mx-auto max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight text-bone text-balance sm:text-4xl">
                <span className="text-gold">“</span>
                {t.quote}
                <span className="text-gold">”</span>
              </p>
              <div className="mt-10">
                <p className="font-display text-lg font-semibold text-bone">
                  {t.name}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-bone/45">
                  {t.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === i ? 'w-8 bg-gold' : 'w-1.5 bg-bone/25'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

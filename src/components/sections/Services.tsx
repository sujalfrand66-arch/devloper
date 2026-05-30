'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { services, stack } from '@/data/site';
import { FadeUp, RevealText } from '../ui/Reveal';

export default function Services() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-container px-5 sm:px-8">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-gold">
                / Services
              </span>
            </FadeUp>
            <h2 className="mt-5 max-w-2xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-bone sm:text-7xl">
              <RevealText text="Everything your brand needs to win online." />
            </h2>
          </div>
          <FadeUp delay={0.1}>
            <p className="max-w-xs font-sans text-sm leading-relaxed text-bone/50">
              From the first pixel to production deployment — a complete,
              obsessively crafted digital partnership.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 border-t border-bone/10 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.no}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden border-b border-bone/10 p-8 transition-colors duration-500 sm:p-10 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-bone/10 ${
                hover === i ? 'bg-bone/[0.03]' : ''
              }`}
            >
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/15 blur-3xl transition-opacity duration-500 ${
                  hover === i ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <div className="relative flex items-start justify-between">
                <span className="font-mono text-sm text-bone/30">{s.no}</span>
                <motion.span
                  animate={{ rotate: hover === i ? 45 : 0 }}
                  className="text-bone/40 transition-colors group-hover:text-gold"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 15L15 5M15 5H7M15 5v8" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </motion.span>
              </div>

              <h3 className="mt-12 font-display text-3xl font-semibold tracking-tight text-bone sm:text-4xl">
                {s.title}
              </h3>
              <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-bone/55">
                {s.desc}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-bone/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-bone/55"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stack marquee */}
      <div className="mt-24 overflow-hidden border-y border-bone/10 py-8">
        <div className="flex w-max animate-marquee items-center gap-14 whitespace-nowrap">
          {[...stack, ...stack, ...stack].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-14 font-display text-3xl font-medium text-bone/30 sm:text-5xl"
            >
              {t}
              <span className="text-gold/50">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

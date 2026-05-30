'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { process } from '@/data/site';
import { FadeUp, RevealText } from '../ui/Reveal';

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  });
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-container px-5 sm:px-8">
        <div className="mb-16 max-w-2xl">
          <FadeUp>
            <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-gold">
              / Process
            </span>
          </FadeUp>
          <h2 className="mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tight text-bone sm:text-7xl">
            <RevealText text="A calm, considered way of building." />
          </h2>
        </div>

        <div ref={ref} className="relative">
          {/* vertical track */}
          <div className="absolute left-[7px] top-2 h-full w-px bg-bone/10 sm:left-[calc(12%-0.5px)]" />
          <motion.div
            style={{ height }}
            className="absolute left-[7px] top-2 w-px bg-gradient-to-b from-gold-soft to-gold sm:left-[calc(12%-0.5px)]"
          />

          <div className="flex flex-col gap-16 sm:gap-24">
            {process.map((p, i) => (
              <motion.div
                key={p.no}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative grid grid-cols-1 gap-4 pl-10 sm:grid-cols-[12%_1fr] sm:gap-10 sm:pl-0"
              >
                <span className="absolute left-0 top-1.5 h-4 w-4 -translate-x-[5px] rounded-full border border-gold bg-ink-900 sm:left-[12%] sm:-translate-x-1/2" />
                <div className="sm:text-right sm:pr-10">
                  <span className="font-mono text-sm text-gold">{p.no}</span>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.3em] text-bone/40">
                    {p.phase}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-semibold tracking-tight text-bone sm:text-5xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-lg font-sans text-base leading-relaxed text-bone/55">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

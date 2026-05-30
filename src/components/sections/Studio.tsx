'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { site } from '@/data/site';
import { FadeUp } from '../ui/Reveal';

const lines = [
  'We are two brothers with a shared vision and a deep passion for technology.',
  'Lusux Web is our commitment to creativity, innovation and modern web craft.',
  'We build clean, fast, modern websites that help businesses grow in the digital world.',
];

const words = lines.join(' \n ').split(' ');
const total = words.length;

function Word({
  word,
  index,
  progress,
}: {
  word: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1.5) / total;
  const color = useTransform(
    progress,
    [start, end],
    ['rgba(244,241,234,0.16)', 'rgba(244,241,234,1)']
  );
  if (word === '\n') return <br />;
  return (
    <motion.span style={{ color }} className="inline-block">
      {word}&nbsp;
    </motion.span>
  );
}

export default function Studio() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 55%'],
  });

  return (
    <section id="studio" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-container px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <div>
            <FadeUp>
              <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-gold">
                / The Studio
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="mt-10 space-y-6">
                {[
                  ['Founded', String(site.founded)],
                  ['Based in', site.location],
                  ['Team', 'Two Brothers'],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between border-b border-bone/10 pb-4"
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-bone/40">
                      {k}
                    </span>
                    <span className="font-display text-lg text-bone">{v}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          <div ref={ref}>
            <h2 className="font-display text-3xl font-semibold leading-[1.3] tracking-tight sm:text-[2.7rem] sm:leading-[1.3]">
              {words.map((w, i) => (
                <Word key={i} word={w} index={i} progress={scrollYProgress} />
              ))}
            </h2>

            <FadeUp delay={0.1}>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Follow"
                className="link-underline mt-12 inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-gold"
              >
                Follow @{site.handle}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 13L13 1M13 1H4M13 1v9"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

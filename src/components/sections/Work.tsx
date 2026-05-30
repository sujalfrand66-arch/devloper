'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '@/data/site';
import { FadeUp, RevealText } from '../ui/Reveal';

const palettes = [
  'from-[#1b2733] to-[#0c1118]',
  'from-[#2a2118] to-[#120d08]',
  'from-[#1f2630] to-[#0b0e13]',
  'from-[#262026] to-[#100c10]',
  'from-[#22231a] to-[#0d0e08]',
  'from-[#2b1d22] to-[#120a0d]',
  'from-[#1a2429] to-[#090f12]',
  'from-[#23201a] to-[#0e0c08]',
];

export default function Work() {
  const [active, setActive] = useState<number | null>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const cursor = useRef({ x: 0, y: 0 });
  const previewRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const r = wrap.current?.getBoundingClientRect();
    if (!r || !previewRef.current) return;
    cursor.current.x = e.clientX - r.left;
    cursor.current.y = e.clientY - r.top;
    previewRef.current.style.transform = `translate(${cursor.current.x - 180}px, ${cursor.current.y - 120}px)`;
  };

  return (
    <section id="work" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-container px-5 sm:px-8">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-gold">
                / Selected Work
              </span>
            </FadeUp>
            <h2 className="mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tight text-bone sm:text-7xl">
              <RevealText text="Brands we've put live." />
            </h2>
          </div>
          <FadeUp delay={0.1}>
            <span className="font-mono text-sm text-bone/40">
              {projects.length} live projects
            </span>
          </FadeUp>
        </div>

        <div
          ref={wrap}
          onMouseMove={onMove}
          className="relative border-t border-bone/10"
        >
          {projects.map((p, i) => (
            <motion.a
              key={p.no}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Visit"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-6% 0px' }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col gap-3 border-b border-bone/10 py-7 transition-colors duration-500 hover:bg-bone/[0.02] sm:flex-row sm:items-center sm:justify-between sm:py-9"
            >
              <div className="flex items-baseline gap-5 sm:gap-8">
                <span className="font-mono text-xs text-bone/30">{p.no}</span>
                <h3
                  className={`font-display text-4xl font-semibold tracking-tight transition-all duration-500 sm:text-6xl ${
                    active === i ? 'translate-x-3 text-gold' : 'text-bone'
                  } ${active !== null && active !== i ? 'text-bone/25' : ''}`}
                >
                  {p.title}
                </h3>
              </div>

              <div className="ml-10 flex items-center gap-5 sm:ml-0">
                <span className="font-mono text-[11px] uppercase tracking-widest text-bone/45">
                  {p.category}
                </span>
                <span className="hidden h-3 w-px bg-bone/20 sm:block" />
                <span className="font-mono text-[11px] text-bone/35">{p.year}</span>
                <span className="flex items-center gap-1.5 rounded-full border border-gold/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-gold">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
                  {p.status}
                </span>
              </div>
            </motion.a>
          ))}

          {/* floating preview */}
          <div
            ref={previewRef}
            className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block"
            style={{ willChange: 'transform' }}
          >
            <AnimatePresence>
              {active !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex h-60 w-[360px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br p-6 shadow-2xl ring-1 ring-bone/10 ${palettes[active % palettes.length]}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-bone/60">
                      {projects[active].category}
                    </span>
                    <span className="font-mono text-[10px] text-bone/50">
                      {projects[active].year}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-semibold text-bone">
                      {projects[active].title}
                    </h4>
                    <p className="mt-2 line-clamp-2 font-sans text-xs leading-relaxed text-bone/60">
                      {projects[active].desc}
                    </p>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-gold">
                    Visit live site →
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

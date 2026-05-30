'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { stats } from '@/data/site';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1800;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setN(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative border-y border-bone/10 py-20 sm:py-28">
      <div className="radial-spot absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-container grid-cols-2 gap-y-12 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <span className="font-display text-6xl font-bold tracking-tight text-bone sm:text-7xl lg:text-8xl">
              <span className="gold-gradient">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
            </span>
            <span className="mt-3 font-mono text-[11px] uppercase tracking-[0.25em] text-bone/45">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

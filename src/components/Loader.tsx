'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '@/data/site';

export default function Loader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    let n = 0;
    const tick = () => {
      const step = n < 80 ? 2 + Math.random() * 6 : 1 + Math.random() * 3;
      n = Math.min(100, n + step);
      setCount(Math.floor(n));
      if (n < 100) {
        setTimeout(tick, 70);
      } else {
        setTimeout(() => {
          setDone(true);
          document.documentElement.style.overflow = '';
        }, 450);
      }
    };
    const id = setTimeout(tick, 200);
    return () => clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-ink-900"
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
        >
          <div className="radial-spot absolute inset-0" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative text-center"
          >
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.4em] text-bone/40">
              {site.tagline}
            </p>
            <h1 className="font-display text-5xl font-bold tracking-tight text-bone sm:text-7xl">
              {site.name}
            </h1>
          </motion.div>

          <div className="absolute bottom-10 left-0 right-0 px-6 sm:px-12">
            <div className="mx-auto flex max-w-container items-end justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-bone/40">
                Loading
              </span>
              <span className="font-display text-6xl font-bold tabular-nums text-bone sm:text-8xl">
                {count}
              </span>
            </div>
            <div className="mx-auto mt-5 h-px w-full max-w-container overflow-hidden bg-bone/10">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-soft to-gold"
                animate={{ width: `${count}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

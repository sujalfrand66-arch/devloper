'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { heroStory, site, marquee } from '@/data/site';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '120%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const lineVariants = {
    hidden: { y: '110%' },
    show: (i: number) => ({
      y: 0,
      transition: {
        duration: 1,
        delay: 1.3 + i * 0.12,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-24 pt-32"
    >
      {/* ambient gradient orbs */}
      <motion.div
        style={{ y, scale }}
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-gold/20 blur-[120px]" />
        <div className="absolute right-[10%] top-[40%] h-[40vh] w-[40vh] rounded-full bg-ice/10 blur-[120px] animate-floaty" />
        <div className="absolute left-[5%] top-[30%] h-[30vh] w-[30vh] rounded-full bg-gold/10 blur-[100px]" />
      </motion.div>

      {/* grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(244,241,234,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(244,241,234,0.06) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage:
            'radial-gradient(circle at 50% 40%, black, transparent 75%)',
        }}
        aria-hidden
      />

      <motion.div
        style={{ y: titleY, opacity }}
        className="relative mx-auto w-full max-w-container px-5 sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-gold" />
          <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-bone/50">
            Digital Studio · Est. {site.founded}
          </span>
        </motion.div>

        <h1 className="font-display text-[13vw] font-bold leading-[0.92] tracking-tightest text-bone sm:text-[10.5vw] lg:text-[8.6rem]">
          <span className="reveal-line">
            <motion.span custom={0} variants={lineVariants} initial="hidden" animate="show" className="block">
              Creative
            </motion.span>
          </span>
          <span className="reveal-line">
            <motion.span custom={1} variants={lineVariants} initial="hidden" animate="show" className="block gold-gradient">
              Code.
            </motion.span>
          </span>
          <span className="reveal-line">
            <motion.span custom={2} variants={lineVariants} initial="hidden" animate="show" className="block">
              Powerful Tech.
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="max-w-md font-sans text-base leading-relaxed text-bone/60 sm:text-lg"
          >
            We are <span className="text-bone">Lusux Web</span> — two brothers
            building cinematic websites and powerful backend systems for brands
            that refuse to look ordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex items-center gap-6"
          >
            <a
              href="#work"
              data-cursor="View"
              className="group inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-bone"
            >
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-bone/20 transition-colors group-hover:border-gold">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              Selected Work
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* rotating story rotator */}
      <StoryRotator />

      {/* bottom marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        style={{ opacity }}
        className="relative mt-16 w-full overflow-hidden border-y border-bone/10 py-5"
      >
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-display text-2xl font-medium text-bone/40"
            >
              {m}
              <span className="h-1.5 w-1.5 rounded-full bg-gold/60" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function StoryRotator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 1 }}
      className="pointer-events-none absolute bottom-32 right-5 hidden max-w-xs text-right sm:right-8 lg:block"
    >
      <div className="relative h-7 overflow-hidden">
        {heroStory.map((s, i) => (
          <motion.span
            key={i}
            className="absolute inset-0 font-mono text-xs uppercase tracking-[0.25em] text-bone/45"
            animate={{
              opacity: [0, 1, 1, 0],
              y: ['60%', '0%', '0%', '-60%'],
            }}
            transition={{
              duration: heroStory.length * 2.4,
              times: [
                (i / heroStory.length),
                (i + 0.1) / heroStory.length,
                (i + 0.9) / heroStory.length,
                (i + 1) / heroStory.length,
              ],
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {s}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

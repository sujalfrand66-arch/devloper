'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.3,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[9500] h-[2px] w-full origin-left bg-gradient-to-r from-gold-soft via-gold to-gold-deep"
      aria-hidden
    />
  );
}

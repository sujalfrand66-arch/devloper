'use client';

import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;
    setEnabled(true);

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { ...pos };
    let raf = 0;

    const move = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
    };

    const loop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.16;
      ringPos.y += (pos.y - ringPos.y) * 0.16;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const over = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest(
        'a, button, [data-cursor], input, textarea, select'
      ) as HTMLElement | null;
      if (t) {
        setActive(true);
        setLabel(t.getAttribute('data-cursor') || '');
      } else {
        setActive(false);
        setLabel('');
      }
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-1 -mt-1 h-2 w-2 rounded-full bg-gold mix-blend-difference"
        aria-hidden
      />
      <div
        ref={ring}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full border border-bone/40 transition-[width,height,background-color,border-color] duration-300 ease-out ${
          active
            ? 'h-20 w-20 border-gold/0 bg-gold/90 text-ink-900'
            : 'h-9 w-9 bg-transparent'
        }`}
        style={{ marginLeft: active ? -40 : -18, marginTop: active ? -40 : -18 }}
      >
        {label && (
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-900">
            {label}
          </span>
        )}
      </div>
    </>
  );
}

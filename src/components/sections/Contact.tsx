'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { site, businessTypes } from '@/data/site';
import { FadeUp } from '../ui/Reveal';
import Magnetic from '../ui/Magnetic';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const headY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg =
      `*New Project Enquiry — Lusux Web*%0A%0A` +
      `*Name:* ${f.get('fullName') || ''}%0A` +
      `*Phone:* ${f.get('phone') || ''}%0A` +
      `*Email:* ${f.get('email') || ''}%0A` +
      `*Website:* ${f.get('siteName') || '-'}%0A` +
      `*Business:* ${f.get('businessType') || ''}%0A` +
      `*Details:* ${f.get('message') || '-'}`;
    setSent(true);
    window.open(`${site.whatsappLink}?text=${msg}`, '_blank');
  };

  return (
    <section id="contact" ref={ref} className="relative py-28 sm:py-40">
      <div className="radial-spot absolute inset-0" />
      <div className="relative mx-auto max-w-container px-5 sm:px-8">
        {/* Big CTA */}
        <motion.div style={{ y: headY }} className="mb-20 text-center">
          <FadeUp>
            <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-gold">
              / Let&apos;s build
            </span>
          </FadeUp>
          <h2 className="mt-6 font-display text-[15vw] font-bold leading-[0.9] tracking-tightest text-bone sm:text-[11vw] lg:text-[9rem]">
            <span className="block">Start your</span>
            <span className="block gold-gradient">project.</span>
          </h2>
          <FadeUp delay={0.1}>
            <p className="mx-auto mt-8 max-w-md font-sans text-base leading-relaxed text-bone/55">
              Start your online business with a powerful, modern website. Send
              your details and we&apos;ll confirm on WhatsApp within minutes.
            </p>
          </FadeUp>
        </motion.div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Direct contact */}
          <FadeUp className="flex flex-col gap-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-bone/40">
                Call us
              </p>
              {site.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:+91${p}`}
                  className="link-underline mt-2 block font-display text-3xl font-semibold text-bone sm:text-4xl"
                >
                  +91 {p}
                </a>
              ))}
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-bone/40">
                WhatsApp
              </p>
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-2 block font-display text-3xl font-semibold text-bone sm:text-4xl"
              >
                +91 {site.whatsapp}
              </a>
            </div>
            <Magnetic className="w-fit">
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Chat"
                className="inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 font-mono text-sm uppercase tracking-widest text-ink-900"
              >
                Chat on WhatsApp
                <span className="h-1.5 w-1.5 rounded-full bg-ink-900" />
              </a>
            </Magnetic>
          </FadeUp>

          {/* Form */}
          <FadeUp delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="glass rounded-3xl p-7 sm:p-9"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="fullName" required />
                <Field label="Contact Number" name="phone" type="tel" required />
                <Field label="Email Address" name="email" type="email" required />
                <Field label="Website Name" name="siteName" optional />
              </div>

              <div className="mt-5">
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-bone/45">
                  Business Type
                </label>
                <select
                  name="businessType"
                  required
                  className="w-full rounded-xl border border-bone/15 bg-ink-900/60 px-4 py-3.5 font-sans text-sm text-bone outline-none transition-colors focus:border-gold"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {businessTypes.map((b) => (
                    <option key={b} value={b} className="bg-ink-800">
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-bone/45">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Share goals, timeline or inspiration"
                  className="w-full resize-none rounded-xl border border-bone/15 bg-ink-900/60 px-4 py-3.5 font-sans text-sm text-bone placeholder:text-bone/30 outline-none transition-colors focus:border-gold"
                />
              </div>

              <button
                type="submit"
                data-cursor="Send"
                className="group mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-bone px-6 py-4 font-mono text-sm uppercase tracking-widest text-ink-900 transition-transform active:scale-[0.99]"
              >
                {sent ? 'Opening WhatsApp…' : 'Submit Request'}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
              <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-bone/30">
                Confirmed on WhatsApp within minutes
              </p>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  optional,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-bone/45">
        {label}
        {optional && <span className="text-bone/25"> (optional)</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-bone/15 bg-ink-900/60 px-4 py-3.5 font-sans text-sm text-bone outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}

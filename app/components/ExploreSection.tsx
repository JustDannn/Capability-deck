'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ExploreSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  const questionRef = useRef<HTMLDivElement>(null);
  const questionInView = useInView(questionRef, { once: true, margin: '-60px' });

  const footerRef = useRef<HTMLDivElement>(null);
  const footerInView = useInView(footerRef, { once: true, margin: '-40px' });

  return (
    <section
      id="explore"
      ref={sectionRef}
      className="py-32 md:py-40 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <motion.p
          className="font-[family-name:var(--font-geist-mono)] text-xs tracking-widest uppercase text-[var(--text-secondary)] mb-6 text-center"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
        >
          06 / EXPLORE
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-primary)] text-center mb-12 md:mb-16"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          There May Be More to Improve
          <br className="hidden md:block" /> Than Meets the Eye.
        </motion.h2>

        {/* Copy Block */}
        <div className="max-w-2xl mx-auto mb-8 md:mb-10 text-center">
          <motion.p
            className="text-lg text-[var(--text-secondary)] leading-relaxed mb-2"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Every organization has processes, information, and data.
          </motion.p>
          <motion.p
            className="text-lg text-[var(--text-secondary)] leading-relaxed mb-2"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Some are already working well.
          </motion.p>
          <motion.p
            className="text-lg text-[var(--text-secondary)] leading-relaxed mb-2"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Some create unnecessary friction.
          </motion.p>
          <motion.p
            className="text-lg text-[var(--text-secondary)] leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Some contain opportunities that have simply never been explored.
          </motion.p>
        </div>

        {/* Extended Copy */}
        <motion.p
          className="text-base text-[var(--text-secondary)] text-center max-w-2xl mx-auto mb-16 md:mb-20 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          We would like to understand how the Logistics unit at Telkom
          University Surabaya currently works and explore whether there is a
          problem, process, or opportunity where our team can contribute.
        </motion.p>

        {/* CTA Area */}
        <motion.div
          ref={ctaRef}
          className="text-center mb-20 md:mb-28"
          variants={fadeUp}
          initial="hidden"
          animate={ctaInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            type="button"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium text-white cursor-pointer transition-colors duration-200"
            style={{ background: 'var(--accent)' }}
            whileHover={{
              scale: 1.04,
              boxShadow: '0 8px 30px rgba(57, 185, 176, 0.35)',
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Start a Discovery Conversation
          </motion.button>
          <p className="text-sm text-[var(--text-secondary)] mt-5">
            No predefined solution. No commitment to a specific technology.
          </p>
        </motion.div>

        {/* Featured Question Card */}
        <motion.div
          ref={questionRef}
          className="rounded-2xl border border-[var(--border)] backdrop-blur-sm p-10 md:p-14 mb-20 md:mb-28"
          style={{ background: 'var(--surface)' }}
          variants={fadeUp}
          initial="hidden"
          animate={questionInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xl md:text-2xl font-medium italic text-[var(--text-primary)] text-center leading-relaxed">
            &ldquo;What is a process in your work that you wish could work
            better?&rdquo;
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          ref={footerRef}
          className="text-center pb-16"
          variants={fadeUp}
          initial="hidden"
          animate={footerInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
        >
          <p className="font-[family-name:var(--font-geist-mono)] text-xs tracking-wider uppercase text-[var(--text-secondary)]">
            Student Project Team · Data Science · Telkom University Surabaya
          </p>
        </motion.div>
      </div>
    </section>
  );
}

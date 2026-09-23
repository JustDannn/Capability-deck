'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const weBringItems = [
  {
    title: 'Technical Capability',
    description:
      'Software engineering, data science, and AI capabilities across the team.',
  },
  {
    title: 'Flexible Approach',
    description:
      'We adapt our development process as we learn more about the problem and encounter technical constraints.',
  },
  {
    title: 'Cross-Disciplinary Thinking',
    description:
      'We can approach the same problem from process, software, data, and AI perspectives.',
  },
  {
    title: 'Willingness to Explore',
    description:
      'We are open to discovering that the right solution may be different from what we initially expected.',
  },
];

const weNeedItems = [
  {
    title: 'Context',
    description: 'How the current process works.',
  },
  {
    title: 'Challenges',
    description: 'Where the actual difficulties occur.',
  },
  {
    title: 'Information',
    description: 'What data, systems, or resources are already available.',
  },
  {
    title: 'Feedback',
    description:
      'Whether a proposed solution genuinely fits the people who will use it.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const reducedMotion = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function CollaborationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const closingRef = useRef<HTMLDivElement>(null);
  const closingInView = useInView(closingRef, { once: true, margin: '-60px' });

  return (
    <section
      id="collaboration"
      ref={sectionRef}
      className="py-24 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.p
          className="font-[family-name:var(--font-geist-mono)] text-xs tracking-widest uppercase text-[var(--text-secondary)] mb-6"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
        >
          05 / COLLABORATION
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-primary)] mb-6"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A Collaborative Process,
          <br className="hidden md:block" /> Not a Predefined Product.
        </motion.h2>

        {/* Core Message */}
        <motion.p
          className="text-lg text-[var(--text-secondary)] max-w-3xl mb-16 md:mb-20 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We are not coming with a solution that has already been decided. We
          want to understand the operational context first, then determine where
          our capabilities can provide value.
        </motion.p>

        {/* Two-sided Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
          {/* LEFT — We Bring */}
          <motion.div
            className="rounded-2xl border border-[var(--border)] backdrop-blur-sm overflow-hidden"
            style={{
              background: 'var(--accent-soft)',
              borderTop: '3px solid var(--accent)',
            }}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-8 md:p-10">
              <p className="font-[family-name:var(--font-geist-mono)] text-sm uppercase tracking-wider text-[var(--accent-dark)] mb-8 font-medium">
                We Bring
              </p>
              <div className="space-y-5">
                {weBringItems.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="rounded-xl bg-white/60 backdrop-blur-sm border border-[var(--border)] p-5"
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  >
                    <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — We Need */}
          <motion.div
            className="rounded-2xl border border-[var(--border)] backdrop-blur-sm overflow-hidden"
            style={{
              background: 'var(--surface-strong)',
            }}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-8 md:p-10">
              <p className="font-[family-name:var(--font-geist-mono)] text-sm uppercase tracking-wider text-[var(--text-secondary)] mb-8 font-medium">
                We Need From Our Stakeholder
              </p>
              <div className="space-y-5">
                {weNeedItems.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="rounded-xl bg-white/50 backdrop-blur-sm border border-[var(--border)] p-5"
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                  >
                    <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          ref={closingRef}
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          animate={closingInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.7 }}
        >
          <p className="text-2xl font-medium text-[var(--text-primary)]">
            Not to build more technology — but to build{' '}
            <span className="text-[var(--accent-dark)] underline decoration-[var(--accent)] decoration-2 underline-offset-4">
              something useful
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}

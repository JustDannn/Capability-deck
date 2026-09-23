'use client';

import { motion, useReducedMotion } from 'motion/react';

/* ─── SVG Motifs for Bento Cards ─── */

function ChartMotif() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="text-[var(--accent)]"
    >
      {/* axes */}
      <line x1="8" y1="40" x2="8" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="40" x2="40" y2="40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* data line */}
      <polyline
        points="12,32 18,28 24,20 30,24 36,14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* dots */}
      <circle cx="12" cy="32" r="2" fill="currentColor" />
      <circle cx="18" cy="28" r="2" fill="currentColor" />
      <circle cx="24" cy="20" r="2" fill="currentColor" />
      <circle cx="30" cy="24" r="2" fill="currentColor" />
      <circle cx="36" cy="14" r="2" fill="currentColor" />
    </svg>
  );
}

function CodeMotif() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="text-[var(--accent)]"
    >
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fontSize="24"
        fontFamily="var(--font-geist-mono), monospace"
        fontWeight="600"
        fill="currentColor"
      >
        {'{ }'}
      </text>
    </svg>
  );
}

function NeuralMotif() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="text-[var(--accent)]"
    >
      {/* connecting lines */}
      <line x1="12" y1="16" x2="24" y2="32" stroke="currentColor" strokeWidth="1.5" />
      <line x1="36" y1="16" x2="24" y2="32" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="16" x2="36" y2="16" stroke="currentColor" strokeWidth="1.5" />
      {/* nodes */}
      <circle cx="12" cy="16" r="4" fill="var(--accent-soft)" stroke="currentColor" strokeWidth="2" />
      <circle cx="36" cy="16" r="4" fill="var(--accent-soft)" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="32" r="4" fill="var(--accent-soft)" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/* ─── Bento Card Data ─── */

interface BentoCard {
  motif: React.ReactNode;
  label: string;
  className: string;
}

const bentoCards: BentoCard[] = [
  {
    motif: <ChartMotif />,
    label: 'Data & Analytics',
    className: 'min-h-[140px]',
  },
  {
    motif: <CodeMotif />,
    label: 'Software Engineering',
    className: 'min-h-[156px]',
  },
  {
    motif: <NeuralMotif />,
    label: 'Artificial Intelligence',
    className: 'min-h-[152px]',
  },
  {
    motif: (
      <span className="text-[2.5rem] font-semibold leading-none text-[var(--accent)]">
        4
      </span>
    ),
    label: 'Complementary Capabilities',
    className: 'min-h-[136px]',
  },
];

/* ─── Hero Component ─── */

export default function Hero() {
  const prefersReduced = useReducedMotion();

  /** Returns a fade-up variant respecting reduced-motion */
  const fadeUp = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const, delay },
        };

  /** Spring variant for bento cards */
  const cardSpring = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 32, scale: 0.96 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: {
            type: 'spring' as const,
            stiffness: 100,
            damping: 20,
            delay,
          },
        };

  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      {/* ── Subtle radial background ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, var(--accent-soft) 0%, transparent 70%)',
        }}
      />

      {/* ── Content wrapper ── */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 py-24 md:px-12 lg:flex-row lg:gap-16 lg:px-20 lg:py-0">
        {/* ── Left column: text ── */}
        <div className="flex max-w-2xl flex-1 flex-col items-start gap-6">
          {/* Eyebrow */}
          <motion.p
            {...fadeUp(0.1)}
            className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]"
          >
            Student Project Team&nbsp;&middot;&nbsp;Data Science&nbsp;&middot;&nbsp;Telkom University Surabaya
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text-primary)] md:text-6xl lg:text-7xl"
          >
            Building Solutions
            <br className="hidden sm:block" /> Around Real Problems.
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            {...fadeUp(0.35)}
            className="max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]"
          >
            We combine software engineering, data science, and artificial
            intelligence to explore and build solutions around real-world
            problems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.5)}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#work"
              className="inline-flex items-center rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[var(--accent-dark)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            >
              Explore Our Work
            </a>
            <a
              href="#approach"
              className="inline-flex items-center rounded-full border border-[var(--border)] bg-transparent px-7 py-3.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-dark)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            >
              Our Approach
            </a>
          </motion.div>
        </div>

        {/* ── Right column: bento visual ── */}
        <motion.div
          {...fadeUp(0.6)}
          className="grid w-full max-w-md grid-cols-2 gap-3 lg:max-w-sm xl:max-w-md"
        >
          {bentoCards.map((card, idx) => (
            <motion.div
              key={card.label}
              {...cardSpring(0.65 + idx * 0.1)}
              className={`glass card-hover flex flex-col items-start justify-between gap-4 rounded-2xl p-5 ${card.className}`}
            >
              <div>{card.motif}</div>
              <span className="text-xs font-medium leading-snug text-[var(--text-secondary)]">
                {card.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

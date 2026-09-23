'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

/* ─── Types ─── */

interface Project {
  number: string;
  title: string;
  context: string;
  role?: string;
  demonstrates: string[];
  attribution?: string;
  disclaimer?: string;
}

/* ─── Data ─── */

const projects: Project[] = [
  {
    number: 'PROJECT 01',
    title: 'POTIK — Organizational Web System',
    context:
      'A web-based system developed for Pojok Statistik Telkom University Surabaya, designed around the organization\'s activities and workflows.',
    role: 'Software Engineering & System Development',
    demonstrates: [
      'System analysis',
      'Web development',
      'Database',
      'Authentication',
      'Organizational coordination',
      'Deployment',
    ],
  },
  {
    number: 'PROJECT 02',
    title: 'TRASH-U — AI-Powered Mobile Application',
    context:
      'A Kotlin-based mobile application that uses computer vision to classify different types of waste and incorporates gamification through quests and streaks.',
    role: 'Mobile Engineering · Data Science · AI',
    demonstrates: [
      'Computer vision',
      'Model development',
      'Mobile development',
      'AI integration',
      'Product implementation',
    ],
  },
  {
    number: 'PROJECT 03',
    title: 'Carbon Intensity Research',
    context:
      'A research project investigating carbon intensity data and forecasting approaches in collaboration with a lecturer.',
    demonstrates: [
      'Data analysis',
      'Time-series modeling',
      'Research',
      'Experimental methodology',
    ],
  },
  {
    number: 'PROJECT 04',
    title: 'Robust Lung Disease Classification',
    context:
      'A research project conducted with a lecturer, exploring robust lung disease classification on an imbalanced dataset using deep learning and explainable AI.',
    attribution: 'Muhammad Ridwan\'s research project',
    demonstrates: [
      'Deep learning',
      'Computer vision',
      'Explainable AI',
      'Research',
      'Model evaluation',
    ],
    disclaimer: 'Research project — not a clinical deployment',
  },
];

/* ─── Animation Variants ─── */

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

/* ─── Decorative Wireframe SVG (for POTIK card) ─── */

function WireframeMotif() {
  return (
    <svg
      className="pointer-events-none absolute bottom-6 right-6 hidden opacity-[0.07] md:block"
      width="180"
      height="120"
      viewBox="0 0 180 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Browser chrome */}
      <rect
        x="0.5"
        y="0.5"
        width="179"
        height="119"
        rx="8"
        stroke="var(--text-primary)"
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="20"
        x2="180"
        y2="20"
        stroke="var(--text-primary)"
        strokeWidth="1"
      />
      {/* Window dots */}
      <circle cx="12" cy="10" r="3" fill="var(--text-primary)" />
      <circle cx="22" cy="10" r="3" fill="var(--text-primary)" />
      <circle cx="32" cy="10" r="3" fill="var(--text-primary)" />
      {/* Sidebar */}
      <rect
        x="8"
        y="28"
        width="40"
        height="84"
        rx="4"
        stroke="var(--text-primary)"
        strokeWidth="1"
      />
      {/* Sidebar items */}
      <rect x="14" y="36" width="28" height="4" rx="2" fill="var(--text-primary)" opacity="0.5" />
      <rect x="14" y="46" width="22" height="4" rx="2" fill="var(--text-primary)" opacity="0.3" />
      <rect x="14" y="56" width="26" height="4" rx="2" fill="var(--text-primary)" opacity="0.3" />
      <rect x="14" y="66" width="20" height="4" rx="2" fill="var(--text-primary)" opacity="0.3" />
      {/* Main content area */}
      <rect
        x="56"
        y="28"
        width="116"
        height="40"
        rx="4"
        stroke="var(--text-primary)"
        strokeWidth="1"
      />
      {/* Content blocks */}
      <rect x="62" y="34" width="60" height="6" rx="2" fill="var(--text-primary)" opacity="0.4" />
      <rect x="62" y="46" width="44" height="4" rx="2" fill="var(--text-primary)" opacity="0.2" />
      <rect x="62" y="54" width="52" height="4" rx="2" fill="var(--text-primary)" opacity="0.2" />
      {/* Bottom cards */}
      <rect
        x="56"
        y="76"
        width="54"
        height="36"
        rx="4"
        stroke="var(--text-primary)"
        strokeWidth="1"
      />
      <rect
        x="118"
        y="76"
        width="54"
        height="36"
        rx="4"
        stroke="var(--text-primary)"
        strokeWidth="1"
      />
      {/* Card content lines */}
      <rect x="62" y="84" width="36" height="4" rx="2" fill="var(--text-primary)" opacity="0.3" />
      <rect x="62" y="94" width="28" height="3" rx="1.5" fill="var(--text-primary)" opacity="0.2" />
      <rect x="124" y="84" width="36" height="4" rx="2" fill="var(--text-primary)" opacity="0.3" />
      <rect x="124" y="94" width="28" height="3" rx="1.5" fill="var(--text-primary)" opacity="0.2" />
    </svg>
  );
}

/* ─── Pill Tag Component ─── */

function PillTag({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs text-[var(--accent-dark)]">
      {label}
    </span>
  );
}

/* ─── Project Card Component ─── */

function ProjectCard({
  project,
  variant = 'default',
}: {
  project: Project;
  variant?: 'hero' | 'default';
}) {
  const isHero = variant === 'hero';

  return (
    <div
      className={[
        'glass group relative overflow-hidden rounded-2xl card-hover',
        'p-6 md:p-8',
        'transition-shadow duration-300',
        'hover:shadow-[0_0_0_1px_var(--accent),0_4px_24px_rgba(57,185,176,0.08)]',
        isHero ? 'min-h-[320px] md:min-h-[360px]' : '',
      ].join(' ')}
      style={
        isHero
          ? { borderTop: '2px solid var(--accent)' }
          : undefined
      }
    >
      {/* Hero accent gradient overlay */}
      {isHero && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.045]"
          style={{
            background:
              'linear-gradient(145deg, var(--accent) 0%, transparent 50%)',
          }}
          aria-hidden="true"
        />
      )}

      {/* Decorative wireframe for POTIK */}
      {isHero && <WireframeMotif />}

      <div className="relative">
        {/* Project number */}
        <p className="mb-3 font-mono text-xs tracking-widest text-[var(--accent)]">
          {project.number}
        </p>

        {/* Title */}
        <h3 className="mb-2 text-xl font-semibold text-[var(--text-primary)]">
          {project.title}
        </h3>

        {/* Role */}
        {project.role && (
          <p className="mb-3 text-sm font-medium text-[var(--accent-dark)]">
            {project.role}
          </p>
        )}

        {/* Context */}
        <p className="mb-5 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
          {project.context}
        </p>

        {/* Attribution */}
        {project.attribution && (
          <p className="mb-3 text-xs text-[var(--text-secondary)]">
            {project.attribution}
          </p>
        )}

        {/* Demonstrates pills */}
        <div className="flex flex-wrap gap-2">
          {project.demonstrates.map((skill) => (
            <PillTag key={skill} label={skill} />
          ))}
        </div>

        {/* Disclaimer note */}
        {project.disclaimer && (
          <p className="mt-4 text-xs italic text-[var(--text-secondary)]">
            {project.disclaimer}
          </p>
        )}
      </div>
    </div>
  );
}

/* ─── Main Section ─── */

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const activeCardVariants = prefersReducedMotion
    ? reducedMotionVariants
    : cardVariants;

  return (
    <section
      ref={sectionRef}
      id="work"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          className="mb-14 md:mb-20"
          variants={activeCardVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ willChange: 'opacity, transform' }}
        >
          <p className="section-label mb-4 font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
            04 / SELECTED WORK
          </p>
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-[var(--text-primary)] md:text-5xl">
            Experience Across Systems, Data &amp; AI.
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Row 1: POTIK — full width, hero */}
          <motion.div
            className="md:col-span-3"
            variants={activeCardVariants}
            style={{ willChange: 'opacity, transform' }}
          >
            <ProjectCard project={projects[0]} variant="hero" />
          </motion.div>

          {/* Row 2: TRASH-U (col-span-2) | Carbon Intensity (col-span-1) */}
          <motion.div
            className="md:col-span-2"
            variants={activeCardVariants}
            style={{ willChange: 'opacity, transform' }}
          >
            <ProjectCard project={projects[1]} />
          </motion.div>

          <motion.div
            className="md:col-span-1"
            variants={activeCardVariants}
            style={{ willChange: 'opacity, transform' }}
          >
            <ProjectCard project={projects[2]} />
          </motion.div>

          {/* Row 3: Lung Disease Classification (full width, compact) */}
          <motion.div
            className="md:col-span-3"
            variants={activeCardVariants}
            style={{ willChange: 'opacity, transform' }}
          >
            <ProjectCard project={projects[3]} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

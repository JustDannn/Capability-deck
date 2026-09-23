'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

/* ─── Icon Components ─── */

function CodeBracketsIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 7L4 14L10 21"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 7L24 14L18 21"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BarChartIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="16"
        width="4"
        height="8"
        rx="1"
        fill="var(--accent)"
        opacity="0.5"
      />
      <rect
        x="12"
        y="10"
        width="4"
        height="14"
        rx="1"
        fill="var(--accent)"
        opacity="0.7"
      />
      <rect
        x="20"
        y="4"
        width="4"
        height="20"
        rx="1"
        fill="var(--accent)"
      />
    </svg>
  );
}

function NodesIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="6" cy="14" r="3" stroke="var(--accent)" strokeWidth="2" />
      <circle cx="14" cy="6" r="3" stroke="var(--accent)" strokeWidth="2" />
      <circle cx="22" cy="18" r="3" stroke="var(--accent)" strokeWidth="2" />
      <line
        x1="8.5"
        y1="12.5"
        x2="11.5"
        y2="8"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="16.5"
        y1="8"
        x2="20"
        y2="16"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="8.5"
        y1="15.5"
        x2="19.5"
        y2="18"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ─── Data ─── */

interface CapabilityCard {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const capabilities: CapabilityCard[] = [
  {
    icon: <CodeBracketsIcon />,
    title: 'Software Engineering',
    items: [
      'Web-based applications',
      'Backend development',
      'Database design & management',
      'API development',
      'Authentication & access control',
      'System analysis & technical documentation',
      'Deployment',
    ],
  },
  {
    icon: <BarChartIcon />,
    title: 'Data & Analytics',
    items: [
      'Data cleaning & preprocessing',
      'Exploratory data analysis',
      'Data visualization',
      'Statistical analysis',
      'Time-series analysis',
      'Predictive modeling',
    ],
  },
  {
    icon: <NodesIcon />,
    title: 'Artificial Intelligence',
    items: [
      'Machine learning',
      'Deep learning',
      'Computer vision',
      'Model training & evaluation',
      'Explainable AI',
    ],
  },
];

const flowNodes = ['DATA', 'INSIGHT', 'MODEL', 'SOFTWARE', 'USE'] as const;

/* ─── Animation Variants ─── */

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const reducedMotionCardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

/* ─── Capability Card Component ─── */

function CapabilityCardItem({
  card,
  className,
}: {
  card: CapabilityCard;
  className?: string;
}) {
  return (
    <div className={`glass rounded-2xl card-hover p-6 md:p-8 ${className ?? ''}`}>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft">
        {card.icon}
      </div>
      <h3 className="mb-4 text-lg font-semibold text-text-primary md:text-xl">
        {card.title}
      </h3>
      <ul className="space-y-2.5">
        {card.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
            <span
              className="mt-[7px] block h-1.5 w-1.5 shrink-0 rounded-full bg-accent opacity-60"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Flow Visualization ─── */

function FlowVisualization({ isInView }: { isInView: boolean }) {
  return (
    <div className="flex flex-col items-center gap-0 md:flex-row md:justify-between md:gap-0">
      {flowNodes.map((node, i) => (
        <div
          key={node}
          className="flex flex-col items-center md:flex-row md:items-center"
        >
          {/* Node pill */}
          <motion.div
            className="glass-strong z-10 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wider text-text-primary md:px-6 md:py-3 md:text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{
              duration: 0.4,
              delay: i * 0.18,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          >
            {node}
          </motion.div>

          {/* Connector line + arrow (not after last node) */}
          {i < flowNodes.length - 1 && (
            <>
              {/* Desktop: horizontal connector */}
              <div className="relative hidden h-[2px] flex-1 md:block md:min-w-[40px] lg:min-w-[56px]">
                <div className="absolute inset-0 rounded-full bg-border" />
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-accent"
                  initial={{ width: '0%' }}
                  animate={isInView ? { width: '100%' } : { width: '0%' }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.18 + 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                  }}
                />
                {/* Arrow head */}
                <motion.svg
                  className="absolute -right-[5px] top-1/2 -translate-y-1/2"
                  width="8"
                  height="10"
                  viewBox="0 0 8 10"
                  fill="none"
                  aria-hidden="true"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: i * 0.18 + 0.7,
                  }}
                >
                  <path
                    d="M1 1L6 5L1 9"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </div>

              {/* Mobile: vertical connector */}
              <div className="relative flex w-[2px] flex-col items-center md:hidden" style={{ height: 32 }}>
                <div className="absolute inset-0 rounded-full bg-border" />
                <motion.div
                  className="absolute inset-x-0 top-0 rounded-full bg-accent"
                  initial={{ height: '0%' }}
                  animate={isInView ? { height: '100%' } : { height: '0%' }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.18 + 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                  }}
                />
                {/* Arrow head (downward) */}
                <motion.svg
                  className="absolute -bottom-[5px] left-1/2 -translate-x-1/2"
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  aria-hidden="true"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: i * 0.18 + 0.6,
                  }}
                >
                  <path
                    d="M1 1L5 6L9 1"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Reduced-Motion Flow Visualization ─── */

function FlowVisualizationStatic() {
  return (
    <div className="flex flex-col items-center gap-0 md:flex-row md:justify-between md:gap-0">
      {flowNodes.map((node, i) => (
        <div
          key={node}
          className="flex flex-col items-center md:flex-row md:items-center"
        >
          <div className="glass-strong z-10 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wider text-text-primary md:px-6 md:py-3 md:text-sm">
            {node}
          </div>
          {i < flowNodes.length - 1 && (
            <>
              {/* Desktop connector */}
              <div className="relative hidden h-[2px] flex-1 md:block md:min-w-[40px] lg:min-w-[56px]">
                <div className="absolute inset-0 rounded-full bg-accent" />
                <svg
                  className="absolute -right-[5px] top-1/2 -translate-y-1/2"
                  width="8"
                  height="10"
                  viewBox="0 0 8 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1L6 5L1 9"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {/* Mobile connector */}
              <div className="relative flex w-[2px] md:hidden" style={{ height: 32 }}>
                <div className="absolute inset-0 rounded-full bg-accent" />
                <svg
                  className="absolute -bottom-[5px] left-1/2 -translate-x-1/2"
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1L5 6L9 1"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Main Section ─── */

export default function CapabilitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const flowInView = useInView(flowRef, { once: true, amount: 0.4 });

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          className="mb-14 md:mb-20"
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ willChange: 'opacity, transform' }}
        >
          <p className="section-label mb-4">02 / CAPABILITIES</p>
          <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
            From Data to Working Solutions.
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Row 1: Software Engineering (span-2) + Data & Analytics (span-1) */}
          <motion.div
            className="md:col-span-2"
            variants={cardVariants}
            style={{ willChange: 'opacity, transform' }}
          >
            <CapabilityCardItem card={capabilities[0]} className="h-full" />
          </motion.div>

          <motion.div
            className="md:col-span-1"
            variants={cardVariants}
            style={{ willChange: 'opacity, transform' }}
          >
            <CapabilityCardItem card={capabilities[1]} className="h-full" />
          </motion.div>

          {/* Row 2: AI (span-1) + Connecting the Pieces (span-2) */}
          <motion.div
            className="md:col-span-1"
            variants={cardVariants}
            style={{ willChange: 'opacity, transform' }}
          >
            <CapabilityCardItem card={capabilities[2]} className="h-full" />
          </motion.div>

          <motion.div
            className="md:col-span-2"
            variants={cardVariants}
            style={{ willChange: 'opacity, transform' }}
          >
            <div
              ref={flowRef}
              className="glass rounded-2xl card-hover relative overflow-hidden p-6 md:p-8"
            >
              {/* Accent gradient background for visual distinction */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.04]"
                style={{
                  background:
                    'linear-gradient(135deg, var(--accent) 0%, transparent 60%)',
                }}
                aria-hidden="true"
              />

              <div className="relative">
                <h3 className="mb-2 text-lg font-semibold text-text-primary md:text-xl">
                  Connecting the Pieces
                </h3>
                <p className="mb-8 max-w-lg text-sm leading-relaxed text-text-secondary md:text-base">
                  We can connect data → models → software into a solution that
                  people can actually use.
                </p>

                {/* Animated flow — with reduced-motion fallback */}
                <div className="motion-safe:contents">
                  <div className="hidden motion-safe:block">
                    <FlowVisualization isInView={flowInView} />
                  </div>
                </div>
                <div className="motion-reduce:contents">
                  <div className="hidden motion-reduce:block">
                    <FlowVisualizationStatic />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';

/* ─── Data ─── */

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
  detailLabel?: string;
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'UNDERSTAND',
    description: 'We learn how the process currently works.',
    detailLabel: 'Questions we ask:',
    details: [
      'Who is involved?',
      'What information is used?',
      'How does the process flow?',
    ],
  },
  {
    number: '02',
    title: 'EXPLORE',
    description:
      'We identify friction, repetitive work, information gaps, and opportunities for improvement.',
    details: [],
  },
  {
    number: '03',
    title: 'BUILD',
    description: 'We select the appropriate approach based on the problem.',
    detailLabel: 'Possible interventions:',
    details: [
      'Digital system',
      'Data analysis',
      'Automation',
      'AI / machine learning',
      'Combination of approaches',
    ],
  },
  {
    number: '04',
    title: 'VALIDATE',
    description:
      'We test whether what we build actually addresses the original need.',
    details: [],
  },
];

/* ─── Animation Variants ─── */

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const stepCardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const closingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

/* ─── Connector Line (Desktop: horizontal, Mobile: vertical) ─── */

function ConnectorLine({
  isInView,
  index,
}: {
  isInView: boolean;
  index: number;
}) {
  return (
    <>
      {/* Desktop: horizontal connector */}
      <div className="relative hidden flex-1 items-center md:flex">
        <div className="h-[2px] w-full rounded-full bg-border" />
        <motion.div
          className="absolute inset-y-0 left-0 h-[2px] rounded-full bg-accent"
          initial={{ width: '0%' }}
          animate={isInView ? { width: '100%' } : { width: '0%' }}
          transition={{
            duration: 0.5,
            delay: index * 0.15 + 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </div>

      {/* Mobile: vertical connector */}
      <div className="relative flex h-8 w-[2px] items-center justify-center self-center md:hidden">
        <div className="absolute inset-0 rounded-full bg-border" />
        <motion.div
          className="absolute inset-x-0 top-0 rounded-full bg-accent"
          initial={{ height: '0%' }}
          animate={isInView ? { height: '100%' } : { height: '0%' }}
          transition={{
            duration: 0.4,
            delay: index * 0.15 + 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </div>
    </>
  );
}

/* ─── Static Connector (reduced-motion) ─── */

function ConnectorLineStatic() {
  return (
    <>
      <div className="relative hidden flex-1 items-center md:flex">
        <div className="h-[2px] w-full rounded-full bg-accent" />
      </div>
      <div className="relative flex h-8 w-[2px] self-center md:hidden">
        <div className="absolute inset-0 rounded-full bg-accent" />
      </div>
    </>
  );
}

/* ─── Step Card ─── */

function StepCard({
  step,
  isActive,
  onToggle,
}: {
  step: ProcessStep;
  isActive: boolean;
  onToggle: () => void;
}) {
  const hasExpandableContent = step.details.length > 0 || step.description;

  return (
    <button
      type="button"
      onClick={onToggle}
      onMouseEnter={onToggle}
      className={`glass card-hover w-full cursor-pointer rounded-2xl p-5 text-left transition-all duration-300 md:p-6 ${
        isActive
          ? 'border-l-[3px] border-l-accent md:border-l-0 md:border-t-[3px] md:border-t-accent'
          : ''
      }`}
      aria-expanded={isActive}
    >
      {/* Step number + title */}
      <p className="mb-1 font-mono text-sm font-semibold text-accent">
        {step.number}
      </p>
      <h3 className="font-mono text-xs font-semibold tracking-widest text-text-primary">
        {step.title}
      </h3>
    </button>
  );
}

/* ─── Expanded Detail Panel ─── */

function StepDetail({ step }: { step: ProcessStep }) {
  return (
    <motion.div
      key={step.number}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="overflow-hidden"
    >
      <div className="glass-strong rounded-2xl p-6 md:p-8">
        <div className="flex flex-col gap-1 md:flex-row md:items-start md:gap-12">
          {/* Left: step indicator + description */}
          <div className="flex-1">
            <p className="mb-1 font-mono text-sm font-semibold text-accent">
              Step {step.number}
            </p>
            <p className="text-base leading-relaxed text-text-primary md:text-lg">
              {step.description}
            </p>
          </div>

          {/* Right: detail list */}
          {step.details.length > 0 && (
            <div className="mt-4 flex-1 md:mt-0">
              {step.detailLabel && (
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-text-secondary">
                  {step.detailLabel}
                </p>
              )}
              <ul className="space-y-2">
                {step.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <span
                      className="mt-[6px] block h-1.5 w-1.5 shrink-0 rounded-full bg-accent opacity-60"
                      aria-hidden="true"
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Reduced-Motion Detail (no animation) ─── */

function StepDetailStatic({ step }: { step: ProcessStep }) {
  return (
    <div className="glass-strong rounded-2xl p-6 md:p-8">
      <div className="flex flex-col gap-1 md:flex-row md:items-start md:gap-12">
        <div className="flex-1">
          <p className="mb-1 font-mono text-sm font-semibold text-accent">
            Step {step.number}
          </p>
          <p className="text-base leading-relaxed text-text-primary md:text-lg">
            {step.description}
          </p>
        </div>
        {step.details.length > 0 && (
          <div className="mt-4 flex-1 md:mt-0">
            {step.detailLabel && (
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-text-secondary">
                {step.detailLabel}
              </p>
            )}
            <ul className="space-y-2">
              {step.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-3 text-sm text-text-secondary"
                >
                  <span
                    className="mt-[6px] block h-1.5 w-1.5 shrink-0 rounded-full bg-accent opacity-60"
                    aria-hidden="true"
                  />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main Section ─── */

export default function ApproachSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);

  const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const processInView = useInView(processRef, { once: true, amount: 0.2 });
  const closingInView = useInView(closingRef, { once: true, amount: 0.3 });

  const [activeStep, setActiveStep] = useState<number>(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const handleToggle = useCallback(
    (index: number) => {
      setActiveStep(index);
    },
    []
  );

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* ── Section Header ── */}
        <motion.div
          className="mb-14 md:mb-20"
          variants={headerVariants}
          initial="hidden"
          animate={sectionInView ? 'visible' : 'hidden'}
          style={
            prefersReducedMotion ? undefined : { willChange: 'opacity, transform' }
          }
        >
          <p className="section-label mb-4">03 / APPROACH</p>
          <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
            Problem First. Technology Second.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-secondary">
            We do not believe every problem needs AI, a new application, or
            another dashboard.
          </p>
        </motion.div>

        {/* ── Interactive Process Steps ── */}
        <div ref={processRef} className="mb-20 md:mb-28">
          {/* Step cards row / column */}
          {prefersReducedMotion ? (
            /* Reduced-motion: static layout */
            <>
              <div className="flex flex-col items-stretch gap-0 md:flex-row md:items-start md:gap-0">
                {steps.map((step, i) => (
                  <div
                    key={step.number}
                    className="flex flex-col items-stretch md:flex-1 md:flex-row md:items-center"
                  >
                    <div className="flex-1">
                      <StepCard
                        step={step}
                        isActive={activeStep === i}
                        onToggle={() => handleToggle(i)}
                      />
                    </div>
                    {i < steps.length - 1 && <ConnectorLineStatic />}
                  </div>
                ))}
              </div>

              {/* Detail panel */}
              <div className="mt-6">
                {activeStep !== null && (
                  <StepDetailStatic step={steps[activeStep]} />
                )}
              </div>
            </>
          ) : (
            /* Normal: animated layout */
            <>
              <motion.div
                className="flex flex-col items-stretch gap-0 md:flex-row md:items-start md:gap-0"
                variants={staggerContainer}
                initial="hidden"
                animate={processInView ? 'visible' : 'hidden'}
              >
                {steps.map((step, i) => (
                  <div
                    key={step.number}
                    className="flex flex-col items-stretch md:flex-1 md:flex-row md:items-center"
                  >
                    <motion.div
                      className="flex-1"
                      variants={stepCardVariants}
                      style={{ willChange: 'opacity, transform' }}
                    >
                      <StepCard
                        step={step}
                        isActive={activeStep === i}
                        onToggle={() => handleToggle(i)}
                      />
                    </motion.div>
                    {i < steps.length - 1 && (
                      <ConnectorLine isInView={processInView} index={i} />
                    )}
                  </div>
                ))}
              </motion.div>

              {/* Expandable detail panel */}
              <div className="mt-6">
                <AnimatePresence mode="wait">
                  {activeStep !== null && (
                    <StepDetail step={steps[activeStep]} />
                  )}
                </AnimatePresence>
              </div>
            </>
          )}
        </div>

        {/* ── Closing Statement ── */}
        <motion.div
          ref={closingRef}
          className="mx-auto max-w-3xl"
          variants={closingVariants}
          initial="hidden"
          animate={closingInView ? 'visible' : 'hidden'}
          style={
            prefersReducedMotion ? undefined : { willChange: 'opacity, transform' }
          }
        >
          <div className="glass-strong rounded-2xl px-8 py-10 md:px-12 md:py-14">
            <p className="text-center text-2xl font-medium leading-snug tracking-tight text-text-primary md:text-3xl">
              AI is not the starting point.
              <br className="hidden sm:block" />{' '}
              Technology is not the goal.
              <br className="hidden sm:block" />{' '}
              Solving{' '}
              <span
                className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent"
              >
                the right problem
              </span>{' '}
              is.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

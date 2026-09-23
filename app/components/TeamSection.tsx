'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

/* ─── Team Data ─── */
interface TeamMember {
  name: string;
  skills: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: 'Nur Fattah Hamdani',
    skills: ['Software Engineering', 'Web Development', 'System Analysis'],
  },
  {
    name: 'Muhammad Ridwan',
    skills: ['Data Science', 'Artificial Intelligence', 'Computer Vision'],
  },
  {
    name: 'Rafif Fikri',
    skills: ['Data Science', 'Machine Learning', 'AI'],
  },
  {
    name: 'Novena Aurelia Luisma',
    skills: ['Coordination', 'Communication', 'Documentation'],
  },
];

/* ─── Card Component ─── */
function MemberCard({
  member,
  index,
  isInView,
}: {
  member: TeamMember;
  index: number;
  isInView: boolean;
}) {
  const initial = member.name.charAt(0);

  return (
    <motion.div
      className="glass card-hover relative overflow-hidden rounded-2xl p-6 md:p-8"
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{
        // @ts-expect-error -- CSS custom property for reduced-motion override
        '--motion-duration': '0.6s',
      }}
    >
      {/* Decorative accent line at top */}
      <div
        className="absolute top-0 left-0 h-px w-full"
        style={{ background: 'var(--accent)' }}
      />

      {/* Large typographic initial */}
      <span
        className="pointer-events-none absolute top-4 right-4 select-none text-6xl font-bold leading-none"
        style={{ color: 'rgba(57, 185, 176, 0.10)' }}
        aria-hidden="true"
      >
        {initial}
      </span>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4">
        <h3
          className="text-xl font-semibold"
          style={{ color: 'var(--text-primary)' }}
        >
          {member.name}
        </h3>

        <div className="flex flex-wrap gap-2">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full px-3 py-1 text-xs font-medium"
              style={{
                background: 'var(--accent-soft)',
                color: 'var(--accent-dark)',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section Component ─── */
export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* ─── Header ─── */}
        <motion.div
          className="mb-16 flex flex-col gap-4 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
            01 / TEAM
          </span>
          <h2
            className="text-4xl font-semibold tracking-tight md:text-5xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Who We Are
          </h2>
          <p
            className="max-w-2xl text-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            A team of four Semester 5 Data Science students from Telkom
            University Surabaya, combining software engineering, data science,
            artificial intelligence, and project coordination.
          </p>
        </motion.div>

        {/* ─── Asymmetric Bento Grid ─── */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {/* Row 1: two equally large cards */}
          <div className="md:col-span-6">
            <MemberCard
              member={teamMembers[0]}
              index={0}
              isInView={isInView}
            />
          </div>
          <div className="md:col-span-6">
            <MemberCard
              member={teamMembers[1]}
              index={1}
              isInView={isInView}
            />
          </div>

          {/* Row 2: one wider, one narrower */}
          <div className="md:col-span-7">
            <MemberCard
              member={teamMembers[2]}
              index={2}
              isInView={isInView}
            />
          </div>
          <div className="md:col-span-5">
            <MemberCard
              member={teamMembers[3]}
              index={3}
              isInView={isInView}
            />
          </div>
        </div>

        {/* ─── Core Principle Quote ─── */}
        <motion.blockquote
          className="mt-16 border-l-2 py-2 pl-6 md:mt-20"
          style={{ borderColor: 'var(--accent)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay: 0.55,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <p
            className="max-w-xl text-lg font-medium italic md:text-xl"
            style={{ color: 'var(--text-primary)' }}
          >
            &ldquo;Understand the problem first. Build what actually
            helps.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}

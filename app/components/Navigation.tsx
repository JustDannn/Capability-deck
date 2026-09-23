"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const NAV_ITEMS = [
  { label: "Team", href: "#team" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "Collaboration", href: "#collaboration" },
  { label: "Explore", href: "#explore" },
] as const;

type SectionId = (typeof NAV_ITEMS)[number]["href"];

/* ------------------------------------------------------------------ */
/*  Hook — active section via IntersectionObserver                     */
/* ------------------------------------------------------------------ */

function useActiveSection(): SectionId | null {
  const [active, setActive] = useState<SectionId | null>(null);
  const ratioMap = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const pick = () => {
      let best: string | null = null;
      let bestRatio = 0;
      ratioMap.current.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = id;
        }
      });
      setActive(best ? (`#${best}` as SectionId) : null);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          ratioMap.current.set(e.target.id, e.intersectionRatio);
        });
        pick();
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}

/* ------------------------------------------------------------------ */
/*  Hook — scroll‑down detection                                       */
/* ------------------------------------------------------------------ */

function useScrolledDown(threshold = 80): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

/* ------------------------------------------------------------------ */
/*  Hook — prefers-reduced-motion                                      */
/* ------------------------------------------------------------------ */

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

/* ------------------------------------------------------------------ */
/*  Smooth-scroll helper                                               */
/* ------------------------------------------------------------------ */

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Navigation() {
  const active = useActiveSection();
  const scrolled = useScrolledDown();
  const prefersReduced = usePrefersReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      scrollTo(href);
      setMobileOpen(false);
    },
    [],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLAnchorElement>, href: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        scrollTo(href);
        setMobileOpen(false);
      }
    },
    [],
  );

  /* Animation variants -------------------------------------------- */
  const noMotion = prefersReduced;

  const barVariants = {
    hidden: noMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: -18 },
    visible: noMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
  };

  const mobileMenuVariants = {
    hidden: noMotion
      ? { opacity: 0 }
      : { opacity: 0, y: -8, scale: 0.97 },
    visible: noMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
        },
    exit: noMotion
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: -8,
          scale: 0.97,
          transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] as const },
        },
  };

  /* ---------------------------------------------------------------- */
  return (
    <motion.header
      variants={barVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-4 inset-x-0 z-50 flex justify-center pointer-events-none"
    >
      {/* ---- Desktop pill ---- */}
      <nav
        aria-label="Primary"
        className={[
          "pointer-events-auto hidden md:flex items-center gap-1 px-2 py-1.5",
          "rounded-full",
          "bg-white/72 backdrop-blur-[20px]",
          "border border-white/65 shadow-sm",
          "transition-[opacity,transform] duration-300 ease-out",
          scrolled ? "opacity-80 scale-[0.97]" : "opacity-100 scale-100",
        ].join(" ")}
        style={{
          /* Fallback for browsers that don't support backdrop-blur */
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {NAV_ITEMS.map(({ label, href }) => {
          const isActive = active === href;
          return (
            <a
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              onKeyDown={(e) => handleKeyDown(e, href)}
              className={[
                "relative px-3 py-1.5 text-sm font-medium rounded-full",
                "transition-colors duration-200",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
                isActive
                  ? "text-[var(--accent-dark)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
              ].join(" ")}
            >
              {label}
              {/* Active underline indicator */}
              {isActive && (
                <motion.span
                  layoutId={noMotion ? undefined : "nav-indicator"}
                  className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-[var(--accent)]"
                  transition={
                    noMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 380, damping: 30 }
                  }
                />
              )}
            </a>
          );
        })}
      </nav>

      {/* ---- Mobile hamburger + dropdown ---- */}
      <div className="pointer-events-auto md:hidden relative">
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className={[
            "flex items-center justify-center w-10 h-10",
            "rounded-full",
            "bg-white/72 backdrop-blur-[20px]",
            "border border-white/65 shadow-sm",
            "transition-[opacity,transform] duration-300 ease-out",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
            scrolled && !mobileOpen
              ? "opacity-80 scale-[0.97]"
              : "opacity-100 scale-100",
          ].join(" ")}
          style={{ WebkitBackdropFilter: "blur(20px)" }}
        >
          {/* Animated hamburger → close icon */}
          <span className="relative flex flex-col items-center justify-center w-4 h-4">
            <span
              className={[
                "block h-[1.5px] w-4 rounded-full bg-[var(--text-primary)] transition-transform duration-200 origin-center",
                mobileOpen
                  ? "translate-y-[0px] rotate-45"
                  : "-translate-y-[3px]",
              ].join(" ")}
            />
            <span
              className={[
                "block h-[1.5px] w-4 rounded-full bg-[var(--text-primary)] transition-[opacity] duration-200",
                mobileOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "block h-[1.5px] w-4 rounded-full bg-[var(--text-primary)] transition-transform duration-200 origin-center",
                mobileOpen
                  ? "-translate-y-[1.5px] -rotate-45"
                  : "translate-y-[3px]",
              ].join(" ")}
            />
          </span>
        </button>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              aria-label="Primary"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={[
                "absolute right-0 top-[calc(100%+8px)] min-w-[180px]",
                "rounded-2xl p-2",
                "bg-white/72 backdrop-blur-[20px]",
                "border border-white/65 shadow-lg",
                "flex flex-col gap-0.5",
              ].join(" ")}
              style={{ WebkitBackdropFilter: "blur(20px)" }}
            >
              {NAV_ITEMS.map(({ label, href }) => {
                const isActive = active === href;
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => handleClick(e, href)}
                    onKeyDown={(e) => handleKeyDown(e, href)}
                    className={[
                      "block px-4 py-2 text-sm font-medium rounded-xl",
                      "transition-colors duration-200",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
                      isActive
                        ? "text-[var(--accent-dark)] bg-[var(--accent-soft)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/50",
                    ].join(" ")}
                  >
                    {label}
                  </a>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

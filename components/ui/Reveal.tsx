"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type RevealProps = React.PropsWithChildren<{
  delay?: number;
  y?: number;
  className?: string;
  variant?: "fade-up" | "fade-in" | "scale-in" | "slide-left";
}>;

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  variant = "fade-up",
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  const variants = {
    "fade-up":   { hidden: { opacity: 0, y }, show: { opacity: 1, y: 0 } },
    "fade-in":   { hidden: { opacity: 0 },    show: { opacity: 1 } },
    "scale-in":  { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } },
    "slide-left":{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } },
  };

  const chosen = variants[variant];

  return (
    <motion.div
      className={className}
      initial={prefersReduced ? false : chosen.hidden}
      whileInView={prefersReduced ? undefined : chosen.show}
      viewport={{ once: true, margin: "-72px" }}
      transition={{
        duration: 0.88,
        delay,
        ease: [0.22, 0.61, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger container + child ─────────────────────────────── */

export const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.04 },
  },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.82, ease: [0.22, 0.61, 0.36, 1] },
  },
};

/* ── Stagger with scale (cards, tiles) ─────────────────────── */

export const staggerParentScale: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.06 },
  },
};

export const staggerChildScale: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.22, 0.61, 0.36, 1] },
  },
};

/* ── Hover microinteraction variants ──────────────────────── */

export const hoverLift = {
  rest: { y: 0, transition: { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] } },
  hover: { y: -5, transition: { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] } },
};

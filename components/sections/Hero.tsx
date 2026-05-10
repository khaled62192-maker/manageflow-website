"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { t } = useLang();
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();

  const backdropY  = useTransform(scrollY, [0, 700], prefersReduced ? [0, 0] : [0,  80]);
  const contentY   = useTransform(scrollY, [0, 700], prefersReduced ? [0, 0] : [0, -28]);
  const opacityOut = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-ink"
      style={{ minHeight: "100svh" }}
    >
      <HeroBackdrop parallaxY={backdropY} />

      <motion.div
        style={{ y: contentY, opacity: opacityOut }}
        className="flex min-h-[100svh] flex-col justify-center"
      >
        <Container
          size="default"
          className="relative z-10 pb-24 pt-[130px] sm:pt-[150px] lg:pt-[160px]"
        >
          {/* Eyebrow */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-champagne glow-breathe"
              aria-hidden
            />
            <span className="font-mono text-[11px] tracking-[0.24em] text-champagne/60">
              01
            </span>
            <span
              aria-hidden
              className="h-px w-14 bg-gradient-to-r from-champagne/40 to-transparent"
            />
            <span className="eyebrow">{t.hero.eyebrow}</span>
          </motion.div>

          {/* Headline — cinematic scale */}
          <motion.h1
            initial={prefersReduced ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.06, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-display mt-8 max-w-[1100px] text-balance text-[clamp(2.8rem,7vw,7rem)] leading-[1.01] tracking-[-0.03em] text-paper sm:mt-9"
          >
            {t.hero.titleLines.map((line, i) => (
              <span key={i} className="block">
                {i === t.hero.titleLines.length - 1 ? (
                  <span className="text-gradient">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-8 max-w-[560px] text-pretty text-[16px] leading-[1.8] text-paper/65 sm:text-[18px]"
          >
            {t.hero.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            <Button href="#contact" withArrow>
              {t.hero.ctaPrimary}
            </Button>
            <a
              href="#review"
              className="link-underline text-[14px] font-medium tracking-wide text-paper/75 transition-colors duration-300 hover:text-paper"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          {/* Meta strip */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.55 }}
            className="mt-20 sm:mt-24"
          >
            <div className="section-divider" aria-hidden />
            <ul className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11.5px] tracking-[0.14em] text-paper/45">
              {t.hero.meta.map((m) => (
                <li key={m} className="inline-flex items-center gap-2">
                  <span
                    className="h-1 w-1 rounded-full bg-champagne/60"
                    aria-hidden
                  />
                  {m}
                </li>
              ))}
            </ul>
          </motion.div>
        </Container>
      </motion.div>
    </section>
  );
}

/* ── Cinematic Backdrop ────────────────────────────────────────── */

function HeroBackdrop({ parallaxY }: { parallaxY: MotionValue<number> }) {
  return (
    <motion.div
      aria-hidden
      style={{ y: parallaxY }}
      className="pointer-events-none absolute inset-0 -z-10"
    >
      {/* Rich multi-layer base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 120% 75% at 0% -5%, rgba(65,80,95,0.55) 0%, transparent 52%)",
            "radial-gradient(ellipse 75% 65% at 100% 0%, rgba(194,165,123,0.22) 0%, transparent 55%)",
            "radial-gradient(ellipse 65% 85% at 50% 115%, rgba(65,80,95,0.38) 0%, transparent 55%)",
            "radial-gradient(ellipse 40% 40% at 18% 85%, rgba(194,165,123,0.07) 0%, transparent 60%)",
          ].join(","),
        }}
      />

      {/* PRIMARY champagne orb — large, visible, drifting */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3.5, ease: [0.22, 0.61, 0.36, 1] }}
        className="orb-1 absolute"
        style={{
          top: "-22%",
          right: "-12%",
          width: "1050px",
          height: "1050px",
          background:
            "radial-gradient(circle, rgba(194,165,123,0.28) 0%, rgba(194,165,123,0.10) 38%, transparent 65%)",
          borderRadius: "50%",
        }}
      />

      {/* Secondary champagne orb — mid-right, floats opposite phase */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, delay: 0.35 }}
        className="orb-2 absolute"
        style={{
          top: "15%",
          right: "12%",
          width: "580px",
          height: "580px",
          background:
            "radial-gradient(circle, rgba(194,165,123,0.14) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />

      {/* Steel orb — bottom-left anchor, large */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4.5, delay: 0.65 }}
        className="orb-3 absolute"
        style={{
          bottom: "-28%",
          left: "-16%",
          width: "950px",
          height: "950px",
          background:
            "radial-gradient(circle, rgba(65,80,95,0.38) 0%, rgba(65,80,95,0.12) 42%, transparent 65%)",
          borderRadius: "50%",
        }}
      />

      {/* ── Decorative ring 1 — OUTER, slow-rotating */}
      <motion.div
        initial={{ opacity: 0, scale: 0.82 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4.5, delay: 1, ease: [0.22, 0.61, 0.36, 1] }}
        className="ring-rotate absolute"
        style={{
          top: "-32%",
          right: "-22%",
          width: "1000px",
          height: "1000px",
          borderRadius: "50%",
          border: "1px solid rgba(194,165,123,0.16)",
          boxShadow:
            "inset 0 0 80px rgba(194,165,123,0.04), 0 0 80px rgba(194,165,123,0.04)",
        }}
      />

      {/* ── Decorative ring 2 — inner, counter-phase */}
      <motion.div
        initial={{ opacity: 0, scale: 0.78 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4, delay: 1.4, ease: [0.22, 0.61, 0.36, 1] }}
        className="absolute"
        style={{
          top: "-12%",
          right: "-6%",
          width: "680px",
          height: "680px",
          borderRadius: "50%",
          border: "1px solid rgba(194,165,123,0.09)",
          background:
            "radial-gradient(circle at 35% 35%, rgba(194,165,123,0.04) 0%, transparent 55%)",
          animation: "ring-rotate 120s linear infinite reverse",
        }}
      />

      {/* ── Diagonal light ray — main */}
      <div
        className="absolute hidden sm:block"
        style={{
          top: "-5%",
          right: "20%",
          width: "90px",
          height: "72%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(194,165,123,0.28) 20%, rgba(194,165,123,0.14) 65%, transparent 100%)",
          transform: "rotate(-14deg)",
          opacity: 0.55,
          borderRadius: "999px",
        }}
      />

      {/* ── Diagonal light ray — secondary, subtler */}
      <div
        className="absolute hidden sm:block"
        style={{
          top: "8%",
          right: "36%",
          width: "40px",
          height: "50%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(194,165,123,0.14) 30%, transparent 100%)",
          transform: "rotate(-14deg)",
          opacity: 0.4,
          borderRadius: "999px",
        }}
      />

      {/* Subtle column grid */}
      <div
        className="absolute inset-y-0 left-1/2 hidden w-[1200px] -translate-x-1/2 sm:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(244,239,229,0.05) 1px, transparent 1px)",
          backgroundSize: "calc(100% / 12) 100%",
          maskImage:
            "linear-gradient(to bottom, transparent, black 12%, black 72%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 12%, black 72%, transparent)",
        }}
      />

      {/* Film grain — stronger texture */}
      <div className="grain absolute inset-0" />
    </motion.div>
  );
}

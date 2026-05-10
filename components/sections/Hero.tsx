"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * Hero — single-column, conversion-focused.
 * No floating side cards, no overlapping typography. Headline lines split
 * deliberately so they never collide on smaller breakpoints.
 */
export function Hero() {
  const { t } = useLang();
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-ink pt-[112px] pb-20 sm:pt-[140px] sm:pb-28 lg:pt-[180px] lg:pb-36"
    >
      <HeroBackdrop />

      <Container size="default" className="relative z-10">
        <div className="max-w-[920px]">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="font-mono text-[11px] tracking-[0.22em] text-paper/55">
              01
            </span>
            <span className="h-px w-10 bg-paper/15" aria-hidden />
            <span className="eyebrow">{t.hero.eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={prefersReduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.05, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-display mt-7 text-balance text-[clamp(2rem,5.4vw,4.4rem)] leading-[1.06] tracking-[-0.02em] text-paper sm:mt-8 sm:leading-[1.04]"
          >
            {t.hero.titleLines.map((line, i) => (
              <span key={i} className="block">
                {i === t.hero.titleLines.length - 1 ? (
                  <span className="text-paper/70">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-7 max-w-2xl text-pretty text-[16px] leading-relaxed text-paper/72 sm:mt-8 sm:text-[18px]"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 sm:mt-10"
          >
            <Button href="#contact" withArrow>
              {t.hero.ctaPrimary}
            </Button>
            <a
              href="#audit"
              className="link-underline text-[14px] font-medium tracking-wide text-paper/85 hover:text-paper"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* Meta strip — believable trust signals */}
        <motion.ul
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-paper/10 pt-6 text-[12px] tracking-wide text-paper/55 sm:mt-20 sm:gap-x-8"
        >
          {t.hero.meta.map((m) => (
            <li key={m} className="inline-flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-champagne/70" aria-hidden />
              {m}
            </li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 600px at 18% 8%, rgba(65,80,95,0.22), transparent 60%), radial-gradient(900px 500px at 92% 0%, rgba(194,165,123,0.06), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 hidden w-[1100px] -translate-x-1/2 sm:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(244,239,229,0.04) 1px, transparent 1px)",
          backgroundSize: "calc(100% / 12) 100%",
          maskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        }}
      />
      <div className="grain absolute inset-0 -z-10" aria-hidden />
    </>
  );
}

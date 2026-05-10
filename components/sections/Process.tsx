"use client";

import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerChild, staggerParent } from "@/components/ui/Reveal";

export function Process() {
  const { t } = useLang();

  return (
    <section id="process" className="relative overflow-hidden bg-ink py-24 sm:py-32 lg:py-36">
      {/* Dramatic atmospheric backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 75% 60% at 12% 8%,  rgba(65,80,95,0.22),    transparent 58%)",
            "radial-gradient(ellipse 60% 50% at 90% 88%, rgba(194,165,123,0.08), transparent 62%)",
            "radial-gradient(ellipse 80% 35% at 50% 0%,  rgba(65,80,95,0.10),    transparent 52%)",
          ].join(","),
        }}
      />

      <Container size="wide" className="relative z-10">
        <SectionHeader
          index="08"
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          sub={t.process.sub}
        />

        <motion.ol
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-px overflow-hidden rounded-[22px] bg-paper/[0.06] sm:mt-16 sm:grid-cols-2 lg:grid-cols-5"
        >
          {t.process.steps.map((step) => (
            <motion.li
              key={step.n}
              variants={staggerChild}
              className="group relative flex flex-col gap-5 bg-ink p-7 transition-colors duration-500 hover:bg-onyx sm:p-8 lg:p-7"
            >
              {/* Top champagne accent reveal on hover */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-champagne/55 via-champagne/30 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-x-100"
              />

              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.2em] text-paper/45">
                  {step.n}
                </span>
                <span
                  aria-hidden
                  className="h-px w-10 bg-paper/15 accent-line-expand group-hover:w-16 group-hover:bg-champagne/60"
                />
              </div>

              <h3 className="font-display text-[24px] leading-tight tracking-tight text-paper sm:text-[26px]">
                {step.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-paper/60">
                {step.body}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>

      {/* Film grain */}
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />
    </section>
  );
}

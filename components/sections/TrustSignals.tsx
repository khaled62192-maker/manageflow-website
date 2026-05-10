"use client";

import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { staggerChild, staggerParent } from "@/components/ui/Reveal";

export function TrustSignals() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-onyx py-24 sm:py-32 lg:py-36">

      {/* Rich atmospheric backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 90% 65% at 92% 8%,  rgba(194,165,123,0.09), transparent 58%)",
            "radial-gradient(ellipse 70% 60% at 5%  90%, rgba(65,80,95,0.18),    transparent 60%)",
            "radial-gradient(ellipse 80% 35% at 50% 0%,  rgba(65,80,95,0.12),    transparent 55%)",
          ].join(","),
        }}
      />

      {/* ── Marquee drift band ──────────────────────────────────── */}
      <div className="relative overflow-hidden py-5">
        {/* Champagne ambient strip behind marquee */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(194,165,123,0.035) 20%, rgba(194,165,123,0.06) 50%, rgba(194,165,123,0.035) 80%, transparent)",
          }}
        />
        <div className="section-sep absolute inset-x-0 bottom-0" aria-hidden />

        <div className="marquee-track flex w-max items-center gap-14 whitespace-nowrap">
          {[...t.trust.drift, ...t.trust.drift, ...t.trust.drift].map((word, i) => (
            <span
              key={i}
              className="font-display text-[22px] tracking-tight text-paper/38 transition-colors duration-500 hover:text-paper/65 sm:text-[24px]"
            >
              {word}
              <span
                className="ms-14 inline-block h-1 w-1 rounded-full bg-champagne/55 align-middle"
                aria-hidden
              />
            </span>
          ))}
        </div>

        {/* Edge fade */}
        {["start","end"].map((side) => (
          <span
            key={side}
            aria-hidden
            className={`pointer-events-none absolute inset-y-0 ${side === "start" ? "start-0" : "end-0"} w-32`}
            style={{
              background: `linear-gradient(to ${side === "start" ? "right" : "left"}, var(--color-onyx), transparent)`,
            }}
          />
        ))}
      </div>

      {/* ── Main content ────────────────────────────────────────── */}
      <Container size="wide" className="relative z-10 mt-20 sm:mt-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">

          {/* Left — title */}
          <div className="lg:col-span-5">
            <Reveal y={14}>
              <span className="eyebrow">{t.trust.eyebrow}</span>
            </Reveal>
            <Reveal y={24} delay={0.04}>
              <h2 className="font-display mt-5 text-balance text-4xl leading-[1.05] tracking-tight text-paper sm:text-[44px] lg:text-[50px]">
                {t.trust.title}
              </h2>
            </Reveal>
            <Reveal y={8} delay={0.1}>
              <div className="section-divider mt-8 max-w-[180px]" aria-hidden />
            </Reveal>
          </div>

          {/* Right — trust cards grid */}
          <motion.ul
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-px overflow-hidden rounded-[24px] bg-paper/[0.06] shadow-[0_0_80px_rgba(0,0,0,0.5)] sm:grid-cols-2 lg:col-span-7"
          >
            {t.trust.items.map((item) => (
              <motion.li
                key={item.title}
                variants={staggerChild}
                className="group relative overflow-hidden bg-onyx p-8 transition-colors duration-500 hover:bg-[#171f29]"
              >
                {/* Champagne top sweep */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-champagne/65 via-champagne/35 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-x-100"
                />
                {/* Inner ambient glow on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-champagne/[0.05] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />

                <div
                  aria-hidden
                  className="mb-6 h-px w-8 bg-champagne/50 accent-line-expand group-hover:w-16 group-hover:bg-champagne/85"
                />
                <h3 className="font-display text-[20px] leading-snug tracking-tight text-paper sm:text-[22px]">
                  {item.title}
                </h3>
                <p className="mt-3.5 text-[14px] leading-relaxed text-paper/60 sm:text-[14.5px]">
                  {item.body}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>

      {/* Film grain */}
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/**
 * Services — four offerings, tiered.
 * Top-level accordion. When a service expands, three tier cards reveal
 * (or a single "Available after scoping" callout for the ongoing-presence
 * offering).
 */

type Tier = {
  readonly name: string;
  readonly price: string;
  readonly position: string;
  readonly includes: ReadonlyArray<string>;
};

export function Services() {
  const { t, lang } = useLang();
  const [active, setActive] = useState<number | null>(0);

  const formatPrice = (p: string) =>
    lang === "ar"
      ? `${t.services.pricePrefix} ${p} ${t.services.currency}`
      : `${t.services.pricePrefix} ${t.services.currency} ${p}`;

  return (
    <section id="services" className="relative overflow-hidden bg-ink py-24 sm:py-32 lg:py-36">
      {/* Section atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 80% 60% at 90% 5%,  rgba(194,165,123,0.10), transparent 58%)",
            "radial-gradient(ellipse 65% 55% at 5%  80%, rgba(65,80,95,0.22),    transparent 62%)",
            "radial-gradient(ellipse 60% 40% at 50% 0%,  rgba(65,80,95,0.10),    transparent 55%)",
          ].join(","),
        }}
      />
      {/* Film grain */}
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />

      <Container size="wide" className="relative z-10">
        <SectionHeader
          index="02"
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          sub={t.services.sub}
        />

        <ul className="mt-14 divide-y divide-paper/10 border-y border-paper/10 sm:mt-16">
          {t.services.items.map((item, i) => {
            const open = active === i;
            const tiers = item.tiers as ReadonlyArray<Tier>;
            const hasTiers = tiers.length > 0;
            const note = "note" in item ? (item as { note: string }).note : null;

            return (
              <li key={item.n}>
                <Reveal y={16} delay={i * 0.04}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setActive(open ? null : i)}
                    className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-x-5 py-7 text-start sm:gap-x-10 sm:py-9"
                  >
                    <span className="self-start pt-1.5 font-mono text-[12px] tracking-[0.18em] text-paper/45 sm:self-center sm:pt-0">
                      {item.n}
                    </span>

                    <span className="flex min-w-0 flex-col gap-2.5">
                      <span
                        className={cn(
                          "font-display text-[22px] leading-[1.16] tracking-tight transition-colors duration-500 sm:text-[30px] lg:text-[34px]",
                          open
                            ? "text-paper"
                            : "text-paper/85 group-hover:text-paper",
                        )}
                      >
                        {item.title}
                      </span>
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] tracking-[0.18em] sm:text-[12px]">
                        <span className="uppercase text-paper/55">
                          {item.tag}
                        </span>
                        <span className="text-paper/25" aria-hidden>
                          ·
                        </span>
                        <span className="text-champagne">
                          {hasTiers
                            ? `${tiers.length} ${
                                lang === "ar" ? "مستويات" : "tiers"
                              }`
                            : note ?? ""}
                        </span>
                      </span>
                    </span>

                    <span
                      aria-hidden
                      className={cn(
                        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-paper/20 text-paper transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:border-paper/45",
                        open && "rotate-45 border-paper bg-paper text-ink",
                      )}
                    >
                      <Plus />
                    </span>
                  </button>
                </Reveal>

                <motion.div
                  initial={false}
                  animate={{
                    height: open ? "auto" : 0,
                    opacity: open ? 1 : 0,
                  }}
                  transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="ps-0 pb-10 sm:ps-[58px] sm:pb-12">
                    <p className="max-w-2xl text-pretty text-[15px] leading-relaxed text-paper/72 sm:text-[16px]">
                      {item.summary}
                    </p>

                    {hasTiers ? (
                      <div className="mt-8 grid gap-4 sm:gap-5 lg:grid-cols-3">
                        {tiers.map((tier) => (
                          <TierCard
                            key={tier.name}
                            tier={tier}
                            formatPrice={formatPrice}
                            customLabel={t.services.customLabel}
                            includesLabel={t.services.includesLabel}
                          />
                        ))}
                      </div>
                    ) : (
                      <ScopingCallout label={t.services.availableLabel} />
                    )}
                  </div>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

/* ── Tier card ────────────────────────────────────────────────────────── */

function TierCard({
  tier,
  formatPrice,
  customLabel,
  includesLabel,
}: {
  tier: Tier;
  formatPrice: (p: string) => string;
  customLabel: string;
  includesLabel: string;
}) {
  const isCustom = !tier.price;
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[18px] border border-paper/10 bg-onyx/70 p-6 transition-all duration-500 hover:border-champagne/25 card-lift sm:p-7">
      {/* Champagne top accent */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-champagne/55 via-champagne/30 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-x-100"
      />
      <span className="text-[10.5px] uppercase tracking-[0.22em] text-champagne/85">
        {tier.name}
      </span>
      <p className="font-display mt-2.5 text-[22px] leading-tight tracking-tight text-paper sm:text-[24px]">
        {isCustom ? customLabel : formatPrice(tier.price)}
      </p>
      <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-paper/65 sm:text-[14px]">
        {tier.position}
      </p>

      {tier.includes.length > 0 && (
        <div className="mt-5 border-t border-paper/10 pt-4">
          <span className="text-[10px] uppercase tracking-[0.22em] text-paper/45">
            {includesLabel}
          </span>
          <ul className="mt-2.5 grid grid-cols-1 gap-y-1.5">
            {tier.includes.map((inc) => (
              <li
                key={inc}
                className="flex items-baseline gap-2.5 text-[13px] text-paper/75"
              >
                <span
                  className="mt-[7px] inline-flex h-1 w-1 shrink-0 rounded-full bg-champagne"
                  aria-hidden
                />
                <span>{inc}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ── Available-after-scoping callout (Service 04) ─────────────────────── */

function ScopingCallout({ label }: { label: string }) {
  return (
    <div className="mt-8 rounded-[18px] border border-champagne/30 bg-champagne/[0.05] p-6 sm:p-8">
      <span className="inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] text-champagne">
        <span
          className="inline-flex h-1.5 w-1.5 rounded-full bg-champagne"
          aria-hidden
        />
        {label}
      </span>
    </div>
  );
}

/* ── Plus glyph ───────────────────────────────────────────────────────── */

function Plus() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M7 1.5v11M1.5 7h11" strokeLinecap="round" />
    </svg>
  );
}

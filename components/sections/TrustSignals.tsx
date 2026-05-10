"use client";

import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Reveal, staggerChild, staggerParent } from "@/components/ui/Reveal";

export function TrustSignals() {
  const { t } = useLang();

  return (
    <section className="relative border-y border-paper/[0.06] bg-onyx py-20 sm:py-24 lg:py-28">
      {/* Drift band */}
      <div className="relative overflow-hidden border-b border-paper/[0.06] py-6">
        <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
          {[...t.trust.drift, ...t.trust.drift, ...t.trust.drift].map((word, i) => (
            <span
              key={i}
              className="font-display text-[20px] tracking-tight text-paper/45 sm:text-[22px]"
            >
              {word}
              <span
                className="ms-12 inline-block h-1 w-1 rounded-full bg-champagne/65 align-middle"
                aria-hidden
              />
            </span>
          ))}
        </div>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 start-0 w-24"
          style={{
            background: "linear-gradient(to right, var(--color-onyx), transparent)",
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 end-0 w-24"
          style={{
            background: "linear-gradient(to left, var(--color-onyx), transparent)",
          }}
        />
      </div>

      <Container size="wide" className="mt-16 sm:mt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal y={12}>
              <span className="eyebrow">{t.trust.eyebrow}</span>
            </Reveal>
            <Reveal y={20}>
              <h2 className="font-display mt-4 text-balance text-3xl leading-[1.08] tracking-tight text-paper sm:text-[40px] lg:text-[44px]">
                {t.trust.title}
              </h2>
            </Reveal>
          </div>

          <motion.ul
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-px overflow-hidden rounded-[20px] bg-paper/[0.06] sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2"
          >
            {t.trust.items.map((item) => (
              <motion.li
                key={item.title}
                variants={staggerChild}
                className="group bg-onyx p-7 transition-colors duration-500 hover:bg-charcoal/55 sm:p-7"
              >
                <div className="mb-5 h-px w-8 bg-champagne/55" aria-hidden />
                <h3 className="font-display text-[20px] leading-snug tracking-tight text-paper sm:text-[22px]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-paper/65 sm:text-[14.5px]">
                  {item.body}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}

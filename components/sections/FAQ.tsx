"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/**
 * FAQ — premium client-questions section.
 * Editorial accordion. Removes objections quietly without breaking the
 * narrative tone of the rest of the site.
 */

export function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-ink py-24 sm:py-32 lg:py-36"
    >
      <Container size="wide">
        <SectionHeader
          index="09"
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          sub={t.faq.sub}
          className="lg:max-w-2xl"
        />

        <ul className="mx-auto mt-14 max-w-3xl divide-y divide-paper/10 border-y border-paper/10 sm:mt-16">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <Reveal y={12} delay={i * 0.04}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group grid w-full grid-cols-[1fr_auto] items-center gap-4 py-6 text-start sm:py-7"
                  >
                    <span
                      className={cn(
                        "font-display text-[17px] leading-snug tracking-tight transition-colors duration-500 sm:text-[20px]",
                        isOpen
                          ? "text-paper"
                          : "text-paper/85 group-hover:text-paper",
                      )}
                    >
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-paper/20 text-paper transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:border-paper/45",
                        isOpen && "rotate-45 border-paper bg-paper text-ink",
                      )}
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      >
                        <path d="M6 1v10M1 6h10" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </Reveal>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl text-pretty pb-7 text-[14.5px] leading-relaxed text-paper/65 sm:text-[15.5px]">
                    {item.a}
                  </p>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

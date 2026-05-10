"use client";

import { motion, type Variants } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface WhyItem { title: string; description: string; }

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show:   {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.75, ease: "easeOut" as const },
  },
};

const nums = ["01","02","03","04","05","06"];

export function WhyManageFlow() {
  const { t } = useLang();
  const dict  = t.whyManageFlow;
  const items = dict.items as readonly WhyItem[];

  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-36 lg:py-44">

      {/* Rich atmospheric backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 80% 60% at 88% 10%, rgba(65,80,95,0.22), transparent 58%)",
            "radial-gradient(ellipse 60% 50% at 8%  80%, rgba(194,165,123,0.07), transparent 60%)",
            "radial-gradient(ellipse 100% 40% at 50% 0%,  rgba(65,80,95,0.10), transparent 55%)",
          ].join(","),
        }}
      />

      <Container size="wide" className="relative z-10">
        <SectionHeader
          index="03"
          eyebrow={dict.eyebrow}
          title={dict.title}
          sub={dict.sub}
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-16 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {items.map((item, i) => (
            <motion.div key={item.title} variants={cardVariant} className="group relative">

              {/* Outer glow on hover — absolutely positioned behind */}
              <div
                aria-hidden
                className="absolute -inset-px rounded-[20px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(600px 300px at 50% 0%, rgba(194,165,123,0.12), transparent 65%)",
                }}
              />

              <div className="card-premium relative h-full overflow-hidden rounded-[20px] p-7 sm:p-8">
                {/* Champagne top-edge accent — grows on hover */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-champagne/70 via-champagne/40 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-x-100"
                />

                {/* Large faded number — decorative depth layer */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-3 -top-5 font-display text-[88px] font-bold leading-none tracking-[-0.04em] text-paper/[0.03] select-none transition-colors duration-500 group-hover:text-paper/[0.055]"
                >
                  {nums[i]}
                </div>

                {/* Small number indicator */}
                <span className="font-mono text-[10.5px] tracking-[0.22em] text-champagne/55">
                  {nums[i]}
                </span>

                {/* Accent line */}
                <div
                  aria-hidden
                  className="mt-5 h-px w-8 bg-champagne/45 accent-line-expand group-hover:w-16 group-hover:bg-champagne/80"
                />

                <h3 className="mt-5 text-[15px] font-medium leading-snug text-paper sm:text-[16px]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-paper/60 sm:text-[14px]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Film grain */}
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />
    </section>
  );
}

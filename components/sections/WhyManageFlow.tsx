"use client";

import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

interface WhyItem {
  title: string;
  description: string;
}

export function WhyManageFlow() {
  const { t } = useLang();
  const dict = t.whyManageFlow;
  const items = dict.items as readonly WhyItem[];

  return (
    <section className="relative bg-ink py-24 sm:py-32 lg:py-36">
      <Container size="wide">
        <SectionHeader
          index="03"
          eyebrow={dict.eyebrow}
          title={dict.title}
          sub={dict.sub}
        />

        <Reveal y={14} className="mt-14 sm:mt-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.6,
                  ease: [0.22, 0.61, 0.36, 1]
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative rounded-[16px] border border-paper/15 bg-gradient-to-br from-onyx/80 to-onyx/40 p-6 transition-all duration-500 hover:border-champagne/30 hover:shadow-[0_0_25px_rgba(194,165,123,0.1)]">
                  {/* Accent line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.08 + 0.2,
                      duration: 0.8,
                      ease: [0.22, 0.61, 0.36, 1]
                    }}
                    className="h-px w-0 bg-gradient-to-r from-champagne/60 to-transparent absolute top-0 left-0"
                  ></motion.div>

                  {/* Content */}
                  <div className="space-y-3">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + 0.1, duration: 0.5 }}
                      className="text-[15px] font-medium text-paper leading-snug sm:text-[16px]"
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + 0.2, duration: 0.5 }}
                      className="text-[13px] leading-relaxed text-paper/70 sm:text-[14px]"
                    >
                      {item.description}
                    </motion.p>
                  </div>

                  {/* Hover accent */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 right-0 w-px h-6 bg-gradient-to-b from-champagne/40 to-transparent"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

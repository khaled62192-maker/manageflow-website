"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

interface ShowcaseCard {
  id: string;
  label: string;
  description: string;
  beforeGradient: string;
  afterGradient: string;
}

const showcases: ShowcaseCard[] = [
  {
    id: "branding",
    label: "Brand Identity",
    description: "From generic to premium",
    beforeGradient: "from-gray-600 to-gray-700",
    afterGradient: "from-champagne to-onyx"
  },
  {
    id: "social",
    label: "Social Media",
    description: "From zero to growth-ready",
    beforeGradient: "from-gray-500 to-gray-600",
    afterGradient: "from-champagne/80 to-paper/20"
  },
  {
    id: "website",
    label: "Website",
    description: "From outdated to conversion-focused",
    beforeGradient: "from-gray-700 to-gray-800",
    afterGradient: "from-onyx to-champagne/40"
  },
  {
    id: "ads",
    label: "Ads Creative",
    description: "From placeholder to compelling",
    beforeGradient: "from-gray-600 to-gray-700",
    afterGradient: "from-paper to-champagne"
  }
];

function MockupFrame({
  children,
  isHovered,
  type = "desktop"
}: {
  children: React.ReactNode;
  isHovered: boolean;
  type?: "desktop" | "mobile";
}) {
  if (type === "mobile") {
    return (
      <div className="mx-auto w-32 rounded-3xl border-8 border-paper/20 bg-onyx overflow-hidden aspect-[9/16]">
        {children}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border-8 border-paper/20 bg-onyx overflow-hidden aspect-video">
      {children}
    </div>
  );
}

export function BeforeAfterShowcase() {
  const { t } = useLang();
  const dict = t.beforeAfter;

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative bg-onyx py-24 sm:py-32 lg:py-36">
      <Container size="wide">
        <SectionHeader
          index="04"
          eyebrow={dict.eyebrow}
          title={dict.title}
          sub={dict.subtitle}
        />

        <Reveal y={14} className="mt-12 sm:mt-14">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {showcases.map((showcase, i) => (
              <motion.div
                key={showcase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                onHoverStart={() => setHoveredCard(showcase.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="rounded-[24px] border border-paper/12 bg-ink p-6 sm:p-8"
              >
                {/* Mockup Area */}
                <div className="mb-6 h-64 sm:h-80 overflow-hidden rounded-[12px] bg-onyx/50">
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                      opacity: hoveredCard === showcase.id ? 0 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-full h-full bg-gradient-to-br ${showcase.beforeGradient} flex items-center justify-center`}
                  >
                    <div className="text-center">
                      <div className="text-paper/40 text-sm mb-2">Before</div>
                      <div className="text-paper/60 text-xs">Generic Design</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredCard === showcase.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 w-full h-full bg-gradient-to-br ${showcase.afterGradient} flex items-center justify-center`}
                  >
                    <div className="text-center">
                      <div className="text-paper/40 text-sm mb-2">After</div>
                      <div className="text-champagne text-xs font-medium">
                        Premium Design
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-[16px] font-medium text-paper">
                    {showcase.label}
                  </h3>
                  <p className="text-[13px] text-paper/70">
                    {showcase.description}
                  </p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredCard === showcase.id ? 1 : 0.5
                    }}
                    className="pt-3 border-t border-paper/10"
                  >
                    <p className="text-[11px] text-champagne font-medium">
                      {hoveredCard === showcase.id
                        ? "✓ Click to see impact"
                        : "Hover to reveal"}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

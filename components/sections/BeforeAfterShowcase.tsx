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
}

const showcases: ShowcaseCard[] = [
  {
    id: "branding",
    label: "Brand Identity",
    description: "From generic to premium"
  },
  {
    id: "social",
    label: "Social Media",
    description: "From zero to growth-ready"
  },
  {
    id: "website",
    label: "Website",
    description: "From outdated to conversion-focused"
  },
  {
    id: "ads",
    label: "Ads Creative",
    description: "From placeholder to compelling"
  },
  {
    id: "automation",
    label: "AI Automation",
    description: "From manual to seamless"
  }
];

// ========== BRAND IDENTITY MOCKUP ==========
function BrandingMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full flex flex-col p-6 gap-6 justify-between">
      {isBefore ? (
        // BEFORE: Weak, generic logo
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-gray-500 rounded"></div>
            <div className="text-sm text-gray-400">Generic Co.</div>
          </div>
          <div className="text-xl font-serif text-gray-400">Bad Font</div>
        </div>
      ) : (
        // AFTER: Premium brand system
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gradient-to-br from-champagne to-champagne/60 rounded-sm"></div>
            <div className="text-xs font-medium text-champagne tracking-widest">MANAGEFLOW</div>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-paper/60">Color System</div>
            <div className="flex gap-2">
              <div className="h-6 w-6 bg-champagne rounded-sm"></div>
              <div className="h-6 w-6 bg-champagne/60 rounded-sm"></div>
              <div className="h-6 w-6 bg-champagne/30 rounded-sm"></div>
              <div className="h-6 w-6 bg-paper/30 rounded-sm"></div>
            </div>
          </div>
          <div className="pt-2 border-t border-paper/10">
            <div className="text-xs text-paper/40">Type System</div>
            <div className="text-2xl font-serif text-paper mt-2">Aa</div>
            <div className="text-xs text-paper/60 mt-1">Fraunces</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ========== SOCIAL MEDIA MOCKUP ==========
function SocialMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full p-4 flex flex-col">
      {isBefore ? (
        // BEFORE: Messy, inconsistent feed
        <div className="space-y-3">
          <div className="bg-gray-600 h-16 rounded"></div>
          <div className="text-xs text-gray-500">Random text...</div>
          <div className="bg-gray-700 h-20 rounded"></div>
          <div className="text-xs text-gray-500">No consistency</div>
        </div>
      ) : (
        // AFTER: Premium Instagram-style grid
        <div className="space-y-2">
          {/* Feed header */}
          <div className="flex items-center gap-2 pb-2 border-b border-paper/10">
            <div className="h-6 w-6 rounded-full bg-champagne/40"></div>
            <div className="text-xs text-paper/70">@brand</div>
          </div>
          {/* 2x2 grid */}
          <div className="grid grid-cols-2 gap-1.5 flex-1">
            <div className="aspect-square bg-gradient-to-br from-champagne/40 to-champagne/10 rounded-sm"></div>
            <div className="aspect-square bg-gradient-to-br from-champagne/30 to-champagne/5 rounded-sm"></div>
            <div className="aspect-square bg-gradient-to-br from-champagne/35 to-champagne/15 rounded-sm"></div>
            <div className="aspect-square bg-gradient-to-br from-champagne/25 to-champagne/8 rounded-sm"></div>
          </div>
        </div>
      )}
    </div>
  );
}

// ========== WEBSITE MOCKUP ==========
function WebsiteMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full flex flex-col bg-onyx/50">
      {/* Header/Nav */}
      <div className="h-10 border-b border-paper/10 px-4 flex items-center">
        {isBefore ? (
          <div className="h-2 w-12 bg-gray-600 rounded"></div>
        ) : (
          <div className="h-2 w-16 bg-champagne rounded"></div>
        )}
      </div>

      {/* Hero section */}
      <div className="flex-1 flex flex-col justify-center px-4 py-4 gap-3">
        {isBefore ? (
          // BEFORE: Outdated layout
          <div className="space-y-3">
            <div className="h-12 bg-gray-700 rounded"></div>
            <div className="h-2 w-full bg-gray-600 rounded"></div>
            <div className="h-2 w-4/5 bg-gray-600 rounded"></div>
            <div className="h-6 bg-gray-700 rounded mt-3"></div>
          </div>
        ) : (
          // AFTER: Modern premium layout
          <div className="space-y-3">
            <div className="h-10 bg-gradient-to-r from-champagne/30 to-champagne/5 rounded-lg"></div>
            <div className="space-y-1.5">
              <div className="h-2 w-full bg-paper/15 rounded-full"></div>
              <div className="h-2 w-4/5 bg-paper/10 rounded-full"></div>
            </div>
            <div className="pt-2 flex gap-2">
              <div className="h-6 flex-1 bg-champagne/20 rounded-full"></div>
              <div className="h-6 flex-1 bg-paper/10 rounded-full"></div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="h-8 border-t border-paper/10 px-4 flex items-center">
        <div className="h-1 w-20 bg-paper/15 rounded-full"></div>
      </div>
    </div>
  );
}

// ========== ADS CREATIVE MOCKUP ==========
function AdsMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full p-5 flex flex-col justify-between gap-3">
      {isBefore ? (
        // BEFORE: Weak generic ad
        <div className="space-y-2">
          <div className="h-20 bg-gray-600 rounded"></div>
          <div className="text-xs text-gray-500">Generic ad text</div>
          <div className="h-6 bg-gray-700 rounded"></div>
        </div>
      ) : (
        // AFTER: Premium campaign concept
        <div className="space-y-2">
          <div className="text-xs font-medium text-champagne tracking-widest">CAMPAIGN</div>
          <div className="h-16 bg-gradient-to-br from-champagne/25 to-champagne/5 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-xs text-paper/60">Creative Asset</div>
            </div>
          </div>
        </div>
      )}
      <div className={isBefore ? "h-6 bg-gray-700 rounded" : "h-7 bg-champagne/20 rounded-full text-xs flex items-center justify-center text-paper font-medium"}>
        {!isBefore && "Learn More →"}
      </div>
    </div>
  );
}

// ========== AI AUTOMATION MOCKUP ==========
function AutomationMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full p-4 flex flex-col gap-3">
      {isBefore ? (
        // BEFORE: Chaotic manual workflow
        <div className="space-y-2">
          <div className="flex gap-1">
            <div className="h-6 w-6 bg-gray-600 rounded"></div>
            <div className="flex-1 h-6 bg-gray-700 rounded"></div>
            <div className="h-6 w-6 bg-gray-600 rounded"></div>
          </div>
          <div className="h-2 w-4/5 bg-gray-600 rounded"></div>
          <div className="flex gap-1 mt-2">
            <div className="flex-1 h-6 bg-gray-700 rounded"></div>
            <div className="h-6 w-6 bg-gray-600 rounded"></div>
          </div>
          <div className="text-xs text-gray-500">Manual tasks...</div>
        </div>
      ) : (
        // AFTER: Elegant automation dashboard
        <div className="space-y-2">
          {/* Top bar */}
          <div className="flex items-center gap-2 pb-2 border-b border-paper/10">
            <div className="h-4 w-4 rounded-full bg-champagne/40"></div>
            <div className="text-xs text-paper/70 flex-1">Automation Flow</div>
            <div className="h-1 w-8 bg-paper/10 rounded-full"></div>
          </div>
          {/* Workflow nodes */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-champagne/30"></div>
              <div className="h-1 w-full bg-paper/8 rounded-full"></div>
              <div className="text-xs text-paper/40">→</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-champagne/50"></div>
              <div className="h-1 w-full bg-paper/8 rounded-full"></div>
              <div className="text-xs text-paper/40">→</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-champagne/40"></div>
            </div>
          </div>
          <div className="text-xs text-champagne/60 pt-1">Seamless</div>
        </div>
      )}
    </div>
  );
}

const mockupComponents: Record<string, React.ComponentType<{ isBefore: boolean }>> = {
  branding: BrandingMockup,
  social: SocialMockup,
  website: WebsiteMockup,
  ads: AdsMockup,
  automation: AutomationMockup
};

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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xs text-paper/40 mt-6 sm:mt-8 text-center"
        >
          Concept transformation examples
        </motion.p>

        <Reveal y={14} className="mt-10 sm:mt-14">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
            {showcases.map((showcase, i) => {
              const MockupComponent = mockupComponents[showcase.id];
              const isHovered = hoveredCard === showcase.id;

              return (
                <motion.div
                  key={showcase.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.7,
                    ease: [0.22, 0.61, 0.36, 1]
                  }}
                  onHoverStart={() => setHoveredCard(showcase.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group"
                >
                  {/* Card container with enhanced contrast */}
                  <div className="relative rounded-[24px] border-2 border-paper/25 bg-gradient-to-br from-onyx to-onyx/50 p-1 transition-all duration-500 hover:border-champagne/40 hover:shadow-[0_0_30px_rgba(194,165,123,0.15)]">
                    {/* Mockup area */}
                    <div className="relative h-80 overflow-hidden rounded-[20px] bg-onyx/80">
                      {/* BEFORE STATE */}
                      <motion.div
                        initial={{ opacity: 1, x: 0 }}
                        animate={
                          isHovered
                            ? { opacity: 0.15, x: -40 }
                            : { opacity: 1, x: 0 }
                        }
                        transition={{
                          duration: 0.6,
                          ease: [0.22, 0.61, 0.36, 1]
                        }}
                        className="absolute inset-0 z-10"
                      >
                        <MockupComponent isBefore={true} />
                      </motion.div>

                      {/* AFTER STATE */}
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={
                          isHovered
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: 40 }
                        }
                        transition={{
                          duration: 0.6,
                          ease: [0.22, 0.61, 0.36, 1]
                        }}
                        className="absolute inset-0 z-20"
                      >
                        <MockupComponent isBefore={false} />
                      </motion.div>

                      {/* STATE LABELS */}
                      <motion.div
                        initial={{ opacity: 1 }}
                        animate={{
                          opacity: isHovered ? 0 : 1
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-4 left-4 z-30 text-xs text-paper/60"
                      >
                        Before
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: isHovered ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-4 right-4 z-30 text-xs text-champagne font-medium"
                      >
                        After
                      </motion.div>

                      {/* HOVER GLOW */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: isHovered ? 1 : 0
                        }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 z-5 bg-gradient-to-r from-transparent via-champagne/5 to-transparent pointer-events-none"
                      ></motion.div>
                    </div>

                    {/* CONTENT */}
                    <div className="space-y-3 p-6">
                      <motion.div
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        className="flex items-center justify-between"
                      >
                        <h3 className="text-[16px] font-medium text-paper">
                          {showcase.label}
                        </h3>
                        <motion.span
                          animate={{ opacity: isHovered ? 1 : 0.4 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs text-champagne font-medium"
                        >
                          ✓
                        </motion.span>
                      </motion.div>

                      <motion.p
                        initial={{ opacity: 0.6 }}
                        whileHover={{ opacity: 0.8 }}
                        className="text-[13px] text-paper/70 transition-colors duration-300"
                      >
                        {showcase.description}
                      </motion.p>

                      {/* HOVER LINE */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isHovered ? "100%" : 0 }}
                        transition={{ duration: 0.5 }}
                        className="h-0.5 bg-gradient-to-r from-champagne to-champagne/0 mt-4"
                      ></motion.div>
                    </div>
                  </div>

                  {/* OUTER GLOW */}
                  <motion.div
                    animate={
                      isHovered
                        ? {
                            boxShadow:
                              "0 0 40px rgba(194, 165, 123, 0.2), 0 0 80px rgba(194, 165, 123, 0.1)"
                          }
                        : {
                            boxShadow: "0 0 0px rgba(194, 165, 123, 0)"
                          }
                    }
                    transition={{ duration: 0.4 }}
                    className="absolute -inset-4 rounded-[32px] z-0 pointer-events-none"
                  ></motion.div>
                </motion.div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

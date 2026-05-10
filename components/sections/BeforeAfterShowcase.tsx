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
  }
];

// Brand mockup components using SVG patterns
function BrandingMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full flex items-center justify-center">
      {isBefore ? (
        // Before: Generic type specimen
        <div className="text-center">
          <div className="text-6xl font-serif text-gray-400 mb-4">Aa</div>
          <div className="text-xs text-gray-500">Generic Design</div>
        </div>
      ) : (
        // After: Brand system
        <div className="space-y-6 w-full px-8">
          <div className="flex gap-3">
            <div className="h-12 w-12 rounded-lg bg-champagne/80"></div>
            <div className="h-12 w-12 rounded-lg bg-champagne/50"></div>
            <div className="h-12 w-12 rounded-lg bg-champagne/20"></div>
          </div>
          <div className="space-y-2">
            <div className="h-3 w-32 bg-paper/20 rounded-full"></div>
            <div className="h-2 w-24 bg-paper/10 rounded-full"></div>
          </div>
          <div className="text-xs text-champagne font-medium">Premium System</div>
        </div>
      )}
    </div>
  );
}

function SocialMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full flex items-center justify-center p-6">
      {isBefore ? (
        // Before: Single post
        <div className="w-full space-y-3">
          <div className="h-32 rounded-lg bg-gray-600"></div>
          <div className="h-2 w-full bg-gray-500 rounded"></div>
          <div className="h-2 w-3/4 bg-gray-500 rounded"></div>
        </div>
      ) : (
        // After: Curated grid
        <div className="grid grid-cols-2 gap-2 w-full">
          <div className="aspect-square rounded-lg bg-champagne/30"></div>
          <div className="aspect-square rounded-lg bg-champagne/40"></div>
          <div className="aspect-square rounded-lg bg-champagne/25"></div>
          <div className="aspect-square rounded-lg bg-champagne/35"></div>
        </div>
      )}
    </div>
  );
}

function WebsiteMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full flex flex-col">
      {/* Header area */}
      <div className="h-12 border-b border-paper/10 flex items-center px-4">
        {isBefore ? (
          <div className="h-2 w-12 bg-gray-500 rounded"></div>
        ) : (
          <div className="h-2 w-12 bg-champagne rounded"></div>
        )}
      </div>

      {/* Content area */}
      <div className="flex-1 flex items-center justify-center p-4">
        {isBefore ? (
          // Before: Outdated layout
          <div className="space-y-4 w-full">
            <div className="h-20 bg-gray-600 rounded"></div>
            <div className="h-3 w-full bg-gray-500 rounded"></div>
            <div className="h-3 w-4/5 bg-gray-500 rounded"></div>
          </div>
        ) : (
          // After: Modern layout
          <div className="space-y-4 w-full">
            <div className="h-16 bg-gradient-to-r from-champagne/40 to-champagne/10 rounded-lg"></div>
            <div className="flex gap-2">
              <div className="h-3 flex-1 bg-paper/20 rounded-full"></div>
              <div className="h-3 flex-1 bg-paper/20 rounded-full"></div>
              <div className="h-3 flex-1 bg-paper/20 rounded-full"></div>
            </div>
            <div className="h-3 w-2/3 bg-champagne/30 rounded-full"></div>
          </div>
        )}
      </div>

      {/* CTA area */}
      <div className="h-10 border-t border-paper/10 px-4 flex items-center">
        {!isBefore && <div className="h-2 w-16 bg-champagne rounded"></div>}
      </div>
    </div>
  );
}

function AdsMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full flex items-center justify-center p-6">
      {isBefore ? (
        // Before: Empty
        <div className="text-center">
          <div className="text-lg text-gray-500 mb-2">Placeholder</div>
          <div className="text-xs text-gray-600">No Creative</div>
        </div>
      ) : (
        // After: Campaign concept
        <div className="w-full space-y-4">
          <div className="h-6 w-4/5 bg-paper rounded text-xs leading-6 px-2">
            <span className="text-ink font-medium">Grow Your</span>
          </div>
          <div className="h-20 bg-gradient-to-br from-champagne/30 to-champagne/10 rounded-lg"></div>
          <div className="h-3 w-full bg-paper/10 rounded-full"></div>
          <div className="h-8 bg-champagne/30 rounded flex items-center px-3 text-xs text-paper font-medium">
            Learn More →
          </div>
        </div>
      )}
    </div>
  );
}

const mockupComponents: Record<string, React.ComponentType<{ isBefore: boolean }>> = {
  branding: BrandingMockup,
  social: SocialMockup,
  website: WebsiteMockup,
  ads: AdsMockup
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

        <Reveal y={14} className="mt-12 sm:mt-14">
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
                    {/* Mockup area with fixed height */}
                    <div className="relative h-80 overflow-hidden rounded-[20px] bg-onyx/80">
                      {/* Before state */}
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

                      {/* After state */}
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

                      {/* State labels - absolutely positioned to prevent overlap */}
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

                      {/* Hover indicator - subtle */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: isHovered ? 1 : 0
                        }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 z-5 bg-gradient-to-r from-transparent via-champagne/5 to-transparent pointer-events-none"
                      ></motion.div>
                    </div>

                    {/* Content area */}
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

                      {/* Hover indicator line */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isHovered ? "100%" : 0 }}
                        transition={{ duration: 0.5 }}
                        className="h-0.5 bg-gradient-to-r from-champagne to-champagne/0 mt-4"
                      ></motion.div>
                    </div>
                  </div>

                  {/* Outer glow on hover */}
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

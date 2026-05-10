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
    <div className="h-full w-full flex flex-col p-4 gap-5 justify-between">
      {isBefore ? (
        // BEFORE: Weak, generic, clumsy logo
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="text-xs text-gray-500">Logo Mark</div>
            <div className="h-12 w-12 bg-gray-600 rounded-sm flex items-center justify-center">
              <div className="text-xs text-gray-700">X</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-gray-500">Wordmark</div>
            <div className="text-lg font-serif text-gray-600" style={{ letterSpacing: "0.05em" }}>
              GENERIC
            </div>
          </div>
          <div className="space-y-2 pt-2 border-t border-gray-600">
            <div className="text-xs text-gray-500">Colors</div>
            <div className="flex gap-1.5">
              <div className="h-4 w-4 bg-gray-600 rounded"></div>
              <div className="h-4 w-4 bg-gray-500 rounded"></div>
              <div className="h-4 w-4 bg-yellow-600 rounded"></div>
            </div>
          </div>
        </div>
      ) : (
        // AFTER: Premium brand system
        <div className="space-y-4">
          {/* Logo */}
          <div className="space-y-2">
            <div className="text-xs text-paper/40 uppercase tracking-wider">Logo System</div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-sm bg-gradient-to-br from-champagne via-champagne/80 to-champagne/60 flex items-center justify-center">
                <div className="text-xs font-serif text-ink">◆</div>
              </div>
              <div className="text-xs font-medium text-paper tracking-[0.15em]">MANAGEFLOW</div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="space-y-1.5">
            <div className="text-xs text-paper/40 uppercase tracking-wider">Palette</div>
            <div className="space-y-1">
              <div className="flex gap-2 items-center">
                <div className="h-5 w-8 rounded-sm bg-champagne"></div>
                <div className="text-xs text-paper/50">Primary</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="h-5 w-8 rounded-sm bg-champagne/50"></div>
                <div className="text-xs text-paper/50">Secondary</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="h-5 w-8 rounded-sm bg-paper/25"></div>
                <div className="text-xs text-paper/50">Accent</div>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-1 pt-2 border-t border-paper/10">
            <div className="text-xs text-paper/40 uppercase tracking-wider">Typography</div>
            <div className="space-y-1">
              <div className="text-sm font-serif text-paper">Headlines</div>
              <div className="text-xs text-paper/60">Fraunces · 600</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ========== SOCIAL MEDIA MOCKUP ==========
function SocialMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full p-4 flex flex-col gap-3">
      {isBefore ? (
        // BEFORE: Chaotic, inconsistent feed
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-600">
            <div className="h-5 w-5 rounded-full bg-gray-600"></div>
            <div className="text-xs text-gray-500">randombrand</div>
          </div>
          <div className="space-y-2">
            <div className="bg-gradient-to-r from-blue-700 to-purple-700 h-14 rounded-sm"></div>
            <div className="bg-yellow-600 h-14 rounded-sm"></div>
            <div className="bg-red-700 h-14 rounded-sm"></div>
          </div>
          <div className="text-xs text-gray-500">No theme...</div>
        </div>
      ) : (
        // AFTER: Premium Instagram-style curated feed
        <div className="space-y-2">
          {/* Profile header */}
          <div className="flex items-center justify-between pb-3 border-b border-paper/10">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-champagne/60 to-champagne/40"></div>
              <div className="text-xs text-paper/80 font-medium">Brand Name</div>
            </div>
            <div className="text-xs text-paper/40">· · ·</div>
          </div>

          {/* 2x2 Instagram grid */}
          <div className="grid grid-cols-2 gap-2 flex-1">
            {/* Post 1 */}
            <div className="aspect-square rounded-sm bg-gradient-to-br from-champagne/50 via-champagne/30 to-champagne/10 p-2 flex flex-col justify-between">
              <div className="text-xs text-paper/60">Summer</div>
              <div className="text-xs text-paper/40">Campaign</div>
            </div>

            {/* Post 2 */}
            <div className="aspect-square rounded-sm bg-gradient-to-br from-champagne/40 to-champagne/5 p-2 flex items-center justify-center">
              <div className="text-xs text-paper/50 text-center">Brand Story</div>
            </div>

            {/* Post 3 */}
            <div className="aspect-square rounded-sm bg-gradient-to-br from-champagne/35 to-paper/10 p-2 flex items-end">
              <div className="text-xs text-paper/60">Product</div>
            </div>

            {/* Post 4 */}
            <div className="aspect-square rounded-sm bg-gradient-to-br from-champagne/25 to-champagne/0 p-2 flex items-center">
              <div className="text-xs text-paper/40 italic">Moment</div>
            </div>
          </div>

          {/* Engagement hints */}
          <div className="flex gap-2 pt-1 text-xs text-paper/40">
            <span>♥ 324</span>
            <span>· 47</span>
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
      <div className="h-8 border-b px-3 flex items-center justify-between" style={{ borderColor: isBefore ? "#555" : "#ffffff1a" }}>
        {isBefore ? (
          <>
            <div className="h-2 w-14 bg-gray-600 rounded"></div>
            <div className="flex gap-2">
              <div className="h-2 w-6 bg-gray-600 rounded"></div>
              <div className="h-2 w-6 bg-gray-600 rounded"></div>
            </div>
          </>
        ) : (
          <>
            <div className="h-2 w-16 bg-champagne/60 rounded-sm"></div>
            <div className="flex gap-3 items-center">
              <div className="text-xs text-paper/50">About</div>
              <div className="text-xs text-paper/50">Work</div>
              <div className="h-5 px-2 bg-champagne/20 rounded-sm text-paper text-xs flex items-center">Contact</div>
            </div>
          </>
        )}
      </div>

      {/* Hero section */}
      <div className="flex-1 flex flex-col justify-center px-4 py-3 gap-3">
        {isBefore ? (
          // BEFORE: Outdated, cluttered
          <div className="space-y-3">
            <div className="text-sm font-serif text-gray-600">ALL CAPS HEADLINE</div>
            <div className="space-y-1.5">
              <div className="h-2 w-full bg-gray-700 rounded"></div>
              <div className="h-2 w-full bg-gray-700 rounded"></div>
              <div className="h-2 w-2/3 bg-gray-700 rounded"></div>
            </div>
            <div className="h-6 w-20 bg-gray-600 rounded mt-3"></div>
          </div>
        ) : (
          // AFTER: Modern, premium, with hierarchy
          <div className="space-y-2">
            {/* Eyebrow */}
            <div className="text-xs text-champagne/60 uppercase tracking-widest">Creative Studio</div>

            {/* Headline */}
            <div className="space-y-1">
              <div className="h-6 bg-gradient-to-r from-paper/30 to-paper/10 rounded"></div>
              <div className="h-6 w-4/5 bg-gradient-to-r from-paper/25 to-transparent rounded"></div>
            </div>

            {/* Supporting text */}
            <div className="pt-1 space-y-1">
              <div className="h-2 w-full bg-paper/8 rounded-full"></div>
              <div className="h-2 w-3/4 bg-paper/6 rounded-full"></div>
            </div>

            {/* CTA */}
            <div className="pt-2 flex gap-2">
              <div className="h-5 px-3 bg-champagne/25 rounded-full text-xs flex items-center text-paper">Explore →</div>
            </div>
          </div>
        )}
      </div>

      {/* Featured section */}
      {!isBefore && (
        <div className="px-3 pb-3 space-y-2">
          <div className="text-xs text-paper/40">Featured</div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-8 bg-gradient-to-br from-champagne/20 to-champagne/5 rounded-sm"></div>
            <div className="h-8 bg-gradient-to-br from-champagne/15 to-champagne/0 rounded-sm"></div>
            <div className="h-8 bg-paper/10 rounded-sm"></div>
          </div>
        </div>
      )}
    </div>
  );
}

// ========== ADS CREATIVE MOCKUP ==========
function AdsMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full p-4 flex flex-col justify-between">
      {isBefore ? (
        // BEFORE: Weak, low-effort ad with clashing design
        <div className="space-y-2">
          <div className="h-20 bg-gradient-to-r from-blue-700 to-purple-700 rounded flex items-center justify-center">
            <div className="text-xs text-white">Stock Image</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs font-bold text-gray-600">CHEAP HEADLINE</div>
            <div className="text-xs text-gray-500 leading-tight">Limited time offer click now!!!</div>
          </div>
        </div>
      ) : (
        // AFTER: Premium campaign concept with elegant copy
        <div className="space-y-3">
          {/* Visual area */}
          <div className="h-20 bg-gradient-to-br from-champagne/40 via-champagne/15 to-champagne/5 rounded-sm flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 bg-champagne/20 rounded-full blur-lg"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 bg-champagne/30 rounded-full"></div>
            <div className="text-xs text-paper/40">Premium Design</div>
          </div>

          {/* Copy */}
          <div className="space-y-1.5">
            <div className="text-xs font-serif text-paper leading-snug">Luxury meets function</div>
            <div className="text-xs text-paper/70 leading-[1.4]">
              Experience premium design that elevates every moment.
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className={isBefore ? "h-5 bg-gray-700 rounded text-xs text-gray-600 flex items-center justify-center" : "h-6 bg-champagne/25 rounded-full text-xs flex items-center justify-center text-paper font-medium"}>
        {isBefore ? "CLICK HERE" : "Discover →"}
      </div>
    </div>
  );
}

// ========== AI AUTOMATION MOCKUP ==========
function AutomationMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full p-4 flex flex-col gap-4">
      {isBefore ? (
        // BEFORE: Chaotic manual workflow
        <div className="space-y-3">
          <div className="text-xs text-gray-500 uppercase">Chaos</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gray-600 rounded-full flex items-center justify-center text-xs">📝</div>
              <div className="flex-1 h-3 bg-gray-700 rounded"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gray-600 rounded-full flex items-center justify-center text-xs">📧</div>
              <div className="flex-1 h-3 bg-gray-700 rounded"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gray-600 rounded-full flex items-center justify-center text-xs">✗</div>
              <div className="flex-1 h-3 bg-gray-700 rounded"></div>
            </div>
          </div>
          <div className="text-xs text-gray-500">Multiple tools, manual work</div>
        </div>
      ) : (
        // AFTER: Elegant automation flow
        <div className="space-y-2">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-paper/10">
            <div className="text-xs text-champagne/70 uppercase tracking-wider">Automation</div>
            <div className="h-1 w-6 bg-paper/10 rounded-full"></div>
          </div>

          {/* Workflow nodes */}
          <div className="space-y-2 py-1">
            {/* Node 1: Inquiry */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-champagne/50 flex-shrink-0"></div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-champagne/30 to-transparent"></div>
              <div className="text-xs text-paper/40">Receive</div>
            </div>

            {/* Node 2: Process */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-champagne/40 flex-shrink-0"></div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-champagne/25 to-transparent"></div>
              <div className="text-xs text-paper/40">Process</div>
            </div>

            {/* Node 3: Response */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-champagne/60 flex-shrink-0"></div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-champagne/35 to-transparent"></div>
              <div className="text-xs text-paper/40">Send</div>
            </div>

            {/* Node 4: Analyze */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-champagne/45 flex-shrink-0"></div>
              <div className="text-xs text-paper/40">Log</div>
            </div>
          </div>

          {/* Status indicator */}
          <div className="pt-2 border-t border-paper/10">
            <div className="text-xs text-champagne/60">↻ Active 24/7</div>
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

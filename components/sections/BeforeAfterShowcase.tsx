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
    description: "From weak to memorable"
  },
  {
    id: "website",
    label: "Website Design",
    description: "From outdated to premium"
  },
  {
    id: "trust",
    label: "Trust & Credibility",
    description: "From weak to confident"
  },
  {
    id: "sales",
    label: "Sales Materials",
    description: "From amateur to professional"
  },
  {
    id: "campaign",
    label: "Campaign Creative",
    description: "From forgettable to premium"
  }
];

// ========== BRAND IDENTITY MOCKUP ==========
function BrandingMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full flex flex-col p-5 gap-6 justify-between">
      {isBefore ? (
        // BEFORE: Weak fictional brand (Maison Brew)
        <div className="space-y-4">
          <div className="space-y-1.5">
            <div className="text-xs text-gray-500 uppercase">Logo</div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-yellow-500 rounded flex items-center justify-center text-xs font-bold text-gray-700">
                MB
              </div>
              <div className="text-sm font-sans text-gray-600 tracking-widest">
                MAISON BREW
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs text-gray-500 uppercase">Colors</div>
            <div className="flex gap-2">
              <div className="h-5 w-5 bg-yellow-500 rounded-sm"></div>
              <div className="h-5 w-5 bg-red-600 rounded-sm"></div>
              <div className="h-5 w-5 bg-purple-700 rounded-sm"></div>
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-gray-500 uppercase">Typography</div>
            <div className="text-xs text-gray-600">Arial Bold · Times New Roman</div>
          </div>
        </div>
      ) : (
        // AFTER: Premium brand identity
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="text-xs text-paper/40 uppercase tracking-widest">Logo Mark</div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-sm bg-gradient-to-br from-champagne to-champagne/70 flex items-center justify-center">
                <div className="text-[11px] text-ink font-serif">☕</div>
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="text-xs font-medium text-paper tracking-[0.12em]">MAISON</div>
                <div className="text-xs font-light text-paper/60 tracking-[0.08em]">BREW</div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs text-paper/40 uppercase tracking-widest">Palette</div>
            <div className="space-y-1">
              <div className="flex gap-2 items-center">
                <div className="h-4 w-6 rounded-sm bg-champagne"></div>
                <div className="text-xs text-paper/60">Gold</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="h-4 w-6 rounded-sm bg-amber-900/60"></div>
                <div className="text-xs text-paper/60">Deep</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="h-4 w-6 rounded-sm bg-paper/20"></div>
                <div className="text-xs text-paper/60">Cream</div>
              </div>
            </div>
          </div>

          <div className="space-y-1 pt-2 border-t border-paper/10">
            <div className="text-xs text-paper/40 uppercase tracking-widest">Typography</div>
            <div className="text-xs text-paper/70">Fraunces Serif · Inter</div>
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
      {/* Navigation */}
      <div className="h-8 border-b px-3 flex items-center justify-between" style={{ borderColor: isBefore ? "#555" : "#ffffff1a" }}>
        {isBefore ? (
          <>
            <div className="text-xs font-bold text-yellow-600">MAISON BREW CAFE</div>
            <div className="flex gap-1 text-xs text-gray-600">
              <div>HOME</div>
              <div>MENU</div>
            </div>
          </>
        ) : (
          <>
            <div className="text-xs font-medium text-champagne/70 tracking-widest">MAISON</div>
            <div className="flex gap-3 text-xs text-paper/50">
              <div>Coffee</div>
              <div>Reserve</div>
              <div>About</div>
            </div>
          </>
        )}
      </div>

      {/* Hero */}
      <div className="flex-1 flex flex-col justify-center px-4 py-3 gap-3">
        {isBefore ? (
          <div className="space-y-2">
            <div className="text-sm font-bold text-yellow-600">Welcome to Maison!</div>
            <div className="space-y-1">
              <div className="h-2 w-full bg-gray-700 rounded"></div>
              <div className="h-2 w-4/5 bg-gray-700 rounded"></div>
            </div>
            <div className="h-5 w-24 bg-red-600 rounded text-xs text-white flex items-center justify-center font-bold">
              CLICK NOW
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="text-xs text-champagne/50 uppercase tracking-widest">Specialty Coffee</div>
            <div className="space-y-1.5">
              <div className="text-sm font-serif text-paper/90">Moments worth savoring</div>
              <div className="h-0.5 w-8 bg-champagne/40"></div>
              <div className="text-xs text-paper/60">Heritage roasts in curated spaces.</div>
            </div>
            <div className="flex gap-2 pt-1">
              <div className="h-5 px-3 bg-champagne/25 rounded-full text-xs text-paper flex items-center">
                Reserve →
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Featured */}
      {!isBefore && (
        <div className="px-3 pb-3 space-y-2 border-t border-paper/10">
          <div className="text-xs text-paper/40 uppercase tracking-wider">Featured</div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-7 rounded-sm bg-gradient-to-br from-amber-700/40 to-amber-900/20"></div>
            <div className="h-7 rounded-sm bg-gradient-to-br from-champagne/30 to-champagne/10"></div>
            <div className="h-7 rounded-sm bg-paper/8"></div>
          </div>
        </div>
      )}
    </div>
  );
}

// ========== TRUST & CREDIBILITY MOCKUP ==========
function TrustMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full p-4 flex flex-col gap-3">
      {isBefore ? (
        // BEFORE: Weak untrustworthy business
        <div className="space-y-3">
          <div className="text-xs text-gray-500">About Us</div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-gray-700 rounded"></div>
            <div className="h-2 w-4/5 bg-gray-700 rounded"></div>
          </div>
          <div className="text-xs text-gray-500 italic">No reviews shown</div>
          <div className="text-xs text-gray-500">Contact: unclear</div>
        </div>
      ) : (
        // AFTER: Premium credible business
        <div className="space-y-2">
          <div className="text-xs text-champagne/70 uppercase tracking-wider">Trusted</div>

          {/* Testimonial */}
          <div className="rounded-sm bg-onyx/50 p-3 border-l-2 border-champagne/40">
            <div className="text-xs text-paper/70 mb-2 italic">
              "Exceptional quality and attention to detail."
            </div>
            <div className="text-xs text-paper/50">— Client</div>
          </div>

          {/* Trust signals */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-champagne/60">✓</span>
              <span className="text-paper/60">8 years in operation</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-champagne/60">✓</span>
              <span className="text-paper/60">500+ satisfied guests</span>
            </div>
          </div>

          {/* Contact clarity */}
          <div className="pt-2 border-t border-paper/10">
            <div className="text-xs text-paper/50">📞 +971-4-... · reserve@</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ========== SALES MATERIALS MOCKUP ==========
function SalesMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full p-4 flex flex-col gap-3">
      {isBefore ? (
        // BEFORE: Weak amateur materials
        <div className="space-y-2">
          <div className="text-xs text-gray-600 font-bold">proposal_final_v3.docx</div>
          <div className="space-y-1.5">
            <div className="h-2 w-full bg-gray-700 rounded"></div>
            <div className="h-2 w-4/5 bg-gray-700 rounded"></div>
            <div className="h-2 w-3/5 bg-gray-700 rounded"></div>
          </div>
          <div className="text-xs text-gray-500">Default margins</div>
          <div className="text-xs text-gray-500">Basic formatting</div>
        </div>
      ) : (
        // AFTER: Premium pitch deck
        <div className="space-y-2">
          <div className="text-xs text-champagne/70 uppercase tracking-wider">Pitch Deck</div>

          {/* Slide previews */}
          <div className="space-y-1.5">
            <div className="h-8 rounded-sm bg-gradient-to-br from-champagne/50 to-champagne/20 flex items-center px-3 border-l-2 border-champagne/40">
              <div className="text-xs text-paper/80 font-serif">Our Story</div>
            </div>

            <div className="h-8 rounded-sm bg-gradient-to-br from-paper/15 to-paper/5 flex items-center px-3">
              <div className="text-xs text-paper/60">What We Do</div>
            </div>

            <div className="h-8 rounded-sm bg-gradient-to-br from-champagne/30 to-champagne/10 flex items-center px-3">
              <div className="text-xs text-paper/60">Let's Connect</div>
            </div>
          </div>

          <div className="text-xs text-paper/40 pt-1">10 slides · premium design</div>
        </div>
      )}
    </div>
  );
}

// ========== CAMPAIGN CREATIVE MOCKUP ==========
function CampaignMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full p-4 flex flex-col justify-between gap-3">
      {isBefore ? (
        // BEFORE: Cheap forgettable ad
        <div className="space-y-2">
          <div className="h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded flex items-center justify-center text-xs text-white font-bold">
            SAVE NOW!!!
          </div>
          <div className="space-y-1">
            <div className="text-xs text-gray-600 font-bold">LIMITED TIME 40% OFF</div>
            <div className="text-xs text-gray-500">Act fast or you'll miss out!!!</div>
          </div>
        </div>
      ) : (
        // AFTER: Premium campaign concept
        <div className="space-y-3">
          <div className="h-16 bg-gradient-to-br from-champagne/45 via-champagne/25 to-amber-900/15 rounded-sm flex flex-col items-center justify-center relative">
            <div className="text-xs text-paper/50 font-serif">Premium Campaign</div>
            <div className="text-[10px] text-paper/30 mt-1">Crafted for elegance</div>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-serif text-paper leading-snug">
              Savor the Moment
            </div>
            <div className="text-xs text-paper/70">
              Thoughtfully designed experiences.
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className={isBefore ? "h-6 bg-gray-700 rounded text-xs text-gray-600 flex items-center justify-center font-bold" : "h-6 bg-champagne/25 rounded-full text-xs flex items-center justify-center text-paper font-medium"}>
        {isBefore ? "CLICK!" : "Explore →"}
      </div>
    </div>
  );
}

const mockupComponents: Record<string, React.ComponentType<{ isBefore: boolean }>> = {
  branding: BrandingMockup,
  website: WebsiteMockup,
  trust: TrustMockup,
  sales: SalesMockup,
  campaign: CampaignMockup
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
          className="text-xs text-paper/40 mt-6 sm:mt-8 text-center italic"
        >
          Concept examples showing service capabilities
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
                  {/* Card container */}
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

                      {/* Labels */}
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

                      {/* Glow */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: isHovered ? 1 : 0
                        }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 z-5 bg-gradient-to-r from-transparent via-champagne/5 to-transparent pointer-events-none"
                      ></motion.div>
                    </div>

                    {/* Content */}
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

                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isHovered ? "100%" : 0 }}
                        transition={{ duration: 0.5 }}
                        className="h-0.5 bg-gradient-to-r from-champagne to-champagne/0 mt-4"
                      ></motion.div>
                    </div>
                  </div>

                  {/* Outer glow */}
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

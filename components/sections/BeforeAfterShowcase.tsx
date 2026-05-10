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
        // BEFORE: Ugly weak brand
        <div className="space-y-5">
          {/* Bad logo */}
          <div className="space-y-2">
            <div className="text-xs text-gray-500 uppercase">Logo</div>
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded flex items-center justify-center text-xs font-black text-gray-800">
                MB
              </div>
              <div className="space-y-1">
                <div className="text-sm font-black text-gray-600 tracking-wider">MAISON</div>
                <div className="text-xs text-gray-500 font-bold">BREW co</div>
              </div>
            </div>
          </div>

          {/* Clashing colors */}
          <div className="space-y-2">
            <div className="text-xs text-gray-500 uppercase">Colors (bad)</div>
            <div className="flex gap-1">
              <div className="h-6 w-6 bg-yellow-500 rounded"></div>
              <div className="h-6 w-6 bg-red-600 rounded"></div>
              <div className="h-6 w-6 bg-purple-700 rounded"></div>
              <div className="h-6 w-6 bg-cyan-500 rounded"></div>
            </div>
          </div>

          {/* Bad typography */}
          <div className="space-y-1">
            <div className="text-xs text-gray-500 uppercase">Fonts</div>
            <div className="text-xs text-gray-600 font-sans">Arial Bold · Times · Comic Sans</div>
          </div>
        </div>
      ) : (
        // AFTER: Premium brand system
        <div className="space-y-5">
          {/* Premium logo application */}
          <div className="space-y-3">
            <div className="text-xs text-champagne/60 uppercase tracking-widest font-medium">Logo System</div>

            {/* Logo mark */}
            <div className="flex items-center gap-3 pt-2">
              <div className="h-10 w-10 rounded-sm bg-gradient-to-br from-champagne via-champagne/85 to-champagne/70 flex items-center justify-center shadow-lg">
                <div className="text-[13px] text-ink font-serif">☕</div>
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="text-xs font-medium text-paper tracking-[0.15em]">MAISON</div>
                <div className="text-[10px] text-paper/50 font-light tracking-[0.1em]">BREW</div>
              </div>
            </div>
          </div>

          {/* Business card mockup */}
          <div className="space-y-2">
            <div className="text-xs text-champagne/50 uppercase tracking-widest text-[10px]">Business Card</div>
            <div className="rounded-sm bg-gradient-to-br from-paper/40 to-paper/25 border border-champagne/30 p-3 h-12 flex items-center">
              <div className="text-xs text-ink font-serif">MAISON BREW</div>
            </div>
          </div>

          {/* Color palette */}
          <div className="space-y-2">
            <div className="text-xs text-champagne/50 uppercase tracking-widest text-[10px]">Palette</div>
            <div className="flex gap-1.5">
              <div className="h-5 w-5 rounded-sm bg-champagne shadow-sm border border-champagne/40"></div>
              <div className="h-5 w-5 rounded-sm bg-amber-900/50 border border-amber-900/30"></div>
              <div className="h-5 w-5 rounded-sm bg-paper/20 border border-paper/10"></div>
            </div>
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
      <div className="h-8 border-b px-3 flex items-center justify-between" style={{ borderColor: isBefore ? "#666" : "#ffffff12" }}>
        {isBefore ? (
          <>
            <div className="text-xs font-black text-yellow-600">MAISON BREW</div>
            <div className="flex gap-2 text-xs text-gray-600 font-bold">
              <div>HOME</div>
              <div>MENU</div>
            </div>
          </>
        ) : (
          <>
            <div className="text-xs font-medium text-champagne/70 tracking-[0.15em]">MAISON BREW</div>
            <div className="flex gap-4 text-xs text-paper/50 font-light">
              <div>Coffee</div>
              <div>Reserve</div>
              <div>About</div>
            </div>
          </>
        )}
      </div>

      {/* Hero section */}
      <div className="flex-1 flex flex-col justify-center px-4 py-4 gap-3">
        {isBefore ? (
          // BEFORE: Outdated ugly website
          <div className="space-y-3">
            <div className="text-sm font-black text-yellow-600">WELCOME TO MAISON BREW!!!</div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-gray-700 rounded"></div>
              <div className="h-2 w-4/5 bg-gray-700 rounded"></div>
              <div className="h-2 w-3/5 bg-gray-700 rounded"></div>
            </div>
            <div className="h-6 w-20 bg-red-600 rounded text-xs text-white flex items-center justify-center font-black mt-2">
              CLICK!!!
            </div>
          </div>
        ) : (
          // AFTER: Premium luxury homepage
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="text-xs text-champagne/50 uppercase tracking-[0.2em] font-light">Specialty Coffee</div>
              <div className="text-sm font-serif text-paper/95 leading-snug">Moments worth<br />savoring</div>
            </div>

            <div className="h-0.5 w-12 bg-gradient-to-r from-champagne/60 to-transparent"></div>

            <div className="text-xs text-paper/60 leading-[1.6]">
              Heritage roasts in<br />curated spaces.
            </div>

            <div className="flex gap-3 pt-2">
              <div className="h-5 px-3 bg-champagne/25 rounded-full text-xs text-paper flex items-center font-medium">
                Reserve →
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Featured */}
      {!isBefore && (
        <div className="px-4 pb-3 space-y-2 border-t border-paper/10">
          <div className="text-xs text-paper/40 uppercase tracking-wider text-[10px]">Featured</div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-8 rounded-sm bg-gradient-to-br from-amber-700/40 to-amber-900/15 border border-amber-900/20"></div>
            <div className="h-8 rounded-sm bg-gradient-to-br from-champagne/30 to-champagne/5 border border-champagne/15"></div>
            <div className="h-8 rounded-sm bg-paper/10 border border-paper/5"></div>
          </div>
        </div>
      )}
    </div>
  );
}

// ========== TRUST & CREDIBILITY MOCKUP ==========
function TrustMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full p-4 flex flex-col gap-4">
      {isBefore ? (
        // BEFORE: Weak untrustworthy
        <div className="space-y-3">
          <div className="text-xs text-gray-600 font-bold">About</div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-gray-700 rounded"></div>
            <div className="h-2 w-4/5 bg-gray-700 rounded"></div>
          </div>
          <div className="text-xs text-gray-500 italic">Contact: unclear</div>
        </div>
      ) : (
        // AFTER: Premium credible business
        <div className="space-y-3">
          <div className="text-xs text-champagne/70 uppercase tracking-wider font-medium">Trusted</div>

          {/* Testimonial card */}
          <div className="rounded-sm bg-onyx/70 border-l-2 border-champagne/40 p-3 space-y-2">
            <div className="text-xs text-paper/75 italic leading-[1.5]">
              "The quality and attention to detail sets them apart."
            </div>
            <div className="text-xs text-paper/50">— Satisfied Client</div>
          </div>

          {/* Trust signals */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-champagne/70 font-medium">✓</span>
              <span className="text-paper/65">8 years in business</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-champagne/70 font-medium">✓</span>
              <span className="text-paper/65">600+ satisfied clients</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-champagne/70 font-medium">✓</span>
              <span className="text-paper/65">Founder-led execution</span>
            </div>
          </div>

          {/* Contact */}
          <div className="pt-2 border-t border-paper/10">
            <div className="text-xs text-paper/50 font-light">📞 +971-4-xxx-xxxx</div>
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
          <div className="text-xs text-gray-600 font-bold">proposal_final_v2.docx</div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-gray-700 rounded"></div>
            <div className="h-2 w-4/5 bg-gray-700 rounded"></div>
            <div className="h-2 w-3/5 bg-gray-700 rounded"></div>
          </div>
          <div className="text-xs text-gray-500">Times New Roman · Default margins</div>
        </div>
      ) : (
        // AFTER: Premium pitch deck
        <div className="space-y-2">
          <div className="text-xs text-champagne/70 uppercase tracking-wider font-medium">Premium Deck</div>

          {/* Slide previews */}
          <div className="space-y-1.5">
            {/* Title slide */}
            <div className="h-8 rounded-sm bg-gradient-to-br from-champagne/50 to-champagne/20 border-l-2 border-champagne/50 flex items-center px-3">
              <div className="text-xs text-paper/85 font-serif font-medium">Our Story</div>
            </div>

            {/* Content slide */}
            <div className="h-8 rounded-sm bg-gradient-to-br from-paper/15 to-paper/5 border border-paper/10 flex items-center px-3">
              <div className="text-xs text-paper/60">What We Do</div>
            </div>

            {/* CTA slide */}
            <div className="h-8 rounded-sm bg-gradient-to-br from-champagne/30 to-champagne/10 border border-champagne/15 flex items-center px-3">
              <div className="text-xs text-paper/60">Let's Connect</div>
            </div>
          </div>

          <div className="text-xs text-paper/40 font-light pt-1">12 slides · Premium design</div>
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
          <div className="h-16 bg-gradient-to-r from-purple-600 via-pink-500 to-red-600 rounded flex items-center justify-center text-xs text-white font-black">
            MEGA SALE NOW!!!
          </div>
          <div className="space-y-1">
            <div className="text-xs text-gray-600 font-bold">50% OFF EVERYTHING</div>
            <div className="text-xs text-gray-500 font-bold">ENDS TODAY!!!</div>
          </div>
        </div>
      ) : (
        // AFTER: Premium campaign concept
        <div className="space-y-3">
          <div className="h-16 bg-gradient-to-br from-champagne/50 via-champagne/25 to-amber-900/20 rounded-sm flex flex-col items-center justify-center relative overflow-hidden border border-champagne/20">
            <div className="absolute top-1 right-2 w-6 h-6 bg-champagne/10 rounded-full blur-md"></div>
            <div className="text-xs text-paper/60 font-serif font-medium">Premium Campaign</div>
            <div className="text-[10px] text-paper/35 mt-1 font-light">Elegance in every moment</div>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs font-serif text-paper/95 leading-tight font-medium">
              Savor the Craft
            </div>
            <div className="text-xs text-paper/70 font-light leading-[1.5]">
              Thoughtfully designed for discerning tastes.
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className={isBefore ? "h-6 bg-gray-700 rounded text-xs text-gray-600 flex items-center justify-center font-black" : "h-6 bg-champagne/25 rounded-full text-xs flex items-center justify-center text-paper font-medium"}>
        {isBefore ? "CLICK NOW!" : "Explore →"}
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
          className="text-xs text-paper/40 mt-6 sm:mt-8 text-center italic font-light"
        >
          Concept examples showing service potential
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

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

// Detect if device is touch-capable (mobile/tablet)
function useTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Detect touch capability
    const isTouchDevice = () => {
      return (
        ("ontouchstart" in window) ||
        (navigator.maxTouchPoints > 0) ||
        (window.matchMedia("(pointer: coarse)").matches)
      );
    };

    setIsTouch(isTouchDevice());
    setMounted(true);
  }, []);

  return { isTouch, mounted };
}

const scenarioIds = ["branding", "website", "trust", "sales", "campaign"];

// ========== BRAND IDENTITY MOCKUP ==========
function BrandingMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full flex flex-col p-4 gap-4 justify-between bg-onyx/30">
      {isBefore ? (
        // BEFORE: Weak fictional brand
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="text-xs text-gray-500 uppercase">Logo</div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-yellow-500 rounded flex items-center justify-center text-xs font-bold text-gray-700">
                MB
              </div>
              <div className="text-xs font-sans text-gray-600 tracking-widest font-bold">MAISON BREW</div>
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-gray-500 uppercase">Colors</div>
            <div className="flex gap-2">
              <div className="h-4 w-4 bg-yellow-500 rounded-sm"></div>
              <div className="h-4 w-4 bg-red-600 rounded-sm"></div>
              <div className="h-4 w-4 bg-purple-700 rounded-sm"></div>
              <div className="h-4 w-4 bg-cyan-400 rounded-sm"></div>
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-gray-500 uppercase">Font</div>
            <div className="text-xs text-gray-600 font-sans">Arial · Times New Roman</div>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-gray-500 uppercase">Applications</div>
            <div className="text-xs text-gray-600">Inconsistent usage</div>
          </div>
        </div>
      ) : (
        // AFTER: Premium luxury brand system
        <div className="space-y-3">
          {/* Logo & wordmark */}
          <div className="space-y-1.5">
            <div className="text-xs text-paper/35 uppercase tracking-widest font-light">Identity</div>
            <div className="flex items-center gap-3 bg-paper/5 p-2 rounded-sm">
              <div className="h-7 w-7 rounded-sm bg-gradient-to-br from-champagne via-amber-600/80 to-amber-900/60 flex items-center justify-center shadow-sm">
                <div className="text-[8px] text-ink font-serif font-semibold">𝓜</div>
              </div>
              <div className="flex flex-col gap-0">
                <div className="text-xs font-serif text-paper tracking-[0.18em]">MAISON</div>
                <div className="text-[9px] font-light text-paper/50 tracking-[0.1em]">B R E W</div>
              </div>
            </div>
          </div>

          {/* Color palette with names */}
          <div className="space-y-1.5">
            <div className="text-xs text-paper/35 uppercase tracking-widest font-light">Palette</div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-sm bg-champagne shadow-sm border border-champagne/20"></div>
                <div className="text-xs text-paper/60">Champagne</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-sm bg-amber-900 shadow-sm"></div>
                <div className="text-xs text-paper/60">Espresso</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-sm bg-paper shadow-sm border border-paper/30"></div>
                <div className="text-xs text-paper/60">Cream</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-sm bg-paper/20 shadow-sm"></div>
                <div className="text-xs text-paper/60">Ivory</div>
              </div>
            </div>
          </div>

          {/* Type system */}
          <div className="space-y-1.5 border-t border-paper/10 pt-2">
            <div className="text-xs text-paper/35 uppercase tracking-widest font-light">Typography</div>
            <div className="space-y-1 text-xs text-paper/70">
              <div><span className="font-serif">Fraunces</span> Display</div>
              <div><span className="font-sans">Inter</span> Body</div>
            </div>
          </div>

          {/* Applications hint */}
          <div className="text-xs text-paper/40 italic">+ Business card · Packaging · Signage</div>
        </div>
      )}
    </div>
  );
}

// ========== WEBSITE MOCKUP ==========
function WebsiteMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full flex flex-col bg-onyx/30 overflow-hidden">
      {/* Navigation */}
      <div className="h-7 border-b px-3 flex items-center justify-between" style={{ borderColor: isBefore ? "#666" : "#ffffff10" }}>
        {isBefore ? (
          <>
            <div className="text-xs font-black text-yellow-600 tracking-widest">MAISON CAFE</div>
            <div className="flex gap-2 text-xs text-gray-600 font-bold">
              <div>HOME</div>
              <div>MENU</div>
            </div>
          </>
        ) : (
          <>
            <div className="text-xs font-serif text-champagne/60">Maison Brew</div>
            <div className="flex gap-4 text-xs text-paper/40">
              <div className="hover:text-champagne/70 transition">Reserve</div>
              <div className="hover:text-champagne/70 transition">Heritage</div>
              <div className="hover:text-champagne/70 transition">Contact</div>
            </div>
          </>
        )}
      </div>

      {/* Hero section */}
      <div className="flex-1 flex flex-col justify-between px-3 py-2 gap-2">
        {isBefore ? (
          // BEFORE: Ugly generic website
          <div className="space-y-2 flex-1 flex flex-col justify-center">
            <div className="text-xs font-black text-yellow-600">WELCOME!!!</div>
            <div className="space-y-1">
              <div className="h-2 w-full bg-gray-700 rounded"></div>
              <div className="h-2 w-3/4 bg-gray-700 rounded"></div>
              <div className="h-2 w-2/3 bg-gray-700 rounded"></div>
            </div>
            <div className="h-6 w-32 bg-red-600 rounded text-xs text-white flex items-center justify-center font-black">
              BUY NOW!!!
            </div>
          </div>
        ) : (
          // AFTER: Premium luxury website
          <div className="space-y-2 flex-1 flex flex-col justify-center">
            <div className="space-y-2">
              <div className="text-xs text-champagne/40 uppercase tracking-[0.15em] font-light">Specialty Coffee</div>
              <div className="space-y-1">
                <div className="text-sm font-serif text-paper/95 leading-snug">Moments of refined craft</div>
                <div className="h-px w-6 bg-champagne/50"></div>
              </div>
              <div className="text-xs text-paper/60 leading-relaxed">Carefully selected origins. Premium roasting. Presented with intention.</div>
            </div>
            <div className="flex gap-2 pt-2">
              <div className="h-5 px-3 bg-champagne/30 rounded-full text-xs text-paper/90 flex items-center font-medium">
                Reserve your spot →
              </div>
            </div>
          </div>
        )}

        {/* Featured offerings */}
        {!isBefore && (
          <div className="space-y-2 border-t border-paper/10 pt-2">
            <div className="text-xs text-paper/35 uppercase tracking-widest font-light">Collections</div>
            <div className="grid grid-cols-3 gap-1.5">
              <div className="h-6 rounded-sm bg-gradient-to-br from-champagne/25 to-champagne/5 flex items-center justify-center text-xs text-paper/50 font-light">
                Heritage
              </div>
              <div className="h-6 rounded-sm bg-gradient-to-br from-amber-900/15 to-transparent flex items-center justify-center text-xs text-paper/50 font-light">
                Reserve
              </div>
              <div className="h-6 rounded-sm bg-gradient-to-br from-paper/10 to-transparent flex items-center justify-center text-xs text-paper/50 font-light">
                Single Origin
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ========== TRUST & CREDIBILITY MOCKUP ==========
function TrustMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full p-4 flex flex-col gap-3 justify-between bg-onyx/30">
      {isBefore ? (
        // BEFORE: Weak untrustworthy business
        <div className="space-y-3">
          <div className="text-xs text-gray-500 uppercase">About</div>
          <div className="space-y-1.5">
            <div className="h-2 w-full bg-gray-700 rounded"></div>
            <div className="h-2 w-4/5 bg-gray-700 rounded"></div>
            <div className="h-2 w-3/5 bg-gray-700 rounded"></div>
          </div>
          <div className="text-xs text-gray-500 italic">No testimonials</div>
          <div className="text-xs text-gray-500">Contact unclear</div>
        </div>
      ) : (
        // AFTER: Premium credible business with strong trust signals
        <div className="space-y-2">
          {/* Client testimonial */}
          <div className="space-y-1.5">
            <div className="text-xs text-champagne/50 uppercase tracking-widest font-light">Testimonial</div>
            <div className="rounded-sm bg-gradient-to-br from-paper/8 to-paper/3 p-2.5 border border-champagne/20 shadow-sm">
              <div className="text-xs text-paper/75 italic leading-snug mb-1.5">
                "Exceptional attention to craft and detail."
              </div>
              <div className="text-xs text-paper/45">— Premium Client, Dubai</div>
            </div>
          </div>

          {/* Credentials & trust signals */}
          <div className="space-y-1.5 border-t border-paper/10 pt-2">
            <div className="text-xs text-champagne/50 uppercase tracking-widest font-light">Credentials</div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-champagne/70 font-semibold">✓</span>
                <span className="text-paper/65">8+ years heritage</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-champagne/70 font-semibold">✓</span>
                <span className="text-paper/65">600+ satisfied patrons</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-champagne/70 font-semibold">✓</span>
                <span className="text-paper/65">Premium certification</span>
              </div>
            </div>
          </div>

          {/* Contact info professional */}
          <div className="border-t border-paper/10 pt-2">
            <div className="text-xs text-paper/50">
              <div className="text-champagne/50 text-xs uppercase tracking-widest font-light mb-1">Contact</div>
              <div className="text-paper/60">+971 4 XXXX XXXX</div>
              <div className="text-paper/60">hello@maisonbrew.ae</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ========== SALES MATERIALS MOCKUP ==========
function SalesMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full p-4 flex flex-col gap-3 justify-between bg-onyx/30">
      {isBefore ? (
        // BEFORE: Amateur document
        <div className="space-y-2">
          <div className="text-xs text-gray-600 font-black tracking-wider">proposal_final_v3.docx</div>
          <div className="space-y-1.5">
            <div className="h-2 w-full bg-gray-700 rounded"></div>
            <div className="h-2 w-4/5 bg-gray-700 rounded"></div>
            <div className="h-2 w-3/5 bg-gray-700 rounded"></div>
            <div className="h-2 w-2/5 bg-gray-700 rounded"></div>
          </div>
          <div className="text-xs text-gray-500">Times New Roman</div>
          <div className="text-xs text-gray-500">1-inch margins</div>
        </div>
      ) : (
        // AFTER: Premium consulting-grade pitch deck
        <div className="space-y-2">
          <div className="text-xs text-champagne/50 uppercase tracking-widest font-light">Presentation Deck</div>

          {/* Premium slide previews */}
          <div className="space-y-1.5">
            {/* Title slide */}
            <div className="h-10 rounded-sm bg-gradient-to-br from-champagne/40 via-champagne/25 to-amber-900/20 flex flex-col items-start justify-center px-3 border-l-2 border-champagne/50 shadow-sm">
              <div className="text-xs text-paper/90 font-serif font-semibold">Maison Brew</div>
              <div className="text-[9px] text-paper/50">Business Proposal</div>
            </div>

            {/* Content slide */}
            <div className="h-8 rounded-sm bg-gradient-to-br from-paper/12 to-paper/4 flex flex-col justify-center px-3 border-l border-paper/20">
              <div className="text-xs text-paper/70 font-serif">Our Heritage & Vision</div>
            </div>

            {/* Value slide */}
            <div className="h-8 rounded-sm bg-gradient-to-br from-champagne/25 to-champagne/8 flex flex-col justify-center px-3 border-l border-champagne/30">
              <div className="text-xs text-paper/70">Premium Value Proposition</div>
            </div>

            {/* CTA slide */}
            <div className="h-8 rounded-sm bg-gradient-to-br from-paper/8 via-paper/4 to-transparent flex flex-col justify-center px-3 border-l border-paper/15">
              <div className="text-xs text-paper/60 font-light">Next Steps & Partnership</div>
            </div>
          </div>

          <div className="text-xs text-paper/40 italic pt-1">12 slides · premium typeface · refined hierarchy</div>
        </div>
      )}
    </div>
  );
}

// ========== CAMPAIGN CREATIVE MOCKUP ==========
function CampaignMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full p-4 flex flex-col justify-between gap-3 bg-onyx/30">
      {isBefore ? (
        // BEFORE: Cheap forgettable ad
        <div className="space-y-2 flex-1 flex flex-col justify-center">
          <div className="h-14 bg-gradient-to-r from-purple-600 via-pink-500 to-red-600 rounded flex items-center justify-center text-xs text-white font-black tracking-widest">
            MEGA SALE!!!
          </div>
          <div className="space-y-1">
            <div className="text-xs text-gray-600 font-bold uppercase">50% OFF NOW</div>
            <div className="text-xs text-gray-500">Act immediately!!!</div>
          </div>
        </div>
      ) : (
        // AFTER: Premium luxury campaign creative
        <div className="space-y-2 flex-1 flex flex-col justify-center">
          {/* Visual campaign area */}
          <div className="h-14 bg-gradient-to-br from-champagne/35 via-amber-900/20 to-onyx/40 rounded-sm flex flex-col items-center justify-center relative overflow-hidden shadow-sm">
            {/* Subtle accent elements */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-champagne/50 to-transparent opacity-60"></div>

            <div className="text-xs font-serif text-paper/80">Savor the Craft</div>
            <div className="text-[9px] text-paper/45 mt-0.5 font-light">Heritage meets innovation</div>
          </div>

          {/* Campaign messaging */}
          <div className="space-y-1.5">
            <div className="text-xs font-serif text-paper/85 leading-snug">
              Premium Experiences
            </div>
            <div className="text-xs text-paper/65 leading-relaxed font-light">
              Thoughtfully curated. Exceptionally crafted.
            </div>
          </div>
        </div>
      )}

      {/* CTA Button */}
      <div className={isBefore
        ? "h-6 bg-gray-700 rounded text-xs text-gray-600 flex items-center justify-center font-black tracking-wider"
        : "h-6 bg-gradient-to-r from-champagne/40 to-champagne/20 rounded-full text-xs flex items-center justify-center text-paper/90 font-medium hover:from-champagne/50"
      }>
        {isBefore ? "BUY NOW" : "Discover →"}
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
  const { isTouch, mounted } = useTouchDevice();

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [tappedCard, setTappedCard] = useState<string | null>(null);

  const handleCardClick = (cardId: string, e?: React.MouseEvent) => {
    // Prevent any event bubbling
    if (e) {
      e.stopPropagation();
    }

    // On mobile/touch devices, toggle the tapped state
    if (isTouch) {
      setTappedCard(prev => prev === cardId ? null : cardId);
    }
  };

  return (
    <section id="work" className="relative bg-onyx py-24 sm:py-32 lg:py-36">
      <Container size="wide">
        <SectionHeader
          index="04"
          eyebrow={dict.eyebrow}
          title={dict.title}
          sub={mounted && isTouch ? dict.subtitleTouch : dict.subtitle}
        />

        <Reveal y={14} className="mt-10 sm:mt-14">
          <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
            {dict.scenarios.map((scenario, i) => {
              const id = scenarioIds[i];
              const MockupComponent = mockupComponents[id];
              const isHovered = hoveredCard === id;
              const isTapped = tappedCard === id;
              // On mobile (isTouch), use tap state; on desktop, use hover state
              const isRevealed = isTouch ? isTapped : isHovered;

              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.7,
                    ease: [0.22, 0.61, 0.36, 1]
                  }}
                  onHoverStart={() => {
                    if (!isTouch) setHoveredCard(id);
                  }}
                  onHoverEnd={() => {
                    if (!isTouch) setHoveredCard(null);
                  }}
                  onClick={(e) => handleCardClick(id, e as React.MouseEvent)}
                  className={`group ${isTouch ? "cursor-pointer" : ""}`}
                >
                  {/* Card container */}
                  <div className="relative rounded-[24px] border-2 border-paper/25 bg-gradient-to-br from-onyx to-onyx/50 p-1 transition-all duration-500 hover:border-champagne/40 hover:shadow-[0_0_30px_rgba(194,165,123,0.15)]">
                    {/* Mockup area */}
                    <div className="relative h-80 overflow-hidden rounded-[20px] bg-onyx/80">
                      {/* BEFORE STATE */}
                      <motion.div
                        initial={{ opacity: 1, x: 0 }}
                        animate={
                          isRevealed
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
                          isRevealed
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
                          opacity: isRevealed ? 0 : 1
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-4 left-4 z-30 text-xs text-paper/60"
                      >
                        Before
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: isRevealed ? 1 : 0
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
                          opacity: isRevealed ? 1 : 0
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
                          {scenario.label}
                        </h3>
                        <motion.span
                          animate={{ opacity: isRevealed ? 1 : 0.4 }}
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
                        {scenario.description}
                      </motion.p>

                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isRevealed ? "100%" : 0 }}
                        transition={{ duration: 0.5 }}
                        className="h-0.5 bg-gradient-to-r from-champagne to-champagne/0 mt-4"
                      ></motion.div>
                    </div>
                  </div>

                  {/* Outer glow */}
                  <motion.div
                    animate={
                      isRevealed
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

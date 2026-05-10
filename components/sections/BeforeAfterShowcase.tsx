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
// Fictional: Al Noor Cafe → Premium Luxury Cafe Brand
function BrandingMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full flex flex-col p-5 gap-6 justify-between">
      {isBefore ? (
        // BEFORE: Al Noor Cafe — ugly weak branding
        <div className="space-y-4">
          {/* Ugly Logo */}
          <div className="space-y-1.5">
            <div className="text-xs text-gray-500 uppercase">Logo</div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-yellow-500 rounded flex items-center justify-center text-xs font-bold text-gray-700">
                AN
              </div>
              <div className="text-sm font-sans text-gray-600 tracking-[0.1em]">AL NOOR</div>
            </div>
          </div>

          {/* Bad Colors */}
          <div className="space-y-1.5">
            <div className="text-xs text-gray-500 uppercase">Colors</div>
            <div className="flex gap-2">
              <div className="h-6 w-6 bg-yellow-500 rounded-sm"></div>
              <div className="h-6 w-6 bg-red-600 rounded-sm"></div>
              <div className="h-6 w-6 bg-blue-600 rounded-sm"></div>
            </div>
          </div>

          {/* Weak Typography */}
          <div className="space-y-1.5">
            <div className="text-xs text-gray-500 uppercase">Typography</div>
            <div className="space-y-1">
              <div className="text-xs text-gray-600 font-sans">Heading: Arial Bold</div>
              <div className="text-xs text-gray-500">Body: Times New Roman</div>
            </div>
          </div>
        </div>
      ) : (
        // AFTER: Al Noor Cafe → Premium Luxury Cafe Identity
        <div className="space-y-4">
          {/* Premium Logo System */}
          <div className="space-y-2">
            <div className="text-xs text-paper/40 uppercase tracking-wider">Logo Mark</div>
            <div className="flex items-center gap-3">
              {/* Geometric coffee cup mark */}
              <div className="h-8 w-8 rounded-sm bg-gradient-to-br from-champagne to-champagne/70 flex items-center justify-center">
                <div className="text-[10px] text-ink font-serif">☕</div>
              </div>
              <div className="text-xs font-medium text-paper tracking-[0.15em] leading-tight">
                AL NOOR<br />
                <span className="text-paper/50 font-normal text-[10px]">Café</span>
              </div>
            </div>
          </div>

          {/* Refined Color Palette */}
          <div className="space-y-2">
            <div className="text-xs text-paper/40 uppercase tracking-wider">Palette</div>
            <div className="space-y-1">
              <div className="flex gap-2 items-center">
                <div className="h-4 w-6 rounded-sm bg-champagne"></div>
                <div className="text-xs text-paper/60">Gold Primary</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="h-4 w-6 rounded-sm bg-paper/20"></div>
                <div className="text-xs text-paper/60">Cream Accent</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="h-4 w-6 rounded-sm bg-ink/80"></div>
                <div className="text-xs text-paper/60">Deep Secondary</div>
              </div>
            </div>
          </div>

          {/* Premium Typography */}
          <div className="space-y-2 pt-2 border-t border-paper/10">
            <div className="text-xs text-paper/40 uppercase tracking-wider">Typography</div>
            <div className="space-y-1.5">
              <div className="text-xs font-serif text-paper leading-tight">
                Headlines
              </div>
              <div className="text-xs text-paper/50">Fraunces · Serif</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ========== SOCIAL MEDIA MOCKUP ==========
// Fictional: Messy cafe Instagram → Premium curated feed
function SocialMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full p-4 flex flex-col gap-3">
      {isBefore ? (
        // BEFORE: Chaotic cafe Instagram
        <div className="space-y-2">
          {/* Header */}
          <div className="flex items-center gap-2 pb-2 border-b border-gray-600">
            <div className="h-6 w-6 rounded-full bg-yellow-500"></div>
            <div className="text-xs text-gray-600">alnoor_cafe</div>
          </div>

          {/* Chaotic feed */}
          <div className="space-y-1.5">
            <div className="h-12 bg-blue-500 rounded-sm"></div>
            <div className="h-12 bg-red-600 rounded-sm"></div>
            <div className="h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-sm"></div>
          </div>
          <div className="text-xs text-gray-500 italic">Random, no theme...</div>
        </div>
      ) : (
        // AFTER: Premium luxury cafe feed
        <div className="space-y-2">
          {/* Profile header */}
          <div className="flex items-center justify-between pb-3 border-b border-paper/10">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-champagne to-champagne/60"></div>
              <div className="flex flex-col gap-0.5">
                <div className="text-xs text-paper/80 font-medium">AL NOOR CAFÉ</div>
                <div className="text-xs text-paper/40">Dubai • Coffee & Culture</div>
              </div>
            </div>
          </div>

          {/* Curated grid */}
          <div className="grid grid-cols-2 gap-2 flex-1">
            {/* Post 1: Latte art */}
            <div className="aspect-square rounded-sm bg-gradient-to-br from-amber-600/60 to-amber-900/40 p-2 flex flex-col justify-between border-l-2 border-champagne/30">
              <div className="text-xs text-paper/60">Espresso</div>
              <div className="text-[10px] text-paper/40">Heritage</div>
            </div>

            {/* Post 2: Interior */}
            <div className="aspect-square rounded-sm bg-gradient-to-br from-champagne/50 to-champagne/20 p-2 flex items-center justify-center">
              <div className="text-xs text-paper/50">Space</div>
            </div>

            {/* Post 3: Close-up */}
            <div className="aspect-square rounded-sm bg-gradient-to-br from-amber-700/50 to-amber-900/30 p-2 flex items-end">
              <div className="text-xs text-paper/60">Details</div>
            </div>

            {/* Post 4: Community */}
            <div className="aspect-square rounded-sm bg-gradient-to-br from-champagne/40 to-paper/10 p-2 flex items-center">
              <div className="text-xs text-paper/50">Stories</div>
            </div>
          </div>

          {/* Engagement */}
          <div className="text-xs text-paper/40 pt-1">♥ 1,247 · 89 comments</div>
        </div>
      )}
    </div>
  );
}

// ========== WEBSITE MOCKUP ==========
// Fictional: Old cafe website → Premium modern café site
function WebsiteMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full flex flex-col bg-onyx/50">
      {/* Header */}
      <div className="h-8 border-b px-3 flex items-center justify-between" style={{ borderColor: isBefore ? "#555" : "#ffffff1a" }}>
        {isBefore ? (
          <>
            <div className="text-xs font-bold text-yellow-600">AL NOOR CAFE</div>
            <div className="flex gap-1 text-xs text-gray-600">
              <div>HOME</div>
              <div>MENU</div>
            </div>
          </>
        ) : (
          <>
            <div className="text-xs font-medium text-champagne/70 tracking-widest">AL NOOR</div>
            <div className="flex gap-4 text-xs text-paper/50">
              <div>Coffee</div>
              <div>Reserve</div>
              <div>About</div>
            </div>
          </>
        )}
      </div>

      {/* Hero section */}
      <div className="flex-1 flex flex-col justify-center px-4 py-3 gap-3">
        {isBefore ? (
          // BEFORE: Outdated, cluttered
          <div className="space-y-2">
            <div className="text-sm font-bold text-yellow-600">Welcome to Al Noor!</div>
            <div className="space-y-1">
              <div className="h-2 w-full bg-gray-700 rounded"></div>
              <div className="h-2 w-4/5 bg-gray-700 rounded"></div>
            </div>
            <div className="h-5 w-24 bg-red-600 rounded text-xs text-white flex items-center justify-center">
              CLICK HERE
            </div>
          </div>
        ) : (
          // AFTER: Modern premium luxury site
          <div className="space-y-3">
            <div className="text-xs text-champagne/50 uppercase tracking-widest">Specialty Coffee</div>
            <div className="space-y-1.5">
              <div className="text-sm font-serif text-paper/90">Crafted moments</div>
              <div className="h-1 w-8 bg-champagne/40"></div>
              <div className="text-xs text-paper/60">Heritage roasts served</div>
              <div className="text-xs text-paper/60">in curated spaces.</div>
            </div>
            <div className="flex gap-2 pt-1">
              <div className="h-5 px-3 bg-champagne/25 rounded-full text-xs text-paper flex items-center">
                Reserve →
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Featured section */}
      {!isBefore && (
        <div className="px-3 pb-3 space-y-2 border-t border-paper/10">
          <div className="text-xs text-paper/40 uppercase tracking-wider">Selection</div>
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

// ========== ADS CREATIVE MOCKUP ==========
// Fictional: Cheap generic ad → Premium luxury campaign
function AdsMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full p-4 flex flex-col justify-between gap-3">
      {isBefore ? (
        // BEFORE: Cheap low-effort ad
        <div className="space-y-2">
          <div className="h-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded flex items-center justify-center text-xs text-white font-bold">
            BUY NOW!!!
          </div>
          <div className="space-y-1">
            <div className="text-xs text-gray-600 font-bold">MEGA SALE 50% OFF</div>
            <div className="text-xs text-gray-500">LIMITED TIME OFFER ENDS TODAY!!!</div>
          </div>
        </div>
      ) : (
        // AFTER: Premium luxury campaign concept
        <div className="space-y-3">
          {/* Visual area */}
          <div className="h-16 bg-gradient-to-br from-champagne/40 via-champagne/20 to-amber-900/20 rounded-sm flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xs text-paper/50 font-serif">☕</div>
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-1.5">
            <div className="text-xs font-serif text-paper leading-snug">
              Afternoon Ritual
            </div>
            <div className="text-xs text-paper/70 leading-[1.4]">
              Discover our single-origin selection.
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className={isBefore ? "h-6 bg-gray-700 rounded text-xs text-gray-600 flex items-center justify-center font-bold" : "h-6 bg-champagne/25 rounded-full text-xs flex items-center justify-center text-paper font-medium"}>
        {isBefore ? "CLICK FAST!" : "Learn More →"}
      </div>
    </div>
  );
}

// ========== AI AUTOMATION MOCKUP ==========
// Fictional: Manual cafe inquiry chaos → Elegant automated system
function AutomationMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full p-4 flex flex-col gap-4">
      {isBefore ? (
        // BEFORE: Chaotic manual workflow
        <div className="space-y-3">
          <div className="text-xs text-gray-500 uppercase">Before</div>
          <div className="space-y-2">
            {/* Phone inquiry */}
            <div className="flex items-center gap-2 text-xs">
              <div className="h-6 w-6 bg-gray-600 rounded-full flex items-center justify-center">📱</div>
              <div className="flex-1 h-2 bg-gray-700 rounded"></div>
              <span className="text-gray-500">unanswered</span>
            </div>

            {/* Email pile */}
            <div className="flex items-center gap-2 text-xs">
              <div className="h-6 w-6 bg-gray-600 rounded-full flex items-center justify-center">📧</div>
              <div className="flex-1 h-2 bg-gray-700 rounded"></div>
              <span className="text-gray-500">inbox</span>
            </div>

            {/* Manual notes */}
            <div className="flex items-center gap-2 text-xs">
              <div className="h-6 w-6 bg-gray-600 rounded-full flex items-center justify-center">📝</div>
              <div className="flex-1 h-2 bg-gray-700 rounded"></div>
              <span className="text-gray-500">scattered</span>
            </div>
          </div>
          <div className="text-xs text-gray-500 italic">Leads getting lost...</div>
        </div>
      ) : (
        // AFTER: Elegant automation flow
        <div className="space-y-2">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-paper/10">
            <div className="text-xs text-champagne/70 uppercase tracking-wider">System</div>
            <div className="h-1 w-6 bg-paper/10 rounded-full"></div>
          </div>

          {/* Workflow */}
          <div className="space-y-2 py-1">
            {/* Inquiry comes in */}
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-champagne/60"></div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-champagne/40 to-transparent"></div>
              <div className="text-xs text-paper/40">Receive</div>
            </div>

            {/* AI processes */}
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-champagne/50"></div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-champagne/30 to-transparent"></div>
              <div className="text-xs text-paper/40">Process</div>
            </div>

            {/* Response sent */}
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-champagne/60"></div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-champagne/40 to-transparent"></div>
              <div className="text-xs text-paper/40">Reply</div>
            </div>

            {/* Logged */}
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-champagne/45"></div>
              <div className="text-xs text-paper/40">Tracked</div>
            </div>
          </div>

          {/* Status */}
          <div className="pt-2 border-t border-paper/10">
            <div className="text-xs text-champagne/60">↻ Always on</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ========== TRUST & CREDIBILITY MOCKUP ==========
// Fictional: Weak trust signals → Credible premium business
function TrustMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full p-4 flex flex-col gap-3">
      {isBefore ? (
        // BEFORE: Weak, untrustworthy presentation
        <div className="space-y-3">
          <div className="text-xs text-gray-500">Business</div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-gray-700 rounded"></div>
            <div className="h-2 w-4/5 bg-gray-700 rounded"></div>
          </div>
          <div className="text-xs text-gray-500 italic">No testimonials</div>
          <div className="text-xs text-gray-500">Contact: unclear</div>
        </div>
      ) : (
        // AFTER: Credible premium business
        <div className="space-y-2">
          <div className="text-xs text-champagne/70 uppercase tracking-wider">Trusted</div>

          {/* Testimonial */}
          <div className="rounded-sm bg-onyx/50 p-3 border-l-2 border-champagne/40">
            <div className="text-xs text-paper/70 mb-2 italic">
              "Professional, attentive, delivered on time."
            </div>
            <div className="text-xs text-paper/50">— Client testimonial</div>
          </div>

          {/* Trust signals */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-champagne/60">✓</span>
              <span className="text-paper/60">7 years in business</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-champagne/60">✓</span>
              <span className="text-paper/60">50+ projects delivered</span>
            </div>
          </div>

          {/* Clear contact */}
          <div className="pt-2 border-t border-paper/10">
            <div className="text-xs text-paper/50">📞 +971-4-... · hello@</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ========== SALES MATERIALS MOCKUP ==========
// Fictional: Weak Word doc → Premium pitch deck
function SalesMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full p-4 flex flex-col gap-3">
      {isBefore ? (
        // BEFORE: Weak amateur materials
        <div className="space-y-2">
          <div className="text-xs text-gray-600 font-bold">company_profile.docx</div>
          <div className="space-y-1.5">
            <div className="h-2 w-full bg-gray-700 rounded"></div>
            <div className="h-2 w-4/5 bg-gray-700 rounded"></div>
            <div className="h-2 w-3/5 bg-gray-700 rounded"></div>
          </div>
          <div className="text-xs text-gray-500">Default font</div>
          <div className="text-xs text-gray-500">Margins: uneven</div>
        </div>
      ) : (
        // AFTER: Premium pitch deck
        <div className="space-y-2">
          <div className="text-xs text-champagne/70 uppercase tracking-wider">Pitch Deck</div>

          {/* Slide previews */}
          <div className="space-y-1.5">
            {/* Cover */}
            <div className="h-8 rounded-sm bg-gradient-to-br from-champagne/50 to-champagne/20 flex items-center px-2">
              <div className="text-xs text-paper/70 font-serif">Our Story</div>
            </div>

            {/* Content slide */}
            <div className="h-8 rounded-sm bg-gradient-to-br from-paper/15 to-paper/5 flex items-center px-2">
              <div className="text-xs text-paper/60">What We Do</div>
            </div>

            {/* CTA slide */}
            <div className="h-8 rounded-sm bg-gradient-to-br from-champagne/30 to-champagne/10 flex items-center px-2">
              <div className="text-xs text-paper/60">Let's Talk</div>
            </div>
          </div>

          <div className="text-xs text-paper/40 pt-1">8 slides · Premium design</div>
        </div>
      )}
    </div>
  );
}

// ========== CAMPAIGN CREATIVE MOCKUP ==========
// Fictional: Forgettable weak ad → Premium campaign
function CampaignMockup({ isBefore }: { isBefore: boolean }) {
  return (
    <div className="h-full w-full p-4 flex flex-col justify-between gap-3">
      {isBefore ? (
        // BEFORE: Forgettable weak ad
        <div className="space-y-2">
          <div className="h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded flex items-center justify-center text-xs text-white font-bold">
            BIG SALE!
          </div>
          <div className="space-y-1">
            <div className="text-xs text-gray-600">50% off everything</div>
            <div className="text-xs text-gray-500">Ends soon...</div>
          </div>
        </div>
      ) : (
        // AFTER: Premium campaign concept
        <div className="space-y-3">
          {/* Campaign visual */}
          <div className="h-16 bg-gradient-to-br from-champagne/45 via-champagne/25 to-amber-900/15 rounded-sm flex flex-col items-center justify-center relative">
            <div className="text-xs text-paper/50 font-serif">Premium Campaign</div>
            <div className="text-[10px] text-paper/30 mt-1">Crafted for impact</div>
          </div>

          {/* Campaign copy */}
          <div className="space-y-1">
            <div className="text-xs font-serif text-paper leading-snug">
              Elevate Your Standard
            </div>
            <div className="text-xs text-paper/70">
              Thoughtfully designed for your brand story.
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
          className="text-xs text-paper/40 mt-6 sm:mt-8 text-center"
        >
          Real transformation examples
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

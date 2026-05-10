import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { Services } from "@/components/sections/Services";
import { WhyManageFlow } from "@/components/sections/WhyManageFlow";
import { CreativeShowcase } from "@/components/sections/CreativeShowcase";
import { Process } from "@/components/sections/Process";
import { StrategyConcierce } from "@/components/sections/StrategyConcierce";
import { WebsiteAudit } from "@/components/sections/WebsiteAudit";
import { PricingConfigurator } from "@/components/sections/PricingConfigurator";
import { BeforeAfterShowcase } from "@/components/sections/BeforeAfterShowcase";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        {/* 1. Hero */}
        <Hero />
        {/* 2. What we do */}
        <Services />
        {/* 3. Why ManageFlow */}
        <WhyManageFlow />
        {/* 4. Concept Transformations */}
        <BeforeAfterShowcase />
        {/* 5. Strategy Concierge — lead capture */}
        <StrategyConcierce />
        {/* 6. Website Audit — engagement tool */}
        <WebsiteAudit />
        {/* 7. Pricing Configurator — lead qualification */}
        <PricingConfigurator />
        {/* 8. Trust + Process — earned credibility */}
        <TrustSignals />
        <Process />
        {/* 9. FAQ — remove final objections */}
        <FAQ />
        {/* 10. Contact — single conversion endpoint */}
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

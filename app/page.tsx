import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { Services } from "@/components/sections/Services";
import { WhyManageFlow } from "@/components/sections/WhyManageFlow";
import { Process } from "@/components/sections/Process";
import { StrategyConcierce } from "@/components/sections/StrategyConcierce";
import { WebsiteAudit } from "@/components/sections/WebsiteAudit";
import { PricingConfigurator } from "@/components/sections/PricingConfigurator";
import { BeforeAfterShowcase } from "@/components/sections/BeforeAfterShowcase";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

function SectionSep() {
  return <div className="section-sep" aria-hidden />;
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <SectionSep />
        <Services />
        <SectionSep />
        <WhyManageFlow />
        <SectionSep />
        <BeforeAfterShowcase />
        <SectionSep />
        <StrategyConcierce />
        <SectionSep />
        <WebsiteAudit />
        <SectionSep />
        <PricingConfigurator />
        <SectionSep />
        <TrustSignals />
        <SectionSep />
        <Process />
        <SectionSep />
        <FAQ />
        <SectionSep />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { Services } from "@/components/sections/Services";
import { CreativeShowcase } from "@/components/sections/CreativeShowcase";
import { Process } from "@/components/sections/Process";
import { ChatBot } from "@/components/sections/ChatBot";
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
        {/* 3. Our work */}
        <CreativeShowcase />
        {/* 4. Trust + Process — earned credibility */}
        <TrustSignals />
        <Process />
        {/* 5. ChatBot — intelligent assistant */}
        <ChatBot />
        {/* 6. FAQ — remove final objections */}
        <FAQ />
        {/* 7. Contact — single conversion endpoint */}
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

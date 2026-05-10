"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { buildWhatsAppLink } from "@/lib/constants";

interface PricingRange {
  min: number;
  max: number;
}

const servicePrices: Record<string, PricingRange> = {
  website: { min: 6500, max: 15000 },
  branding: { min: 3500, max: 8000 },
  social: { min: 2500, max: 6000 },
  ads: { min: 3000, max: 8000 },
  content: { min: 2000, max: 5000 },
  ai: { min: 5000, max: 12000 }
};

export function PricingConfigurator() {
  const { t, lang } = useLang();
  const dict = t.pricingConfigurator;

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [bilingual, setBilingual] = useState(false);
  const [webPages, setWebPages] = useState("5");
  const [socialPosts, setSocialPosts] = useState("8");
  const [urgency, setUrgency] = useState("standard");

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const estimatedPrice = useMemo(() => {
    if (selectedServices.length === 0) {
      return { min: 0, max: 0 };
    }

    let min = 0;
    let max = 0;

    selectedServices.forEach((service) => {
      const serviceKey = service.toLowerCase().replace(/\s+/g, "");
      const price = servicePrices[serviceKey];
      if (price) {
        min += price.min;
        max += price.max;
      }
    });

    // Apply bilingual multiplier (30% increase)
    if (bilingual) {
      min = Math.round(min * 1.3);
      max = Math.round(max * 1.3);
    }

    // Apply urgency multiplier (20% increase for rush)
    if (urgency === "rush") {
      min = Math.round(min * 1.2);
      max = Math.round(max * 1.2);
    }

    return { min, max };
  }, [selectedServices, bilingual, urgency]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(lang === "ar" ? "ar-AE" : "en-US", {
      style: "currency",
      currency: "AED",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="relative bg-ink py-24 sm:py-32 lg:py-36">
      <Container size="wide">
        <SectionHeader
          index="07"
          eyebrow={dict.eyebrow}
          title={dict.title}
          sub={dict.subtitle}
        />

        <Reveal y={14} className="mt-12 sm:mt-14">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8 rounded-[24px] border border-paper/12 bg-onyx/30 p-6 sm:p-8"
            >
              {/* Services Selection */}
              <div>
                <h3 className="text-[14px] font-medium text-paper mb-4">
                  Select Services
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {dict.services.map((service: any, i: number) => {
                    const serviceKey = service.label
                      .toLowerCase()
                      .replace(/\s+/g, "");
                    const isSelected = selectedServices.includes(
                      service.label
                    );

                    return (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleService(service.label)}
                        className={`rounded-[12px] border-2 p-4 text-left transition-all ${
                          isSelected
                            ? "border-champagne/60 bg-champagne/10"
                            : "border-paper/20 bg-onyx/50 hover:border-paper/40"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`mt-1 h-5 w-5 rounded border-2 transition-all ${
                              isSelected
                                ? "border-champagne bg-champagne"
                                : "border-paper/40"
                            }`}
                          >
                            {isSelected && (
                              <Check
                                size={16}
                                className="text-ink"
                                strokeWidth={3}
                              />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-[13px] font-medium text-paper">
                              {service.label}
                            </p>
                            <p className="text-[12px] text-paper/60">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Additional Options */}
              <div className="space-y-6 border-t border-paper/10 pt-6">
                {/* Bilingual Toggle */}
                <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div
                      className={`h-5 w-5 rounded border-2 transition-all ${
                        bilingual
                          ? "border-champagne bg-champagne"
                          : "border-paper/40"
                      }`}
                    >
                      {bilingual && (
                        <Check
                          size={16}
                          className="text-ink"
                          strokeWidth={3}
                        />
                      )}
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-paper">
                        {dict.options.bilingual}
                      </p>
                      <p className="text-[12px] text-paper/60">
                        +30% to estimate
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={bilingual}
                      onChange={(e) => setBilingual(e.target.checked)}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Web Pages */}
                <div>
                  <p className="text-[13px] font-medium text-paper mb-2">
                    {dict.options.webPages}
                  </p>
                  <div className="flex gap-2">
                    {["3", "5", "10+"].map((option) => (
                      <button
                        key={option}
                        onClick={() => setWebPages(option)}
                        className={`rounded-[8px] px-4 py-2 text-[12px] transition-all ${
                          webPages === option
                            ? "bg-champagne/20 text-paper"
                            : "border border-paper/20 text-paper/60 hover:border-paper/40"
                        }`}
                      >
                        {option} pages
                      </button>
                    ))}
                  </div>
                </div>

                {/* Social Posts */}
                <div>
                  <p className="text-[13px] font-medium text-paper mb-2">
                    {dict.options.socialPosts}
                  </p>
                  <div className="flex gap-2">
                    {["4", "8", "12+"].map((option) => (
                      <button
                        key={option}
                        onClick={() => setSocialPosts(option)}
                        className={`rounded-[8px] px-4 py-2 text-[12px] transition-all ${
                          socialPosts === option
                            ? "bg-champagne/20 text-paper"
                            : "border border-paper/20 text-paper/60 hover:border-paper/40"
                        }`}
                      >
                        {option} posts
                      </button>
                    ))}
                  </div>
                </div>

                {/* Urgency */}
                <div>
                  <p className="text-[13px] font-medium text-paper mb-2">
                    {dict.options.urgency}
                  </p>
                  <div className="flex gap-2">
                    {[
                      { value: "standard", label: "Standard (4-8 weeks)" },
                      { value: "rush", label: "Rush (+20%)" }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setUrgency(option.value)}
                        className={`rounded-[8px] px-4 py-2 text-[12px] transition-all ${
                          urgency === option.value
                            ? "bg-champagne/20 text-paper"
                            : "border border-paper/20 text-paper/60 hover:border-paper/40"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price Display */}
              <div className="border-t border-paper/10 pt-6">
                {selectedServices.length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                    className="space-y-3"
                  >
                    <p className="text-[13px] text-paper/60">
                      {dict.estimatedInvestment}
                    </p>
                    <motion.p
                      key={`${estimatedPrice.min}-${estimatedPrice.max}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-[32px] font-medium text-champagne"
                    >
                      {formatPrice(estimatedPrice.min)} –{" "}
                      {formatPrice(estimatedPrice.max)}
                    </motion.p>
                    <p className="text-[11px] text-paper/40">
                      {dict.disclaimer}
                    </p>
                  </motion.div>
                ) : (
                  <p className="text-[13px] text-paper/60">
                    Select services to see pricing estimate
                  </p>
                )}
              </div>

              {/* CTA */}
              {selectedServices.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-4 border-t border-paper/10"
                >
                  <a
                    href={buildWhatsAppLink(
                      `I'm interested in: ${selectedServices.join(", ")}. Estimated budget: ${formatPrice(estimatedPrice.min)} - ${formatPrice(estimatedPrice.max)}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full rounded-full px-6 py-3.5 text-sm font-medium bg-paper text-ink hover:bg-bone transition-colors duration-500"
                  >
                    {dict.cta}
                  </a>
                </motion.div>
              )}
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

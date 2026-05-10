"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/constants";

interface AuditScore {
  label: string;
  score: number;
}

export function WebsiteAudit() {
  const { t, lang } = useLang();
  const dict = t.websiteAudit;

  const [url, setUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [results, setResults] = useState<AuditScore[] | null>(null);

  // Deterministic pseudo-random score based on URL hash
  const generateScores = (website: string) => {
    const hash = website
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const baseScores = [6, 7, 6, 7, 6];
    return baseScores.map((base, i) => {
      const variation = ((hash * (i + 1)) % 3) - 1; // -1, 0, or 1
      return Math.min(10, Math.max(5, base + variation));
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setScanning(true);
    setCurrentStep(0);
    setResults(null);

    // Animate through scanning steps
    for (let i = 0; i < dict.scanningSteps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setCurrentStep(i + 1);
    }

    // Generate results
    const scores = generateScores(url);
    const auditResults = dict.scoreLabels.map((label: string, i: number) => ({
      label,
      score: scores[i]
    }));

    setResults(auditResults);
    setScanning(false);
  };

  const getScoreColor = (score: number) => {
    if (score >= 7) return "text-green-500";
    if (score >= 5) return "text-yellow-500";
    return "text-red-500";
  };

  const getRecommendations = () => {
    if (!results) return [];
    const weakest = results
      .sort((a, b) => a.score - b.score)
      .slice(0, 2)
      .map((r) => r.label);

    const recommendationMap: Record<string, string> = {
      "Brand Presence": "Strengthen brand visibility with consistent messaging across pages.",
      "User Experience":
        "Improve navigation clarity and reduce friction in user flows.",
      "Conversion Readiness":
        "Add clear CTAs and optimize conversion paths (contact, booking, purchase).",
      "Trust & Credibility":
        "Display trust signals, testimonials, certifications, and social proof.",
      "Content Clarity":
        "Simplify copy, use stronger headlines, and clarify value propositions."
    };

    return weakest
      .map((label) => recommendationMap[label] || "Enhance overall performance")
      .slice(0, 2);
  };

  const recommendations = getRecommendations();
  const whatsappLink = buildWhatsAppLink(
    `I'd like a human review of my website: ${url}`
  );

  return (
    <section id="audit" className="relative bg-onyx py-24 sm:py-32 lg:py-36">
      <Container size="wide">
        <SectionHeader
          index="06"
          eyebrow={dict.eyebrow}
          title={dict.title}
          sub={dict.subtitle}
        />

        <Reveal y={14} className="mt-12 sm:mt-14">
          <div className="mx-auto max-w-2xl">
            {!scanning && !results && (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 rounded-[24px] border border-paper/12 bg-ink p-6 sm:p-8"
              >
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder={dict.inputPlaceholder}
                  className="rounded-[8px] border border-paper/20 bg-onyx px-4 py-3 text-[13px] text-paper placeholder:text-paper/40 outline-none transition-colors focus:border-champagne/55"
                  required
                />
                <button
                  type="submit"
                  className="rounded-[8px] bg-champagne/20 px-4 py-3 text-[13px] text-paper transition-colors hover:bg-champagne/30"
                >
                  {dict.submitButton}
                </button>
              </motion.form>
            )}

            {scanning && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6 rounded-[24px] border border-paper/12 bg-ink p-6 sm:p-8"
              >
                <p className="text-[13px] text-paper/60">
                  Analyzing {url}...
                </p>
                <div className="space-y-4">
                  {dict.scanningSteps.map((step: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: currentStep > i ? 1 : 0.4,
                        x: 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3"
                    >
                      <div className="relative h-2 w-32 rounded-full bg-paper/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width: currentStep > i ? "100%" : "0%"
                          }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-champagne/40 to-champagne"
                        />
                      </div>
                      <span className="flex-1 text-[12px] text-paper/60">
                        {step}
                      </span>
                      {currentStep > i && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                        >
                          <Check size={16} className="text-green-500" strokeWidth={3} />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {results && !scanning && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8 rounded-[24px] border border-paper/12 bg-ink p-6 sm:p-8"
              >
                <div>
                  <h3 className="text-[16px] font-medium text-paper">
                    {dict.resultTitle}
                  </h3>
                  <p className="mt-1 text-[12px] text-paper/40">{url}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {results.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        delay: i * 0.15,
                        duration: 0.5,
                        ease: [0.22, 0.61, 0.36, 1]
                      }}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="space-y-2 rounded-[12px] bg-gradient-to-br from-onyx/70 to-onyx/40 border border-paper/10 p-4 text-center transition-all hover:border-champagne/30 hover:shadow-[0_0_15px_rgba(194,165,123,0.1)]"
                    >
                      <div className={`text-2xl font-medium ${getScoreColor(
                          item.score
                        )} transition-colors`}>
                        {item.score}
                        <span className="text-xs text-paper/40">/10</span>
                      </div>
                      <p className="text-[11px] text-paper/60 leading-tight">
                        {item.label}
                      </p>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: i * 0.15 + 0.3, duration: 0.6 }}
                        className="h-0.5 bg-gradient-to-r from-champagne/0 via-champagne/40 to-champagne/0 mt-2"
                      ></motion.div>
                    </motion.div>
                  ))}
                </div>

                {recommendations.length > 0 && (
                  <div className="rounded-[12px] bg-onyx/50 p-4">
                    <p className="text-[12px] font-medium text-paper">
                      {dict.recommendations}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {recommendations.map((rec, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-paper/70 leading-relaxed"
                        >
                          • {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-2 pt-4 border-t border-paper/10">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-[8px] bg-champagne/20 px-4 py-3 text-[13px] text-paper transition-colors hover:bg-champagne/30"
                  >
                    {dict.cta}
                    <ArrowRight size={14} strokeWidth={2} />
                  </a>
                  <button
                    onClick={() => {
                      setResults(null);
                      setUrl("");
                    }}
                    className="w-full rounded-[8px] border border-paper/20 px-4 py-3 text-[13px] text-paper transition-colors hover:border-paper/40"
                  >
                    Audit another site
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

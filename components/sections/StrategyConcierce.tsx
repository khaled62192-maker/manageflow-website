"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ChevronRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { buildWhatsAppLink } from "@/lib/constants";

type Step = "welcome" | "business" | "goal" | "bilingual" | "timeline" | "summary";

interface UserResponses {
  business: string;
  goal: string;
  bilingual: string;
  timeline: string;
}

export function StrategyConcierce() {
  const { t, lang } = useLang();
  const dict = t.strategyConcierce;

  const [currentStep, setCurrentStep] = useState<Step>("welcome");
  const [responses, setResponses] = useState<UserResponses>({
    business: "",
    goal: "",
    bilingual: "",
    timeline: ""
  });

  const handleQuickOption = (option: string) => {
    if (option === "Book a Call") {
      setCurrentStep("summary");
    } else if (option === "Pricing") {
      // Could route to pricing section, for now go to summary
      setCurrentStep("summary");
    } else {
      // Infer intent from selection and move to next question
      setCurrentStep("business");
    }
  };

  const handleBusinessInput = (value: string) => {
    setResponses({ ...responses, business: value });
  };

  const proceedFromBusiness = () => {
    if (responses.business.trim()) {
      setCurrentStep("goal");
    }
  };

  const handleGoalSelect = (goal: string) => {
    setResponses({ ...responses, goal });
    setCurrentStep("bilingual");
  };

  const handleBilingualSelect = (bilingual: string) => {
    setResponses({ ...responses, bilingual });
    setCurrentStep("timeline");
  };

  const handleTimelineSelect = (timeline: string) => {
    setResponses({ ...responses, timeline });
    setCurrentStep("summary");
  };

  const summaryText = `${responses.business} | Goal: ${responses.goal} | ${responses.bilingual} | Timeline: ${responses.timeline}`;
  const whatsappLink = buildWhatsAppLink(
    `I'm interested in discussing my project: ${summaryText}`
  );

  return (
    <section className="relative bg-ink py-24 sm:py-32 lg:py-36">
      <Container size="wide">
        <SectionHeader
          index="05"
          eyebrow={dict.eyebrow}
          title={dict.title}
          sub={dict.subtitle}
        />

        <Reveal y={14} className="mt-12 sm:mt-14">
          <div className="mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-6 rounded-[24px] border border-paper/12 bg-ink p-6 sm:p-8"
            >
              <AnimatePresence mode="wait">
                {currentStep === "welcome" && (
                  <motion.div
                    key="welcome"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <p className="text-[14px] leading-relaxed text-paper">
                        {dict.greeting}
                      </p>
                      <p className="text-[12px] text-paper/40">
                        ~2 minutes to personalized insights
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {dict.quickOptions.map((option, i) => (
                        <motion.button
                          key={option}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          onClick={() => handleQuickOption(option)}
                          className="rounded-[8px] border border-paper/20 bg-onyx/50 px-4 py-3 text-[13px] text-paper transition-all hover:border-champagne/55 hover:bg-onyx/80 hover:scale-105"
                        >
                          {option}
                        </motion.button>
                      ))}
                    </div>

                    {/* Suggestion chips */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="pt-4 border-t border-paper/10 space-y-3"
                    >
                      <p className="text-[11px] text-paper/40">
                        Or ask anything like:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "How much does a website cost?",
                          "What's included in branding?",
                          "How do you build trust signals?",
                          "What sales materials do you create?",
                          "When can you start?"
                        ].map((chip, i) => (
                          <motion.button
                            key={chip}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.35 + i * 0.06 }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(244, 239, 229, 0.15)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                              setResponses({ ...responses, business: chip });
                              setCurrentStep("goal");
                            }}
                            className="rounded-full px-3 py-1.5 text-[11px] bg-paper/8 text-paper/70 border border-paper/10 transition-all hover:text-paper hover:border-paper/20"
                          >
                            {chip}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {currentStep === "business" && (
                  <motion.div
                    key="business"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <p className="text-[13px] text-paper/80">
                      {dict.questions.business}
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={responses.business}
                        onChange={(e) => handleBusinessInput(e.target.value)}
                        placeholder="E.g., E-commerce, Beauty, Real Estate..."
                        className="flex-1 rounded-[8px] border border-paper/20 bg-onyx px-4 py-2.5 text-[13px] text-paper placeholder:text-paper/40 outline-none transition-colors focus:border-champagne/55"
                        onKeyDown={(e) => e.key === "Enter" && proceedFromBusiness()}
                      />
                      <button
                        onClick={proceedFromBusiness}
                        disabled={!responses.business.trim()}
                        className="rounded-[8px] bg-champagne/20 p-2.5 text-paper/70 transition-colors hover:bg-champagne/30 disabled:opacity-50"
                      >
                        <Send size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {currentStep === "goal" && (
                  <motion.div
                    key="goal"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <p className="text-[13px] text-paper/80">
                      {dict.questions.goal}
                    </p>
                    <div className="space-y-2">
                      {dict.followUpOptions.goal.map((goal) => (
                        <button
                          key={goal}
                          onClick={() => handleGoalSelect(goal)}
                          className="w-full rounded-[8px] border border-paper/20 bg-onyx/50 px-4 py-3 text-left text-[13px] text-paper transition-all hover:border-champagne/55 hover:bg-onyx/80"
                        >
                          {goal}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {currentStep === "bilingual" && (
                  <motion.div
                    key="bilingual"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <p className="text-[13px] text-paper/80">
                      {dict.questions.bilingual}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {["Yes", "No"].map((option) => (
                        <button
                          key={option}
                          onClick={() => handleBilingualSelect(option)}
                          className="rounded-[8px] border border-paper/20 bg-onyx/50 px-4 py-3 text-[13px] text-paper transition-all hover:border-champagne/55 hover:bg-onyx/80"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {currentStep === "timeline" && (
                  <motion.div
                    key="timeline"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <p className="text-[13px] text-paper/80">
                      {dict.questions.timeline}
                    </p>
                    <div className="space-y-2">
                      {dict.followUpOptions.timeline.map((timeline) => (
                        <button
                          key={timeline}
                          onClick={() => handleTimelineSelect(timeline)}
                          className="w-full rounded-[8px] border border-paper/20 bg-onyx/50 px-4 py-3 text-left text-[13px] text-paper transition-all hover:border-champagne/55 hover:bg-onyx/80"
                        >
                          {timeline}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {currentStep === "summary" && (
                  <motion.div
                    key="summary"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="space-y-3 rounded-[12px] bg-onyx/50 p-4">
                      <p className="text-[12px] text-paper/60">
                        {dict.summary}
                      </p>
                      <p className="text-[13px] leading-relaxed text-paper">
                        <span className="font-medium">{responses.business}</span>
                        {" • "}
                        {responses.goal}
                        {" • "}
                        {responses.bilingual}
                        {" • "}
                        {responses.timeline}
                      </p>
                    </div>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-[8px] bg-champagne/20 px-4 py-3 text-[13px] text-paper transition-colors hover:bg-champagne/30"
                    >
                      {dict.ctaPrimary}
                      <ChevronRight size={14} strokeWidth={2} />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

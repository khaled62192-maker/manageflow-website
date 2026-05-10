"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function WebsiteCritique() {
  const { t } = useLang();
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/.netlify/functions/critique", {
        method: "POST",
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error(t.critique.errorMessage);
      }

      const data = await response.json();
      setResult(data.critique);
    } catch (err) {
      setError(t.critique.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="critique" className="relative bg-ink py-24 sm:py-32 lg:py-36">
      <Container size="wide">
        <SectionHeader
          index="05"
          eyebrow={t.critique.eyebrow}
          title={t.critique.title}
          sub={t.critique.sub}
        />

        <Reveal y={14} className="mt-12 sm:mt-14">
          <div className="mx-auto max-w-2xl">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 sm:flex-row sm:gap-3"
            >
              <input
                type="url"
                placeholder={t.critique.inputPlaceholder}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 rounded-[12px] border border-paper/20 bg-onyx px-5 py-3 text-[14px] text-paper placeholder:text-paper/40 outline-none transition-colors focus:border-champagne/55 focus:bg-onyx/80"
                required
              />
              <Button
                type="submit"
                disabled={loading}
                className="whitespace-nowrap"
              >
                {loading ? t.critique.loadingLabel : t.critique.submitLabel}
              </Button>
            </form>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 rounded-[12px] border border-red-500/30 bg-red-500/10 p-4 text-[14px] text-red-400"
              >
                {error}
              </motion.div>
            )}

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 rounded-[16px] border border-paper/10 bg-onyx p-6 sm:p-8"
              >
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.2em] text-champagne/85">
                  Your critique
                </h3>
                <div className="mt-5 text-[14px] leading-relaxed text-paper/75 whitespace-pre-wrap">
                  {result}
                </div>
                <button
                  onClick={() => {
                    setUrl("");
                    setResult(null);
                  }}
                  className="mt-6 text-[12px] uppercase tracking-[0.18em] text-paper/60 transition-colors hover:text-paper"
                >
                  Analyze another site
                </button>
              </motion.div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

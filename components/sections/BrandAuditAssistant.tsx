"use client";

import { useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { buildEmailLink, buildWhatsAppLink } from "@/lib/constants";
import type { Dictionary } from "@/i18n/dictionary";
import { cn } from "@/lib/utils";

/**
 * BrandAuditAssistant — a guided 5-question flow that produces a clean
 * brief and pushes the lead to WhatsApp. Not an AI chatbot — a quiet,
 * considered intake. Bilingual EN · AR with proper RTL.
 */

type Answers = {
  businessType: number; // index into options, -1 = unset
  link: string;
  goal: number;
  services: number[]; // indexes into options
  contact: number;
};

const INITIAL: Answers = {
  businessType: -1,
  link: "",
  goal: -1,
  services: [],
  contact: -1,
};

const TOTAL_STEPS = 5;

export function BrandAuditAssistant() {
  const { t, lang, dir } = useLang();
  const prefersReduced = useReducedMotion();

  const [step, setStep] = useState(0); // 0..TOTAL_STEPS (TOTAL_STEPS = summary)
  const [answers, setAnswers] = useState<Answers>(INITIAL);

  const questions = t.audit.questions;
  const isSummary = step >= TOTAL_STEPS;
  const progress = Math.min(step, TOTAL_STEPS) / TOTAL_STEPS;

  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const ArrowBack = dir === "rtl" ? ArrowRight : ArrowLeft;

  /* ── helpers ───────────────────────────────────────────────────────── */

  function pickSingle(key: keyof Answers, idx: number) {
    setAnswers((prev) => ({ ...prev, [key]: idx }));
    // gentle auto-advance for single-choice
    setTimeout(
      () => setStep((s) => Math.min(s + 1, TOTAL_STEPS)),
      prefersReduced ? 0 : 220,
    );
  }

  function toggleMulti(idx: number) {
    setAnswers((prev) => {
      const has = prev.services.includes(idx);
      return {
        ...prev,
        services: has
          ? prev.services.filter((i) => i !== idx)
          : [...prev.services, idx],
      };
    });
  }

  function next() {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }
  function back() {
    setStep((s) => Math.max(0, s - 1));
  }
  function restart() {
    setAnswers(INITIAL);
    setStep(0);
  }

  /* ── continue-button enabled state per question ────────────────────── */
  const canContinue = useMemo(() => {
    if (isSummary) return true;
    const q = questions[step];
    if (!q) return false;
    if (q.type === "single") {
      return (answers as never)[q.key] !== -1;
    }
    if (q.type === "multi") {
      return (answers as never as Record<string, number[]>)[q.key].length > 0;
    }
    if (q.type === "text") {
      return true; // text is optional / skippable
    }
    return false;
  }, [isSummary, questions, step, answers]);

  /* ── build summary message (channel-agnostic) ────────────────────────── */
  function buildMessage(): string {
    const q = questions;
    const labels = t.audit.labels;
    const dash = "—";

    const businessType =
      answers.businessType >= 0
        ? optionsOf(q[0])[answers.businessType]
        : dash;
    const link = answers.link.trim() || dash;
    const goal =
      answers.goal >= 0
        ? optionsOf(q[2])[answers.goal]
        : dash;
    const services =
      answers.services.length > 0
        ? answers.services.map((i) => optionsOf(q[3])[i]).join(" · ")
        : dash;
    const contact =
      answers.contact >= 0
        ? optionsOf(q[4])[answers.contact]
        : dash;

    return [
      t.audit.handoffIntro,
      "",
      `${labels.businessType}: ${businessType}`,
      `${labels.link}: ${link}`,
      `${labels.goal}: ${goal}`,
      `${labels.services}: ${services}`,
      `${labels.contact}: ${contact}`,
    ].join("\n");
  }

  /* ── dynamic handoff: respect the contact channel the user picked ───── */
  // Question 4 options: 0 = WhatsApp, 1 = Email, 2 = Phone
  const handoff = useMemo(() => {
    const message = buildMessage();
    const cont = t.audit.continue;
    const choice = answers.contact;

    if (choice === 1) {
      // Email — open mail client, no WhatsApp
      return {
        label: cont.email,
        href: buildEmailLink(t.audit.handoffSubject, message),
        external: false,
      };
    }
    if (choice === 2) {
      // Phone — submit inquiry via email, flagged for phone callback
      const phoneMessage = `[${t.audit.phoneCallbackNote}]\n\n${message}`;
      return {
        label: cont.phone,
        href: buildEmailLink(t.audit.handoffSubject, phoneMessage),
        external: false,
      };
    }
    // WhatsApp (explicit choice 0) or unset → fallback to WhatsApp handoff
    return {
      label: choice === 0 ? cont.whatsapp : cont.fallback,
      href: buildWhatsAppLink(message),
      external: true,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers, t]);

  /* ── synthesis: which service to lead with ─────────────────────────── */
  // Goal options (in order): Launch · Restaurant opening · Rebrand · Website · Campaign · Visual content
  // Service options (in order): Website · Identity · Campaign Creative · Launch Kit
  const synthesis = useMemo(() => {
    if (answers.services.length > 0) {
      return optionsOf(questions[3])[answers.services[0]];
    }
    const map: Record<number, number> = {
      0: 3, // launch new business     → Launch Kit
      1: 3, // open restaurant         → Launch Kit
      2: 1, // rebrand                 → Identity
      3: 0, // build website           → Website
      4: 3, // campaign / seasonal     → Launch Kit
      5: 2, // strengthen visual content → Campaign Creative
    };
    if (answers.goal in map) {
      return optionsOf(questions[3])[map[answers.goal]];
    }
    return null;
  }, [answers, questions]);

  /* ── render ─────────────────────────────────────────────────────────── */

  const stepLabel = lang === "ar"
    ? `${toAr(String(Math.min(step, TOTAL_STEPS - 1) + 1).padStart(2, "0"))} ${t.audit.of} ${toAr(String(TOTAL_STEPS).padStart(2, "0"))}`
    : `${String(Math.min(step, TOTAL_STEPS - 1) + 1).padStart(2, "0")} / ${String(TOTAL_STEPS).padStart(2, "0")}`;

  return (
    <section
      id="audit"
      className="relative border-y border-paper/[0.06] bg-onyx py-24 sm:py-32 lg:py-36"
    >
      <Container size="wide">
        <SectionHeader
          index="05"
          eyebrow={t.audit.eyebrow}
          title={t.audit.title}
          sub={t.audit.sub}
          className="lg:max-w-3xl"
        />

        <Reveal y={28} delay={0.05}>
          <div className="mt-12 sm:mt-16">
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[24px] border border-paper/10 bg-ink/80 p-6 backdrop-blur-sm sm:rounded-[28px] sm:p-10 lg:p-12">
              {/* Top bar — eyebrow + step counter */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.22em] text-champagne/85">
                  {t.audit.eyebrow}
                </span>
                <span className="font-mono text-[11px] tracking-[0.18em] text-paper/45">
                  {isSummary ? "—" : stepLabel}
                </span>
              </div>

              {/* Progress hairline */}
              <div className="relative mt-5 h-px w-full bg-paper/10">
                <motion.div
                  initial={false}
                  animate={{ width: `${progress * 100}%` }}
                  transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                  className="absolute inset-y-0 start-0 bg-champagne"
                />
              </div>

              {/* Animated content */}
              <div className="relative mt-9 min-h-[280px] sm:mt-10 sm:min-h-[320px]">
                <AnimatePresence mode="wait" initial={false}>
                  {isSummary ? (
                    <motion.div
                      key="summary"
                      initial={prefersReduced ? false : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={prefersReduced ? undefined : { opacity: 0, y: -14 }}
                      transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
                    >
                      <SummaryView
                        answers={answers}
                        questions={questions}
                        labels={t.audit.labels}
                        title={t.audit.summaryTitle}
                        sub={t.audit.summarySub}
                        synthesisLead={t.audit.synthesisLead}
                        synthesis={synthesis}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`q-${step}`}
                      initial={prefersReduced ? false : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={prefersReduced ? undefined : { opacity: 0, y: -14 }}
                      transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                    >
                      <QuestionView
                        question={questions[step]}
                        answers={answers}
                        onPickSingle={(idx) =>
                          pickSingle(
                            questions[step].key as keyof Answers,
                            idx,
                          )
                        }
                        onToggleMulti={(idx) => toggleMulti(idx)}
                        onTextChange={(v) =>
                          setAnswers((p) => ({ ...p, link: v }))
                        }
                        onSkip={next}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer controls */}
              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-paper/10 pt-6">
                {!isSummary ? (
                  <>
                    <button
                      type="button"
                      onClick={back}
                      disabled={step === 0}
                      className={cn(
                        "inline-flex items-center gap-2 text-[13px] tracking-wide transition-colors",
                        step === 0
                          ? "cursor-not-allowed text-paper/25"
                          : "text-paper/65 hover:text-paper",
                      )}
                    >
                      <ArrowBack size={14} strokeWidth={1.5} />
                      {t.audit.back}
                    </button>

                    <Button
                      onClick={next}
                      type="button"
                      withArrow
                      className={cn(
                        !canContinue &&
                          "pointer-events-none opacity-40",
                      )}
                    >
                      {t.audit.next}
                    </Button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={restart}
                      className="link-underline text-[13px] tracking-wide text-paper/65 hover:text-paper"
                    >
                      {t.audit.restart}
                    </button>
                    <a
                      href={handoff.href}
                      target={handoff.external ? "_blank" : undefined}
                      rel={handoff.external ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-paper px-6 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors duration-500 hover:bg-bone"
                    >
                      <span className="relative z-10">{handoff.label}</span>
                      <Arrow
                        size={16}
                        strokeWidth={1.6}
                        className="transition-transform duration-500 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                      />
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ── Question view ───────────────────────────────────────────────────── */

type Question = Dictionary["audit"]["questions"][number];

/** Safely return the options for a question (empty for text type). */
function optionsOf(q: Question): readonly string[] {
  return "options" in q ? q.options : [];
}

function QuestionView({
  question,
  answers,
  onPickSingle,
  onToggleMulti,
  onTextChange,
  onSkip,
}: {
  question: Question;
  answers: Answers;
  onPickSingle: (idx: number) => void;
  onToggleMulti: (idx: number) => void;
  onTextChange: (v: string) => void;
  onSkip: () => void;
}) {
  return (
    <div>
      <h3 className="font-display text-balance text-[26px] leading-[1.15] tracking-[-0.015em] text-paper sm:text-[32px] lg:text-[36px]">
        {question.question}
      </h3>
      {question.helper && (
        <p className="mt-3 text-[14px] leading-relaxed text-paper/55 sm:text-[15px]">
          {question.helper}
        </p>
      )}

      <div className="mt-7 sm:mt-8">
        {question.type === "single" && "options" in question && (
          <div className="flex flex-wrap gap-2.5">
            {question.options.map((opt, i) => {
              const active =
                (answers as never as Record<string, number>)[question.key] === i;
              return (
                <Chip
                  key={opt}
                  label={opt}
                  active={active}
                  onClick={() => onPickSingle(i)}
                />
              );
            })}
          </div>
        )}

        {question.type === "multi" && "options" in question && (
          <div className="flex flex-wrap gap-2.5">
            {question.options.map((opt, i) => {
              const active = answers.services.includes(i);
              return (
                <Chip
                  key={opt}
                  label={opt}
                  active={active}
                  onClick={() => onToggleMulti(i)}
                  showCheck={active}
                />
              );
            })}
          </div>
        )}

        {question.type === "text" && (
          <div className="space-y-4">
            <input
              type="text"
              value={answers.link}
              onChange={(e) => onTextChange(e.target.value)}
              placeholder={"placeholder" in question ? question.placeholder : ""}
              autoComplete="off"
              spellCheck={false}
              className="w-full border-b border-paper/15 bg-transparent pb-3 text-[16px] text-paper outline-none transition-colors duration-500 placeholder:text-paper/30 focus:border-paper sm:text-[18px]"
            />
            {"skipLabel" in question && (
              <button
                type="button"
                onClick={() => {
                  onTextChange("");
                  onSkip();
                }}
                className="link-underline text-[13px] tracking-wide text-paper/55 hover:text-paper"
              >
                {question.skipLabel}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Chip ────────────────────────────────────────────────────────────── */

function Chip({
  label,
  active,
  onClick,
  showCheck,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  showCheck?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[13px] leading-none tracking-wide transition-colors duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] sm:text-[13.5px]",
        active
          ? "border-paper bg-paper text-ink"
          : "border-paper/15 text-paper/80 hover:border-paper/35 hover:text-paper",
      )}
    >
      {showCheck && active && (
        <Check size={13} strokeWidth={2} aria-hidden />
      )}
      <span>{label}</span>
    </button>
  );
}

/* ── Summary view ────────────────────────────────────────────────────── */

function SummaryView({
  answers,
  questions,
  labels,
  title,
  sub,
  synthesisLead,
  synthesis,
}: {
  answers: Answers;
  questions: readonly Question[];
  labels: {
    businessType: string;
    link: string;
    goal: string;
    services: string;
    contact: string;
  };
  title: string;
  sub: string;
  synthesisLead: string;
  synthesis: string | null;
}) {
  const businessType =
    answers.businessType >= 0
      ? optionsOf(questions[0])[answers.businessType]
      : "—";
  const goal =
    answers.goal >= 0 ? optionsOf(questions[2])[answers.goal] : "—";
  const services =
    answers.services.length > 0
      ? answers.services.map((i) => optionsOf(questions[3])[i]).join(" · ")
      : "—";
  const contact =
    answers.contact >= 0 ? optionsOf(questions[4])[answers.contact] : "—";
  const link = answers.link.trim() || "—";

  const rows: Array<{ label: string; value: string }> = [
    { label: labels.businessType, value: businessType },
    { label: labels.link, value: link },
    { label: labels.goal, value: goal },
    { label: labels.services, value: services },
    { label: labels.contact, value: contact },
  ];

  return (
    <div>
      <h3 className="font-display text-[26px] leading-[1.15] tracking-[-0.015em] text-paper sm:text-[32px] lg:text-[36px]">
        {title}
      </h3>
      <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-paper/55 sm:text-[15px]">
        {sub}
      </p>

      <dl className="mt-8 grid gap-px overflow-hidden rounded-[14px] bg-paper/[0.06]">
        {rows.map((r) => (
          <div
            key={r.label}
            className="grid grid-cols-[120px_1fr] items-baseline gap-4 bg-ink/60 px-5 py-4 sm:grid-cols-[160px_1fr]"
          >
            <dt className="text-[10.5px] uppercase tracking-[0.18em] text-paper/45">
              {r.label}
            </dt>
            <dd className="text-pretty text-[14.5px] text-paper">{r.value}</dd>
          </div>
        ))}
      </dl>

      {synthesis && (
        <div className="mt-7 flex items-start gap-3 rounded-[14px] border border-champagne/30 bg-champagne/[0.06] p-5">
          <span
            aria-hidden
            className="mt-[7px] inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-champagne"
          />
          <p className="text-[14px] leading-relaxed text-paper/85">
            {synthesisLead} <span className="font-medium text-paper">{synthesis}</span>.
          </p>
        </div>
      )}
    </div>
  );
}

/* ── helpers ─────────────────────────────────────────────────────────── */

const AR_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
function toAr(s: string) {
  return s.replace(/\d/g, (d) => AR_DIGITS[Number(d)]);
}

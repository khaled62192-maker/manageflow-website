"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

type MockupKind =
  | "hospitality"
  | "restaurant"
  | "beauty"
  | "realestate"
  | "identity"
  | "campaign";

export function CreativeShowcase() {
  const { t } = useLang();

  return (
    <section
      id="work"
      className="relative border-y border-paper/[0.06] bg-onyx py-24 sm:py-32 lg:py-36"
    >
      <Container size="wide">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            index="03"
            eyebrow={t.showcase.eyebrow}
            title={t.showcase.title}
            sub={t.showcase.sub}
            className="lg:max-w-3xl"
          />
        </div>

        <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {t.showcase.items.map((item, i) => (
            <Reveal key={item.title} y={28} delay={i * 0.06}>
              <ConceptTile
                title={item.title}
                sector={item.sector}
                deliverables={item.deliverables as readonly string[]}
                mockup={item.mockup as MockupKind}
              />
            </Reveal>
          ))}
        </div>

        <Reveal y={12}>
          <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-3 sm:mt-14">
            <span className="h-px w-10 bg-champagne/55" aria-hidden />
            <p className="text-center text-[12.5px] leading-relaxed text-paper/55 sm:text-[13px]">
              {t.showcase.note}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ── Tile ────────────────────────────────────────────────────────────── */

function ConceptTile({
  title,
  sector,
  deliverables,
  mockup,
}: {
  title: string;
  sector: string;
  deliverables: readonly string[];
  mockup: MockupKind;
}) {
  const { t } = useLang();
  const prefersReduced = useReducedMotion();

  return (
    <motion.article
      whileHover={prefersReduced ? undefined : { y: -4 }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-paper/10 bg-ink transition-colors duration-500 hover:border-paper/20 sm:rounded-[24px]"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent"
      />

      {/* Mockup stage — fixed aspect for consistent tile heights */}
      <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden p-6 sm:p-8">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(560px 320px at 50% 40%, rgba(194,165,123,0.10), transparent 70%), radial-gradient(700px 400px at 90% 100%, rgba(65,80,95,0.16), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />
        <div className="relative">
          <Mockup kind={mockup} />
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-1 flex-col gap-4 border-t border-paper/10 p-6 sm:p-7">
        <div>
          <span className="text-[10.5px] uppercase tracking-[0.22em] text-champagne/85">
            {t.showcase.tag}
          </span>
          <h3 className="font-display mt-2 text-[22px] leading-[1.15] tracking-[-0.015em] text-paper sm:text-[24px]">
            {title}
          </h3>
          <p className="mt-1.5 text-[12.5px] leading-snug text-paper/60 sm:text-[13px]">
            {sector}
          </p>
        </div>

        <div className="mt-auto border-t border-paper/10 pt-3.5">
          <span className="text-[10px] uppercase tracking-[0.22em] text-paper/45">
            {t.showcase.deliverablesLabel}
          </span>
          <p className="mt-1.5 text-[12.5px] leading-relaxed text-paper/72 sm:text-[13px]">
            {deliverables.map((d, i) => (
              <span key={d}>
                {i > 0 && (
                  <span className="mx-2 text-paper/30" aria-hidden>·</span>
                )}
                {d}
              </span>
            ))}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Mockup dispatch ─────────────────────────────────────────────────── */

function Mockup({ kind }: { kind: MockupKind }) {
  switch (kind) {
    case "hospitality":  return <HospitalityMockup />;
    case "restaurant":   return <RestaurantMockup />;
    case "beauty":       return <BeautyMockup />;
    case "realestate":   return <RealEstateMockup />;
    case "identity":     return <IdentityMockup />;
    case "campaign":     return <CampaignMockup />;
  }
}

/* ── 1. Hospitality — generic key tag ─────────────────────────────── */

function HospitalityMockup() {
  return (
    <div className="relative" style={{ direction: "ltr" }}>
      <div className="relative flex h-[180px] w-[140px] flex-col items-center rounded-[12px] bg-cream pt-7 text-ink shadow-[0_30px_60px_-25px_rgba(0,0,0,0.65)] sm:h-[200px] sm:w-[155px] sm:pt-8">
        <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-[12px] bg-champagne/35" />
        <div className="absolute top-3 left-1/2 h-[10px] w-[10px] -translate-x-1/2 rounded-full bg-ink/85 ring-2 ring-cream" />

        <p className="text-[7.5px] uppercase tracking-[0.42em] text-ink/45">
          — Studio · Hospitality —
        </p>
        <p className="font-display mt-3 text-[28px] leading-none tracking-[-0.02em]">
          Room 14
        </p>
        <div className="my-3 h-px w-9 bg-ink/30" />
        <p className="text-[7.5px] uppercase tracking-[0.36em] text-ink/65">
          Boutique key tag
        </p>
        <p className="absolute inset-x-0 bottom-3 text-center text-[6px] uppercase tracking-[0.32em] text-ink/40">
          ManageFlow · Studio demo
        </p>
      </div>
    </div>
  );
}

/* ── 2. Restaurant — generic prix-fixe layout ─────────────────────── */

function RestaurantMockup() {
  const courses = [
    "Course one",
    "Course two",
    "Course three",
    "Dessert",
  ];
  return (
    <div className="relative" style={{ direction: "ltr" }}>
      <div className="relative h-[210px] w-[160px] bg-bone p-4 text-ink shadow-[0_30px_60px_-25px_rgba(0,0,0,0.65)] sm:h-[230px] sm:w-[180px] sm:p-5">
        <div className="absolute inset-x-3 top-3 h-px bg-ink/15" />
        <div className="absolute inset-x-3 bottom-3 h-px bg-ink/15" />

        <div className="text-center">
          <p className="text-[7px] uppercase tracking-[0.42em] text-ink/45">
            — Studio · Menu System —
          </p>
          <p className="font-display mt-1 text-[20px] leading-none tracking-[-0.02em]">
            Prix Fixe
          </p>
          <div className="mx-auto mt-2 h-px w-9 bg-champagne/70" />
        </div>

        <ul className="mt-4 space-y-2">
          {courses.map((c) => (
            <li key={c} className="flex items-baseline gap-2">
              <span className="font-display text-[10px] italic text-ink/85">
                {c}
              </span>
              <span
                aria-hidden
                className="flex-1 border-b border-dotted border-ink/25"
              />
              <span className="text-[8px] tracking-widest text-ink/55">—</span>
            </li>
          ))}
        </ul>

        <p className="absolute inset-x-0 bottom-5 text-center text-[6px] uppercase tracking-[0.32em] text-ink/40">
          ManageFlow · Launch system
        </p>
      </div>
    </div>
  );
}

/* ── 3. Beauty — generic apothecary bottle ────────────────────────── */

function BeautyMockup() {
  return (
    <div
      className="relative w-[105px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] sm:w-[120px]"
      style={{ direction: "ltr" }}
    >
      <svg viewBox="0 0 100 200" className="w-full">
        <rect x="40" y="6" width="20" height="6" rx="1.5" fill="#C2A57B" opacity="0.85" />
        <path
          d="M 42 12 L 42 22 Q 42 26 38 28 L 32 31 Q 28 33 28 38 L 28 188 Q 28 194 34 194 L 66 194 Q 72 194 72 188 L 72 38 Q 72 33 68 31 L 62 28 Q 58 26 58 22 L 58 12 Z"
          fill="#EAE3D2"
          stroke="rgba(194,165,123,0.55)"
          strokeWidth="0.6"
        />
        <rect
          x="33"
          y="80"
          width="34"
          height="74"
          fill="#FAF6EC"
          stroke="rgba(194,165,123,0.45)"
          strokeWidth="0.5"
        />
        <path
          d="M 38 88 Q 50 84, 62 88"
          fill="none"
          stroke="rgba(194,165,123,0.7)"
          strokeWidth="0.5"
        />
      </svg>
      <div
        className="absolute flex flex-col items-center text-ink"
        style={{ left: "33%", top: "47%", width: "34%", height: "37%" }}
      >
        <p className="mt-1 text-[5px] uppercase tracking-[0.45em] text-ink/45">
          — 30 ML —
        </p>
        <p className="font-display mt-1 text-[12px] leading-none tracking-[-0.01em]">
          Formula 01
        </p>
        <div className="mt-1 h-px w-3 bg-champagne/70" />
        <p className="mt-1 text-[5px] italic text-ink/70">studio demo</p>
        <p className="mt-2 text-[4px] uppercase tracking-[0.3em] text-ink/45">
          ManageFlow
        </p>
      </div>
    </div>
  );
}

/* ── 4. Real Estate — generic property folio ──────────────────────── */

function RealEstateMockup() {
  return (
    <div className="relative" style={{ direction: "ltr" }}>
      <div className="relative h-[200px] w-[170px] bg-bone p-5 text-ink shadow-[0_30px_60px_-25px_rgba(0,0,0,0.65)] sm:h-[220px] sm:w-[185px]">
        <div className="absolute inset-x-3 top-3 h-px bg-ink/15" />

        <div className="flex items-center justify-between">
          <p className="text-[7px] uppercase tracking-[0.36em] text-ink/55">
            Residence 04
          </p>
          <p className="font-mono text-[7px] tracking-[0.18em] text-ink/40">
            04 / 12
          </p>
        </div>

        {/* Building silhouette */}
        <svg
          viewBox="0 0 120 80"
          className="mt-4 h-[64px] w-full"
          aria-hidden
        >
          {/* horizon */}
          <line x1="6" y1="76" x2="114" y2="76" stroke="rgba(14,17,25,0.35)" strokeWidth="0.5" />
          {/* tower */}
          <rect x="50" y="14" width="22" height="62" fill="none" stroke="rgba(14,17,25,0.65)" strokeWidth="0.7" />
          {[18,28,38,48,58,68].map((y) => (
            <g key={y}>
              <rect x="53" y={y} width="4" height="4" fill="none" stroke="rgba(14,17,25,0.5)" strokeWidth="0.4" />
              <rect x="59" y={y} width="4" height="4" fill="none" stroke="rgba(14,17,25,0.5)" strokeWidth="0.4" />
              <rect x="65" y={y} width="4" height="4" fill="none" stroke="rgba(14,17,25,0.5)" strokeWidth="0.4" />
            </g>
          ))}
          {/* lower buildings */}
          <rect x="14" y="40" width="30" height="36" fill="none" stroke="rgba(14,17,25,0.45)" strokeWidth="0.6" />
          <rect x="78" y="32" width="30" height="44" fill="none" stroke="rgba(14,17,25,0.45)" strokeWidth="0.6" />
          {/* champagne accent dot */}
          <circle cx="61" cy="14" r="1.4" fill="#C2A57B" />
        </svg>

        <div className="mt-3 flex items-baseline justify-between text-[8px]">
          <span className="font-display italic text-ink/75">Tower 02</span>
          <span className="text-[7px] uppercase tracking-[0.3em] text-ink/45">
            Penthouse
          </span>
        </div>

        <p className="absolute inset-x-0 bottom-3 text-center text-[6px] uppercase tracking-[0.32em] text-ink/40">
          ManageFlow · Real estate system
        </p>
      </div>
    </div>
  );
}

/* ── 5. Identity Demo — type specimen + colour swatches ───────────── */

function IdentityMockup() {
  return (
    <div className="relative" style={{ direction: "ltr" }}>
      <div className="relative h-[200px] w-[180px] bg-cream p-5 text-ink shadow-[0_30px_60px_-25px_rgba(0,0,0,0.65)] sm:h-[220px] sm:w-[200px]">
        <div className="flex items-center justify-between">
          <p className="text-[7px] uppercase tracking-[0.36em] text-ink/55">
            Type · Colour
          </p>
          <p className="font-mono text-[7px] tracking-[0.18em] text-ink/40">
            Specimen
          </p>
        </div>

        <p className="font-display mt-2 text-[80px] leading-[0.9] tracking-[-0.04em] text-ink sm:text-[92px]">
          Aa
        </p>

        <div className="mt-2 flex items-center gap-1.5">
          <Swatch color="#0A1119" label="Ink" />
          <Swatch color="#C2A57B" label="Champagne" />
          <Swatch color="#FAF6EC" label="Bone" border />
        </div>

        <p className="absolute inset-x-0 bottom-3 text-center text-[6px] uppercase tracking-[0.32em] text-ink/40">
          ManageFlow · Identity system
        </p>
      </div>
    </div>
  );
}

function Swatch({
  color,
  label,
  border,
}: {
  color: string;
  label: string;
  border?: boolean;
}) {
  return (
    <span className="flex flex-col items-center gap-1">
      <span
        className={`h-7 w-7 rounded-full ${border ? "ring-1 ring-ink/15" : ""}`}
        style={{ backgroundColor: color }}
      />
      <span className="text-[5.5px] uppercase tracking-[0.18em] text-ink/45">
        {label}
      </span>
    </span>
  );
}

/* ── 6. Campaign — vertical poster layout ────────────────────────── */

function CampaignMockup() {
  return (
    <div className="relative" style={{ direction: "ltr" }}>
      <div className="relative flex h-[200px] w-[150px] flex-col bg-ink p-4 text-paper shadow-[0_30px_60px_-25px_rgba(0,0,0,0.7)] sm:h-[230px] sm:w-[170px] sm:p-5">
        {/* hairline frame */}
        <div className="absolute inset-3 border border-paper/15" aria-hidden />
        {/* champagne corner marks */}
        <div className="absolute top-3 right-3 h-3 w-3 border-t border-r border-champagne/70" aria-hidden />
        <div className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-champagne/70" aria-hidden />

        <p className="relative text-[7px] uppercase tracking-[0.42em] text-paper/55">
          Campaign 01
        </p>
        <p className="relative font-display mt-5 text-[28px] leading-[0.95] tracking-[-0.02em] text-paper sm:mt-7 sm:text-[34px]">
          Release
        </p>
        <p className="relative mt-2 text-[8px] italic text-paper/55">
          seasonal direction
        </p>

        {/* asset thumbnails — bottom anchor */}
        <div className="relative mt-auto flex gap-1.5">
          <span className="h-6 w-6 border border-paper/20 sm:h-7 sm:w-7" aria-hidden />
          <span className="h-6 w-6 border border-paper/20 sm:h-7 sm:w-7" aria-hidden />
          <span className="h-6 w-6 border border-champagne/55 sm:h-7 sm:w-7" aria-hidden />
        </div>
      </div>
    </div>
  );
}

"use client";

import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "start" | "center";
  className?: string;
  index?: string;
  /**
   * Surface tone the header sits on.
   * Defaults to "dark" since the site is dark-led.
   */
  tone?: "dark" | "light";
};

export function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "start",
  className,
  index,
  tone = "dark",
}: SectionHeaderProps) {
  const onDark = tone === "dark";
  return (
    <header
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {(eyebrow || index) && (
        <Reveal y={12}>
          <div className="flex items-center gap-3">
            {index && (
              <span
                className={cn(
                  "font-mono text-[11px] tracking-[0.2em]",
                  onDark ? "text-paper/45" : "text-ash",
                )}
              >
                {index}
              </span>
            )}
            {index && eyebrow && (
              <span
                className={cn("h-px w-8", onDark ? "bg-paper/15" : "bg-line")}
                aria-hidden
              />
            )}
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          </div>
        </Reveal>
      )}
      <Reveal y={20}>
        <h2
          className={cn(
            "font-display text-balance text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-[clamp(3rem,4.6vw,4.5rem)]",
            onDark ? "text-paper" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal y={16} delay={0.05}>
          <p
            className={cn(
              "max-w-2xl text-pretty text-base leading-relaxed sm:text-[17px]",
              onDark ? "text-paper/60" : "text-ash",
              align === "center" && "mx-auto",
            )}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </header>
  );
}

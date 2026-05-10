"use client";

import { useLang } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /**
   * Surface tone the toggle is sitting on.
   *  - "dark"  (default): paper hairline + paper accent on selection
   *  - "light":             ink hairline + ink fill on selection
   */
  tone?: "dark" | "light";
};

export function LanguageToggle({ className, tone = "dark" }: Props) {
  const { lang, setLang } = useLang();

  const onDark = tone === "dark";

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "relative inline-flex items-center rounded-full p-1 text-[12px] tracking-wide",
        onDark
          ? "border border-paper/15 bg-paper/[0.04] backdrop-blur-sm"
          : "border border-ink/10 bg-bone/70 backdrop-blur",
        className,
      )}
    >
      <ToggleButton
        active={lang === "en"}
        onClick={() => setLang("en")}
        onDark={onDark}
        label="EN"
      />
      <ToggleButton
        active={lang === "ar"}
        onClick={() => setLang("ar")}
        onDark={onDark}
        label="AR"
      />
    </div>
  );
}

function ToggleButton({
  active,
  onClick,
  onDark,
  label,
}: {
  active: boolean;
  onClick: () => void;
  onDark: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "relative z-10 rounded-full px-3 py-1 font-medium transition-colors duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
        active
          ? onDark
            ? "bg-paper text-ink"
            : "bg-ink text-paper"
          : onDark
            ? "text-paper/65 hover:text-paper"
            : "text-ash hover:text-ink",
      )}
    >
      {label}
    </button>
  );
}

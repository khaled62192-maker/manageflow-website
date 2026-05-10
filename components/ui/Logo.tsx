import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  showWordmark?: boolean;
};

/**
 * ManageFlow brand mark — a calm tide.
 * Two soft crests above a hairline horizon: management (the line) +
 * flow (the wave). Renders in currentColor so it inherits the parent
 * text colour wherever it's placed.
 */
export function Logo({ className, showWordmark = true }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 leading-none",
        className,
      )}
    >
      <BrandMark />
      {showWordmark && (
        <span className="font-display text-[19px] font-medium tracking-[-0.012em]">
          ManageFlow
        </span>
      )}
    </span>
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("relative inline-flex h-6 w-6 items-center justify-center", className)}>
      <svg viewBox="0 0 28 28" className="h-full w-full" fill="none" stroke="currentColor">
        <circle cx="14" cy="14" r="12.25" strokeWidth="1.1" opacity="0.85" />
        <path
          d="M5 16.2 Q 9.25 11, 14 16.2 T 23 16.2"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <line x1="6.5" y1="19.4" x2="21.5" y2="19.4" strokeWidth="0.8" opacity="0.45" />
      </svg>
    </span>
  );
}

"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

type Variant = "primary" | "primary-dark" | "ghost" | "outline";

type CommonProps = {
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
  children: React.ReactNode;
};

type AnchorProps = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: () => void;
  type?: never;
};

type ButtonProps = CommonProps & {
  href?: never;
  external?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

type Props = AnchorProps | ButtonProps;

const base =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-medium tracking-wide transition-colors duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] whitespace-nowrap select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-paper text-ink hover:bg-bone btn-shimmer btn-lift",
  "primary-dark":
    "bg-ink text-paper hover:bg-onyx btn-shimmer btn-lift",
  ghost:
    "hover:opacity-70",
  outline:
    "border border-paper/20 text-paper hover:border-champagne/40 bg-transparent btn-outline-glow",
};

export function Button(props: Props) {
  const { variant = "primary", className, withArrow, children } = props;
  const { dir } = useLang();
  const prefersReduced = useReducedMotion();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {withArrow && (
        <motion.span
          className="relative z-10 inline-flex"
          initial={false}
          whileHover={prefersReduced ? undefined : {}}
        >
          <Arrow
            size={16}
            strokeWidth={1.6}
            className="transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
          />
        </motion.span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    const onClick = (props as AnchorProps).onClick;
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className={cn(base, variants[variant], className)}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link
        href={props.href}
        onClick={onClick}
        className={cn(base, variants[variant], className)}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={(props as ButtonProps).type ?? "button"}
      onClick={(props as ButtonProps).onClick}
      disabled={(props as ButtonProps).disabled}
      className={cn(base, variants[variant], className, (props as ButtonProps).disabled && "opacity-50 cursor-not-allowed")}
    >
      {inner}
    </button>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * FloatingWhatsApp — visible across primary scroll, hides itself when the
 * Contact section is in view (no point competing with the dedicated channel
 * card) and respects iOS / Android safe-area insets so it never overlaps
 * the bottom browser chrome on mobile.
 */
export function FloatingWhatsApp() {
  const { t, dir } = useLang();
  const prefersReduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [nearContact, setNearContact] = useState(false);

  // Show after a small scroll
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 320);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Hide once the Contact section enters the viewport — it has its own channels
  useEffect(() => {
    const target = document.getElementById("contact");
    if (!target || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setNearContact(entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const visible = scrolled && !nearContact;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={BUSINESS.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.floatingWhats}
          initial={prefersReduced ? false : { opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          style={{
            // Respect iOS / Android safe-area; never overlap browser chrome
            bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.25rem)",
          }}
          className={cn(
            "group fixed z-40 inline-flex items-center gap-2.5 rounded-full bg-ink px-3 py-2.5 text-paper shadow-[0_18px_48px_-12px_rgba(0,0,0,0.55)] ring-1 ring-paper/15 sm:gap-3 sm:px-4 sm:py-3",
            "transition-colors duration-500 hover:bg-onyx",
            dir === "rtl" ? "left-5 sm:left-6" : "right-5 sm:right-6",
          )}
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink">
            <span className="absolute inset-0 animate-[mf-pulse_2.4s_ease-out_infinite] rounded-full bg-champagne/45" />
            <WhatsAppGlyph />
          </span>
          <span className="hidden pe-1 text-[13px] font-medium tracking-wide sm:inline">
            {t.floatingWhats}
          </span>

          <style>{`
            @keyframes mf-pulse {
              0%   { transform: scale(1);   opacity: 0.55; }
              70%  { transform: scale(1.6); opacity: 0;    }
              100% { transform: scale(1.6); opacity: 0;    }
            }
          `}</style>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

function WhatsAppGlyph() {
  return (
    <svg
      viewBox="0 0 32 32"
      width="18"
      height="18"
      aria-hidden
      fill="currentColor"
    >
      <path d="M16.001 4C9.373 4 4 9.373 4 16c0 2.121.555 4.117 1.527 5.852L4 28l6.323-1.5A11.94 11.94 0 0 0 16 28c6.627 0 12-5.373 12-12S22.628 4 16.001 4Zm0 21.818a9.85 9.85 0 0 1-5.018-1.379l-.36-.213-3.752.89.89-3.65-.235-.376A9.815 9.815 0 0 1 6.182 16c0-5.42 4.4-9.818 9.819-9.818 2.622 0 5.087 1.022 6.943 2.876a9.752 9.752 0 0 1 2.876 6.942c0 5.42-4.4 9.818-9.819 9.818Zm5.395-7.367c-.295-.148-1.747-.864-2.018-.964-.27-.099-.467-.148-.665.149-.197.295-.762.964-.935 1.162-.172.197-.345.222-.64.074-.295-.148-1.246-.46-2.374-1.467-.877-.783-1.469-1.75-1.642-2.045-.172-.295-.018-.456.13-.604.134-.133.295-.345.443-.518.148-.172.197-.295.296-.493.099-.197.05-.37-.025-.518-.074-.148-.665-1.604-.911-2.197-.241-.578-.486-.5-.665-.51l-.567-.01c-.197 0-.518.074-.79.37s-1.038 1.014-1.038 2.47c0 1.456 1.063 2.864 1.21 3.062.148.197 2.094 3.197 5.073 4.484.71.307 1.262.49 1.694.626.711.226 1.358.194 1.87.118.57-.085 1.747-.713 1.994-1.402.246-.69.246-1.281.172-1.402-.074-.123-.27-.197-.567-.345Z"/>
    </svg>
  );
}

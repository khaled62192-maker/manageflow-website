"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 8);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#work", label: t.nav.work },
    { href: "#process", label: t.nav.process },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <motion.header
        initial={prefersReduced ? false : { y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 text-paper transition-colors duration-500",
          scrolled
            ? "border-b border-paper/10 bg-ink/75 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container size="wide">
          <div className="flex h-[64px] items-center justify-between gap-6 sm:h-[72px]">
            <Link
              href="#top"
              aria-label="ManageFlow — home"
              className="shrink-0 text-paper"
            >
              <Logo />
            </Link>

            <nav
              aria-label="Primary"
              className="hidden items-center gap-9 lg:flex"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[13px] tracking-wide text-paper/70 transition-colors duration-300 hover:text-paper"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <LanguageToggle className="hidden sm:inline-flex" tone="dark" />
              <Button
                href="#contact"
                variant="primary"
                className="hidden lg:inline-flex"
                withArrow
              >
                {t.nav.cta}
              </Button>
              <button
                type="button"
                aria-label={t.nav.menu}
                aria-expanded={open}
                onClick={() => setOpen(true)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 bg-paper/[0.03] text-paper transition-colors hover:border-paper/35 hover:bg-paper/[0.06] lg:hidden"
              >
                <Menu size={18} strokeWidth={1.6} />
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-ink text-paper lg:hidden"
          >
            <Container size="wide">
              <div className="flex h-[64px] items-center justify-between sm:h-[72px]">
                <Logo />
                <div className="flex items-center gap-2 sm:gap-3">
                  <LanguageToggle tone="dark" />
                  <button
                    type="button"
                    aria-label={t.nav.close}
                    onClick={() => setOpen(false)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 text-paper"
                  >
                    <X size={18} strokeWidth={1.6} />
                  </button>
                </div>
              </div>
            </Container>

            <Container size="wide">
              <motion.nav
                aria-label="Mobile"
                className="mt-12 flex flex-col gap-1.5"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
                }}
              >
                {links.map((l) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } },
                    }}
                    className="font-display text-4xl leading-tight text-paper sm:text-5xl"
                  >
                    {l.label}
                  </motion.a>
                ))}

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  className="mt-12"
                >
                  <Button href="#contact" withArrow onClick={() => setOpen(false)}>
                    {t.nav.cta}
                  </Button>
                </motion.div>
              </motion.nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

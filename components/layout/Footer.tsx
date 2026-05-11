"use client";

import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { BUSINESS } from "@/lib/constants";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "#services", label: t.nav.services },
    { href: "#work", label: t.nav.work },
    { href: "#process", label: t.nav.process },
    { href: "#contact", label: t.nav.contact },
  ];

  const contacts = [
    { label: "WhatsApp / Call", value: BUSINESS.whatsapp, href: BUSINESS.whatsappLink, external: true },
    { label: t.contact.email, value: BUSINESS.email, href: BUSINESS.emailLink, external: false },
  ];

  return (
    <footer className="relative isolate overflow-hidden bg-ink text-paper">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(800px 400px at 8% 10%, rgba(65,80,95,0.18), transparent 65%)",
        }}
      />
      <div className="grain absolute inset-0 -z-10 opacity-50" aria-hidden />

      <Container size="wide" className="relative z-10">
        {/* Big mark — restrained on mobile, expressive on wide */}
        <div className="border-b border-paper/10 py-16 sm:py-20 lg:py-24">
          <p className="font-display text-[clamp(2.4rem,9vw,8.5rem)] leading-[0.96] tracking-[-0.035em] text-paper">
            ManageFlow.
          </p>
          <p className="mt-5 max-w-xl text-pretty text-[14.5px] leading-relaxed text-paper/55 sm:mt-6 sm:text-[15px]">
            {t.footer.tagline}
          </p>
          <p className="mt-6 max-w-xl text-[13px] leading-relaxed text-paper/50 sm:mt-7">
            {t.footer.humanTouch}
          </p>
        </div>

        {/* Columns */}
        <div className="grid gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 text-[13px] leading-relaxed text-paper/55">
              {t.footer.handcrafted}
            </p>
            <div className="mt-6">
              <LanguageToggle tone="dark" />
            </div>
          </div>

          <FooterColumn title={t.footer.navTitle}>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[14px] text-paper/70 transition-colors hover:text-paper"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title={t.footer.contactTitle}>
            <ul className="flex flex-col gap-3">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="group inline-flex flex-col text-[14px] text-paper/70 transition-colors hover:text-paper"
                  >
                    <span className="text-[10.5px] uppercase tracking-[0.18em] text-paper/40">
                      {c.label}
                    </span>
                    <span className="mt-1">{c.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title={t.footer.studioTitle}>
            <ul className="flex flex-col gap-3 text-[14px] text-paper/70">
              <li>{BUSINESS.location}</li>
              <li>EN · AR</li>
              <li>By appointment</li>
            </ul>
          </FooterColumn>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-paper/10 py-8 text-[12px] text-paper/45 sm:flex-row sm:items-center">
          <span>
            © {year} {BUSINESS.name}. {t.footer.rights}
          </span>
          <span>{BUSINESS.location}</span>
        </div>

        {/* Privacy notice */}
        <p className="mt-8 text-center text-[10px] leading-relaxed text-paper/25 max-w-2xl mx-auto">
          This website does not collect personal data without your consent. Contact information submitted via forms is used solely to respond to your enquiry.
        </p>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="lg:col-span-3">
      <h3 className="text-[10.5px] uppercase tracking-[0.22em] text-paper/45">
        {title}
      </h3>
      <div className="mt-5">{children}</div>
    </div>
  );
}

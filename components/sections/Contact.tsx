"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { BUSINESS, buildEmailLink } from "@/lib/constants";

export function Contact() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const channels = [
    {
      icon: MessageCircle,
      label: "WhatsApp / Call",
      value: BUSINESS.whatsapp,
      href: BUSINESS.whatsappLink,
      external: true,
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: BUSINESS.email,
      href: BUSINESS.emailLink,
      external: false,
    },
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const lines = [
      name ? `Name: ${name}` : null,
      company ? `Company: ${company}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = buildEmailLink(t.contact.form.subject, lines);
  }

  return (
    <section
      id="contact"
      className="relative bg-onyx py-24 sm:py-32 lg:py-36"
    >
      <Container size="wide">
        <SectionHeader
          index="07"
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          sub={t.contact.sub}
        />

        {/* Micro trust signals — quietly reassuring, never decorative */}
        <Reveal y={10}>
          <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2.5 border-y border-paper/10 py-4 text-[12px] tracking-wide text-paper/60 sm:mt-10 sm:gap-x-8">
            {t.contact.signals.map((s) => (
              <li key={s} className="inline-flex items-center gap-2">
                <span
                  className="h-1 w-1 rounded-full bg-champagne/70"
                  aria-hidden
                />
                {s}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:mt-14 lg:grid-cols-12 lg:gap-12">
          {/* Channels */}
          <div className="lg:col-span-5">
            <Reveal y={14}>
              <span className="eyebrow">{t.contact.methodsTitle}</span>
            </Reveal>

            <ul className="mt-6 flex flex-col gap-px overflow-hidden rounded-[20px] bg-paper/[0.08]">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.label}>
                    <Reveal y={10}>
                      <a
                        href={c.href}
                        target={c.external ? "_blank" : undefined}
                        rel={c.external ? "noopener noreferrer" : undefined}
                        className="group flex items-center justify-between gap-5 bg-onyx p-5 transition-colors duration-500 hover:bg-charcoal/60 sm:gap-6 sm:p-7"
                      >
                        <span className="flex items-center gap-4">
                          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-paper/20 text-paper/85 transition-colors group-hover:border-champagne/55 group-hover:text-paper">
                            <Icon size={18} strokeWidth={1.5} />
                          </span>
                          <span className="flex flex-col">
                            <span className="text-[10.5px] uppercase tracking-[0.2em] text-paper/55">
                              {c.label}
                            </span>
                            <span className="font-display mt-0.5 text-[18px] tracking-tight text-paper sm:text-[20px]">
                              {c.value}
                            </span>
                          </span>
                        </span>
                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.5}
                          className="text-paper/55 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper rtl:scale-x-[-1] rtl:group-hover:-translate-x-0.5"
                        />
                      </a>
                    </Reveal>
                  </li>
                );
              })}
            </ul>

            <Reveal y={12} className="mt-8 sm:mt-10">
              <div className="rounded-[20px] border border-paper/10 bg-ink/40 p-6">
                <p className="text-[13px] leading-relaxed text-paper/65">
                  <span className="text-paper">ManageFlow</span> ·{" "}
                  {BUSINESS.location}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal y={14}>
              <span className="eyebrow">{t.contact.formTitle}</span>
            </Reveal>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
              className="mt-6 rounded-[24px] border border-paper/12 bg-ink/65 p-6 sm:p-9"
            >
              <div className="grid gap-7 sm:grid-cols-2">
                <Field
                  label={t.contact.form.name}
                  value={name}
                  onChange={setName}
                  required
                  autoComplete="name"
                />
                <Field
                  label={t.contact.form.company}
                  value={company}
                  onChange={setCompany}
                  autoComplete="organization"
                />
              </div>

              <FieldArea
                label={t.contact.form.message}
                value={message}
                onChange={setMessage}
                required
              />

              <div className="mt-9 border-t border-paper/12 pt-6">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-start">
                  <div className="flex flex-col gap-2">
                    <p className="max-w-md text-[12px] leading-relaxed text-paper/60">
                      {t.contact.form.privacy}
                    </p>
                    <p className="max-w-md text-[12px] leading-relaxed text-paper/65">
                      {t.contact.form.trustNote}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1.5 sm:items-end">
                    <Button type="submit" withArrow>
                      {t.contact.form.submit}
                    </Button>
                    <span className="text-[10.5px] uppercase tracking-[0.18em] text-paper/40">
                      {t.contact.form.submitNote}
                    </span>
                  </div>
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  autoComplete?: string;
}) {
  const id = `f-${label}`;
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-[10.5px] uppercase tracking-[0.2em] text-paper/60"
      >
        {label}
        {required && <span className="ms-1 text-champagne">*</span>}
      </label>
      <input
        id={id}
        type="text"
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        className="mt-2.5 h-11 w-full border-0 border-b border-paper/25 bg-transparent pb-2.5 text-[16px] text-paper outline-none transition-colors duration-500 placeholder:text-paper/35 focus:border-paper"
      />
    </div>
  );
}

function FieldArea({
  label,
  value,
  onChange,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  const id = `f-${label}`;
  return (
    <div className="mt-7">
      <label
        htmlFor={id}
        className="block text-[10.5px] uppercase tracking-[0.2em] text-paper/60"
      >
        {label}
        {required && <span className="ms-1 text-champagne">*</span>}
      </label>
      <textarea
        id={id}
        rows={5}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2.5 w-full resize-none border-0 border-b border-paper/25 bg-transparent pb-2.5 text-[16px] leading-relaxed text-paper outline-none transition-colors duration-500 placeholder:text-paper/35 focus:border-paper"
      />
    </div>
  );
}

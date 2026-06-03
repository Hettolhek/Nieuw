import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  return {
    title: `het Tolhek — ${t("tagline")}`,
    description: t("tagline"),
  };
}

function ArrowLink({
  href,
  children,
  variant = "light",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark" | "accent";
}) {
  const colors = {
    light: "text-[var(--color-text-light)]/70 hover:text-[var(--color-text-light)] after:bg-[var(--color-text-light)]",
    dark: "text-[var(--color-text)] hover:text-[var(--color-text)] after:bg-[var(--color-text)]",
    accent: "text-[var(--color-accent)] hover:text-[var(--color-accent-light)] after:bg-[var(--color-accent)]",
  };

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 text-sm tracking-[0.1em] uppercase transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-100 hover:after:scale-x-0 after:transition-transform after:duration-300 ${colors[variant]}`}
    >
      {children}
      <svg
        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  );
}

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-wood.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[var(--color-bg-darker)]/60" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-10">
          <h1
            className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] text-[var(--color-text-light)] mb-10"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Wat begint bij een idee, groeit uit tot een prachtig meubel.
          </h1>
          <ArrowLink href="#werk" variant="light">
            {t("hero.cta")}
          </ArrowLink>
        </div>
      </section>

      {/* ── About intro ── */}
      <section className="py-24 sm:py-32 bg-[var(--color-bg)]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-[var(--color-accent)] text-xs uppercase tracking-[0.25em] mb-6 font-medium">
                {t("about.subtitle")}
              </p>
              <h2
                className="text-3xl sm:text-4xl leading-tight text-[var(--color-text)] mb-8"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {t("about.title")}
              </h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-5 text-[15px]">
                {t("about.intro")}
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed text-[15px]">
                {t("about.description")}
              </p>
            </div>

            <div className="space-y-8 lg:pt-16">
              <p className="text-[var(--color-text-muted)] leading-relaxed text-[15px]">
                {t("about.owner")}
              </p>

              <div className="font-medium text-sm text-[var(--color-text)]">
                <p className="mb-1">De kracht van het Tolhek:</p>
              </div>
              <ul className="space-y-2.5 text-[var(--color-text-muted)] text-[15px]">
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                  Maatwerk in hout en plaatmateriaal
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                  Keukens, meubels en inbouwkasten
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                  Ontwerpgericht werken met oog voor detail
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                  Van idee tot realisatie
                </li>
              </ul>

              <div className="pt-2">
                <ArrowLink href="over" variant="accent">
                  Meer over ons
                </ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio preview ── */}
      <section id="werk" className="py-24 sm:py-32 bg-[var(--color-bg-light)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-[var(--color-accent)] text-xs uppercase tracking-[0.25em] mb-4 font-medium">
                {t("portfolio.subtitle")}
              </p>
              <h2
                className="text-3xl sm:text-4xl text-[var(--color-text)]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {t("portfolio.title")}
              </h2>
            </div>
            <ArrowLink href="portfolio" variant="dark">
              Bekijk alles
            </ArrowLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { label: "Maatwerk keuken", h: "aspect-[3/4]" },
              { label: "Eettafel met bank", h: "aspect-[4/3]" },
              { label: "Inbouwkast op maat", h: "aspect-[3/4]" },
              { label: "Houten meubel", h: "aspect-[4/3]" },
              { label: "Keuken renovatie", h: "aspect-[3/4]" },
              { label: "Maatwerk project", h: "aspect-[4/3]" },
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative ${item.h} bg-[var(--color-border)] rounded-sm overflow-hidden cursor-pointer`}
              >
                <div className="w-full h-full bg-gradient-to-br from-[var(--color-text-muted)]/20 to-[var(--color-border)] flex items-center justify-center">
                  <p className="text-[var(--color-text-muted)]/60 text-sm">{item.label}</p>
                </div>
                <div className="absolute inset-0 bg-[var(--color-bg-darker)]/0 group-hover:bg-[var(--color-bg-darker)]/50 transition-all duration-500 flex items-end p-6">
                  <span className="text-[var(--color-text-light)] text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marquee banner ── */}
      <section className="py-8 bg-[var(--color-bg-dark)] overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8 mx-8">
              <span
                className="text-5xl sm:text-7xl text-[var(--color-text-light)]/10 uppercase tracking-wider"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Vakmanschap
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/40" />
              <span
                className="text-5xl sm:text-7xl text-[var(--color-text-light)]/10 uppercase tracking-wider"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Hout
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/40" />
            </span>
          ))}
        </div>
      </section>

      {/* ── Werkwijze preview ── */}
      <section className="py-24 sm:py-32 bg-[var(--color-bg)]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <p className="text-[var(--color-accent)] text-xs uppercase tracking-[0.25em] mb-6 font-medium">
            {t("method.subtitle")}
          </p>
          <h2
            className="text-3xl sm:text-4xl text-[var(--color-text)] mb-16"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {t("method.title")}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[1, 2, 3, 4].map((step) => (
              <div key={step}>
                <span className="text-[var(--color-accent)]/60 text-xs font-medium tracking-widest">
                  0{step}
                </span>
                <h3 className="text-lg text-[var(--color-text)] mt-3 mb-3 font-medium">
                  {t(`method.step${step}_title`)}
                </h3>
                <p className="text-[var(--color-text-muted)] text-[15px] leading-relaxed">
                  {t(`method.step${step}_desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 sm:py-32 bg-[var(--color-bg-dark)]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[var(--color-accent)]/60 text-xs uppercase tracking-[0.25em] mb-6 font-medium">
            Contact
          </p>
          <h2
            className="text-3xl sm:text-4xl text-[var(--color-text-light)] mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {t("quote.subtitle")}
          </h2>
          <p className="text-[var(--color-text-light-muted)] mb-10 text-[15px] leading-relaxed">
            {t("quote.intro")}
          </p>
          <ArrowLink href="offerte" variant="light">
            {t("nav.quote")}
          </ArrowLink>
        </div>
      </section>
    </>
  );
}

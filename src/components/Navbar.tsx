"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const otherLocale = locale === "nl" ? "en" : "nl";
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
  const switchUrl = `/${otherLocale}${pathnameWithoutLocale}`;
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `/${locale}/over`, label: t("about") },
    { href: `/${locale}/werkwijze`, label: t("method") },
    { href: `/${locale}/portfolio`, label: t("portfolio") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const navBg = scrolled || !isHome
    ? "bg-[var(--color-bg-darker)]/95 backdrop-blur-md"
    : "bg-transparent";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Left: nav links */}
            <div className="hidden lg:flex items-center gap-8">
              {links.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-[13px] uppercase tracking-[0.15em] text-[var(--color-text-light)]/60 hover:text-[var(--color-text-light)] transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-accent)] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Center: logo */}
            <Link
              href={`/${locale}`}
              className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 group"
            >
              <svg
                viewBox="0 0 64 48"
                fill="none"
                stroke="var(--color-text-light)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              >
                <line x1="6" y1="4" x2="6" y2="44" />
                <line x1="58" y1="4" x2="58" y2="44" />
                <line x1="6" y1="10" x2="58" y2="10" />
                <line x1="6" y1="38" x2="58" y2="38" />
                <line x1="6" y1="38" x2="58" y2="10" />
                <line x1="6" y1="10" x2="32" y2="38" />
              </svg>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--color-text-light)]/80 font-medium">
                het Tolhek
              </span>
            </Link>

            {/* Right: nav links + lang + cta */}
            <div className="hidden lg:flex items-center gap-8">
              {links.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-[13px] uppercase tracking-[0.15em] text-[var(--color-text-light)]/60 hover:text-[var(--color-text-light)] transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-accent)] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <Link
                href={switchUrl}
                className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-light)]/30 hover:text-[var(--color-text-light)]/70 transition-colors duration-300"
              >
                {otherLocale}
              </Link>
              <Link
                href={`/${locale}/offerte`}
                className="relative text-[12px] uppercase tracking-[0.15em] text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors duration-300 group"
              >
                <span className="relative z-10">{t("quote")}</span>
                <span className="absolute -bottom-1 left-0 w-full h-px bg-[var(--color-accent)] group-hover:bg-[var(--color-accent-light)] transition-colors duration-300" />
              </Link>
            </div>

            {/* Mobile: hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center ml-auto"
              aria-label="Menu"
            >
              <div className="w-6 flex flex-col gap-[5px]">
                <span
                  className={`block h-[1.5px] bg-[var(--color-text-light)] transition-all duration-300 origin-center ${
                    mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] bg-[var(--color-text-light)] transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] bg-[var(--color-text-light)] transition-all duration-300 origin-center ${
                    mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-[var(--color-bg-darker)] transition-opacity duration-500 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu content */}
        <div
          className={`relative h-full flex flex-col justify-center items-center transition-all duration-500 ${
            mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <nav className="flex flex-col items-center gap-6">
            <Link
              href={`/${locale}`}
              onClick={() => setMobileOpen(false)}
              className="text-2xl text-[var(--color-text-light)]/60 hover:text-[var(--color-text-light)] transition-colors duration-300"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Home
            </Link>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl text-[var(--color-text-light)]/60 hover:text-[var(--color-text-light)] transition-colors duration-300"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-12 flex flex-col items-center gap-6">
            <Link
              href={`/${locale}/offerte`}
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)] border-b border-[var(--color-accent)] pb-1 hover:text-[var(--color-accent-light)] hover:border-[var(--color-accent-light)] transition-colors duration-300"
            >
              {t("quote")}
            </Link>
            <Link
              href={switchUrl}
              className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-light)]/30 hover:text-[var(--color-text-light)]/60 transition-colors duration-300"
            >
              {otherLocale === "en" ? "English" : "Nederlands"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

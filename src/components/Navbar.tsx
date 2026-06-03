"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Left: nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] uppercase tracking-[0.15em] text-[var(--color-text-light)]/70 hover:text-[var(--color-text-light)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center: logo */}
          <Link href={`/${locale}`} className="absolute left-1/2 -translate-x-1/2">
            <Logo color="var(--color-text-light)" />
          </Link>

          {/* Right: nav links + lang + cta */}
          <div className="hidden lg:flex items-center gap-8">
            {links.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] uppercase tracking-[0.15em] text-[var(--color-text-light)]/70 hover:text-[var(--color-text-light)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={switchUrl}
              className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-light)]/40 hover:text-[var(--color-text-light)]/80 transition-colors"
            >
              {otherLocale}
            </Link>
            <Link
              href={`/${locale}/offerte`}
              className="text-[13px] uppercase tracking-[0.15em] bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-[var(--color-bg-darker)] px-6 py-2.5 rounded-full transition-colors font-medium"
            >
              {t("quote")}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[var(--color-text-light)] p-2 ml-auto"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[var(--color-bg-darker)] border-t border-[var(--color-border-dark)]">
          <div className="px-6 py-6 space-y-1">
            <Link
              href={`/${locale}`}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm uppercase tracking-[0.15em] text-[var(--color-text-light)]/80"
            >
              Home
            </Link>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm uppercase tracking-[0.15em] text-[var(--color-text-light)]/80 hover:text-[var(--color-text-light)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex items-center gap-4">
              <Link href={switchUrl} className="text-xs uppercase tracking-widest text-[var(--color-text-light)]/40">
                {otherLocale}
              </Link>
              <Link
                href={`/${locale}/offerte`}
                onClick={() => setMobileOpen(false)}
                className="bg-[var(--color-accent)] text-[var(--color-bg-darker)] text-sm px-5 py-2 rounded-full font-medium"
              >
                {t("quote")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

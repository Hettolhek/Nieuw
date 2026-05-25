"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const otherLocale = locale === "nl" ? "en" : "nl";
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
  const switchUrl = `/${otherLocale}${pathnameWithoutLocale}`;

  const links = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/over`, label: t("about") },
    { href: `/${locale}/werkwijze`, label: t("method") },
    { href: `/${locale}/portfolio`, label: t("portfolio") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-900/95 backdrop-blur-sm border-b border-warm-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href={`/${locale}`}>
            <Logo color="#f0e9df" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm tracking-wide transition-colors ${
                  isActive(link.href)
                    ? "text-warm-200"
                    : "text-stone-400 hover:text-warm-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href={switchUrl}
              className="text-xs uppercase tracking-widest text-stone-500 hover:text-warm-300 transition-colors px-2 py-1 border border-stone-700 rounded"
            >
              {otherLocale}
            </Link>
            <Link
              href={`/${locale}/offerte`}
              className="bg-warm-700 hover:bg-warm-600 text-warm-100 text-sm px-4 py-2 rounded transition-colors"
            >
              {t("quote")}
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-stone-300 p-2"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-warm-900 border-t border-warm-800">
          <div className="px-4 py-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 text-sm rounded transition-colors ${
                  isActive(link.href)
                    ? "text-warm-200 bg-warm-800"
                    : "text-stone-300 hover:text-warm-300 hover:bg-warm-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex items-center gap-3">
              <Link
                href={switchUrl}
                className="text-xs uppercase tracking-widest text-stone-400 hover:text-stone-200 transition-colors px-2 py-1 border border-stone-700 rounded"
              >
                {otherLocale}
              </Link>
              <Link
                href={`/${locale}/offerte`}
                onClick={() => setMobileOpen(false)}
                className="bg-warm-700 hover:bg-warm-600 text-warm-100 text-sm px-4 py-2 rounded transition-colors"
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

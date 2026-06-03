"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-[var(--color-bg-darker)] text-[var(--color-text-light-muted)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Logo color="var(--color-text-light)" className="mb-4" />
            <p className="text-xs leading-relaxed mt-4 text-[var(--color-text-light-muted)]/60">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-[var(--color-text-light)] text-xs uppercase tracking-[0.2em] mb-5 font-medium">
              Navigatie
            </h4>
            <div className="space-y-3 text-sm">
              {[
                { href: `/${locale}/over`, label: t("nav.about") },
                { href: `/${locale}/werkwijze`, label: t("nav.method") },
                { href: `/${locale}/portfolio`, label: t("nav.portfolio") },
                { href: `/${locale}/offerte`, label: t("nav.quote") },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block hover:text-[var(--color-text-light)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[var(--color-text-light)] text-xs uppercase tracking-[0.2em] mb-5 font-medium">
              {t("nav.contact")}
            </h4>
            <div className="space-y-3 text-sm">
              <a href="tel:0623128419" className="block hover:text-[var(--color-text-light)] transition-colors">
                06-23128419
              </a>
              <a href="mailto:info@hettolhek.nl" className="block hover:text-[var(--color-text-light)] transition-colors">
                info@hettolhek.nl
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[var(--color-text-light)] text-xs uppercase tracking-[0.2em] mb-5 font-medium">
              Werkplaats
            </h4>
            <div className="space-y-1 text-sm">
              <p>de Bult 8 E11</p>
              <p>9243 WE Bakkeveen</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-border-dark)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--color-text-light-muted)]/40">
            &copy; {new Date().getFullYear()} het Tolhek. {t("footer.rights")}
          </p>
          <p className="text-xs text-[var(--color-text-light-muted)]/40">
            Bakkeveen, Friesland
          </p>
        </div>
      </div>
    </footer>
  );
}

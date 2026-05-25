"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-warm-900 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <Logo color="#e0d5c7" className="mb-3" />
            <p className="text-sm text-stone-500">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="text-warm-300 text-sm font-medium mb-3 uppercase tracking-wider">
              {t("nav.contact")}
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <a
                  href="tel:0623128419"
                  className="hover:text-warm-300 transition-colors"
                >
                  06-23128419
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@hettolhek.nl"
                  className="hover:text-warm-300 transition-colors"
                >
                  info@hettolhek.nl
                </a>
              </p>
              <p>de Bult 8 E11, Bakkeveen</p>
            </div>
          </div>

          <div>
            <h4 className="text-warm-300 text-sm font-medium mb-3 uppercase tracking-wider">
              Navigatie
            </h4>
            <div className="space-y-2 text-sm">
              <Link
                href={`/${locale}/over`}
                className="block hover:text-warm-300 transition-colors"
              >
                {t("nav.about")}
              </Link>
              <Link
                href={`/${locale}/werkwijze`}
                className="block hover:text-warm-300 transition-colors"
              >
                {t("nav.method")}
              </Link>
              <Link
                href={`/${locale}/portfolio`}
                className="block hover:text-warm-300 transition-colors"
              >
                {t("nav.portfolio")}
              </Link>
              <Link
                href={`/${locale}/offerte`}
                className="block hover:text-warm-300 transition-colors"
              >
                {t("nav.quote")}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-warm-800 text-xs text-stone-600">
          &copy; {new Date().getFullYear()} het Tolhek. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}

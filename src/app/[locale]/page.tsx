import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import type { Metadata } from "next";
import { Logo } from "@/components/Logo";

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

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-warm-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-wood.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-900/80 via-warm-900/40 to-warm-900" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <Logo
              iconOnly
              color="#e0d5c7"
              className="[&_svg]:h-16 [&_svg]:sm:h-24"
            />
          </div>
          <h1
            className="text-6xl sm:text-8xl lg:text-9xl text-warm-100 mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            het Tolhek
          </h1>
          <div className="w-16 h-px bg-warm-400 mx-auto mb-6" />
          <p className="text-warm-300 text-base sm:text-lg uppercase tracking-[0.25em] mb-12 font-medium">
            {t("hero.tagline")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#werk"
              className="bg-warm-700 hover:bg-warm-600 text-warm-100 px-10 py-3.5 rounded text-sm font-semibold tracking-wider uppercase transition-colors"
            >
              {t("hero.cta")}
            </Link>
            <Link
              href="offerte"
              className="border border-warm-400/60 hover:border-warm-300 text-warm-300 hover:text-warm-100 px-10 py-3.5 rounded text-sm font-semibold tracking-wider uppercase transition-colors"
            >
              {t("hero.quote")}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-5 h-5 text-warm-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 sm:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-warm-500 text-sm uppercase tracking-[0.2em] mb-3">
                {t("about.subtitle")}
              </p>
              <h2
                className="text-3xl sm:text-4xl text-stone-900 mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {t("about.title")}
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                {t("about.intro")}
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                {t("about.description")}
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <p
                    className="text-2xl text-warm-600 mb-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    22+
                  </p>
                  <p className="text-xs text-stone-500 uppercase tracking-wider">
                    Jaar
                  </p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <p
                    className="text-2xl text-warm-600 mb-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    100%
                  </p>
                  <p className="text-xs text-stone-500 uppercase tracking-wider">
                    Maatwerk
                  </p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <p
                    className="text-2xl text-warm-600 mb-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    3D
                  </p>
                  <p className="text-xs text-stone-500 uppercase tracking-wider">
                    Ontwerp
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-warm-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-warm-300 to-warm-200 flex items-center justify-center">
                  <p className="text-warm-400 text-sm">Foto werkplaats</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-warm-200/50 rounded-lg -z-10" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-warm-100/50 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Work preview */}
      <section id="werk" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-warm-500 text-sm uppercase tracking-[0.2em] mb-3">
              {t("portfolio.subtitle")}
            </p>
            <h2
              className="text-3xl sm:text-4xl text-stone-900"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {t("portfolio.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] bg-warm-200 rounded-lg overflow-hidden cursor-pointer"
              >
                <div className="w-full h-full bg-gradient-to-br from-warm-300 to-warm-200 flex items-center justify-center">
                  <p className="text-warm-400 text-sm">Project {i}</p>
                </div>
                <div className="absolute inset-0 bg-warm-900/0 group-hover:bg-warm-900/40 transition-all duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="portfolio"
              className="inline-block border border-warm-300 hover:border-warm-500 text-stone-600 hover:text-warm-700 px-8 py-3 rounded text-sm tracking-wide transition-colors"
            >
              {t("hero.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* Method preview */}
      <section className="py-20 sm:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-warm-500 text-sm uppercase tracking-[0.2em] mb-3">
              {t("method.subtitle")}
            </p>
            <h2
              className="text-3xl sm:text-4xl text-stone-900"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {t("method.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 bg-warm-200 text-warm-700 rounded-full flex items-center justify-center mx-auto mb-5 text-lg font-medium">
                  {step}
                </div>
                <h3 className="text-stone-900 font-medium mb-2">
                  {t(`method.step${step}_title`)}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {t(`method.step${step}_desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-warm-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl sm:text-4xl text-warm-100 mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {t("quote.subtitle")}
          </h2>
          <p className="text-warm-400 mb-8 max-w-xl mx-auto">
            {t("quote.intro")}
          </p>
          <Link
            href="offerte"
            className="inline-block bg-warm-700 hover:bg-warm-600 text-warm-100 px-8 py-3 rounded text-sm tracking-wide transition-colors"
          >
            {t("nav.quote")}
          </Link>
        </div>
      </section>
    </>
  );
}

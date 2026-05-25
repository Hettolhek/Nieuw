import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title"), description: t("intro") };
}

export default function OverPage() {
  const t = useTranslations("about");

  return (
    <>
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-warm-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-warm-400 text-sm uppercase tracking-[0.2em] mb-3">
            {t("subtitle")}
          </p>
          <h1
            className="text-4xl sm:text-5xl text-warm-100"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {t("title")}
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-stone prose-lg max-w-none">
            <p className="text-stone-700 text-lg leading-relaxed mb-6">
              {t("intro")}
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              {t("description")}
            </p>
            <p className="text-stone-600 leading-relaxed">{t("owner")}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p
                className="text-3xl text-warm-600 mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                22+
              </p>
              <p className="text-stone-500 text-sm">{t("experience")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p
                className="text-3xl text-warm-600 mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                100%
              </p>
              <p className="text-stone-500 text-sm">{t("custom")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <svg
                className="w-8 h-8 text-warm-600 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-stone-500 text-sm">{t("local")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

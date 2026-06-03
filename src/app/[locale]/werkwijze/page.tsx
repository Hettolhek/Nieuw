import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "method" });
  return { title: t("title"), description: t("intro") };
}

export default function WerkwijzePage() {
  const t = useTranslations("method");

  return (
    <>
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[var(--color-bg-darker)]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <p className="text-[var(--color-accent)] text-xs uppercase tracking-[0.25em] mb-4 font-medium">
            {t("subtitle")}
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl text-[var(--color-text-light)] leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {t("title")}
          </h1>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[var(--color-bg)]">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-20">
            {t("intro")}
          </p>

          <div className="space-y-20">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex gap-8">
                <div className="flex-shrink-0">
                  <span
                    className="text-5xl text-[var(--color-accent)]/30"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    0{step}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl text-[var(--color-text)] mb-3 font-medium">
                    {t(`step${step}_title`)}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-[15px] leading-relaxed">
                    {t(`step${step}_desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

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
          <p className="text-[var(--color-text)] text-lg leading-relaxed mb-8">
            {t("intro")}
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-8 text-[15px]">
            {t("description")}
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed text-[15px]">
            {t("owner")}
          </p>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-[var(--color-border)] pt-12">
            <div>
              <p className="text-4xl text-[var(--color-accent)] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                22+
              </p>
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                {t("experience")}
              </p>
            </div>
            <div>
              <p className="text-4xl text-[var(--color-accent)] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                100%
              </p>
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                {t("custom")}
              </p>
            </div>
            <div>
              <p className="text-4xl text-[var(--color-accent)] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                3D
              </p>
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                Ontwerp
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

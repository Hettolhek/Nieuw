import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "quote" });
  return { title: t("title"), description: t("intro") };
}

export default function OffertePage() {
  const t = useTranslations("quote");

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
        <div className="max-w-[640px] mx-auto px-6 lg:px-10">
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-10 text-[15px]">
            {t("intro")}
          </p>
          <ContactForm type="quote" />
        </div>
      </section>
    </>
  );
}

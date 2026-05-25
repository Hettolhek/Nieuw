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
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-stone-600 leading-relaxed mb-8">{t("intro")}</p>
          <ContactForm type="quote" />
        </div>
      </section>
    </>
  );
}

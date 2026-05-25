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
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title"), description: t("subtitle") };
}

export default function ContactPage() {
  const t = useTranslations("contact");

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2
                className="text-2xl text-stone-900 mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {t("form_title")}
              </h2>
              <ContactForm type="contact" />
            </div>

            <div>
              <h2
                className="text-2xl text-stone-900 mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {t("address_title")}
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium text-warm-600 uppercase tracking-wider mb-2">
                    {t("invoice_address")}
                  </h3>
                  <div className="text-stone-600 text-sm space-y-1">
                    <p>het Tolhek</p>
                    <p>Tolheksleane 87</p>
                    <p>9249 NS Frieschepalen</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-warm-600 uppercase tracking-wider mb-2">
                    {t("workshop_address")}
                  </h3>
                  <div className="text-stone-600 text-sm space-y-1">
                    <p>het Tolhek, werkplaats</p>
                    <p>de Bult 8 E11</p>
                    <p>9243 WE Bakkeveen</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-warm-600 uppercase tracking-wider mb-2">
                    {t("phone_label")}
                  </h3>
                  <a
                    href="tel:0623128419"
                    className="text-stone-600 hover:text-warm-600 transition-colors"
                  >
                    06-23128419
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-warm-600 uppercase tracking-wider mb-2">
                    {t("email_label")}
                  </h3>
                  <a
                    href="mailto:info@hettolhek.nl"
                    className="text-stone-600 hover:text-warm-600 transition-colors"
                  >
                    info@hettolhek.nl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

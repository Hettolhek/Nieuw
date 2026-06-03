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
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            <div className="lg:col-span-3">
              <h2 className="text-xl text-[var(--color-text)] mb-8 font-medium">
                {t("form_title")}
              </h2>
              <ContactForm type="contact" />
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-xl text-[var(--color-text)] mb-8 font-medium">
                {t("address_title")}
              </h2>

              <div className="space-y-10">
                <div>
                  <p className="text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-3 font-medium">
                    {t("workshop_address")}
                  </p>
                  <div className="text-[var(--color-text-muted)] text-[15px] space-y-1">
                    <p>het Tolhek, werkplaats</p>
                    <p>de Bult 8 E11</p>
                    <p>9243 WE Bakkeveen</p>
                  </div>
                </div>

                <div>
                  <p className="text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-3 font-medium">
                    {t("invoice_address")}
                  </p>
                  <div className="text-[var(--color-text-muted)] text-[15px] space-y-1">
                    <p>het Tolhek</p>
                    <p>Tolheksleane 87</p>
                    <p>9249 NS Frieschepalen</p>
                  </div>
                </div>

                <div>
                  <p className="text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-3 font-medium">
                    {t("phone_label")}
                  </p>
                  <a href="tel:0623128419" className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">
                    06-23128419
                  </a>
                </div>

                <div>
                  <p className="text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-3 font-medium">
                    {t("email_label")}
                  </p>
                  <a href="mailto:info@hettolhek.nl" className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">
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

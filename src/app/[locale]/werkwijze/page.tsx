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

  const icons = [
    <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    <svg key="4" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>,
  ];

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
          <p className="text-stone-600 text-lg leading-relaxed mb-16 max-w-2xl">
            {t("intro")}
          </p>

          <div className="space-y-16">
            {[1, 2, 3, 4].map((step, i) => (
              <div key={step} className="flex gap-6 sm:gap-10">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-warm-200 text-warm-700 rounded-full flex items-center justify-center flex-shrink-0">
                    {icons[i]}
                  </div>
                  {step < 4 && (
                    <div className="w-px h-full bg-warm-300 mt-3" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-xs text-warm-500 uppercase tracking-widest mb-1">
                    Stap {step}
                  </p>
                  <h3
                    className="text-xl text-stone-900 mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {t(`step${step}_title`)}
                  </h3>
                  <p className="text-stone-500 leading-relaxed">
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

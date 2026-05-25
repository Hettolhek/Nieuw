import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "portfolio" });
  return { title: t("title"), description: t("intro") };
}

const projects = [
  { id: 1, label: "Maatwerk keuken", category: "kitchens" },
  { id: 2, label: "Keuken op maat", category: "kitchens" },
  { id: 3, label: "Eettafel met bank", category: "furniture" },
  { id: 4, label: "Inbouwkast", category: "custom" },
  { id: 5, label: "Houten meubel", category: "furniture" },
  { id: 6, label: "Maatwerk project", category: "custom" },
];

export default function PortfolioPage() {
  const t = useTranslations("portfolio");

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
          <p className="text-stone-600 leading-relaxed mb-10 max-w-2xl">
            {t("intro")} {t("cta")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative aspect-[4/3] bg-warm-200 rounded-lg overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-br from-warm-300 to-warm-200 flex items-center justify-center">
                  <p className="text-warm-400 text-sm">{project.label}</p>
                </div>
                <div className="absolute inset-0 bg-warm-900/0 group-hover:bg-warm-900/60 transition-all duration-300 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium">
                      {project.label}
                    </p>
                    <p className="text-warm-300 text-xs mt-1 capitalize">
                      {t(`categories.${project.category}`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

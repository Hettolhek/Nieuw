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
  { label: "Maatwerk keuken", cat: "Keukens" },
  { label: "Keuken renovatie", cat: "Keukens" },
  { label: "Eettafel met bank", cat: "Meubels" },
  { label: "Inbouwkast op maat", cat: "Maatwerk" },
  { label: "Houten dressoir", cat: "Meubels" },
  { label: "Maatwerk project", cat: "Maatwerk" },
  { label: "Keukeneiland", cat: "Keukens" },
  { label: "Wandmeubel", cat: "Meubels" },
];

export default function PortfolioPage() {
  const t = useTranslations("portfolio");

  return (
    <>
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[var(--color-bg-darker)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
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
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-14 max-w-xl text-[15px]">
            {t("intro")} {t("cta")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative aspect-[3/4] bg-[var(--color-border)] rounded-sm overflow-hidden cursor-pointer"
              >
                <div className="w-full h-full bg-gradient-to-br from-[var(--color-text-muted)]/10 to-[var(--color-border)] flex items-center justify-center">
                  <p className="text-[var(--color-text-muted)]/50 text-sm">{project.label}</p>
                </div>
                <div className="absolute inset-0 bg-[var(--color-bg-darker)]/0 group-hover:bg-[var(--color-bg-darker)]/60 transition-all duration-500 flex flex-col justify-end p-6">
                  <span className="text-[var(--color-text-light)] text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {project.label}
                  </span>
                  <span className="text-[var(--color-accent)] text-xs mt-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    {project.cat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

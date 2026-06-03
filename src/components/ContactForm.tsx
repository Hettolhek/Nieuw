"use client";

import { useTranslations } from "next-intl";
import { useState, type FormEvent } from "react";

interface Props {
  type: "contact" | "quote";
}

export function ContactForm({ type }: Props) {
  const t = useTranslations(type === "quote" ? "quote" : "contact");
  const qt = useTranslations("quote");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/offerte", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type }),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-0 py-3 bg-transparent border-0 border-b border-[var(--color-border)] text-[var(--color-text)] text-[15px] focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-text-muted)]/50";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-2">
          {t("name")} *
        </label>
        <input type="text" name="name" required className={inputClass} />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-2">
          {t("email")} *
        </label>
        <input type="email" name="email" required className={inputClass} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-2">
            {t("phone")}
          </label>
          <input type="tel" name="phone" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-2">
            {t("city")}
          </label>
          <input type="text" name="city" className={inputClass} />
        </div>
      </div>

      {type === "quote" && (
        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-2">
            {qt("project_type")}
          </label>
          <select name="project_type" className={inputClass + " cursor-pointer"}>
            <option value="kitchen">{qt("project_types.kitchen")}</option>
            <option value="furniture">{qt("project_types.furniture")}</option>
            <option value="closet">{qt("project_types.closet")}</option>
            <option value="counter">{qt("project_types.counter")}</option>
            <option value="other">{qt("project_types.other")}</option>
          </select>
        </div>
      )}

      <div>
        <label className="block text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-2">
          {type === "quote" ? qt("description") : t("message")} *
        </label>
        <textarea
          name="message"
          required
          rows={4}
          className={inputClass + " resize-none"}
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] disabled:opacity-50 text-[var(--color-bg-darker)] px-8 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all cursor-pointer"
        >
          {status === "sending" ? t("sending") : t("send")}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {status === "success" && (
        <p className="text-green-700 text-sm">{t("success")}</p>
      )}
      {status === "error" && (
        <p className="text-red-700 text-sm">{t("error")}</p>
      )}
    </form>
  );
}

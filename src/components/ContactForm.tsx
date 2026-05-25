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
    "w-full px-4 py-3 bg-white border border-warm-200 rounded-lg text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-warm-400/50 focus:border-warm-400 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-stone-600 mb-1.5">
          {t("name")} *
        </label>
        <input
          type="text"
          name="name"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm text-stone-600 mb-1.5">
          {t("email")} *
        </label>
        <input
          type="email"
          name="email"
          required
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-stone-600 mb-1.5">
            {t("phone")}
          </label>
          <input
            type="tel"
            name="phone"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm text-stone-600 mb-1.5">
            {t("city")}
          </label>
          <input
            type="text"
            name="city"
            className={inputClass}
          />
        </div>
      </div>

      {type === "quote" && (
        <div>
          <label className="block text-sm text-stone-600 mb-1.5">
            {qt("project_type")}
          </label>
          <select name="project_type" className={inputClass}>
            <option value="kitchen">{qt("project_types.kitchen")}</option>
            <option value="furniture">{qt("project_types.furniture")}</option>
            <option value="closet">{qt("project_types.closet")}</option>
            <option value="counter">{qt("project_types.counter")}</option>
            <option value="other">{qt("project_types.other")}</option>
          </select>
        </div>
      )}

      <div>
        <label className="block text-sm text-stone-600 mb-1.5">
          {type === "quote" ? qt("description") : t("message")} *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className={inputClass + " resize-none"}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-warm-700 hover:bg-warm-600 disabled:bg-warm-400 text-warm-100 py-3 rounded-lg text-sm tracking-wide transition-colors"
      >
        {status === "sending" ? t("sending") : t("send")}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-sm text-center">{t("success")}</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm text-center">{t("error")}</p>
      )}
    </form>
  );
}

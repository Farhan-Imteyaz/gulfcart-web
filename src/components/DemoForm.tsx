"use client";

import { useState, FormEvent } from "react";

const countries = [
  "UAE",
  "Saudi Arabia",
  "Kuwait",
  "Qatar",
  "Bahrain",
  "Oman",
  "Other",
];
const orderVolumes = [
  "Under 200/mo",
  "200–1,000/mo",
  "1,000–5,000/mo",
  "5,000+/mo",
];

export default function DemoForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // TODO: point this at a real endpoint — an API route, Formspree, HubSpot, etc.
    // const formData = new FormData(e.currentTarget);
    // await fetch("/api/demo-request", { method: "POST", body: formData });

    await new Promise((r) => setTimeout(r, 500));
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="rounded-xl2 border border-gray-500/20 bg-brand-surface p-8 text-center">
        <p className="text-lg">Request received.</p>
        <p className="mt-2 text-sm text-muted">
          We'll reach out within one business day to set up your walkthrough.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl2 border border-gray-500/20 bg-brand-surface p-6 sm:p-8 space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm text-muted mb-1.5">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-gray-500/20 bg-brand-bg2 px-3.5 py-2.5 text-sm text-fg placeholder:text-muted/60 focus:border-brand-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-muted mb-1.5">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-gray-500/20 bg-brand-bg2 px-3.5 py-2.5 text-sm text-fg placeholder:text-muted/60 focus:border-brand-accent"
            placeholder="you@brand.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="store" className="block text-sm text-muted mb-1.5">
          Shopify store URL
        </label>
        <input
          id="store"
          name="store"
          type="text"
          required
          className="w-full rounded-lg border border-gray-500/20 bg-brand-bg2 px-3.5 py-2.5 text-sm text-fg placeholder:text-muted/60 focus:border-brand-accent"
          placeholder="yourbrand.com or yourbrand.myshopify.com"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="country" className="block text-sm text-muted mb-1.5">
            Primary market
          </label>
          <select
            id="country"
            name="country"
            required
            defaultValue=""
            className="w-full rounded-lg border border-gray-500/20 bg-brand-bg2 px-3.5 py-2.5 text-sm text-fg focus:border-brand-accent"
          >
            <option value="" disabled>
              Select a country
            </option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="volume" className="block text-sm text-muted mb-1.5">
            Monthly orders
          </label>
          <select
            id="volume"
            name="volume"
            required
            defaultValue=""
            className="w-full rounded-lg border border-gray-500/20 bg-brand-bg2 px-3.5 py-2.5 text-sm text-fg focus:border-brand-accent"
          >
            <option value="" disabled>
              Select a range
            </option>
            {orderVolumes.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-accent text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request a demo"}
      </button>
    </form>
  );
}

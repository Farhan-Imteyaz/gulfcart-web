import { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import NetworkCard from "@/components/home/NetworkCard";
import NetworkConnections, {
  type NetworkNode,
} from "@/components/home/NetworkConnections";

export const metadata: Metadata = pageMetadata({
  title: "Shopify Checkout for the GCC: Kuwait, Qatar, Bahrain & Oman",
  description:
    "Sell on Shopify in Kuwait, Qatar, Bahrain and Oman. Settle in KWD, QAR, BHD and OMR, set payment methods per country and expand across the GCC from one store with GulfCart.",
  path: "/shopify-gcc",
});

/* ---------- data ---------- */
const nodes: NetworkNode[] = [
  {
    id: "kwd",
    label: "Kuwait",
    back: "Settles in KWD",
    x: 30,
    y: 9,
    tier: "core",
    dur: 3.4,
    delay: 0.2,
  },
  {
    id: "qar",
    label: "Qatar",
    back: "Settles in QAR",
    x: 70,
    y: 12,
    tier: "core",
    dur: 3.8,
    delay: 1.1,
  },
  {
    id: "bhd",
    label: "Bahrain",
    back: "Settles in BHD",
    x: 27,
    y: 33,
    tier: "core",
    dur: 4.2,
    delay: 0.6,
  },
  {
    id: "omr",
    label: "Oman",
    back: "Settles in OMR",
    x: 76,
    y: 52,
    tier: "core",
    dur: 3.6,
    delay: 1.7,
  },
  {
    id: "pay",
    label: "Payment methods",
    back: "Set per country",
    x: 27,
    y: 66,
    tier: "core",
    dur: 4,
    delay: 0.9,
  },
  {
    id: "cod",
    label: "OTP COD",
    back: "Fake orders blocked",
    x: 56,
    y: 90,
    tier: "core",
    dur: 3.5,
    delay: 2.1,
  },
  {
    id: "uae",
    label: "UAE",
    back: "AED",
    x: 88,
    y: 26,
    tier: "extra",
    dur: 4.4,
    delay: 1.4,
  },
  {
    id: "ksa",
    label: "Saudi Arabia",
    back: "SAR",
    x: 12,
    y: 50,
    tier: "extra",
    dur: 3.9,
    delay: 0.4,
  },
  {
    id: "promo",
    label: "Country promos",
    back: "Currency-locked",
    x: 82,
    y: 82,
    tier: "extra",
    dur: 4.1,
    delay: 1.9,
  },
  {
    id: "shop",
    label: "One Shopify store",
    back: "No second store",
    x: 42,
    y: 22,
    tier: "extra",
    dur: 3.7,
    delay: 0.8,
  },
];

const stats = [
  {
    v: "4",
    l: "more GCC markets: Kuwait, Qatar, Bahrain and Oman",
    c: "border-brand-accent/30 bg-accent/10 text-brand-accent",
  },
  {
    v: "6",
    l: "GCC currencies settled natively",
    c: "border-brand-accent2/30 bg-accent2/10 text-brand-accent2",
  },
  {
    v: "1",
    l: "Shopify store, no duplicate stores to maintain",
    c: "border-brand-gold/40 bg-brand-gold/10 text-brand-gold",
  },
];

const countries = [
  {
    t: "Kuwait",
    cur: "KWD",
    b: "Quote and settle in Kuwaiti dinar. Set payment methods and COD rules for Kuwait on their own, and run a launch offer just for Kuwait buyers.",
    pts: [
      "Native KWD settlement",
      "Kuwait-only payment list",
      "Kuwait-only promo codes",
    ],
  },
  {
    t: "Qatar",
    cur: "QAR",
    b: "Show and settle in Qatari riyal. Choose the payment methods and order Qatar buyers see, separate from your other markets.",
    pts: [
      "Native QAR settlement",
      "Qatar payment list and order",
      "Verified COD with optional fee",
    ],
  },
  {
    t: "Bahrain",
    cur: "BHD",
    b: "Settle in Bahraini dinar, with delivery rates and payment methods set for Bahrain rather than copied from another country.",
    pts: [
      "Native BHD settlement",
      "Bahrain delivery rates",
      "Country-aware tax setup",
    ],
  },
  {
    t: "Oman",
    cur: "OMR",
    b: "Settle in Omani rial and set Oman's own rules for payments, shipping and discounts from the same Shopify store.",
    pts: [
      "Native OMR settlement",
      "Oman shipping rules",
      "Oman-only discounts",
    ],
  },
];

const steps = [
  {
    t: "Keep your Shopify store",
    b: "Install GulfCart on top. Theme, products and orders stay as they are.",
    c: "bg-accent shadow-brand-accent/30",
  },
  {
    t: "Add rules per country",
    b: "Currency, payment methods, tax, shipping and promos for each new market.",
    c: "bg-accent2 shadow-brand-accent2/30",
  },
  {
    t: "Go live, one market at a time",
    b: "Open Kuwait, Qatar, Bahrain or Oman without a rebuild.",
    c: "bg-brand-gold shadow-brand-gold/30",
  },
];

const faqs = [
  {
    q: "How do I sell in multiple GCC countries with one Shopify store?",
    a: "Keep one Shopify store and configure country rules in GulfCart: currency, payment methods, tax, shipping and promotions for each market.",
  },
  {
    q: "How do I sell on Shopify in Kuwait, Qatar, Bahrain or Oman?",
    a: "Add the market in GulfCart, set its currency (KWD, QAR, BHD or OMR) and payment methods, and go live without a second store.",
  },
  {
    q: "Can I accept KWD, QAR, BHD and OMR payments on Shopify?",
    a: "GulfCart processes and settles in KWD, QAR, BHD and OMR, as well as AED and SAR, so buyers are charged in their own currency.",
  },
  {
    q: "How do I localize Shopify checkout for Gulf customers?",
    a: "Set the currency, payment methods, COD handling, shipping rates and promos for each country, so every market sees a checkout made for it.",
  },
  {
    q: "How do I set different shipping rates by GCC country on Shopify?",
    a: "GulfCart supports country-aware delivery rates, set per market alongside tax and payment rules.",
  },
  {
    q: "How do I expand a Shopify store across the GCC?",
    a: "Start with your main market, fix its checkout, then add countries one at a time by adding rules. Most merchants begin with one market and expand later.",
  },
];

/* ---------- small pieces ---------- */
const btn =
  "inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-brand-accent/25 transition hover:-translate-y-0.5 hover:opacity-95";

const tones = ["blue", "green", "gold"] as const;

function GlowCard({
  i = 0,
  children,
  className = "",
}: {
  i?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`gc-glow gc-glow-${tones[i % 3]} ${className}`}>
      <div className="h-full rounded-2xl bg-white p-5 sm:p-6">{children}</div>
    </div>
  );
}

function Network() {
  return (
    <div
      role="img"
      aria-label="GulfCart connects Kuwait, Qatar, Bahrain and Oman, with local currencies and payment methods, into one Shopify store"
      className="relative mx-auto aspect-square w-full max-w-[640px] sm:aspect-[6/5]"
    >
      <NetworkConnections nodes={nodes} />
      {nodes.map((n, i) => (
        <div
          key={n.id}
          aria-hidden="true"
          className={`absolute -translate-x-1/2 -translate-y-1/2 ${n.tier === "extra" ? "max-sm:hidden" : ""}`}
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <div
            className="gc-float"
            style={
              {
                "--dur": `${4 + (i % 4) * 0.7}s`,
                "--d": `-${n.delay * 1.5}s`,
              } as React.CSSProperties
            }
          >
            <NetworkCard label={n.label} back={n.back} index={i} />
          </div>
        </div>
      ))}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 flex aspect-square w-[25%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-brand-accent/30 bg-white shadow-2xl shadow-brand-accent/30"
      >
        <span className="gc-pulse absolute inset-0 rounded-full border border-brand-accent/40" />
        <span className="font-display text-sm font-semibold sm:text-lg lg:text-xl">
          GulfCart
        </span>
        <span className="text-[9px] text-brand-accent sm:text-xs">GCC</span>
      </div>
    </div>
  );
}

function Head({
  pill,
  title,
  body,
}: {
  pill: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="pill border border-brand-accent2/20 font-medium">
        {pill}
      </span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {body && <p className="mt-4 text-muted sm:text-lg">{body}</p>}
    </div>
  );
}

/* ---------- page ---------- */
export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="hero-glow relative overflow-hidden">
        <div className="container mx-auto py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[45fr_55fr] lg:gap-8">
            <div className="gc-in max-w-xl lg:max-w-none">
              <span className="pill border border-brand-accent2/20 font-medium">
                Shopify checkout GCC
              </span>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Sell on Shopify in Kuwait, Qatar, Bahrain and Oman
              </h1>
              <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted">
                Settle in KWD, QAR, BHD and OMR, set payment methods per
                country, and expand across the GCC from one Shopify store, with
                no second store to build.
              </p>
              <Link href={site.demoPath} className={`${btn} mt-9`}>
                Book a demo
              </Link>
            </div>
            <div
              className="gc-in min-w-0"
              style={{ "--d": "0.3s" } as React.CSSProperties}
            >
              <Network />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-gray-500/20 bg-brand-surface">
        <div className="container mx-auto grid gap-6 py-10 sm:grid-cols-3 sm:py-12">
          {stats.map((s, i) => (
            <GlowCard key={s.l} i={i}>
              <span
                className={`inline-block rounded-xl border px-4 py-2 font-display text-3xl font-semibold ${s.c}`}
              >
                {s.v}
              </span>
              <p className="mt-3 text-sm text-muted">{s.l}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="container mx-auto py-14 sm:py-20">
        <Head
          pill="Shopify checkout by country"
          title="One checkout setup for each GCC market"
          body="Each country gets its own currency, payment methods, delivery rates and promotions, all managed from the Shopify store you already have."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {countries.map((c, i) => (
            <GlowCard key={c.t} i={i}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight">
                  Shopify checkout {c.t}
                </h3>
                <span className="rounded-lg border border-gray-500/20 bg-brand-surface px-2.5 py-1 font-display text-sm font-semibold">
                  {c.cur}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">{c.b}</p>
              <ul className="mt-4 space-y-2">
                {c.pts.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="shrink-0 text-brand-accent2"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5l3 3 7-7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* EXPANSION STEPS */}
      <section className="container mx-auto py-14 sm:py-20">
        <Head
          pill="GCC expansion"
          title="Expand across the GCC without rebuilding your store"
          body="Fix the market you already sell in, then add countries one at a time."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <GlowCard key={s.t} i={i} className="text-center">
              <span
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full font-display text-lg font-semibold text-white shadow-lg ${s.c}`}
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {s.t}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{s.b}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* LINKS */}
      <section className="container mx-auto pb-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              h: "/shopify-checkout-uae",
              t: "UAE",
              b: "AED, Apple Pay, Tabby, Tamara, COD and VAT.",
            },
            {
              h: "/shopify-checkout-saudi-arabia",
              t: "Saudi Arabia",
              b: "SAR, mada, Tabby, Tamara and COD.",
            },
            {
              h: "/shopify-markets",
              t: "Shopify Markets",
              b: "Multi-currency, settlement and country discounts.",
            },
          ].map((x, i) => (
            <Link key={x.h} href={x.h} className="block">
              <GlowCard i={i}>
                <h3 className="text-lg font-semibold tracking-tight">{x.t}</h3>
                <p className="mt-2 text-sm text-muted">{x.b}</p>
                <span className="mt-4 inline-block text-sm font-medium text-brand-accent">
                  Read more →
                </span>
              </GlowCard>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto py-14 sm:py-20">
        <Head
          pill="FAQ"
          title="Selling across the GCC on Shopify: common questions"
        />
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-gray-500/20 bg-white px-5 py-4 shadow-sm open:border-brand-accent/40 open:shadow-lg open:shadow-brand-accent/10"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {f.q}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-surface text-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted sm:text-base">{f.a}</p>
            </details>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      {/* FINAL CTA */}
      <section className="container mx-auto pb-20 sm:pb-28">
        <div className="hero-glow rounded-3xl border border-gray-500/20 bg-gradient-to-br from-brand-accent/[0.08] via-white to-brand-surface px-6 py-12 text-center sm:py-16">
          <h2 className="mx-auto max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Open your next GCC market from the store you already have
          </h2>
          <Link href={site.demoPath} className={`${btn} mt-8`}>
            Book a demo
          </Link>
          <p className="mt-6 text-sm text-muted">
            Also see{" "}
            <Link
              href="/shopify-checkout"
              className="text-brand-accent hover:underline"
            >
              Shopify checkout
            </Link>{" "}
            and{" "}
            <Link
              href="/shopify-payment-methods"
              className="text-brand-accent hover:underline"
            >
              payment methods
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import NetworkCard from "@/components/home/NetworkCard";
import NetworkConnections, {
  type NetworkNode,
} from "@/components/home/NetworkConnections";

export const metadata: Metadata = pageMetadata({
  title: "Shopify Checkout for the GCC — Local Currency, COD & Payments",
  description:
    "GulfCart adds native AED/SAR settlement, one-tap returning buyers, OTP-verified COD and per-country payment rules on top of your Shopify store.",
  path: "/shopify-checkout",
});

/* ---------- data ---------- */
const nodes: NetworkNode[] = [
  {
    id: "cur",
    label: "Local currency",
    back: "AED · SAR · KWD",
    x: 30,
    y: 9,
    tier: "core",
    dur: 3.4,
    delay: 0.2,
  },
  {
    id: "rules",
    label: "Country rules",
    back: "Tax · shipping · promos",
    x: 70,
    y: 12,
    tier: "core",
    dur: 3.8,
    delay: 1.1,
  },
  {
    id: "tap",
    label: "One-tap",
    back: "9 fields → 2",
    x: 27,
    y: 33,
    tier: "core",
    dur: 4.2,
    delay: 0.6,
  },
  {
    id: "tabby",
    label: "Tabby",
    back: "Per-country BNPL",
    x: 76,
    y: 52,
    tier: "core",
    dur: 3.6,
    delay: 1.7,
  },
  {
    id: "otp",
    label: "OTP COD",
    back: "Fake orders blocked",
    x: 27,
    y: 66,
    tier: "core",
    dur: 4,
    delay: 0.9,
  },
  {
    id: "tamara",
    label: "Tamara",
    back: "Per-country BNPL",
    x: 56,
    y: 90,
    tier: "core",
    dur: 3.5,
    delay: 2.1,
  },
  {
    id: "apple",
    label: "Apple Pay",
    back: "Where supported",
    x: 88,
    y: 26,
    tier: "extra",
    dur: 4.4,
    delay: 1.4,
  },
  {
    id: "fee",
    label: "COD fee",
    back: "Set by country",
    x: 12,
    y: 50,
    tier: "extra",
    dur: 3.9,
    delay: 0.4,
  },
  {
    id: "mada",
    label: "mada",
    back: "Saudi cards",
    x: 82,
    y: 82,
    tier: "extra",
    dur: 4.1,
    delay: 1.9,
  },
  {
    id: "shop",
    label: "Shopify",
    back: "Stays as it is",
    x: 42,
    y: 22,
    tier: "extra",
    dur: 3.7,
    delay: 0.8,
  },
];

const stats = [
  {
    v: "+39%",
    l: "more orders from the same checkout sessions",
    c: "border-brand-accent/30 bg-accent/10 text-brand-accent",
  },
  {
    v: "9→2",
    l: "checkout fields for a recognized returning buyer",
    c: "border-brand-accent2/30 bg-accent2/10 text-brand-accent2",
  },
  {
    v: "23s",
    l: "average checkout time for returning buyers",
    c: "border-brand-gold/40 bg-brand-gold/10 text-brand-gold",
  },
];

const leaks = [
  {
    t: "A converted price, not a local one",
    b: "Shopify shows a converted estimate. Gulf buyers who see the wrong currency at the last step drop off, about 30% by our numbers.",
    c: "text-brand-accent bg-accent/10 border-brand-accent/30",
    d: "M8 6h8a4 4 0 010 8H8m0-8v14m0-6h7M5 10h5M5 14h5",
  },
  {
    t: "Too many fields for repeat buyers",
    b: "Every returning buyer re-types address and card details. Nine fields on a phone is where carts get abandoned.",
    c: "text-brand-gold bg-brand-gold/10 border-brand-gold/40",
    d: "M4 6h16M4 12h16M4 18h10",
  },
  {
    t: "One rule set for six countries",
    b: "The same payment methods, tax, shipping and promos everywhere, when UAE, Saudi and Kuwait buyers pay differently.",
    c: "text-brand-accent2 bg-accent2/10 border-brand-accent2/30",
    d: "M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z",
  },
];

const faqs = [
  {
    q: "Does GulfCart replace my Shopify checkout?",
    a: "No. GulfCart installs on top of your existing Shopify store. Your theme, products and orders stay as they are.",
  },
  {
    q: "Can a Shopify checkout settle in AED, SAR or KWD?",
    a: "Yes. GulfCart processes and settles in AED, SAR, KWD, QAR, BHD and OMR, rather than showing a converted display price.",
  },
  {
    q: "What is one-tap checkout on Shopify?",
    a: "GulfCart's buyer network recognizes anyone who has checked out with a brand on the network and pre-fills their details, cutting the form from 9 fields to 2.",
  },
  {
    q: "How do I show different payment methods in different countries?",
    a: "You set the payment method list and its order per country, for example Tabby, Tamara, Apple Pay, cards and COD, instead of one global list.",
  },
  {
    q: "How do I improve Shopify checkout conversion in the UAE and Saudi Arabia?",
    a: "Fix the three common leaks: show the buyer's real local currency, reduce form fields for returning buyers, and apply country-specific payment methods and COD verification.",
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
      aria-label="GulfCart connects local currency, one-tap checkout, OTP-verified COD, Tabby, Tamara and country rules into one Shopify checkout"
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
        <span className="text-[9px] text-brand-accent sm:text-xs">
          Checkout
        </span>
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

function Split({
  pill,
  title,
  body,
  points,
  href,
  cta,
  flip,
  tone,
  children,
}: {
  pill: string;
  title: string;
  body: string;
  points: string[];
  href: string;
  cta: string;
  flip?: boolean;
  tone: "blue" | "green" | "gold";
  children: React.ReactNode;
}) {
  const t = {
    blue: {
      panel: "from-brand-accent/[0.10]",
      dot: "bg-accent/10 text-brand-accent border-brand-accent/30",
    },
    green: {
      panel: "from-brand-accent2/[0.12]",
      dot: "bg-accent2/10 text-brand-accent2 border-brand-accent2/30",
    },
    gold: {
      panel: "from-brand-gold/[0.14]",
      dot: "bg-brand-gold/10 text-brand-gold border-brand-gold/40",
    },
  }[tone];
  return (
    <section className="container-px py-12 sm:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={flip ? "lg:order-last" : ""}>
          <span className="pill border border-brand-accent2/20 font-medium">
            {pill}
          </span>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-muted sm:text-lg">{body}</p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 text-sm text-muted sm:text-base"
              >
                <span
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${t.dot}`}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
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
                </span>
                {p}
              </li>
            ))}
          </ul>
          <Link
            href={href}
            className="mt-7 inline-block text-sm font-medium text-brand-accent hover:underline"
          >
            {cta} →
          </Link>
        </div>
        <div
          className={`rounded-3xl border border-gray-500/20 bg-gradient-to-br ${t.panel} via-white to-brand-surface p-4 shadow-xl sm:p-8`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

const Bar = ({ w, on }: { w: string; on?: boolean }) => (
  <div
    className={`h-8 rounded-lg border ${on ? "border-brand-accent2/40 bg-accent2/15" : "border-gray-500/20 bg-white"}`}
    style={{ width: w }}
  />
);

/* ---------- page ---------- */
export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="hero-glow relative overflow-hidden">
        <div className="container-px py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[45fr_55fr] lg:gap-8">
            <div className="gc-in max-w-xl lg:max-w-none">
              <span className="pill border border-brand-accent2/20 font-medium">
                Shopify checkout GCC
              </span>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Shopify checkout built for Gulf buyers
              </h1>
              <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted">
                GulfCart sits on top of your Shopify store and fixes the last 90
                seconds: native local currency, one-tap returning buyers,
                verified COD and payment rules for each country.
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
        <div className="container-px grid gap-6 py-10 sm:grid-cols-3 sm:py-12">
          {stats.map((s, i) => (
            <GlowCard key={s.v} i={i}>
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

      {/* PROBLEM */}
      <section className="container-px py-14 sm:py-20">
        <Head
          pill="The checkout problem"
          title="Your traffic is fine. Your checkout leaks."
          body="Out of 1,000 checkout sessions a standard Shopify setup keeps about 268 orders. Most of the loss comes from three fixable things."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {leaks.map((l, i) => (
            <GlowCard key={l.t} i={i}>
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl border ${l.c}`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d={l.d} />
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {l.t}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{l.b}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* CURRENCY */}
      <Split
        tone="blue"
        pill="Local currency"
        title="Real settlement, not a converted price tag"
        body="GulfCart processes and settles in AED, SAR, KWD, QAR, BHD and OMR. Buyers pay the price they were shown, in a currency they recognize."
        points={[
          "Native settlement in 6 GCC currencies",
          "No surprise conversion at payment",
          "Builds buyer trust at the last step",
        ]}
        href="/shopify-markets"
        cta="How multi-currency works"
      >
        <p className="mb-3 text-xs text-muted">
          Example: same product, same buyer in Dubai
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <GlowCard i={0}>
            <p className="text-xs text-muted">Standard Shopify</p>
            <p className="mt-3 font-display text-3xl font-semibold">$54.43</p>
            <p className="mt-1 text-xs text-muted">Converted estimate</p>
          </GlowCard>
          <GlowCard i={1}>
            <p className="text-xs font-medium text-brand-accent2">
              With GulfCart
            </p>
            <p className="mt-3 font-display text-3xl font-semibold">
              AED 199.00
            </p>
            <p className="mt-1 text-xs text-muted">Settled in AED</p>
          </GlowCard>
        </div>
      </Split>

      {/* ONE TAP */}
      <Split
        flip
        tone="green"
        pill="One-tap checkout"
        title="One tap for anyone who's checked out before"
        body="GulfCart's buyer network recognizes a shopper who has checked out with any brand on the network and pre-fills their details. Less typing, fewer people giving up."
        points={[
          "Fields drop from 9 to 2 for known buyers",
          "Address and card pre-filled",
          "Around 23 seconds to complete checkout",
        ]}
        href={site.demoPath}
        cta="See it on your store"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <GlowCard i={2}>
            <p className="mb-3 text-xs text-muted">
              Standard checkout · 9 fields
            </p>
            <div className="space-y-1.5">
              {Array.from({ length: 9 }).map((_, i) => (
                <Bar key={i} w={i % 3 === 0 ? "100%" : "82%"} />
              ))}
            </div>
          </GlowCard>
          <GlowCard i={1}>
            <p className="mb-3 text-xs font-medium text-brand-accent2">
              With GulfCart · 2 fields
            </p>
            <div className="space-y-1.5">
              <Bar w="100%" on />
              <Bar w="100%" on />
            </div>
            <div className="mt-4 rounded-lg bg-accent px-4 py-3 text-center text-sm font-medium text-white shadow-lg shadow-brand-accent/30">
              Pay now
            </div>
          </GlowCard>
        </div>
      </Split>

      {/* COUNTRY RULES */}
      <Split
        tone="gold"
        pill="Country rules"
        title="Payment methods, tax and promos set per country"
        body="Shopify applies one rule set everywhere. GulfCart lets you set the payment method list and order for each market, plus country-aware VAT, delivery rates and discounts."
        points={[
          "Tabby, Tamara, mada, Apple Pay, cards and COD, per country",
          "Currency-locked promo codes, such as SAR-only offers",
          "Verified COD with OTP and an optional COD fee",
        ]}
        href="/shopify-payment-methods"
        cta="Explore payment methods"
      >
        <p className="mb-3 text-xs text-muted">
          Example setup, order shown top to bottom
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              c: "UAE",
              m: ["Apple Pay", "Tabby", "Tamara", "Cards", "COD + fee"],
            },
            {
              c: "Saudi Arabia",
              m: ["mada", "Tabby", "Tamara", "Apple Pay", "COD + fee"],
            },
          ].map((x, k) => (
            <GlowCard key={x.c} i={k === 0 ? 2 : 0}>
              <p className="text-sm font-semibold">{x.c}</p>
              <ul className="mt-3 space-y-1.5">
                {x.m.map((m, i) => (
                  <li
                    key={m}
                    className="flex items-center gap-2 rounded-lg bg-brand-surface px-3 py-2 text-xs"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold text-[10px] text-white">
                      {i + 1}
                    </span>
                    {m}
                  </li>
                ))}
              </ul>
            </GlowCard>
          ))}
        </div>
      </Split>

      {/* FUNNEL */}
      <section className="container-px py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <GlowCard i={1}>
            <div className="p-1 sm:p-4">
              <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
                Same traffic. Same spend. More orders.
              </h2>
              <p className="mt-2 text-center text-sm text-muted">
                Per 1,000 checkout sessions
              </p>
              <div className="mt-8 space-y-5">
                <div>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="text-muted">
                      Standard Shopify checkout
                    </span>
                    <span className="font-display">268 orders</span>
                  </div>
                  <div className="h-3 rounded-full bg-brand-bg2">
                    <div
                      className="h-full rounded-full bg-brand-muted/50"
                      style={{ width: "65%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span>With GulfCart</span>
                    <span className="font-display text-brand-accent2">
                      410 orders
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-brand-bg2">
                    <div
                      className="h-full rounded-full bg-accent2"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
              <p className="mt-6 text-center text-sm font-medium text-brand-accent2">
                +39% more orders from the same traffic
              </p>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-px py-14 sm:py-20">
        <Head
          pill="FAQ"
          title="Shopify checkout in the Gulf: common questions"
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
      <section className="container-px pb-20 sm:pb-28">
        <div className="hero-glow rounded-3xl border border-gray-500/20 bg-gradient-to-br from-brand-accent/[0.08] via-white to-brand-surface px-6 py-12 text-center sm:py-16">
          <h2 className="mx-auto max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            See what a Gulf-built checkout does for your store
          </h2>
          <Link href={site.demoPath} className={`${btn} mt-8`}>
            Book a demo
          </Link>
          <p className="mt-6 text-sm text-muted">
            Also see{" "}
            <Link
              href="/shopify-cod"
              className="text-brand-accent hover:underline"
            >
              Shopify COD
            </Link>
            ,{" "}
            <Link
              href="/shopify-checkout-uae"
              className="text-brand-accent hover:underline"
            >
              UAE
            </Link>{" "}
            and{" "}
            <Link
              href="/shopify-checkout-saudi-arabia"
              className="text-brand-accent hover:underline"
            >
              Saudi Arabia
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}

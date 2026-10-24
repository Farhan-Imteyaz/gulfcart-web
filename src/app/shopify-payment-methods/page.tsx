import { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import NetworkCard from "@/components/home/NetworkCard";
import NetworkConnections, {
  type NetworkNode,
} from "@/components/home/NetworkConnections";

export const metadata: Metadata = pageMetadata({
  title:
    "Shopify Payment Methods for the GCC: Tabby, Tamara, Apple Pay, mada & COD",
  description:
    "Show the right payment methods in each country on Shopify. Add Tabby, Tamara, Apple Pay, mada, cards and verified COD per country in the UAE, Saudi Arabia and the GCC with GulfCart.",
  path: "/shopify-payment-methods",
});

/* ---------- data ---------- */
const nodes: NetworkNode[] = [
  {
    id: "tabby",
    label: "Tabby",
    back: "Buy now, pay later",
    x: 30,
    y: 9,
    tier: "core",
    dur: 3.4,
    delay: 0.2,
  },
  {
    id: "tamara",
    label: "Tamara",
    back: "Buy now, pay later",
    x: 70,
    y: 12,
    tier: "core",
    dur: 3.8,
    delay: 1.1,
  },
  {
    id: "apple",
    label: "Apple Pay",
    back: "Where supported",
    x: 27,
    y: 33,
    tier: "core",
    dur: 4.2,
    delay: 0.6,
  },
  {
    id: "mada",
    label: "mada",
    back: "Saudi cards",
    x: 76,
    y: 52,
    tier: "core",
    dur: 3.6,
    delay: 1.7,
  },
  {
    id: "cod",
    label: "COD + fee",
    back: "OTP verified",
    x: 27,
    y: 66,
    tier: "core",
    dur: 4,
    delay: 0.9,
  },
  {
    id: "cards",
    label: "Visa · Mastercard",
    back: "Cards everywhere",
    x: 56,
    y: 90,
    tier: "core",
    dur: 3.5,
    delay: 2.1,
  },
  {
    id: "uae",
    label: "UAE",
    back: "Own method list",
    x: 88,
    y: 26,
    tier: "extra",
    dur: 4.4,
    delay: 1.4,
  },
  {
    id: "ksa",
    label: "Saudi Arabia",
    back: "Own method list",
    x: 12,
    y: 50,
    tier: "extra",
    dur: 3.9,
    delay: 0.4,
  },
  {
    id: "order",
    label: "Method order",
    back: "Set per country",
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
    v: "6",
    l: "GCC countries, each with its own payment method list",
    c: "border-brand-accent/30 bg-accent/10 text-brand-accent",
  },
  {
    v: "6+",
    l: "methods supported: Tabby, Tamara, mada, Apple Pay, cards and COD",
    c: "border-brand-accent2/30 bg-accent2/10 text-brand-accent2",
  },
  {
    v: "1",
    l: "Shopify store, no app-switching per market",
    c: "border-brand-gold/40 bg-brand-gold/10 text-brand-gold",
  },
];

const problems = [
  {
    t: "One global list for every country",
    b: "Shopify applies the same payment rules everywhere, so a UAE buyer and a Saudi buyer see the same options in the same order.",
    c: "text-brand-accent bg-accent/10 border-brand-accent/30",
    d: "M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z",
  },
  {
    t: "Methods that don't work in a market",
    b: "Showing a method a buyer can't use, or hiding the one they trust, costs you the order at the last step.",
    c: "text-brand-gold bg-brand-gold/10 border-brand-gold/40",
    d: "M6 6l12 12M18 6L6 18",
  },
  {
    t: "No control over order",
    b: "The first method shown gets the most clicks. A fixed order can push buyers toward COD when you would rather they prepay.",
    c: "text-brand-accent2 bg-accent2/10 border-brand-accent2/30",
    d: "M4 6h16M4 12h10M4 18h6",
  },
];

const methods = [
  {
    id: "tabby",
    t: "Tabby",
    b: "Buy now, pay later. Offer it in the countries where it converts, and keep it out where it doesn't.",
    pts: [
      "Set per country",
      "Placed high in the list",
      "Works alongside COD and cards",
    ],
  },
  {
    id: "tamara",
    t: "Tamara",
    b: "A second BNPL option for buyers who prefer it. Show one or both, by market.",
    pts: [
      "Per-country on or off",
      "Order set by you",
      "No second checkout app",
    ],
  },
  {
    id: "apple",
    t: "Apple Pay",
    b: "One-tap payment on supported devices and countries, for fast mobile checkout.",
    pts: [
      "Shown only where supported",
      "Fewer typed card details",
      "Strong on mobile",
    ],
  },
  {
    id: "mada",
    t: "mada",
    b: "The local debit network Saudi buyers expect to see at checkout.",
    pts: [
      "Saudi Arabia",
      "Familiar to local buyers",
      "Alongside Visa and Mastercard",
    ],
  },
];

const faqs = [
  {
    q: "How do I add Tabby to Shopify?",
    a: "GulfCart lets you turn Tabby on at checkout and choose the countries where it appears and its position in the list, without changing your theme.",
  },
  {
    q: "How do I add Tamara to Shopify?",
    a: "Enable Tamara in GulfCart, then set which countries show it and where it sits in the method list. You can run Tabby and Tamara together or one at a time.",
  },
  {
    q: "Can Shopify show different payment methods in different countries?",
    a: "GulfCart adds this on top of Shopify. You set the method list and the order for each country, so UAE, Saudi and other GCC buyers each see what suits them.",
  },
  {
    q: "How do I hide a payment method by country on Shopify?",
    a: "In GulfCart's country rules, turn a method off for any market. It then no longer appears for buyers in that country.",
  },
  {
    q: "Does Apple Pay work on Shopify in the UAE?",
    a: "Apple Pay appears where it is supported. GulfCart shows it only for supported countries and devices, so buyers aren't offered it where it can't work.",
  },
  {
    q: "What are the best payment methods for a Shopify store in the UAE and Saudi Arabia?",
    a: "Most stores combine cards, Apple Pay, a BNPL option such as Tabby or Tamara, and verified COD. In Saudi Arabia, mada is also expected. The right mix and order differ by country, which is why GulfCart sets them per market.",
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
      aria-label="GulfCart connects Tabby, Tamara, Apple Pay, mada, cards and verified COD, set per country, into one Shopify checkout"
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
          Payments
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
    <section className="container py-12 sm:py-16">
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

const countryLists = [
  { c: "UAE", m: ["Apple Pay", "Tabby", "Tamara", "Cards", "COD + fee"] },
  {
    c: "Saudi Arabia",
    m: ["mada", "Tabby", "Tamara", "Apple Pay", "COD + fee"],
  },
  { c: "Kuwait", m: ["Cards", "Tabby", "COD + fee"] },
];

/* ---------- page ---------- */
export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="hero-glow relative overflow-hidden">
        <div className="container py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[45fr_55fr] lg:gap-8">
            <div className="gc-in max-w-xl lg:max-w-none">
              <span className="pill border border-brand-accent2/20 font-medium">
                Shopify payment methods GCC
              </span>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Show the right payment method in every Gulf country
              </h1>
              <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted">
                Add Tabby, Tamara, Apple Pay, mada, cards and verified COD to
                Shopify, and set the list and its order for each country, in the
                UAE, Saudi Arabia and across the GCC.
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
        <div className="container grid gap-6 py-10 sm:grid-cols-3 sm:py-12">
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

      {/* PROBLEM */}
      <section className="container py-14 sm:py-20">
        <Head
          pill="The payment problem"
          title="One payment list can't fit six countries"
          body="Gulf buyers pay differently from country to country. A single global rule set shows the wrong options and loses orders at the last step."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problems.map((l, i) => (
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

      {/* PER COUNTRY */}
      <Split
        tone="blue"
        pill="Per-country control"
        title="Can Shopify show different payment methods in different countries?"
        body="With GulfCart, yes. You set which methods appear in each country and in what order, so every market sees the checkout that suits it. You can also hide a method by country in one setting."
        points={[
          "Per-country method list and order",
          "Hide any method in any market",
          "No app-switching per market",
        ]}
        href="/shopify-markets"
        cta="Selling in more countries"
      >
        <p className="mb-3 text-xs text-muted">
          Example setup, order shown top to bottom (illustrative)
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {countryLists.slice(0, 2).map((x, k) => (
            <GlowCard key={x.c} i={k === 0 ? 0 : 1}>
              <p className="text-sm font-semibold">{x.c}</p>
              <ul className="mt-3 space-y-1.5">
                {x.m.map((m, i) => (
                  <li
                    key={m}
                    className="flex items-center gap-2 rounded-lg bg-brand-surface px-3 py-2 text-xs"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] text-white">
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

      {/* METHODS */}
      <section className="container py-14 sm:py-20">
        <Head
          pill="Tabby, Tamara, Apple Pay and mada"
          title="Add the payment methods Gulf buyers expect"
          body="Turn each method on where it converts and keep it out where it doesn't. Tabby and Tamara can run together or one at a time."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {methods.map((m, i) => (
            <GlowCard key={m.id} i={i}>
              <h3 className="text-xl font-semibold tracking-tight">{m.t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{m.b}</p>
              <ul className="mt-4 space-y-2">
                {m.pts.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-brand-accent2"
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

      {/* TABBY VS TAMARA */}
      <Split
        flip
        tone="green"
        pill="Tabby vs Tamara"
        title="Tabby or Tamara? Offer one, or both"
        body="Both let buyers pay later. Which converts better differs by country, store and basket size, so the useful move is to test. GulfCart lets you switch either on or off per market and reorder them."
        points={[
          "Run both side by side in one market",
          "Turn one off where it underperforms",
          "Compare results before you commit",
        ]}
        href={site.demoPath}
        cta="Talk through your setup"
      >
        <p className="mb-3 text-xs text-muted">
          Example checkout list (illustrative)
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <GlowCard i={0}>
            <p className="text-xs font-medium text-brand-accent">Test A</p>
            <ul className="mt-3 space-y-1.5 text-xs">
              {["Tabby", "Tamara", "Cards"].map((m, i) => (
                <li key={m} className="rounded-lg bg-brand-surface px-3 py-2">
                  {i + 1}. {m}
                </li>
              ))}
            </ul>
          </GlowCard>
          <GlowCard i={1}>
            <p className="text-xs font-medium text-brand-accent2">Test B</p>
            <ul className="mt-3 space-y-1.5 text-xs">
              {["Tamara", "Tabby", "Cards"].map((m, i) => (
                <li key={m} className="rounded-lg bg-brand-surface px-3 py-2">
                  {i + 1}. {m}
                </li>
              ))}
            </ul>
          </GlowCard>
        </div>
      </Split>

      {/* COD LINK */}
      <Split
        tone="gold"
        pill="Cash on delivery"
        title="Keep COD, with OTP verification and a fee"
        body="COD stays in the list where buyers expect it. GulfCart verifies each COD order with an OTP and can add a COD fee by country, which also nudges buyers toward prepaid."
        points={[
          "OTP verification before dispatch",
          "Optional COD fee per country",
          "Prepaid options stay one tap away",
        ]}
        href="/shopify-cod"
        cta="How verified COD works"
      >
        <GlowCard i={2}>
          <div className="flex justify-between text-sm">
            <span className="text-muted">Subtotal</span>
            <span>AED 199.00</span>
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span className="text-muted">COD fee</span>
            <span className="font-medium text-brand-gold">+ AED 10.00</span>
          </div>
          <div className="mt-3 flex justify-between border-t border-gray-500/20 pt-3 font-semibold">
            <span>Total</span>
            <span>AED 209.00</span>
          </div>
          <p className="mt-3 text-xs text-muted">Illustrative amounts</p>
        </GlowCard>
      </Split>

      {/* COUNTRY LINKS */}
      <section className="container pb-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              h: "/shopify-checkout-uae",
              t: "Payment methods in the UAE",
              b: "Apple Pay, Tabby, Tamara, cards and COD for UAE stores, plus AED settlement.",
            },
            {
              h: "/shopify-checkout-saudi-arabia",
              t: "Payment methods in Saudi Arabia",
              b: "mada, Tabby, Tamara, Apple Pay and COD for Saudi buyers, plus SAR pricing.",
            },
          ].map((x, i) => (
            <Link key={x.h} href={x.h} className="block">
              <GlowCard i={i + 1}>
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
      <section className="container py-14 sm:py-20">
        <Head pill="FAQ" title="Shopify payment methods: common questions" />
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
      <section className="container pb-20 sm:pb-28">
        <div className="hero-glow rounded-3xl border border-gray-500/20 bg-gradient-to-br from-brand-accent/[0.08] via-white to-brand-surface px-6 py-12 text-center sm:py-16">
          <h2 className="mx-auto max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Give every Gulf buyer the payment method they trust
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
              href="/shopify-cod"
              className="text-brand-accent hover:underline"
            >
              Shopify COD
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}

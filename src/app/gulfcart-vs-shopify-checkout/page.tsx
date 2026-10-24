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
    "GulfCart vs Shopify Checkout: Shopify Markets Alternative for the Gulf",
  description:
    "Compare GulfCart with Shopify checkout and Shopify Markets for the GCC. See how a localised Gulf checkout adds AED/SAR settlement, OTP-verified COD, one-tap checkout and per-country payment rules on top of Shopify.",
  path: "/gulfcart-vs-shopify-checkout",
});

/* ---------- data ---------- */
const nodes: NetworkNode[] = [
  {
    id: "shop",
    label: "Shopify",
    back: "Your store platform",
    x: 30,
    y: 9,
    tier: "core",
    dur: 3.4,
    delay: 0.2,
  },
  {
    id: "cur",
    label: "Local currency",
    back: "Native settlement",
    x: 70,
    y: 12,
    tier: "core",
    dur: 3.8,
    delay: 1.1,
  },
  {
    id: "cod",
    label: "OTP COD",
    back: "Verified before dispatch",
    x: 27,
    y: 33,
    tier: "core",
    dur: 4.2,
    delay: 0.6,
  },
  {
    id: "tap",
    label: "One-tap",
    back: "9 fields → 2",
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
    id: "promo",
    label: "Country promos",
    back: "Currency-locked",
    x: 56,
    y: 90,
    tier: "core",
    dur: 3.5,
    delay: 2.1,
  },
  {
    id: "markets",
    label: "Shopify Markets",
    back: "Still works",
    x: 88,
    y: 26,
    tier: "extra",
    dur: 4.4,
    delay: 1.4,
  },
  {
    id: "tabby",
    label: "Tabby · Tamara",
    back: "Per country",
    x: 12,
    y: 50,
    tier: "extra",
    dur: 3.9,
    delay: 0.4,
  },
  {
    id: "tax",
    label: "Tax & shipping",
    back: "Country-aware",
    x: 82,
    y: 82,
    tier: "extra",
    dur: 4.1,
    delay: 1.9,
  },
  {
    id: "theme",
    label: "Your theme",
    back: "Unchanged",
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
    l: "more orders per 1,000 checkout sessions (268 to 410)",
    c: "border-brand-accent/30 bg-accent/10 text-brand-accent",
  },
  {
    v: "0",
    l: "stores to rebuild. GulfCart sits on top of Shopify",
    c: "border-brand-accent2/30 bg-accent2/10 text-brand-accent2",
  },
  {
    v: "6",
    l: "GCC currencies settled natively",
    c: "border-brand-gold/40 bg-brand-gold/10 text-brand-gold",
  },
];

const compare = [
  ["Store, products, theme and orders", "Shopify", "Shopify (unchanged)"],
  [
    "Local currency",
    "Display conversion",
    "Native settlement in AED, SAR, KWD, QAR, BHD, OMR",
  ],
  [
    "Payment methods per country",
    "Global rules",
    "List and order set per country",
  ],
  [
    "Tabby and Tamara",
    "Added separately",
    "Set per country alongside other methods",
  ],
  [
    "Cash on delivery",
    "Basic COD",
    "OTP verification, risk signals, optional fee",
  ],
  [
    "Returning buyers",
    "Re-type details",
    "Buyer network pre-fills, 9 fields to 2",
  ],
  ["Promo codes", "Storewide", "Currency-locked and country-specific"],
  ["Tax, delivery rates", "One global setup", "Country-aware"],
];

const choose = [
  {
    t: "Stay on Shopify checkout if",
    pts: [
      "You sell in one market with simple payment needs",
      "COD is a small share of your orders",
      "Your checkout conversion is already where you want it",
    ],
    c: "text-muted bg-brand-surface border-gray-500/20",
  },
  {
    t: "Add GulfCart if",
    pts: [
      "You lose buyers at the last step in the UAE or Saudi Arabia",
      "COD returns (RTO) or fake orders cost you money",
      "You sell, or plan to sell, in more than one GCC country",
    ],
    c: "text-brand-accent2 bg-accent2/10 border-brand-accent2/30",
  },
];

const steps = [
  {
    t: "Install on Shopify",
    b: "Add GulfCart on top. Nothing about your theme, products or orders changes.",
    c: "bg-accent shadow-brand-accent/30",
  },
  {
    t: "Set country rules",
    b: "Currency, payment methods, COD fees, tax and promos per market.",
    c: "bg-accent2 shadow-brand-accent2/30",
  },
  {
    t: "Go live",
    b: "Your checkout starts recognizing returning buyers and verifying COD, on the traffic you already pay for.",
    c: "bg-brand-gold shadow-brand-gold/30",
  },
];

const faqs = [
  {
    q: "Is GulfCart a replacement for Shopify?",
    a: "No. Shopify stays your store platform. GulfCart is the Gulf-specific checkout layer on top, so your theme, products and orders stay as they are.",
  },
  {
    q: "What is the difference between GulfCart and Shopify checkout?",
    a: "Shopify checkout applies global rules. GulfCart adds native local-currency settlement, per-country payment methods, OTP-verified COD, one-tap for returning buyers and country-level promotions.",
  },
  {
    q: "Is GulfCart a Shopify Markets alternative?",
    a: "It works with Shopify Markets rather than replacing it. Markets handles selling to several countries. GulfCart adds the Gulf checkout details Markets does not cover.",
  },
  {
    q: "How is GulfCart COD different from Shopify native COD?",
    a: "Native COD places the order as is. GulfCart verifies it with an OTP and risk signals before dispatch and can add a COD fee by country, which cuts fake orders and RTO.",
  },
  {
    q: "Is a localised GCC checkout better than the default Shopify checkout?",
    a: "For Gulf buyers it often is, because it shows their currency and payment methods and removes extra typing. By our numbers, 1,000 checkout sessions give about 410 orders with GulfCart against about 268 on a standard setup.",
  },
  {
    q: "How much does GulfCart cost compared with Shopify's fees?",
    a: "GulfCart has Starter, Growth and Enterprise plans with a small percentage of GMV. Book a demo for current pricing for your volume.",
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
      aria-label="GulfCart sits on top of Shopify and adds local currency, OTP-verified COD, one-tap checkout and per-country payment methods"
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
          On Shopify
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
                GulfCart vs Shopify checkout
              </span>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                GulfCart vs Shopify checkout for the Gulf
              </h1>
              <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted">
                Shopify is your store platform. GulfCart is the Gulf-specific
                checkout layer on top of it, a Shopify Markets alternative for
                merchants who need local currency, verified COD and per-country
                payment rules.
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

      {/* COMPARE */}
      <section className="container py-14 sm:py-20">
        <Head
          pill="Side by side"
          title="Shopify checkout vs a localised GCC checkout"
          body="This is not Shopify against GulfCart. Shopify stays your store, and GulfCart changes what happens at checkout."
        />
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-gray-500/20 bg-white shadow-xl shadow-brand-accent/5">
          <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-brand-surface text-xs font-semibold sm:text-sm">
            <div className="p-3 sm:p-4" />
            <div className="p-3 text-muted sm:p-4">Shopify checkout</div>
            <div className="p-3 text-brand-accent2 sm:p-4">With GulfCart</div>
          </div>
          {compare.map((r) => (
            <div
              key={r[0]}
              className="grid grid-cols-[1.1fr_1fr_1fr] border-t border-gray-500/20 text-xs sm:text-sm"
            >
              <div className="p-3 font-medium sm:p-4">{r[0]}</div>
              <div className="p-3 text-muted sm:p-4">{r[1]}</div>
              <div className="bg-accent2/[0.06] p-3 sm:p-4">{r[2]}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted">
          Shopify features change often. Check current Shopify capabilities
          before you decide.
        </p>
      </section>

      {/* WHEN TO CHOOSE */}
      <section className="container py-14 sm:py-20">
        <Head
          pill="Which fits you"
          title="When Shopify checkout is enough, and when it is not"
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {choose.map((c, i) => (
            <GlowCard key={c.t} i={i === 0 ? 0 : 1}>
              <span
                className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${c.c}`}
              >
                {c.t}
              </span>
              <ul className="mt-4 space-y-3">
                {c.pts.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-sm text-muted sm:text-base"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-1 shrink-0 text-brand-accent2"
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

      {/* FUNNEL */}
      <section className="container py-14 sm:py-20">
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

      {/* SETUP */}
      <section className="container py-14 sm:py-20">
        <Head
          pill="Switching is light"
          title="Add GulfCart without rebuilding anything"
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
      <section className="container pb-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              h: "/shopify-checkout",
              t: "Shopify checkout",
              b: "Local currency, one-tap and country rules.",
            },
            {
              h: "/shopify-cod",
              t: "Shopify COD",
              b: "OTP verification, fake orders and RTO.",
            },
            {
              h: "/shopify-markets",
              t: "Shopify Markets",
              b: "Where it falls short in the Gulf.",
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
      <section className="container py-14 sm:py-20">
        <Head
          pill="FAQ"
          title="GulfCart vs Shopify checkout: common questions"
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
      <section className="container pb-20 sm:pb-28">
        <div className="hero-glow rounded-3xl border border-gray-500/20 bg-gradient-to-br from-brand-accent/[0.08] via-white to-brand-surface px-6 py-12 text-center sm:py-16">
          <h2 className="mx-auto max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            See the difference on your own checkout
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

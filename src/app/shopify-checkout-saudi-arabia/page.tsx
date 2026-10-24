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
    "Shopify Checkout Saudi Arabia: SAR Payments, mada, Tabby, Tamara & COD",
  description:
    "Optimize your Shopify checkout in Saudi Arabia. Accept SAR payments, add mada, Tabby, Tamara and verified COD, cut RTO, and expand from the UAE to Saudi without a second store with GulfCart.",
  path: "/shopify-checkout-saudi-arabia",
});

/* ---------- data ---------- */
const nodes: NetworkNode[] = [
  {
    id: "sar",
    label: "SAR",
    back: "Settles in SAR",
    x: 30,
    y: 9,
    tier: "core",
    dur: 3.4,
    delay: 0.2,
  },
  {
    id: "mada",
    label: "mada",
    back: "Saudi cards",
    x: 70,
    y: 12,
    tier: "core",
    dur: 3.8,
    delay: 1.1,
  },
  {
    id: "tabby",
    label: "Tabby",
    back: "Buy now, pay later",
    x: 27,
    y: 33,
    tier: "core",
    dur: 4.2,
    delay: 0.6,
  },
  {
    id: "tamara",
    label: "Tamara",
    back: "Buy now, pay later",
    x: 76,
    y: 52,
    tier: "core",
    dur: 3.6,
    delay: 1.7,
  },
  {
    id: "cod",
    label: "OTP COD",
    back: "Fake orders blocked",
    x: 27,
    y: 66,
    tier: "core",
    dur: 4,
    delay: 0.9,
  },
  {
    id: "tap",
    label: "One-tap",
    back: "9 fields → 2",
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
    id: "cards",
    label: "Visa · Mastercard",
    back: "Cards",
    x: 12,
    y: 50,
    tier: "extra",
    dur: 3.9,
    delay: 0.4,
  },
  {
    id: "ship",
    label: "KSA shipping",
    back: "Set by country",
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
    v: "SAR",
    l: "native settlement, not just a display price",
    c: "border-brand-accent/30 bg-accent/10 text-brand-accent",
  },
  {
    v: "~30%",
    l: "of COD orders are returned to origin across the region",
    c: "border-brand-gold/40 bg-brand-gold/10 text-brand-gold",
  },
  {
    v: "~40%",
    l: "fewer fake COD orders with OTP verification",
    c: "border-brand-accent2/30 bg-accent2/10 text-brand-accent2",
  },
];

const leaks = [
  {
    t: "Prices not settled in SAR",
    b: "Saudi buyers who see a converted price at the last step hesitate. Real SAR settlement removes the surprise.",
    c: "text-brand-accent bg-accent/10 border-brand-accent/30",
    d: "M8 6h8a4 4 0 010 8H8m0-8v14m0-6h7M5 10h5M5 14h5",
  },
  {
    t: "Missing the methods Saudi buyers trust",
    b: "mada, Tabby, Tamara and COD are what many Saudi buyers look for. A global list misses them.",
    c: "text-brand-gold bg-brand-gold/10 border-brand-gold/40",
    d: "M3 6h18v12H3zM3 10h18M7 15h4",
  },
  {
    t: "COD returns",
    b: "Fake and mistyped cash-on-delivery orders become RTO, with shipping paid both ways.",
    c: "text-brand-accent2 bg-accent2/10 border-brand-accent2/30",
    d: "M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3zM9 12l2 2 4-4",
  },
];

const methods = [
  {
    t: "mada",
    b: "The local debit network Saudi buyers expect to see at checkout.",
  },
  {
    t: "Tabby and Tamara",
    b: "Buy now, pay later for higher-value baskets. Run one or both.",
  },
  {
    t: "Apple Pay and cards",
    b: "Apple Pay where supported, plus Visa and Mastercard.",
  },
  {
    t: "Cash on delivery",
    b: "Kept for buyers who want it, with OTP verification and an optional fee.",
  },
];

const steps = [
  {
    t: "Keep your UAE store",
    b: "Install GulfCart on top. Theme, products and orders stay as they are.",
    c: "bg-accent shadow-brand-accent/30",
  },
  {
    t: "Add Saudi rules",
    b: "Set SAR, payment methods, tax, shipping and promos for Saudi Arabia.",
    c: "bg-accent2 shadow-brand-accent2/30",
  },
  {
    t: "Go live in Saudi",
    b: "Open the market without a rebuild or a second Shopify store.",
    c: "bg-brand-gold shadow-brand-gold/30",
  },
];

const faqs = [
  {
    q: "How do I sell on Shopify in Saudi Arabia?",
    a: "Settle in SAR, offer the methods Saudi buyers expect, and verify COD orders. GulfCart adds these on top of your Shopify store.",
  },
  {
    q: "How do I accept SAR payments on Shopify?",
    a: "GulfCart processes and settles in SAR, so buyers are charged in riyals rather than seeing a converted display price.",
  },
  {
    q: "Should Saudi customers see SAR prices at checkout?",
    a: "Yes. Buyers quoted the wrong currency drop off, about 30% by our numbers. Showing and settling in SAR removes that doubt at the last step.",
  },
  {
    q: "What payment methods should I offer on Shopify in Saudi Arabia?",
    a: "Most stores combine mada, cards, Apple Pay, a BNPL option such as Tabby or Tamara, and COD. GulfCart sets the list and order for Saudi Arabia on its own.",
  },
  {
    q: "How do I add COD to Shopify in Saudi Arabia and reduce RTO?",
    a: "Offer COD, then verify each order with an OTP and add a COD fee. This stops fake orders before dispatch and cuts RTO.",
  },
  {
    q: "How do I expand a UAE Shopify store into Saudi Arabia?",
    a: "Keep one store and add Saudi rules in GulfCart: SAR, payment methods, tax, shipping and promos. No second store is needed.",
  },
  {
    q: "What should a UAE store sort out before selling in Saudi Arabia?",
    a: "Currency, payment methods, COD handling, shipping rates and any tax or registration requirements. Confirm legal and tax details with an advisor.",
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
      aria-label="GulfCart connects SAR settlement, mada, Tabby, Tamara and OTP-verified COD into one Saudi Arabia Shopify checkout"
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
          Saudi Arabia
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
    <section className="container mx-auto py-12 sm:py-16">
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
                Shopify checkout Saudi Arabia
              </span>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Shopify checkout built for Saudi buyers
              </h1>
              <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted">
                Accept SAR payments, offer mada, Tabby, Tamara and verified COD,
                and cut RTO, on the Shopify store you already run, or expand
                into Saudi Arabia from the UAE without a second store.
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

      {/* PROBLEM */}
      <section className="container mx-auto py-14 sm:py-20">
        <Head
          pill="Why Saudi stores lose orders"
          title="Your Saudi traffic is fine. Your checkout leaks."
          body="Buyers in Riyadh, Jeddah and across Saudi Arabia add to cart, then drop off at the last step. Three fixable things cause most of it."
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

      {/* SAR */}
      <Split
        tone="blue"
        pill="Accept SAR payments"
        title="Should Saudi customers see SAR prices at checkout?"
        body="Yes, and not just on the page. GulfCart processes and settles in SAR, so Saudi buyers pay the riyal price they were shown, with no converted estimate at the last step."
        points={[
          "Native SAR settlement",
          "No surprise conversion at payment",
          "About 30% drop-off when the wrong currency is quoted",
        ]}
        href="/shopify-markets"
        cta="Display vs settlement explained"
      >
        <p className="mb-3 text-xs text-muted">
          Example: same product, buyer in Riyadh (illustrative)
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
              SAR 204.00
            </p>
            <p className="mt-1 text-xs text-muted">Settled in SAR</p>
          </GlowCard>
        </div>
      </Split>

      {/* METHODS */}
      <section className="container mx-auto py-14 sm:py-20">
        <Head
          pill="Shopify payment gateway Saudi Arabia"
          title="The payment methods Saudi buyers expect"
          body="Set the list and its order for Saudi Arabia, separate from your other markets."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {methods.map((m, i) => (
            <GlowCard key={m.t} i={i}>
              <h3 className="text-xl font-semibold tracking-tight">{m.t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{m.b}</p>
            </GlowCard>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          Full detail on{" "}
          <Link
            href="/shopify-payment-methods"
            className="text-brand-accent hover:underline"
          >
            Tabby, Tamara and per-country payment methods
          </Link>
          .
        </p>
      </section>

      {/* COD */}
      <Split
        flip
        tone="gold"
        pill="COD in Saudi Arabia"
        title="How to add COD to Shopify in Saudi Arabia and reduce RTO"
        body="Keep cash on delivery, but verify the order first. GulfCart sends an OTP at checkout and can add a COD fee, so fake orders are stopped before dispatch."
        points={[
          "OTP verification before dispatch",
          "Optional COD fee for Saudi Arabia",
          "Fewer failed deliveries and lower RTO",
        ]}
        href="/shopify-cod"
        cta="How verified COD works"
      >
        <GlowCard i={2}>
          <div className="flex justify-between text-sm">
            <span className="text-muted">Subtotal</span>
            <span>SAR 204.00</span>
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span className="text-muted">COD fee</span>
            <span className="font-medium text-brand-gold">+ SAR 10.00</span>
          </div>
          <div className="mt-3 flex justify-between border-t border-gray-500/20 pt-3 font-semibold">
            <span>Total</span>
            <span>SAR 214.00</span>
          </div>
          <p className="mt-3 text-xs text-muted">Illustrative amounts</p>
        </GlowCard>
      </Split>

      {/* EXPANSION */}
      <section className="container mx-auto py-14 sm:py-20">
        <Head
          pill="UAE to Saudi Arabia"
          title="Expand a UAE Shopify store into Saudi Arabia"
          body="Open Saudi Arabia by adding rules, not by rebuilding or running a second store."
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

      {/* COUNTRY LINKS */}
      <section className="container mx-auto pb-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              h: "/shopify-checkout-uae",
              t: "Selling in the UAE too?",
              b: "AED settlement, Apple Pay, Tabby, Tamara and COD for UAE stores.",
            },
            {
              h: "/shopify-gcc",
              t: "Kuwait, Qatar, Bahrain and Oman",
              b: "Local currency and payments for the other GCC markets.",
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
      <section className="container mx-auto py-14 sm:py-20">
        <Head
          pill="FAQ"
          title="Shopify checkout in Saudi Arabia: common questions"
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
            Convert more of your Saudi traffic at checkout
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

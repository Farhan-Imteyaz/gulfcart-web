import { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import NetworkCard from "@/components/home/NetworkCard";
import NetworkConnections, { type NetworkNode } from "@/components/home/NetworkConnections";

export const metadata: Metadata = pageMetadata({
  title: "Shopify Markets for GCC Merchants: Multi-Currency, Local Settlement & Expansion",
  description:
    "What Shopify Markets does, where it falls short in the Gulf, and how GulfCart adds real AED, SAR, KWD, QAR, BHD and OMR settlement, country discounts and one-store GCC expansion.",
  path: "/shopify-markets",
});

/* ---------- data ---------- */
const nodes: NetworkNode[] = [
  { id: "aed", label: "AED", back: "Settles in AED", x: 30, y: 9, tier: "core", dur: 3.4, delay: 0.2 },
  { id: "sar", label: "SAR", back: "Settles in SAR", x: 70, y: 12, tier: "core", dur: 3.8, delay: 1.1 },
  { id: "kwd", label: "KWD", back: "Settles in KWD", x: 27, y: 33, tier: "core", dur: 4.2, delay: 0.6 },
  { id: "qar", label: "QAR", back: "Settles in QAR", x: 76, y: 52, tier: "core", dur: 3.6, delay: 1.7 },
  { id: "promo", label: "Country promos", back: "Currency-locked codes", x: 27, y: 66, tier: "core", dur: 4, delay: 0.9 },
  { id: "pay", label: "Payment methods", back: "Set per country", x: 56, y: 90, tier: "core", dur: 3.5, delay: 2.1 },
  { id: "bhd", label: "BHD", back: "Settles in BHD", x: 88, y: 26, tier: "extra", dur: 4.4, delay: 1.4 },
  { id: "omr", label: "OMR", back: "Settles in OMR", x: 12, y: 50, tier: "extra", dur: 3.9, delay: 0.4 },
  { id: "tax", label: "Tax & shipping", back: "Country-aware", x: 82, y: 82, tier: "extra", dur: 4.1, delay: 1.9 },
  { id: "shop", label: "One Shopify store", back: "No second store", x: 42, y: 22, tier: "extra", dur: 3.7, delay: 0.8 },
];

const stats = [
  { v: "6", l: "GCC currencies settled natively", c: "border-brand-accent/30 bg-brand-accent/10 text-brand-accent" },
  { v: "1", l: "Shopify store for all six markets", c: "border-brand-accent2/30 bg-brand-accent2/10 text-brand-accent2" },
  { v: "~30%", l: "conversion drop when buyers are quoted the wrong currency", c: "border-brand-gold/40 bg-brand-gold/10 text-brand-gold" },
];

const gaps = [
  { t: "Display conversion, not settlement", b: "Shopify can show a price in AED or SAR, but the buyer may still be charged in another currency, which adds a surprise at payment.", c: "text-brand-accent bg-brand-accent/10 border-brand-accent/30", d: "M8 6h8a4 4 0 010 8H8m0-8v14m0-6h7M5 10h5M5 14h5" },
  { t: "One rule set across markets", b: "Payment methods, tax, shipping and promotions are not tuned to each Gulf country the way local buyers expect.", c: "text-brand-gold bg-brand-gold/10 border-brand-gold/40", d: "M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" },
  { t: "Gulf checkout gaps", b: "No OTP-verified COD, no one-tap for returning buyers across brands, and limited country-level control at checkout.", c: "text-brand-accent2 bg-brand-accent2/10 border-brand-accent2/30", d: "M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3zM9 12l2 2 4-4" },
];

const compare = [
  ["Show prices in local currency", "Yes", "Yes"],
  ["Settle in the buyer's real currency", "Display conversion", "Native: AED, SAR, KWD, QAR, BHD, OMR"],
  ["Payment methods per country", "Global rules", "List and order set per country"],
  ["Promo codes by currency or market", "Storewide", "Currency-locked, country-specific"],
  ["Verified COD with OTP", "Not included", "Included, with optional fee"],
  ["One-tap for returning buyers", "Not included", "Buyer network, 9 fields to 2"],
];

const steps = [
  { t: "Keep your Shopify store", b: "Install GulfCart on top. Theme, products and orders stay as they are.", c: "bg-brand-accent shadow-brand-accent/30" },
  { t: "Set rules per country", b: "Currency, payment methods, tax, shipping and promos for each market.", c: "bg-brand-accent2 shadow-brand-accent2/30" },
  { t: "Go live in a new market", b: "Open a new country without a rebuild or a second Shopify store.", c: "bg-brand-gold shadow-brand-gold/30" },
];

const faqs = [
  { q: "What is Shopify Markets?", a: "Shopify Markets is Shopify's feature for selling to different countries from one store, with country-specific domains, languages and pricing." },
  { q: "What are the limitations of Shopify Markets for Gulf merchants?", a: "Prices can display in a local currency without settling in it, and payment methods, COD verification and promotions are not tuned per Gulf country. GulfCart adds those on top of Shopify." },
  { q: "Is showing AED on Shopify the same as settling in AED?", a: "No. Display conversion shows a converted price, while settlement means the buyer is charged and you are paid in that currency. GulfCart settles in AED, SAR, KWD, QAR, BHD and OMR." },
  { q: "How do I sell in multiple GCC countries with one Shopify store?", a: "Keep one Shopify store and configure country rules in GulfCart: currency, payment methods, tax, shipping and promotions for each market." },
  { q: "How do I manage six GCC currencies on one Shopify store?", a: "GulfCart processes and settles in all six GCC currencies, so you manage one store instead of one per country." },
  { q: "How do I run country-specific promotions on Shopify?", a: "Lock a promo code to a currency or a market, such as a SAR-only discount or a launch offer just for Kuwait." },
];

/* ---------- small pieces ---------- */
const btn =
  "inline-flex items-center justify-center rounded-full bg-brand-accent px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-brand-accent/25 transition hover:-translate-y-0.5 hover:opacity-95";

const tones = ["blue", "green", "gold"] as const;

function GlowCard({ i = 0, children, className = "" }: { i?: number; children: React.ReactNode; className?: string }) {
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
      aria-label="GulfCart connects six GCC currencies, country promotions, payment methods and tax rules into one Shopify store"
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
          <div className="gc-float" style={{ "--dur": `${4 + (i % 4) * 0.7}s`, "--d": `-${n.delay * 1.5}s` } as React.CSSProperties}>
            <NetworkCard label={n.label} back={n.back} index={i} />
          </div>
        </div>
      ))}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 flex aspect-square w-[25%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-brand-accent/30 bg-white shadow-2xl shadow-brand-accent/30"
      >
        <span className="gc-pulse absolute inset-0 rounded-full border border-brand-accent/40" />
        <span className="font-display text-sm font-semibold sm:text-lg lg:text-xl">GulfCart</span>
        <span className="text-[9px] text-brand-accent sm:text-xs">GCC Markets</span>
      </div>
    </div>
  );
}

function Head({ pill, title, body }: { pill: string; title: string; body?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="pill border border-brand-accent2/20 font-medium">{pill}</span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-brand-muted sm:text-lg">{body}</p>}
    </div>
  );
}

function Split({
  pill, title, body, points, href, cta, flip, tone, children,
}: {
  pill: string; title: string; body: string; points: string[]; href: string; cta: string; flip?: boolean;
  tone: "blue" | "green" | "gold"; children: React.ReactNode;
}) {
  const t = {
    blue: { panel: "from-brand-accent/[0.10]", dot: "bg-brand-accent/10 text-brand-accent border-brand-accent/30" },
    green: { panel: "from-brand-accent2/[0.12]", dot: "bg-brand-accent2/10 text-brand-accent2 border-brand-accent2/30" },
    gold: { panel: "from-brand-gold/[0.14]", dot: "bg-brand-gold/10 text-brand-gold border-brand-gold/40" },
  }[tone];
  return (
    <section className="container-px py-12 sm:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={flip ? "lg:order-last" : ""}>
          <span className="pill border border-brand-accent2/20 font-medium">{pill}</span>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">{title}</h2>
          <p className="mt-4 text-brand-muted sm:text-lg">{body}</p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-brand-muted sm:text-base">
                <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${t.dot}`}>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8.5l3 3 7-7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {p}
              </li>
            ))}
          </ul>
          <Link href={href} className="mt-7 inline-block text-sm font-medium text-brand-accent hover:underline">{cta} →</Link>
        </div>
        <div className={`rounded-3xl border border-brand-border bg-gradient-to-br ${t.panel} via-white to-brand-surface p-4 shadow-xl sm:p-8`}>
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
        <div className="container-px py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[45fr_55fr] lg:gap-8">
            <div className="gc-in max-w-xl lg:max-w-none">
              <span className="pill border border-brand-accent2/20 font-medium">Shopify Markets for the GCC</span>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Shopify Markets, built out for the Gulf
              </h1>
              <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-brand-muted">
                Sell in the UAE, Saudi Arabia, Kuwait, Qatar, Bahrain and Oman from one Shopify store,
                with real local-currency settlement, country payment rules and country discounts.
              </p>
              <Link href={site.demoPath} className={`${btn} mt-9`}>Book a demo</Link>
            </div>
            <div className="gc-in min-w-0" style={{ "--d": "0.3s" } as React.CSSProperties}>
              <Network />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-brand-border bg-brand-surface">
        <div className="container-px grid gap-6 py-10 sm:grid-cols-3 sm:py-12">
          {stats.map((s, i) => (
            <GlowCard key={s.l} i={i}>
              <span className={`inline-block rounded-xl border px-4 py-2 font-display text-3xl font-semibold ${s.c}`}>{s.v}</span>
              <p className="mt-3 text-sm text-brand-muted">{s.l}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* GAPS */}
      <section className="container-px py-14 sm:py-20">
        <Head
          pill="Shopify Markets limitations"
          title="Where Shopify Markets falls short for Gulf merchants"
          body="Shopify Markets lets you sell to several countries from one store. For the Gulf, three gaps show up at checkout."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {gaps.map((l, i) => (
            <GlowCard key={l.t} i={i}>
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl border ${l.c}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={l.d} />
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{l.t}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-muted">{l.b}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* CURRENCY */}
      <Split
        tone="blue"
        pill="Shopify multi currency"
        title="Why showing AED on Shopify is not the same as settling in AED"
        body="Display conversion changes the number on the page. Settlement changes what the buyer is charged and what you receive. GulfCart settles in AED, SAR, KWD, QAR, BHD and OMR."
        points={["Native settlement in 6 GCC currencies", "No surprise conversion at payment", "Manage all six currencies from one store"]}
        href="/shopify-checkout"
        cta="See the full checkout"
      >
        <p className="mb-3 text-xs text-brand-muted">Example: same product, buyer in Dubai (illustrative)</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <GlowCard i={0}>
            <p className="text-xs text-brand-muted">Display conversion</p>
            <p className="mt-3 font-display text-3xl font-semibold">AED 199</p>
            <p className="mt-1 text-xs text-brand-muted">Charged in another currency</p>
          </GlowCard>
          <GlowCard i={1}>
            <p className="text-xs font-medium text-brand-accent2">Native settlement</p>
            <p className="mt-3 font-display text-3xl font-semibold">AED 199</p>
            <p className="mt-1 text-xs text-brand-muted">Charged and paid in AED</p>
          </GlowCard>
        </div>
      </Split>

      {/* EXPANSION */}
      <section className="container-px py-14 sm:py-20">
        <Head
          pill="GCC expansion"
          title="Expand from the UAE to Saudi Arabia without a second store"
          body="Open a new Gulf market by adding rules, not by rebuilding."
        />
        <div className="relative mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <GlowCard key={s.t} i={i} className="text-center">
              <span className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full font-display text-lg font-semibold text-white shadow-lg ${s.c}`}>
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{s.t}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-muted">{s.b}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* PROMOS */}
      <Split
        flip
        tone="green"
        pill="Country discounts"
        title="Run country-specific promotions on Shopify"
        body="Lock a promo code to a currency or a market instead of one blunt code that applies everywhere or nowhere."
        points={["Currency-locked discount codes", "Launch offers for one country", "No workaround apps required"]}
        href="/shopify-payment-methods"
        cta="Payment methods per country"
      >
        <p className="mb-3 text-xs text-brand-muted">Example codes (illustrative)</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <GlowCard i={1}>
            <p className="text-xs text-brand-muted">SAR-only</p>
            <p className="mt-2 font-display text-xl font-semibold">RIYADH10</p>
            <p className="mt-1 text-xs text-brand-muted">Works for buyers paying in SAR</p>
          </GlowCard>
          <GlowCard i={2}>
            <p className="text-xs text-brand-muted">Kuwait launch</p>
            <p className="mt-2 font-display text-xl font-semibold">KUWAIT15</p>
            <p className="mt-1 text-xs text-brand-muted">Works for buyers paying in KWD</p>
          </GlowCard>
        </div>
      </Split>

      {/* COMPARE */}
      <section className="container-px py-14 sm:py-20">
        <Head pill="Shopify Markets vs GulfCart" title="Shopify Markets, with the Gulf layer on top" body="GulfCart does not replace Shopify Markets. It adds what Gulf checkouts need." />
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-brand-border bg-white shadow-xl shadow-brand-accent/5">
          <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-brand-surface text-xs font-semibold sm:text-sm">
            <div className="p-3 sm:p-4" />
            <div className="p-3 text-brand-muted sm:p-4">Shopify Markets</div>
            <div className="p-3 text-brand-accent2 sm:p-4">With GulfCart</div>
          </div>
          {compare.map((r) => (
            <div key={r[0]} className="grid grid-cols-[1.1fr_1fr_1fr] border-t border-brand-border text-xs sm:text-sm">
              <div className="p-3 font-medium sm:p-4">{r[0]}</div>
              <div className="p-3 text-brand-muted sm:p-4">{r[1]}</div>
              <div className="bg-brand-accent2/[0.06] p-3 sm:p-4">{r[2]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COUNTRY LINKS */}
      <section className="container-px pb-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { h: "/shopify-checkout-uae", t: "UAE", b: "AED settlement, VAT, payment methods and COD." },
            { h: "/shopify-checkout-saudi-arabia", t: "Saudi Arabia", b: "SAR pricing, mada, Tabby, Tamara and COD." },
            { h: "/shopify-gcc", t: "Kuwait, Qatar, Bahrain, Oman", b: "Local currency and payments for the other GCC markets." },
          ].map((x, i) => (
            <Link key={x.h} href={x.h} className="block">
              <GlowCard i={i}>
                <h3 className="text-lg font-semibold tracking-tight">{x.t}</h3>
                <p className="mt-2 text-sm text-brand-muted">{x.b}</p>
                <span className="mt-4 inline-block text-sm font-medium text-brand-accent">Read more →</span>
              </GlowCard>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-px py-14 sm:py-20">
        <Head pill="FAQ" title="Shopify Markets for the GCC: common questions" />
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-brand-border bg-white px-5 py-4 shadow-sm open:border-brand-accent/40 open:shadow-lg open:shadow-brand-accent/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {f.q}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-surface text-brand-muted transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-brand-muted sm:text-base">{f.a}</p>
            </details>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            }),
          }}
        />
      </section>

      {/* FINAL CTA */}
      <section className="container-px pb-20 sm:pb-28">
        <div className="hero-glow rounded-3xl border border-brand-border bg-gradient-to-br from-brand-accent/[0.08] via-white to-brand-surface px-6 py-12 text-center sm:py-16">
          <h2 className="mx-auto max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Sell across the GCC from the store you already have
          </h2>
          <Link href={site.demoPath} className={`${btn} mt-8`}>Book a demo</Link>
          <p className="mt-6 text-sm text-brand-muted">
            Also see <Link href="/shopify-checkout" className="text-brand-accent hover:underline">Shopify checkout</Link> and{" "}
            <Link href="/shopify-payment-methods" className="text-brand-accent hover:underline">payment methods</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
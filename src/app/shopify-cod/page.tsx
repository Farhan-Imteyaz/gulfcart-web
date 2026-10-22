import { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import NetworkCard from "@/components/home/NetworkCard";
import NetworkConnections, { type NetworkNode } from "@/components/home/NetworkConnections";

export const metadata: Metadata = pageMetadata({
  title: "Shopify COD: Stop Fake Orders & Reduce RTO in UAE and Saudi Arabia",
  description:
    "Add OTP-verified cash on delivery to Shopify. GulfCart blocks fake COD orders before dispatch, adds a COD fee by country, and cuts return-to-origin (RTO) in the UAE and Saudi Arabia.",
  path: "/shopify-cod",
});

/* ---------- data ---------- */
const nodes: NetworkNode[] = [
  { id: "otp", label: "OTP verification", back: "Before dispatch", x: 30, y: 9, tier: "core", dur: 3.4, delay: 0.2 },
  { id: "fee", label: "COD fee", back: "Set by country", x: 70, y: 12, tier: "core", dur: 3.8, delay: 1.1 },
  { id: "fake", label: "Fake orders", back: "Filtered out", x: 27, y: 33, tier: "core", dur: 4.2, delay: 0.6 },
  { id: "rto", label: "RTO", back: "Fewer returns", x: 76, y: 52, tier: "core", dur: 3.6, delay: 1.7 },
  { id: "risk", label: "Buyer risk signals", back: "Checked at checkout", x: 27, y: 66, tier: "core", dur: 4, delay: 0.9 },
  { id: "ship", label: "Verified orders", back: "Ship with confidence", x: 56, y: 90, tier: "core", dur: 3.5, delay: 2.1 },
  { id: "uae", label: "UAE", back: "COD rules", x: 88, y: 26, tier: "extra", dur: 4.4, delay: 1.4 },
  { id: "ksa", label: "Saudi Arabia", back: "COD rules", x: 12, y: 50, tier: "extra", dur: 3.9, delay: 0.4 },
  { id: "pre", label: "Prepaid", back: "Tabby · Tamara · cards", x: 82, y: 82, tier: "extra", dur: 4.1, delay: 1.9 },
  { id: "shop", label: "Shopify", back: "Stays as it is", x: 42, y: 22, tier: "extra", dur: 3.7, delay: 0.8 },
];

const stats = [
  { v: "~40%", l: "fewer fake COD orders with OTP verification", c: "border-brand-accent2/30 bg-brand-accent2/10 text-brand-accent2", bar: "from-brand-accent2" },
  { v: "~30%", l: "of COD orders are returned to origin across the region", c: "border-brand-gold/40 bg-brand-gold/10 text-brand-gold", bar: "from-brand-gold" },
  { v: "OTP", l: "verified before the order reaches your fulfilment team", c: "border-brand-accent/30 bg-brand-accent/10 text-brand-accent", bar: "from-brand-accent" },
];

const costs = [
  { t: "Shipping paid both ways", b: "You pay the courier to deliver the parcel and again to bring it back.", c: "text-brand-gold bg-brand-gold/10 border-brand-gold/40", d: "M3 7h11v9H3zM14 10h4l3 3v3h-7M7 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" },
  { t: "Ad spend that never converts", b: "A fake order counts as a sale in your ads, so the algorithm learns from buyers who never existed.", c: "text-brand-accent bg-brand-accent/10 border-brand-accent/30", d: "M4 19V9m6 10V5m6 14v-7m4 7H2" },
  { t: "Stock stuck in transit", b: "Inventory is locked up for days, then comes back opened, delayed or damaged.", c: "text-brand-accent2 bg-brand-accent2/10 border-brand-accent2/30", d: "M21 8l-9-5-9 5v8l9 5 9-5V8zM3 8l9 5 9-5M12 13v8" },
  { t: "Team time on failed orders", b: "Calling, rebooking and reconciling orders that were never going to be accepted.", c: "text-brand-gold bg-brand-gold/10 border-brand-gold/40", d: "M12 7v5l3 2M12 3a9 9 0 100 18 9 9 0 000-18z" },
];

const steps = [
  { t: "Buyer picks COD", b: "At checkout, risk signals on the buyer and order are checked.", c: "bg-brand-accent shadow-brand-accent/30" },
  { t: "OTP is sent", b: "The buyer confirms their number with a one-time code before the order goes through.", c: "bg-brand-accent2 shadow-brand-accent2/30" },
  { t: "Verified order ships", b: "Only confirmed orders reach fulfilment, so fewer parcels come back.", c: "bg-brand-gold shadow-brand-gold/30" },
];

const compare = [
  ["Order confirmation", "COD order is placed as is", "OTP verification before dispatch"],
  ["Fake and mistyped orders", "Reach fulfilment", "Filtered at checkout"],
  ["COD fee", "One global setup", "Set per country"],
  ["Buyer risk signals", "Not used", "Checked at checkout"],
  ["Where it runs", "Shopify checkout", "On top of your Shopify store"],
];

const faqs = [
  { q: "How do I add cash on delivery to Shopify in the UAE or Saudi Arabia?", a: "You can offer COD as a payment method on Shopify, then add GulfCart on top to verify each COD order with an OTP and apply a COD fee by country." },
  { q: "How do I stop fake COD orders on Shopify?", a: "Verify the buyer before the order ships. GulfCart sends a one-time code at checkout and checks buyer risk signals, so fake and mistyped orders are filtered out before dispatch." },
  { q: "Does OTP verification reduce COD fraud?", a: "Yes. It confirms that the phone number is real and that the buyer is committed to the order. GulfCart merchants see about 40% fewer fake COD orders." },
  { q: "What is RTO and why does it cost so much?", a: "RTO means return to origin: a parcel that is delivered, refused and shipped back. You pay shipping both ways, lose the ad spend, and tie up stock. Regionally, about 30% of COD orders are returned." },
  { q: "Should I charge a COD fee on Shopify?", a: "A small COD handling fee covers the extra cost of cash orders and nudges buyers toward prepaid options. GulfCart lets you set the fee by country." },
  { q: "How do I reduce RTO on Shopify in the UAE and Saudi Arabia?", a: "Verify COD orders before dispatch, charge a COD fee where it makes sense, and offer prepaid options such as Tabby, Tamara and cards." },
];

/* ---------- small pieces ---------- */
const btn =
  "inline-flex items-center justify-center rounded-full bg-brand-accent px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-brand-accent/25 transition hover:-translate-y-0.5 hover:opacity-95";

const tones = ["blue", "green", "gold"] as const;

function GlowCard({ i = 0, children, className = "" }: { i?: number; children: React.ReactNode; className?: string }) {
  return (
    <div className={`gc-glow gc-glow-${tones[i % 3]} ${className}`}>
      <div className="h-full rounded-2xl bg-white p-6">{children}</div>
    </div>
  );
}

function Network() {
  return (
    <div
      role="img"
      aria-label="GulfCart verifies cash on delivery orders with OTP and risk signals before dispatch, filtering fake orders and reducing RTO"
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
        <span className="text-[9px] text-brand-accent sm:text-xs">Verified COD</span>
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
              <span className="pill border border-brand-accent2/20 font-medium">Shopify COD</span>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Shopify COD that gets delivered, not returned
              </h1>
              <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-brand-muted">
                GulfCart adds OTP verification, a COD fee by country and buyer risk checks to cash on
                delivery, so fake orders are stopped before dispatch and fewer parcels come back (RTO)
                in the UAE and Saudi Arabia.
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
        <div className="container-px grid gap-3 py-8 sm:grid-cols-3 sm:gap-4 sm:py-10">
          {stats.map((s) => (
            <div key={s.l} className="relative overflow-hidden rounded-2xl border border-brand-border bg-white p-5 shadow-sm sm:p-6">
              <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r to-transparent ${s.bar}`} />
              <span className={`inline-block rounded-xl border px-4 py-2 font-display text-3xl font-semibold ${s.c}`}>{s.v}</span>
              <p className="mt-3 text-sm text-brand-muted">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COST OF RTO */}
      <section className="container-px py-14 sm:py-20">
        <Head
          pill="What RTO really costs"
          title="COD returns cost more than the shipping label"
          body="Return to origin (RTO) is the parcel that gets refused or never answered, then comes back. Shipping is only the visible part of the loss."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {costs.map((l, i) => (
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

      {/* HOW IT WORKS */}
      <section className="container-px py-14 sm:py-20">
        <Head
          pill="OTP verification"
          title="Verify the order before it ships, not after it fails"
          body="OTP verification filters out fake and mistyped cash-on-delivery orders before they reach your fulfilment team."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
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

      {/* FRAUD */}
      <Split
        tone="green"
        pill="COD fraud prevention"
        title="How to stop fake COD orders on Shopify"
        body="Fake orders, wrong numbers and prank orders are cheap to place and expensive to ship. GulfCart checks the buyer at checkout, so the order is real before it is packed."
        points={["OTP confirmation at checkout", "Buyer risk signals checked before the order is accepted", "Roughly 40% fewer fake COD orders"]}
        href="/shopify-checkout"
        cta="See the full checkout"
      >
        <p className="mb-3 text-xs text-brand-muted">Example: 100 incoming COD orders</p>
        <div className="space-y-4">
          <div>
            <div className="mb-1.5 flex justify-between gap-2 text-sm"><span className="text-brand-muted">Without verification</span><span className="font-display">All reach fulfilment</span></div>
            <div className="h-3 rounded-full bg-brand-bg2"><div className="h-full w-full rounded-full bg-brand-muted/50" /></div>
          </div>
          <div>
            <div className="mb-1.5 flex justify-between gap-2 text-sm"><span>With GulfCart</span><span className="font-display text-brand-accent2">Only verified orders ship</span></div>
            <div className="flex h-3 overflow-hidden rounded-full bg-brand-bg2">
              <div className="h-full bg-brand-accent2" style={{ width: "82%" }} />
              <div className="h-full bg-brand-accent2/25" style={{ width: "18%" }} />
            </div>
            <p className="mt-2 text-xs text-brand-muted">Shaded part: orders filtered out before dispatch (illustrative)</p>
          </div>
        </div>
      </Split>

      {/* FEE */}
      <Split
        flip
        tone="gold"
        pill="COD fee"
        title="Should you charge a COD fee? Set it by country"
        body="Cash orders cost more to handle and return more often. A small COD handling fee covers that cost and nudges buyers toward prepaid. You choose where it applies."
        points={["Optional COD handling fee per country", "Shown clearly at checkout", "Prepaid options such as Tabby and Tamara stay one tap away"]}
        href="/shopify-payment-methods"
        cta="Explore payment methods"
      >
        <p className="mb-3 text-xs text-brand-muted">Example checkout, amounts are illustrative</p>
        <div className="rounded-2xl border border-brand-border bg-white p-5">
          <div className="flex justify-between text-sm"><span className="text-brand-muted">Subtotal</span><span>AED 199.00</span></div>
          <div className="mt-2 flex justify-between text-sm"><span className="text-brand-muted">COD handling fee</span><span className="font-medium text-brand-gold">+ AED 10.00</span></div>
          <div className="mt-3 flex justify-between border-t border-brand-border pt-3 font-semibold"><span>Total</span><span>AED 209.00</span></div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-brand-gold/40 bg-brand-gold/10 px-3 py-2 text-center text-xs font-medium">Cash on delivery</div>
            <div className="rounded-lg bg-brand-accent px-3 py-2 text-center text-xs font-medium text-white shadow-lg shadow-brand-accent/30">Pay now, no fee</div>
          </div>
        </div>
      </Split>

      {/* COMPARE */}
      <section className="container-px py-14 sm:py-20">
        <Head pill="Shopify COD vs GulfCart" title="Shopify COD, with verification on top" body="GulfCart does not replace your store. It adds the verification layer to the cash on delivery you already offer." />
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-brand-border bg-white shadow-xl shadow-brand-accent/5">
          <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-brand-surface text-xs font-semibold sm:text-sm">
            <div className="p-3 sm:p-4" />
            <div className="p-3 text-brand-muted sm:p-4">Shopify COD</div>
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
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { h: "/shopify-checkout-uae", t: "COD in the UAE", b: "Local currency, payment methods, VAT and COD for UAE stores." },
            { h: "/shopify-checkout-saudi-arabia", t: "COD in Saudi Arabia", b: "mada, SAR pricing, Tabby, Tamara and COD for Saudi buyers." },
          ].map((x, i) => (
            <Link key={x.h} href={x.h} className="block">
              <GlowCard i={i + 1}>
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
        <Head pill="FAQ" title="Shopify COD: common questions" />
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
            Stop paying for COD orders that never arrive
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
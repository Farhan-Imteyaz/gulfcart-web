import { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import NetworkCard from "@/components/home/NetworkCard";
import NetworkConnections, { type NetworkNode } from "@/components/home/NetworkConnections";

export const metadata: Metadata = pageMetadata({
  title: "Shopify Checkout UAE: AED Payments, Payment Gateway, COD & VAT",
  description:
    "Optimize your Shopify checkout in the UAE. Accept AED payments, add Apple Pay, Tabby, Tamara and verified COD, handle VAT, and convert more Dubai and UAE buyers with GulfCart.",
  path: "/shopify-checkout-uae",
});

/* ---------- data ---------- */
const nodes: NetworkNode[] = [
  { id: "aed", label: "AED", back: "Settles in AED", x: 30, y: 9, tier: "core", dur: 3.4, delay: 0.2 },
  { id: "apple", label: "Apple Pay", back: "Fast mobile pay", x: 70, y: 12, tier: "core", dur: 3.8, delay: 1.1 },
  { id: "tabby", label: "Tabby", back: "Buy now, pay later", x: 27, y: 33, tier: "core", dur: 4.2, delay: 0.6 },
  { id: "tamara", label: "Tamara", back: "Buy now, pay later", x: 76, y: 52, tier: "core", dur: 3.6, delay: 1.7 },
  { id: "cod", label: "OTP COD", back: "Fake orders blocked", x: 27, y: 66, tier: "core", dur: 4, delay: 0.9 },
  { id: "tap", label: "One-tap", back: "9 fields → 2", x: 56, y: 90, tier: "core", dur: 3.5, delay: 2.1 },
  { id: "vat", label: "VAT", back: "Country-aware", x: 88, y: 26, tier: "extra", dur: 4.4, delay: 1.4 },
  { id: "cards", label: "Visa · Mastercard", back: "Cards", x: 12, y: 50, tier: "extra", dur: 3.9, delay: 0.4 },
  { id: "ship", label: "UAE shipping", back: "Set by country", x: 82, y: 82, tier: "extra", dur: 4.1, delay: 1.9 },
  { id: "shop", label: "Shopify", back: "Stays as it is", x: 42, y: 22, tier: "extra", dur: 3.7, delay: 0.8 },
];

const stats = [
  { v: "AED", l: "native settlement, not just a display price", c: "border-brand-accent/30 bg-brand-accent/10 text-brand-accent" },
  { v: "9→2", l: "checkout fields for a recognized returning buyer", c: "border-brand-accent2/30 bg-brand-accent2/10 text-brand-accent2" },
  { v: "~40%", l: "fewer fake COD orders with OTP verification", c: "border-brand-gold/40 bg-brand-gold/10 text-brand-gold" },
];

const leaks = [
  { t: "Prices not settled in AED", b: "A converted price at the last step makes UAE buyers hesitate. Real AED settlement removes the surprise.", c: "text-brand-accent bg-brand-accent/10 border-brand-accent/30", d: "M8 6h8a4 4 0 010 8H8m0-8v14m0-6h7M5 10h5M5 14h5" },
  { t: "Payment methods that don't match UAE habits", b: "UAE buyers expect Apple Pay, cards, Tabby or Tamara, and COD. Missing one costs the order.", c: "text-brand-gold bg-brand-gold/10 border-brand-gold/40", d: "M3 6h18v12H3zM3 10h18M7 15h4" },
  { t: "COD orders that never arrive", b: "Fake and mistyped cash-on-delivery orders turn into RTO, with shipping paid both ways.", c: "text-brand-accent2 bg-brand-accent2/10 border-brand-accent2/30", d: "M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3zM9 12l2 2 4-4" },
];

const methods = [
  { t: "Apple Pay", b: "One-tap payment on supported devices, strong for mobile buyers." },
  { t: "Cards", b: "Visa and Mastercard, shown first or last as you choose." },
  { t: "Tabby and Tamara", b: "Buy now, pay later for higher-value baskets. Run one or both." },
  { t: "Cash on delivery", b: "Kept for buyers who want it, with OTP verification and an optional fee." },
];

const faqs = [
  { q: "How do I sell on Shopify in the UAE and actually convert?", a: "Show prices and settle in AED, offer the payment methods UAE buyers expect, reduce checkout fields for returning buyers, and verify COD orders. GulfCart adds these on top of your Shopify store." },
  { q: "How do I accept AED payments on Shopify?", a: "GulfCart processes and settles in AED, so buyers are charged in dirhams rather than seeing a converted display price." },
  { q: "What is the best Shopify payment gateway in the UAE?", a: "It depends on your methods and volume. GulfCart works as the Gulf checkout layer on top of Shopify, with Apple Pay, cards, Tabby, Tamara and COD set for the UAE." },
  { q: "How do I add COD to Shopify in the UAE?", a: "Offer COD as a method, then use GulfCart to verify each order with an OTP and add a COD fee. This stops fake orders and cuts RTO." },
  { q: "What payment methods do UAE ecommerce customers prefer?", a: "Most stores offer cards, Apple Pay, a BNPL option such as Tabby or Tamara, and COD. The right order is set per country in GulfCart." },
  { q: "How does VAT work at checkout on Shopify in the UAE?", a: "GulfCart supports country-aware tax at checkout. Confirm the VAT rate and registration rules for your business with your accountant." },
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
      aria-label="GulfCart connects AED settlement, Apple Pay, Tabby, Tamara, OTP-verified COD and VAT into one UAE Shopify checkout"
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
        <span className="text-[9px] text-brand-accent sm:text-xs">UAE</span>
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

const Bar = ({ w, on }: { w: string; on?: boolean }) => (
  <div className={`h-8 rounded-lg border ${on ? "border-brand-accent2/40 bg-brand-accent2/15" : "border-brand-border bg-white"}`} style={{ width: w }} />
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
              <span className="pill border border-brand-accent2/20 font-medium">Shopify checkout UAE</span>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Shopify checkout built for UAE buyers
              </h1>
              <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-brand-muted">
                Accept AED payments, offer Apple Pay, Tabby, Tamara and verified COD, and make checkout
                faster for returning buyers, on the Shopify store you already run in Dubai or the UAE.
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

      {/* PROBLEM */}
      <section className="container-px py-14 sm:py-20">
        <Head
          pill="Why UAE stores lose orders"
          title="Your UAE traffic is fine. Your checkout leaks."
          body="Buyers in Dubai and across the UAE add to cart, then drop off at the last step. Three fixable things cause most of it."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {leaks.map((l, i) => (
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

      {/* AED */}
      <Split
        tone="blue"
        pill="Accept AED payments"
        title="How to accept AED payments on Shopify"
        body="GulfCart processes and settles in AED. UAE buyers pay the dirham price they were shown, with no converted estimate at the last step."
        points={["Native AED settlement", "No surprise conversion at payment", "Builds trust at the final step"]}
        href="/shopify-markets"
        cta="Display vs settlement explained"
      >
        <p className="mb-3 text-xs text-brand-muted">Example: same product, buyer in Dubai (illustrative)</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <GlowCard i={0}>
            <p className="text-xs text-brand-muted">Standard Shopify</p>
            <p className="mt-3 font-display text-3xl font-semibold">$54.43</p>
            <p className="mt-1 text-xs text-brand-muted">Converted estimate</p>
          </GlowCard>
          <GlowCard i={1}>
            <p className="text-xs font-medium text-brand-accent2">With GulfCart</p>
            <p className="mt-3 font-display text-3xl font-semibold">AED 199.00</p>
            <p className="mt-1 text-xs text-brand-muted">Settled in AED</p>
          </GlowCard>
        </div>
      </Split>

      {/* GATEWAY / METHODS */}
      <section className="container-px py-14 sm:py-20">
        <Head
          pill="Shopify payment gateway UAE"
          title="The payment methods UAE buyers expect"
          body="Set the list and its order for the UAE, separate from your other markets."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {methods.map((m, i) => (
            <GlowCard key={m.t} i={i}>
              <h3 className="text-xl font-semibold tracking-tight">{m.t}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-muted">{m.b}</p>
            </GlowCard>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-brand-muted">
          Full detail on <Link href="/shopify-payment-methods" className="text-brand-accent hover:underline">Tabby, Tamara and per-country payment methods</Link>.
        </p>
      </section>

      {/* ONE TAP */}
      <Split
        flip
        tone="green"
        pill="Checkout conversion"
        title="Shopify checkout optimization for UAE customers"
        body="Returning buyers should not retype their address and card. GulfCart's buyer network pre-fills their details, so checkout takes about 23 seconds."
        points={["Fields drop from 9 to 2 for known buyers", "Address and card pre-filled", "Faster on every device"]}
        href="/shopify-checkout"
        cta="See the full checkout"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <GlowCard i={2}>
            <p className="mb-3 text-xs text-brand-muted">Standard · 9 fields</p>
            <div className="space-y-1.5">{Array.from({ length: 9 }).map((_, i) => <Bar key={i} w={i % 3 === 0 ? "100%" : "82%"} />)}</div>
          </GlowCard>
          <GlowCard i={1}>
            <p className="mb-3 text-xs font-medium text-brand-accent2">With GulfCart · 2 fields</p>
            <div className="space-y-1.5"><Bar w="100%" on /><Bar w="100%" on /></div>
            <div className="mt-4 rounded-lg bg-brand-accent px-4 py-3 text-center text-sm font-medium text-white shadow-lg shadow-brand-accent/30">Pay now</div>
          </GlowCard>
        </div>
      </Split>

      {/* COD */}
      <Split
        tone="gold"
        pill="COD in the UAE"
        title="How to add COD to Shopify in the UAE and cut RTO"
        body="Keep cash on delivery, but verify the order first. GulfCart sends an OTP at checkout and can add a COD fee, so fake orders are stopped before dispatch."
        points={["OTP verification before dispatch", "Optional COD fee for the UAE", "Fewer failed deliveries and lower RTO"]}
        href="/shopify-cod"
        cta="How verified COD works"
      >
        <GlowCard i={2}>
          <div className="flex justify-between text-sm"><span className="text-brand-muted">Subtotal</span><span>AED 199.00</span></div>
          <div className="mt-2 flex justify-between text-sm"><span className="text-brand-muted">COD fee</span><span className="font-medium text-brand-gold">+ AED 10.00</span></div>
          <div className="mt-3 flex justify-between border-t border-brand-border pt-3 font-semibold"><span>Total</span><span>AED 209.00</span></div>
          <p className="mt-3 text-xs text-brand-muted">Illustrative amounts</p>
        </GlowCard>
      </Split>

      {/* VAT */}
      <section className="container-px py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <GlowCard i={0}>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Shopify VAT and checkout in the UAE</h2>
            <p className="mt-3 text-brand-muted">
              GulfCart supports country-aware tax, delivery rates and discounts, so UAE rules are set for the UAE rather than copied from another market.
            </p>
            <p className="mt-3 text-sm text-brand-muted">
              VAT rules depend on your business and registration. Confirm the details with your accountant.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* COUNTRY LINKS */}
      <section className="container-px pb-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { h: "/shopify-checkout-saudi-arabia", t: "Expanding to Saudi Arabia?", b: "Move from the UAE to Saudi without a second store, with SAR and mada." },
            { h: "/shopify-markets", t: "Selling in more GCC markets", b: "One Shopify store, six currencies, country rules." },
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
        <Head pill="FAQ" title="Shopify checkout in the UAE: common questions" />
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
            Convert more of your UAE traffic at checkout
          </h2>
          <Link href={site.demoPath} className={`${btn} mt-8`}>Book a demo</Link>
          <p className="mt-6 text-sm text-brand-muted">
            Also see <Link href="/shopify-checkout" className="text-brand-accent hover:underline">Shopify checkout</Link> and{" "}
            <Link href="/shopify-cod" className="text-brand-accent hover:underline">Shopify COD</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
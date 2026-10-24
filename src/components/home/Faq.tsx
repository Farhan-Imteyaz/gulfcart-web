const faqs = [
  {
    q: "Does GulfCart replace my Shopify checkout?",
    a: "No. GulfCart installs on top of Shopify — your theme, products, and orders stay exactly as they are.",
  },
  {
    q: "Which payment methods does GulfCart support in the Gulf?",
    a: "Tabby, Tamara, mada, Apple Pay, cards, and verified COD — set per country, in whatever order converts best.",
  },
  {
    q: "Does GulfCart settle in AED, SAR or other local currency?",
    a: "Yes. GulfCart settles natively in AED, SAR, KWD, QAR, BHD and OMR, not just a display conversion.",
  },
  {
    q: "How does GulfCart reduce COD RTO in the UAE and Saudi Arabia?",
    a: "OTP verification filters fake and mistyped COD orders before dispatch, and an optional COD fee changes buyer behaviour.",
  },
  {
    q: "Can I sell in multiple GCC countries from one Shopify store?",
    a: "Yes. Configure currency, payment methods, tax and shipping per country without a second Shopify store.",
  },
];

export default function Faq() {
  return (
    <section className="relative overflow-hidden container py-8 sm:py-10 md:py-12">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.4fr] md:gap-14 lg:gap-20">
        {/* Left — heading column */}
        <div className="md:sticky md:top-24 md:self-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-500/20 bg-brand-surface/70 px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-fg/80 mb-4 sm:mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--brand-accent)]" />
            FAQ
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-950 leading-tight">
            <span className="text-brand-gold">Questions merchants ask</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-fg/70 max-w-sm">
            Everything you need to know about running GulfCart on your Shopify
            store. Can&rsquo;t find what you&rsquo;re looking for? .
          </p>
        </div>

        {/* Right — accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group relative overflow-hidden rounded-2xl border border-gray-500/20/70 bg-white/60 backdrop-blur-sm transition-all duration-300 open:border-brand-accent2/40 open:bg-white open:shadow-[0_12px_32px_-20px_rgba(16,185,129,0.35)] hover:border-brand-accent2/30"
            >
              {/* Left accent bar (visible on open) */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-[3px] bg-accent2 opacity-0 transition-opacity duration-300 group-open:opacity-100"
              />

              <summary className="relative flex cursor-pointer list-none items-start gap-4 p-5 sm:p-6">
                {/* Number */}
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex-shrink-0 font-mono text-[11px] font-semibold tabular-nums text-brand-accent2/70 transition-colors duration-300 group-open:text-brand-accent2"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Question */}
                <span className="flex-1 text-sm sm:text-base font-medium leading-snug text-slate-900">
                  {f.q}
                </span>

                {/* Toggle icon */}
                <span
                  aria-hidden="true"
                  className="relative mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gray-500/20 bg-white/70 transition-all duration-300 group-open:rotate-45 group-open:border-brand-accent2/50 group-open:bg-accent2/10"
                >
                  <span className="absolute h-[1.5px] w-3 rounded-full bg-slate-500 transition-colors duration-300 group-open:bg-accent2" />
                  <span className="absolute h-3 w-[1.5px] rounded-full bg-slate-500 transition-colors duration-300 group-open:bg-accent2" />
                </span>
              </summary>

              {/* Answer */}
              <div className="relative grid grid-rows-[0fr] transition-all duration-300 ease-out group-open:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 pl-[3.5rem] pr-14 text-sm leading-6 text-fg/75 sm:px-6 sm:pb-6 sm:pl-[4rem]">
                    {f.a}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
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
  );
}

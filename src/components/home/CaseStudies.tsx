import { caseStudies } from "@/lib/content/home";

const themes = [
  {
    card: "hover:border-brand-accent/50 hover:shadow-brand-accent/15 from-brand-accent/[0.06]",
    badge: "border-brand-accent/30 bg-brand-accent/10 text-brand-accent",
    dot: "bg-brand-accent",
  },
  {
    card: "hover:border-brand-accent2/50 hover:shadow-brand-accent2/15 from-brand-accent2/[0.07]",
    badge: "border-brand-accent2/30 bg-brand-accent2/10 text-brand-accent2",
    dot: "bg-brand-accent2",
  },
  {
    card: "hover:border-brand-gold/60 hover:shadow-brand-gold/15 from-brand-gold/[0.09]",
    badge: "border-brand-gold/40 bg-brand-gold/10 text-brand-gold",
    dot: "bg-brand-gold",
  },
];

export default function CaseStudies() {
  return (
    <section className="container-px py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="pill border border-brand-accent2/20 font-medium">Results</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          What a fixed checkout looks like
        </h2>
        <p className="mt-3 text-xs text-brand-muted sm:text-sm">
          Illustrative examples based on typical GulfCart improvements — replace with real customer
          results as case studies land.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {caseStudies.map((c, i) => {
          const t = themes[i % themes.length];
          return (
            <article
              key={c.headline}
              className={`group flex flex-col rounded-2xl border border-brand-border bg-gradient-to-br to-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl sm:p-6 ${t.card} ${
                i === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className={`rounded-xl border px-4 py-2 font-display text-2xl font-semibold sm:text-3xl ${t.badge}`}>
                  {c.metric}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-white px-3 py-1 text-[11px] text-brand-muted">
                  <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />
                  {c.tag}
                </span>
              </div>

              <p className="mt-3 text-xs text-brand-muted">{c.metricLabel}</p>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-brand-text">{c.headline}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-muted">{c.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
import { howItWorks } from "@/lib/content/home";

export default function HowItWorks() {
  return (
    <section className="bg-brand-surface border-y border-gray-500/20">
      <div className="container py-16 sm:py-20 md:py-24">
        {/* Section heading — centered */}
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            Setup
          </span>

          <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-950 leading-tight">
            Go live in one afternoon,{" "}
            <span className="text-blue-400">not one quarter</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg leading-7 text-slate-600">
            Install the app, connect your store, and ship a Gulf-ready checkout
            in three simple steps.
          </p>
        </div>

        {/* Big card with steps stacked inside */}
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/60 px-6 py-10 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_50px_-30px_rgba(15,23,42,0.18)] sm:px-10 sm:py-12 md:px-14 md:py-14">
            {/* Soft emerald glow top */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(16,185,129,0.20), transparent 75%)",
              }}
            />

            {/* Subtle curved arc (bottom) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 90% 55% at 50% 115%, transparent 60%, rgba(15,23,42,0.06) 61%, transparent 62%)",
              }}
            />

            {/* Steps */}
            <div className="relative grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
              {howItWorks.map((step, i) => (
                <div
                  key={step.step}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step number */}
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-800 shadow-sm">
                    {step.step}
                  </span>

                  {/* Title */}
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
                    {step.title}
                  </h3>

                  {/* Body */}
                  <p className="mt-2.5 max-w-xs text-sm leading-6 text-slate-600">
                    {step.body}
                  </p>

                  {/* Connector between steps (desktop only) */}
                  {i < howItWorks.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute hidden md:block h-px w-12 lg:w-16 bg-gradient-to-r from-transparent via-slate-300 to-transparent"
                      style={{
                        top: "5.5rem",
                        left: `calc(${((i + 1) * 100) / howItWorks.length}% - 1.5rem)`,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

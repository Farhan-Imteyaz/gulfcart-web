import { integrations } from "@/lib/content/home";

export default function Integrations() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-px py-6 sm:py-8 md:py-10">
        <div className="mx-auto max-w-5xl">
          {/* Framed container with diagonal split */}
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_30px_60px_-40px_rgba(15,23,42,0.20)]">
            {/* Diagonal accent band */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rotate-45 bg-gradient-to-br from-emerald-400/10 via-teal-300/5 to-transparent blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-emerald-300/40 to-transparent"
            />

            <div className="relative grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center md:gap-12 md:p-10 lg:p-12">
              {/* Left — stacked heading */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-700/80">
                  {integrations.platform} · Integrations
                </p>

                <h2 className="mt-3 text-2xl sm:text-3xl md:text-[2rem] font-semibold tracking-tight text-slate-950 leading-[1.15]">
                  Runs on the stack
                  <br />
                  <span className="text-blue-400">
                    you&rsquo;re already using.
                  </span>
                </h2>

                <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
                  Your theme, products, and existing payment methods stay
                  untouched. GulfCart sits on top and just works.
                </p>
              </div>

              {/* Right — stacked method list */}
              <ul className="flex flex-col gap-2 md:min-w-[13rem]">
                {integrations.methods.map((m, i) => (
                  <li
                    key={m}
                    className="group flex items-center gap-3 rounded-xl border border-transparent bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 backdrop-blur-sm transition-all duration-300 hover:border-emerald-200 hover:bg-white hover:text-slate-950 hover:shadow-[0_8px_20px_-12px_rgba(16,185,129,0.35)]"
                  >
                    <span
                      className="font-mono text-[10px] font-semibold tabular-nums text-emerald-600/70 transition-colors duration-300 group-hover:text-emerald-600"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{m}</span>
                    <svg
                      className="h-3.5 w-3.5 text-emerald-500/0 transition-colors duration-300 group-hover:text-emerald-500"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.5 8h9M8.5 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
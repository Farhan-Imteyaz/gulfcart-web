import Link from "next/link";
import { site } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="container-px py-8 sm:py-10 md:py-12">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-800/60 bg-slate-950 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.6)]">
        {/* Emerald radial glow — bottom-left */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 h-[26rem] w-[26rem] rounded-full blur-3xl opacity-50"
          style={{
            background:
              "radial-gradient(closest-side, rgba(16,185,129,0.55), transparent 70%)",
          }}
        />
        {/* Teal glow — top-right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-24 h-[24rem] w-[24rem] rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, rgba(45,212,191,0.45), transparent 70%)",
          }}
        />

        {/* Faint grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
          }}
        />

        <div className="relative grid gap-6 p-8 sm:p-10 md:grid-cols-[1.4fr_auto] md:items-center md:gap-10 md:p-12 lg:p-14">
          {/* Left — copy */}
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Ready when you are
            </span>

            <h2 className="mt-5 text-2xl sm:text-3xl md:text-[2.25rem] md:leading-[1.15] font-semibold tracking-tight text-white">
              See what a{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
                Gulf-built checkout
              </span>{" "}
              does for your store.
            </h2>

            <p className="mt-4 mx-auto max-w-lg text-sm sm:text-base leading-6 text-slate-400 md:mx-0">
              Book a 20-minute demo and we&rsquo;ll walk through currency, COD
              verification, and payment methods for your exact markets.
            </p>
          </div>

          {/* Right — CTA */}
          <div className="flex justify-center md:justify-end">
            <Link
              href={site.demoPath}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <span
                aria-hidden="true"
                className="cta-sweep pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-slate-900/15 to-transparent"
                style={{
                  animation: "cta-sweep 2.4s linear infinite",
                }}
              />
              <span className="relative z-10">Book a demo</span>
              <svg
                className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3.5 8h9M8.5 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom hairline */}
        <span
          aria-hidden="true"
          className="absolute inset-x-12 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"
        />
      </div>

      {/* Sweep keyframe */}
      <style>{`
        @keyframes cta-sweep {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(400%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .cta-sweep {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
import { stats } from "@/lib/content/home";

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-gray-500/20/60 bg-brand-surface">
      {/* Soft ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.22), transparent 70%)",
        }}
      />

      <div className="container mx-auto relative py-3.5 md:py-4">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="
                group
                relative
                min-h-[76px]
                overflow-hidden
                rounded-lg
                border
                border-gray-500/20/60
                bg-white/[0.45]
                px-3
                py-2.5
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-brand-accent2/40
                hover:bg-white/60
                hover:shadow-[0_8px_24px_-14px_rgba(16,185,129,0.35)]
              "
            >
              {/* Diagonal light sweep */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -inset-y-2
                  -left-1/3
                  z-20
                  w-[10%]
                  -skew-x-[18deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/50
                  to-transparent
                  animate-[statsSweep_1s_ease-in-out_infinite]
                "
              />

              {/* Top green highlight */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  left-3
                  right-3
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-brand-accent2/50
                  via-brand-accent2/10
                  to-transparent
                  opacity-60
                "
              />

              {/* Content */}
              <div className="relative z-10 flex items-center gap-3">
                {/* Value */}
                <p
                  className="
                    shrink-0
                    font-display
                    text-xl
                    font-medium
                    leading-none
                    tracking-tight
                    bg-gradient-to-br
                    from-brand-accent2
                    via-emerald-500
                    to-emerald-700
                    bg-clip-text
                    text-transparent
                    sm:text-2xl
                  "
                >
                  {s.value}
                </p>

                {/* Divider */}
                <span
                  aria-hidden="true"
                  className="h-6 w-px shrink-0 bg-brand-border/70"
                />

                {/* Label */}
                <p
                  className="
                    min-w-0
                    text-[10px]
                    font-medium
                    leading-[1.35]
                    tracking-wide
                    text-fg/65
                    sm:text-[11px]
                  "
                >
                  {s.label}
                </p>
              </div>

              {/* Bottom accent */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  bottom-0
                  left-3
                  h-[2px]
                  w-5
                  rounded-full
                  bg-accent2/50
                  transition-all
                  duration-300
                  group-hover:w-8
                  group-hover:bg-accent2
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* Local animation — no globals.css required */}
      <style>{`
        @keyframes statsSweep {
          0% {
            transform: translateX(-350%) skewX(-18deg);
            opacity: 0;
          }

          12% {
            opacity: 0.7;
          }

          38% {
            opacity: 0.7;
          }

          50% {
            transform: translateX(1200%) skewX(-18deg);
            opacity: 0;
          }

          100% {
            transform: translateX(1200%) skewX(-18deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

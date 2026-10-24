import Image from "next/image";

export default function GulfMarket() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(16,185,129,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="container py-16 sm:py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
          {/* Left — image */}
          <div className="w-full order-2 md:order-1 md:justify-self-start">
            <div className="relative mx-auto w-full max-w-md sm:max-w-lg md:max-w-none">
              {/* Soft glow behind image */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-60"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(16,185,129,0.28), transparent 75%)",
                }}
              />
              <Image
                src="/heroimg/gulfmarket.jpeg"
                alt="GulfCart checkout map across Saudi Arabia, UAE, Kuwait, Bahrain, Qatar and Oman"
                width={1200}
                height={1500}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 45vw"
                className="h-auto w-full rounded-3xl border border-slate-200/80 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.35),0_10px_40px_-20px_rgba(15,23,42,0.15)]"
              />
            </div>
          </div>

          {/* Right — heading */}
          <div className="max-w-xl order-1 md:order-2 md:justify-self-end">
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] md:leading-[1.1] font-semibold tracking-tight text-slate-950">
              One checkout for{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                every GCC market
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

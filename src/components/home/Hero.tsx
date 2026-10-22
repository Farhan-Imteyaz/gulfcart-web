import Link from "next/link";
import { site } from "@/lib/site";
import HeroNetwork from "./HeroNetwork";

const d = (s: number) => ({ "--d": `${s}s` } as React.CSSProperties);

export default function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden">
      <div className="container-px py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[45fr_55fr] lg:gap-8">
          <div className="max-w-xl lg:max-w-none">
            <span className="pill gc-in border border-brand-accent2/20 font-medium" style={d(0)}>
              Built for UAE, Saudi Arabia & the GCC
            </span>
           <h1
  className="gc-in mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-brand-text sm:text-5xl lg:text-6xl xl:text-[4.5rem]"
  style={d(0.1)}
>
  Shopify checkout{" "}
  <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
    built for the Gulf
  </span>
</h1>

            <p className="gc-in mt-6 max-w-[600px] text-lg leading-relaxed text-brand-muted lg:text-xl" style={d(0.2)}>
              Native AED, SAR, KWD, QAR, BHD & OMR settlement, OTP-verified COD, one-tap
              returning buyers, and Tabby/Tamara — on the Shopify store you already run.
            </p>
            <div className="gc-in mt-9" style={d(0.3)}>
              <Link
                href={site.demoPath}
                className="inline-flex items-center justify-center rounded-full bg-brand-accent px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-brand-accent/25 transition duration-200 hover:-translate-y-0.5 hover:opacity-95"
              >
                Book a demo
              </Link>
            </div>
            <p className="gc-in mt-3 pt-2 text-xs text-brand-muted" style={d(0.4)}>
  Trusted by 500+ brands & agencies across the GCC
</p>

          </div>

          <div className="gc-in min-w-0" style={d(0.5)}>
            <HeroNetwork />
          </div>
        </div>
      </div>
    </section>
  );
}
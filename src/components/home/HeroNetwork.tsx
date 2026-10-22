import NetworkCard from "./NetworkCard";
import NetworkConnections, { type NetworkNode } from "./NetworkConnections";

const nodes: NetworkNode[] = [
  { id: "aed", label: "AED", back: "Settles in AED", x: 30, y: 9, tier: "core", dur: 3.4, delay: 0.2 },
  { id: "sar", label: "SAR", back: "Settles in SAR", x: 70, y: 12, tier: "core", dur: 3.8, delay: 1.1 },
  { id: "returning", label: "Returning Buyers", back: "9 fields → 2", x: 27, y: 33, tier: "core", dur: 4.2, delay: 0.6 },
  { id: "tabby", label: "Tabby", back: "Per-country BNPL", x: 76, y: 52, tier: "core", dur: 3.6, delay: 1.7 },
  { id: "otp", label: "OTP COD", back: "Fake orders blocked", x: 27, y: 66, tier: "core", dur: 4, delay: 0.9 },
  { id: "tamara", label: "Tamara", back: "Per-country BNPL", x: 56, y: 90, tier: "core", dur: 3.5, delay: 2.1 },
  { id: "bhd", label: "BHD", back: "Settles in BHD", x: 41, y: 22, tier: "extra", dur: 4.4, delay: 1.4 },
  { id: "kwd", label: "KWD", back: "Settles in KWD", x: 90, y: 26, tier: "extra", dur: 3.9, delay: 0.4 },
  { id: "qar", label: "QAR", back: "Settles in QAR", x: 22, y: 86, tier: "extra", dur: 4.1, delay: 1.9 },
  { id: "omr", label: "OMR", back: "Settles in OMR", x: 80, y: 82, tier: "extra", dur: 3.7, delay: 0.8 },
];

export default function HeroNetwork() {
  return (
    <div
      role="img"
      aria-label="GulfCart connects local currencies, OTP-verified COD, Tabby, Tamara and returning buyers into one checkout"
      className="relative mx-auto aspect-square w-full max-w-[680px] sm:aspect-[6/5]"
    >
      <NetworkConnections nodes={nodes} />

      {nodes.map((n, i) => (
        <div
          key={n.id}
          aria-hidden="true"
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <div
            className="gc-float"
            style={{ "--dur": `${4 + (i % 4) * 0.7}s`, "--d": `-${n.delay * 1.5}s` } as React.CSSProperties}
          >
            <NetworkCard label={n.label} back={n.back} index={i} />
          </div>
        </div>
      ))}

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 flex aspect-square w-[25%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-brand-accent/30 bg-white shadow-2xl shadow-brand-accent/30"
      >
        <span className="gc-pulse absolute inset-0 rounded-full border border-brand-accent/40" />
        <span className="font-display text-sm font-semibold text-brand-text sm:text-lg lg:text-xl">GulfCart</span>
        <span className="text-[9px] text-brand-accent sm:text-xs">Checkout</span>
      </div>
    </div>
  );
}
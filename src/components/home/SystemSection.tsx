import SystemCard, { type SystemNode } from "./SystemCard";
import SystemConnections from "./SystemConnections";

const inputs: SystemNode[] = [
  { id: "shopify", tag: "SH", title: "Shopify store", sub: "Your existing store" },
  { id: "currency", tag: "FX", title: "Gulf currencies", sub: "AED · SAR · KWD · QAR · BHD · OMR" },
  { id: "payments", tag: "PAY", title: "Payment methods", sub: "Tabby · Tamara · mada · Apple Pay" },
  { id: "cod", tag: "COD", title: "COD orders", sub: "Cash on delivery" },
];

const outputs: SystemNode[] = [
  { id: "settle", tag: "6", title: "Native settlement", sub: "Real local currency, not display" },
  { id: "otp", tag: "OTP", title: "Verified COD", sub: "Fewer fake orders and RTO" },
  { id: "tap", tag: "1×", title: "One-tap checkout", sub: "For returning buyers" },
  { id: "rules", tag: "GCC", title: "Country rules", sub: "Payments, tax, shipping, promos" },
];

function Hub({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl border border-brand-accent/30 bg-gradient-to-br from-white via-white to-brand-accent/10 px-4 py-6 text-center shadow-2xl shadow-brand-accent/20 ${className}`}
    >
      <span className="text-[11px] font-medium text-brand-accent">Gulf checkout layer</span>
      <span className="mt-1 font-display text-2xl font-semibold text-brand-text sm:text-3xl">GulfCart</span>
      <span className="mt-2 text-xs text-brand-muted">Currency · Payments · COD</span>
    </div>
  );
}

function Flow() {
  return (
    <svg viewBox="0 0 2 48" fill="none" aria-hidden="true" className="mx-auto my-1 h-12 w-[2px]">
      <path d="M1 0V48" pathLength={100} className="stroke-brand-accent/25" strokeWidth="2" />
      <path d="M1 0V48" pathLength={100} className="gc-signal stroke-brand-accent" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const Col = ({ nodes, variant }: { nodes: SystemNode[]; variant: "input" | "output" }) => (
  <div className="relative z-10 flex h-full flex-col justify-between">
    {nodes.map((n) => (
      <div key={n.id} className="h-[19%]">
        <SystemCard node={n} variant={variant} />
      </div>
    ))}
  </div>
);

function Curves({ from, to, flip = false }: { from: number[]; to: number[]; flip?: boolean }) {
  const paths = from.map((x, i) =>
    flip
      ? `M${to[i]} 0 C${to[i]} 40 ${x} 30 ${x} 70`
      : `M${x} 0 C${x} 40 ${to[i]} 30 ${to[i]} 70`
  );
  return (
    <svg viewBox="0 0 300 70" preserveAspectRatio="none" fill="none" aria-hidden="true" className="h-14 w-full">
      {paths.map((d, i) => (
        <g key={i}>
          <path d={d} className="stroke-brand-accent/25" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
          <path
            d={d}
            pathLength={100}
            className="gc-signal stroke-brand-accent"
            strokeWidth="2"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={{ "--dur": `${3 + i * 0.4}s`, "--d": `-${i * 0.8}s` } as React.CSSProperties}
          />
        </g>
      ))}
    </svg>
  );
}

export default function SystemSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="pill">One checkout layer</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Everything a Gulf checkout needs, in one place
          </h2>
          <p className="mt-4 text-brand-muted sm:text-lg">
            GulfCart takes your Shopify store, local currencies, payment methods and COD orders, and turns
            them into one verified, local checkout.
          </p>
        </div>

        {/* Desktop */}
        <div className="relative mx-auto mt-14 hidden aspect-[11/4] w-full max-w-[1100px] grid-cols-[24%_1fr_24%] grid-rows-1 lg:grid">
          <SystemConnections />
          <Col nodes={inputs} variant="input" />
          <div className="relative z-10 flex items-center justify-center">
            <Hub className="h-[52%] w-[54%]" />
          </div>
          <Col nodes={outputs} variant="output" />
        </div>

        {/* Tablet + mobile */}
<div className="mx-auto mt-10 max-w-md lg:hidden">
  <div className="grid grid-cols-3 gap-2">
    {inputs.slice(0, 3).map((n) => (
      <div
        key={n.id}
        className="flex flex-col items-center rounded-xl border border-brand-accent/20 bg-gradient-to-br from-brand-accent/[0.08] via-white to-brand-accent/[0.03] px-1.5 py-3 text-center shadow-lg shadow-brand-accent/10"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-accent text-[10px] font-semibold text-white shadow-md shadow-brand-accent/30">
          {n.tag}
        </span>
        <span className="mt-2 text-xs font-semibold text-brand-text">{n.title}</span>
        <span className="mt-0.5 text-[10px] leading-tight text-brand-muted">{n.sub}</span>
      </div>
    ))}
  </div>

  <Curves from={[50, 150, 250]} to={[105, 150, 195]} />
  <Hub className="mx-auto w-[80%]" />
  <Curves from={[37.5, 112.5, 187.5, 262.5]} to={[100, 133, 167, 200]} flip />

  <div className="grid grid-cols-4 gap-2">
    {outputs.map((n) => (
      <div
        key={n.id}
        className="flex flex-col items-center rounded-xl border border-brand-accent2/25 bg-gradient-to-br from-brand-accent2/[0.10] via-white to-brand-accent2/[0.03] px-1 py-3 text-center shadow-lg shadow-brand-accent2/10"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-accent2 text-[10px] font-semibold text-white shadow-md shadow-brand-accent2/30">
          {n.tag}
        </span>
        <span className="mt-2 text-[11px] font-semibold leading-tight text-brand-text">{n.title}</span>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}
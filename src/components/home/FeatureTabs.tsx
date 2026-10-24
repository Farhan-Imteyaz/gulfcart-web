"use client";

import { useState } from "react";
import { featureTabs } from "@/lib/content/home";

function TabIcon({ id }: { id: string }) {
  const common = {
    width: 44,
    height: 44,
    viewBox: "0 0 40 40",
    fill: "none",
  } as const;
  switch (id) {
    case "payments":
      return (
        <svg {...common} aria-hidden="true">
          <rect
            x="4"
            y="10"
            width="32"
            height="20"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M4 16h32" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M9 24h8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "cod":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M20 5l14 6.5v9c0 8-6 13-14 14.5C12 33 6 28 6 20.5v-9L20 5z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 20.5l4 4 8-9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "currency":
      return (
        <svg {...common} aria-hidden="true">
          <circle
            cx="16"
            cy="16"
            r="10.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle
            cx="24"
            cy="24"
            r="10.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    case "checkout":
      return (
        <svg {...common} aria-hidden="true">
          <rect
            x="5"
            y="7"
            width="30"
            height="26"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M11 15h18M11 21h10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M24 27l3 3 5-6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "expansion":
      return (
        <svg {...common} aria-hidden="true">
          <circle
            cx="20"
            cy="20"
            r="14"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M6 20h28M20 6c3.5 3.8 5.5 8.7 5.5 14S23.5 30.2 20 34c-3.5-3.8-5.5-8.7-5.5-14S16.5 9.8 20 6z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    case "promotions":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M6 20l12-13h13v13L19 33 6 20z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle
            cx="24.5"
            cy="15.5"
            r="2.2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    default:
      return null;
  }
}

// Short diagram labels, one per point in home.ts. Edit freely.
const flows: Record<string, { source: string; outs: string[] }> = {
  payments: {
    source: "Buyer's country",
    outs: [
      "Method list per country",
      "Tabby · Tamara · mada · Apple Pay",
      "No app-switching",
    ],
  },
  cod: {
    source: "COD order",
    outs: ["OTP verification", "COD handling fee", "Lower RTO"],
  },
  currency: {
    source: "Shopify price",
    outs: ["6 GCC currencies", "No surprise conversion", "Buyer trust"],
  },
  checkout: {
    source: "Returning buyer",
    outs: ["9 fields → 2", "Pre-filled details", "Faster on every device"],
  },
  expansion: {
    source: "One Shopify store",
    outs: ["Six GCC markets", "No duplicate stores", "No rebuild per country"],
  },
  promotions: {
    source: "Discount code",
    outs: [
      "Currency-locked codes",
      "Country-specific offers",
      "No workaround apps",
    ],
  },
};

const outY = [60, 180, 300];

const themes = {
  blue: {
    tab: "bg-accent shadow-brand-accent/30",
    panel: "from-brand-accent/[0.07]",
    src: "border-brand-accent/25 from-brand-accent/15 shadow-brand-accent/10",
    hub: "border-brand-accent/40 to-brand-accent/20 shadow-brand-accent/25",
    ico: "text-brand-accent",
    on: "border-brand-accent bg-accent shadow-brand-accent/30",
    off: "hover:border-brand-accent/50",
    num: "bg-accent",
    pt: "border-brand-accent/40 shadow-brand-accent/10 bg-accent/[0.04]",
    base: "stroke-brand-accent/15",
    mid: "stroke-brand-accent/50",
    sig: "stroke-brand-accent",
  },
  green: {
    tab: "bg-accent2 shadow-brand-accent2/30",
    panel: "from-brand-accent2/[0.08]",
    src: "border-brand-accent2/25 from-brand-accent2/15 shadow-brand-accent2/10",
    hub: "border-brand-accent2/40 to-brand-accent2/20 shadow-brand-accent2/25",
    ico: "text-brand-accent2",
    on: "border-brand-accent2 bg-accent2 shadow-brand-accent2/30",
    off: "hover:border-brand-accent2/50",
    num: "bg-accent2",
    pt: "border-brand-accent2/40 shadow-brand-accent2/10 bg-accent2/[0.05]",
    base: "stroke-brand-accent2/15",
    mid: "stroke-brand-accent2/50",
    sig: "stroke-brand-accent2",
  },
  gold: {
    tab: "bg-brand-gold shadow-brand-gold/30",
    panel: "from-brand-gold/[0.10]",
    src: "border-brand-gold/30 from-brand-gold/20 shadow-brand-gold/10",
    hub: "border-brand-gold/50 to-brand-gold/25 shadow-brand-gold/25",
    ico: "text-brand-gold",
    on: "border-brand-gold bg-brand-gold shadow-brand-gold/30",
    off: "hover:border-brand-gold/50",
    num: "bg-brand-gold",
    pt: "border-brand-gold/40 shadow-brand-gold/10 bg-brand-gold/[0.06]",
    base: "stroke-brand-gold/20",
    mid: "stroke-brand-gold/60",
    sig: "stroke-brand-gold",
  },
};
type Theme = (typeof themes)[keyof typeof themes];

const tabTheme: Record<string, keyof typeof themes> = {
  payments: "blue",
  cod: "green",
  currency: "gold",
  checkout: "blue",
  expansion: "green",
  promotions: "gold",
};

function Src({ label, t }: { label: string; t: Theme }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border bg-gradient-to-br via-white to-white px-3 py-3 text-center text-xs font-semibold text-fg shadow-lg sm:text-sm ${t.src}`}
    >
      {label}
    </div>
  );
}

function Hub({ id, t }: { id: string; t: Theme }) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-1 rounded-2xl border bg-gradient-to-br from-white via-white px-3 text-center shadow-2xl ${t.hub}`}
    >
      <span className={t.ico}>
        <TabIcon id={id} />
      </span>
      <span className="font-display text-base font-semibold text-fg sm:text-lg">
        GulfCart
      </span>
    </div>
  );
}

function Out({
  label,
  on,
  onClick,
  t,
  className = "",
}: {
  label: string;
  on: boolean;
  onClick: () => void;
  t: Theme;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={`flex w-full items-center justify-center rounded-xl border px-2 py-2.5 text-center text-[11px] font-medium leading-tight transition sm:text-sm ${
        on
          ? `${t.on} text-white shadow-lg`
          : `border-gray-500/20 bg-white text-fg ${t.off}`
      } ${className}`}
    >
      {label}
    </button>
  );
}

const VLine = ({ t }: { t: Theme }) => (
  <svg
    viewBox="0 0 2 40"
    fill="none"
    aria-hidden="true"
    className="mx-auto h-10 w-[2px]"
  >
    <path d="M1 0V40" pathLength={100} className={t.base} strokeWidth="2" />
    <path
      d="M1 0V40"
      pathLength={100}
      className={`gc-signal ${t.sig}`}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function FeatureTabs() {
  const [id, setId] = useState(featureTabs[0].id);
  const [pt, setPt] = useState(0);
  const tab = featureTabs.find((x) => x.id === id) ?? featureTabs[0];
  const flow = flows[tab.id];
  const t = themes[tabTheme[tab.id] ?? "blue"];
  const pick = (v: string) => {
    setId(v);
    setPt(0);
  };

  return (
    <section className="container mx-auto py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="pill">What we fix</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          One checkout layer, six things fixed
        </h2>
        <p className="mt-3 text-muted sm:text-lg">
          Everything below runs on top of the Shopify store you already have.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="GulfCart features"
        className="mx-auto mt-8 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-gray-500/20 bg-brand-surface p-1 [scrollbar-width:none]"
      >
        {featureTabs.map((f) => (
          <button
            key={f.id}
            role="tab"
            type="button"
            aria-selected={f.id === id}
            onClick={() => pick(f.id)}
            className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
              f.id === id
                ? `${t.tab} text-white shadow-md`
                : "text-muted hover:text-fg"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div key={tab.id} role="tabpanel" className="gc-in mt-10">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-xl font-semibold sm:text-2xl">{tab.title}</h3>
          <p className="mt-3 text-sm text-muted sm:text-base">{tab.body}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[320px_1fr] lg:gap-8">
          <ul className="space-y-2">
            {tab.points.map((p, i) => (
              <li key={p}>
                <button
                  type="button"
                  onClick={() => setPt(i)}
                  aria-pressed={i === pt}
                  className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition ${
                    i === pt
                      ? `${t.pt} shadow-lg`
                      : "border-transparent hover:bg-tile-hover"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                      i === pt
                        ? `${t.num} text-white`
                        : "border border-gray-500/20 text-muted"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`text-sm ${i === pt ? "font-medium text-fg" : "text-muted"}`}
                  >
                    {p}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div
            className={`rounded-2xl border border-gray-500/20 bg-gradient-to-br to-white p-4 sm:p-6 ${t.panel}`}
          >
            <div className="relative hidden aspect-[5/3] w-full md:block">
              <svg
                viewBox="0 0 600 360"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full"
              >
                <path
                  d="M120 180 H228"
                  className={t.mid}
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M120 180 H228"
                  pathLength={100}
                  className={`gc-signal ${t.sig}`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
                {outY.map((y, i) => {
                  const d = `M372 180 C424 180 424 ${y} 468 ${y}`;
                  return (
                    <g key={i}>
                      <path
                        d={d}
                        className={i === pt ? t.mid : t.base}
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                      />
                      {i === pt && (
                        <path
                          d={d}
                          pathLength={100}
                          className={`gc-signal ${t.sig}`}
                          strokeWidth="2"
                          strokeLinecap="round"
                          vectorEffect="non-scaling-stroke"
                          style={{ "--dur": "2.4s" } as React.CSSProperties}
                        />
                      )}
                    </g>
                  );
                })}
              </svg>
              <div className="absolute left-[2%] top-1/2 w-[18%] -translate-y-1/2">
                <Src label={flow.source} t={t} />
              </div>
              <div className="absolute left-[38%] top-1/2 h-[42%] w-[24%] -translate-y-1/2">
                <Hub id={tab.id} t={t} />
              </div>
              {flow.outs.map((o, i) => (
                <div
                  key={o}
                  className="absolute left-[78%] w-[20%] -translate-y-1/2"
                  style={{ top: `${(outY[i] / 360) * 100}%` }}
                >
                  <Out label={o} on={i === pt} onClick={() => setPt(i)} t={t} />
                </div>
              ))}
            </div>

            <div className="md:hidden">
              <div className="mx-auto w-3/4">
                <Src label={flow.source} t={t} />
              </div>
              <VLine t={t} />
              <div className="mx-auto h-28 w-3/4">
                <Hub id={tab.id} t={t} />
              </div>
              <VLine t={t} />
              <div className="grid grid-cols-3 gap-2">
                {flow.outs.map((o, i) => (
                  <Out
                    key={o}
                    label={o}
                    on={i === pt}
                    onClick={() => setPt(i)}
                    t={t}
                    className="min-h-[64px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

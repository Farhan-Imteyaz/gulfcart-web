export type NetworkNode = {
  id: string;
  label: string;
  back: string;
  x: number; // % of container width
  y: number; // % of container height
  tier: "core" | "extra"; // extra = hidden on small mobile
  dur: number;
  delay: number;
};

const W = 600;
const H = 500;

function curve(n: NetworkNode, i: number) {
  const sx = (n.x / 100) * W;
  const sy = (n.y / 100) * H;
  const dx = W / 2 - sx;
  const dy = H / 2 - sy;
  const s = i % 2 === 0 ? 0.2 : -0.2;
  const cx = (sx + W / 2) / 2 - dy * s;
  const cy = (sy + H / 2) / 2 + dx * s;
  return `M${sx} ${sy} Q${cx} ${cy} ${W / 2} ${H / 2}`;
}

export default function NetworkConnections({ nodes }: { nodes: NetworkNode[] }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    >
      {nodes.map((n, i) => {
        const d = curve(n, i);
        const hide = "";
        return (
          <g key={n.id} className={hide}>
            <path d={d} className="stroke-brand-accent/25" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
            <path
              d={d}
              pathLength={100}
              className="gc-signal stroke-brand-accent"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ "--dur": `${n.dur}s`, "--d": `-${n.delay}s` } as React.CSSProperties}
            />
          </g>
        );
      })}
    </svg>
  );
}
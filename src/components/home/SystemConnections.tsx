const L = [38, 146, 254, 362]; // card centre y (viewBox 1100x400)
const E = [140, 180, 220, 260]; // hub edge y

export default function SystemConnections() {
  const left = L.map((y, i) => `M264 ${y} C330 ${y} 330 ${E[i]} 396 ${E[i]}`);
  const right = L.map((y, i) => `M704 ${E[i]} C770 ${E[i]} 770 ${y} 836 ${y}`);
  return (
    <svg viewBox="0 0 1100 400" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
      {[...left, ...right].map((d, i) => (
        <g key={i}>
          <path d={d} className="stroke-brand-accent/20" strokeWidth="1.25" />
          <path
            d={d}
            pathLength={100}
            className="gc-signal stroke-brand-accent"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ "--dur": `${3 + (i % 4) * 0.4}s`, "--d": `-${i * 0.7}s` } as React.CSSProperties}
          />
        </g>
      ))}
    </svg>
  );
}
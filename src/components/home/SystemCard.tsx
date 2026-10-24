import type { ReactNode } from "react";

export type SystemNode = {
  id: string;
  title: string;
  sub: string;
  tag: string;
  icon?: ReactNode;
};

const styles = {
  input: {
    card: "border-brand-accent/20 bg-gradient-to-br from-brand-accent/[0.08] via-white to-brand-accent/[0.03] shadow-brand-accent/10",
    chip: "bg-accent text-white shadow-brand-accent/30",
  },
  output: {
    card: "border-brand-accent2/25 bg-gradient-to-br from-brand-accent2/[0.10] via-white to-brand-accent2/[0.03] shadow-brand-accent2/10",
    chip: "bg-accent2 text-white shadow-brand-accent2/30",
  },
};

export default function SystemCard({
  node,
  variant = "input",
}: {
  node: SystemNode;
  variant?: "input" | "output";
}) {
  const s = styles[variant];
  return (
    <div
      className={`flex h-full flex-col items-start gap-2 rounded-xl border px-3 py-3 shadow-lg backdrop-blur transition duration-200 hover:-translate-y-0.5 sm:min-h-[64px] sm:flex-row sm:items-center sm:gap-3 sm:px-3.5 sm:py-2.5 ${s.card}`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[11px] font-semibold shadow-md ${s.chip}`}
      >
        {node.icon ?? node.tag}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-fg">
          {node.title}
        </span>
        <span className="block text-xs leading-snug text-muted">
          {node.sub}
        </span>
      </span>
    </div>
  );
}

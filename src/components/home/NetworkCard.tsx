import type { ReactNode } from "react";

type Props = {
  label?: string;
  icon?: ReactNode;
  back?: string;
  index?: number;
};

export default function NetworkCard({ label, icon, back, index = 0 }: Props) {
  const face =
    "col-start-1 row-start-1 flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl border border-gray-500/20 px-2.5 py-1.5 text-[11px] font-medium shadow-md shadow-brand-accent/10 sm:px-3.5 sm:py-2 sm:text-sm [backface-visibility:hidden]";
  return (
    <div
      className={`grid ${back ? "gc-flip" : ""}`}
      style={{ "--fd": index % 2 ? "-4s" : "0s" } as React.CSSProperties}
    >
      <div className={`${face} bg-white text-fg`}>
        {icon}
        {label}
      </div>
      {back && (
        <div
          className={`${face} bg-accent text-white`}
          style={{ transform: "rotateX(180deg)" }}
        >
          {back}
        </div>
      )}
    </div>
  );
}

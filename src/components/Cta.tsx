import Link from "next/link";
import { site } from "@/lib/site";

export default function Cta({
  text = "See this on your checkout",
}: {
  text?: string;
}) {
  return (
    <div className="rounded-xl2 border border-gray-500/20 bg-brand-surface p-8 text-center my-16">
      <p className="text-xl mb-4">{text}</p>
      <Link
        href={site.demoPath}
        className="inline-block rounded-full bg-accent text-white px-6 py-3 text-sm hover:opacity-90"
      >
        Book a demo
      </Link>
    </div>
  );
}

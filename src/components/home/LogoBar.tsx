import Image from "next/image";
import { logos } from "@/lib/content/home";

export default function LogoBar() {
  const items = [...logos, ...logos];
  return (
    <section className="border-y border-gray-500/20 overflow-hidden">
      <div className="py-10">
        <p className="text-center text-xs text-muted mb-7">
          Trusted by Gulf commerce brands
        </p>
        <div className="flex w-max gap-4 animate-marquee">
          {items.map((logo, i) => (
            <div
              key={logo.name + i}
              className="flex h-16 w-32 sm:h-[4.5rem] sm:w-36 shrink-0 items-center justify-center rounded-xl bg-white/95 px-4 py-3"
            >
              <Image
                src={`/logos/${logo.file}`}
                alt={logo.name}
                width={128}
                height={68}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

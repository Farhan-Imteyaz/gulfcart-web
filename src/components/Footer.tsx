import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

const cols = [
  {
    title: "Solutions",
    links: [
      { href: "/shopify-checkout", label: "Shopify Checkout GCC" },
      { href: "/shopify-cod", label: "Shopify COD & RTO" },
      { href: "/shopify-payment-methods", label: "Payment Methods" },
      { href: "/shopify-markets", label: "Multi-Currency & Markets" },
    ],
  },
  {
    title: "Countries",
    links: [
      { href: "/shopify-checkout-uae", label: "UAE" },
      { href: "/shopify-checkout-saudi-arabia", label: "Saudi Arabia" },
      { href: "/shopify-gcc", label: "Kuwait, Qatar, Bahrain, Oman" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/gulfcart-vs-shopify-checkout", label: "GulfCart vs Shopify" },
      { href: site.demoPath, label: "Book a demo" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="relative overflow-hidden rounded-t-[2rem] border-t border-slate-700/50 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(closest-side, rgba(16,185,129,0.55), transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -bottom-40 h-[26rem] w-[26rem] rounded-full blur-3xl opacity-25"
          style={{ background: "radial-gradient(closest-side, rgba(99,102,241,0.45), transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 72px)",
          }}
        />
        <span aria-hidden="true" className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-flex items-center" aria-label={site.name}>
                <Image src="/heroimg/gulfcart-logo (1).webp" alt={site.name} width={140} height={32} className="h-7 w-auto sm:h-8" />
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
                Checkout growth platform for Shopify brands in the Gulf. Better conversion first, more markets when you want them.
              </p>
            </div>

            {cols.map((c) => (
              <div key={c.title}>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400/90">{c.title}</p>
                <ul className="space-y-2.5 text-sm">
                  {c.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-slate-400 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-slate-700/50 pt-6">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} {site.name}. Dubai, UAE.
            </p>
          </div>
        </div>

        <span aria-hidden="true" className="absolute inset-x-16 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-600/40 to-transparent" />
      </div>
    </footer>
  );
}
'use client'
import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";
import { InstagramLogoIcon, FacebookLogoIcon, LinkedinLogoIcon, EnvelopeIcon } from "@phosphor-icons/react";
const columns = [
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
    title: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/gulfcart-vs-shopify-checkout", label: "GulfCart vs Shopify" },
      { href: "/contact", label: "Contact" },
      { href: site.demoPath, label: "Book a demo" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/refund-policy", label: "Refund Policy" },
    ],
  },
];const socials = [
  { label: 'Facebook', href: 'https://facebook.com/gulfcart.ae', icon: FacebookLogoIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/gulfcart-ae', icon: LinkedinLogoIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/gulf_cart.ae', icon: InstagramLogoIcon },
  { label: 'Email', href: 'mailto:support@gulfcart.ae', icon: EnvelopeIcon },
];
export default function Footer() {
  return (
    <footer className="border-t border-ghost/30 px-[26px] py-12">
      <div className="shell flex flex-wrap justify-between gap-10">
        <div className="max-w-[300px]">
          <Logo />
          <p className="mt-3.5 text-sm leading-relaxed text-muted">
            Checkout growth platform for Shopify brands in the Gulf. Better
            conversion first, more markets when you want them.
          </p>
          <div className="mt-4 flex gap-3">
            {socials.map((s) => {
              const isEmail = s.href.startsWith("mailto:");
              return (
                <a
                  key={s.label}
                  href={s.href}
                  {...(!isEmail && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full border border-outline/25 text-dim hover:border-accent/50 hover:text-accent"
                >
                  <s.icon weight="fill" size={28} strokeWidth={2} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-2.5 text-sm">
              <div className="mb-1 text-[11px] font-bold tracking-[.14em] text-outline">
                {col.title}
              </div>
              {col.links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-dim hover:text-fg"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="shell mt-10 text-muted! flex flex-wrap justify-between gap-5 border-t border-ghost/30 pt-5 text-[12.5px] text-outline">
        <span>
          Copyright © {new Date().getFullYear()} GulfCart. All rights reserved.
        </span>
        <span>Dubai, United Arab Emirates</span>
      </div>
    </footer>
  );
}

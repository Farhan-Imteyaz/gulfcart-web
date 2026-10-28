export type NavItem = { href: string; label: string; desc?: string };
export type NavGroup = { label: string; items: NavItem[] };

export const navGroups: NavGroup[] = [
  {
    label: "Solutions",
    items: [
      { href: "/shopify-checkout", label: "Checkout", desc: "Local currency, one-tap, country rules" },
      { href: "/shopify-cod", label: "COD & RTO", desc: "OTP verification, fake orders, COD fee" },
      { href: "/shopify-payment-methods", label: "Payment methods", desc: "Tabby, Tamara, Apple Pay, mada" },
      { href: "/shopify-markets", label: "Multi-currency & Markets", desc: "Settlement, discounts, expansion" },
    ],
  },
  {
    label: "Countries",
    items: [
      { href: "/shopify-checkout-uae", label: "UAE", desc: "AED, Apple Pay, COD, VAT" },
      { href: "/shopify-checkout-saudi-arabia", label: "Saudi Arabia", desc: "SAR, mada, Tabby, Tamara" },
      { href: "/shopify-gcc", label: "Kuwait, Qatar, Bahrain, Oman", desc: "The other GCC markets" },
    ],
  },

];

export const navLinks: NavItem[] = [
  { href: "/gulfcart-vs-shopify-checkout", label: "Compare" },
  { href: '/blogs', label: "Blogs" }
];
// All homepage copy lives here so sections stay editable without touching component/JSX code.

export const logos = [
  { name: "Teeser", file: "teeser.webp" },
  { name: "Perfume Oasis", file: "perfume-oasis.webp" },
  { name: "OPTO Watch Co.", file: "opto.webp" },
  { name: "The Nova Ventures", file: "nova.webp" },
  { name: "Noir", file: "noir.webp" },
  { name: "Max Store", file: "max-store.webp" },
  { name: "Billionaire Mansions", file: "billionaire-mansions.webp" },
  { name: "Ruhayah", file: "ruhayah.webp" },
];

export const stats = [
  { value: "23s", label: "Average checkout time for returning buyers" },
  { value: "30%", label: "Reduction in fake COD orders" },
  { value: "6", label: "GCC currencies settled natively" },
  { value: "9→2", label: "Checkout fields for a recognized buyer" },
];

export const featureTabs = [
  {
    id: "payments",
    label: "Payments",
    title: "Show the right payment method, in the right country",
    body: "Tabby and Tamara where they convert, Apple Pay where it's supported, cards everywhere, COD with a fee where you need it. Set the method list and the order per country — Shopify's global rules don't have to apply to every market the same way.",
    points: ["Per-country method list and order", "Tabby, Tamara, mada, Apple Pay, cards, COD", "No app-switching per market"],
  },
  {
    id: "cod",
    label: "COD",
    title: "Verify the order before it ships, not after it fails",
    body: "OTP verification on cash-on-delivery orders filters out fake and mistyped orders before they reach your fulfilment team. Attach a COD handling fee where it makes sense, and watch return-to-origin drop.",
    points: ["OTP verification at checkout", "Optional COD handling fee by country", "Fewer failed deliveries, lower RTO"],
  },
  {
    id: "currency",
    label: "Currency",
    title: "Real settlement, not a converted price tag",
    body: "AED, SAR, KWD, QAR, BHD and OMR — GulfCart processes and settles in the buyer's real local currency instead of showing a converted estimate in USD. Buyers trust a price they recognize.",
    points: ["Native settlement in 6 GCC currencies", "No surprise conversion at payment", "Builds buyer trust at the last step"],
  },
  {
    id: "checkout",
    label: "Checkout",
    title: "One tap for anyone who's checked out before",
    body: "GulfCart's buyer network recognizes a shopper who has checked out with any brand on the network and pre-fills their details. Fewer fields, less typing, fewer people giving up halfway through.",
    points: ["Fields drop from 9 to 2 for known buyers", "Address and card pre-filled", "Faster checkout on every device"],
  },
  {
    id: "expansion",
    label: "Expansion",
    title: "Sell across all six GCC countries from one setup",
    body: "Configure country rules once — currency, payment methods, tax, shipping — and go live in a new market without rebuilding your store or running a second Shopify instance.",
    points: ["One Shopify store, six markets", "No duplicate stores to maintain", "Add a country without a rebuild"],
  },
  {
    id: "promotions",
    label: "Promotions",
    title: "Run discounts by country, not just storewide",
    body: "Lock a promo code to a currency or a market — a SAR-only discount, a launch offer just for Kuwait — instead of one blunt code that applies everywhere or nowhere.",
    points: ["Currency-locked discount codes", "Country-specific launch offers", "No workaround apps required"],
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Install on Shopify",
    body: "Add GulfCart from the Shopify App Store. It sits on top of your existing store — nothing about your theme, products, or orders changes.",
  },
  {
    step: "02",
    title: "Configure country rules",
    body: "Set currencies, payment methods, COD fees, and tax per market. Most merchants are done configuring their first country in under an hour.",
  },
  {
    step: "03",
    title: "Go live",
    body: "Your checkout starts recognizing returning buyers, verifying COD orders, and settling in local currency — on the traffic you're already paying for.",
  },
];

// Illustrative examples based on typical GulfCart improvements — swap in real customer
// numbers here as case studies land. Keep the "Illustrative" note until then.
export const caseStudies = [
  {
    tag: "Fragrance retailer · UAE",
    headline: "Cut COD return-to-origin by a third",
    metric: "−32%",
    metricLabel: "RTO after OTP verification",
    body: "Switched on OTP verification and a COD handling fee for UAE orders. Failed deliveries dropped within the first month, with no change to ad spend or traffic.",
  },
  {
    tag: "Apparel brand · UAE & Saudi",
    headline: "Checkout completion up without new traffic",
    metric: "+38%",
    metricLabel: "orders from the same checkout sessions",
    body: "Moved from a converted-price checkout to native AED and SAR settlement, and cut the returning-buyer form down to two fields.",
  },
  {
    tag: "Home & lifestyle brand · Kuwait & Qatar",
    headline: "Live in two new markets in one setup",
    metric: "2",
    metricLabel: "new countries, one Shopify store",
    body: "Configured country-specific payment methods and shipping rules once, without standing up a second store or duplicating inventory.",
  },
];

export const integrations = {
  platform: "Shopify",
  methods: ["Tabby", "Tamara", "mada", "Apple Pay", "Visa", "Mastercard"],
};

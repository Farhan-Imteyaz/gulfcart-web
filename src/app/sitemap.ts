import { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = [
  "/",
  "/shopify-checkout",
  "/shopify-checkout-optimization",
  "/shopify-cod",
  "/cod-fraud-prevention",
  "/shopify-rto-reduction",
  "/shopify-payment-methods",
  "/shopify-multi-currency",
  "/shopify-markets",
  "/shopify-checkout-uae",
  "/shopify-checkout-saudi-arabia",
  "/shopify-checkout-kuwait",
  "/shopify-checkout-qatar",
  "/shopify-checkout-bahrain",
  "/shopify-checkout-oman",
  "/shopify-payment-gateway-uae",
  "/shopify-payment-gateway-saudi-arabia",
  "/add-tabby-to-shopify",
  "/add-tamara-to-shopify",
  "/shopify-cod-verification",
  "/shopify-one-click-checkout",
  "/shopify-country-discounts",
  "/shopify-fraud-prevention",
  "/compare/gulfcart-vs-shopify-checkout",
  "/compare/gulfcart-vs-shopify-markets",
  "/compare/shopify-native-cod-vs-gulfcart",
  "/compare/tabby-vs-tamara",
  "/compare/shopify-checkout-vs-localised-gcc",
  "/book-a-demo",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: p === "/" ? 1 : 0.7,
  }));
}

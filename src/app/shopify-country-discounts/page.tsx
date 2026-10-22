import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

export const metadata: Metadata = pageMetadata({
  title: "Shopify Country-Level Discounts",
  description: "Run country-specific and currency-locked promotions on Shopify.",
  path: "/shopify-country-discounts",
});

export default function Page() {
  return (
    <>
      <PageHero h1="Shopify Country-Level Discounts" intro="Run country-specific and currency-locked promotions on Shopify." />
      <div className="mx-auto max-w-3xl px-4 prose prose-invert">
        <p>Content for this page goes here.</p>
      </div>
      <div className="mx-auto max-w-3xl px-4">
        <Cta />
      </div>
    </>
  );
}

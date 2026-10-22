import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

export const metadata: Metadata = pageMetadata({
  title: "GulfCart vs Shopify Checkout",
  description: "How GulfCart's Gulf-specific checkout layer compares to native Shopify checkout.",
  path: "/compare/gulfcart-vs-shopify-checkout",
});

export default function Page() {
  return (
    <>
      <PageHero h1="GulfCart vs Shopify Checkout" intro="How GulfCart's Gulf-specific checkout layer compares to native Shopify checkout." />
      <div className="mx-auto max-w-3xl px-4 prose prose-invert">
        <p>Content for this page goes here.</p>
      </div>
      <div className="mx-auto max-w-3xl px-4">
        <Cta />
      </div>
    </>
  );
}

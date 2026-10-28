import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

export const metadata: Metadata = pageMetadata({
  title: "Shopify Checkout Optimization",
  description: "Find out why your Shopify checkout is losing orders and how to fix each leak in the funnel.",
  path: "/shopify-checkout-optimization",
});

export default function Page() {
  return (
    <>
      <PageHero h1="Shopify Checkout Optimization" intro="Find out why your Shopify checkout is losing orders and how to fix each leak in the funnel." />
      <div className="mx-auto max-w-3xl px-4 prose prose-invert">
        <p>Content for this page goes here.</p>
      </div>
      <div className="mx-auto max-w-3xl px-4">
        <Cta />
      </div>
    </>
  );
}

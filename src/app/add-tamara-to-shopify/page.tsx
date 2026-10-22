import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

export const metadata: Metadata = pageMetadata({
  title: "How to Add Tamara to Shopify",
  description: "Step-by-step on adding Tamara buy-now-pay-later to your Shopify checkout in the Gulf.",
  path: "/add-tamara-to-shopify",
});

export default function Page() {
  return (
    <>
      <PageHero h1="How to Add Tamara to Shopify" intro="Step-by-step on adding Tamara buy-now-pay-later to your Shopify checkout in the Gulf." />
      <div className="mx-auto max-w-3xl px-4 prose prose-invert">
        <p>Content for this page goes here.</p>
      </div>
      <div className="mx-auto max-w-3xl px-4">
        <Cta />
      </div>
    </>
  );
}

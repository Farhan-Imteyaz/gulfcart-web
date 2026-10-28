import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

export const metadata: Metadata = pageMetadata({
  title: "How to Add Tabby to Shopify",
  description: "Step-by-step on adding Tabby buy-now-pay-later to your Shopify checkout in the Gulf.",
  path: "/add-tabby-to-shopify",
});

export default function Page() {
  return (
    <>
      <PageHero h1="How to Add Tabby to Shopify" intro="Step-by-step on adding Tabby buy-now-pay-later to your Shopify checkout in the Gulf." />
      <div className="mx-auto max-w-3xl px-4 prose prose-invert">
        <p>Content for this page goes here.</p>
      </div>
      <div className="mx-auto max-w-3xl px-4">
        <Cta />
      </div>
    </>
  );
}

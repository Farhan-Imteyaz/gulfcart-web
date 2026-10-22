import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

export const metadata: Metadata = pageMetadata({
  title: "GulfCart vs Shopify Markets",
  description: "How GulfCart compares to Shopify Markets for Gulf merchants.",
  path: "/compare/gulfcart-vs-shopify-markets",
});

export default function Page() {
  return (
    <>
      <PageHero h1="GulfCart vs Shopify Markets" intro="How GulfCart compares to Shopify Markets for Gulf merchants." />
      <div className="mx-auto max-w-3xl px-4 prose prose-invert">
        <p>Content for this page goes here.</p>
      </div>
      <div className="mx-auto max-w-3xl px-4">
        <Cta />
      </div>
    </>
  );
}

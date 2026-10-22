import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

export const metadata: Metadata = pageMetadata({
  title: "Tabby vs Tamara for Shopify Stores",
  description: "Comparing Tabby and Tamara conversion performance for Shopify stores in the Gulf.",
  path: "/compare/tabby-vs-tamara",
});

export default function Page() {
  return (
    <>
      <PageHero h1="Tabby vs Tamara for Shopify Stores" intro="Comparing Tabby and Tamara conversion performance for Shopify stores in the Gulf." />
      <div className="mx-auto max-w-3xl px-4 prose prose-invert">
        <p>Content for this page goes here.</p>
      </div>
      <div className="mx-auto max-w-3xl px-4">
        <Cta />
      </div>
    </>
  );
}

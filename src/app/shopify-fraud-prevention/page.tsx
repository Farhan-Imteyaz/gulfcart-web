import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

export const metadata: Metadata = pageMetadata({
  title: "Shopify Fraud Prevention",
  description: "Reduce fraudulent orders on your Shopify store with buyer verification and risk signals.",
  path: "/shopify-fraud-prevention",
});

export default function Page() {
  return (
    <>
      <PageHero h1="Shopify Fraud Prevention" intro="Reduce fraudulent orders on your Shopify store with buyer verification and risk signals." />
      <div className="mx-auto max-w-3xl px-4 prose prose-invert">
        <p>Content for this page goes here.</p>
      </div>
      <div className="mx-auto max-w-3xl px-4">
        <Cta />
      </div>
    </>
  );
}

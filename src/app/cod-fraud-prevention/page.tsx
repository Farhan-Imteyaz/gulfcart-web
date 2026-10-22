import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

export const metadata: Metadata = pageMetadata({
  title: "COD Fraud Prevention",
  description: "Stop fake COD orders and failed deliveries on your Shopify store with buyer verification.",
  path: "/cod-fraud-prevention",
});

export default function Page() {
  return (
    <>
      <PageHero h1="COD Fraud Prevention" intro="Stop fake COD orders and failed deliveries on your Shopify store with buyer verification." />
      <div className="mx-auto max-w-3xl px-4 prose prose-invert">
        <p>Content for this page goes here.</p>
      </div>
      <div className="mx-auto max-w-3xl px-4">
        <Cta />
      </div>
    </>
  );
}

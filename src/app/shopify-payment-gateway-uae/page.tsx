import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

export const metadata: Metadata = pageMetadata({
  title: "Best Shopify Payment Gateway in UAE",
  description: "Compare Shopify payment gateway options for the UAE and how GulfCart controls them by country.",
  path: "/shopify-payment-gateway-uae",
});

export default function Page() {
  return (
    <>
      <PageHero h1="Best Shopify Payment Gateway in UAE" intro="Compare Shopify payment gateway options for the UAE and how GulfCart controls them by country." />
      <div className="mx-auto max-w-3xl px-4 prose prose-invert">
        <p>Content for this page goes here.</p>
      </div>
      <div className="mx-auto max-w-3xl px-4">
        <Cta />
      </div>
    </>
  );
}

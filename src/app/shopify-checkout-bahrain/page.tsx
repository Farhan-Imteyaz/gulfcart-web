import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

export const metadata: Metadata = pageMetadata({
  title: "Shopify Checkout in Bahrain",
  description: "Sell and convert on Shopify in Bahrain: BHD currency, payment methods and COD.",
  path: "/shopify-checkout-bahrain",
});

export default function Page() {
  return (
    <>
      <PageHero h1="Shopify Checkout in Bahrain" intro="Sell and convert on Shopify in Bahrain: BHD currency, payment methods and COD." />
      <div className="mx-auto max-w-3xl px-4 prose prose-invert">
        <p>Content for this page goes here.</p>
      </div>
      <div className="mx-auto max-w-3xl px-4">
        <Cta />
      </div>
    </>
  );
}

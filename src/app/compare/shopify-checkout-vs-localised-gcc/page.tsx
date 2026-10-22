import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

export const metadata: Metadata = pageMetadata({
  title: "Shopify Checkout vs a Localised GCC Checkout",
  description: "Why a localised GCC checkout layer outperforms default Shopify checkout in the Gulf.",
  path: "/compare/shopify-checkout-vs-localised-gcc",
});

export default function Page() {
  return (
    <>
      <PageHero h1="Shopify Checkout vs a Localised GCC Checkout" intro="Why a localised GCC checkout layer outperforms default Shopify checkout in the Gulf." />
      <div className="mx-auto max-w-3xl px-4 prose prose-invert">
        <p>Content for this page goes here.</p>
      </div>
      <div className="mx-auto max-w-3xl px-4">
        <Cta />
      </div>
    </>
  );
}

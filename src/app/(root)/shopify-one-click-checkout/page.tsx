import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

export const metadata: Metadata = pageMetadata({
  title: "Shopify One Click Checkout",
  description: "One-tap checkout for returning buyers across the GulfCart network.",
  path: "/shopify-one-click-checkout",
});

export default function Page() {
  return (
    <>
      <PageHero h1="Shopify One Click Checkout" intro="One-tap checkout for returning buyers across the GulfCart network." />
      <div className="mx-auto max-w-3xl px-4 prose prose-invert">
        <p>Content for this page goes here.</p>
      </div>
      <div className="mx-auto max-w-3xl px-4">
        <Cta />
      </div>
    </>
  );
}

import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

export const metadata: Metadata = pageMetadata({
  title: "Shopify Native COD vs GulfCart COD Verification",
  description: "Comparing native Shopify COD handling to GulfCart's OTP-verified COD.",
  path: "/compare/shopify-native-cod-vs-gulfcart",
});

export default function Page() {
  return (
    <>
      <PageHero h1="Shopify Native COD vs GulfCart COD Verification" intro="Comparing native Shopify COD handling to GulfCart's OTP-verified COD." />
      <div className="mx-auto max-w-3xl px-4 prose prose-invert">
        <p>Content for this page goes here.</p>
      </div>
      <div className="mx-auto max-w-3xl px-4">
        <Cta />
      </div>
    </>
  );
}

import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

export const metadata: Metadata = pageMetadata({
  title: "Shopify COD Verification",
  description: "OTP-based COD verification for Shopify stores to cut fake orders before dispatch.",
  path: "/shopify-cod-verification",
});

export default function Page() {
  return (
    <>
      <PageHero h1="Shopify COD Verification" intro="OTP-based COD verification for Shopify stores to cut fake orders before dispatch." />
      <div className="mx-auto max-w-3xl px-4 prose prose-invert">
        <p>Content for this page goes here.</p>
      </div>
      <div className="mx-auto max-w-3xl px-4">
        <Cta />
      </div>
    </>
  );
}

import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";

export const metadata: Metadata = pageMetadata({
  title: "Shopify RTO Reduction",
  description: "Reduce Return To Origin on Shopify orders in the Gulf with verified checkout.",
  path: "/shopify-rto-reduction",
});

export default function Page() {
  return (
    <>
      <PageHero h1="Shopify RTO Reduction" intro="Reduce Return To Origin on Shopify orders in the Gulf with verified checkout." />
      <div className="mx-auto max-w-3xl px-4 prose prose-invert">
        <p>Content for this page goes here.</p>
      </div>
      <div className="mx-auto max-w-3xl px-4">
        <Cta />
      </div>
    </>
  );
}

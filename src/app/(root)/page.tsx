
import Hero from '../sections/Hero';
import JsonLd from '../components/jsonLd';
import { graph, softwareSchema, pageSchema } from "@/lib/schema"
import Currency from '../sections/currency';
import StatBand from '../sections/StatBrand';
import Leak from '../sections/Leak';
import Levers from '../sections/Levers';
import CheckoutShowcase from '../sections/CheckoutShowcase';
import BuyerNetwork from '../sections/BuyerNetwork';
import Fit from '../sections/Fit';
import Blogs from '../components/Blogs';
import Pricing from '../sections/Pricing';
import Faq from '../sections/Faq';
import FinalCta from '../sections/FinalCta';


export default function Page() {
  return (
    <main className="overflow-x-hidden bg-ink">
      <JsonLd data={graph(softwareSchema)} />
      <JsonLd data={pageSchema({ name: "GulfCart", description: "Native AED/SAR settlement, OTP-verified COD, Tabby & Tamara, and one-tap checkout for Shopify brands selling across the GCC.", path: "/", crumbs: [{ name: "Home", path: "/" }] })} />
      <Hero />
      <StatBand />
      <Currency />
      <Leak />
      <Levers />
      <CheckoutShowcase />
      <BuyerNetwork />
      <Fit />
      <Pricing />
      <Faq />
      <Blogs />
      <FinalCta />
    </main>
  );
}

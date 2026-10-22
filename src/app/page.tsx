import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Hero from "@/components/home/Hero";
import LogoBar from "@/components/home/LogoBar";
import ProblemSection from "@/components/home/ProblemSection";
import SystemSection from "@/components/home/SystemSection";
import StatsSection from "@/components/home/StatsSection";
import FeatureTabs from "@/components/home/FeatureTabs";
import GulfMarket from "@/components/home/GulfMarket";
import HowItWorks from "@/components/home/HowItWorks";
import CaseStudies from "@/components/home/CaseStudies";
import Integrations from "@/components/home/Integrations";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";

export const metadata: Metadata = pageMetadata({
  title: "Shopify Checkout for the Gulf — UAE, Saudi Arabia & GCC",
  description: "Native AED/SAR settlement, OTP-verified COD, Tabby & Tamara, and one-tap checkout for Shopify brands selling across the GCC.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <ProblemSection />
      <SystemSection />
      <StatsSection />
      <FeatureTabs />
      <GulfMarket />
      <HowItWorks />
      <CaseStudies />
      <Integrations />
      <Faq />
      <FinalCta />
    </>
  );
}
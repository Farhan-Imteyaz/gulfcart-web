import type { Metadata } from 'next';
import { Space_Grotesk, Manrope } from 'next/font/google';
import './globals.css';
import BackToTop from '@/components/ui/to-top';

import Header from '@/components/Header';

import Footer from '@/components/Footer';

import PixelRouteTracker from '@/components/pixel-tracker';

export const metadata: Metadata = {
  title: 'GulfCart — Checkout growth platform for Shopify brands in the Gulf',
  description:
    'True local currency, one-tap returning buyers, verified COD and country-level payment rules on the Shopify store you already run.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PixelRouteTracker />

      <Header />
      {children}
      <Footer />
      <BackToTop />

    </>
  );
}
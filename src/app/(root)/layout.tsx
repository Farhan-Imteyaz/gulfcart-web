
import BackToTop from '@/components/ui/to-top';

import Header from '@/components/Header';

import Footer from '@/components/Footer';

import PixelRouteTracker from '@/components/pixel-tracker';


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
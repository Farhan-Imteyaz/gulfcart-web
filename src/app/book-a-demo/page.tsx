import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import DemoForm from "@/components/DemoForm";

export const metadata: Metadata = pageMetadata({
  title: "Book a Demo",
  description:
    "Book a 20 minute walkthrough of your Shopify checkout and see what GulfCart can lift.",
  path: "/book-a-demo",
});

const bullets = [
  "See your own checkout funnel, not a generic demo",
  "Walk through currency, COD, and payment method setup for your market",
  "No commitment — 20 minutes, on your schedule",
];

export default function Page() {
  return (
    <>
      <PageHero
        h1="Book a Demo"
        intro="See what GulfCart recovers on the checkout you already have. Pick whichever's easier — fill in the form or grab time directly."
      />
      <div className="container pb-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 max-w-5xl mx-auto">
          <div>
            <DemoForm />
          </div>

          <div className="flex flex-col justify-center">
            <ul className="space-y-3 mb-8">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-sm text-muted"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="mt-0.5 flex-shrink-0 text-brand-accent2"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8.5l3 3 7-7.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>

            <div className="rounded-xl2 border border-gray-500/20 bg-brand-surface p-6">
              <p className="text-sm text-muted mb-4">
                Prefer to pick a time yourself?
              </p>
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-brand-accent text-brand-accent px-6 py-3 text-sm font-medium hover:bg-accent hover:text-white transition-colors"
              >
                Book a call directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

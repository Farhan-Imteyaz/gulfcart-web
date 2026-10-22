export const site = {
  name: "GulfCart",
  url: "https://gulfcart.ae",
  tagline: "Checkout growth platform for Shopify brands in the Gulf",
  demoPath: "/book-a-demo",
  // TODO: replace with the real Calendly link
  calendlyUrl: "https://calendly.com/gulfcart/demo",
};

export function absoluteUrl(path: string) {
  return `${site.url}${path}`;
}

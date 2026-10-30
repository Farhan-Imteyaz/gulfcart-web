import { MetadataRoute } from "next";
import { site } from "@/lib/site";
import prisma from "@/lib/prisma";

export const revalidate = 3600; // refresh sitemap hourly

const paths = [
  "/",
  "/shopify-checkout",
  "/shopify-cod",
  "/shopify-payment-methods",
  "/shopify-markets",
  "/shopify-checkout-uae",
  "/shopify-checkout-saudi-arabia",
  "/shopify-gcc",
  "/gulfcart-vs-shopify-checkout",
  "/blogs",
  "/book-a-demo",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = paths.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: p === "/" ? 1 : 0.7,
  }));

  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await prisma.blogPost.findMany({
  where: { status: "published", noIndex: false },
  select: { slug: true, updatedAt: true },
});
    blogPages = posts.map((post) => ({
      url: `${site.url}/blogs/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "monthly",
      priority: 0.6,
    }));
  } catch (e) {
    console.error("Sitemap: failed to load blogs", e);
  }

  return [...staticPages, ...blogPages];
}
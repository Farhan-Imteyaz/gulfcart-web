import { site, absoluteUrl } from "./site";

const ORG = `${site.url}/#organization`;
const SITE = `${site.url}/#website`;
const LOGO = absoluteUrl("/heroimg/gulfcart-logo.webp"); // rename the file, or change this path

export const graph = (...nodes: object[]) => ({ "@context": "https://schema.org", "@graph": nodes });

export const organizationSchema = {
    "@type": "Organization",
    "@id": ORG,
    name: site.name,
    url: site.url,
    logo: LOGO,
    description: site.tagline,
    address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
    areaServed: ["United Arab Emirates", "Saudi Arabia", "Kuwait", "Qatar", "Bahrain", "Oman"].map((name) => ({ "@type": "Country", name })),
    sameAs: [] as string[], // add LinkedIn, Instagram, X URLs
};

export const websiteSchema = {
    "@type": "WebSite",
    "@id": SITE,
    url: site.url,
    name: site.name,
    publisher: { "@id": ORG },
    inLanguage: "en",
};

export const softwareSchema = {
    "@type": "SoftwareApplication",
    name: site.name,
    url: site.url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
        "Checkout growth platform for Shopify brands in the Gulf: native AED, SAR, KWD, QAR, BHD and OMR settlement, OTP-verified COD, one-tap returning buyers and per-country payment rules.",
    publisher: { "@id": ORG },
};

type Crumb = { name: string; path: string };

export const breadcrumbSchema = (crumbs: Crumb[]) => ({
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: absoluteUrl(c.path) })),
});

export const pageSchema = (p: { name: string; description: string; path: string; crumbs?: Crumb[] }) =>
    graph(
        {
            "@type": "WebPage",
            "@id": `${absoluteUrl(p.path)}#webpage`,
            url: absoluteUrl(p.path),
            name: p.name,
            description: p.description,
            isPartOf: { "@id": SITE },
            about: { "@id": ORG },
            inLanguage: "en",
        },
        breadcrumbSchema(p.crumbs ?? [{ name: "Home", path: "/" }, { name: p.name, path: p.path }])
    );

export const faqSchema = (faqs: { q: string; a: string }[]) =>
    graph({
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });

export const articleSchema = (a: {
    title: string; description: string; path: string; datePublished: string; dateModified?: string; image?: string; author?: string;
}) =>
    graph(
        {
            "@type": "BlogPosting",
            "@id": `${absoluteUrl(a.path)}#article`,
            headline: a.title,
            description: a.description,
            url: absoluteUrl(a.path),
            mainEntityOfPage: absoluteUrl(a.path),
            datePublished: a.datePublished,
            dateModified: a.dateModified ?? a.datePublished,
            image: a.image ? absoluteUrl(a.image) : LOGO,
            author: a.author ? { "@type": "Person", name: a.author } : { "@id": ORG },
            publisher: { "@id": ORG },
            inLanguage: "en",
        },
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: a.title, path: a.path }])
    );
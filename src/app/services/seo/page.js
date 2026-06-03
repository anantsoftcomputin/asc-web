import SEOService from "./SEOService";
import JsonLd from "../../../components/common/JsonLd";

export const metadata = {
  // Template → "Professional SEO Services India | AnantSoftComputing" (52 chars) ✓
  title: "Professional SEO Services India",
  description: "Drive organic growth with our SEO services — keyword research, technical SEO, on-page optimization, link building & local SEO. Results-focused strategy.",
  keywords: [
    'SEO services India', 'professional SEO company', 'technical SEO services',
    'on-page SEO optimization', 'keyword research services', 'link building services',
    'local SEO India', 'SEO agency Vadodara', 'Google ranking services'
  ],
  alternates: {
    canonical: 'https://anantsoft.com/services/seo',
  },
  openGraph: {
    title: "Professional SEO Services India | AnantSoftComputing",
    description: "Keyword research, technical SEO, on-page optimization, link building & local SEO. Grow your organic traffic with proven strategies.",
    url: 'https://anantsoft.com/services/seo',
    type: 'website',
  },
  twitter: {
    title: "Professional SEO Services India | AnantSoftComputing",
    description: "Technical SEO, on-page optimization, link building & local SEO by AnantSoftComputing.",
  },
};

const seoServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://anantsoft.com/services/seo",
  "name": "SEO Services",
  "alternateName": "Search Engine Optimization Services",
  "description": "AnantSoftComputing offers comprehensive SEO services including technical SEO audits, keyword research, on-page optimization, content strategy, link building, and local SEO to help businesses rank higher and drive organic traffic.",
  "url": "https://anantsoft.com/services/seo",
  "provider": { "@id": "https://anantsoft.com/#organization" },
  "serviceType": "Search Engine Optimization",
  "areaServed": ["IN", "US", "GB"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SEO Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical SEO Audit" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Keyword Research & Strategy" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "On-Page SEO Optimization" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Link Building" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Performance Tracking" } }
    ]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://anantsoft.com/services" },
      { "@type": "ListItem", "position": 3, "name": "SEO Services", "item": "https://anantsoft.com/services/seo" }
    ]
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={seoServiceSchema} />
      <SEOService />
    </>
  );
}

import SEOService from "./SEOService";
import JsonLd from "../../../components/common/JsonLd";

export const metadata = {
  // "Professional SEO Services India | AnantSoftComputing" — 52 chars ✓
  title: "Professional SEO Services India",
  description: "Drive organic growth with data-driven SEO services from AnantSoftComputing — technical SEO, keyword research, on-page optimisation, link building, local SEO & analytics. +85% avg traffic lift.",
  keywords: [
    'SEO services India',
    'professional SEO company India',
    'technical SEO services India',
    'on-page SEO optimisation India',
    'keyword research services India',
    'link building services India',
    'local SEO India',
    'SEO agency Vadodara',
    'Google ranking services India',
    'organic traffic growth India',
    'Core Web Vitals optimisation',
    'schema markup SEO India',
    'SEO for businesses India',
    'search engine optimisation company Gujarat',
  ],
  alternates: {
    canonical: 'https://anantsoft.com/services/seo',
  },
  openGraph: {
    title: "Professional SEO Services India | AnantSoftComputing",
    description: "Keyword research, technical SEO, on-page optimisation, link building & local SEO. +85% avg traffic lift. Grow your organic traffic with proven strategies.",
    url: 'https://anantsoft.com/services/seo',
    type: 'website',
  },
  twitter: {
    title: "Professional SEO Services India | AnantSoftComputing",
    description: "Technical SEO, on-page optimisation, link building & local SEO. +85% avg traffic lift by AnantSoftComputing.",
  },
};

const seoServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://anantsoft.com/services/seo",
  "name": "SEO Services",
  "alternateName": "Search Engine Optimisation Services",
  "description": "AnantSoftComputing offers comprehensive SEO services including technical SEO audits, keyword research, on-page optimisation, content strategy, link building, Core Web Vitals, and local SEO to help businesses rank higher and drive organic traffic.",
  "url": "https://anantsoft.com/services/seo",
  "provider": { "@id": "https://anantsoft.com/#organization" },
  "serviceType": "Search Engine Optimisation",
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "United Kingdom" },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SEO Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical SEO Audit" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Keyword Research & Strategy" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "On-Page SEO Optimisation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Link Building" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO & Google Business Profile" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Core Web Vitals & Speed Optimisation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Performance Tracking & Reporting" } },
    ],
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://anantsoft.com/services" },
      { "@type": "ListItem", "position": 3, "name": "SEO Services", "item": "https://anantsoft.com/services/seo" },
    ],
  },
};

const seoHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How AnantSoftComputing Delivers SEO Results",
  "description": "Our systematic 4-phase SEO process from audit to continuous improvement.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Audit & Analysis",
      "text": "Full technical crawl, competitor analysis, and keyword gap analysis to identify your current SEO status and highest-impact opportunities.",
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Strategy Development",
      "text": "Custom SEO roadmap prioritised by traffic potential and effort — covering technical fixes, content strategy, and link building targets.",
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Implementation",
      "text": "Executing technical SEO fixes, on-page optimisation, content creation, schema markup, and link building campaigns.",
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Monitor & Adjust",
      "text": "Monthly ranking reports, traffic analytics, conversion tracking, and continuous strategy refinement based on data.",
    },
  ],
};

const seoFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does SEO take to show results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO typically shows measurable results within 3–6 months. Technical SEO fixes and on-page changes can improve rankings in 4–8 weeks, while content and link building strategies compound over 6–12 months. AnantSoftComputing tracks progress monthly and adjusts strategy based on data.",
      },
    },
    {
      "@type": "Question",
      "name": "What is technical SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Technical SEO covers the behind-the-scenes factors that affect how search engines crawl and index your site — including page speed, Core Web Vitals, mobile-friendliness, structured data (schema), XML sitemaps, canonical tags, and crawl budget management.",
      },
    },
    {
      "@type": "Question",
      "name": "What is local SEO and do I need it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Local SEO helps your business appear in Google's local map pack and 'near me' searches. It involves optimising your Google Business Profile, building local citations, managing reviews, and targeting location-specific keywords. If you have a physical business or serve a specific city, local SEO is essential.",
      },
    },
    {
      "@type": "Question",
      "name": "Does AnantSoftComputing offer SEO for e-commerce websites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AnantSoftComputing provides e-commerce SEO covering product page optimisation, category page strategy, schema markup for products, Core Web Vitals improvements, and content marketing to drive organic revenue.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={seoServiceSchema} />
      <JsonLd data={seoHowToSchema} />
      <JsonLd data={seoFaqSchema} />
      <SEOService />
    </>
  );
}

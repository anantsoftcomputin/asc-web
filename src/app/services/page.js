import Services from "./Services";
import JsonLd from "../../components/common/JsonLd";

export const metadata = {
  // Template → "IT Services – Software, CRM, Mobile & SEO | AnantSoftComputing" (64 chars — slightly over; trim)
  // "Software, CRM, Mobile App & SEO Services | AnantSoftComputing" = 61 chars — still over
  // "Our IT Services – Custom Software & SEO | AnantSoftComputing" = 60 chars ✓
  title: "Our IT Services – Custom Software & SEO",
  description: "End-to-end IT services: custom software, CRM, ERP, mobile apps & SEO. 10+ years expertise, 250+ projects delivered across India and globally.",
  keywords: [
    'IT services India', 'software development services', 'CRM ERP development',
    'mobile app development services', 'SEO services company', 'custom software solutions'
  ],
  alternates: {
    canonical: 'https://anantsoft.com/services',
  },
  openGraph: {
    title: "IT Services – Custom Software, CRM, Mobile Apps & SEO | AnantSoftComputing",
    description: "End-to-end IT services: custom software, CRM, ERP, mobile apps & SEO. 10+ years, 250+ projects delivered.",
    url: 'https://anantsoft.com/services',
    type: 'website',
  },
  twitter: {
    title: "IT Services – Custom Software, CRM, Mobile Apps & SEO",
    description: "Custom software, CRM, ERP, mobile apps & SEO services. 10+ years, 250+ projects.",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://anantsoft.com/services",
  "name": "IT Services by AnantSoftComputing",
  "description": "Full-spectrum IT services including custom software development, CRM, ERP, mobile app development and SEO.",
  "url": "https://anantsoft.com/services",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://anantsoft.com/services" }
    ]
  },
  "provider": { "@id": "https://anantsoft.com/#organization" },
  "hasPart": [
    { "@type": "Service", "name": "CRM Development", "url": "https://anantsoft.com/services/crm" },
    { "@type": "Service", "name": "Mobile App Development", "url": "https://anantsoft.com/services/mobile" },
    { "@type": "Service", "name": "SEO Services", "url": "https://anantsoft.com/services/seo" },
    { "@type": "Service", "name": "Custom Software Development", "url": "https://anantsoft.com/services/custom" }
  ]
};

export default function Page() {
  return (
    <>
      <JsonLd data={servicesSchema} />
      <Services />
    </>
  );
}

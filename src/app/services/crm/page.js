import CRMService from "./CRMService";
import JsonLd from "../../../components/common/JsonLd";

export const metadata = {
  // Template → "Custom CRM Development Services | AnantSoftComputing" (52 chars) ✓
  title: "Custom CRM Development Services",
  description: "Build a tailor-made CRM with AnantSoftComputing. We automate sales pipelines, manage customer relationships & integrate your tools — built to scale.",
  keywords: [
    'CRM development company India', 'custom CRM software', 'CRM development Vadodara',
    'sales CRM software', 'CRM integration services', 'CRM for small business India'
  ],
  alternates: {
    canonical: 'https://anantsoft.com/services/crm',
  },
  openGraph: {
    title: "Custom CRM Development Services | AnantSoftComputing",
    description: "Tailor-made CRM systems that automate sales, manage customer relationships & integrate with your tools. Built to scale by AnantSoftComputing.",
    url: 'https://anantsoft.com/services/crm',
    type: 'website',
  },
  twitter: {
    title: "Custom CRM Development Services | AnantSoftComputing",
    description: "Custom CRM systems that automate sales, manage relationships & scale with your business.",
  },
};

const crmServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://anantsoft.com/services/crm",
  "name": "CRM Software Development",
  "alternateName": "Custom CRM Development Services",
  "description": "AnantSoftComputing builds custom CRM systems tailored to your business — including contact management, sales pipeline automation, analytics dashboards, cloud integration, and mobile access.",
  "url": "https://anantsoft.com/services/crm",
  "provider": { "@id": "https://anantsoft.com/#organization" },
  "serviceType": "CRM Development",
  "areaServed": { "@type": "Country", "name": "India" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "CRM Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Contact Management CRM" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sales Pipeline Automation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM Analytics & Reporting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM Mobile Integration" } }
    ]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://anantsoft.com/services" },
      { "@type": "ListItem", "position": 3, "name": "CRM Development", "item": "https://anantsoft.com/services/crm" }
    ]
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={crmServiceSchema} />
      <CRMService />
    </>
  );
}

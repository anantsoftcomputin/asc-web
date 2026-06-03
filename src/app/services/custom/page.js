import CustomDevelopment from "./CustomDevelopment";
import JsonLd from "../../../components/common/JsonLd";

export const metadata = {
  // Template → "Custom Software & ERP Development | AnantSoftComputing" (54 chars) ✓
  title: "Custom Software & ERP Development",
  description: "From ERP systems to hospital & NGO platforms — AnantSoftComputing builds bespoke software tailored to your exact business requirements.",
  keywords: [
    'custom software development India', 'bespoke software solutions', 'ERP development company',
    'enterprise software development', 'hospital management software', 'NGO software India',
    'Gaushala management software', 'custom web application development'
  ],
  alternates: {
    canonical: 'https://anantsoft.com/services/custom',
  },
  openGraph: {
    title: "Custom Software & ERP Development | AnantSoftComputing",
    description: "Enterprise ERP, hospital management, NGO platforms & bespoke software — built from scratch to fit your exact business needs.",
    url: 'https://anantsoft.com/services/custom',
    type: 'website',
  },
  twitter: {
    title: "Custom Software & ERP Development | AnantSoftComputing",
    description: "ERP, hospital management, NGO platforms & more — custom-built to your exact business needs.",
  },
};

const customServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://anantsoft.com/services/custom",
  "name": "Custom Software Development",
  "alternateName": "Bespoke Software Development Services",
  "description": "AnantSoftComputing delivers custom software development for enterprises — including ERP systems, hospital management, Gaushala management, NGO platforms, and any complex business application.",
  "url": "https://anantsoft.com/services/custom",
  "provider": { "@id": "https://anantsoft.com/#organization" },
  "serviceType": "Custom Software Development",
  "areaServed": { "@type": "Country", "name": "India" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Custom Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ERP System Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hospital Management Software" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NGO Management Platform" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gaushala Management System" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Application Development" } }
    ]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://anantsoft.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Custom Software Development", "item": "https://anantsoft.com/services/custom" }
    ]
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={customServiceSchema} />
      <CustomDevelopment />
    </>
  );
}

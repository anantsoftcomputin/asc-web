import Home from "../components/home/Home";
import JsonLd from "../components/common/JsonLd";

export const metadata = {
  // Template adds "| AnantSoftComputing" → total: "Custom Software, CRM & SEO Solutions | AnantSoftComputing" (57 chars)
  title: "Custom Software, CRM & SEO Solutions",
  description: "We build custom software, CRM, ERP, mobile apps & deliver SEO services. 10+ years experience, 250+ projects delivered across India and globally.",
  keywords: [
    'custom software development company India', 'CRM development Vadodara',
    'mobile app development company', 'SEO services India', 'ERP software development',
    'IT consulting company Gujarat', 'software development company Vadodara'
  ],
  alternates: {
    canonical: 'https://anantsoft.com',
  },
  openGraph: {
    title: "AnantSoftComputing – Custom Software, CRM & SEO Solutions",
    description: "Custom software, CRM, ERP, mobile apps & SEO services. 10+ years experience, 250+ projects. Based in Vadodara, India.",
    url: 'https://anantsoft.com',
    type: 'website',
  },
  twitter: {
    title: "AnantSoftComputing – Custom Software, CRM & SEO Solutions",
    description: "Custom software, CRM, ERP, mobile apps & SEO services. 10+ years, 250+ projects delivered.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://anantsoft.com/#organization",
  "name": "AnantSoftComputing",
  "alternateName": "Anant Soft Computing",
  "url": "https://anantsoft.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://anantsoft.com/og-default.png",
    "width": 1200,
    "height": 630
  },
  "description": "AnantSoftComputing is a full-service software development company based in Vadodara, India, specializing in custom software, CRM, ERP, mobile apps, and SEO services.",
  "foundingDate": "2013",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 25,
    "maxValue": 60
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 C Satyam Apartment, Vishwas Colony Alkapuri",
    "addressLocality": "Vadodara",
    "addressRegion": "Gujarat",
    "postalCode": "390007",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9638544455",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Gujarati"]
    },
    {
      "@type": "ContactPoint",
      "email": "support@anantsoftcomputing.com",
      "contactType": "technical support"
    }
  ],
  "areaServed": ["IN", "US", "GB", "AU", "AE"],
  "serviceType": [
    "Custom Software Development",
    "CRM Development",
    "ERP Development",
    "Mobile App Development",
    "SEO Services",
    "IT Consulting"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://anantsoft.com/#website",
  "url": "https://anantsoft.com",
  "name": "AnantSoftComputing",
  "description": "Custom software development, CRM, mobile apps, and SEO services company based in India.",
  "publisher": { "@id": "https://anantsoft.com/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://anantsoft.com/blog?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://anantsoft.com/#localbusiness",
  "name": "AnantSoftComputing",
  "image": "https://anantsoft.com/og-default.png",
  "url": "https://anantsoft.com",
  "telephone": "+91-9638544455",
  "email": "support@anantsoftcomputing.com",
  "priceRange": "$$",
  "currenciesAccepted": "INR, USD",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 C Satyam Apartment, Vishwas Colony Alkapuri",
    "addressLocality": "Vadodara",
    "addressRegion": "Gujarat",
    "postalCode": "390007",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 22.3039,
    "longitude": 73.1822
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
};

export default function Page() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={localBusinessSchema} />
      <Home />
    </>
  );
}

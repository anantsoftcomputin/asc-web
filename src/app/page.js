import Home from "../components/home/Home";
import JsonLd from "../components/common/JsonLd";

export const metadata = {
  // "Custom Software, CRM & SEO Solutions | AnantSoftComputing" — 57 chars ✓
  title: "Custom Software, CRM & SEO Solutions",
  description: "AnantSoftComputing builds custom software, CRM, ERP, mobile apps & delivers SEO services for businesses across India. 10+ years, 250+ projects, Vadodara-based global delivery.",
  keywords: [
    'custom software development company India',
    'CRM development Vadodara',
    'mobile app development company India',
    'SEO services India',
    'ERP software development',
    'IT consulting company Gujarat',
    'software development company Vadodara',
    'business software solutions India',
    'web application development India',
    'digital transformation company India',
    'software company Gujarat',
    'AnantSoftComputing',
  ],
  alternates: {
    canonical: 'https://anantsoft.com',
  },
  openGraph: {
    title: "AnantSoftComputing – Custom Software, CRM & SEO Solutions",
    description: "Custom software, CRM, ERP, mobile apps & SEO services. 10+ years, 250+ projects. Based in Vadodara, India.",
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
  "alternateName": ["Anant Soft Computing", "ASC"],
  "url": "https://anantsoft.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://anantsoft.com/og-default.png",
    "width": 1200,
    "height": 630,
  },
  "image": "https://anantsoft.com/og-default.png",
  "description": "AnantSoftComputing is a full-service software development company based in Vadodara, India, specializing in custom software, CRM, ERP, mobile apps, and SEO services since 2013.",
  "foundingDate": "2013",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 25,
    "maxValue": 60,
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1C, Satyam Apartment, Aradhana Society, Vishwas Colony, Alkapuri",
    "addressLocality": "Vadodara",
    "addressRegion": "Gujarat",
    "postalCode": "390005",
    "addressCountry": "IN",
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9638544455",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Gujarati"],
    },
    {
      "@type": "ContactPoint",
      "email": "support@anantsoftcomputing.com",
      "contactType": "technical support",
    },
  ],
  "sameAs": [
    "https://www.facebook.com/anantsoftcomputing/",
    "https://www.instagram.com/anantsoftcomputing/",
    "https://www.google.com/maps/place/Anant+Soft+Computing",
    "https://wa.me/919638544455",
  ],
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "Australia" },
    { "@type": "Country", "name": "United Arab Emirates" },
  ],
  "serviceType": [
    "Custom Software Development",
    "CRM Development",
    "ERP Development",
    "Mobile App Development",
    "SEO Services",
    "IT Consulting",
  ],
  "knowsAbout": [
    "Custom CRM Systems", "ERP Development", "React Native", "Next.js",
    "SEO Strategy", "Mobile App Development", "Firebase", "Node.js",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://anantsoft.com/#website",
  "url": "https://anantsoft.com",
  "name": "AnantSoftComputing",
  "description": "Custom software development, CRM, mobile apps, and SEO services company based in Vadodara, India.",
  "publisher": { "@id": "https://anantsoft.com/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://anantsoft.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  "inLanguage": "en-IN",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://anantsoft.com/#localbusiness",
  "name": "AnantSoftComputing",
  "image": "https://anantsoft.com/og-default.png",
  "url": "https://anantsoft.com",
  "telephone": "+91-9638544455",
  "email": "support@anantsoftcomputing.com",
  "priceRange": "$$",
  "currenciesAccepted": "INR, USD",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer, UPI",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1C, Satyam Apartment, Aradhana Society, Vishwas Colony, Alkapuri",
    "addressLocality": "Vadodara",
    "addressRegion": "Gujarat",
    "postalCode": "390005",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 22.3039,
    "longitude": 73.1822,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00",
    },
  ],
  "sameAs": [
    "https://www.facebook.com/anantsoftcomputing/",
    "https://www.instagram.com/anantsoftcomputing/",
  ],
};

// AEO: FAQPage schema for AI overviews and featured snippets
const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does AnantSoftComputing offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AnantSoftComputing offers custom software development, CRM systems, ERP solutions, mobile app development (iOS & Android), SEO services, and digital strategy consulting. We serve businesses across India and globally from our base in Vadodara, Gujarat.",
      },
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a custom CRM or software system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Small to mid-sized projects typically take 4–8 weeks. Larger platforms such as ERP systems or multi-module CRMs take 3–6 months. We share a detailed timeline after a free discovery session.",
      },
    },
    {
      "@type": "Question",
      "name": "Is AnantSoftComputing based in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AnantSoftComputing is headquartered in Vadodara, Gujarat, India. We have been delivering software projects since 2013 and work with clients across India, the US, UK, Australia, and the UAE.",
      },
    },
    {
      "@type": "Question",
      "name": "Does AnantSoftComputing provide post-launch support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer comprehensive maintenance and support packages after every project — covering bug fixes, updates, performance monitoring, and feature enhancements.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does custom software development cost in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Custom software development costs in India vary by project complexity, team size, and timeline. AnantSoftComputing provides transparent fixed-price or time-and-material quotes after a free consultation. Contact us to get an estimate for your project.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={homeFaqSchema} />
      <Home />
    </>
  );
}

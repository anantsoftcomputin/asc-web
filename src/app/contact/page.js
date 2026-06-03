import ContactPage from "./ContactPage";
import JsonLd from "../../components/common/JsonLd";

export const metadata = {
  // Template → "Contact Us – Free Software Consultation | AnantSoftComputing" (61 chars — 1 over, trim)
  // "Get in Touch – Free Consultation | AnantSoftComputing" = 53 chars ✓
  title: "Get in Touch – Free Consultation",
  description: "Have a project in mind? Get a free consultation from AnantSoftComputing for custom software, CRM, mobile apps or SEO. Reach us in Vadodara or online.",
  keywords: [
    'contact AnantSoftComputing', 'software development quote India',
    'hire software developers India', 'IT company contact Vadodara', 'free software consultation'
  ],
  alternates: {
    canonical: 'https://anantsoft.com/contact',
  },
  openGraph: {
    title: "Contact AnantSoftComputing – Get a Free Project Consultation",
    description: "Free consultation for custom software, CRM, mobile app or SEO projects. Get in touch with AnantSoftComputing today.",
    url: 'https://anantsoft.com/contact',
    type: 'website',
  },
  twitter: {
    title: "Contact AnantSoftComputing – Free Consultation",
    description: "Free consultation for software, CRM, mobile apps or SEO. Contact us today.",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://anantsoft.com/contact",
  "name": "Contact AnantSoftComputing",
  "description": "Contact page for AnantSoftComputing — get in touch for custom software, CRM, mobile apps, and SEO services.",
  "url": "https://anantsoft.com/contact",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://anantsoft.com/contact" }
    ]
  },
  "mainEntity": {
    "@type": "Organization",
    "@id": "https://anantsoft.com/#organization",
    "name": "AnantSoftComputing",
    "telephone": "+91-9638544455",
    "email": "support@anantsoftcomputing.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 C Satyam Apartment, Vishwas Colony Alkapuri",
      "addressLocality": "Vadodara",
      "addressRegion": "Gujarat",
      "postalCode": "390007",
      "addressCountry": "IN"
    }
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <ContactPage />
    </>
  );
}

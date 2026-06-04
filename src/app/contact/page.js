import ContactPage from "./ContactPage";
import JsonLd from "../../components/common/JsonLd";

export const metadata = {
  // "Get in Touch – Free Consultation | AnantSoftComputing" — 53 chars ✓
  title: "Get in Touch – Free Consultation",
  description: "Have a project in mind? Get a free consultation from AnantSoftComputing for custom software, CRM, mobile apps or SEO. Reply within 24 hours. Vadodara & online.",
  keywords: [
    'contact AnantSoftComputing',
    'software development quote India',
    'hire software developers India',
    'IT company contact Vadodara',
    'free software consultation India',
    'software project enquiry India',
    'CRM development consultation',
    'mobile app development quote India',
    'SEO consultation India',
  ],
  alternates: {
    canonical: 'https://anantsoft.com/contact',
  },
  openGraph: {
    title: "Contact AnantSoftComputing – Get a Free Project Consultation",
    description: "Free consultation for custom software, CRM, mobile apps or SEO. Reply within 24 hours. Get in touch with AnantSoftComputing today.",
    url: 'https://anantsoft.com/contact',
    type: 'website',
  },
  twitter: {
    title: "Contact AnantSoftComputing – Free Consultation",
    description: "Free consultation for software, CRM, mobile apps or SEO. Reply within 24 hours.",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://anantsoft.com/contact",
  "name": "Contact AnantSoftComputing",
  "description": "Contact AnantSoftComputing for custom software development, CRM, mobile apps, and SEO services. Free consultation, 24-hour response guarantee.",
  "url": "https://anantsoft.com/contact",
  "inLanguage": "en-IN",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://anantsoft.com/contact" },
    ],
  },
  "mainEntity": {
    "@type": "Organization",
    "@id": "https://anantsoft.com/#organization",
    "name": "AnantSoftComputing",
    "telephone": "+91-9638544455",
    "email": "support@anantsoftcomputing.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1C, Satyam Apartment, Aradhana Society, Vishwas Colony, Alkapuri",
      "addressLocality": "Vadodara",
      "addressRegion": "Gujarat",
      "postalCode": "390005",
      "addressCountry": "IN",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00",
      },
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9638544455",
        "contactType": "sales",
        "contactOption": "TollFree",
        "availableLanguage": ["English", "Hindi", "Gujarati"],
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-9638544455",
        "contactType": "customer service",
        "contactOption": "HearingImpairedSupported",
      },
    ],
  },
};

// AEO: FAQPage for contact-related queries
const contactFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What information should I prepare before contacting AnantSoftComputing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Having a clear project overview, desired timeline, approximate budget, and specific requirements will help us provide the most relevant advice. However, you can also contact us with just a rough idea — we help shape the brief during the free consultation.",
      },
    },
    {
      "@type": "Question",
      "name": "How quickly does AnantSoftComputing respond to enquiries?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AnantSoftComputing responds to all enquiries within 24 hours on business days. A detailed proposal is typically provided within 48 hours, and project kick-off can happen within 7 days of agreement.",
      },
    },
    {
      "@type": "Question",
      "name": "Does AnantSoftComputing offer face-to-face meetings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We welcome in-person meetings at our Vadodara office and virtual meetings via Google Meet, Zoom, or your preferred platform. Our office is at 1C, Satyam Apartment, Aradhana Society, Vishwas Colony, Alkapuri, Vadodara, Gujarat.",
      },
    },
    {
      "@type": "Question",
      "name": "Does AnantSoftComputing offer free project consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AnantSoftComputing offers a free initial consultation for all new project enquiries — covering your requirements, suggested approach, and a rough timeline and budget estimate. No obligation.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd data={contactFaqSchema} />
      <ContactPage />
    </>
  );
}

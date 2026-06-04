import CRMService from "./CRMService";
import JsonLd from "../../../components/common/JsonLd";

export const metadata = {
  // "Custom CRM Development Services | AnantSoftComputing" — 52 chars ✓
  title: "Custom CRM Development Services",
  description: "Build a tailor-made CRM with AnantSoftComputing. Automate sales pipelines, manage leads, track customer relationships & integrate your tools. Built for education, healthcare & enterprise.",
  keywords: [
    'CRM development company India',
    'custom CRM software India',
    'CRM development Vadodara',
    'sales CRM software India',
    'CRM integration services',
    'CRM for small business India',
    'education CRM software India',
    'education institute CRM',
    'CRM for coaching institutes',
    'lead management software India',
    'sales pipeline software India',
    'customer relationship management development',
    'CRM software for NGO',
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
  "description": "AnantSoftComputing builds custom CRM systems including contact management, sales pipeline automation, analytics dashboards, cloud integration, and mobile access — tailored for education, healthcare, and enterprise.",
  "url": "https://anantsoft.com/services/crm",
  "provider": { "@id": "https://anantsoft.com/#organization" },
  "serviceType": "CRM Development",
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United States" },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "CRM Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Contact & Lead Management CRM" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sales Pipeline Automation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM Analytics & Reporting Dashboards" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM Mobile & Offline Access" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Education Institute CRM" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM Third-Party Integration" } },
    ],
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://anantsoft.com/services" },
      { "@type": "ListItem", "position": 3, "name": "CRM Development", "item": "https://anantsoft.com/services/crm" },
    ],
  },
};

const crmHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Build a Custom CRM System",
  "description": "The step-by-step process AnantSoftComputing follows to build and deploy a custom CRM for your business.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Discovery & Requirement Analysis",
      "text": "We map your sales process, team workflows, and data requirements to design the right CRM architecture for your business.",
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "UI/UX Design & Prototype",
      "text": "We create a clickable mobile-first prototype of the CRM interface for your team to review before development starts.",
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "CRM Development & Integration",
      "text": "We build the CRM with your required modules — lead pipeline, contact management, billing, dashboards — and integrate with existing tools.",
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Testing, Training & Launch",
      "text": "We test across all devices, train your team, and launch with a full support package for ongoing improvements.",
    },
  ],
};

const crmFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is custom CRM development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Custom CRM development means building a customer relationship management system specifically for your business processes — rather than using an off-the-shelf product. It includes lead management, sales pipelines, team dashboards, and integrations tailored to your workflow.",
      },
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a custom CRM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A basic CRM with lead management and dashboards takes 6–10 weeks. A full-featured CRM with billing, multi-branch reporting, and integrations typically takes 3–5 months. AnantSoftComputing provides a detailed timeline after a free discovery session.",
      },
    },
    {
      "@type": "Question",
      "name": "Can AnantSoftComputing build a CRM for education institutes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We have built CRM systems specifically for education institutes and coaching centres — including OEC CRM — covering lead management, admission tracking, fee collection, branch performance dashboards, and communication automation.",
      },
    },
    {
      "@type": "Question",
      "name": "What does a custom CRM typically cost in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Custom CRM costs depend on the number of modules, integrations, and team size. AnantSoftComputing provides transparent fixed-price or time-and-material quotes. Contact us for a free estimate tailored to your requirements.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={crmServiceSchema} />
      <JsonLd data={crmHowToSchema} />
      <JsonLd data={crmFaqSchema} />
      <CRMService />
    </>
  );
}

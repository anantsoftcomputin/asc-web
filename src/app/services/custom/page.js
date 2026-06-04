import CustomDevelopment from "./CustomDevelopment";
import JsonLd from "../../../components/common/JsonLd";

export const metadata = {
  // "Custom Software & ERP Development | AnantSoftComputing" — 54 chars ✓
  title: "Custom Software & ERP Development",
  description: "AnantSoftComputing builds bespoke software — ERP systems, hospital management, NGO platforms, portals & automation. Purpose-built for your exact workflow. Free consultation.",
  keywords: [
    'custom software development India',
    'bespoke software solutions India',
    'ERP development company India',
    'enterprise software development India',
    'hospital management software India',
    'NGO software India',
    'Gaushala management software India',
    'custom web application development',
    'portal development India',
    'business process automation India',
    'custom ERP software India',
    'industry-specific software development',
    'workflow automation software India',
  ],
  alternates: {
    canonical: 'https://anantsoft.com/services/custom',
  },
  openGraph: {
    title: "Custom Software & ERP Development | AnantSoftComputing",
    description: "ERP systems, hospital management, NGO platforms & business automation — built from scratch to fit your exact workflow by AnantSoftComputing.",
    url: 'https://anantsoft.com/services/custom',
    type: 'website',
  },
  twitter: {
    title: "Custom Software & ERP Development | AnantSoftComputing",
    description: "ERP, hospital management, NGO platforms & automation — custom-built to your exact business needs.",
  },
};

const customServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://anantsoft.com/services/custom",
  "name": "Custom Software Development",
  "alternateName": ["Bespoke Software Development", "ERP Development Services"],
  "description": "AnantSoftComputing builds custom software for unique business requirements — including ERP systems, hospital management, NGO platforms, Gaushala management, and any complex domain-specific application.",
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
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Application Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Process Automation" } },
    ],
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://anantsoft.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Custom Software Development", "item": "https://anantsoft.com/services/custom" },
    ],
  },
};

const customHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How AnantSoftComputing Builds Custom Software",
  "description": "A transparent 5-phase process for delivering purpose-built software from discovery to deployment.",
  "totalTime": "P13W",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Discovery",
      "text": "We map your real business process, challenges, and goals before writing any code — through business analysis, technical requirements, and solution architecture.",
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Design & Planning",
      "text": "Detailed system architecture, database design, API specifications, and a clickable mobile-first prototype for validation.",
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Development",
      "text": "Agile sprints with regular demos, code reviews, and staged deployments — typically 6–10 weeks for core features.",
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Testing",
      "text": "Unit testing, integration testing, performance testing, and security testing before release.",
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Deployment",
      "text": "Production deployment, system integration, team training, documentation, and SLA-backed ongoing support.",
    },
  ],
};

const customFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is custom software development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Custom software development means building software specifically designed for your unique business processes, rather than adapting an off-the-shelf product. It gives you full ownership, better fit for your workflow, and the ability to scale or modify as your business grows.",
      },
    },
    {
      "@type": "Question",
      "name": "Can AnantSoftComputing build hospital management software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AnantSoftComputing has built hospital management systems including SMHRI Hospital — covering appointment booking, doctor profiles, digital health records, and patient communication. We develop HIPAA-aware, patient-centric systems for clinics and hospitals.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you build NGO or Gaushala management software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AnantSoftComputing builds NGO management platforms and Gaushala management systems with donation tracking, volunteer management, inventory records, reporting, and compliance features.",
      },
    },
    {
      "@type": "Question",
      "name": "What technologies does AnantSoftComputing use for custom software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use Node.js / NestJS, Laravel / PHP, Python / Django, PostgreSQL, MySQL, React, Docker, and Kubernetes depending on project requirements. We select the best technology stack based on your performance, scalability, and maintenance needs.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={customServiceSchema} />
      <JsonLd data={customHowToSchema} />
      <JsonLd data={customFaqSchema} />
      <CustomDevelopment />
    </>
  );
}

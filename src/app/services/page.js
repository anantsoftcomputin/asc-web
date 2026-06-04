import Services from "./Services";
import JsonLd from "../../components/common/JsonLd";

export const metadata = {
  // "Our IT Services – Custom Software & SEO | AnantSoftComputing" — 60 chars ✓
  title: "Our IT Services – Custom Software & SEO",
  description: "End-to-end IT services: custom software, CRM, ERP, mobile apps & SEO from AnantSoftComputing. 250+ projects, 10+ years experience. Free consultation available.",
  keywords: [
    'IT services India',
    'software development services India',
    'CRM ERP development services',
    'mobile app development services India',
    'SEO services company India',
    'custom software solutions',
    'digital strategy consulting India',
    'enterprise software development India',
    'software development Vadodara',
    'full stack development company India',
    'software outsourcing India',
    'IT solutions Gujarat',
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
  "inLanguage": "en-IN",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://anantsoft.com/services" },
    ],
  },
  "provider": { "@id": "https://anantsoft.com/#organization" },
  "hasPart": [
    { "@type": "Service", "name": "CRM Development", "url": "https://anantsoft.com/services/crm" },
    { "@type": "Service", "name": "Mobile App Development", "url": "https://anantsoft.com/services/mobile" },
    { "@type": "Service", "name": "SEO Services", "url": "https://anantsoft.com/services/seo" },
    { "@type": "Service", "name": "Custom Software Development", "url": "https://anantsoft.com/services/custom" },
    { "@type": "Service", "name": "ERP Systems", "url": "https://anantsoft.com/services" },
    { "@type": "Service", "name": "Digital Strategy", "url": "https://anantsoft.com/services" },
  ],
};

// AEO: HowTo schema for the development process section
const developmentProcessSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How AnantSoftComputing Delivers Software Projects",
  "description": "Our systematic 4-phase software development process from discovery to delivery.",
  "totalTime": "P8W",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Discovery",
      "text": "We understand your business requirements, challenges, and goals before writing any code. This includes business analysis, technical requirements, solution architecture, and project planning.",
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Planning",
      "text": "We design the solution architecture, create a detailed project roadmap, and build a clickable mobile-first prototype for your approval.",
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Development",
      "text": "Agile development with regular client updates, sprint reviews, code reviews, and staged deployments throughout the build phase.",
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Delivery",
      "text": "Thorough testing, production deployment, team training, documentation, and ongoing maintenance and support.",
    },
  ],
};

// AEO: FAQPage for AI overviews and featured snippets
const servicesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is your typical project timeline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project timelines vary by complexity. Small projects take 4–8 weeks; larger platforms such as CRM or ERP systems take 3–6 months. We provide a detailed timeline during the initial consultation.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you provide ongoing support after software delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AnantSoftComputing offers comprehensive maintenance and support packages for all services — including regular updates, bug fixes, performance monitoring, and technical assistance.",
      },
    },
    {
      "@type": "Question",
      "name": "What development methodology does AnantSoftComputing follow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We follow agile development with regular client check-ins and sprint reviews. This ensures full transparency and allows for feedback and changes throughout the project lifecycle.",
      },
    },
    {
      "@type": "Question",
      "name": "How do you ensure software quality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We implement rigorous quality assurance through automated testing, code reviews, staged deployments, and thorough QA sign-off on every release before delivery.",
      },
    },
    {
      "@type": "Question",
      "name": "Which industries does AnantSoftComputing serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AnantSoftComputing serves healthcare, education, e-commerce, real estate, manufacturing, NGO, finance, and retail industries. We have delivered 250+ projects across these sectors.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={servicesSchema} />
      <JsonLd data={developmentProcessSchema} />
      <JsonLd data={servicesFaqSchema} />
      <Services />
    </>
  );
}

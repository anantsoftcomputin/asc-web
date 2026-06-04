import PortfolioPage from "./PortfolioPage";
import JsonLd from "../../components/common/JsonLd";

export const metadata = {
  // "Portfolio – 250+ Software Projects | AnantSoftComputing" — 56 chars ✓
  title: "Portfolio – 250+ Software Projects",
  description: "Explore 250+ delivered software projects — CRM, mobile apps, ERP, e-commerce, education & healthcare. Real case studies with results by AnantSoftComputing, Vadodara.",
  keywords: [
    'software portfolio India',
    'CRM case studies India',
    'mobile app portfolio',
    'ERP project examples',
    'software development case studies',
    'AnantSoftComputing projects',
    'education software case study India',
    'healthcare software portfolio',
    'petcare marketplace development',
    'NGO software case study',
    'franchise management software India',
    'custom software examples India',
  ],
  alternates: {
    canonical: 'https://anantsoft.com/portfolio',
  },
  openGraph: {
    title: "Portfolio – 250+ Software Projects Delivered | AnantSoftComputing",
    description: "CRM, mobile apps, ERP & e-commerce — 250+ real-world software projects. Explore our case studies across healthcare, education, NGO, and enterprise.",
    url: 'https://anantsoft.com/portfolio',
    type: 'website',
  },
  twitter: {
    title: "Portfolio – 250+ Projects Delivered | AnantSoftComputing",
    description: "CRM, mobile apps, ERP & e-commerce — 250+ projects. Real case studies by AnantSoftComputing.",
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://anantsoft.com/portfolio",
  "name": "AnantSoftComputing Portfolio & Case Studies",
  "description": "Portfolio of 250+ software development projects including CRM, ERP, mobile apps, and custom platforms delivered by AnantSoftComputing.",
  "url": "https://anantsoft.com/portfolio",
  "inLanguage": "en-IN",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://anantsoft.com/portfolio" },
    ],
  },
  "publisher": { "@id": "https://anantsoft.com/#organization" },
};

// ItemList schema with all hardcoded fallback projects for rich results
const portfolioItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "AnantSoftComputing Software Project Portfolio",
  "description": "Case studies of software projects delivered by AnantSoftComputing across CRM, education, healthcare, NGO, petcare, and enterprise sectors.",
  "url": "https://anantsoft.com/portfolio",
  "numberOfItems": 10,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "CreativeWork",
        "name": "Pawppy.in – Petcare Marketplace",
        "description": "Online marketplace connecting pet owners with verified pet service providers. 5,000+ owners onboarded, 20K+ bookings.",
        "url": "https://pawppy.in",
        "creator": { "@id": "https://anantsoft.com/#organization" },
        "keywords": ["petcare marketplace", "Firebase", "JavaScript", "NodeJS"],
      },
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "CreativeWork",
        "name": "Ikama.in – Franchise Marketplace",
        "description": "Platform connecting entrepreneurs with franchise opportunities. Generated 2,000+ leads with 25% increase in conversion rate.",
        "url": "https://ikama.in",
        "creator": { "@id": "https://anantsoft.com/#organization" },
        "keywords": ["franchise marketplace", "Firebase", "HTML", "CSS"],
      },
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "CreativeWork",
        "name": "OEC CRM – Education CRM System",
        "description": "Enterprise CRM for OEC managing leads, students, fees, counseling, and communication across 50+ branches. 70% productivity lift.",
        "creator": { "@id": "https://anantsoft.com/#organization" },
        "keywords": ["education CRM", "ReactJS", "VueJS", "lead management"],
      },
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "CreativeWork",
        "name": "OEC India – Virtual Learning Platform",
        "description": "Virtual classroom platform with live classes, recorded sessions, and assignment management. Used by 5,000+ active learners.",
        "url": "https://oecindia.com",
        "creator": { "@id": "https://anantsoft.com/#organization" },
        "keywords": ["e-learning platform", "Firebase", "NodeJS", "VueJS"],
      },
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "CreativeWork",
        "name": "Espionline – Online Classroom",
        "description": "Scalable online classroom system with HD live classes, student tracking, and fee management. Reduced operational cost by 35%.",
        "creator": { "@id": "https://anantsoft.com/#organization" },
        "keywords": ["online classroom", "Firebase", "NodeJS", "education software"],
      },
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "CreativeWork",
        "name": "Indraprasth Foundation – NGO Platform",
        "description": "NGO website with donation collection, volunteer applications, and programme showcasing. 200% growth in online donations.",
        "url": "https://indraprasthfoundation.org",
        "creator": { "@id": "https://anantsoft.com/#organization" },
        "keywords": ["NGO website", "ReactJS", "MUI", "donations platform"],
      },
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "CreativeWork",
        "name": "Edustation – School Management Platform",
        "description": "Platform for schools to manage students, attendance, fees, and study materials with responsive dashboards.",
        "creator": { "@id": "https://anantsoft.com/#organization" },
        "keywords": ["school management software", "Bootstrap", "PHP", "education"],
      },
    },
    {
      "@type": "ListItem",
      "position": 8,
      "item": {
        "@type": "CreativeWork",
        "name": "SMHRI Hospital – Healthcare System",
        "description": "Hospital website and management system with appointment booking, doctor profiles, and patient communication. 10,000+ patients served.",
        "url": "https://smhri.com",
        "creator": { "@id": "https://anantsoft.com/#organization" },
        "keywords": ["hospital management software", "Bootstrap", "Python", "healthcare"],
      },
    },
    {
      "@type": "ListItem",
      "position": 9,
      "item": {
        "@type": "CreativeWork",
        "name": "ESPI CRM – Student Management CRM",
        "description": "CRM for ESPI handling leads, inquiries, student management, task workflows, and communication automation. 65% faster lead response.",
        "creator": { "@id": "https://anantsoft.com/#organization" },
        "keywords": ["student management CRM", "Django", "Python", "education CRM"],
      },
    },
    {
      "@type": "ListItem",
      "position": 10,
      "item": {
        "@type": "CreativeWork",
        "name": "StudyStreak – AI Study Platform",
        "description": "AI-powered study planning and analytics platform. Used by 3,000+ students with 30% increase in study consistency.",
        "url": "https://studystreak.com",
        "creator": { "@id": "https://anantsoft.com/#organization" },
        "keywords": ["study app", "NodeJS", "Python", "ReactJS", "AI education"],
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={portfolioSchema} />
      <JsonLd data={portfolioItemListSchema} />
      <PortfolioPage />
    </>
  );
}

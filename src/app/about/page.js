import AboutPage from "./AboutPage";
import JsonLd from "../../components/common/JsonLd";

export const metadata = {
  // "About Us – 10+ Years, 250+ Projects | AnantSoftComputing" — 56 chars ✓
  title: "About Us – 10+ Years, 250+ Projects",
  description: "AnantSoftComputing — Vadodara-based software company since 2013. 50+ experts delivering custom CRM, mobile apps, ERP & SEO across India and globally. 95% client satisfaction.",
  keywords: [
    'about AnantSoftComputing',
    'software company Vadodara Gujarat',
    'IT company India',
    'software development team India',
    'custom software experts Vadodara',
    'software company founded 2013',
    'CRM development company about',
    'software development agency India',
    'best IT company Vadodara',
    'AnantSoftComputing team',
  ],
  alternates: {
    canonical: 'https://anantsoft.com/about',
  },
  openGraph: {
    title: "About AnantSoftComputing – 10+ Years, 250+ Projects Delivered",
    description: "10+ years, 250+ projects, 50+ experts. AnantSoftComputing — Vadodara's trusted software partner for CRM, mobile apps, ERP & SEO.",
    url: 'https://anantsoft.com/about',
    type: 'website',
  },
  twitter: {
    title: "About AnantSoftComputing – 10+ Years, 250+ Projects",
    description: "10+ years, 250+ projects, 50+ experts. Meet the team behind AnantSoftComputing.",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://anantsoft.com/about",
  "name": "About AnantSoftComputing",
  "description": "AnantSoftComputing is a software development company founded in 2013, based in Vadodara, Gujarat. We specialize in custom software, CRM, ERP, mobile apps, and SEO with 95% client satisfaction.",
  "url": "https://anantsoft.com/about",
  "inLanguage": "en-IN",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://anantsoft.com/about" },
    ],
  },
  "publisher": { "@id": "https://anantsoft.com/#organization" },
  "about": {
    "@type": "Organization",
    "@id": "https://anantsoft.com/#organization",
    "name": "AnantSoftComputing",
    "foundingDate": "2013",
    "foundingLocation": { "@type": "Place", "name": "Vadodara, Gujarat, India" },
    "slogan": "Build the business app your team actually uses.",
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2"],
  },
};

const aboutFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When was AnantSoftComputing founded?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AnantSoftComputing was founded in 2013 and is headquartered in Vadodara, Gujarat, India. Over 10+ years we have delivered 250+ software projects for clients across India and internationally.",
      },
    },
    {
      "@type": "Question",
      "name": "What kind of software does AnantSoftComputing build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AnantSoftComputing builds custom CRM systems, ERP platforms, mobile apps (iOS, Android, PWA), web applications, and provides SEO services. We serve education, healthcare, finance, NGO, and e-commerce industries.",
      },
    },
    {
      "@type": "Question",
      "name": "Where is AnantSoftComputing located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AnantSoftComputing is located at 1C, Satyam Apartment, Aradhana Society, Vishwas Colony, Alkapuri, Vadodara, Gujarat 390005, India. We also serve clients remotely across the US, UK, Australia, and UAE.",
      },
    },
    {
      "@type": "Question",
      "name": "How many projects has AnantSoftComputing delivered?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AnantSoftComputing has delivered 250+ software projects across education, healthcare, petcare, NGO, franchise, and enterprise sectors. Our 50+ expert team maintains a 95% client satisfaction rate.",
      },
    },
  ],
};

export default function About() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <JsonLd data={aboutFaqSchema} />
      <AboutPage />
    </>
  );
}

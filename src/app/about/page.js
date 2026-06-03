import AboutPage from "./AboutPage";
import JsonLd from "../../components/common/JsonLd";

export const metadata = {
  // Template adds "| AnantSoftComputing" → total: "About Us – 10+ Years, 250+ Projects | AnantSoftComputing" (56 chars)
  title: "About Us – 10+ Years, 250+ Projects",
  description: "AnantSoftComputing — a Vadodara-based software company since 2013. 50+ experts, 250+ projects in custom software, CRM, mobile apps & SEO. Meet our team.",
  keywords: [
    'about AnantSoftComputing', 'software company Vadodara Gujarat',
    'IT company India', 'software development team', 'custom software experts'
  ],
  alternates: {
    canonical: 'https://anantsoft.com/about',
  },
  openGraph: {
    title: "About AnantSoftComputing – 10+ Years, 250+ Projects Delivered",
    description: "10+ years, 250+ projects, 50+ experts. AnantSoftComputing — Vadodara's trusted software partner for CRM, mobile apps & SEO.",
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
  "description": "AnantSoftComputing is a software development company founded in 2013, based in Vadodara, Gujarat, India. We specialize in custom software, CRM, ERP, mobile apps and SEO services.",
  "url": "https://anantsoft.com/about",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://anantsoft.com/about" }
    ]
  },
  "publisher": { "@id": "https://anantsoft.com/#organization" }
};

export default function About() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <AboutPage />
    </>
  );
}

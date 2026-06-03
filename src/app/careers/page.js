import CareersPage from "./CareersPage";
import JsonLd from "../../components/common/JsonLd";

export const metadata = {
  // Template → "Careers – Tech Jobs in Vadodara, India | AnantSoftComputing" (60 chars) ✓
  title: "Careers – Tech Jobs in Vadodara, India",
  description: "Join AnantSoftComputing! We're hiring software developers, mobile engineers & SEO specialists. Build innovative, scalable solutions that matter.",
  keywords: [
    'careers AnantSoftComputing', 'software developer jobs Vadodara', 'IT jobs Gujarat India',
    'web developer jobs India', 'mobile app developer jobs', 'SEO specialist jobs India',
    'tech jobs Vadodara', 'software company hiring India'
  ],
  alternates: {
    canonical: 'https://anantsoft.com/careers',
  },
  openGraph: {
    title: "Careers at AnantSoftComputing – Tech Jobs in Vadodara",
    description: "We're hiring software developers, mobile engineers & SEO specialists. Join AnantSoftComputing and build innovative software that matters.",
    url: 'https://anantsoft.com/careers',
    type: 'website',
  },
  twitter: {
    title: "Careers at AnantSoftComputing – Tech Jobs in Vadodara",
    description: "Hiring software developers, engineers & SEO specialists. Join our team in Vadodara.",
  },
};

const careersSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://anantsoft.com/careers",
  "name": "Careers at AnantSoftComputing",
  "description": "Job opportunities at AnantSoftComputing — software developers, mobile engineers, SEO specialists, and designers.",
  "url": "https://anantsoft.com/careers",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "Careers", "item": "https://anantsoft.com/careers" }
    ]
  },
  "employer": { "@id": "https://anantsoft.com/#organization" }
};

export default function Careers() {
  return (
    <>
      <JsonLd data={careersSchema} />
      <CareersPage />
    </>
  );
}

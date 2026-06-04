import CareersPage from "./CareersPage";
import JsonLd from "../../components/common/JsonLd";

export const metadata = {
  // "Careers – Tech Jobs in Vadodara, India | AnantSoftComputing" — 60 chars ✓
  title: "Careers – Tech Jobs in Vadodara, India",
  description: "Join AnantSoftComputing! Hiring software developers, mobile engineers & SEO specialists in Vadodara. Remote-friendly, growth culture, real product ownership.",
  keywords: [
    'careers AnantSoftComputing',
    'software developer jobs Vadodara',
    'IT jobs Gujarat India',
    'web developer jobs India',
    'mobile app developer jobs India',
    'SEO specialist jobs India',
    'tech jobs Vadodara Gujarat',
    'software company hiring India',
    'React developer jobs India',
    'Node.js developer jobs India',
    'Flutter developer jobs India',
    'remote software developer jobs India',
  ],
  alternates: {
    canonical: 'https://anantsoft.com/careers',
  },
  openGraph: {
    title: "Careers at AnantSoftComputing – Tech Jobs in Vadodara",
    description: "Hiring software developers, mobile engineers & SEO specialists. Remote-friendly, growth culture. Join AnantSoftComputing in Vadodara.",
    url: 'https://anantsoft.com/careers',
    type: 'website',
  },
  twitter: {
    title: "Careers at AnantSoftComputing – Tech Jobs in Vadodara",
    description: "Hiring software developers, engineers & SEO specialists. Remote-friendly. Join our team.",
  },
};

const careersSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://anantsoft.com/careers",
  "name": "Careers at AnantSoftComputing",
  "description": "Open technology roles at AnantSoftComputing — software developers, mobile engineers, SEO specialists, and designers in Vadodara, India.",
  "url": "https://anantsoft.com/careers",
  "inLanguage": "en-IN",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "Careers", "item": "https://anantsoft.com/careers" },
    ],
  },
  "employer": { "@id": "https://anantsoft.com/#organization" },
  "about": {
    "@type": "Organization",
    "@id": "https://anantsoft.com/#organization",
    "name": "AnantSoftComputing",
  },
};

// AEO: FAQPage for career-related queries in AI overviews
const careersFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the recruitment process at AnantSoftComputing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AnantSoftComputing's recruitment process includes: (1) Application review — 1–2 days; (2) Technical assessment — 3–5 days; (3) Team interview — 1 day; (4) Final discussion and offer — 1–2 days. The entire process typically takes 2–3 weeks.",
      },
    },
    {
      "@type": "Question",
      "name": "Does AnantSoftComputing offer remote work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AnantSoftComputing offers hybrid and remote work options depending on the role and team requirements. We believe in providing flexibility while maintaining collaborative efficiency.",
      },
    },
    {
      "@type": "Question",
      "name": "What learning opportunities does AnantSoftComputing provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer regular training sessions, conference attendance, online course subscriptions, and dedicated learning time each week for personal and professional development.",
      },
    },
    {
      "@type": "Question",
      "name": "How does AnantSoftComputing support career growth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AnantSoftComputing has a structured career development programme with regular performance reviews, mentorship opportunities, and clear growth paths across technical and management tracks.",
      },
    },
    {
      "@type": "Question",
      "name": "What roles is AnantSoftComputing hiring for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AnantSoftComputing hires software developers (React, Node.js, Python), mobile app developers (React Native, Flutter), SEO specialists, UI/UX designers, and project managers. See the careers page for current openings.",
      },
    },
  ],
};

export default function Careers() {
  return (
    <>
      <JsonLd data={careersSchema} />
      <JsonLd data={careersFaqSchema} />
      <CareersPage />
    </>
  );
}

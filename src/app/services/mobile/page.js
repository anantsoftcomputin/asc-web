import MobileAppService from "./MobileAppService";
import JsonLd from "../../../components/common/JsonLd";

export const metadata = {
  // "Mobile App Development – iOS & Android | AnantSoftComputing" — 60 chars ✓
  title: "Mobile App Development – iOS & Android",
  description: "High-performance iOS & Android apps by AnantSoftComputing. Native, cross-platform & PWA development. React Native, Flutter, offline-first UX. Based in India.",
  keywords: [
    'mobile app development India',
    'iOS app development company India',
    'Android app development India',
    'cross-platform app development',
    'React Native development India',
    'Flutter development India',
    'mobile app developers Vadodara',
    'PWA development India',
    'progressive web app development',
    'business mobile app development',
    'mobile app development company Gujarat',
    'hybrid app development India',
  ],
  alternates: {
    canonical: 'https://anantsoft.com/services/mobile',
  },
  openGraph: {
    title: "Mobile App Development – iOS & Android | AnantSoftComputing",
    description: "High-performance iOS & Android apps — native, cross-platform & PWA. Built for usability, performance & scale by AnantSoftComputing.",
    url: 'https://anantsoft.com/services/mobile',
    type: 'website',
  },
  twitter: {
    title: "Mobile App Development – iOS & Android | AnantSoftComputing",
    description: "High-performance iOS & Android apps — native, cross-platform & PWA by AnantSoftComputing.",
  },
};

const mobileServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://anantsoft.com/services/mobile",
  "name": "Mobile App Development",
  "alternateName": ["iOS and Android App Development", "PWA Development"],
  "description": "AnantSoftComputing develops native and cross-platform mobile apps for iOS and Android, focusing on performance, user experience, offline-first support, and scalability using React Native and Flutter.",
  "url": "https://anantsoft.com/services/mobile",
  "provider": { "@id": "https://anantsoft.com/#organization" },
  "serviceType": "Mobile App Development",
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "United Arab Emirates" },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Mobile App Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "iOS App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Android App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "React Native Cross-Platform Apps" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flutter App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Progressive Web App (PWA) Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "App Store & Play Store Submission" } },
    ],
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://anantsoft.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Mobile App Development", "item": "https://anantsoft.com/services/mobile" },
    ],
  },
};

const mobileHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How AnantSoftComputing Builds Mobile Apps",
  "description": "Our end-to-end mobile app development process from kickoff to App Store launch.",
  "totalTime": "P12W",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Project Kickoff",
      "text": "Requirements gathering, user story mapping, tech stack selection, and project planning.",
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "UI/UX Design",
      "text": "Creating wireframes, high-fidelity designs, and interactive prototypes optimised for mobile touch and navigation patterns.",
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Core Development",
      "text": "Building app features with React Native or Flutter, integrating APIs, implementing offline-first caching, push notifications, and analytics.",
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Testing & QA",
      "text": "Device compatibility testing, performance profiling, crash reporting setup, and user acceptance testing.",
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Launch Preparation",
      "text": "App Store and Google Play Store submission, metadata optimisation, screenshots, and post-launch monitoring.",
    },
  ],
};

const mobileFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between native and cross-platform mobile apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Native apps are built separately for iOS (Swift) and Android (Kotlin), delivering the best performance and device integration. Cross-platform apps (React Native, Flutter) use a shared codebase for both platforms, reducing cost and time-to-market while maintaining near-native performance.",
      },
    },
    {
      "@type": "Question",
      "name": "What is a Progressive Web App (PWA)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A PWA is a website that behaves like a mobile app — installable from the browser, works offline, supports push notifications, and loads fast. AnantSoftComputing builds PWAs that combine the reach of the web with the experience of a native app.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does mobile app development cost in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mobile app development costs in India vary by platform (iOS, Android, or both), features, and design complexity. AnantSoftComputing provides transparent quotes after a free discovery session. Contact us for an estimate.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you submit the app to the App Store and Google Play?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AnantSoftComputing handles the full App Store and Google Play submission process — including store listing, screenshots, metadata optimisation, and responding to review feedback.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={mobileServiceSchema} />
      <JsonLd data={mobileHowToSchema} />
      <JsonLd data={mobileFaqSchema} />
      <MobileAppService />
    </>
  );
}

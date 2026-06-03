import MobileAppService from "./MobileAppService";
import JsonLd from "../../../components/common/JsonLd";

export const metadata = {
  // Template → "Mobile App Development – iOS & Android | AnantSoftComputing" (60 chars) ✓
  title: "Mobile App Development – iOS & Android",
  description: "High-performance iOS & Android apps by AnantSoftComputing. Native & cross-platform mobile development focused on UX, performance and scalability.",
  keywords: [
    'mobile app development India', 'iOS app development company', 'Android app development',
    'cross-platform app development', 'React Native development', 'Flutter development India',
    'mobile app developers Vadodara'
  ],
  alternates: {
    canonical: 'https://anantsoft.com/services/mobile',
  },
  openGraph: {
    title: "Mobile App Development – iOS & Android | AnantSoftComputing",
    description: "High-performance iOS & Android apps — native & cross-platform. Built for usability, performance & scale by AnantSoftComputing.",
    url: 'https://anantsoft.com/services/mobile',
    type: 'website',
  },
  twitter: {
    title: "Mobile App Development – iOS & Android | AnantSoftComputing",
    description: "High-performance iOS & Android apps — native & cross-platform by AnantSoftComputing.",
  },
};

const mobileServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://anantsoft.com/services/mobile",
  "name": "Mobile App Development",
  "alternateName": "iOS and Android App Development",
  "description": "AnantSoftComputing develops native and cross-platform mobile applications for iOS and Android, focusing on performance, user experience, and scalability.",
  "url": "https://anantsoft.com/services/mobile",
  "provider": { "@id": "https://anantsoft.com/#organization" },
  "serviceType": "Mobile App Development",
  "areaServed": { "@type": "Country", "name": "India" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Mobile App Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "iOS App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Android App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cross-Platform App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile UI/UX Design" } }
    ]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://anantsoft.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Mobile App Development", "item": "https://anantsoft.com/services/mobile" }
    ]
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={mobileServiceSchema} />
      <MobileAppService />
    </>
  );
}

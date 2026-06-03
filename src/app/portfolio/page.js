import PortfolioPage from "./PortfolioPage";
import JsonLd from "../../components/common/JsonLd";

export const metadata = {
  // Template → "Portfolio – 250+ Software Projects | AnantSoftComputing" (56 chars) ✓
  title: "Portfolio – 250+ Software Projects",
  description: "Explore 250+ delivered software projects — CRM, mobile apps, ERP, e-commerce & more. Real case studies across diverse industries by AnantSoftComputing.",
  keywords: [
    'software portfolio India', 'CRM case studies', 'mobile app portfolio',
    'ERP project examples', 'software development case studies',
    'AnantSoftComputing projects', 'custom software examples'
  ],
  alternates: {
    canonical: 'https://anantsoft.com/portfolio',
  },
  openGraph: {
    title: "Portfolio – 250+ Software Projects Delivered | AnantSoftComputing",
    description: "CRM, mobile apps, ERP & e-commerce — 250+ real-world software projects. Explore our case studies and success stories.",
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
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://anantsoft.com/portfolio" }
    ]
  },
  "publisher": { "@id": "https://anantsoft.com/#organization" }
};

export default function Page() {
  return (
    <>
      <JsonLd data={portfolioSchema} />
      <PortfolioPage />
    </>
  );
}

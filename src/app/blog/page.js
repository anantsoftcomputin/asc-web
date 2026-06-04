import BlogPage from "./BlogPage";
import JsonLd from "../../components/common/JsonLd";

export const metadata = {
  // "Software Development & SEO Blog | AnantSoftComputing" — 52 chars ✓
  title: "Software Development & SEO Blog",
  description: "Expert articles on custom software, CRM systems, mobile apps & SEO from AnantSoftComputing engineers. Practical guides, industry insights, and technology trends.",
  keywords: [
    'software development blog India',
    'CRM insights and guides',
    'SEO tips India',
    'mobile app development blog',
    'IT consulting articles India',
    'tech blog India',
    'AnantSoftComputing blog',
    'custom software guides',
    'ERP software insights',
    'web development tips India',
    'digital transformation articles',
  ],
  alternates: {
    canonical: 'https://anantsoft.com/blog',
  },
  openGraph: {
    title: "Software Development & SEO Blog | AnantSoftComputing",
    description: "Expert articles on custom software, CRM, mobile apps & SEO from the AnantSoftComputing team. Practical guides and technology insights.",
    url: 'https://anantsoft.com/blog',
    type: 'website',
  },
  twitter: {
    title: "Software Development & SEO Blog | AnantSoftComputing",
    description: "Expert articles on software, CRM, mobile apps & SEO from AnantSoftComputing.",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://anantsoft.com/blog",
  "name": "AnantSoftComputing Blog",
  "description": "Expert insights on custom software development, CRM, mobile apps, SEO strategies, and enterprise technology from the AnantSoftComputing team.",
  "url": "https://anantsoft.com/blog",
  "inLanguage": "en-IN",
  "publisher": { "@id": "https://anantsoft.com/#organization" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://anantsoft.com/blog" },
    ],
  },
  "about": [
    { "@type": "Thing", "name": "Custom Software Development" },
    { "@type": "Thing", "name": "CRM Systems" },
    { "@type": "Thing", "name": "Mobile App Development" },
    { "@type": "Thing", "name": "Search Engine Optimisation" },
    { "@type": "Thing", "name": "ERP Systems" },
  ],
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2"],
  },
};

export default function Blog() {
  return (
    <>
      <JsonLd data={blogSchema} />
      <BlogPage />
    </>
  );
}

import BlogPage from "./BlogPage";
import JsonLd from "../../components/common/JsonLd";

export const metadata = {
  // Template → "Software Development & SEO Blog | AnantSoftComputing" (52 chars) ✓
  title: "Software Development & SEO Blog",
  description: "Expert articles on custom software, CRM, mobile apps & SEO from the AnantSoftComputing team. Tips, trends & technology insights from our engineers.",
  keywords: [
    'software development blog', 'CRM insights', 'SEO tips India', 'mobile app development blog',
    'IT consulting articles', 'tech blog India', 'AnantSoftComputing blog'
  ],
  alternates: {
    canonical: 'https://anantsoft.com/blog',
  },
  openGraph: {
    title: "Software Development & SEO Blog | AnantSoftComputing",
    description: "Expert articles on custom software, CRM, mobile apps & SEO from the AnantSoftComputing team. Tips, trends & technology insights.",
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
  "description": "Expert insights on custom software development, CRM, mobile apps, SEO strategies and enterprise technology.",
  "url": "https://anantsoft.com/blog",
  "publisher": { "@id": "https://anantsoft.com/#organization" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anantsoft.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://anantsoft.com/blog" }
    ]
  }
};

export default function Blog() {
  return (
    <>
      <JsonLd data={blogSchema} />
      <BlogPage />
    </>
  );
}

// src/app/sitemap.js

const BASE_URL = "https://anantsoft.com";

const staticPages = [
  { path: "/", priority: 1.0 },
  { path: "/about", priority: 0.8 },
  { path: "/services", priority: 0.8 },
  { path: "/services/seo", priority: 0.8 },
  { path: "/services/crm", priority: 0.8 },
  { path: "/services/mobile", priority: 0.8 },
  { path: "/services/custom", priority: 0.8 },
  { path: "/portfolio", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/careers", priority: 0.8 },
  { path: "/blog", priority: 0.9 },
  { path: "/privacy-policy", priority: 0.5 },
];

const blogSlugs = [
  'custom-vs-off-the-shelf-2025',
  'choosing-right-crm-2025',
  'sme-digital-transformation-2025',
  'future-cloud-computing-2025',
  'pwas-vs-native-apps-2025',
  'low-code-vs-no-code-2025',
  'edge-computing-data-processing-2025',
  'ai-in-software-development-2025',
  'optimizing-database-performance-2025',
  'microservices-architecture-business-growth',
  'api-integration-mastery-2025',
  'devops-vs-devsecops-2025',
  'clean-code-tips-2025',
  'hospital-website-features-2025',
  'responsive-design-non-negotiable-2025',
  'ux-ui-design-increasing-conversions-2025',
  'seo-friendly-website-design-from-scratch',
  'ecommerce-website-features-2025',
  'how-pwas-are-changing-the-game-2025',
  'mobile-app-security-features-2025',
  'key-features-healthcare-mobile-app',
  'flutter-vs-react-native-2025',
  'why-your-business-needs-a-mobile-app-2025',
  'common-seo-mistakes-to-avoid',
  'seo-for-ecommerce-websites-strategies-2025',
  'ai-in-keyword-research-content-optimization',
  'seo-strategies-small-business-2025',
  'future-of-erp-2025-trends',
  'crm-features-for-nonprofits-2025',
  'off-the-shelf-vs-custom-crm-erp-2025',
  'erp-systems-for-manufacturing-2025',
  'why-every-business-needs-custom-crm-2025',
  'flyurdream-overseas-education-crm'
];

export default function sitemap() {
  const today = new Date().toISOString();

  return [
    ...staticPages.map((p) => ({
      url: `${BASE_URL}${p.path}`,
      priority: p.priority,
      changeFrequency: "daily",
      lastModified: today,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      priority: 0.9,
      changeFrequency: "daily",
      lastModified: today,
    })),
  ];
}
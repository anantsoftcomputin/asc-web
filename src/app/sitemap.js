// src/app/sitemap.js
import { blogAPI } from '../lib/firebase-admin';
import { caseStudies, localSeoPages, solutionPages } from '../lib/growth-pages';
import { growthBlogPosts } from '../lib/growth-blog-posts';

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
  ...solutionPages.map((page) => ({ path: `/solutions/${page.slug}`, priority: 0.9 })),
  ...caseStudies.map((study) => ({ path: `/case-studies/${study.slug}`, priority: 0.85 })),
  ...localSeoPages.map((page) => ({ path: `/vadodara/${page.slug}`, priority: 0.85 })),
];

export default async function sitemap() {
  const today = new Date().toISOString();

  let blogEntries = [];
  try {
    const result = await blogAPI.getAll();
    if (result.success && result.data.length > 0) {
      blogEntries = result.data
        .filter((post) => post.slug)
        .map((post) => ({
          url: `${BASE_URL}/blog/${post.slug}`,
          priority: 0.9,
          changeFrequency: "daily",
          lastModified: post.updatedAt?.toDate?.()?.toISOString() ?? today,
        }));
    }
  } catch (_e) {
    // Firestore unavailable during build; static growth posts below still render.
  }

  const existingBlogUrls = new Set(blogEntries.map((entry) => entry.url));
  const staticBlogEntries = growthBlogPosts
    .map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: today,
    }))
    .filter((entry) => !existingBlogUrls.has(entry.url));

  return [
    ...staticPages.map((p) => ({
      url: `${BASE_URL}${p.path}`,
      priority: p.priority,
      changeFrequency: "daily",
      lastModified: today,
    })),
    ...blogEntries,
    ...staticBlogEntries,
  ];
}

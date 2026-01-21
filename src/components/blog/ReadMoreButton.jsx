"use client";

import Link from "next/link";

export default function ReadMoreButton({ post }) {
  const href = post?.slug ? `/blog/${post.slug}` : post?.url || "#";
  const isExternal = typeof href === "string" && /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 transform hover:scale-102 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white shadow-lg shadow-primary-200/30 focus:ring-primary-400 px-4 py-2 text-sm"
      >
        <span className="flex items-center">Read More</span>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 transform hover:scale-102 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white shadow-lg shadow-primary-200/30 focus:ring-primary-400 px-4 py-2 text-sm"
      tabIndex={0}
    >
      <span className="flex items-center">Read More</span>
    </Link>
  );
}

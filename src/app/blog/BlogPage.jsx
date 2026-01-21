"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { Search, ArrowUp } from "lucide-react";
import { blogAPI } from "../../lib/firebase-admin";
import Image from "next/image";

const PRODUCTION_CATEGORIES = [
  "All",
  "CRM / ERP",
  "Mobile Apps",
  "SEO",
  "Web Development",
];

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Pagination
  const [pageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    setLoading(true);
    const result = await blogAPI.getAll();
    if (result.success) {
      setBlogPosts(result.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return blogPosts.filter((p) => {
      const catMatch =
        selectedCategory === "All" || p.category === selectedCategory;
      const searchMatch =
        q === "" ||
        (p.title && p.title.toLowerCase().includes(q)) ||
        (p.excerpt && p.excerpt.toLowerCase().includes(q));
      return catMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

  useEffect(() => setCurrentPage(1), [selectedCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize));

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredPosts.slice(start, start + pageSize);
  }, [filteredPosts, currentPage, pageSize]);

  const goToPage = (n) => {
    const page = Math.max(1, Math.min(totalPages, n));
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-primary-50/50 via-white to-secondary-50/50"
    >
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-b from-primary-100 via-white to-secondary-100">
        {/* Background Blobs */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute -top-4 -right-4 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative pt-32 pb-16 text-center lg:pt-40">
          <div className="mx-auto max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold tracking-tight text-dark sm:text-6xl md:text-7xl"
            >
              Insights & Innovation
              <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Tech Blog
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl"
            >
              Explore the latest in technology, development insights, and
              industry trends
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 relative max-w-2xl mx-auto"
            >
              <input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-white rounded-full shadow-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
              <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production category nav + grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {PRODUCTION_CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      active
                        ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20"
                        : "bg-white text-gray-600 hover:bg-primary-50"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPosts.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No posts found.</p>
              </div>
            ) : (
              currentPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-calendar w-3 h-3"
                        >
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        {post.publishedAt}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-6 h-6 rounded-full"
                        />
                        <div>
                          <div className="text-xs font-medium text-gray-900">
                            {post.author.name}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 transform hover:scale-102 border-2 border-primary-400 text-primary-600 hover:bg-primary-50 px-4 py-2 text-sm"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left w-6 h-6 text-gray-600"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                const active = page === currentPage;
                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-10 h-10 rounded-full shadow-md ${
                      active
                        ? "bg-primary-600 text-white"
                        : "bg-white text-gray-600 hover:bg-primary-50"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right w-6 h-6 text-gray-600"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter (kept) */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-primary-100 mb-8">
              Get the latest insights and updates delivered directly to your
              inbox
            </p>
            <form
              className="flex gap-4 max-w-md mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed (demo)");
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-primary-600 rounded-full font-medium hover:bg-primary-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors z-50"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

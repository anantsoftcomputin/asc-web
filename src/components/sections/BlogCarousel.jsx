import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReadMoreButton from "../blog/ReadMoreButton";

export default function BlogCarousel({ posts }) {
  const sample = [
    {
      id: 1,
      tag: "SEO",
      date: "2024-11-25",
      title: "Common SEO Mistakes to Avoid for Better Rankings",
      excerpt: "In the competitive world of digital marketing,...",
      image:
        "https://anantsoftcomputing.com/media/blog/posts/seo-mistakes-to-avoid-when-getting-started.webp",
      author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    },
    {
      id: 2,
      tag: "SEO",
      date: "2024-11-25",
      title: "SEO for E-commerce Websites: Strategies to Increase Sales",
      excerpt: "In the highly competitive world of e-commerce,...",
      image:
        "https://anantsoftcomputing.com/media/blog/posts/7-Best-SEO-Strategies-for-Ecommerce-Website.png",
      author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    },
    {
      id: 3,
      tag: "SEO",
      date: "2024-11-25",
      title:
        "How AI is Revolutionizing Keyword Research and Content Optimization",
      excerpt: "The digital marketing landscape is undergoing a...",
      image:
        "https://anantsoftcomputing.com/media/blog/posts/AI-and-Predictive-Analytics-in-SEO-d675455bf1e8683fd51846f455ac36aa.webp",
      author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    },
    {
      id: 4,
      tag: "SEO",
      date: "2024-11-25",
      title: "Top 10 SEO Strategies for Small Businesses in 2025",
      excerpt: "In 2025, staying visible online is crucial...",
      image:
        "https://anantsoftcomputing.com/media/blog/posts/small-business-seo-scaled_QJj4TgM.webp",
      author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    },
  ];

  const data = posts && posts.length ? posts : sample;

  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      return new Date(dateString).toLocaleDateString("en-GB");
    } catch (e) {
      return dateString;
    }
  };

  return (
    <section className="py-16 m-4 p-4">
      <div className="container mx-auto px-4">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center justify-center font-medium rounded-full bg-primary/10 text-primary px-2.5 py-1 text-sm mb-4 bg-primary-100 text-primary-600 px-4 py-2">
              Our Blogs
            </span>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Insights &amp; Innovation Tech Blog
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the latest in technology, development insights, and
              industry trends
            </p>
          </div>
        </div>
        <div className="overflow-x-auto -mx-2 py-4">
          <div className="flex gap-5 px-2 snap-x snap-mandatory">
            {data.map((post) => (
              <article
                key={post.id}
                className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] snap-start bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full"
              >
                <div className="h-[200px] w-full relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    fill
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs">
                      {post.tag}
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
                        aria-hidden
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      {formatDate(post.date)}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    <button className="hover:text-primary-600 transition-colors text-left">
                      {post.title}
                    </button>
                  </h2>

                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src={post.author?.avatar}
                        alt={post.author?.name}
                        className="w-6 h-6 rounded-full"
                        fill
                      />
                      <div>
                        <div className="text-xs font-medium text-gray-900">
                          {post.author?.name}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <ReadMoreButton post={post} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

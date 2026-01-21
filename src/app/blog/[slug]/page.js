import { notFound } from "next/navigation";
import { blogAPI } from "../../../lib/firebase-admin";
import Link from "next/link";
import { Card } from "../../../components/common";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


// This tells Next.js which pages to pre-render
export async function generateStaticParams() {
  const result = await blogAPI.getAll();
  if (!result.success) return [];
  
  return result.data.map((post) => ({
    slug: post.slug
  }));
}


export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = Array.isArray(resolvedParams.slug)
    ? resolvedParams.slug.join("/")
    : resolvedParams.slug;

  const result = await blogAPI.getBySlug(slug);
  if (!result.success || !result.data) {
    notFound();
  }

  const post = result.data;

  return {
    title: `${post.title} | AnantSoftComputing`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.thumbnail],
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author?.name || 'ASC'],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const slug = Array.isArray(resolvedParams.slug)
    ? resolvedParams.slug.join("/")
    : resolvedParams.slug;

  const result = await blogAPI.getBySlug(slug);
  if (!result.success || !result.data) {
    notFound();
  }

  const post = result.data;
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white py-12">
      {/* Back Button */}
      <div className="container mx-auto px-4 mt-8">
        <nav>
          <Link
            href="/blog"
            className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center"
          >
            ← Back to Blog
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <article className="pb-20">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-600 text-sm">
              <span>{post.publishedAt}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
            </div>

            {/* Thumbnail */}
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-72 md:h-96 object-cover rounded-xl shadow-sm mb-10"
            />

            {/* Content */}
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              <p className="mb-8">{post.excerpt}</p>
            </div>

            <Card className="p-8 shadow-md border rounded-xl">
              <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed prose-headings:mt-10 prose-headings:mb-6 prose-li:mb-3 prose-img:rounded-xl">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    // Paragraphs: add vertical spacing and relaxed leading
                    p: ({ node, children, ...props }) => (
                      <p
                        className="mb-6 text-gray-800 leading-relaxed"
                        {...props}
                      >
                        {children}
                      </p>
                    ),
                    // Headings: add spacing and preserve sizes
                    h1: ({ node, children, ...props }) => (
                      <h1
                        className="text-2xl md:text-3xl font-bold mt-8 mb-4"
                        {...props}
                      >
                        {children}
                      </h1>
                    ),
                    h2: ({ node, children, ...props }) => (
                      <h2
                        className="text-xl md:text-2xl font-semibold mt-8 mb-3"
                        {...props}
                      >
                        {children}
                      </h2>
                    ),
                    h3: ({ node, children, ...props }) => (
                      <h3
                        className="text-lg font-semibold mt-6 mb-2"
                        {...props}
                      >
                        {children}
                      </h3>
                    ),
                    // Lists: add spacing between list items
                    li: ({ node, children, ...props }) => (
                      <li className="mb-2 ml-6 list-disc" {...props}>
                        {children}
                      </li>
                    ),
                    // Images: make sure images have margin
                    img: ({ node, ...props }) => (
                      // className can be merged as required
                      <img className="rounded-lg my-6" {...props} />
                    ),
                    // Code blocks (optional)
                    code: ({ node, inline, className, children, ...props }) =>
                      inline ? (
                        <code
                          className="bg-gray-100 px-1 rounded text-sm"
                          {...props}
                        >
                          {children}
                        </code>
                      ) : (
                        <pre
                          className="bg-gray-900 text-white p-4 rounded overflow-x-auto"
                          {...props}
                        >
                          <code>{children}</code>
                        </pre>
                      ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </Card>
          </article>
        </div>
      </div>
    </div>
  );
}

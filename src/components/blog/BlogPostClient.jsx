'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  Clock,
  Share2,
  Bookmark,
  MessageCircle,
  Eye,
  ArrowLeft,
  Tag,
  ArrowUp,
  Check
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function BlogPostClient({ post }) {
  const router = useRouter()
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [showShareTooltip, setShowShareTooltip] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0
      setScrollProgress(progress)
      setShowScrollTop(scrolled > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleShare = (platform) => {
    const shareUrl = window.location.href
    const shareText = `Check out this article: ${post.title}`

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`)
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`)
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`)
        break
      case 'copy':
        navigator.clipboard.writeText(shareUrl)
        setShowShareTooltip(true)
        setTimeout(() => setShowShareTooltip(false), 2000)
        break
      default:
        break
    }
  }

  // Add mock content for demonstration
  const mockContent = `
    <h2>Introduction</h2>
    <p>${post.excerpt}</p>
    
    <h2>Key Insights</h2>
    <p>This article explores the latest trends and best practices in ${post.category}. We'll dive deep into the strategies that can help your business succeed in today's competitive landscape.</p>
    
    <h2>Main Content</h2>
    <p>${post.excerpt} The full article would contain detailed analysis, case studies, and practical tips that you can implement immediately.</p>
    
    <h2>Conclusion</h2>
    <p>Stay ahead of the curve by implementing these strategies in your organization. For more insights, check out our other articles in the ${post.category} category.</p>
  `

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-secondary-50">
      {/* Reading progress */}
      <div className="fixed top-0 left-0 w-full h-1 bg-primary-100 z-50">
        <motion.div className="h-full bg-primary-400" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary-200/20 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-200/10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200/10 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 pt-8 pb-16">
          <button onClick={() => router.back()} className="group flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors mb-12">
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to Articles</span>
          </button>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1.5 bg-primary-100/80 text-primary-600 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-primary-200/80 transition-colors cursor-pointer">
                <Tag className="w-4 h-4" />
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-4 leading-tight">{post.title}</h1>
            <p className="text-xl text-dark-light mb-8">{post.excerpt.substring(0, 150)}...</p>

            <div className="flex flex-wrap items-center gap-8 mb-12">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full ring-2 ring-white" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary-200 rounded-full flex items-center justify-center ring-2 ring-white">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-dark">{post.author.name}</div>
                  <div className="text-sm text-dark-light">Software Expert</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-dark-light">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{post.publishedAt}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime}</span>
              </div>
            </div>

            <motion.img initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} src={post.thumbnail} alt={post.title} className="w-full aspect-[16/9] object-cover rounded-2xl shadow-xl mb-12" />
          </motion.div>
        </div>
      </header>

      {/* Main */}
      <main className="relative">
        <div className="container mx-auto px-4 py-12">
          <div className="flex gap-12">
            <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 mb-12">
                <div className="prose prose-lg prose-gray max-w-none" dangerouslySetInnerHTML={{ __html: mockContent }} />
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  <img src={post.author.avatar} alt={post.author.name} className="w-16 h-16 rounded-full ring-4 ring-white shadow-md" />
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">About {post.author.name}</h3>
                    <p className="text-dark-light">Expert in software development and technology trends with years of experience in the industry.</p>
                    <div className="flex gap-4 mt-4">
                      <Link href="/blog" className="px-4 py-2 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-lg">More Articles</Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          </div>
        </div>
      </main>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 p-4 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 hover:shadow-xl transition-all duration-300 z-50">
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
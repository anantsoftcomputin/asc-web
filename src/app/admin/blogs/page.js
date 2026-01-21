"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaEye, FaSearch } from 'react-icons/fa';
import { blogAPI } from '../../../lib/firebase-admin';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const router = useRouter();

  const categories = ['All', 'CRM / ERP', 'Mobile Apps', 'SEO', 'Web Development'];

  useEffect(() => {
    loadBlogs();
  }, []);

  useEffect(() => {
    filterBlogs();
  }, [searchTerm, selectedCategory, blogs]);

  const loadBlogs = async () => {
    setLoading(true);
    const result = await blogAPI.getAll();
    if (result.success) {
      setBlogs(result.data);
      setFilteredBlogs(result.data);
    }
    setLoading(false);
  };

  const filterBlogs = () => {
    let filtered = blogs;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBlogs(filtered);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      const result = await blogAPI.delete(id);
      if (result.success) {
        loadBlogs();
      } else {
        alert('Failed to delete blog post');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Posts</h1>
          <p className="text-gray-600">Manage your blog content</p>
        </div>
        <Link
          href="/admin/blogs/new"
          className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-lg hover:from-primary-600 hover:to-primary-800 transition-all shadow-lg"
        >
          <FaPlus />
          New Blog Post
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Blog List */}
      {filteredBlogs.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <p className="text-gray-500 text-lg">No blog posts found</p>
          <Link
            href="/admin/blogs/new"
            className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary-700 font-medium"
          >
            <FaPlus />
            Create your first blog post
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-4">
                {blog.thumbnail && (
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full md:w-48 h-32 object-cover rounded-lg"
                  />
                )}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h3>
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {blog.publishedAt} • {blog.readTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/blog/${blog.slug}`}
                        target="_blank"
                        className="p-2 text-gray-600 hover:text-primary hover:bg-primary-50 rounded-lg transition-all"
                        title="View"
                      >
                        <FaEye />
                      </Link>
                      <Link
                        href={`/admin/blogs/${blog.id}`}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                        title="Edit"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

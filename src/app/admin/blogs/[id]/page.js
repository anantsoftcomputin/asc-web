"use client";

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaSave, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { blogAPI } from '../../../../lib/firebase-admin';

export default function BlogEditor() {
  const router = useRouter();
  const params = useParams();
  const isEdit = params?.id && params.id !== 'new';

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'CRM / ERP',
    thumbnail: '',
    readTime: '',
    publishedAt: new Date().toISOString().split('T')[0],
    author: {
      name: 'asc',
      avatar: '/assets/profile-CrSvehcA.jpg'
    }
  });

  useEffect(() => {
    if (isEdit) {
      loadBlog();
    }
  }, [isEdit]);

  const loadBlog = async () => {
    setLoading(true);
    const result = await blogAPI.getById('blogs', params.id);
    if (result.success) {
      setFormData(result.data);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Auto-generate slug from title
    if (name === 'title' && !isEdit) {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      let result;
      if (isEdit) {
        result = await blogAPI.update(params.id, formData);
      } else {
        result = await blogAPI.create(formData);
      }

      if (result.success) {
        router.push('/admin/blogs');
      } else {
        alert('Failed to save blog post: ' + result.error);
      }
    } catch (error) {
      alert('Error saving blog post: ' + error.message);
    } finally {
      setSaving(false);
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
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/blogs"
            className="p-2 text-gray-600 hover:text-primary hover:bg-primary-50 rounded-lg transition-all"
          >
            <FaArrowLeft />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {isEdit ? 'Edit Blog Post' : 'New Blog Post'}
            </h1>
            <p className="text-gray-600">Fill in the details below</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter blog post title"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Slug *
            </label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="blog-post-slug"
            />
          </div>

          {/* Category & Read Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="CRM / ERP">CRM / ERP</option>
                <option value="Mobile Apps">Mobile Apps</option>
                <option value="SEO">SEO</option>
                <option value="Web Development">Web Development</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Read Time
              </label>
              <input
                type="text"
                name="readTime"
                value={formData.readTime}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="5 min read"
              />
            </div>
          </div>

          {/* Thumbnail URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Thumbnail URL
            </label>
            <input
              type="url"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt *
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Brief description of the blog post"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content * (Markdown supported)
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={15}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm"
              placeholder="Write your blog post content here..."
            />
          </div>

          {/* Published Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Published Date
            </label>
            <input
              type="date"
              name="publishedAt"
              value={formData.publishedAt}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4 pt-4 border-t">
            <Link
              href="/admin/blogs"
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-lg hover:from-primary-600 hover:to-primary-800 transition-all shadow-lg disabled:opacity-50"
            >
              <FaSave />
              {saving ? 'Saving...' : 'Save Blog Post'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

/**
 * TEMPLATE: Admin CRUD Page
 * Copy this template to create admin pages for Projects, Jobs, Team, Testimonials
 * 
 * Replace:
 * - COLLECTION_NAME with 'projects', 'jobs', 'team', or 'testimonials'
 * - CollectionAPI with projectAPI, jobAPI, teamAPI, or testimonialAPI
 * - Form fields as needed
 */

"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaEye, FaSearch } from 'react-icons/fa';
// import { CollectionAPI } from '../../../lib/firebase-admin';

export default function CollectionListPage() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  useEffect(() => {
    loadItems();
  }, []);

  useEffect(() => {
    filterItems();
  }, [searchTerm, items]);

  const loadItems = async () => {
    setLoading(true);
    // const result = await CollectionAPI.getAll();
    // if (result.success) {
    //   setItems(result.data);
    //   setFilteredItems(result.data);
    // }
    setLoading(false);
  };

  const filterItems = () => {
    if (!searchTerm) {
      setFilteredItems(items);
      return;
    }

    const filtered = items.filter(item =>
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      // const result = await CollectionAPI.delete(id);
      // if (result.success) {
      //   loadItems();
      // } else {
      //   alert('Failed to delete item');
      // }
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Collection Name</h1>
          <p className="text-gray-600">Manage your items</p>
        </div>
        <Link
          href="/admin/collection/new"
          className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-lg hover:from-primary-600 hover:to-primary-800 transition-all shadow-lg"
        >
          <FaPlus />
          New Item
        </Link>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      {/* List */}
      {filteredItems.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <p className="text-gray-500 text-lg">No items found</p>
          <Link
            href="/admin/collection/new"
            className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary-700 font-medium"
          >
            <FaPlus />
            Create your first item
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title || item.name}
                  </h3>
                  {item.shortDesc && (
                    <p className="text-gray-600">{item.shortDesc}</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/admin/collection/${item.id}`}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                    title="Edit"
                  >
                    <FaEdit />
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * EDITOR PAGE TEMPLATE
 * File: /admin/collection/[id]/page.js
 */

/*
"use client";

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaSave, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
// import { CollectionAPI } from '../../../../lib/firebase-admin';

export default function CollectionEditor() {
  const router = useRouter();
  const params = useParams();
  const isEdit = params?.id && params.id !== 'new';

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    // Add your fields here
  });

  useEffect(() => {
    if (isEdit) {
      loadItem();
    }
  }, [isEdit]);

  const loadItem = async () => {
    setLoading(true);
    // const result = await CollectionAPI.getById(params.id);
    // if (result.success) {
    //   setFormData(result.data);
    // }
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      let result;
      if (isEdit) {
        // result = await CollectionAPI.update(params.id, formData);
      } else {
        // result = await CollectionAPI.create(formData);
      }

      if (result.success) {
        router.push('/admin/collection');
      } else {
        alert('Failed to save: ' + result.error);
      }
    } catch (error) {
      alert('Error: ' + error.message);
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
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/collection"
            className="p-2 text-gray-600 hover:text-primary hover:bg-primary-50 rounded-lg transition-all"
          >
            <FaArrowLeft />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {isEdit ? 'Edit Item' : 'New Item'}
            </h1>
            <p className="text-gray-600">Fill in the details below</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
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
              placeholder="Enter title"
            />
          </div>

          // Add more form fields here

          <div className="flex items-center justify-end gap-4 pt-4 border-t">
            <Link
              href="/admin/collection"
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
              {saving ? 'Saving...' : 'Save Item'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
*/

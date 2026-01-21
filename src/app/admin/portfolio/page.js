"use client";

import { useState, useEffect } from 'react';
import { portfolioAPI } from '../../../lib/firebase-admin';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaFolder, FaUpload } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function PortfolioManagement() {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: 'crm',
    tags: '',
    image: '',
    description: '',
    gradient: 'from-primary-400 to-primary-600',
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'crm', name: 'CRM Systems' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'education', name: 'Education' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'web', name: 'Web Development' },
  ];

  const gradients = [
    { value: 'from-primary-400 to-primary-600', label: 'Primary' },
    { value: 'from-secondary-400 to-secondary-600', label: 'Secondary' },
    { value: 'from-accent-400 to-accent-600', label: 'Accent' },
    { value: 'from-blue-400 to-blue-600', label: 'Blue' },
    { value: 'from-green-400 to-green-600', label: 'Green' },
    { value: 'from-purple-400 to-purple-600', label: 'Purple' },
  ];

  useEffect(() => {
    loadPortfolio();
  }, []);

  const loadPortfolio = async () => {
    setLoading(true);
    const result = await portfolioAPI.getAll();
    if (result.success) {
      setPortfolio(result.data);
    }
    setLoading(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const maxSize = 1 * 1024 * 1024;
      if (file.size > maxSize) {
        alert('Image too large. Please select an image smaller than 1MB.');
        return;
      }

      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        alert('Invalid file type. Please upload an image (JPEG, PNG, GIF, or WebP)');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImagePreview(base64String);
        setImageFile(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()),
      image: imageFile || formData.image,
      updatedAt: new Date().toISOString(),
    };

    if (editingProject) {
      const result = await portfolioAPI.update(editingProject.id, data);
      if (result.success) {
        alert('Project updated successfully!');
        loadPortfolio();
        closeModal();
      } else {
        alert('Error: ' + result.error);
      }
    } else {
      data.createdAt = new Date().toISOString();
      const result = await portfolioAPI.create(data);
      if (result.success) {
        alert('Project added successfully!');
        loadPortfolio();
        closeModal();
      } else {
        alert('Error: ' + result.error);
      }
    }
    setLoading(false);
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title || '',
      category: project.category || 'crm',
      tags: Array.isArray(project.tags) ? project.tags.join(', ') : '',
      image: project.image || '',
      description: project.description || '',
      gradient: project.gradient || 'from-primary-400 to-primary-600',
    });
    setImagePreview(project.image || null);
    setImageFile(null);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const result = await portfolioAPI.delete(id);
      if (result.success) {
        alert('Project deleted successfully!');
        loadPortfolio();
      } else {
        alert('Error: ' + result.error);
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingProject(null);
    setImageFile(null);
    setImagePreview(null);
    setFormData({
      title: '',
      category: 'crm',
      tags: '',
      image: '',
      description: '',
      gradient: 'from-primary-400 to-primary-600',
    });
  };

  const filteredPortfolio = portfolio.filter(project => {
    const matchesSearch = project.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || project.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Portfolio Management</h1>
          <p className="text-gray-600 mt-1">Manage your portfolio projects</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
        >
          <FaPlus /> Add Project
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filterCategory === cat.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading projects...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortfolio.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <FaFolder className="text-white text-6xl opacity-50" />
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{project.title}</h3>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                    {categories.find(c => c.id === project.category)?.name || project.category}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>

                {Array.isArray(project.tags) && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleEdit(project)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {!loading && filteredPortfolio.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg">
          <FaFolder className="mx-auto text-gray-400 text-5xl mb-4" />
          <p className="text-gray-600">No projects found</p>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                {editingProject ? 'Edit Project' : 'Add Project'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Image
                  </label>
                  
                  {imagePreview && (
                    <div className="mb-3 relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-lg border-4 border-gray-200"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <FaUpload className="w-8 h-8 mb-2 text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF or WebP (MAX. 1MB)</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      {categories.filter(c => c.id !== 'all').map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Color Gradient</label>
                    <select
                      value={formData.gradient}
                      onChange={(e) => setFormData({ ...formData, gradient: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      {gradients.map(g => (
                        <option key={g.value} value={g.value}>{g.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="React, Node.js, MongoDB"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-primary-600 disabled:opacity-50 transition-colors"
                  >
                    {loading ? 'Saving...' : editingProject ? 'Update' : 'Add Project'}
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    disabled={loading}
                    className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 disabled:opacity-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

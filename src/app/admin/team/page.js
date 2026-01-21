"use client";

import { useState, useEffect } from 'react';
import { teamAPI } from '../../../lib/firebase-admin';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaUser, FaUpload } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function TeamManagement() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    bio: '',
    image: '',
    linkedin: '',
    twitter: '',
    github: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    loadTeam();
  }, []);

  const loadTeam = async () => {
    setLoading(true);
    const result = await teamAPI.getAll();
    if (result.success) {
      setTeam(result.data);
    }
    setLoading(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 1MB for base64 storage)
      const maxSize = 1 * 1024 * 1024; // 1MB
      if (file.size > maxSize) {
        alert('Image too large. Please select an image smaller than 1MB.');
        return;
      }

      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        alert('Invalid file type. Please upload an image (JPEG, PNG, GIF, or WebP)');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImagePreview(base64String);
        setImageFile(base64String); // Store base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      ...formData,
      image: imageFile || formData.image, // Use base64 string
      updatedAt: new Date().toISOString(),
    };

    if (editingMember) {
      const result = await teamAPI.update(editingMember.id, data);
      if (result.success) {
        alert('Team member updated successfully!');
        loadTeam();
        closeModal();
      } else {
        alert('Error: ' + result.error);
      }
    } else {
      data.createdAt = new Date().toISOString();
      const result = await teamAPI.create(data);
      if (result.success) {
        alert('Team member added successfully!');
        loadTeam();
        closeModal();
      } else {
        alert('Error: ' + result.error);
      }
    }
    setLoading(false);
  };

  const handleEdit = (member) => {
    setEditingMember(member);
    setFormData({
      name: member.name || '',
      role: member.role || '',
      bio: member.bio || '',
      image: member.image || '',
      linkedin: member.linkedin || '',
      twitter: member.twitter || '',
      github: member.github || '',
    });
    setImagePreview(member.image || null);
    setImageFile(null);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this team member?')) {
      const result = await teamAPI.delete(id);
      if (result.success) {
        alert('Team member deleted successfully!');
        loadTeam();
      } else {
        alert('Error: ' + result.error);
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingMember(null);
    setImageFile(null);
    setImagePreview(null);
    setFormData({
      name: '',
      role: '',
      bio: '',
      image: '',
      linkedin: '',
      twitter: '',
      github: '',
    });
  };

  const filteredTeam = team.filter(member =>
    member.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Team Management</h1>
          <p className="text-gray-600 mt-1">Manage your team members</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
        >
          <FaPlus /> Add Member
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="relative">
          <FaSearch className="absolute left-3 top-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search team members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      {/* Team Grid */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading team members...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeam.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <FaUser className="text-primary text-2xl" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{member.name}</h3>
                      <p className="text-sm text-primary">{member.role}</p>
                    </div>
                  </div>
                </div>

                {member.bio && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>
                )}

                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleEdit(member)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(member.id)}
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

      {!loading && filteredTeam.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg">
          <FaUser className="mx-auto text-gray-400 text-5xl mb-4" />
          <p className="text-gray-600">No team members found</p>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                {editingMember ? 'Edit Team Member' : 'Add Team Member'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Image
                  </label>
                  
                  {/* Image Preview */}
                  {imagePreview && (
                    <div className="mb-3 relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-gray-200"
                      />
                    </div>
                  )}

                  {/* File Input */}
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Role *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      LinkedIn
                    </label>
                    <input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="https://linkedin.com/in/..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Twitter
                    </label>
                    <input
                      type="url"
                      value={formData.twitter}
                      onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="https://twitter.com/..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      GitHub
                    </label>
                    <input
                      type="url"
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="https://github.com/..."
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-primary-600 disabled:opacity-50 transition-colors"
                  >
                    {loading ? 'Saving...' : editingMember ? 'Update' : 'Add Member'}
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


"use client";

import { useState, useEffect } from 'react';
import { projectAPI } from '../../../lib/firebase-admin';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaFolder, FaImage, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const GRADIENTS = [
  { value: 'from-pink-400 to-purple-600', label: 'Pink → Purple' },
  { value: 'from-green-400 to-blue-500', label: 'Green → Blue' },
  { value: 'from-indigo-400 to-blue-700', label: 'Indigo → Blue' },
  { value: 'from-purple-400 to-indigo-600', label: 'Purple → Indigo' },
  { value: 'from-red-400 to-pink-600', label: 'Red → Pink' },
  { value: 'from-yellow-400 to-orange-600', label: 'Yellow → Orange' },
  { value: 'from-blue-400 to-blue-600', label: 'Blue' },
  { value: 'from-green-500 to-emerald-700', label: 'Green → Emerald' },
  { value: 'from-purple-500 to-purple-700', label: 'Deep Purple' },
  { value: 'from-cyan-400 to-blue-600', label: 'Cyan → Blue' },
  { value: 'from-primary-400 to-primary-600', label: 'Primary' },
];

const CATEGORIES = [
  'healthcare', 'education', 'crm', 'enterprise',
  'e-commerce', 'mobile', 'web', 'ngo', 'franchise', 'petcare', 'other',
];

const EMPTY_FORM = {
  title: '',
  shortDesc: '',
  fullDesc: '',
  detailedDesc: '',
  category: 'web',
  technologies: '',
  features: '',
  results: '',
  image: '',
  gradient: 'from-primary-400 to-primary-600',
  liveLink: '',
  githubLink: '',
  stat1Label: '', stat1Value: '',
  stat2Label: '', stat2Value: '',
  stat3Label: '', stat3Value: '',
  // Case study fields
  problemStatement: '',
  ourApproach: '',
  solutionDelivered: '',
  caseStudyOutcome: '',
  featured: false,
};

export default function ProjectsManagement() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [activeTab, setActiveTab] = useState('details');
  const [formData, setFormData] = useState(EMPTY_FORM);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    setLoading(true);
    const result = await projectAPI.getAll();
    if (result.success) setProjects(result.data);
    setLoading(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 1024 * 1024) { alert('Image size should be less than 1MB'); return; }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setFormData(prev => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const data = {
      ...formData,
      technologies: formData.technologies.split(',').map(t => t.trim()).filter(Boolean),
      features: formData.features.split('\n').map(f => f.trim()).filter(Boolean),
      results: formData.results.split('\n').map(r => r.trim()).filter(Boolean),
    };
    const result = editingProject
      ? await projectAPI.update(editingProject.id, data)
      : await projectAPI.create(data);
    if (result.success) { loadProjects(); closeModal(); }
    else alert('Error: ' + result.error);
    setSaving(false);
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title || '',
      shortDesc: project.shortDesc || '',
      fullDesc: project.fullDesc || project.description || '',
      detailedDesc: project.detailedDesc || '',
      category: project.category || 'web',
      technologies: Array.isArray(project.technologies) ? project.technologies.join(', ') : '',
      features: Array.isArray(project.features) ? project.features.join('\n') : '',
      results: Array.isArray(project.results) ? project.results.join('\n') : '',
      image: project.image || '',
      gradient: project.gradient || 'from-primary-400 to-primary-600',
      liveLink: project.liveLink || '',
      githubLink: project.githubLink || '',
      stat1Label: project.stat1Label || '', stat1Value: project.stat1Value || '',
      stat2Label: project.stat2Label || '', stat2Value: project.stat2Value || '',
      stat3Label: project.stat3Label || '', stat3Value: project.stat3Value || '',
      problemStatement: project.problemStatement || '',
      ourApproach: project.ourApproach || '',
      solutionDelivered: project.solutionDelivered || '',
      caseStudyOutcome: project.caseStudyOutcome || '',
      featured: project.featured || false,
    });
    setImagePreview(project.image || null);
    setActiveTab('details');
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this project?')) return;
    const result = await projectAPI.delete(id);
    if (result.success) loadProjects();
    else alert('Error: ' + result.error);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingProject(null);
    setImagePreview(null);
    setFormData(EMPTY_FORM);
    setActiveTab('details');
  };

  const set = (field) => (e) =>
    setFormData(prev => ({ ...prev, [field]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  const filteredProjects = projects.filter(p => {
    const matchSearch = !searchTerm ||
      p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.shortDesc?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = filterCategory === 'all' || p.category === filterCategory;
    return matchSearch && matchCat;
  });

  const inputCls = "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent";
  const textareaCls = `${inputCls} resize-none`;
  const labelCls = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="space-y-6">
      {/* Header — Add Project button is ALWAYS here */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-1">Manage portfolio projects · {projects.length} total</p>
        </div>
        <button
          onClick={() => { setShowModal(true); }}
          className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-lg hover:bg-primary-600 transition-colors shadow font-semibold text-sm"
        >
          <FaPlus /> Add New Project
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm space-y-3">
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
          {['all', ...CATEGORIES].map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-sm capitalize transition-colors ${
                filterCategory === cat ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Count + secondary add button when filtered */}
      {!loading && (
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}</span>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-1.5 text-primary hover:underline font-medium"
          >
            <FaPlus className="w-3 h-3" /> Add Project
          </button>
        </div>
      )}

      {/* Content */}
      {loading ? (
        <div className="text-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
          <p className="mt-4 text-gray-600">Loading projects...</p>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border-2 border-dashed border-gray-200">
          <FaFolder className="mx-auto text-gray-300 text-6xl mb-4" />
          <p className="text-gray-500 text-lg mb-2">
            {searchTerm || filterCategory !== 'all' ? 'No projects match your filter' : 'No projects yet'}
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
          >
            <FaPlus /> Add Your First Project
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100"
            >
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
              ) : (
                <div className={`w-full h-40 bg-gradient-to-br ${project.gradient || 'from-primary-400 to-primary-600'} flex items-center justify-center`}>
                  <FaImage className="text-white text-4xl opacity-40" />
                </div>
              )}
              <div className="p-4">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-semibold text-gray-900 line-clamp-1 flex-1">{project.title}</h3>
                  {project.featured && (
                    <span className="ml-2 px-2 py-0.5 text-xs bg-yellow-100 text-yellow-700 rounded-full shrink-0">⭐ Featured</span>
                  )}
                </div>
                <span className="inline-block px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-full mb-2 capitalize">{project.category}</span>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{project.shortDesc || project.description}</p>
                {Array.isArray(project.technologies) && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map(t => (
                      <span key={t} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">{t}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-500 rounded">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                )}
                {project.problemStatement && (
                  <div className="mb-3 px-2 py-1.5 bg-amber-50 rounded text-xs text-amber-700">
                    📋 Case study included
                  </div>
                )}
                <div className="flex gap-2 pt-3 border-t border-gray-100">
                  <button onClick={() => handleEdit(project)} className="flex-1 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 text-sm font-medium">
                    <FaEdit className="inline mr-1" /> Edit
                  </button>
                  <button onClick={() => handleDelete(project.id)} className="flex-1 py-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 text-sm font-medium">
                    <FaTrash className="inline mr-1" /> Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b shrink-0">
              <h2 className="text-xl font-bold text-gray-900">
                {editingProject ? `Edit: ${editingProject.title}` : 'Add New Project'}
              </h2>
              <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-lg">
                <FaTimes className="text-gray-500" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b px-6 shrink-0">
              {[
                { id: 'details', label: 'Project Details' },
                { id: 'casestudy', label: '📋 Case Study' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
              {/* ── TAB: Project Details ── */}
              {activeTab === 'details' && (
                <div className="p-6 space-y-5">
                  {/* Image */}
                  <div>
                    <label className={labelCls}>Project Image</label>
                    <div className="flex items-start gap-4">
                      <div className={`w-32 h-28 rounded-lg overflow-hidden shrink-0 bg-gradient-to-br ${formData.gradient}`}>
                        {imagePreview
                          ? <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                          : <div className="w-full h-full flex items-center justify-center"><FaImage className="text-white text-3xl opacity-50" /></div>
                        }
                      </div>
                      <div className="flex-1 space-y-2">
                        <input type="file" accept="image/*" onChange={handleImageChange}
                          className="w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-primary-600" />
                        <input type="url"
                          value={formData.image.startsWith('data:') ? '' : formData.image}
                          onChange={(e) => { setFormData(p => ({ ...p, image: e.target.value })); setImagePreview(e.target.value); }}
                          placeholder="Or paste image URL: https://..."
                          className={`${inputCls} text-sm`} />
                        <p className="text-xs text-gray-400">Max 1MB for uploaded files</p>
                      </div>
                    </div>
                  </div>

                  {/* Title + Category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Project Title *</label>
                      <input type="text" required value={formData.title} onChange={set('title')} className={inputCls} placeholder="e.g., Pawppy.in" />
                    </div>
                    <div>
                      <label className={labelCls}>Category *</label>
                      <select required value={formData.category} onChange={set('category')} className={inputCls}>
                        {CATEGORIES.map(c => <option key={c} value={c} className="capitalize">{c}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Short Desc + Gradient */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Short Description * <span className="font-normal text-gray-400">(card subtitle)</span></label>
                      <input type="text" required value={formData.shortDesc} onChange={set('shortDesc')} className={inputCls} placeholder="One-line project summary" />
                    </div>
                    <div>
                      <label className={labelCls}>Card Gradient</label>
                      <select value={formData.gradient} onChange={set('gradient')} className={inputCls}>
                        {GRADIENTS.map(g => <option key={g.value} value={g.value}>{g.label}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Full Description */}
                  <div>
                    <label className={labelCls}>Full Description * <span className="font-normal text-gray-400">(modal overview paragraph)</span></label>
                    <textarea required rows={3} value={formData.fullDesc} onChange={set('fullDesc')} className={textareaCls} placeholder="A 2-3 sentence summary of the project..." />
                  </div>

                  {/* Detailed Description */}
                  <div>
                    <label className={labelCls}>Detailed Description <span className="font-normal text-gray-400">(in-depth background)</span></label>
                    <textarea rows={4} value={formData.detailedDesc} onChange={set('detailedDesc')} className={textareaCls} placeholder="Longer description used in the project modal..." />
                  </div>

                  {/* Technologies */}
                  <div>
                    <label className={labelCls}>Technologies <span className="font-normal text-gray-400">(comma-separated)</span></label>
                    <input type="text" value={formData.technologies} onChange={set('technologies')} className={inputCls} placeholder="React, Node.js, Firebase, MongoDB" />
                  </div>

                  {/* Features + Results */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Key Features <span className="font-normal text-gray-400">(one per line)</span></label>
                      <textarea rows={5} value={formData.features} onChange={set('features')} className={`${textareaCls} text-sm`} placeholder={"Real-time booking system\nSecure payment gateway\nPush notifications"} />
                    </div>
                    <div>
                      <label className={labelCls}>Results & Impact <span className="font-normal text-gray-400">(one per line)</span></label>
                      <textarea rows={5} value={formData.results} onChange={set('results')} className={`${textareaCls} text-sm`} placeholder={"40% faster booking\nTrusted by 5,000+ users"} />
                    </div>
                  </div>

                  {/* Links */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Live URL</label>
                      <input type="url" value={formData.liveLink} onChange={set('liveLink')} className={inputCls} placeholder="https://..." />
                    </div>
                    <div>
                      <label className={labelCls}>GitHub URL</label>
                      <input type="url" value={formData.githubLink} onChange={set('githubLink')} className={inputCls} placeholder="https://github.com/..." />
                    </div>
                  </div>

                  {/* Stats */}
                  <div>
                    <label className={labelCls}>Project Stats <span className="font-normal text-gray-400">(up to 3 metrics)</span></label>
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map(n => (
                        <div key={n} className="border border-gray-200 rounded-lg p-3 space-y-2">
                          <input type="text" value={formData[`stat${n}Label`]} onChange={set(`stat${n}Label`)} className={`${inputCls} text-sm`} placeholder="Label (e.g. users)" />
                          <input type="text" value={formData[`stat${n}Value`]} onChange={set(`stat${n}Value`)} className={`${inputCls} text-sm`} placeholder="Value (e.g. 5,000+)" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Featured */}
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="featured" checked={formData.featured} onChange={set('featured')} className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
                    <label htmlFor="featured" className="text-sm text-gray-700">Featured project (pinned at top)</label>
                  </div>
                </div>
              )}

              {/* ── TAB: Case Study ── */}
              {activeTab === 'casestudy' && (
                <div className="p-6 space-y-5">
                  <div className="p-4 bg-blue-50 rounded-lg text-sm text-blue-700">
                    Case study content appears in the project detail modal and helps visitors understand the real-world problem you solved. Write it like a story — problem, approach, solution, outcome.
                  </div>

                  <div>
                    <label className={labelCls}>🔴 The Client's Challenge <span className="font-normal text-gray-400">(What problem were they facing?)</span></label>
                    <textarea
                      rows={5}
                      value={formData.problemStatement}
                      onChange={set('problemStatement')}
                      className={textareaCls}
                      placeholder="Describe the real-world problem or pain the client was experiencing before they came to us. Include specific obstacles, inefficiencies, or lost opportunities they faced..."
                    />
                  </div>

                  <div>
                    <label className={labelCls}>🟡 Our Approach & Methodology <span className="font-normal text-gray-400">(How did we plan to solve it?)</span></label>
                    <textarea
                      rows={5}
                      value={formData.ourApproach}
                      onChange={set('ourApproach')}
                      className={textareaCls}
                      placeholder="Describe how we analysed the problem, what research we did, the architecture decisions we made, and how we planned the solution..."
                    />
                  </div>

                  <div>
                    <label className={labelCls}>🟢 The Solution We Built <span className="font-normal text-gray-400">(What did we actually deliver?)</span></label>
                    <textarea
                      rows={5}
                      value={formData.solutionDelivered}
                      onChange={set('solutionDelivered')}
                      className={textareaCls}
                      placeholder="Describe the specific features, systems, integrations, and technologies we built. Be concrete — what does the final product do?"
                    />
                  </div>

                  <div>
                    <label className={labelCls}>📈 Business Impact & Outcome <span className="font-normal text-gray-400">(What changed for the client?)</span></label>
                    <textarea
                      rows={5}
                      value={formData.caseStudyOutcome}
                      onChange={set('caseStudyOutcome')}
                      className={textareaCls}
                      placeholder="Describe the measurable results — faster processes, cost savings, revenue growth, user adoption, efficiency gains, customer satisfaction improvements..."
                    />
                  </div>
                </div>
              )}

              {/* Footer Actions */}
              <div className="px-6 py-4 border-t bg-gray-50 flex gap-3 shrink-0">
                {activeTab === 'details' && (
                  <button type="button" onClick={() => setActiveTab('casestudy')}
                    className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary-50 text-sm font-medium">
                    Next: Case Study →
                  </button>
                )}
                {activeTab === 'casestudy' && (
                  <button type="button" onClick={() => setActiveTab('details')}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 text-sm font-medium">
                    ← Back: Details
                  </button>
                )}
                <div className="flex-1" />
                <button type="button" onClick={closeModal} disabled={saving}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 text-sm font-medium">
                  Cancel
                </button>
                <button type="submit" disabled={saving}
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 disabled:opacity-50 text-sm font-semibold">
                  {saving ? 'Saving...' : editingProject ? 'Update Project' : 'Add Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

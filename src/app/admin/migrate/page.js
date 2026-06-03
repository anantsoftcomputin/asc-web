"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBlog, FaDatabase, FaPlay, FaCheck, FaTimes, FaFolder, FaExclamationTriangle } from 'react-icons/fa';
import { migrateAllData } from '../../../lib/migrate-data';
import { seedProjects } from '../../../lib/seed-projects';
import { seedBlogs } from '../../../lib/seed-blogs';
import { blogAPI, projectAPI } from '../../../lib/firebase-admin';

export default function MigratePage() {
  const [migrating, setMigrating] = useState(false);
  const [migrateResults, setMigrateResults] = useState(null);

  const [projectSeeding, setProjectSeeding] = useState(false);
  const [projectSeedResults, setProjectSeedResults] = useState(null);
  const [existingProjectCount, setExistingProjectCount] = useState(null);
  const [projectSeedError, setProjectSeedError] = useState('');

  const [blogSeeding, setBlogSeeding] = useState(false);
  const [blogSeedResults, setBlogSeedResults] = useState(null);
  const [existingBlogCount, setExistingBlogCount] = useState(null);
  const [blogSeedError, setBlogSeedError] = useState('');

  const handleMigrate = async () => {
    if (!window.confirm('This will migrate blog posts and other data to Firebase. Continue?')) return;
    setMigrating(true);
    setMigrateResults(null);
    try {
      const results = await migrateAllData();
      setMigrateResults(results);
    } catch (err) {
      alert('Migration failed: ' + err.message);
    } finally {
      setMigrating(false);
    }
  };

  const handleSeedCheck = async () => {
    setProjectSeeding(true);
    setProjectSeedError('');
    const result = await projectAPI.getAll();
    const count = result.success ? result.data.length : 0;
    setExistingProjectCount(count);
    setProjectSeeding(false);
  };

  const handleSeedProjects = async () => {
    if (existingProjectCount === null) { await handleSeedCheck(); return; }
    if (existingProjectCount > 0) {
      if (!window.confirm(`There are already ${existingProjectCount} project(s) in Firebase. Seeding will ADD ${10} more without removing existing ones. Continue?`)) return;
    } else {
      if (!window.confirm('This will add 10 portfolio projects to Firebase. Continue?')) return;
    }

    setProjectSeeding(true);
    setProjectSeedResults(null);
    setProjectSeedError('');
    try {
      const results = await seedProjects();
      setProjectSeedResults(results);
    } catch (err) {
      setProjectSeedError(err.message);
    } finally {
      setProjectSeeding(false);
    }
  };

  const handleBlogSeedCheck = async () => {
    setBlogSeeding(true);
    setBlogSeedError('');
    const result = await blogAPI.getAll();
    const count = result.success ? result.data.length : 0;
    setExistingBlogCount(count);
    setBlogSeeding(false);
  };

  const handleSeedBlogs = async () => {
    if (existingBlogCount === null) { await handleBlogSeedCheck(); return; }
    if (existingBlogCount > 0) {
      if (!window.confirm(`There are already ${existingBlogCount} blog post(s) in Firebase. Seeding will ADD the full production blog set without removing existing posts. Continue?`)) return;
    } else {
      if (!window.confirm('This will add the full production blog set to Firebase. Continue?')) return;
    }

    setBlogSeeding(true);
    setBlogSeedResults(null);
    setBlogSeedError('');
    try {
      const results = await seedBlogs();
      setBlogSeedResults(results);
    } catch (err) {
      setBlogSeedError(err.message);
    } finally {
      setBlogSeeding(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Tools</h1>
        <p className="text-gray-600">Migrate or seed data into Firebase</p>
      </div>

      {/* ── Seed Projects ── */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
            <FaFolder className="w-7 h-7 text-green-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Seed Portfolio Projects</h2>
            <p className="text-gray-600">
              Populate Firebase with all 10 portfolio projects — complete with SEO-optimised descriptions, case studies, technologies, stats, and project details.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {['Pawppy.in', 'Ikama.in', 'OEC CRM', 'OEC India', 'Espionline',
            'Indraprasth Foundation', 'Edustation', 'SMHRI Hospital', 'ESPI CRM', 'StudyStreak'].map(name => (
            <div key={name} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
              {name}
            </div>
          ))}
        </div>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6 text-sm text-blue-800">
          <strong>Each project includes:</strong> Short & detailed descriptions, case study (challenge → approach → solution → outcome), technologies, key features, results, stats, and live links.
        </div>

        {projectSeedResults ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg">
              <span className="flex items-center gap-2 text-green-600 font-semibold">
                <FaCheck /> {projectSeedResults.success} projects added successfully
              </span>
              {projectSeedResults.failed > 0 && (
                <span className="flex items-center gap-2 text-red-600 font-semibold">
                  <FaTimes /> {projectSeedResults.failed} failed
                </span>
              )}
            </div>
            {projectSeedResults.errors?.length > 0 && (
              <div className="p-4 bg-red-50 rounded-lg text-sm text-red-700">
                {projectSeedResults.errors.map(e => <div key={e.title}>{e.title}: {e.error}</div>)}
              </div>
            )}
            <p className="text-sm text-gray-600">
              ✅ Projects are now live. Go to <a href="/admin/projects" className="text-primary hover:underline">Admin → Projects</a> to view and edit them, or check the <a href="/portfolio" target="_blank" className="text-primary hover:underline">Portfolio page</a> to see them live.
            </p>
            <button onClick={() => { setProjectSeedResults(null); setExistingProjectCount(null); }}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
              Reset
            </button>
          </motion.div>
        ) : (
          <div className="flex flex-wrap gap-3">
            <button onClick={handleSeedProjects} disabled={projectSeeding}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow disabled:opacity-50 font-semibold">
              {projectSeeding ? (
                <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" /> Seeding Projects...</>
              ) : (
                <><FaPlay /> Seed All 10 Projects</>
              )}
            </button>
            {existingProjectCount !== null && (
              <div className="flex items-center gap-2 text-sm text-gray-600 px-3 py-2 bg-gray-100 rounded-lg">
                <FaExclamationTriangle className="text-yellow-500" />
                {existingProjectCount} project(s) already in Firebase
              </div>
            )}
          </div>
        )}
        {projectSeedError && <p className="mt-3 text-sm text-red-600">{projectSeedError}</p>}
      </div>

      {/* ── Seed Blogs ── */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0">
            <FaBlog className="w-7 h-7 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Seed Blog Posts</h2>
            <p className="text-gray-600">
              Populate Firebase with the production blog set across SEO, CRM / ERP, Mobile Apps, and Web Development.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {['Technical SEO', 'Local SEO', 'CRM systems', 'ERP selection',
            'Mobile app costs', 'React Native vs Flutter', 'Custom software', 'Website speed'].map(name => (
            <div key={name} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">✓</span>
              {name}
            </div>
          ))}
        </div>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6 text-sm text-blue-800">
          <strong>Each post includes:</strong> Slug, category, excerpt, thumbnail, read time, publication date, author, and Markdown content.
        </div>

        {blogSeedResults ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg">
              <span className="flex items-center gap-2 text-green-600 font-semibold">
                <FaCheck /> {blogSeedResults.success} blog posts added successfully
              </span>
              {blogSeedResults.failed > 0 && (
                <span className="flex items-center gap-2 text-red-600 font-semibold">
                  <FaTimes /> {blogSeedResults.failed} failed
                </span>
              )}
            </div>
            {blogSeedResults.errors?.length > 0 && (
              <div className="p-4 bg-red-50 rounded-lg text-sm text-red-700">
                {blogSeedResults.errors.map(e => <div key={e.title}>{e.title}: {e.error}</div>)}
              </div>
            )}
            <p className="text-sm text-gray-600">
              Blog posts are ready. Go to <Link href="/admin/blogs" className="text-primary hover:underline">Admin → Blog Posts</Link> to view and edit them, or check the <a href="/blog" target="_blank" className="text-primary hover:underline">Blog page</a> to see them live.
            </p>
            <button onClick={() => { setBlogSeedResults(null); setExistingBlogCount(null); }}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
              Reset
            </button>
          </motion.div>
        ) : (
          <div className="flex flex-wrap gap-3">
            <button onClick={handleSeedBlogs} disabled={blogSeeding}
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow disabled:opacity-50 font-semibold">
              {blogSeeding ? (
                <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" /> Seeding Blogs...</>
              ) : (
                <><FaPlay /> Seed Blog Posts</>
              )}
            </button>
            {existingBlogCount !== null && (
              <div className="flex items-center gap-2 text-sm text-gray-600 px-3 py-2 bg-gray-100 rounded-lg">
                <FaExclamationTriangle className="text-yellow-500" />
                {existingBlogCount} blog post(s) already in Firebase
              </div>
            )}
          </div>
        )}
        {blogSeedError && <p className="mt-3 text-sm text-red-600">{blogSeedError}</p>}
      </div>

      {/* ── General Migration ── */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
            <FaDatabase className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">General Data Migration</h2>
            <p className="text-gray-600">
              Migrate blog posts, testimonials, and team member data from static files to Firebase.
            </p>
          </div>
        </div>

        {!migrateResults ? (
          <button onClick={handleMigrate} disabled={migrating}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-lg hover:from-primary-600 hover:to-primary-800 transition-all shadow-lg disabled:opacity-50 text-lg font-semibold">
            {migrating ? (
              <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" /> Migrating...</>
            ) : (
              <><FaPlay /> Start Migration</>
            )}
          </button>
        ) : (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Migration Results</h3>
            {Object.entries(migrateResults).map(([key, value]) => (
              <div key={key} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                <span className="font-semibold text-gray-900 capitalize">{key}</span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2 text-green-600"><FaCheck /> {value.success} success</span>
                  {value.failed > 0 && <span className="flex items-center gap-2 text-red-600"><FaTimes /> {value.failed} failed</span>}
                </div>
              </div>
            ))}
            <button onClick={() => setMigrateResults(null)}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
              Run Again
            </button>
          </motion.div>
        )}

        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
          <strong>Note:</strong> Ensure Firebase is configured and you have write permissions before running any migration.
        </div>
      </div>
    </div>
  );
}

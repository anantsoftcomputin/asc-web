"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaBlog, 
  FaProjectDiagram, 
  FaBriefcase, 
  FaUsers,
  FaComments,
  FaEnvelope,
  FaArrowRight,
  FaPlus
} from 'react-icons/fa';
import { blogAPI, projectAPI, jobAPI, teamAPI, testimonialAPI, contactAPI } from '../../../lib/firebase-admin';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    blogs: 0,
    projects: 0,
    jobs: 0,
    team: 0,
    testimonials: 0,
    contacts: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [blogs, projects, jobs, team, testimonials, contacts] = await Promise.all([
        blogAPI.getAll(),
        projectAPI.getAll(),
        jobAPI.getAll(),
        teamAPI.getAll(),
        testimonialAPI.getAll(),
        contactAPI.getAll(),
      ]);

      setStats({
        blogs: blogs.success ? blogs.data.length : 0,
        projects: projects.success ? projects.data.length : 0,
        jobs: jobs.success ? jobs.data.length : 0,
        team: team.success ? team.data.length : 0,
        testimonials: testimonials.success ? testimonials.data.length : 0,
        contacts: contacts.success ? contacts.data.length : 0,
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      title: 'Blog Posts',
      count: stats.blogs,
      icon: FaBlog,
      color: 'from-blue-400 to-blue-600',
      href: '/admin/blogs',
      action: 'Manage Posts'
    },
    {
      title: 'Projects',
      count: stats.projects,
      icon: FaProjectDiagram,
      color: 'from-purple-400 to-purple-600',
      href: '/admin/projects',
      action: 'Manage Projects'
    },
    {
      title: 'Job Openings',
      count: stats.jobs,
      icon: FaBriefcase,
      color: 'from-green-400 to-green-600',
      href: '/admin/jobs',
      action: 'Manage Jobs'
    },
    {
      title: 'Team Members',
      count: stats.team,
      icon: FaUsers,
      color: 'from-yellow-400 to-yellow-600',
      href: '/admin/team',
      action: 'Manage Team'
    },
    {
      title: 'Testimonials',
      count: stats.testimonials,
      icon: FaComments,
      color: 'from-pink-400 to-pink-600',
      href: '/admin/testimonials',
      action: 'Manage Testimonials'
    },
    {
      title: 'Contact Messages',
      count: stats.contacts,
      icon: FaEnvelope,
      color: 'from-red-400 to-red-600',
      href: '/admin/contacts',
      action: 'View Messages'
    },
  ];

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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's an overview of your content.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-bold text-gray-900">{card.count}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-700 transition-colors"
                >
                  {card.action}
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/admin/blogs/new"
            className="flex items-center gap-3 p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-primary hover:bg-primary-50 transition-all group"
          >
            <FaPlus className="w-5 h-5 text-gray-400 group-hover:text-primary" />
            <span className="font-medium text-gray-700 group-hover:text-primary">New Blog Post</span>
          </Link>
          <Link
            href="/admin/projects/new"
            className="flex items-center gap-3 p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-primary hover:bg-primary-50 transition-all group"
          >
            <FaPlus className="w-5 h-5 text-gray-400 group-hover:text-primary" />
            <span className="font-medium text-gray-700 group-hover:text-primary">New Project</span>
          </Link>
          <Link
            href="/admin/jobs/new"
            className="flex items-center gap-3 p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-primary hover:bg-primary-50 transition-all group"
          >
            <FaPlus className="w-5 h-5 text-gray-400 group-hover:text-primary" />
            <span className="font-medium text-gray-700 group-hover:text-primary">New Job Opening</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

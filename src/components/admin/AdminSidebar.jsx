"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTachometerAlt,
  FaBlog,
  FaProjectDiagram,
  FaBriefcase,
  FaUsers,
  FaComments,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaCog
} from 'react-icons/fa';

const menuItems = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: FaTachometerAlt },
  { name: 'Blog Posts', href: '/admin/blogs', icon: FaBlog },
  { name: 'Portfolio', href: '/admin/portfolio', icon: FaProjectDiagram },
  { name: 'Projects', href: '/admin/projects', icon: FaProjectDiagram },
  { name: 'Jobs', href: '/admin/jobs', icon: FaBriefcase },
  { name: 'Team Members', href: '/admin/team', icon: FaUsers },
  { name: 'Testimonials', href: '/admin/testimonials', icon: FaComments },
  { name: 'Contact Messages', href: '/admin/contacts', icon: FaEnvelope },
  { name: 'Settings', href: '/admin/settings', icon: FaCog },
];

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg text-gray-600 hover:text-primary"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r border-gray-200 shadow-lg transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 border-b border-gray-200 px-4">
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-primary-400 to-primary-600 text-white px-3 py-2 rounded-lg">
                <span className="text-lg font-bold">Admin</span>
              </div>
              <span className="text-sm font-medium text-gray-600">Panel</span>
            </Link>
          </div>

          {/* User info */}
          <div className="px-4 py-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold">
                {user?.email?.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user?.email?.split('@')[0]}
                </p>
                <p className="text-xs text-gray-500 truncate">Admin</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-3">
              {menuItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                const Icon = item.icon;
                
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer actions */}
          <div className="border-t border-gray-200 p-4 space-y-2">
            <Link
              href="/"
              target="_blank"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg transition-all"
            >
              View Site →
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-all"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

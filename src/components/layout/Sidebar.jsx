// src/components/layout/Sidebar.jsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [activeGroup, setActiveGroup] = useState(null);

  const menuItems = [
    {
      group: 'Services',
      items: [
        { name: 'SEO Services', path: '/services/seo' },
        { name: 'CRM Development', path: '/services/crm' },
        { name: 'Mobile Development', path: '/services/mobile' },
        { name: 'Custom Solutions', path: '/services/custom' },
      ],
    },
    {
      group: 'Solutions',
      items: [
        { name: 'Healthcare', path: '/solutions/healthcare' },
        { name: 'Education', path: '/solutions/education' },
        { name: 'Non-Profit', path: '/solutions/non-profit' },
        { name: 'Enterprise', path: '/solutions/enterprise' },
      ],
    },
    {
      group: 'Resources',
      items: [
        { name: 'Documentation', path: '/resources/docs' },
        { name: 'API Reference', path: '/resources/api' },
        { name: 'Support', path: '/resources/support' },
        { name: 'Blog', path: '/resources/blog' },
      ],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50"
            aria-modal="true"
            role="dialog"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="px-4 py-6 border-b border-gray-200">
                <Link href="/" onClick={onClose} className="flex items-center">
                  <span className="text-xl font-bold text-primary">Anant</span>
                  <span className="text-xl font-light text-gray-800 ml-2">Soft</span>
                </Link>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto py-4">
                {menuItems.map((menu) => (
                  <div key={menu.group} className="px-4 mb-4">
                    <button
                      onClick={() => setActiveGroup(activeGroup === menu.group ? null : menu.group)}
                      className="flex items-center justify-between w-full text-left text-gray-600 hover:text-primary"
                      aria-expanded={activeGroup === menu.group}
                    >
                      <span className="text-sm font-semibold">{menu.group}</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          activeGroup === menu.group ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {activeGroup === menu.group && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 space-y-1">
                            {menu.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.path}
                                onClick={onClose}
                                className={`block px-4 py-2 text-sm rounded-lg ${
                                  pathname === item.path
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;

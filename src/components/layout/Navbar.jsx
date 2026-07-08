// src/components/layout/Navbar.jsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../common'
import ASCLogo from '../common/ASCLogo'
import { solutionNavLinks } from '../../lib/site-links'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'SEO Optimization', path: '/services/seo' },
        { name: 'CRM Development', path: '/services/crm' },
        { name: 'Mobile Apps', path: '/services/mobile' },
        { name: 'Custom Solutions', path: '/services/custom' },
        ...solutionNavLinks.slice(0, 6).map((item) => ({ name: item.name, path: item.href })),
      ],
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog', badge: 'New' },
    { name: 'Careers', path: '/careers', badge: 'Hiring' },
    { name: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const NavLink = ({ item }) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const isActive = pathname === item.path

    return (
      <div
        className="relative"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <Link
          href={item.path}
          className={`
            px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300
            hover:text-primary-600 hover:bg-primary-50
            flex items-center gap-2
            ${isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-600'}
          `}
        >
          {item.name}
          {item.badge && (
            <span className="px-2 py-0.5 text-xs font-semibold bg-gradient-to-r from-primary-400 to-primary-600 text-white rounded-full">
              {item.badge}
            </span>
          )}
          {item.dropdown && (
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </Link>

        {/* Dropdown Menu */}
        {item.dropdown && (
          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-2 w-72 rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden z-30"
              >
                <div className="py-2">
                  {item.dropdown.map((dropItem) => (
                    <Link
                      key={dropItem.path}
                      href={dropItem.path}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {dropItem.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    )
  }

  return (
    <nav
      className={`
        fixed w-full z-50 transition-all duration-300
        ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-gray-200/20' : 'bg-white/95 md:bg-transparent'}
      `}
    >
      <Container className="relative">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex min-w-0 flex-shrink-0 items-center gap-2">
            <motion.span whileHover={{ scale: 1.03 }} className="inline-flex">
              <ASCLogo />
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink key={item.path} item={item} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm active:scale-95"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-3 overflow-hidden rounded-2xl border border-gray-100 bg-white/95 shadow-2xl shadow-gray-900/10 backdrop-blur-lg"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`
                      block min-h-12 px-4 py-3 rounded-xl text-base font-medium 
                      transition-all duration-300
                      ${pathname === item.path
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-600 hover:bg-primary-50 hover:text-primary-600'}
                    `}
                  >
                    <div className="flex items-center justify-between">
                      {item.name}
                      {item.badge && (
                        <span className="px-2 py-0.5 text-xs font-semibold bg-gradient-to-r from-primary-400 to-primary-600 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Optional dropdown for mobile */}
                    {item.dropdown && (
                      <div className="mt-2 ml-2 border-l border-gray-100 pl-3 space-y-1">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.path}
                            href={dropItem.path}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm text-gray-600 hover:text-primary-600 py-1"
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  )
}

export default Navbar

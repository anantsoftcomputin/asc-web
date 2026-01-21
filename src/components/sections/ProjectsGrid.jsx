"use client";
// src/pages/Portfolio.jsx
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Container, Card, Badge, Button } from "../common";
import { CTA } from "../sections";
import { FaTimes, FaGlobe, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  const categories = [
    { id: "all", name: "All Projects", icon: "🌟" },
    { id: "healthcare", name: "Healthcare", icon: "🏥" },
    { id: "education", name: "Education", icon: "🎓" },
    { id: "non-profit", name: "Non-Profit", icon: "🤝" },
    { id: "enterprise", name: "Enterprise", icon: "🏢" },
  ];

  const projects = [
    {
      id: 1,
      title: "Pawppy.in",
      category: "petcare",
      image:
        "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2025-09-15_at_12.01.45PM.webp",
      shortDesc: "Connecting pet owners with trusted care",
      fullDesc:
        "Pawppy is a platform that connects pet owners with verified pet service providers, offering bookings, vet consultations, and pet essentials.",
      detailedDesc: "Anant Soft Computing is delighted to feature Pawppy.in, a dedicated online marketplace designed to connect pet owners with a network of reliable and passionate pet care professionals. Understanding the need for trustworthy care, Pawppy.in provides a seamless platform for finding local pet sitters, dog walkers, groomers, and boarding facilities. Our mission is to make pet care simple, safe, and accessible. The platform allows users to browse detailed profiles of service providers, read genuine reviews from other pet owners, and book services with confidence. By creating a community built on trust and a love for animals, Pawppy.in ensures that every pet receives the best possible care, giving owners peace of mind whether they are at work or on vacation.",
      technologies: ["Firebase", "JavaScript", "NodeJS"],
      features: [
        "Verified Pet Care Professionals: Search a curated directory of local, reviewed, and trusted individuals and businesses.",
        "Comprehensive Service Listings: Easily find a wide range of services, including dog walking, in-home pet sitting, grooming, and overnight boarding.",
        "Detailed Provider Profiles: View photos, services offered, experience, and rates to find the perfect match for your pet's needs.",
        "User Reviews and Ratings: Make informed decisions by reading authentic feedback from a community of fellow pet lovers.",
        "Simple and Secure Booking: A user-friendly interface allows for easy scheduling and secure online payments."
      ],
      results: [
        "40% faster booking engagement",
        "Trusted by 5,000+ pet owners",
      ],
      links: {
        live: "https://pawppy.in",
        github: null,
        case_study: "/case-study/pawppy",
      },
      stats: { users: "5,000+", bookings: "20K+", uptime: "99.9%" },
      gradient: "from-pink-400 to-purple-600",
    },
    {
      id: 2,
      title: "Ikama.in",
      category: "franchise",
      image:
        "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2025-09-15_at_11.50.41AM.png",
      shortDesc: "Your gateway to franchise opportunities",
      fullDesc:
        "A platform that connects entrepreneurs with franchise chains through verified listings, AI-based matching, and lead management.",
      detailedDesc: "Anant Soft Computing is proud to present ikama.in, a premier online platform dedicated to connecting aspiring entrepreneurs with the perfect franchise opportunities. Ikama.in serves as a comprehensive directory, showcasing a wide array of franchise options across various industries, from food and beverage to retail and services. Our platform is designed to simplify the process of finding and securing a franchise. We provide detailed information on each listing, including investment requirements, brand history, and support systems, empowering users to make informed decisions. Whether you're a seasoned business owner looking to expand your portfolio or a first-time entrepreneur ready to take the leap, ikama.in is your trusted partner in the world of franchising. Key Features: Extensive Franchise Directory: Explore a diverse range of franchise opportunities to find the ideal match for your goals and budget. Detailed Business Information: Access comprehensive details about each franchise, including investment levels, fees, and training programs. User-Friendly Search and Filtering: Easily navigate our platform and filter listings by industry, investment, and location. Direct Connection with Franchisors: Connect directly with franchise representatives to ask questions and take the next steps. Valuable Resources for Entrepreneurs: Find helpful articles and guides on franchising to support you on your journey.",
      technologies: ["CSS", "Firebase", "HTML"],
      features: [
        "Extensive Franchise Directory: Explore a diverse range of franchise opportunities to find the ideal match for your goals and budget.",
        "Detailed Business Information: Access comprehensive details about each franchise, including investment levels, fees, and training programs.",
        "User-Friendly Search and Filtering: Easily navigate our platform and filter listings by industry, investment, and location.",
        "Direct Connection with Franchisors: Connect directly with franchise representatives to ask questions and take the next steps.",
        "Valuable Resources for Entrepreneurs: Find helpful articles and guides on franchising to support you on your journey."
      ],
      results: ["Generated 2,000+ leads", "25% increase in conversion rate"],
      links: {
        live: "https://ikama.in",
        github: null,
        case_study: "/case-study/ikama",
      },
      stats: { users: "10,000+", leads: "2,000+", uptime: "99.8%" },
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 3,
      title: "OEC CRM",
      category: "crm",
      image:
        "https://anantsoftcomputing.com/media/portfolio/projects/gallery/oeccrm.webp",
      shortDesc: "Optimizing customer relationships with OEC CRM.",
      fullDesc:
        "An enterprise CRM built for OEC to manage leads, students, fees, counseling, and communication — fully real-time and secure.",
      detailedDesc: "OEC CRM provides a powerful platform for managing customer interactions, streamlining sales processes, and enhancing customer satisfaction. With advanced features and intuitive tools, it helps businesses strengthen relationships and drive success.",
      technologies: ["ReactJs", "VueJs"],
      features: [
        "Customer Interaction Management",
        "Advanced Analytics",
        "Customizable Workflows",
        "Mobile Accessibility",
        "Secure Data Handling"
      ],
      results: [
        "70% faster team productivity",
        "Centralized student management for 50+ branches",
      ],
      links: {
        live: null,
        github: null,
        case_study: "/case-study/oec-crm",
      },
      stats: { users: "2,500+", records: "200K+", uptime: "99.9%" },
      gradient: "from-indigo-400 to-blue-700",
    },
    {
      id: 4,
      title: "OEC India",
      category: "education",
      image:
        "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_12.58.47AM.png",
      shortDesc: "Real-time virtual classroom for remote learning",
      fullDesc:
        "A platform providing virtual classroom experiences with live classes and collaborative tools.",
      detailedDesc: "A platform providing virtual classroom experiences with live classes and collaborative tools.",
      technologies: ["Firebase", "NodeJS", "VueJs"],
      features: [
        "Interactive Live Classes",
        "Recorded Sessions",
        "Assignment Management",
        "Teacher and Student Dashboards",
        "Multi-Device Support",
        "Secure and Scalable"
      ],
      results: ["Used by 5,000+ active learners", "Enhanced class engagement"],
      links: {
        live: "https://oecindia.com",
        github: null,
        case_study: "/case-study/oecindia",
      },
      stats: { users: "5,000+", sessions: "50K+", uptime: "99.9%" },
      gradient: "from-purple-400 to-indigo-600",
    },
    {
      id: 5,
      title: "Espionline",
      category: "education",
      image:
        "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_1.00.14AM.png",
      shortDesc: "Real-time virtual classroom for remote learning",
      fullDesc:
        "A scalable online classroom system supporting HD live classes, notes, student tracking, and fee management.",
      detailedDesc: "A platform providing virtual classroom experiences with live classes and collaborative tools.",
      technologies: ["Firebase", "NodeJS", "VueJs"],
      features: ["Interactive Live Classes", "Recorded Sessions", "Attendance Tracking", "Assignment Management", "Customizable Scheduling", "Integration with Learning Management Systems"],
      results: [
        "Reduced operational cost by 35%",
        "Trusted by multiple institutions",
      ],
      links: {
        live: null,
        github: null,
        case_study: "/case-study/espionline",
      },
      stats: { users: "3,500+", classes: "30K+", uptime: "99.8%" },
      gradient: "from-red-400 to-pink-600",
    },
    {
      id: 6,
      title: "Indraprasth Foundation",
      category: "ngo",
      image:
        "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_1.04.13AM.png",
      shortDesc: "Empowering communities through Indraprasth Foundation.",
      fullDesc:
        "A modern NGO website built for showcasing projects, collecting donations, and enabling volunteer applications.",
      detailedDesc: "Indraprasth Foundation is dedicated to social welfare, focusing on empowering underprivileged communities through education, healthcare, and skill development. With a mission to foster sustainable growth, it strives to create lasting positive change.",
      technologies: ["MUI", "ReactJs"],
      features: ["Education Initiatives", "Healthcare Programs", "Skill Development Training",
        "Women Empowerment Projects", "Community Infrastructure Development", "Volunteer Engagement" 
      ],
      results: [
        "200% growth in online donations",
        "Automated volunteer workflow",
      ],
      links: {
        live: "https://indraprasthfoundation.org",
        github: null,
        case_study: "/case-study/indraprasth",
      },
      stats: { donations: "₹50L+", volunteers: "1,200+", uptime: "99.7%" },
      gradient: "from-yellow-400 to-orange-600",
    },
    {
      id: 7,
      title: "Edustation",
      category: "education",
      image:
        "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_1.06.06AM.png",
      shortDesc: "Empowering education through innovative solutions.",
      fullDesc:
        "A platform built for schools to manage students, attendance, fees, and study materials with responsive dashboards.",
      detailedDesc: "Edustation offers cutting-edge educational tools and platforms to enhance learning experiences. Focused on student success, it provides personalized learning, resources, and support to help achieve academic goals.",
      technologies: ["Bootstrap", "PHP"],
      features: ["Personalized Learning Paths", "Interactive Learning Tools", "Comprehensive Resource Library", "Progress Tracking and Analytics", "Adaptive Assessments:", "24/7 Support and Guidance"],
      results: ["Digital transformation for 12+ institutes"],
      links: {
        live: null,
        github: null,
        case_study: "/case-study/edustation",
      },
      stats: { users: "1,800+", materials: "8K+", uptime: "99.5%" },
      gradient: "from-blue-400 to-blue-600",
    },
    {
      id: 8,
      title: "SMHRI",
      category: "healthcare",
      image:
        "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_1.08.15AM.png",
      shortDesc: "Quality healthcare services at SMHRI Hospital.",
      fullDesc:
        "Hospital website and management system built with appointment booking, doctor profiles, and patient communication.",
      detailedDesc: "SMHRI Hospital is committed to delivering high-quality healthcare with advanced medical facilities and compassionate care. Focused on patient well-being, SMHRI offers a range of specialized treatments and expert services.",
      technologies: ["Bootstrap", "Python"],
      features: ["Advanced Medical Facilities", "Specialized Treatment Services", "Patient-Centered Care", "Emergency and Critical Care", "Preventive Healthcare Programs", "Health Education and Awareness", "Digital Health Records", "Affordable and Transparent Billing"],
      results: ["25% reduction in appointment delays"],
      links: {
        live: "https://smhri.com",
        github: null,
        case_study: "/case-study/smhri",
      },
      stats: { patients: "10,000+", appointments: "40K+", uptime: "99.9%" },
      gradient: "from-green-500 to-emerald-700",
    },
    {
      id: 9,
      title: "ESPI CRM",
      category: "crm",
      image:
        "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_1.10.34AM.png",
      shortDesc: "Streamlined customer management with ESPI CRM.",
      fullDesc:
        "A CRM for ESPI handling leads, inquiries, student management, task workflows, and communication automation.",
      detailedDesc: "ESPI CRM offers a comprehensive solution for managing customer relationships, enhancing productivity, and streamlining sales processes. With intuitive tools and data insights, it helps businesses build stronger customer connections and drive growth.",
      technologies: ["Django", "Python"],
      features: ["Customer Relationship Management", "Sales Pipeline Management", "Advanced Analytics and Reporting", "Task and Activity Management", "Omnichannel Support"],
      results: ["65% faster lead response time"],
      links: {
        live: null,
        github: null,
        case_study: "/case-study/espi-crm",
      },
      stats: { users: "1200+", leads: "150K+", uptime: "99.8%" },
      gradient: "from-purple-500 to-purple-700",
    },
    {
      id: 10,
      title: "StudyStreak",
      category: "education",
      image:
        "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_1.12.27AM.png",
      shortDesc: "Achieve academic goals with Studystreak.",
      fullDesc:
        "An AI-powered study planning and analytics platform for students to track progress, join live classes, and access resources.",
      detailedDesc: "Studystreak is your partner in achieving academic success through consistent study habits and progress tracking. With personalized plans and motivational tools, Studystreak helps you stay focused, reach milestones, and build lasting study routines.",
      technologies: ["NodeJS", "Python", "ReactJs"],
      features: ["Personalized Study Plans", "Progress Tracking and Milestones", "Goal Setting and Achievement Reminders", "Task Management", "Study Analytics", "Resource Integration", "Study Reflection"],
      results: ["Used by 3,000+ students", "30% increase in study consistency"],
      links: {
        live: "https://studystreak.com",
        github: null,
        case_study: "/case-study/studystreak",
      },
      stats: { students: "3,000+", progress_reports: "40K+", uptime: "99.9%" },
      gradient: "from-cyan-400 to-blue-600",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section with Parallax */}

      {/* Portfolio Content */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300
                  flex items-center gap-2 backdrop-blur-sm
                  ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25"
                      : "bg-white/80 text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-100"
                  }
                `}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group"
                >
                  <Card
                    className="h-full overflow-hidden bg-white/80 backdrop-blur-sm
                             hover:shadow-2xl hover:shadow-primary-200/20 transition-all duration-500
                             border border-gray-100 hover:border-primary-200"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative overflow-hidden">
                      <div className="relative h-56 w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <Badge
                                key={tech}
                                variant="primary"
                                className={`bg-gradient-to-r ${project.gradient} text-white`}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{project.shortDesc}</p>
                      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                        <div className="flex gap-4">
                          {project.stats &&
                            Object.entries(project.stats).map(
                              ([key, value]) => (
                                <div key={key} className="text-center">
                                  <div className="text-primary-600 font-semibold">
                                    {value}
                                  </div>
                                  <div className="text-xs text-gray-500 capitalize">
                                    {key}
                                  </div>
                                </div>
                              )
                            )}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-10 z-50 overflow-hidden rounded-2xl bg-white"
              style={{ maxWidth: "1200px", margin: "auto" }}
            >
              <div className="h-full flex flex-col">
                {/* Modal Header */}
                <div className="relative h-72">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <Container className="h-full flex flex-col justify-end pb-6">
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {selectedProject.title}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="primary"
                            className={`bg-gradient-to-r ${selectedProject.gradient} text-white`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Container>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                  >
                    <FaTimes className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="flex-1 overflow-auto">
                  <Container className="py-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2 space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Overview
                          </h3>
                          <p className="text-gray-600">
                            {selectedProject.shortDesc}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Detailed Description
                          </h3>
                          <p className="text-gray-600">
                            {selectedProject.detailedDesc}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Key Features
                          </h3>
                          <ul className="space-y-3">
                            {selectedProject.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-3"
                              >
                                <span className="mt-1 w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                                  <svg
                                    className="w-3 h-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </span>
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Results & Impact
                          </h3>
                          <ul className="space-y-3">
                            {selectedProject.results.map((result) => (
                              <li
                                key={result}
                                className="flex items-start gap-3"
                              >
                                <span className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                  <svg
                                    className="w-3 h-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    />
                                  </svg>
                                </span>
                                <span className="text-gray-600">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <Card className="p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Project Links
                          </h3>
                          <div className="space-y-3">
                            {Object.entries(selectedProject.links).map(
                              ([key, url]) => (
                                <a
                                  key={key}
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
                                >
                                  {key === "live" && (
                                    <FaGlobe className="w-5 h-5" />
                                  )}
                                  {key === "github" && (
                                    <FaGithub className="w-5 h-5" />
                                  )}
                                  {key === "case_study" && (
                                    <FaExternalLinkAlt className="w-5 h-5" />
                                  )}
                                  <span className="capitalize">
                                    {key.replace("_", " ")}
                                  </span>
                                </a>
                              )
                            )}
                          </div>
                        </Card>

                        <Card className="p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Technology Stack
                          </h3>
                          <div className="space-y-3">
                            {selectedProject.technologies.map((tech) => (
                              <div
                                key={tech}
                                className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                              >
                                <span className="text-gray-600">{tech}</span>
                                <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                              </div>
                            ))}
                          </div>
                        </Card>

                        <Card className="p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Project Stats
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(selectedProject.stats).map(
                              ([key, value]) => (
                                <div
                                  key={key}
                                  className="p-4 rounded-lg bg-gray-50 text-center"
                                >
                                  <div className="text-2xl font-bold text-primary-600">
                                    {value}
                                  </div>
                                  <div className="text-sm text-gray-600 capitalize">
                                    {key.replace("_", " ")}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </Card>

                        <div className="flex gap-4">
                          <Button
                            variant="primary"
                            className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                            onClick={() =>
                              window.open(selectedProject.links.live, "_blank")
                            }
                          >
                            <FaGlobe className="mr-2" />
                            View Live
                          </Button>
                          <Button
                            variant="outline"
                            className="flex-1"
                            onClick={() =>
                              window.open(
                                selectedProject.links.case_study,
                                "_blank"
                              )
                            }
                          >
                            <FaExternalLinkAlt className="mr-2" />
                            Case Study
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Container>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Stats Section */}

      {/* Enhanced CTA Section */}
    </motion.div>
  );
};

export default PortfolioPage;

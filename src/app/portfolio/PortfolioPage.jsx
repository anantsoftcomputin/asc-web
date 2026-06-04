"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Card, Badge, Button } from "../../components/common";
import { CTA } from "../../components/sections";
import { FaTimes, FaGlobe, FaGithub } from "react-icons/fa";
import { projectAPI } from "../../lib/firebase-admin";
import { isUnavailableImageSrc } from "../../lib/image-utils";

// Hardcoded fallback shown until admin populates Firestore
const FALLBACK_PROJECTS = [
  {
    id: "pfp-1",
    title: "Pawppy.in",
    category: "petcare",
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2025-09-15_at_12.01.45PM.webp",
    shortDesc: "Connecting pet owners with trusted care",
    fullDesc: "Pawppy is a platform that connects pet owners with verified pet service providers, offering bookings, vet consultations, and pet essentials.",
    detailedDesc: "Anant Soft Computing is delighted to feature Pawppy.in, a dedicated online marketplace designed to connect pet owners with a network of reliable and passionate pet care professionals.",
    technologies: ["Firebase", "JavaScript", "NodeJS"],
    features: ["Verified Pet Care Professionals", "Comprehensive Service Listings", "User Reviews and Ratings", "Simple and Secure Booking"],
    results: ["40% faster booking engagement", "Trusted by 5,000+ pet owners"],
    links: { live: "https://pawppy.in", github: null },
    stats: { users: "5,000+", bookings: "20K+", uptime: "99.9%" },
    gradient: "from-pink-400 to-purple-600",
  },
  {
    id: "pfp-2",
    title: "Ikama.in",
    category: "franchise",
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2025-09-15_at_11.50.41AM.png",
    shortDesc: "Your gateway to franchise opportunities",
    fullDesc: "A platform that connects entrepreneurs with franchise chains through verified listings and lead management.",
    detailedDesc: "Anant Soft Computing is proud to present ikama.in, a premier online platform dedicated to connecting aspiring entrepreneurs with the perfect franchise opportunities.",
    technologies: ["CSS", "Firebase", "HTML"],
    features: ["Extensive Franchise Directory", "Detailed Business Information", "User-Friendly Search", "Direct Franchisor Connection"],
    results: ["Generated 2,000+ leads", "25% increase in conversion rate"],
    links: { live: "https://ikama.in", github: null },
    stats: { users: "10,000+", leads: "2,000+", uptime: "99.8%" },
    gradient: "from-green-400 to-blue-500",
  },
  {
    id: "pfp-3",
    title: "OEC CRM",
    category: "crm",
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/oeccrm.webp",
    shortDesc: "Optimizing customer relationships with OEC CRM.",
    fullDesc: "An enterprise CRM built for OEC to manage leads, students, fees, counseling, and communication.",
    detailedDesc: "OEC CRM provides a powerful platform for managing customer interactions, streamlining sales processes, and enhancing customer satisfaction.",
    technologies: ["ReactJs", "VueJs"],
    features: ["Customer Interaction Management", "Advanced Analytics", "Customizable Workflows", "Mobile Accessibility"],
    results: ["70% faster team productivity", "Centralized management for 50+ branches"],
    links: { live: null, github: null },
    stats: { users: "2,500+", records: "200K+", uptime: "99.9%" },
    gradient: "from-indigo-400 to-blue-700",
  },
  {
    id: "pfp-4",
    title: "OEC India",
    category: "education",
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_12.58.47AM.png",
    shortDesc: "Real-time virtual classroom for remote learning",
    fullDesc: "A platform providing virtual classroom experiences with live classes and collaborative tools.",
    detailedDesc: "A platform providing virtual classroom experiences with live classes and collaborative tools.",
    technologies: ["Firebase", "NodeJS", "VueJs"],
    features: ["Interactive Live Classes", "Recorded Sessions", "Assignment Management", "Multi-Device Support"],
    results: ["Used by 5,000+ active learners", "Enhanced class engagement"],
    links: { live: "https://oecindia.com", github: null },
    stats: { users: "5,000+", sessions: "50K+", uptime: "99.9%" },
    gradient: "from-purple-400 to-indigo-600",
  },
  {
    id: "pfp-5",
    title: "Espionline",
    category: "education",
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_1.00.14AM.png",
    shortDesc: "Real-time virtual classroom for remote learning",
    fullDesc: "A scalable online classroom system supporting HD live classes, notes, student tracking, and fee management.",
    detailedDesc: "A platform providing virtual classroom experiences with live classes and collaborative tools.",
    technologies: ["Firebase", "NodeJS", "VueJs"],
    features: ["Interactive Live Classes", "Recorded Sessions", "Attendance Tracking", "Customizable Scheduling"],
    results: ["Reduced operational cost by 35%", "Trusted by multiple institutions"],
    links: { live: null, github: null },
    stats: { users: "3,500+", classes: "30K+", uptime: "99.8%" },
    gradient: "from-red-400 to-pink-600",
  },
  {
    id: "pfp-6",
    title: "Indraprasth Foundation",
    category: "ngo",
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_1.04.13AM.png",
    shortDesc: "Empowering communities through Indraprasth Foundation.",
    fullDesc: "A modern NGO website built for showcasing projects, collecting donations, and enabling volunteer applications.",
    detailedDesc: "Indraprasth Foundation is dedicated to social welfare, focusing on empowering underprivileged communities through education, healthcare, and skill development.",
    technologies: ["MUI", "ReactJs"],
    features: ["Education Initiatives", "Healthcare Programs", "Skill Development Training", "Volunteer Engagement"],
    results: ["200% growth in online donations", "Automated volunteer workflow"],
    links: { live: "https://indraprasthfoundation.org", github: null },
    stats: { donations: "₹50L+", volunteers: "1,200+", uptime: "99.7%" },
    gradient: "from-yellow-400 to-orange-600",
  },
  {
    id: "pfp-7",
    title: "Edustation",
    category: "education",
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_1.06.06AM.png",
    shortDesc: "Empowering education through innovative solutions.",
    fullDesc: "A platform built for schools to manage students, attendance, fees, and study materials with responsive dashboards.",
    detailedDesc: "Edustation offers cutting-edge educational tools and platforms to enhance learning experiences.",
    technologies: ["Bootstrap", "PHP"],
    features: ["Personalized Learning Paths", "Interactive Learning Tools", "Progress Tracking", "Adaptive Assessments"],
    results: ["Digital transformation for 12+ institutes"],
    links: { live: null, github: null },
    stats: { users: "1,800+", materials: "8K+", uptime: "99.5%" },
    gradient: "from-blue-400 to-blue-600",
  },
  {
    id: "pfp-8",
    title: "SMHRI Hospital",
    category: "healthcare",
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_1.08.15AM.png",
    shortDesc: "Quality healthcare services at SMHRI Hospital.",
    fullDesc: "Hospital website and management system built with appointment booking, doctor profiles, and patient communication.",
    detailedDesc: "SMHRI Hospital is committed to delivering high-quality healthcare with advanced medical facilities and compassionate care.",
    technologies: ["Bootstrap", "Python"],
    features: ["Appointment Booking", "Doctor Profiles", "Digital Health Records", "Affordable Billing"],
    results: ["25% reduction in appointment delays"],
    links: { live: "https://smhri.com", github: null },
    stats: { patients: "10,000+", appointments: "40K+", uptime: "99.9%" },
    gradient: "from-green-500 to-emerald-700",
  },
  {
    id: "pfp-9",
    title: "ESPI CRM",
    category: "crm",
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_1.10.34AM.png",
    shortDesc: "Streamlined customer management with ESPI CRM.",
    fullDesc: "A CRM for ESPI handling leads, inquiries, student management, task workflows, and communication automation.",
    detailedDesc: "ESPI CRM offers a comprehensive solution for managing customer relationships, enhancing productivity, and streamlining sales processes.",
    technologies: ["Django", "Python"],
    features: ["CRM Pipeline Management", "Advanced Analytics", "Task Management", "Omnichannel Support"],
    results: ["65% faster lead response time"],
    links: { live: null, github: null },
    stats: { users: "1200+", leads: "150K+", uptime: "99.8%" },
    gradient: "from-purple-500 to-purple-700",
  },
  {
    id: "pfp-10",
    title: "StudyStreak",
    category: "education",
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_1.12.27AM.png",
    shortDesc: "Achieve academic goals with StudyStreak.",
    fullDesc: "An AI-powered study planning and analytics platform for students to track progress, join live classes, and access resources.",
    detailedDesc: "Studystreak is your partner in achieving academic success through consistent study habits and progress tracking.",
    technologies: ["NodeJS", "Python", "ReactJs"],
    features: ["Personalized Study Plans", "Progress Tracking", "Goal Setting", "Study Analytics"],
    results: ["Used by 3,000+ students", "30% increase in study consistency"],
    links: { live: "https://studystreak.com", github: null },
    stats: { students: "3,000+", reports: "40K+", uptime: "99.9%" },
    gradient: "from-cyan-400 to-blue-600",
  },
];

function normalizeProject(doc) {
  const stats = {};
  if (doc.stat1Label && doc.stat1Value) stats[doc.stat1Label] = doc.stat1Value;
  if (doc.stat2Label && doc.stat2Value) stats[doc.stat2Label] = doc.stat2Value;
  if (doc.stat3Label && doc.stat3Value) stats[doc.stat3Label] = doc.stat3Value;

  return {
    id: doc.id,
    title: doc.title || '',
    category: doc.category || 'other',
    image: doc.image || '',
    gradient: doc.gradient || 'from-primary-400 to-primary-600',
    shortDesc: doc.shortDesc || doc.description || '',
    fullDesc: doc.fullDesc || doc.description || '',
    detailedDesc: doc.detailedDesc || doc.fullDesc || doc.description || '',
    problemStatement: doc.problemStatement || '',
    ourApproach: doc.ourApproach || '',
    solutionDelivered: doc.solutionDelivered || '',
    caseStudyOutcome: doc.caseStudyOutcome || '',
    technologies: Array.isArray(doc.technologies) ? doc.technologies : [],
    features: Array.isArray(doc.features) ? doc.features : [],
    results: Array.isArray(doc.results) ? doc.results : [],
    links: {
      live: doc.liveLink || null,
      github: doc.githubLink || null,
    },
    stats,
  };
}

function ProjectImage({ src, alt, gradient, className }) {
  const [errored, setErrored] = useState(false);
  if (isUnavailableImageSrc(src) || errored) {
    return <div className={`bg-gradient-to-br ${gradient} w-full h-full`} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full ${className || ""}`}
      onError={() => setErrored(true)}
    />
  );
}

const ALL_CATEGORIES = [
  { id: "all", name: "All Projects", icon: "🌟" },
  { id: "greenenergy", name: "Green Energy", icon: "🌱" },
  { id: "finance", name: "Finance", icon: "💼" },
  { id: "realestate", name: "Real Estate", icon: "🏠" },
  { id: "corporate", name: "Corporate", icon: "🏛️" },
  { id: "healthcare", name: "Healthcare", icon: "🏥" },
  { id: "education", name: "Education", icon: "🎓" },
  { id: "ngo", name: "Non-Profit", icon: "🤝" },
  { id: "enterprise", name: "Enterprise", icon: "🏢" },
  { id: "crm", name: "CRM", icon: "📊" },
  { id: "franchise", name: "Franchise", icon: "🏪" },
  { id: "petcare", name: "Pet Care", icon: "🐾" },
  { id: "mobile", name: "Mobile Apps", icon: "📱" },
  { id: "web", name: "Web", icon: "🌐" },
];

const CaseStudySection = ({ project }) => {
  if (!project.problemStatement && !project.ourApproach && !project.solutionDelivered && !project.caseStudyOutcome) return null;
  return (
    <div className="space-y-5">
      <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">📋 Case Study</h3>
      {project.problemStatement && (
        <div className="bg-red-50 border border-red-100 rounded-xl p-5">
          <h4 className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-2">🔴 The Challenge</h4>
          <p className="text-gray-700 leading-relaxed">{project.problemStatement}</p>
        </div>
      )}
      {project.ourApproach && (
        <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-5">
          <h4 className="text-sm font-semibold text-yellow-700 uppercase tracking-wide mb-2">🟡 Our Approach</h4>
          <p className="text-gray-700 leading-relaxed">{project.ourApproach}</p>
        </div>
      )}
      {project.solutionDelivered && (
        <div className="bg-green-50 border border-green-100 rounded-xl p-5">
          <h4 className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2">🟢 The Solution</h4>
          <p className="text-gray-700 leading-relaxed">{project.solutionDelivered}</p>
        </div>
      )}
      {project.caseStudyOutcome && (
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
          <h4 className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">📈 Business Impact</h4>
          <p className="text-gray-700 leading-relaxed">{project.caseStudyOutcome}</p>
        </div>
      )}
    </div>
  );
};

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalTab, setModalTab] = useState('overview');
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const result = await projectAPI.getAll();
    if (result.success && result.data.length > 0) {
      setProjects(result.data.map(normalizeProject));
    }
  };

  const activeCategories = ALL_CATEGORIES.filter(
    cat => cat.id === "all" || projects.some(p => p.category === cat.id)
  );

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-primary-100 via-white to-secondary-100 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute -top-4 -right-4 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        </div>
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600">
              250+ projects delivered. Real solutions, real results — across healthcare, education, enterprise, and more.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {activeCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300
                  flex items-center gap-2 backdrop-blur-sm
                  ${selectedCategory === category.id
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg"
                    : "bg-white/80 text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-100"
                  }
                `}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group"
                >
                  <Card
                    className="h-full overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary-200/20 transition-all duration-500 border border-gray-100 hover:border-primary-200"
                    onClick={() => { setSelectedProject(project); setModalTab('overview'); }}
                  >
                    <div className="relative overflow-hidden">
                      <div className="relative h-56 w-full">
                        <ProjectImage
                          src={project.image}
                          alt={project.title}
                          gradient={project.gradient}
                          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="primary" className={`bg-gradient-to-r ${project.gradient} text-white`}>
                              {tech}
                            </Badge>
                          ))}
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
                          {Object.entries(project.stats || {}).slice(0, 2).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-primary-600 font-semibold">{value}</div>
                              <div className="text-xs text-gray-500 capitalize">{key.replace(/_/g, ' ')}</div>
                            </div>
                          ))}
                        </div>
                        <Button variant="outline" size="sm" className="group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-gray-500">No projects in this category yet.</div>
          )}
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
                <div className="relative h-72 shrink-0">
                  <ProjectImage
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    gradient={selectedProject.gradient}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <Container className="h-full flex flex-col justify-end pb-6">
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="primary" className={`bg-gradient-to-r ${selectedProject.gradient} text-white`}>
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

                {/* Modal Tabs */}
                {(selectedProject.problemStatement || selectedProject.ourApproach) && (
                  <div className="flex border-b px-6 bg-white shrink-0">
                    {[{ id: 'overview', label: 'Overview' }, { id: 'casestudy', label: '📋 Case Study' }].map(tab => (
                      <button key={tab.id} onClick={() => setModalTab(tab.id)}
                        className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                          modalTab === tab.id ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}>
                        {tab.label}
                      </button>
                    ))}
                  </div>
                )}

                <div className="flex-1 overflow-auto">
                  <Container className="py-8">
                    {modalTab === 'casestudy' ? (
                      <div className="max-w-3xl">
                        <CaseStudySection project={selectedProject} />
                      </div>
                    ) : (
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2 space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">Overview</h3>
                          <p className="text-gray-600">{selectedProject.shortDesc}</p>
                        </div>
                        {selectedProject.detailedDesc && (
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">About This Project</h3>
                            <p className="text-gray-600">{selectedProject.detailedDesc}</p>
                          </div>
                        )}
                        {selectedProject.features?.length > 0 && (
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                            <ul className="space-y-3">
                              {selectedProject.features.map((f) => (
                                <li key={f} className="flex items-start gap-3">
                                  <span className="mt-1 w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                  </span>
                                  <span className="text-gray-600">{f}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {selectedProject.results?.length > 0 && (
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Results & Impact</h3>
                            <ul className="space-y-3">
                              {selectedProject.results.map((r) => (
                                <li key={r} className="flex items-start gap-3">
                                  <span className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                  </span>
                                  <span className="text-gray-600">{r}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="space-y-6">
                        {(selectedProject.links?.live || selectedProject.links?.github) && (
                          <Card className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Links</h3>
                            <div className="space-y-3">
                              {selectedProject.links.live && (
                                <a href={selectedProject.links.live} target="_blank" rel="noopener noreferrer"
                                  className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors">
                                  <FaGlobe className="w-5 h-5" /> View Live Site
                                </a>
                              )}
                              {selectedProject.links.github && (
                                <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer"
                                  className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors">
                                  <FaGithub className="w-5 h-5" /> View on GitHub
                                </a>
                              )}
                            </div>
                          </Card>
                        )}

                        {selectedProject.technologies.length > 0 && (
                          <Card className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Technology Stack</h3>
                            <div className="space-y-2">
                              {selectedProject.technologies.map((tech) => (
                                <div key={tech} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                                  <span className="text-gray-600 text-sm">{tech}</span>
                                  <span className="w-2 h-2 rounded-full bg-primary-500" />
                                </div>
                              ))}
                            </div>
                          </Card>
                        )}

                        {Object.keys(selectedProject.stats || {}).length > 0 && (
                          <Card className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Stats</h3>
                            <div className="grid grid-cols-2 gap-3">
                              {Object.entries(selectedProject.stats).map(([key, value]) => (
                                <div key={key} className="p-3 rounded-lg bg-gray-50 text-center">
                                  <div className="text-xl font-bold text-primary-600">{value}</div>
                                  <div className="text-xs text-gray-600 capitalize mt-1">{key.replace(/_/g, ' ')}</div>
                                </div>
                              ))}
                            </div>
                          </Card>
                        )}

                        {selectedProject.links?.live && (
                          <Button
                            variant="primary"
                            className="w-full bg-gradient-to-r from-primary-500 to-primary-600"
                            onClick={() => window.open(selectedProject.links.live, "_blank")}
                          >
                            <FaGlobe className="mr-2" /> View Live
                          </Button>
                        )}
                      </div>
                    </div>
                    )}
                  </Container>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CTA />
    </motion.div>
  );
};

export default PortfolioPage;

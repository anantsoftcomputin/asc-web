"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Card, Badge, Button } from "../common";
import { FaTimes, FaGlobe, FaGithub } from "react-icons/fa";
import { projectAPI } from "../../lib/firebase-admin";
import { isUnavailableImageSrc } from "../../lib/image-utils";

const GAZRA_PROJECT = {
  id: "fp-gazra",
  title: "Gazra.org",
  category: "ngo",
  image: "/assets/images/blog/google-business-profile-local-seo.jpg",
  shortDesc: "Inclusive community website for Project Gazra",
  fullDesc: "A community-focused website for Project Gazra, presenting initiatives, support pathways, events, gallery, resources, and volunteer engagement.",
  detailedDesc: "Anant Soft Computing built Gazra.org as a trust-first public website for Project Gazra, helping visitors understand the mission, explore initiatives, access support resources, and participate through events and community programs.",
  technologies: ["ReactJs", "Responsive Web", "SEO"],
  features: ["Mission & Initiative Pages", "Events & Gallery", "Support Resources", "Volunteer Engagement", "Mobile-First Website"],
  results: ["Central digital presence for Project Gazra", "Improved access to community resources", "Mobile-friendly public website"],
  links: { live: "https://gazra.org", github: null },
  stats: { website: "Live", focus: "Community", uptime: "99.9%" },
  gradient: "from-teal-400 to-emerald-600",
  problemStatement: "Project Gazra needed a public website that clearly explained its mission, initiatives, support pathways, and community programs.",
  ourApproach: "We structured the site around trust, accessibility, and easy discovery so visitors could quickly understand the initiative and find the right resources or participation path.",
  solutionDelivered: "We delivered a responsive website with initiative pages, event and gallery sections, resource-focused content, and clear calls to connect with the community.",
  caseStudyOutcome: "Gazra.org now gives Project Gazra a central digital presence for awareness, resources, events, and community engagement.",
};

const FALLBACK_PROJECTS = [
  GAZRA_PROJECT,
  {
    id: "fp-1", title: "Pawppy.in", category: "petcare",
    image: "/assets/images/blog/pet-clinic-management-software.jpg",
    shortDesc: "Connecting pet owners with trusted care",
    fullDesc: "Pawppy is a platform that connects pet owners with verified pet service providers, offering bookings, vet consultations, and pet essentials.",
    detailedDesc: "Anant Soft Computing built Pawppy.in — a two-sided marketplace that connects pet owners across India with verified, reviewed pet care professionals including sitters, walkers, groomers, and vets.",
    technologies: ["Firebase", "JavaScript", "NodeJS"],
    features: ["Verified Pet Care Professionals", "Geo-based Provider Search", "In-App Booking & Scheduling", "User Reviews and Ratings", "Secure Online Payments"],
    results: ["40% faster booking engagement", "5,000+ pet owners onboarded", "99.9% platform uptime"],
    links: { live: "https://pawppy.in", github: null },
    stats: { users: "5,000+", bookings: "20K+", uptime: "99.9%" },
    gradient: "from-pink-400 to-purple-600",
    problemStatement: "Pet owners in India had no reliable platform to find verified, trustworthy pet care professionals. The market was fragmented — groomers, sitters, and vets operated independently with no central discovery platform, forcing pet owners to rely on risky word-of-mouth referrals.",
    ourApproach: "We conducted user research across 3 major cities to map the booking behaviour of pet owners and the service delivery expectations of care professionals. We designed a two-sided marketplace with trust, verification, and ease-of-booking as its core pillars.",
    solutionDelivered: "We built a full-stack marketplace featuring verified professional onboarding with background checks, geo-based search, a review and rating system, in-app booking with calendar sync, and Razorpay payment integration — all accessible on mobile and desktop.",
    caseStudyOutcome: "Pawppy.in onboarded 5,000+ pet owners within 6 months of launch. Booking engagement was 40% faster compared to the manual booking process. The platform maintained 99.9% uptime and became a trusted community for pet care in Ahmedabad and Vadodara.",
  },
  {
    id: "fp-2", title: "Ikama.in", category: "franchise",
    image: "/assets/images/blog/custom-vs-ready-made-software.jpg",
    shortDesc: "India's trusted franchise discovery platform",
    fullDesc: "A platform that connects entrepreneurs with verified franchise opportunities through structured listings, investment filters, and direct franchisor contact.",
    detailedDesc: "Anant Soft Computing developed Ikama.in to digitise India's franchise discovery process — bringing hundreds of franchise brands and thousands of aspiring entrepreneurs onto a single, structured platform.",
    technologies: ["CSS", "Firebase", "HTML", "JavaScript"],
    features: ["Curated Franchise Directory", "Investment Range Filtering", "Verified Franchisor Listings", "Lead Management for Franchisors", "Detailed Brand Profiles"],
    results: ["2,000+ qualified leads in first quarter", "25% increase in franchisor conversion rate", "10,000+ entrepreneur registrations"],
    links: { live: "https://ikama.in", github: null },
    stats: { users: "10,000+", leads: "2,000+", uptime: "99.8%" },
    gradient: "from-green-400 to-blue-500",
    problemStatement: "India's ₹938 billion franchise industry had no centralised digital platform for discovery. Entrepreneurs seeking franchise opportunities were forced to rely on broker networks, cold calls, and expensive trade shows — a slow, opaque, and inefficient process that left both sides frustrated.",
    ourApproach: "We mapped the entire franchise discovery journey — from an entrepreneur's first search to signing a franchise agreement — identifying friction points at every stage. We then designed a content-rich directory with SEO-optimised franchise listings, investment filters, and a CRM-integrated lead management system for franchisors.",
    solutionDelivered: "We built a comprehensive franchise marketplace featuring advanced filtering by industry, investment level, and location; verified brand listings with ROI data; a lead capture and routing system for franchisors; and a resource centre with franchise guides and FAQs.",
    caseStudyOutcome: "Ikama.in generated 2,000+ qualified franchise leads in its first quarter. Franchisor conversion rates improved by 25% due to better lead qualification. The platform scaled to 10,000+ registered entrepreneurs within its first year.",
  },
  {
    id: "fp-3", title: "OEC CRM", category: "crm",
    image: "/assets/images/blog/crm-stop-losing-leads.jpg",
    shortDesc: "Custom CRM eliminating lead loss across 50+ branches",
    fullDesc: "An enterprise-grade CRM built for OEC — a multi-branch education consultancy — to centralise leads, automate follow-ups, and gain real-time visibility across all branches.",
    detailedDesc: "Anant Soft Computing designed and built a bespoke CRM for OEC Education, replacing a fragmented spreadsheet-and-WhatsApp workflow with a centralised, automated lead management platform serving 50+ branches simultaneously.",
    technologies: ["ReactJs", "VueJs", "Firebase", "Node.js"],
    features: ["Multi-Branch Lead Pipeline", "Automated Follow-Up Reminders", "Branch-Wise Performance Dashboards", "Fee Tracking & Payment Records", "Student Communication Portal", "Counsellor Activity Tracking"],
    results: ["70% improvement in counsellor productivity", "Zero lead leakage across 50+ branches", "Centralised student records for 2,500+ active students"],
    links: { live: null, github: null },
    stats: { users: "2,500+", records: "200K+", uptime: "99.9%" },
    gradient: "from-indigo-400 to-blue-700",
    problemStatement: "OEC, a leading multi-branch education consultancy with 50+ branches across Gujarat, was managing all student inquiries and leads via WhatsApp groups and shared Excel sheets. This caused 40% lead loss, inconsistent follow-up, counsellor confusion, and zero management visibility into branch performance.",
    ourApproach: "We mapped OEC's entire student lifecycle — from first inquiry through counselling, application, enrolment, and alumni — and designed a CRM architecture that centralised every touchpoint while allowing branch-level customisation. We ran a 2-week discovery sprint with branch managers before writing a single line of code.",
    solutionDelivered: "We built a full-stack CRM with a real-time lead pipeline, automated follow-up reminders via WhatsApp and SMS, branch-wise performance dashboards for management, fee collection tracking, document upload for student files, and a counsellor activity log for accountability.",
    caseStudyOutcome: "Within 3 months of deployment, OEC reported 70% improvement in counsellor productivity and zero lead leakage across all branches. The centralised database now holds records for 2,500+ active students and has become the operational backbone of OEC's expansion strategy.",
  },
  {
    id: "fp-4", title: "OEC India", category: "education",
    image: "/assets/images/blog/education-crm-consultants.jpg",
    shortDesc: "Purpose-built LMS for coaching institutions",
    fullDesc: "A custom learning management system developed for OEC India — enabling seamless online class delivery, attendance tracking, fee management, and student progress monitoring.",
    detailedDesc: "Anant Soft Computing built OEC India's online education platform from scratch — a full-featured LMS designed specifically for the Indian coaching industry, not adapted from generic video conferencing tools.",
    technologies: ["Firebase", "NodeJS", "VueJs", "WebRTC"],
    features: ["HD Live Streaming Classes", "Recorded Session Library", "Attendance Tracking & Reports", "Assignment Submission Portal", "Fee Management System", "Multi-Branch Student Management"],
    results: ["5,000+ students transitioned online in 3 weeks", "99.9% platform uptime during COVID peak", "35% reduction in administrative overhead"],
    links: { live: "https://oecindia.com", github: null },
    stats: { students: "5,000+", sessions: "50K+", uptime: "99.9%" },
    gradient: "from-purple-400 to-indigo-600",
    problemStatement: "During COVID-19, OEC India needed to move its in-person coaching classes online within weeks. Generic tools like Zoom lacked attendance tracking tied to student records, assignment management, fee collection, and branch-level student segmentation — all critical for structured coaching.",
    ourApproach: "Rather than adapting an off-the-shelf tool, we built a purpose-built LMS tailored entirely to the coaching industry's workflow. We mapped every educator-student interaction and designed the architecture around the coaching lifecycle rather than a generic classroom metaphor.",
    solutionDelivered: "We delivered a complete online education platform with HD live streaming via WebRTC, session recording with searchable transcripts, automated attendance marked via login events, an assignment submission and grading portal, a Razorpay-integrated fee management module, and multi-branch student segmentation.",
    caseStudyOutcome: "OEC India transitioned 5,000+ students to the online platform within 3 weeks of deployment — with zero downtime throughout the COVID-19 period. Administrative overhead dropped by 35% due to automated attendance and fee tracking. The platform continues to serve students across all OEC branches.",
  },
  {
    id: "fp-5", title: "Indraprasth Foundation", category: "ngo",
    image: "/assets/images/blog/google-business-profile-local-seo.jpg",
    shortDesc: "Digital transformation for a leading social welfare NGO",
    fullDesc: "A modern NGO website built for Indraprasth Foundation enabling online donations, volunteer registration, impact storytelling, and event management.",
    detailedDesc: "Anant Soft Computing gave Indraprasth Foundation a fully digital presence — transforming how they collect donations, recruit volunteers, and communicate their social impact to the world.",
    technologies: ["ReactJs", "MUI", "Firebase", "Razorpay"],
    features: ["Online Donation Gateway with Tax Receipt", "Volunteer Registration & Onboarding Portal", "Project Impact Showcase Pages", "Event Management & Registration", "SEO-Optimised Content Architecture", "Social Media Integration"],
    results: ["200% growth in online donations within first year", "1,200+ volunteers registered via the portal", "Top 3 search ranking for key NGO terms in Gujarat"],
    links: { live: "https://indraprasthfoundation.org", github: null },
    stats: { donations: "₹50L+", volunteers: "1,200+", uptime: "99.7%" },
    gradient: "from-yellow-400 to-orange-600",
    problemStatement: "Indraprasth Foundation — a Gujarat-based NGO focused on education, healthcare, and women's empowerment — had no digital presence. All donations were made via bank transfer with manual tracking, volunteer recruitment was word-of-mouth only, and the organisation was invisible to potential supporters searching online.",
    ourApproach: "We focused on two primary goals: convert website visitors into donors and convert social awareness into volunteer applications. We designed an emotionally resonant digital presence that led with impact stories and made giving frictionless. We also implemented a complete SEO strategy to build organic visibility.",
    solutionDelivered: "We built a full NGO website with an integrated Razorpay donation gateway that auto-generates 80G tax receipts, a structured volunteer registration and onboarding flow, detailed project impact pages with photo galleries and outcome metrics, an events calendar, and an admin panel for the NGO team to manage content independently.",
    caseStudyOutcome: "Online donations grew by 200% within the first year of the new website. The volunteer portal onboarded 1,200+ registered volunteers, replacing the manual recruitment process entirely. Indraprasth Foundation now ranks in the top 3 search results for several NGO-related keywords in Gujarat.",
  },
  {
    id: "fp-6", title: "SMHRI Hospital", category: "healthcare",
    image: "/assets/images/blog/hospital-seo-appointments.jpg",
    shortDesc: "Digitising patient acquisition for a multi-specialty hospital",
    fullDesc: "A comprehensive hospital website with online appointment booking, doctor profiles, specialty pages, and patient communication tools — built to drive patient acquisition.",
    detailedDesc: "Anant Soft Computing transformed SMHRI Hospital's patient acquisition model by building a digital-first presence that made it easy for patients to find the right doctor, understand their specialty, and book appointments online.",
    technologies: ["Bootstrap", "Python", "Django", "MySQL"],
    features: ["Online Appointment Booking System", "Doctor Profiles with Specialties", "Department & Service Pages", "Patient Testimonials Section", "WhatsApp Chat Widget", "Google Maps Integration"],
    results: ["25% reduction in appointment scheduling delays", "3x increase in online appointment bookings in 60 days", "Significant growth in new patient inquiries from search"],
    links: { live: "https://smhri.com", github: null },
    stats: { patients: "10,000+", appointments: "40K+", uptime: "99.9%" },
    gradient: "from-green-500 to-emerald-700",
    problemStatement: "SMHRI Hospital was losing prospective patients to competitors because of zero online presence. Appointment booking was phone-only, causing missed calls, scheduling conflicts, and frustrated patients. Specialist doctors had no way to showcase their qualifications or specialties to patients searching online.",
    ourApproach: "We identified patient acquisition and appointment booking efficiency as the two primary goals. We designed the website architecture around the patient decision journey — starting from symptom search to specialist discovery, doctor evaluation, and appointment booking — rather than around the hospital's internal department structure.",
    solutionDelivered: "We delivered a full hospital website with an online appointment booking system integrated with the hospital's scheduling workflow, individual doctor profile pages with qualifications and consultation timings, department and specialty landing pages optimised for local SEO, patient testimonials, a WhatsApp chat widget for quick queries, and Google Maps integration for navigation.",
    caseStudyOutcome: "Within 60 days of launch, online appointment bookings grew by 3x. Appointment scheduling delays reduced by 25% as patients could now self-schedule rather than waiting for callbacks. The hospital's online visibility for local healthcare searches improved significantly, driving a consistent stream of new patient inquiries.",
  },
];

const PROJECT_IMAGE_FALLBACKS = {
  petcare: "/assets/images/blog/pet-clinic-management-software.jpg",
  franchise: "/assets/images/blog/custom-vs-ready-made-software.jpg",
  crm: "/assets/images/blog/crm-stop-losing-leads.jpg",
  education: "/assets/images/blog/education-crm-consultants.jpg",
  ngo: "/assets/images/blog/google-business-profile-local-seo.jpg",
  healthcare: "/assets/images/blog/hospital-seo-appointments.jpg",
  mobile: "/assets/images/blog/mobile-app-development-cost-india.jpg",
  web: "/assets/images/blog/website-vs-web-app.jpg",
  other: "/assets/images/blog/custom-vs-ready-made-software.jpg",
};

function resolveProjectImage(src, category) {
  if (!src || src.includes("anantsoftcomputing.com/media/portfolio")) {
    return PROJECT_IMAGE_FALLBACKS[category] || PROJECT_IMAGE_FALLBACKS.other;
  }
  return src;
}

function normalizeProject(doc) {
  const stats = {};
  if (doc.stat1Label && doc.stat1Value) stats[doc.stat1Label] = doc.stat1Value;
  if (doc.stat2Label && doc.stat2Value) stats[doc.stat2Label] = doc.stat2Value;
  if (doc.stat3Label && doc.stat3Value) stats[doc.stat3Label] = doc.stat3Value;
  return {
    id: doc.id,
    title: doc.title || '',
    category: doc.category || 'other',
    image: resolveProjectImage(doc.image, doc.category || 'other'),
    gradient: doc.gradient || 'from-primary-400 to-primary-600',
    shortDesc: doc.shortDesc || doc.description || '',
    fullDesc: doc.fullDesc || doc.description || '',
    detailedDesc: doc.detailedDesc || doc.fullDesc || '',
    technologies: Array.isArray(doc.technologies) ? doc.technologies : [],
    features: Array.isArray(doc.features) ? doc.features : [],
    results: Array.isArray(doc.results) ? doc.results : [],
    links: { live: doc.liveLink || null, github: doc.githubLink || null },
    stats,
    problemStatement: doc.problemStatement || '',
    ourApproach: doc.ourApproach || '',
    solutionDelivered: doc.solutionDelivered || '',
    caseStudyOutcome: doc.caseStudyOutcome || '',
    featured: doc.featured || false,
  };
}

function ensureGazraProject(projects) {
  const hasGazra = projects.some((project) => {
    const title = (project.title || "").toLowerCase();
    const liveUrl = (project.links?.live || "").toLowerCase();
    return title.includes("gazra") || liveUrl.includes("gazra.org");
  });

  return hasGazra ? projects : [GAZRA_PROJECT, ...projects];
}

function ProjectImage({ src, alt, gradient, className }) {
  const [errored, setErrored] = useState(false);
  if (isUnavailableImageSrc(src) || errored) return <div className={`bg-gradient-to-br ${gradient} w-full h-full`} />;

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
    <div className="space-y-6">
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

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalTab, setModalTab] = useState('overview');
  const [projects, setProjects] = useState(() => ensureGazraProject(FALLBACK_PROJECTS));

  useEffect(() => {
    projectAPI.getAll().then(result => {
      if (result.success && result.data.length > 0) {
        setProjects(ensureGazraProject(result.data.map(normalizeProject)));
      }
    });
  }, []);

  const openProject = (project) => { setSelectedProject(project); setModalTab('overview'); };
  const closeProject = () => setSelectedProject(null);

  const activeCategories = ALL_CATEGORIES.filter(
    cat => cat.id === "all" || projects.some(p => p.category === cat.id)
  );

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        {/* Category Filter */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16">
          {activeCategories.map(cat => (
            <motion.button key={cat.id} onClick={() => setSelectedCategory(cat.id)}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 backdrop-blur-sm
                ${selectedCategory === cat.id
                  ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg"
                  : "bg-white/80 text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-100"}`}>
              <span>{cat.icon}</span>{cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div key={project.id} layout
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }} className="group">
                <Card className="h-full overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary-200/20 transition-all duration-500 border border-gray-100 hover:border-primary-200 cursor-pointer"
                  onClick={() => openProject(project)}>
                  <div className="relative overflow-hidden">
                    <div className="relative h-56 w-full">
                      <ProjectImage src={project.image} alt={project.title} gradient={project.gradient}
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map(tech => (
                          <Badge key={tech} variant="primary" className={`bg-gradient-to-r ${project.gradient} text-white`}>{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    {(project.problemStatement || project.ourApproach) && (
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs px-2 py-1 rounded-full text-gray-600 font-medium">
                        📋 Case Study
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{project.shortDesc}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <div className="flex gap-4">
                        {Object.entries(project.stats || {}).slice(0, 2).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-primary-600 font-semibold text-sm">{value}</div>
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
          <p className="text-center py-20 text-gray-500">No projects in this category yet.</p>
        )}
      </Container>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={closeProject} />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-10 z-50 overflow-hidden rounded-2xl bg-white flex flex-col"
              style={{ maxWidth: "1100px", margin: "auto" }}>
              {/* Header Image */}
              <div className="relative h-56 shrink-0">
                <ProjectImage src={selectedProject.image} alt={selectedProject.title} gradient={selectedProject.gradient}
                  className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <Container className="h-full flex flex-col justify-end pb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map(tech => (
                        <Badge key={tech} variant="primary" className={`bg-gradient-to-r ${selectedProject.gradient} text-white`}>{tech}</Badge>
                      ))}
                    </div>
                  </Container>
                </div>
                <button onClick={closeProject} className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>

              {/* Tabs */}
              {(selectedProject.problemStatement || selectedProject.ourApproach) && (
                <div className="flex border-b px-6 shrink-0 bg-white">
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

              {/* Content */}
              <div className="flex-1 overflow-auto">
                <Container className="py-6">
                  {modalTab === 'overview' ? (
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2 space-y-5">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Overview</h3>
                          <p className="text-gray-600">{selectedProject.fullDesc}</p>
                        </div>
                        {selectedProject.detailedDesc && (
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">About This Project</h3>
                            <p className="text-gray-600">{selectedProject.detailedDesc}</p>
                          </div>
                        )}
                        {selectedProject.features?.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                            <ul className="space-y-2">
                              {selectedProject.features.map(f => (
                                <li key={f} className="flex items-start gap-3">
                                  <span className="mt-0.5 w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                  </span>
                                  <span className="text-gray-600 text-sm">{f}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {selectedProject.results?.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Results & Impact</h3>
                            <ul className="space-y-2">
                              {selectedProject.results.map(r => (
                                <li key={r} className="flex items-start gap-3">
                                  <span className="mt-0.5 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                  </span>
                                  <span className="text-gray-600 text-sm">{r}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="space-y-4">
                        {(selectedProject.links?.live || selectedProject.links?.github) && (
                          <Card className="p-5">
                            <h3 className="text-base font-semibold text-gray-900 mb-3">Project Links</h3>
                            <div className="space-y-3">
                              {selectedProject.links.live && (
                                <a href={selectedProject.links.live} target="_blank" rel="noopener noreferrer"
                                  className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors text-sm">
                                  <FaGlobe className="w-4 h-4" /> View Live Site
                                </a>
                              )}
                              {selectedProject.links.github && (
                                <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer"
                                  className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors text-sm">
                                  <FaGithub className="w-4 h-4" /> View on GitHub
                                </a>
                              )}
                            </div>
                          </Card>
                        )}
                        {selectedProject.technologies.length > 0 && (
                          <Card className="p-5">
                            <h3 className="text-base font-semibold text-gray-900 mb-3">Tech Stack</h3>
                            <div className="space-y-2">
                              {selectedProject.technologies.map(tech => (
                                <div key={tech} className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                                  <span className="text-gray-600 text-sm">{tech}</span>
                                  <span className="w-2 h-2 rounded-full bg-primary-500" />
                                </div>
                              ))}
                            </div>
                          </Card>
                        )}
                        {Object.keys(selectedProject.stats || {}).length > 0 && (
                          <Card className="p-5">
                            <h3 className="text-base font-semibold text-gray-900 mb-3">Project Stats</h3>
                            <div className="grid grid-cols-2 gap-2">
                              {Object.entries(selectedProject.stats).map(([key, value]) => (
                                <div key={key} className="p-3 rounded-lg bg-gray-50 text-center">
                                  <div className="text-lg font-bold text-primary-600">{value}</div>
                                  <div className="text-xs text-gray-600 capitalize mt-0.5">{key.replace(/_/g, ' ')}</div>
                                </div>
                              ))}
                            </div>
                          </Card>
                        )}
                        {selectedProject.links?.live && (
                          <Button variant="primary" className="w-full"
                            onClick={() => window.open(selectedProject.links.live, "_blank")}>
                            <FaGlobe className="mr-2" /> View Live Site
                          </Button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="max-w-3xl">
                      <CaseStudySection project={selectedProject} />
                    </div>
                  )}
                </Container>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

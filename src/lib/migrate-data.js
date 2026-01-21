/**
 * Data Migration Script
 * Run this script to migrate existing data to Firebase
 * 
 * Usage: Open browser console on /admin/migrate page and execute
 */

import { blogPosts } from './blog-data';
import { blogAPI, projectAPI, testimonialAPI, teamAPI } from './firebase-admin';

// Projects data from ProjectsGrid component
const projectsData = [
  {
    id: 1,
    title: "Pawppy.in",
    category: "petcare",
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2025-09-15_at_12.01.45PM.webp",
    shortDesc: "Connecting pet owners with trusted care",
    fullDesc: "Pawppy is a platform that connects pet owners with verified pet service providers, offering bookings, vet consultations, and pet essentials.",
    detailedDesc: "Anant Soft Computing is delighted to feature Pawppy.in, a dedicated online marketplace designed to connect pet owners with a network of reliable and passionate pet care professionals. Understanding the need for trustworthy care, Pawppy.in provides a seamless platform for finding local pet sitters, dog walkers, groomers, and boarding facilities.",
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
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2025-09-15_at_11.50.41AM.png",
    shortDesc: "Your gateway to franchise opportunities",
    fullDesc: "A platform that connects entrepreneurs with franchise chains through verified listings, AI-based matching, and lead management.",
    detailedDesc: "Anant Soft Computing is proud to present ikama.in, a premier online platform dedicated to connecting aspiring entrepreneurs with the perfect franchise opportunities.",
    technologies: ["CSS", "Firebase", "HTML"],
    features: [
      "Extensive Franchise Directory",
      "Detailed Business Information",
      "User-Friendly Search and Filtering",
      "Direct Connection with Franchisors",
      "Valuable Resources for Entrepreneurs"
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
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/oeccrm.webp",
    shortDesc: "Optimizing customer relationships with OEC CRM.",
    fullDesc: "An enterprise CRM built for OEC to manage leads, students, fees, counseling, and communication — fully real-time and secure.",
    detailedDesc: "OEC CRM provides a powerful platform for managing customer interactions, streamlining sales processes, and enhancing customer satisfaction.",
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
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_12.58.47AM.png",
    shortDesc: "Real-time virtual classroom for remote learning",
    fullDesc: "A platform providing virtual classroom experiences with live classes and collaborative tools.",
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
  }
];

// Testimonials data
const testimonialsData = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "Medical Director",
    organization: "City Hospital",
    image: "/api/placeholder/80/80",
    quote: "The hospital management system developed by Anant Soft Computing has revolutionized our operations. The system is intuitive, efficient, and has significantly improved our patient care workflow.",
    rating: 5
  },
  {
    id: 2,
    name: "Amit Sharma",
    role: "Managing Director",
    organization: "Global Education Consultants",
    image: "/api/placeholder/80/80",
    quote: "Their overseas education CRM has been a game-changer for our consultancy. The attention to detail and custom features have helped us manage student applications more effectively.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Founder",
    organization: "Learning Edge Academy",
    image: "/api/placeholder/80/80",
    quote: "The learning management system exceeded our expectations. It's user-friendly, feature-rich, and the support team has been exceptional throughout the implementation.",
    rating: 5
  }
];

// Team members data
const teamMembersData = [
  {
    name: 'Jigar Desai',
    role: 'CEO & Founder',
    image: '/api/placeholder/400/400',
    bio: 'Visionary leader with 15+ years of software industry experience.',
  },
  {
    name: 'Vijendrasinh',
    role: 'SEO Manager',
    image: '/api/placeholder/400/400',
    bio: 'Expert in enterprise solutions and system architecture.',
  },
  {
    name: 'Mehul Machhi',
    role: 'Back End Developer',
    image: '/api/placeholder/400/400',
    bio: 'Full-stack developer specializing in scalable applications.',
  },
  {
    name: 'Sagar Ramani',
    role: 'Front End Developer',
    image: '/api/placeholder/400/400',
    bio: 'Experienced front-end developer with a passion for crafting responsive, user-friendly interfaces.',
  },
  {
    name: 'Darshan Patel',
    role: 'Front End Developer',
    image: '/api/placeholder/400/400',
    bio: 'Creative problem solver focused on building dynamic and efficient web applications.',
  },
];

export async function migrateAllData() {
  console.log('Starting data migration...');
  
  const results = {
    blogs: { success: 0, failed: 0 },
    projects: { success: 0, failed: 0 },
    testimonials: { success: 0, failed: 0 },
    team: { success: 0, failed: 0 }
  };

  // Migrate Blog Posts (first 10 for testing)
  console.log('Migrating blog posts...');
  for (const blog of blogPosts.slice(0, 10)) {
    try {
      const result = await blogAPI.create(blog);
      if (result.success) {
        results.blogs.success++;
        console.log(`✓ Blog migrated: ${blog.title}`);
      } else {
        results.blogs.failed++;
        console.error(`✗ Failed to migrate blog: ${blog.title}`, result.error);
      }
    } catch (error) {
      results.blogs.failed++;
      console.error(`✗ Error migrating blog: ${blog.title}`, error);
    }
  }

  // Migrate Projects
  console.log('Migrating projects...');
  for (const project of projectsData) {
    try {
      const result = await projectAPI.create(project);
      if (result.success) {
        results.projects.success++;
        console.log(`✓ Project migrated: ${project.title}`);
      } else {
        results.projects.failed++;
        console.error(`✗ Failed to migrate project: ${project.title}`, result.error);
      }
    } catch (error) {
      results.projects.failed++;
      console.error(`✗ Error migrating project: ${project.title}`, error);
    }
  }

  // Migrate Testimonials
  console.log('Migrating testimonials...');
  for (const testimonial of testimonialsData) {
    try {
      const result = await testimonialAPI.create(testimonial);
      if (result.success) {
        results.testimonials.success++;
        console.log(`✓ Testimonial migrated: ${testimonial.name}`);
      } else {
        results.testimonials.failed++;
        console.error(`✗ Failed to migrate testimonial: ${testimonial.name}`, result.error);
      }
    } catch (error) {
      results.testimonials.failed++;
      console.error(`✗ Error migrating testimonial: ${testimonial.name}`, error);
    }
  }

  // Migrate Team Members
  console.log('Migrating team members...');
  for (const member of teamMembersData) {
    try {
      const result = await teamAPI.create(member);
      if (result.success) {
        results.team.success++;
        console.log(`✓ Team member migrated: ${member.name}`);
      } else {
        results.team.failed++;
        console.error(`✗ Failed to migrate team member: ${member.name}`, result.error);
      }
    } catch (error) {
      results.team.failed++;
      console.error(`✗ Error migrating team member: ${member.name}`, error);
    }
  }

  console.log('\n=== Migration Complete ===');
  console.log('Results:', results);
  return results;
}

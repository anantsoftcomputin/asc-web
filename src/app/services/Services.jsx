// src/components/sections/Services.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container, Card, Button } from "../../components/common";
import { CTA, Testimonials } from "../../components/sections";
import Image from "next/image";
import {
  FaSearch,
  FaDesktop,
  FaMobile,
  FaDatabase,
  FaCode,
  FaChartLine,
  FaCheck,
  FaLightbulb,
  FaCogs,
  FaUsers,
  FaAward,
  FaHandshake,
} from "react-icons/fa";
import Link from "next/link";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: "crm",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      ),
      title: "CRM Development",
      shortDesc:
        "Custom CRM solutions designed to streamline your business operations and boost productivity.",
      fullDesc:
        "Design, build and deploy tailored CRM systems that centralize customer data, automate workflows, and provide actionable insights. Our CRM solutions scale with your business and integrate with your existing systems.",
      features: [
        "Contact & Account Management",
        "Sales Pipeline & Deal Tracking",
        "Workflow Automation & Email Sequencing",
        "Custom Dashboards & Reporting",
        "Role-based Access Control",
        "Third-party Integrations (ERP, Mail, Payment gateways)",
        "Mobile & Offline Access",
      ],
      technologies: [
        "React / Next.js",
        "Node.js / Express",
        "PostgreSQL / MongoDB",
        "GraphQL / REST",
        "Redis",
        "Docker",
        "AWS / DigitalOcean",
      ],
      benefits: [
        "Unified customer view",
        "Faster sales cycles",
        "Reduced manual work through automation",
        "Improved team collaboration",
        "Better data-driven decisions",
      ],
      bg: "from-primary-400 to-primary-600",
    },

    {
      id: "custom-development",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 576 512"
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"></path>
        </svg>
      ),
      title: "Custom Development",
      shortDesc:
        "Specialized systems for non-profits including Gaushala and Hospital Management.",
      fullDesc:
        "End-to-end custom software development for domain-specific needs — from requirement analysis and prototyping to implementation, testing and long-term support. We deliver secure, maintainable systems tailored to your workflows and compliance needs.",
      features: [
        "Requirement analysis & solution design",
        "Domain-specific modules (healthcare, gaushala, education)",
        "Integrations with payment gateways & government systems",
        "User management & audit trails",
        "Reporting & analytics",
        "Maintenance & SLA-backed support",
      ],
      technologies: [
        "Node.js / NestJS",
        "Laravel / PHP",
        "Python / Django",
        "PostgreSQL / MySQL",
        "REST / GraphQL",
        "Docker / Kubernetes",
        "CI/CD (GitHub Actions, GitLab CI)",
      ],
      benefits: [
        "Software tailored to your unique processes",
        "Higher operational efficiency",
        "Easier regulatory compliance",
        "Long-term maintainability & support",
      ],
      bg: "from-secondary-400 to-secondary-600",
    },
    {
      id: "digital-strategy",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 320 512"
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
        </svg>
      ),
      title: "Digital Strategy",
      shortDesc:
        "Strategic consulting to help your business thrive in the digital landscape.",
      fullDesc:
        "A data-driven digital strategy that aligns product, marketing and technology — helping you acquire customers efficiently and scale sustainably. We combine market research, UX, growth experiments and analytics to craft a roadmap that delivers measurable results.",
      features: [
        "Market & competitor research",
        "Product / UX strategy",
        "Content & channel planning",
        "Paid & organic growth experiments",
        "Analytics and KPI definition",
        "Conversion rate optimization (CRO)",
      ],
      technologies: [
        "Google Analytics",
        "Figma",
        "Hotjar",
        "SEMrush",
        "HubSpot",
        "Google Ads",
      ],
      benefits: [
        "Clear growth roadmap",
        "Better marketing ROI",
        "Faster product-market fit",
        "Actionable analytics to guide decisions",
      ],
      bg: "from-accent-400 to-accent-600",
    },

    {
      id: "erp",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"></path>
        </svg>
      ),
      title: "ERP Systems",
      shortDesc:
        "Comprehensive ERP solutions tailored for various industries and business needs.",
      fullDesc:
        "Design and implement modular ERP systems that unify finance, inventory, procurement, HR and manufacturing. Our ERP solutions focus on configurability, reporting and integrations so businesses can operate efficiently at scale.",
      features: [
        "Finance & Accounting",
        "Inventory & Warehouse Management",
        "Procurement & Supplier Management",
        "Sales & Order Processing",
        "HR & Payroll",
        "Manufacturing / Production Planning",
        "Role-based dashboards & BI reports",
      ],
      technologies: [
        "Odoo / ERPNext",
        "PostgreSQL",
        "Python",
        "React",
        "Docker",
        "Celery / RabbitMQ",
      ],
      benefits: [
        "Single source of truth for operations",
        "Reduced manual reconciliation",
        "Improved inventory turns",
        "Better financial visibility & control",
      ],
      bg: "from-primary-400 to-primary-600",
    },

    {
      id: "mobile-apps",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 640 512"
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
        </svg>
      ),
      title: "Mobile Apps",
      shortDesc:
        "Native and cross-platform mobile applications built with cutting-edge technologies.",
      fullDesc:
        "We build performant mobile apps (native & cross-platform) with attention to UX, offline support and native integrations. From prototyping to app store release and ongoing updates — we cover the entire lifecycle.",
      features: [
        "Native (iOS/Android) & Cross-platform (React Native / Flutter)",
        "Push Notifications & Deep Linking",
        "Offline-first & Sync strategies",
        "Performance tuning and profiling",
        "App Store & Play Store submission",
        "Analytics & Crash reporting",
      ],
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "SQLite / Realm",
        "Sentry",
      ],
      benefits: [
        "Faster time-to-market with shared code",
        "Better user engagement via native features",
        "Reliable offline experience",
        "Easier maintenance and updates",
      ],
      bg: "from-secondary-400 to-secondary-600",
    },

    {
      id: "seo",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path>
        </svg>
      ),
      title: "SEO Optimization",
      shortDesc:
        "Boost your online visibility with data-driven SEO strategies and advanced optimization techniques.",
      fullDesc:
        "Comprehensive SEO services to improve your search engine rankings and drive organic traffic. We combine technical audits, content strategy and link-building to deliver sustainable organic growth.",
      features: [
        "Keyword Research & Analysis",
        "On-Page SEO Optimization",
        "Technical SEO Audits",
        "Content Strategy & Creation",
        "Performance Tracking & Reporting",
        "Local SEO Optimization",
        "Mobile SEO",
        "Link Building Strategy",
      ],
      technologies: [
        "Google Analytics",
        "SEMrush",
        "Ahrefs",
        "Google Search Console",
        "Moz",
        "Screaming Frog",
      ],
      benefits: [
        "Increased organic traffic",
        "Higher conversion rates",
        "Better ROI on marketing",
        "Enhanced brand visibility",
      ],
      bg: "from-accent-400 to-accent-600",
    },
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction" },
    { number: "200+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Expert Team Members" },
  ];

  const industries = [
    "Healthcare",
    "E-commerce",
    "Education",
    "Real Estate",
    "Manufacturing",
    "Non-Profit",
    "Finance",
    "Retail",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-b from-primary-100 via-white to-secondary-100">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute -top-4 -right-4 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative pt-32 pb-16 text-center lg:pt-40">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-dark sm:text-6xl md:text-7xl">
              Transform Your Business
              <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                With Our Digital Solutions
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              We deliver cutting-edge technology solutions that drive growth,
              enhance efficiency, and create lasting competitive advantages.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href={`/contact`}
                className="inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 transform hover:scale-102 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white shadow-lg shadow-primary-200/30 focus:ring-primary-400 px-8 py-4 text-lg"
                tabIndex={0}
              >
                <span className="flex items-center">Schedule Consultation</span>
              </Link>

              <Link href={`/portfolio`}
                className="inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 transform hover:scale-102 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-primary-400 text-primary-600 hover:bg-primary-50 hover:border-primary-500 focus:ring-primary-400 px-8 py-4 text-lg"
                tabIndex={0}
              >
                <span className="flex items-center">View Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-gray-600">
              From concept to execution, we provide end-to-end solutions
              tailored to your specific needs and industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="h-full cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary-100/50"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.shortDesc}</p>
                    <Button variant="primary" size="sm">
                      Learn More
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <FaLightbulb />,
                    title: "Innovative Solutions",
                    desc: "Cutting-edge technology combined with creative problem-solving",
                  },
                  {
                    icon: <FaCogs />,
                    title: "Proven Process",
                    desc: "Streamlined development methodology ensuring project success",
                  },
                  {
                    icon: <FaUsers />,
                    title: "Expert Team",
                    desc: "Highly skilled professionals with diverse industry experience",
                  },
                  {
                    icon: <FaHandshake />,
                    title: "Client-Focused",
                    desc: "Dedicated support and collaboration throughout the project",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="text-primary-600 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry, index) => (
                    <motion.div
                      key={industry}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <FaCheck className="text-primary-200" />
                      <span>{industry}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-gray-600">
              We follow a systematic approach to ensure the success of every
              project
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your requirements and project goals",
              },
              {
                step: "02",
                title: "Planning",
                desc: "Designing the solution and creating project roadmap",
              },
              {
                step: "03",
                title: "Development",
                desc: "Building your solution with regular updates",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Testing, deployment and ongoing support",
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600">{phase.desc}</p>
                </Card>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300" />
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-gray-600">
              We leverage the latest technologies to build robust and scalable
              solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "React",
              "Node.js",
              "Python",
              "AWS",
              "Flutter",
              "MongoDB",
              "PostgreSQL",
              "Docker",
              "Firebase",
              "Redux",
              "Django",
              "GraphQL",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-primary-600 font-semibold">{tech}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />

      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on complexity and scope. Typically, small projects take 4-8 weeks, while larger projects can take 3-6 months. We'll provide a detailed timeline during the initial consultation.",
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes, we offer comprehensive maintenance and support packages for all our services. This includes regular updates, bug fixes, and technical support to ensure your solution continues to perform optimally.",
              },
              {
                q: "What is your development process?",
                a: "We follow an agile development methodology with regular client check-ins and iterations. This ensures transparency and allows for feedback throughout the development process.",
              },
              {
                q: "How do you ensure project quality?",
                a: "We implement rigorous quality assurance processes, including automated testing, code reviews, and thorough QA testing before delivery. We also maintain open communication channels for feedback and improvements.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8">
              Contact us today to discuss your project and see how we can help
              transform your business
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="primary">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {selectedService && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-600/10 rounded-lg flex items-center justify-center text-primary-600">
                    {selectedService.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-500 hover:text-gray-700 p-1"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <p className="text-gray-600 mb-8">{selectedService.fullDesc}</p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <FaCheck className="text-primary-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Benefits
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <FaCheck className="text-primary-600 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="primary"
                  className="flex-1 bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800"
                >
                  Get Started
                </Button>
                <Button variant="outline" className="flex-1">
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <CTA />
    </motion.div>
  );
};

export default Services;

// src/pages/services/CustomDevelopment.jsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Container, Button, Card, Badge } from '../../../components/common';
import { CTA } from '../../../components/sections';
import { 
  FaCode, 
  FaCogs, 
  FaServer, 
  FaDatabase,
  FaCloud,
  FaLaptopCode,
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaTools
} from 'react-icons/fa';
import Image from "next/image";

const CustomDevelopment = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  const solutions = [
    {
      icon: <FaDatabase className="w-6 h-6" />,
      title: "Enterprise Systems",
      description: "Custom enterprise solutions tailored to your business processes",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaServer className="w-6 h-6" />,
      title: "Web Applications",
      description: "Scalable and responsive web applications",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaCloud className="w-6 h-6" />,
      title: "Cloud Solutions",
      description: "Cloud-native applications and microservices",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <FaLaptopCode className="w-6 h-6" />,
      title: "Integration Services",
      description: "Seamless integration with existing systems",
      gradient: "from-red-500 to-red-600"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: "🏥",
      solutions: ["Hospital Management", "Patient Records", "Telemedicine"],
      projects: 45
    },
    {
      name: "Education",
      icon: "🎓",
      solutions: ["Learning Management", "Student Portal", "Assessment Systems"],
      projects: 38
    },
    {
      name: "Non-Profit",
      icon: "🤝",
      solutions: ["Donation Management", "Volunteer Tracking", "Event Management"],
      projects: 32
    },
    {
      name: "Finance",
      icon: "💰",
      solutions: ["Payment Processing", "Financial Reporting", "Risk Management"],
      projects: 41
    }
  ];

  const technologies = {
    frontend: ["React", "Vue.js", "Angular", "Next.js"],
    backend: ["Node.js", "Python", "Java", "Go"],
    database: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    cloud: ["AWS", "Azure", "Google Cloud", "Digital Ocean"]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          </div>
        </motion.div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge 
                variant="primary"
                className="mb-6 bg-primary-100 text-primary-600 px-4 py-2"
              >
                Custom Development
              </Badge>
              <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                Tailored Solutions for Your Unique Challenges
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We specialize in developing custom software solutions that perfectly 
                align with your business needs and drive digital transformation.
              </p>
              <div className="flex gap-4">
                <Button 
                  variant="primary"
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                >
                  Discuss Your Project
                </Button>
                <Button variant="outline">
                  Explore Solutions
                </Button>
              </div>

              {/* Achievement Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                {[
                  { value: '200+', label: 'Projects Delivered' },
                  { value: '15+', label: 'Industries Served' },
                  { value: '98%', label: 'Client Satisfaction' }
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Code Animation/Illustration */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl transform rotate-3" />
                <Card className="p-8 backdrop-blur-sm">
                  <div className="space-y-4 font-mono text-sm">
                    {[
                      { color: 'text-blue-500', code: '// Custom Solutions' },
                      { color: 'text-purple-500', code: 'function initializeProject() {' },
                      { color: 'text-green-500', code: '  const solution = new CustomSolution({' },
                      { color: 'text-gray-600', code: '    client: "YourBusiness",' },
                      { color: 'text-gray-600', code: '    technology: "Latest",' },
                      { color: 'text-gray-600', code: '    scalability: "Infinite"' },
                      { color: 'text-green-500', code: '  });' },
                      { color: 'text-purple-500', code: '}' }
                    ].map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`${line.color}`}
                      >
                        {line.code}
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Custom Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver comprehensive custom solutions tailored to your specific needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${solution.gradient}
                                 flex items-center justify-center text-white shadow-lg`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full justify-center"
                    >
                      Learn More
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Industry Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Solutions tailored for various industries with proven success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{industry.name}</h3>
                  <ul className="space-y-2 mb-6">
                    {industry.solutions.map((solution) => (
                      <li key={solution} className="flex items-center gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {solution}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <div className="text-sm text-gray-500">
                      {industry.projects}+ Projects Delivered
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use cutting-edge technologies to build robust and scalable solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(technologies).map(([category, techs], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-lg font-semibold mb-4 capitalize">{category}</h3>
                  <div className="space-y-3">
                    {techs.map((tech) => (
                      <div
                        key={tech}
                        className="p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-300"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Enhanced CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <Card className="p-12 bg-gradient-to-br from-primary-50 to-secondary-50">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Build Your Custom Solution?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let&apos;s discuss your project requirements and create a solution that perfectly 
                matches your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                >
                  Start Your Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* Development Process Timeline */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-primary-100 transform -translate-x-1/2" />

              {[
                {
                  phase: "Discovery",
                  duration: "Week 1-2",
                  description: "Understanding your requirements, challenges, and objectives",
                  details: [
                    "Business analysis",
                    "Technical requirements",
                    "Solution architecture",
                    "Project planning"
                  ],
                  icon: "🎯"
                },
                {
                  phase: "Design & Planning",
                  duration: "Week 2-3",
                  description: "Creating detailed technical specifications and architecture",
                  details: [
                    "System architecture",
                    "Database design",
                    "API specifications",
                    "Technology stack selection"
                  ],
                  icon: "📝"
                },
                {
                  phase: "Development",
                  duration: "Week 4-10",
                  description: "Agile development with regular updates and demonstrations",
                  details: [
                    "Sprint planning",
                    "Regular deployments",
                    "Code reviews",
                    "Quality assurance"
                  ],
                  icon: "💻"
                },
                {
                  phase: "Testing",
                  duration: "Week 11-12",
                  description: "Comprehensive testing and quality assurance",
                  details: [
                    "Unit testing",
                    "Integration testing",
                    "Performance testing",
                    "Security testing"
                  ],
                  icon: "🔍"
                },
                {
                  phase: "Deployment",
                  duration: "Week 13",
                  description: "Smooth deployment and system integration",
                  details: [
                    "Production deployment",
                    "System integration",
                    "Performance monitoring",
                    "Documentation"
                  ],
                  icon: "🚀"
                }
              ].map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? 'ml-[50%] pl-8' : 'mr-[50%] pr-8 text-right'
                  }`}
                >
                  <div
                    className={`absolute top-0 ${
                      index % 2 === 0 ? 'left-0' : 'right-0'
                    } w-8 h-8 bg-white border-4 border-primary-500 rounded-full transform -translate-y-1/2 ${
                      index % 2 === 0 ? '-translate-x-1/2' : 'translate-x-1/2'
                    }`}
                  >
                    <span className="absolute inset-0 flex items-center justify-center text-lg">
                      {phase.icon}
                    </span>
                  </div>
                  <Card 
                    className={`p-6 hover:shadow-lg transition-shadow duration-300 ${
                      index % 2 === 0 ? '' : 'flex flex-col items-end'
                    }`}
                  >
                    <Badge variant="primary" className="mb-2">
                      {phase.duration}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <ul className={`space-y-2 text-sm ${index % 2 === 0 ? '' : 'text-right'}`}>
                      {phase.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Case Studies */}
      {/* <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real examples of custom solutions we&apos;ve delivered
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare Management System",
                client: "City Hospital Network",
                image: "/api/placeholder/600/400",
                category: "Healthcare",
                results: [
                  "40% reduction in admin time",
                  "60% faster patient processing",
                  "99.9% system uptime"
                ]
              },
              {
                title: "Education Platform",
                client: "Global Learning Institute",
                image: "/api/placeholder/600/400",
                category: "Education",
                results: [
                  "100,000+ active students",
                  "95% student satisfaction",
                  "50% increase in enrollment"
                ]
              },
              {
                title: "Donation Management System",
                client: "International NGO",
                image: "/api/placeholder/600/400",
                category: "Non-Profit",
                results: [
                  "200% increase in donations",
                  "85% process automation",
                  "45% cost reduction"
                ]
              }
            ].map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group">
                  <div className="relative">
                    <Image
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4">
                        <Badge variant="primary" className="bg-white/90 backdrop-blur-sm">
                          {study.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.client}</p>
                    <div className="space-y-2">
                      {study.results.map((result) => (
                        <div key={result} className="flex items-center gap-2 text-sm">
                          <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{result}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="mt-6 w-full justify-center"
                    >
                      Read Case Study
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section> */}

      {/* Final CTA */}
      {/* <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let&apos;s discuss your project requirements and create a custom solution 
              that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                size="lg"
              >
                View All Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </section> */}

      <CTA />
    </motion.div>
  );
};

export default CustomDevelopment;
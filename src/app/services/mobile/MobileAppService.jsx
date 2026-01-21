'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Container, Button, Card, Badge } from '../../../components/common';
import { CTA } from '../../../components/sections';
import { 
  FaMobile, 
  FaAndroid, 
  FaApple, 
  FaCode, 
  FaRocket,
  FaShieldAlt,
  FaTools,
  FaCloud,
  FaBolt,
  FaChartLine
} from 'react-icons/fa';
import Image from "next/image";

const MobileAppService = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  const capabilities = [
    {
      icon: <FaAndroid />,
      title: "Native Android",
      description: "High-performance Android apps with native capabilities",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaApple />,
      title: "Native iOS",
      description: "Sleek and powerful iOS applications",
      color: "from-gray-700 to-gray-800"
    },
    {
      icon: <FaCode />,
      title: "Cross-Platform",
      description: "Cost-effective solutions that work on all platforms",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaBolt />,
      title: "PWA",
      description: "Progressive Web Apps for broader reach",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const features = [
    {
      icon: <FaRocket />,
      title: "High Performance",
      description: "Optimized apps that deliver exceptional speed"
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure",
      description: "Enterprise-grade security measures"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Integration",
      description: "Seamless cloud service integration"
    },
    {
      icon: <FaTools />,
      title: "Scalable",
      description: "Built to grow with your business"
    }
  ];

  const techStack = [
    { name: "React Native", level: 95 },
    { name: "Flutter", level: 90 },
    { name: "Swift", level: 85 },
    { name: "Kotlin", level: 88 },
    { name: "Firebase", level: 92 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"
        >
          {/* Animated patterns */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
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
                Mobile App Development
              </Badge>
              <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                Transform Your Ideas Into Mobile Reality
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We craft beautiful, high-performance mobile applications that deliver 
                exceptional user experiences across all platforms.
              </p>
              <div className="flex gap-4">
                <Button 
                  variant="primary"
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                >
                  Start Your Project
                </Button>
                <Button variant="outline">
                  View Portfolio
                </Button>
              </div>

              {/* Key Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                {[
                  { value: '100+', label: 'Apps Delivered' },
                  { value: '4.8★', label: 'App Rating' },
                  { value: '1M+', label: 'Downloads' }
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
              {/* Phone Mockup */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-3xl transform rotate-6" />
                <Card className="p-8 backdrop-blur-sm">
                  <div className="relative mx-auto w-[280px] h-[580px] bg-gray-900 rounded-[3rem] ring-1 ring-gray-900/10">
                    <div className="absolute top-[0.8rem] left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-full" />
                    <div className="absolute top-[2rem] bottom-[2rem] left-[0.8rem] right-[0.8rem] bg-white rounded-[2.25rem] overflow-hidden">
                      <Image 
                        src="https://anantsoftcomputing.com/assets/phone-C_i371QX.png" 
                        alt="App Interface"
                        className="w-full h-full object-cover"
                        fill
                      />
                    </div>
                    <div className="absolute bottom-[0.8rem] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-800 rounded-full" />
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Development Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional mobile experiences across all major platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full group hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${capability.color} 
                                 flex items-center justify-center text-white text-2xl
                                 transform group-hover:scale-110 transition-transform duration-300`}>
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach to turning your app idea into reality
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {[
              { 
                phase: "Discovery",
                description: "Understanding your requirements and planning the solution",
                duration: "1-2 Weeks",
                icon: "🎯"
              },
              {
                phase: "Design",
                description: "Creating intuitive user interfaces and experiences",
                duration: "2-3 Weeks",
                icon: "🎨"
              },
              {
                phase: "Development",
                description: "Building your application with clean, efficient code",
                duration: "8-12 Weeks",
                icon: "⚙️"
              },
              {
                phase: "Testing",
                description: "Rigorous testing across devices and platforms",
                duration: "2-3 Weeks",
                icon: "🔍"
              },
              {
                phase: "Deployment",
                description: "Launching your app to the stores and monitoring performance",
                duration: "1-2 Weeks",
                icon: "🚀"
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative mb-8 last:mb-0"
              >
                <Card className="p-6 pl-20">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 
                                rounded-full flex items-center justify-center text-2xl">
                    {phase.icon}
                  </div>
                  {index < 4 && (
                    <div className="absolute left-9 top-[calc(50%+2rem)] w-0.5 h-8 bg-primary-200" />
                  )}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{phase.phase}</h3>
                    <Badge variant="primary" className="bg-primary-100 text-primary-600">
                      {phase.duration}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{phase.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Technology Stack</h2>
              <p className="text-gray-600 mb-8">
                We use the latest technologies to build robust and scalable mobile applications
              </p>
              <div className="space-y-6">
                {techStack.map((tech) => (
                  <div key={tech.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{tech.name}</span>
                      <span className="text-primary-600">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <Card key={feature.title} className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </Card>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Featured Apps Section */}

      {/* App Development Timeline */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Development Timeline</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A transparent view of your app development journey
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-primary-100 transform -translate-x-1/2" />

              {[
                {
                  title: "Project Kickoff",
                  duration: "Week 1",
                  description: "Requirements gathering and project planning",
                  icon: "🚀"
                },
                {
                  title: "UI/UX Design",
                  duration: "Weeks 2-3",
                  description: "Creating wireframes and visual designs",
                  icon: "🎨"
                },
                {
                  title: "Core Development",
                  duration: "Weeks 4-9",
                  description: "Building the main features and functionality",
                  icon: "💻"
                },
                {
                  title: "Testing & QA",
                  duration: "Weeks 10-11",
                  description: "Thorough testing and bug fixing",
                  icon: "🔍"
                },
                {
                  title: "Launch Preparation",
                  duration: "Week 12",
                  description: "Store submission and deployment",
                  icon: "🎯"
                }
              ].map((phase, index) => (
                <motion.div
                  key={phase.title}
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
                  <Card className={`p-6 ${index % 2 === 0 ? '' : 'flex flex-col items-end'}`}>
                    <Badge variant="primary" className="mb-2">
                      {phase.duration}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                    <p className="text-gray-600">{phase.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their app development experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO",
                company: "HealthTech Solutions",
                image: "/api/placeholder/64/64",
                quote: "The team delivered an exceptional healthcare app that exceeded our expectations."
              },
              {
                name: "Michael Chen",
                role: "Product Manager",
                company: "EduTech Inc",
                image: "/api/placeholder/64/64",
                quote: "Outstanding development process and excellent communication throughout."
              },
              {
                name: "Amanda Smith",
                role: "Founder",
                company: "FinanceFlow",
                image: "/api/placeholder/64/64",
                quote: "Their expertise in fintech app development is truly remarkable."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full"
                      fill
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-primary-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">{testimonial.quote}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-white">
        <Container>
          <Card className="p-12 bg-gradient-to-br from-primary-50 to-secondary-50">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let&apos;s transform your idea into a powerful mobile application.
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                >
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                >
                  View Pricing
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <CTA />
    </motion.div>
  );
};

export default MobileAppService;
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Container, Button, Card, Badge } from '../../../components/common';
import { CTA } from '../../../components/sections';
import { FaSearch, FaChartLine, FaTools, FaCogs, FaRocket } from 'react-icons/fa';
import Image from 'next/image';
import BlogCarousel from '../../../components/sections/BlogCarousel';

const SEOService = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  const seoFeatures = [
    {
      icon: <FaSearch className="w-6 h-6" />,
      title: "Keyword Research",
      description: "In-depth analysis to target the most valuable search terms for your business"
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Performance Tracking",
      description: "Real-time monitoring of your SEO metrics and rankings"
    },
    {
      icon: <FaTools className="w-6 h-6" />,
      title: "Technical SEO",
      description: "Optimization of your website's technical aspects for better rankings"
    },
    {
      icon: <FaCogs className="w-6 h-6" />,
      title: "On-Page SEO",
      description: "Optimization of content and meta elements for maximum visibility"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Audit & Analysis",
      description: "Comprehensive analysis of your current SEO status and competitors"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Creating a customized SEO strategy based on analysis results"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Executing optimization techniques and content strategies"
    },
    {
      step: "04",
      title: "Monitoring & Adjustment",
      description: "Continuous monitoring and strategy refinement"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-50 via-white to-secondary-50">
        {/* Animated Background */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0"
        >
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
                SEO Services
              </Badge>
              <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                Boost Your Online Visibility
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Drive organic traffic and increase your search engine rankings with our 
                data-driven SEO strategies and advanced optimization techniques.
              </p>
              <div className="flex gap-4">
                <Button 
                  variant="primary"
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                >
                  Get Started
                </Button>
                <Button variant="outline">
                  Learn More
                </Button>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { value: '200+', label: 'SEO Projects' },
                  { value: '85%', label: 'Avg. Traffic Increase' },
                  { value: '95%', label: 'Client Satisfaction' }
                ].map((metric) => (
                  <div key={metric.label} className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
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
              {/* SEO Visualization */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl transform rotate-3" />
                <Card className="p-8 backdrop-blur-sm">
                  <div className="space-y-6">
                    {[
                      { label: 'Keyword Rankings', value: 85, color: 'bg-primary-500' },
                      { label: 'Organic Traffic', value: 92, color: 'bg-secondary-500' },
                      { label: 'Domain Authority', value: 78, color: 'bg-accent-500' }
                    ].map((metric) => (
                      <div key={metric.label}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">{metric.label}</span>
                          <span className="font-semibold">{metric.value}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${metric.value}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={`h-full rounded-full ${metric.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive SEO Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our SEO services are designed to help you achieve sustainable growth 
              through improved search engine visibility.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our SEO Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach to improving your search engine rankings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="p-6 h-full border-2 border-primary-100 hover:border-primary-300 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200" />
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Real Results for Real Businesses</h2>
              <p className="text-gray-600">
                Our SEO strategies have helped businesses achieve significant improvements 
                in their online visibility and organic traffic.
              </p>
              <div className="space-y-4">
                {[
                  { metric: 'Organic Traffic', increase: '+150%' },
                  { metric: 'Keyword Rankings', increase: '+200%' },
                  { metric: 'Conversion Rate', increase: '+85%' }
                ].map((stat) => (
                  <div key={stat.metric} className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                      <span className="text-xl font-bold">{stat.increase}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{stat.metric}</div>
                      <div className="text-sm text-gray-600">Average Improvement</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                {/* Add a graph or chart component here */}
                <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center relative">
                  <Image 
                    src="https://anantsoftcomputing.com/assets/SEO-C_7XXLRl.jpeg" 
                    fill 
                    className="object-cover rounded-lg absolute" 
                    alt="SEO Services Illustration" 
                  />
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Blog Carousel Section */}
      
      {/* <BlogCarousel /> */}

      <CTA />
    </motion.div>
  );
};

export default SEOService;
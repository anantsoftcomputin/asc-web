"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Container, Button, Card } from '../common';
import { FaSearch, FaDesktop, FaMobile, FaDatabase, FaCode, FaChartLine } from 'react-icons/fa';

const Services = () => {
  const router = useRouter();

  const services = [
    {
      icon: <FaSearch className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Boost your online visibility with data-driven SEO strategies and advanced optimization techniques.",
      gradient: "from-primary-400 to-primary-600",
      path: "/services/seo"
    },
    {
      icon: <FaDesktop className="w-8 h-8" />,
      title: "CRM Development",
      description: "Custom CRM solutions designed to streamline your business operations and boost productivity.",
      gradient: "from-secondary-400 to-secondary-600",
      path: "/services/crm"
    },
    {
      icon: <FaMobile className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications built with cutting-edge technologies.",
      gradient: "from-accent-400 to-accent-600",
      path: "/services/mobile"
    },
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: "ERP Systems",
      description: "Comprehensive ERP solutions tailored for various industries and business needs.",
      gradient: "from-primary-400 to-primary-600",
      path: "/services/custom"
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Custom Development",
      description: "Specialized systems for non-profits including Gaushala and Hospital Management.",
      gradient: "from-secondary-400 to-secondary-600",
      path: "/services/custom"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Digital Strategy",
      description: "Strategic consulting to help your business thrive in the digital landscape.",
      gradient: "from-accent-400 to-accent-600",
      path: "/services/custom"
    }
  ];

  const handleServiceClick = (path) => {
    router.push(path);
  };

  const handleExploreAll = () => {
    router.push('/services');
  };

  return (
    <section className="py-20 relative bg-gradient-to-b from-secondary-50 via-white to-primary-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-secondary-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 text-lg font-normal mt-2">
              Comprehensive Solutions for Your Digital Needs
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            We deliver end-to-end digital solutions that help businesses transform, 
            innovate, and stay ahead in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className="p-8 h-full bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300
                          border border-gray-100 hover:border-primary-200
                          hover:shadow-xl hover:shadow-primary-200/20"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6
                                bg-gradient-to-br ${service.gradient} shadow-lg shadow-primary-200/20`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleServiceClick(service.path)}
                  className="w-full justify-center hover:bg-gradient-to-r hover:from-primary-400 hover:to-primary-600 hover:text-white
                            transition-all duration-300"
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button 
            variant="primary" 
            size="lg"
            onClick={handleExploreAll}
            className="bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800
                      shadow-xl shadow-primary-200/30 px-12"
          >
            Explore All Services
          </Button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent opacity-50" />
      </Container>
    </section>
  );
};

export default Services;

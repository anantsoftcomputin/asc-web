// src/components/sections/Features.jsx
"use client";

import { motion } from 'framer-motion';
import { Container } from '../common';
import {
  FaCode,
  FaRocket,
  FaShieldAlt,
  FaCloud,
  FaMobile,
  FaUsers,
  FaCogs,
  FaChartLine
} from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Well-structured, maintainable code following best practices and design patterns.'
    },
    {
      icon: <FaRocket />,
      title: 'Fast Performance',
      description: 'Optimized applications that deliver exceptional speed and responsiveness.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure Solutions',
      description: 'Built-in security measures to protect your data and users.'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Ready',
      description: 'Applications designed for seamless cloud deployment and scaling.'
    },
    {
      icon: <FaMobile />,
      title: 'Mobile First',
      description: 'Responsive designs that work perfectly on all devices.'
    },
    {
      icon: <FaUsers />,
      title: 'User Focused',
      description: 'Intuitive interfaces designed for the best user experience.'
    },
    {
      icon: <FaCogs />,
      title: 'Easy Integration',
      description: 'Systems that integrate smoothly with your existing infrastructure.'
    },
    {
      icon: <FaChartLine />,
      title: 'Scalable Architecture',
      description: 'Solutions that grow with your business needs.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
            <span className="block text-primary text-lg font-normal mt-2">
              Our Technical Expertise
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We combine technical excellence with innovative thinking to deliver
            solutions that drive your business forward.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-2xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Our Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['Python', 'Django', 'React', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS'].map((tech) => (
              <div
                key={tech}
                className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-gray-800 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Features;
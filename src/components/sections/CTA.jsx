// src/components/sections/CTA.jsx
"use client";

import { motion } from 'framer-motion';
import { Container, Button } from '../common';
import { useRouter } from 'next/navigation';
import { FaRocket, FaArrowRight, FaComments } from 'react-icons/fa';

const CTA = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/contact');
  };

  const handleViewWork = () => {
    router.push('/portfolio');
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-secondary/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      <Container className="relative">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Content */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <FaRocket className="w-8 h-8 text-primary" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Digital Presence?
                <span className="block text-primary mt-2">
                  Let's Build Something Amazing Together
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                Whether you need a custom CRM, mobile app, or enterprise solution, 
                our team of experts is ready to bring your vision to life.
              </p>
            </motion.div>

            {/* CTA Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Start a Project Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <FaRocket className="text-primary" />
                  Start a Project
                </h3>
                <p className="text-gray-600 mb-4">
                  Ready to begin? Let's discuss your project and create a roadmap for success.
                </p>
                <Button 
                  variant="primary" 
                  onClick={handleGetStarted}
                  className="w-full justify-center"
                  icon={<FaArrowRight className="ml-2" />}
                >
                  Get Started
                </Button>
              </motion.div>

              {/* Contact Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <FaComments className="text-secondary-dark" />
                  Let's Talk
                </h3>
                <p className="text-gray-600 mb-4">
                  Have questions? Schedule a free consultation with our experts.
                </p>
                <Button 
                  variant="secondary" 
                  onClick={handleGetStarted}
                  className="w-full justify-center"
                  icon={<FaArrowRight className="ml-2" />}
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t border-gray-200 pt-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">150+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          >
            <div>
              <h4 className="font-semibold text-gray-900">Quick Response</h4>
              <p className="text-gray-600 text-sm">Get a response within 24 hours</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Free Consultation</h4>
              <p className="text-gray-600 text-sm">Expert advice at no cost</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Flexible Engagement</h4>
              <p className="text-gray-600 text-sm">Choose the best model for you</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;

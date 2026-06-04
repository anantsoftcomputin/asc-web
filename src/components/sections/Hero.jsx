// src/components/sections/Hero.jsx
"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Container, Button } from '../common';

const Hero = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/contact');
  };

  const handleViewWork = () => {
    router.push('/portfolio'); // Or your work showcase page route
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-100 via-white to-secondary-100 md:min-h-[80vh]">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 -left-4 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          className="absolute -top-4 -right-4 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      <Container className="relative pt-24 pb-12 text-center sm:pt-28 md:pt-32 md:pb-16 lg:pt-40">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mx-auto max-w-4xl"
        >
          <motion.div
            variants={itemVariants}
            className="mx-auto mb-5 inline-flex items-center rounded-full border border-primary-200 bg-white/80 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-700 shadow-sm md:hidden"
          >
            Vadodara software partner
          </motion.div>
          <motion.h1
            className="text-4xl font-bold tracking-tight text-dark sm:text-6xl md:text-7xl"
            variants={itemVariants}
          >
            Custom Software Development
            <span className="block text-primary-600">& IT Services in India</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl"
            variants={itemVariants}
          >
            AnantSoftComputing delivers custom software, CRM systems, ERP platforms,
            mobile apps, and result-driven SEO services — helping businesses across
            India and globally scale with confidence.
          </motion.p>

          <motion.div
            className="mobile-stack-actions mt-8 flex items-center justify-center gap-x-6 md:mt-10"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                size="lg"
                variant="primary"
                onClick={handleGetStarted}
                className="min-h-12 bg-gradient-to-r from-primary-400 to-primary-600 shadow-xl shadow-primary-200/30 hover:from-primary-500 hover:to-primary-700"
              >
                Get Started
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                size="lg"
                variant="outline"
                onClick={handleViewWork}
                className="min-h-12 border-primary-400 text-primary-600 hover:bg-primary-50"
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tech Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mobile-card-grid mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 md:mt-20 md:grid-cols-3 md:gap-8"
        >
          {[
            { title: 'SEO', desc: 'Website Rankings' },
            { title: 'CRM / ERP', desc: 'Scalable Solutions' },
            { title: 'App Development', desc: 'Focused UI / UX' },
          ].map((tech) => (
            <motion.div
              key={tech.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="rounded-xl border border-primary-100 bg-white/85 p-5 text-left shadow-lg shadow-primary-900/5 backdrop-blur-sm md:rounded-2xl md:p-8 md:text-center md:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-primary-600 mb-2">
                {tech.title}
              </h3>
              <p className="text-gray-600">{tech.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;

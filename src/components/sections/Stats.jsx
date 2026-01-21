// src/components/sections/Stats.jsx
"use client";

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Container } from '../common';

const Stats = () => {
  const stats = [
    {
      value: 150,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successfully delivered projects across various industries'
    },
    {
      value: 50,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Trusted by businesses worldwide'
    },
    {
      value: 10,
      suffix: '+',
      label: 'Years Experience',
      description: 'Delivering excellence in software development'
    },
    {
      value: 25,
      suffix: '+',
      label: 'Team Members',
      description: 'Skilled professionals at your service'
    }
  ];

  const CounterAnimation = ({ value, suffix = '' }) => {
    const counterRef = useRef(null);
    const isInView = useInView(counterRef, { once: true });
    const controls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        controls.start({
          opacity: 1,
          transition: { duration: 0.5 }
        });
      }
    }, [isInView, controls]);

    return (
      <motion.div
        ref={counterRef}
        initial={{ opacity: 0 }}
        animate={controls}
        className="text-4xl md:text-5xl font-bold text-gray-900"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {value}
          {suffix}
        </motion.span>
      </motion.div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-white to-secondary/5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
            <span className="block text-primary text-lg font-normal mt-2">
              Measuring Our Success Through Results
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white rounded-2xl shadow-lg transform group-hover:-translate-y-2 transition-all duration-300" />
              <div className="relative p-8 text-center">
                <div className="mb-4">
                  <CounterAnimation value={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Industry Recognition
            </h3>
            <p className="text-gray-600">
              Awarded for excellence in software development and innovation
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Global Reach
            </h3>
            <p className="text-gray-600">
              Serving clients across multiple countries and industries
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Technical Excellence
            </h3>
            <p className="text-gray-600">
              Consistently delivering high-quality solutions on time
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Stats;
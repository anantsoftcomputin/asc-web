// src/components/sections/Testimonials.jsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../common';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { testimonialAPI } from '../../lib/firebase-admin';
import Image from "next/image";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    setLoading(true);
    const result = await testimonialAPI.getAll();
    if (result.success && result.data.length > 0) {
      setTestimonials(result.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-primary-100 via-white to-secondary-100 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
            <span className="block text-primary text-lg font-normal mt-2">
              What Our Clients Say About Us
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about
            their experience working with us.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Decorative background circles (from production HTML) */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
            <div className="w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
            <div className="w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
          </div>

          {/* Testimonials Slider */}
          <div className="relative">
            {loading ? (
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading testimonials...</p>
              </div>
            ) : testimonials.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
                <p className="text-gray-600">No testimonials available</p>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                >
                  <div className="text-primary opacity-80 mb-6">
                    <FaQuoteLeft size={40} />
                  </div>
                  
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
                    {testimonials[currentIndex].quote}
                  </p>

                  <div className="flex items-center gap-4">
                    {testimonials[currentIndex].image ? (
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                        {testimonials[currentIndex].name?.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                      {testimonials[currentIndex].organization && (
                        <p className="text-primary text-sm">
                          {testimonials[currentIndex].organization}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`rounded-full transition-all duration-300 ${
                          currentIndex === index 
                            ? 'w-8 h-2 bg-primary' 
                            : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

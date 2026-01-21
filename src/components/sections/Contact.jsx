// src/components/sections/Contact.jsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Input, Button } from '../common';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram
} from 'react-icons/fa';
import { contactAPI } from '../../lib/firebase-admin';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'default'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const result = await contactAPI.create(formState);
      if (result.success) {
        setSubmitStatus('success');
        setFormState({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          service: 'default'
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Us',
      details: [
        '1C, Satyam Apartment',
        'Aradhana Society, Vishwas Colony,',
        'Alkapuri',
        'Vadodara, Gujarat 390005'
      ]
    },
    {
      icon: <FaPhone />,
      title: 'Call Us',
      details: [
        '+91 9638544455',
      ]
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      details: [
        'support@anantsoftcomputing.com',
      ]
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
      ]
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaGithub />, href: '#', label: 'GitHub' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
            <span className="block text-primary text-lg font-normal mt-2">
              We'd Love to Hear from You
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind? Looking to partner or work with us? 
            We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Phone Number"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                  <Input
                    label="Company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="block w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-primary focus:ring-primary"
                  >
                    <option value="default">Select a Service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="crm">CRM Development</option>
                    <option value="erp">ERP Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="block w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-primary focus:ring-primary"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    Oops! Something went wrong. Please try again.
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  loading={isSubmitting}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white p-2 rounded-xl shadow-lg">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9034454645394!2d72.5008!3d23.0333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzAwLjAiTiA3MsKwMzAnMDMuMCJF!5e0!3m2!1sen!2sin!4v1635835669112!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '0.75rem' }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
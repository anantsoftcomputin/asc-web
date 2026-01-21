'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Input, Button, Card } from '../../components/common';

const API_ENDPOINT = 'https://anantsoftcomputing.com/asc/api/contact/enquiries/';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage('Please fill in your name, email and a short message.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        company: formState.company,
        service: formState.service,
        message: formState.message
      };

      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        let errText = 'Something went wrong. Please try again.';
        try {
          const errJson = await res.json();
          if (errJson.detail) errText = errJson.detail;
          else if (errJson.message) errText = errJson.message;
          else if (typeof errJson === 'string') errText = errJson;
        } catch (_e) {}
        throw new Error(errText);
      }

      setSuccessMessage('Thanks — your message has been sent. We will get back to you shortly.');
      setFormState({ name: '', email: '', phone: '', company: '', service: '', message: '' });

    } catch (err) {
      setErrorMessage(err.message || 'Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 mb-4 mt-4"
            >
              Get in Touch
              <span className="block text-primary text-lg font-normal mt-2">
                We&apos;d Love to Hear from You
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              Have a project in mind? Looking to partner or work with us? We&apos;d love to hear from you!
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Visit Us */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-5 h-5">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Visit Us</h3>
                      <p className="text-gray-600 text-sm">1C, Satyam Apartment</p>
                      <p className="text-gray-600 text-sm">Aradhana Society, Vishwas Colony, Alkapuri</p>
                      <p className="text-gray-600 text-sm">Vadodara, Gujarat 390005</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Call Us */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-5 h-5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Call Us</h3>
                      <p className="text-gray-600 text-sm">+91 9638544455</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Email Us */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Us</h3>
                      <p className="text-gray-600 text-sm">support@anantsoftcomputing.com</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-5 h-5">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Working Hours</h3>
                      <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="p-6 rounded-xl shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.facebook.com/anantsoftcomputing/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook w-5 h-5">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://www.instagram.com/anantsoftcomputing/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-5 h-5">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </a>
                    <a 
                      href="https://www.google.com/maps/place/Anant+Soft+Computing" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                      aria-label="Google Maps"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-5 h-5">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </a>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <Card className="p-8 rounded-xl shadow-lg">
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">
                          Full Name<span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            className="block w-full rounded-lg pl-4 pr-4 py-3 border-2 border-gray-200 focus:border-primary focus:ring-primary focus:ring-2 focus:ring-opacity-20 transition-all duration-200 placeholder-gray-400 bg-gray-50"
                            name="name" 
                            placeholder="John Doe" 
                            value={formState.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">
                          Email Address<span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input 
                            type="email" 
                            className="block w-full rounded-lg pl-4 pr-4 py-3 border-2 border-gray-200 focus:border-primary focus:ring-primary focus:ring-2 focus:ring-opacity-20 transition-all duration-200 placeholder-gray-400 bg-gray-50"
                            name="email" 
                            placeholder="john@example.com" 
                            value={formState.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">
                          Phone Number<span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            className="block w-full rounded-lg pl-4 pr-4 py-3 border-2 border-gray-200 focus:border-primary focus:ring-primary focus:ring-2 focus:ring-opacity-20 transition-all duration-200 placeholder-gray-400 bg-gray-50"
                            name="phone" 
                            placeholder="98765 43210" 
                            value={formState.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">
                          Company
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            className="block w-full rounded-lg pl-4 pr-4 py-3 border-2 border-gray-200 focus:border-primary focus:ring-primary focus:ring-2 focus:ring-opacity-20 transition-all duration-200 placeholder-gray-400 bg-gray-50"
                            name="company" 
                            placeholder="Your Company Ltd." 
                            value={formState.company}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <select 
                      name="service" 
                      className="block w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-primary focus:ring-primary" 
                      value={formState.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a Service</option>
                      <option value="2">CRM Development</option>
                      <option value="5">Custom Development</option>
                      <option value="6">Digital Strategy</option>
                      <option value="4">ERP Systems</option>
                      <option value="3">Mobile Apps</option>
                      <option value="1">SEO Optimization</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea 
                      name="message" 
                      rows="4" 
                      className="block w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-primary focus:ring-primary" 
                      placeholder="Tell us about your project..." 
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {errorMessage && (
                    <div className="text-sm text-red-600 bg-red-50 p-3 rounded">
                      {errorMessage}
                    </div>
                  )}

                  {successMessage && (
                    <div className="text-sm text-green-700 bg-green-50 p-3 rounded">
                      {successMessage}
                    </div>
                  )}

                  <button 
                    className="inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 transform hover:scale-102 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white shadow-lg shadow-primary-200/30 focus:ring-primary-400 px-6 py-3 text-base w-full"
                    type="submit" 
                    disabled={isSubmitting}
                  >
                    <span className="flex items-center">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                  </button>
                </form>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-2 rounded-xl shadow-lg">
              <iframe 
                title="Office Location" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.169202432397!2d73.16878167596472!3d22.309439742562773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5873e594259%3A0xda3dc91c20f4beec!2sAnant%20Soft%20Computing!5e0!3m2!1sen!2sin!4v1731308281495!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                loading="lazy" 
                style={{ border: 0, borderRadius: '0.75rem' }}
              />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 text-center mb-12"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-6">
              {[
                {
                  q: "What information should I prepare before contacting?",
                  a: "Having a clear project overview, timeline, budget range, and specific requirements will help us understand your needs better."
                },
                {
                  q: "How quickly can you start on my project?",
                  a: "Our typical response time is within 24 hours, and we can usually begin project planning within a week of agreement."
                },
                {
                  q: "Do you provide post-development support?",
                  a: "Yes, we offer comprehensive post-development support and maintenance packages tailored to your needs."
                },
                {
                  q: "Can we have face-to-face meetings?",
                  a: "Absolutely! We welcome both in-person meetings at our office and virtual meetings via your preferred platform."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Response Promise Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Response Promise</h2>
            <p className="text-lg text-gray-600 mb-8">
              We understand the value of your time. Our team is committed to providing quick and meaningful responses to all inquiries.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-primary mb-2">24hrs</div>
                <div className="text-gray-600">Initial Response</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-primary mb-2">48hrs</div>
                <div className="text-gray-600">Detailed Proposal</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-primary mb-2">7 Days</div>
                <div className="text-gray-600">Project Kickoff</div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </motion.div>
  );
};

export default ContactPage;
// app/careers/page.js
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { Container, Button, Card, Badge } from "../../components/common";
import { CTA } from "../../components/sections";
import CareerApplyForm from "../../components/sections/CareerApplyForm";
import { jobAPI } from "../../lib/firebase-admin";

import {
  FaBriefcase,
  FaGraduationCap,
  FaUsers,
  FaLaptopCode,
  FaRegClock,
  FaMapMarkerAlt,
  FaDollarSign,
  FaRegBuilding,
  FaRegHandshake,
  FaRegLightbulb,
  FaRegSmile,
  FaSearch,
} from "react-icons/fa";

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobOpenings, setJobOpenings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    setLoading(true);
    const result = await jobAPI.getAll();
    if (result.success) {
      // Only show active jobs on frontend
      const activeJobs = result.data.filter(job => job.status === 'active');
      setJobOpenings(activeJobs);
    }
    setLoading(false);
  };

  const benefits = [
    {
      icon: <FaRegBuilding className="w-6 h-6" />,
      title: "Modern Workplace",
      description: "State-of-the-art office with recreational areas",
    },
    {
      icon: <FaRegHandshake className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options",
    },
    {
      icon: <FaRegLightbulb className="w-6 h-6" />,
      title: "Learning & Growth",
      description: "Regular training sessions and learning opportunities",
    },
    {
      icon: <FaRegSmile className="w-6 h-6" />,
      title: "Health Benefits",
      description: "Comprehensive health insurance for you and family",
    },
  ];

  const faqs = [
    {
      q: "What is your recruitment process?",
      a: "Our recruitment process typically includes initial screening, technical assessment, cultural fit interview, and final discussion. The entire process usually takes 2-3 weeks.",
    },
    {
      q: "Do you offer remote work options?",
      a: "Yes, we offer hybrid and remote work options depending on the role and team requirements. We believe in providing flexibility while maintaining collaborative efficiency.",
    },
    {
      q: "What learning opportunities do you provide?",
      a: "We offer regular training sessions, conference attendance opportunities, online course subscriptions, and dedicated learning time for personal development.",
    },
    {
      q: "How do you support career growth?",
      a: "We have a structured career development program with regular performance reviews, mentorship opportunities, and clear growth paths across technical and management tracks.",
    },
  ];

  const filteredJobs = jobOpenings
    .filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.type?.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Join Our Team of Innovators
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800 mt-2">
                Shape the Future of Technology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 mb-8"
            >
              Work with talented individuals who share your passion for
              innovation and excellence.
            </motion.p>

            {/* Job Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white p-2 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex-grow relative">
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search for jobs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-100 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                    />
                  </div>
                  <Button
                    variant="primary"
                    className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                  >
                    Search Jobs
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {[
                { value: jobOpenings.length + "+", label: "Open Positions" },
                { value: "35+", label: "Countries" },
                { value: "96%", label: "Employee Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Job Listings */}
      <section className="py-12 bg-gray-50">
        <Container>
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading jobs...</p>
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <FaBriefcase className="mx-auto text-5xl text-gray-300 mb-4" />
              <p className="text-gray-600 text-lg">No job openings found at the moment</p>
              <p className="text-gray-500 text-sm mt-2">Check back later for new opportunities</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge
                            variant="primary"
                            className="bg-primary-100 text-primary-600"
                          >
                            {job.type}
                          </Badge>
                          {job.featured && (
                            <Badge
                              variant="accent"
                              className="bg-yellow-100 text-yellow-600"
                            >
                              Featured
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      {job.experience && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaRegClock className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                      )}
                      {job.salary && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaDollarSign className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

                    {Array.isArray(job.requirements) && job.requirements.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {job.requirements.slice(0, 3).map((req, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    )}

                    <Button variant="outline" className="w-full justify-center">
                      Apply Now
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </Container>
      </section>
      
      {/* Career Apply Form */}
      <CareerApplyForm
        jobOptions={jobOpenings.map(job => ({
          id: job.id,
          title: job.title
        }))} 
      />
      {/* Benefits */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Join Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job. Join us and be part of a culture
              that values growth, innovation, and work-life balance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ section added from provided markup */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Everything you need to know about working with us
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="rounded-2xl shadow-lg shadow-gray-200/40 border border-gray-100 bg-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {item.q}
                    </h3>
                    <p className="text-gray-600">{item.a}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Recruitment Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Recruitment Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A transparent and efficient process designed to find the best
              talent
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-primary-100 transform -translate-x-1/2" />

              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative mb-12 ml-[50%] pl-8"
              >
                <div className="absolute top-0 left-0 w-8 h-8 bg-white border-4 border-primary-500 rounded-full transform -translate-y-1/2 -translate-x-1/2">
                  <span className="absolute inset-0 flex items-center justify-center text-lg">
                    📝
                  </span>
                </div>

                <div className="rounded-2xl shadow-lg shadow-gray-200/40 border border-gray-100 bg-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6">
                  <span className="inline-flex items-center justify-center font-medium rounded-full bg-primary/10 text-primary px-2.5 py-1 text-sm mb-2">
                    1-2 days
                  </span>
                  <h3 className="text-xl font-semibold mb-2">
                    Application Review
                  </h3>
                  <p className="text-gray-600">
                    Initial screening of your application and resume
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative mb-12 mr-[50%] pr-8 text-right"
              >
                <div className="absolute top-0 right-0 w-8 h-8 bg-white border-4 border-primary-500 rounded-full transform -translate-y-1/2 translate-x-1/2">
                  <span className="absolute inset-0 flex items-center justify-center text-lg">
                    💻
                  </span>
                </div>

                <div className="rounded-2xl shadow-lg shadow-gray-200/40 border border-gray-100 bg-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-end">
                  <span className="inline-flex items-center justify-center font-medium rounded-full bg-primary/10 text-primary px-2.5 py-1 text-sm mb-2">
                    3-5 days
                  </span>
                  <h3 className="text-xl font-semibold mb-2">
                    Technical Assessment
                  </h3>
                  <p className="text-gray-600">
                    Skills evaluation through practical assignments
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative mb-12 ml-[50%] pl-8"
              >
                <div className="absolute top-0 left-0 w-8 h-8 bg-white border-4 border-primary-500 rounded-full transform -translate-y-1/2 -translate-x-1/2">
                  <span className="absolute inset-0 flex items-center justify-center text-lg">
                    👥
                  </span>
                </div>

                <div className="rounded-2xl shadow-lg shadow-gray-200/40 border border-gray-100 bg-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6">
                  <span className="inline-flex items-center justify-center font-medium rounded-full bg-primary/10 text-primary px-2.5 py-1 text-sm mb-2">
                    1 day
                  </span>
                  <h3 className="text-xl font-semibold mb-2">Team Interview</h3>
                  <p className="text-gray-600">
                    Discussion with potential team members
                  </p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative mb-12 mr-[50%] pr-8 text-right"
              >
                <div className="absolute top-0 right-0 w-8 h-8 bg-white border-4 border-primary-500 rounded-full transform -translate-y-1/2 translate-x-1/2">
                  <span className="absolute inset-0 flex items-center justify-center text-lg">
                    🎉
                  </span>
                </div>

                <div className="rounded-2xl shadow-lg shadow-gray-200/40 border border-gray-100 bg-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-end">
                  <span className="inline-flex items-center justify-center font-medium rounded-full bg-primary/10 text-primary px-2.5 py-1 text-sm mb-2">
                    1-2 days
                  </span>
                  <h3 className="text-xl font-semibold mb-2">
                    Final Discussion
                  </h3>
                  <p className="text-gray-600">
                    Offer discussion and documentation
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </motion.div>
  );
}

'use client' 

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaBullseye,
  FaHandshake
} from 'react-icons/fa'

import { Container, Badge, Card } from '../../components/common'
import { Stats, CTA } from '../../components/sections'
import { teamAPI } from '../../lib/firebase-admin'
import Image from 'next/image'

export default function AboutPage() {
  const [teamMembers, setTeamMembers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadTeam()
  }, [])

  const loadTeam = async () => {
    setLoading(true)
    const result = await teamAPI.getAll()
    if (result.success) {
      setTeamMembers(result.data)
    }
    setLoading(false)
  }
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  }

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '250+', label: 'Projects Delivered' },
    { value: '95%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Team Members' },
  ]

  const values = [
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: 'Client-Centric',
      description:
        'Every decision we make is guided by our commitment to client success.',
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description: 'We continuously explore and implement cutting-edge technologies.',
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in every project we undertake.',
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: 'Integrity',
      description: 'Trust and transparency are the foundations of our relationships.',
    },
  ]



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-primary-100 via-white to-secondary-100">
        {/* Animated background blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute -top-4 -right-4 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        <Container className="relative pt-32 pb-16 lg:pt-40">
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
                About Our Company
              </Badge>

              <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                Crafting Digital Excellence
                <span className="block text-2xl mt-2 font-normal text-gray-600">
                  Since 2013
                </span>
              </h1>

              <motion.p {...fadeIn} className="text-lg text-gray-600 mb-8">
                We are a passionate team of innovators, developers, and digital
                craftsmen dedicated to transforming businesses through cutting-edge
                technology solutions. Our decade-long journey has been marked by
                continuous innovation and unwavering commitment to excellence.
              </motion.p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 * index, type: 'spring' }}
                      className="text-2xl font-bold text-primary-600"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl transform rotate-3" />
                <motion.div
                  className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-primary-100"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-6">
                    {[
                      { label: 'Innovation Index', value: 95, color: 'bg-primary-500' },
                      { label: 'Client Success Rate', value: 98, color: 'bg-secondary-500' },
                      { label: 'Team Growth', value: 85, color: 'bg-accent-500' },
                    ].map((metric) => (
                      <div key={metric.label}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">{metric.label}</span>
                          <span className="font-semibold">{metric.value}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
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
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeIn} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform" />
              <Card className="p-8 backdrop-blur-sm relative hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                    <FaLightbulb className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading technology partner for businesses worldwide,
                  enabling their digital transformation through innovative and
                  sustainable solutions that drive real value and lasting success.
                </p>
                <motion.div 
                  className="mt-6 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </Card>
            </motion.div>

            <motion.div {...fadeIn} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/10 to-secondary-600/10 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform" />
              <Card className="p-8 backdrop-blur-sm relative hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-600 mr-4">
                    <FaBullseye className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To deliver exceptional software solutions that empower businesses to
                  thrive in the digital age while maintaining the highest standards of
                  quality, innovation, and customer satisfaction.
                </p>
                <motion.div 
                  className="mt-6 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div {...fadeIn} className="text-center mb-16">
            <Badge
              variant="primary"
              className="mb-4 bg-primary-100 text-primary-600 px-4 py-2"
            >
              Our Core Values
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our values shape every decision we make and every solution we deliver,
              ensuring consistent excellence in everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow group">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div {...fadeIn} className="text-center mb-16">
            <Badge
              variant="primary"
              className="mb-4 bg-primary-100 text-primary-600 px-4 py-2"
            >
              Our Team
            </Badge>
            {/* <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet the Leaders
            </h2> */}
            <p className="text-gray-600 max-w-2xl mx-auto">
              Driven by passion and expertise, our leadership team brings together
              decades of industry experience to guide our vision forward.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-full text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading team members...</p>
              </div>
            ) : teamMembers.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600">No team members found</p>
              </div>
            ) : (
              teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  {...fadeIn}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-64">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                          <span className="text-white text-4xl font-bold">{member.name?.charAt(0)}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-primary-600 mb-2">{member.role}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
        </Container>
      </section>

      <Stats />
      <CTA />
    </motion.div>
  )
}

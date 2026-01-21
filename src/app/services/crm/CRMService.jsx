'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Container, Button, Card, Badge } from '../../../components/common';
import { CTA } from '../../../components/sections';
import { 
  FaUsers, 
  FaChartBar, 
  FaCogs, 
  FaCloud, 
  FaMobile,
  FaLock,
  FaRocket,
  FaRegChartBar,
  FaChartLine,
  FaClock, 
  FaCheckCircle,
  
} from 'react-icons/fa';
import Image from "next/image";

const CRMService = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  const crmModules = [
    {
      icon: <FaUsers />,
      title: "Contact Management",
      description: "Centralized customer data management with detailed profiles and interaction history"
    },
    {
      icon: <FaChartBar />,
      title: "Sales Pipeline",
      description: "Visual deal tracking and sales forecasting with automated workflows"
    },
    {
      icon: <FaCogs />,
      title: "Automation",
      description: "Streamlined business processes with smart automation triggers"
    },
    {
      icon: <FaRegChartBar />,
      title: "Analytics & Reports",
      description: "In-depth insights with customizable dashboards and reports"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Integration",
      description: "Seamless integration with third-party tools and services"
    },
    {
      icon: <FaMobile />,
      title: "Mobile Access",
      description: "Access your CRM data on-the-go with mobile applications"
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      value: "45%",
      description: "Reduction in administrative tasks"
    },
    {
      title: "Better Lead Conversion",
      value: "60%",
      description: "Improvement in lead conversion rates"
    },
    {
      title: "Customer Satisfaction",
      value: "85%",
      description: "Increase in customer satisfaction scores"
    },
    {
      title: "Revenue Growth",
      value: "35%",
      description: "Average increase in revenue"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          </div>
        </motion.div>


        <Container className="relative z-10">
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
                CRM Development
              </Badge>
              <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                Custom CRM Solutions for Your Business Growth
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Transform your customer relationships with our tailored CRM solutions. 
                Streamline operations, boost productivity, and drive growth with powerful automation.
              </p>
              <div className="flex gap-4">
                <Button 
                  variant="primary"
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                >
                  Schedule Demo
                </Button>
                <Button variant="outline">
                  View Features
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex items-center gap-8">
                <div className="flex -space-x-4">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center"
                    >
                      <Image 
                        src={`/api/placeholder/48/48`} 
                        alt={`Client ${i + 1}`}
                        className="w-full h-full rounded-full"
                        fill
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Trusted by 500+ Businesses</div>
                  <div className="text-sm text-gray-600">Across multiple industries</div>
                </div>
              </div>
            </motion.div>

            <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative"
>
  {/* CRM Dashboard Preview */}
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl transform rotate-3" />
    <Card className="p-6 backdrop-blur-sm">
      {/* Dashboard UI */}
      <div className="relative rounded-xl overflow-hidden bg-white shadow-lg">
        {/* Dashboard Header */}
        <div className="bg-primary-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FaChartBar className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Sales Dashboard</h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-2 py-1 bg-white/20 rounded-full text-xs">Live</div>
              <span className="text-sm">Last updated: Just now</span>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4">
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: 'Total Leads', value: '2,547', icon: <FaUsers /> },
              { label: 'Pipeline Value', value: '$1.2M', icon: <FaChartLine /> },
              { label: 'Conversion Rate', value: '24.8%', icon: <FaRegChartBar /> }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-gray-600">{stat.label}</span>
                  <span className="text-primary-500">{stat.icon}</span>
                </div>
                <div className="text-lg font-bold text-gray-900">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Chart Area */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="h-32 flex items-end justify-between gap-2">
              {[40, 70, 45, 65, 90, 75, 60].map((height, index) => (
                <div
                  key={index}
                  className="w-full bg-primary-200 rounded-t transition-all duration-500"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-gray-500">Mon</span>
              <span className="text-xs text-gray-500">Sun</span>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="space-y-3">
            {[
              { title: 'New Lead', desc: 'Tech Solutions Ltd.', time: '2h ago' },
              { title: 'Deal Closed', desc: 'Project Alpha - $45,000', time: '4h ago' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                <div>
                  <div className="font-medium text-sm">{activity.title}</div>
                  <div className="text-xs text-gray-600">{activity.desc}</div>
                </div>
                <div className="text-xs text-gray-500">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <div className="text-sm text-gray-600">Monthly Growth</div>
          <div className="text-2xl font-bold text-primary-600">+28%</div>
        </div>
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <div className="text-sm text-gray-600">Active Users</div>
          <div className="text-2xl font-bold text-primary-600">2.5k+</div>
        </div>
      </div>
    </Card>
  </div>
</motion.div>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Powerful CRM Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our CRM solutions come packed with features designed to streamline your 
              business operations and enhance customer relationships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crmModules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full group hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                  <p className="text-gray-600">{module.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Transform Your Business with Our CRM
              </h2>
              <p className="text-gray-600 mb-8">
                Experience significant improvements across your business operations with 
                our custom CRM solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg"
                  >
                    <div className="text-3xl font-bold text-primary-600 mb-2">
                      {benefit.value}
                    </div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {benefit.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {benefit.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="relative"
>
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl transform -rotate-3" />
    <Card className="p-6">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-center bg-primary-50 p-4 rounded-lg">
          <div>
            <h3 className="text-xl font-semibold text-primary-600">ROI Dashboard</h3>
            <p className="text-sm text-gray-600">Real-time benefits tracking</p>
          </div>
          <Badge variant="primary" className="bg-primary-100 text-primary-600">
            Live Metrics
          </Badge>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              title: "Productivity Increase",
              value: "45%",
              icon: <FaChartLine className="text-green-500 w-5 h-5" />,
              change: "+12%",
              color: "bg-green-50"
            },
            {
              title: "Customer Satisfaction",
              value: "92%",
              icon: <FaUsers className="text-blue-500 w-5 h-5" />,
              change: "+8%",
              color: "bg-blue-50"
            },
            {
              title: "Task Automation",
              value: "75%",
              icon: <FaCogs className="text-purple-500 w-5 h-5" />,
              change: "+15%",
              color: "bg-purple-50"
            },
            {
              title: "Time Saved",
              value: "12hrs",
              icon: <FaClock className="text-orange-500 w-5 h-5" />,
              change: "+4hrs",
              color: "bg-orange-50"
            }
          ].map((metric, index) => (
            <div
              key={index}
              className={`${metric.color} rounded-lg p-4 border border-white/50 backdrop-blur-sm`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-gray-600">{metric.title}</span>
                {metric.icon}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                <span className="text-sm text-green-600">{metric.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Growth Chart */}
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-700">Growth Trajectory</h4>
            <div className="flex gap-2">
              {['1M', '3M', '6M', '1Y'].map((period) => (
                <button
                  key={period}
                  className={`px-3 py-1 rounded-md text-sm ${
                    period === '3M' 
                      ? 'bg-primary-100 text-primary-600' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          <div className="h-40 relative">
            <div className="absolute inset-0 flex items-end justify-between">
              {[40, 55, 45, 65, 75, 65, 80, 85, 75, 90, 85, 95].map((height, index) => (
                <div
                  key={index}
                  style={{ height: `${height}%` }}
                  className="w-full bg-primary-100 rounded-t-lg mx-0.5 relative group"
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    {height}%
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Jan</span>
            <span>Dec</span>
          </div>
        </div>

        {/* Key Benefits List */}
        <div className="grid grid-cols-2 gap-4">
          {[
            "Improved Customer Retention",
            "Enhanced Data Analytics",
            "Streamlined Workflows",
            "Better Team Collaboration"
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg"
            >
              <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                <FaCheckCircle className="text-primary-600 w-4 h-4" />
              </div>
              <span className="text-sm text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Quick Stats Footer */}
        <div className="flex justify-between items-center border-t border-gray-100 pt-4">
          <div className="flex gap-6">
            <div>
              <div className="text-sm text-gray-600">Total Users</div>
              <div className="text-xl font-bold text-gray-900">2,547</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Active Projects</div>
              <div className="text-xl font-bold text-gray-900">168</div>
            </div>
          </div>
          <Button variant="outline" size="sm">
            View Full Report
          </Button>
        </div>
      </div>
    </Card>
  </div>
</motion.div>
          </div>
        </Container>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Implementation Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our structured approach ensures a smooth transition to your new CRM system
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description: "We analyze your business needs and processes"
              },
              {
                step: "02",
                title: "Custom Development",
                description: "Building your CRM solution with customized features"
              },
              {
                step: "03",
                title: "Data Migration",
                description: "Seamless transfer of your existing data"
              },
              {
                step: "04",
                title: "Training & Support",
                description: "Comprehensive training and ongoing support"
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative mb-8 last:mb-0"
              >
                <Card className="p-6 ml-12">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    {phase.step}
                  </div>
                  {index < 3 && (
                    <div className="absolute left-4 top-full w-0.5 h-8 bg-primary-200" />
                  )}
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </motion.div>
  );
};

export default CRMService;
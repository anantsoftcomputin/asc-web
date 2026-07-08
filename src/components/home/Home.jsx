'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Hero,
  Services,
  Features,
  Portfolio,
  Testimonials,
  Stats,
  CTA,
  Contact
} from '../sections'  

import ProjectsGrid from '../sections/ProjectsGrid'
import MobileHomeExperience from './MobileHomeExperience'
import ServiceClusters from '../sections/ServiceClusters'
import FreeAudit from '../sections/FreeAudit'
import PricingStarts from '../sections/PricingStarts'

export default function Home() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])    



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MobileHomeExperience />
      <div className="hidden md:block">
        <Hero />
        <FreeAudit />
        <Services />
        <ServiceClusters />
        <Features />
        {/* <Portfolio /> */}
        <ProjectsGrid />
        <PricingStarts />
        <Stats />
        <Testimonials />
        <CTA />
        <Contact />
      </div>
    </motion.div>
  )
}

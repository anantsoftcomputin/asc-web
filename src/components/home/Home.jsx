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

import HorizontalTagsMarquee from '../sections/HorizontalTagsMarquee'
import ProjectsGrid from '../sections/ProjectsGrid'
import MobileHomeExperience from './MobileHomeExperience'

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
        <HorizontalTagsMarquee />
        <Services />
        <Features />
        {/* <Portfolio /> */}
        <ProjectsGrid />
        <Stats />
        <Testimonials />
        <CTA />
        <Contact />
      </div>
    </motion.div>
  )
}

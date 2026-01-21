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
    </motion.div>
  )
}

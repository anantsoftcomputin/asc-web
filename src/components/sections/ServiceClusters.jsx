"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container, Card } from "../common";

const clusters = [
  {
    title: "Healthcare Solutions",
    description: "Clinic software, hospital websites, appointment booking, patient management, prescriptions, and healthcare SEO.",
    links: [
      ["Clinic Software", "/solutions/clinic-management-software"],
      ["Pet Clinic Software", "/solutions/pet-clinic-management-software"],
      ["Hospital Website", "/solutions/hospital-website-appointment-booking-system"],
    ],
  },
  {
    title: "Education Solutions",
    description: "Education CRM, coaching institute workflows, branch reporting, student portals, LMS, attendance, and alumni systems.",
    links: [
      ["Education CRM", "/solutions/education-crm-for-coaching-visa-study-abroad"],
      ["CRM in Vadodara", "/solutions/crm-software-development-vadodara"],
    ],
  },
  {
    title: "Business Growth Solutions",
    description: "CRM, ERP, SEO, AI chatbots, payment gateways, dashboards, automation, and customer follow-up systems.",
    links: [
      ["SEO in Vadodara", "/solutions/seo-services-vadodara"],
      ["AI Chatbot", "/solutions/ai-chatbot-development-for-business"],
      ["Custom ERP", "/solutions/custom-erp-for-small-businesses"],
    ],
  },
  {
    title: "NGO & Community Solutions",
    description: "Donation systems, volunteer management, impact pages, event management, franchise portals, and resource platforms.",
    links: [
      ["NGO Software", "/solutions/ngo-management-software"],
      ["Franchise Portal", "/solutions/franchise-portal-development"],
    ],
  },
];

export default function ServiceClusters() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Industry-Specific Software That Solves Real Business Problems
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We build websites, CRMs, apps, SEO systems, and AI automation that help businesses get more leads, manage customers better, and grow faster.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {clusters.map((cluster, index) => (
            <motion.div
              key={cluster.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="h-full border border-gray-100 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">{cluster.title}</h3>
                <p className="mt-3 text-gray-600">{cluster.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {cluster.links.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="rounded-full border border-primary-200 px-4 py-2 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-50"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

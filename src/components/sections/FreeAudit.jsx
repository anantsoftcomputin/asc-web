"use client";

import { motion } from "framer-motion";
import { Container, Button } from "../common";
import { whatsappAuditUrl } from "../../lib/growth-pages";

export default function FreeAudit() {
  return (
    <section className="bg-gray-950 py-20 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-300">
              Free growth audit
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Get a Free 7-Point Digital Growth Audit
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-gray-300">
              We will review your website, CRM, SEO, automation, Google visibility, lead flow, and customer follow-up system free.
            </p>
            <a href={whatsappAuditUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block">
              <Button variant="primary" size="lg">
                Get My Free Audit on WhatsApp
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {["Website", "CRM", "SEO", "Automation", "Google Visibility", "Lead Flow", "Customer Follow-Up"].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-gray-100">
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

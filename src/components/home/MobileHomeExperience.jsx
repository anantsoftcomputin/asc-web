"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Database,
  MessageCircle,
  Phone,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import ASCLogo from "../common/ASCLogo";
import { businessStats } from "../../lib/site-links";

const services = [
  {
    title: "CRM & ERP",
    desc: "Lead flow, teams, billing, reports, and approvals in one system.",
    href: "/services/crm",
    icon: Database,
    tone: "bg-[#eef4ff] text-primary-700",
  },
  {
    title: "Mobile Apps",
    desc: "Fast PWA, Android, iOS, and internal business apps.",
    href: "/services/mobile",
    icon: Smartphone,
    tone: "bg-[#effaf6] text-secondary-800",
  },
  {
    title: "SEO Growth",
    desc: "Technical SEO, content, local visibility, and conversion tracking.",
    href: "/services/seo",
    icon: Search,
    tone: "bg-[#fff3e8] text-[#9a5b20]",
  },
  {
    title: "Custom Software",
    desc: "Dashboards, portals, automation, and industry-specific platforms.",
    href: "/services/custom",
    icon: Code2,
    tone: "bg-[#f8eef8] text-accent-800",
  },
];

const proof = [
  { value: businessStats.projects, label: "projects" },
  { value: businessStats.years, label: "years" },
  { value: "99.9%", label: "uptime focus" },
];

const work = [
  {
    title: "OEC CRM",
    tag: "Education CRM",
    result: "70% productivity lift",
  },
  {
    title: "Pawppy.in",
    tag: "Petcare marketplace",
    result: "5,000+ owners onboarded",
  },
  {
    title: "SMHRI Hospital",
    tag: "Healthcare website",
    result: "3x online bookings",
  },
];

const steps = [
  "Discovery sprint",
  "Clickable mobile-first prototype",
  "Build, launch, and improve",
];

const styles = {
  home: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #f6f9ff 0%, #ffffff 36%, #f2faf7 100%)",
    color: "#111827",
  },
  hero: {
    minHeight: "calc(100svh - 4.75rem)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "1rem",
    padding: "1rem 1rem 1.5rem",
  },
  topline: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "999px",
    border: "1px solid rgba(128, 155, 206, 0.28)",
    background: "rgba(255, 255, 255, 0.76)",
    padding: "0.75rem 0.875rem",
    color: "#3a5483",
    fontSize: "0.75rem",
    fontWeight: 800,
    boxShadow: "0 10px 26px rgba(15, 23, 42, 0.05)",
  },
  panel: {
    borderRadius: "1.75rem",
    border: "1px solid rgba(128, 155, 206, 0.2)",
    background: "linear-gradient(145deg, rgba(255, 255, 255, 0.96), rgba(240, 244, 255, 0.88))",
    padding: "1.25rem",
    boxShadow: "0 24px 60px rgba(42, 67, 112, 0.16)",
  },
  pill: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "1.25rem",
    borderRadius: "999px",
    background: "#fff",
    padding: "0.5rem 0.75rem",
    color: "#3a5483",
    fontSize: "0.75rem",
    fontWeight: 800,
    boxShadow: "0 8px 20px rgba(15, 23, 42, 0.06)",
  },
  h1: {
    color: "#172033",
    fontSize: "clamp(2.35rem, 12vw, 3.45rem)",
    fontWeight: 900,
    lineHeight: 0.98,
    letterSpacing: 0,
  },
  lead: {
    marginTop: "1rem",
    color: "#475569",
    fontSize: "1rem",
    lineHeight: 1.65,
  },
  actionGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.75rem",
    marginTop: "1.75rem",
  },
  primaryAction: {
    display: "inline-flex",
    minHeight: "3.25rem",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: "1rem",
    background: "#1a325d",
    color: "#fff",
    fontSize: "0.95rem",
    fontWeight: 800,
    boxShadow: "0 16px 34px rgba(26, 50, 93, 0.26)",
  },
  secondaryAction: {
    display: "inline-flex",
    minHeight: "3.25rem",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: "1rem",
    border: "1px solid rgba(128, 155, 206, 0.38)",
    background: "#fff",
    color: "#1a325d",
    fontSize: "0.95rem",
    fontWeight: 800,
  },
  proof: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "0.625rem",
  },
  proofItem: {
    borderRadius: "1.125rem",
    background: "rgba(255, 255, 255, 0.82)",
    padding: "0.875rem 0.6rem",
    textAlign: "center",
    boxShadow: "0 10px 26px rgba(15, 23, 42, 0.06)",
  },
  section: {
    padding: "1.25rem 1rem",
  },
  sectionKicker: {
    display: "block",
    color: "#4a6596",
    fontSize: "0.72rem",
    fontWeight: 900,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },
  sectionTitle: {
    marginTop: "0.25rem",
    marginBottom: "0.875rem",
    color: "#172033",
    fontSize: "1.35rem",
    fontWeight: 900,
    lineHeight: 1.1,
  },
  serviceRow: {
    display: "flex",
    minHeight: "5.5rem",
    alignItems: "center",
    gap: "0.875rem",
    borderRadius: "1.25rem",
    border: "1px solid rgba(226, 232, 240, 0.92)",
    background: "rgba(255, 255, 255, 0.88)",
    padding: "0.875rem",
    boxShadow: "0 14px 34px rgba(15, 23, 42, 0.07)",
  },
  serviceIcon: {
    display: "inline-flex",
    width: "3rem",
    height: "3rem",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "1rem",
  },
  workCard: {
    display: "flex",
    minHeight: "6rem",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "1rem",
    borderRadius: "1.35rem",
    padding: "1rem",
    color: "#fff",
    boxShadow: "0 18px 40px rgba(26, 50, 93, 0.2)",
  },
  buildCard: {
    borderRadius: "1.5rem",
    border: "1px solid rgba(184, 224, 210, 0.58)",
    background: "#fff",
    padding: "1.1rem",
    boxShadow: "0 18px 42px rgba(15, 23, 42, 0.1)",
  },
  contactCard: {
    borderRadius: "1.5rem",
    background: "linear-gradient(145deg, #1a325d, #3a5483)",
    color: "#fff",
    padding: "1.1rem",
    boxShadow: "0 18px 42px rgba(15, 23, 42, 0.1)",
  },
};

const iconTones = [
  { background: "#eef4ff", color: "#3a5483" },
  { background: "#effaf6", color: "#466e60" },
  { background: "#fff3e8", color: "#9a5b20" },
  { background: "#f8eef8", color: "#785263" },
];

export default function MobileHomeExperience() {
  return (
    <div className="mobile-home md:hidden" style={styles.home}>
      <section className="mobile-hero-screen" style={styles.hero}>
        <div className="mobile-hero-topline" style={styles.topline}>
          <span>Vadodara • India • Global delivery</span>
          <Sparkles className="h-4 w-4" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mobile-hero-panel"
          style={styles.panel}
        >
          <div style={{ marginBottom: "1rem" }}>
            <ASCLogo markClassName="!w-36 !h-14" />
          </div>
          <div style={styles.pill}>
            <Rocket className="h-4 w-4" />
            Software, CRM, apps, SEO
          </div>

          <h1 style={styles.h1}>Build the business app your team actually uses.</h1>
          <p style={styles.lead}>
            We design and develop CRMs, mobile apps, portals, and SEO systems
            with a polished PWA experience from day one.
          </p>

          <div style={styles.actionGrid}>
            <Link href="/contact" className="mobile-primary-action" style={styles.primaryAction}>
              Start project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:9638544455" className="mobile-secondary-action" style={styles.secondaryAction}>
              <Phone className="h-4 w-4" />
              Call
            </a>
          </div>
        </motion.div>

        <div className="mobile-proof-strip" style={styles.proof}>
          {proof.map((item) => (
            <div key={item.label} style={styles.proofItem}>
              <strong style={{ display: "block", color: "#1a325d", fontSize: "1.05rem" }}>{item.value}</strong>
              <span style={{ display: "block", marginTop: "0.2rem", color: "#64748b", fontSize: "0.7rem", fontWeight: 700 }}>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mobile-section" style={styles.section}>
        <div>
          <span style={styles.sectionKicker}>Services</span>
          <h2 style={styles.sectionTitle}>Choose what you want to build</h2>
        </div>
        <div className="space-y-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link key={service.title} href={service.href} className="mobile-service-row" style={styles.serviceRow}>
                <span className={`mobile-service-icon ${service.tone}`} style={{ ...styles.serviceIcon, ...iconTones[index] }}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <strong style={{ display: "block", color: "#172033", fontSize: "0.98rem" }}>{service.title}</strong>
                  <small style={{ display: "block", marginTop: "0.2rem", color: "#64748b", fontSize: "0.78rem", lineHeight: 1.35 }}>{service.desc}</small>
                </span>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mobile-section" style={styles.section}>
        <div>
          <span style={styles.sectionKicker}>Featured work</span>
          <h2 style={styles.sectionTitle}>Results you can scan fast</h2>
        </div>
        <div className="mobile-work-stack">
          {work.map((item, index) => (
            <Link
              key={item.title}
              href="/portfolio"
              className="mobile-work-card"
              style={{
                ...styles.workCard,
                background: [
                  "linear-gradient(135deg, #172033, #2a4370)",
                  "linear-gradient(135deg, #466e60, #7fa799)",
                  "linear-gradient(135deg, #785263, #c49eaf)",
                ][index],
              }}
            >
              <div>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, opacity: 0.78 }}>{item.tag}</span>
                <h3 style={{ marginTop: "0.15rem", fontSize: "1.25rem", fontWeight: 900 }}>{item.title}</h3>
              </div>
              <p style={{ maxWidth: "8rem", textAlign: "right", color: "rgba(255,255,255,0.86)", fontSize: "0.78rem", fontWeight: 800, lineHeight: 1.25 }}>{item.result}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mobile-section" style={styles.section}>
        <div className="mobile-build-card" style={styles.buildCard}>
          <div className="flex items-center justify-between">
            <div>
              <span className="mobile-eyebrow" style={styles.sectionKicker}>How we work</span>
              <h2 style={{ ...styles.sectionTitle, marginBottom: 0 }}>From idea to launch without confusion.</h2>
            </div>
            <ShieldCheck className="h-9 w-9 text-secondary-700" />
          </div>
          <div className="mt-5 space-y-3">
            {steps.map((step, index) => (
              <div key={step} className="mobile-step-row">
                <span>{index + 1}</span>
                <p>{step}</p>
                <CheckCircle2 className="h-5 w-5 text-secondary-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-section pb-6" style={{ ...styles.section, paddingBottom: "1.5rem" }}>
        <div className="mobile-contact-card" style={styles.contactCard}>
          <BarChart3 className="h-8 w-8 text-white" />
          <h2 style={{ marginTop: "0.75rem", color: "#fff", fontSize: "1.35rem", fontWeight: 900, lineHeight: 1.1 }}>Need a CRM, app, or SEO plan?</h2>
          <p style={{ marginTop: "0.5rem", color: "rgba(255,255,255,0.78)", fontSize: "0.92rem", lineHeight: 1.5 }}>Send us your requirement and we’ll map the fastest practical path.</p>
          <div style={styles.actionGrid}>
            <Link href="/contact" className="mobile-contact-action" style={{ ...styles.secondaryAction, border: 0 }}>
              Enquire
            </Link>
            <a href="https://wa.me/919638544455" className="mobile-contact-action mobile-contact-action--ghost" style={{ ...styles.secondaryAction, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.24)", color: "#fff" }}>
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

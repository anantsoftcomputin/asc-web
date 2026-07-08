"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  Lightbulb,
  MessageCircle,
  Phone,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { businessStats } from "../../lib/site-links";

/* ─── data ──────────────────────────────────────────────────────────────── */

const stats = [
  { value: businessStats.satisfaction, label: "Client satisfaction" },
  { value: businessStats.projects, label: "Projects delivered" },
  { value: businessStats.years, label: "Years experience" },
  { value: businessStats.team, label: "Expert team members" },
];

const services = [
  {
    icon: Database,
    title: "CRM Development",
    desc: "Leads, customers, follow-ups, dashboards, payments, and team activity in one system.",
    href: "/services/crm",
    tone: { bg: "#eef4ff", color: "#3a5483" },
    tag: "Sales ops",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Fast PWA, Android, iOS, and internal business apps with clean UX.",
    href: "/services/mobile",
    tone: { bg: "#effaf6", color: "#466e60" },
    tag: "PWA ready",
  },
  {
    icon: Search,
    title: "SEO Growth",
    desc: "Technical SEO, content structure, local search, and conversion tracking.",
    href: "/services/seo",
    tone: { bg: "#fff3e8", color: "#9a5b20" },
    tag: "Organic traffic",
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "ERP modules, portals, automation, and industry-specific platforms.",
    href: "/services/custom",
    tone: { bg: "#f8eef8", color: "#785263" },
    tag: "Purpose-built",
  },
  {
    icon: BarChart3,
    title: "Digital Strategy",
    desc: "Market research, UX strategy, growth experiments, and analytics roadmaps.",
    href: "/contact",
    tone: { bg: "#f0fdf4", color: "#166534" },
    tag: "Growth",
  },
  {
    icon: Settings,
    title: "ERP Systems",
    desc: "Finance, inventory, procurement, HR, and manufacturing in one platform.",
    href: "/contact",
    tone: { bg: "#fdf4ff", color: "#7e22ce" },
    tag: "Enterprise",
  },
];

const whyUs = [
  { icon: Lightbulb, title: "Innovative Solutions", desc: "Cutting-edge technology with creative problem-solving tailored to your domain." },
  { icon: Settings, title: "Proven Process", desc: "Discovery → prototype → build → launch. No surprises, no scope creep." },
  { icon: Users, title: "Expert Team", desc: "Highly skilled developers, designers, and strategists with real domain depth." },
  { icon: ShieldCheck, title: "Client-Focused", desc: "We stay in close communication from kick-off to go-live and beyond." },
];

const industries = [
  "Healthcare", "Education", "E-commerce", "Finance",
  "Real Estate", "Manufacturing", "Non-Profit", "Retail",
];

const process = [
  { step: "01", emoji: "🎯", title: "Discovery", desc: "We map your workflow, goals, and constraints before writing any code." },
  { step: "02", emoji: "📐", title: "Planning", desc: "Architecture, timeline, and a clickable mobile-first prototype." },
  { step: "03", emoji: "💻", title: "Development", desc: "Agile sprints with regular demos, reviews, and deployments." },
  { step: "04", emoji: "🚀", title: "Delivery", desc: "Testing, launch, team training, and ongoing support." },
];

const techStack = [
  "React / Next.js", "Node.js", "Python", "Flutter",
  "Firebase", "PostgreSQL", "MongoDB", "AWS",
  "Docker", "GraphQL", "Django", "Redux",
];

const faqs = [
  {
    q: "What is your typical project timeline?",
    a: "Small projects take 4–8 weeks; larger platforms take 3–6 months. We share a detailed timeline during the discovery session.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes — maintenance and support packages cover updates, bug fixes, and technical help after launch.",
  },
  {
    q: "What is your development process?",
    a: "Agile with regular check-ins. You see progress at every sprint, and can give feedback before the next phase starts.",
  },
  {
    q: "How do you ensure project quality?",
    a: "Code reviews, automated tests, staged deployments, and QA sign-off on every release.",
  },
];

/* ─── styles ─────────────────────────────────────────────────────────────── */

const s = {
  page: {
    background: "linear-gradient(180deg,#f6f9ff 0%,#ffffff 40%,#f2faf7 100%)",
    color: "#111827",
  },
  section: { padding: "1.25rem 1rem" },
  kicker: {
    display: "block",
    color: "#4a6596",
    fontSize: "0.72rem",
    fontWeight: 900,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginBottom: "0.25rem",
  },
  sectionTitle: {
    color: "#172033",
    fontSize: "1.35rem",
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: "1rem",
  },
  heroPill: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "1.1rem",
    borderRadius: "999px",
    background: "#fff",
    padding: "0.45rem 0.75rem",
    color: "#3a5483",
    fontSize: "0.72rem",
    fontWeight: 800,
    boxShadow: "0 8px 20px rgba(15,23,42,0.06)",
  },
  heroPanel: {
    borderRadius: "1.75rem",
    border: "1px solid rgba(128,155,206,0.2)",
    background: "linear-gradient(145deg,rgba(255,255,255,0.96),rgba(240,244,255,0.88))",
    padding: "1.35rem",
    boxShadow: "0 24px 60px rgba(42,67,112,0.16)",
  },
  h1: {
    color: "#172033",
    fontSize: "clamp(2.1rem,10.5vw,3.2rem)",
    fontWeight: 900,
    lineHeight: 0.98,
    letterSpacing: 0,
  },
  lead: { marginTop: "0.85rem", color: "#475569", fontSize: "0.98rem", lineHeight: 1.65 },
  actionGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginTop: "1.5rem" },
  primaryBtn: {
    display: "inline-flex",
    minHeight: "3.25rem",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.45rem",
    borderRadius: "1rem",
    background: "#1a325d",
    color: "#fff",
    fontSize: "0.93rem",
    fontWeight: 800,
    boxShadow: "0 14px 30px rgba(26,50,93,0.26)",
  },
  secondaryBtn: {
    display: "inline-flex",
    minHeight: "3.25rem",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.45rem",
    borderRadius: "1rem",
    border: "1px solid rgba(128,155,206,0.38)",
    background: "#fff",
    color: "#1a325d",
    fontSize: "0.93rem",
    fontWeight: 800,
  },
  statsGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem" },
  statCard: {
    borderRadius: "1.25rem",
    background: "rgba(255,255,255,0.9)",
    padding: "1rem 0.75rem",
    textAlign: "center",
    boxShadow: "0 10px 26px rgba(15,23,42,0.07)",
  },
  serviceRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.875rem",
    borderRadius: "1.25rem",
    border: "1px solid rgba(226,232,240,0.9)",
    background: "rgba(255,255,255,0.9)",
    padding: "0.9rem",
    boxShadow: "0 12px 30px rgba(15,23,42,0.07)",
    textDecoration: "none",
  },
  serviceIcon: {
    display: "inline-flex",
    width: "2.85rem",
    height: "2.85rem",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.9rem",
  },
  whyCard: {
    display: "flex",
    gap: "0.875rem",
    alignItems: "flex-start",
    borderRadius: "1.1rem",
    border: "1px solid rgba(226,232,240,0.9)",
    background: "#fff",
    padding: "0.9rem",
    boxShadow: "0 8px 20px rgba(15,23,42,0.06)",
  },
  stepCard: {
    borderRadius: "1.25rem",
    border: "1px solid rgba(226,232,240,0.9)",
    background: "#fff",
    padding: "1rem",
    boxShadow: "0 10px 26px rgba(15,23,42,0.07)",
  },
  techPill: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "999px",
    border: "1px solid rgba(128,155,206,0.28)",
    background: "#fff",
    padding: "0.45rem 0.85rem",
    color: "#3a5483",
    fontSize: "0.78rem",
    fontWeight: 700,
    boxShadow: "0 4px 12px rgba(15,23,42,0.05)",
    whiteSpace: "nowrap",
  },
  faqCard: {
    borderRadius: "1.15rem",
    border: "1px solid rgba(226,232,240,0.9)",
    background: "#fff",
    padding: "1rem",
    boxShadow: "0 8px 20px rgba(15,23,42,0.06)",
    cursor: "pointer",
  },
  contactCard: {
    borderRadius: "1.5rem",
    background: "linear-gradient(145deg,#1a325d,#3a5483)",
    color: "#fff",
    padding: "1.25rem",
    boxShadow: "0 18px 42px rgba(15,23,42,0.14)",
  },
};

/* ─── FAQ item ───────────────────────────────────────────────────────────── */

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={s.faqCard} onClick={() => setOpen((v) => !v)}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
        <strong style={{ color: "#172033", fontSize: "0.93rem", lineHeight: 1.35, flex: 1 }}>{faq.q}</strong>
        <ChevronDown
          style={{
            flexShrink: 0,
            width: "1.1rem",
            height: "1.1rem",
            color: "#3a5483",
            transition: "transform 0.22s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ overflow: "hidden" }}
          >
            <p style={{ marginTop: "0.75rem", color: "#475569", fontSize: "0.88rem", lineHeight: 1.6 }}>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── component ──────────────────────────────────────────────────────────── */

export default function MobileServicesPage() {
  return (
    <div className="md:hidden" style={s.page}>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section style={{ ...s.section, paddingTop: "5.5rem", paddingBottom: "1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={s.heroPanel}>
          <div style={s.heroPill}>
            <Sparkles style={{ width: "0.85rem", height: "0.85rem" }} />
            CRM · Apps · SEO · Custom software
          </div>
          <h1 style={s.h1}>Transform your business with our digital solutions.</h1>
          <p style={s.lead}>
            End-to-end software, CRM, mobile apps, and SEO — designed around your real workflow, not a template.
          </p>
          <div style={s.actionGrid}>
            <Link href="/contact" style={s.primaryBtn}>
              Get consultation
              <ArrowRight style={{ width: "1rem", height: "1rem" }} />
            </Link>
            <a href="tel:9638544455" style={s.secondaryBtn}>
              <Phone style={{ width: "1rem", height: "1rem" }} />
              Call us
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────── */}
      <section style={s.section}>
        <div style={s.statsGrid}>
          {stats.map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }} style={s.statCard}>
              <strong style={{ display: "block", color: "#1a325d", fontSize: "1.45rem", fontWeight: 900 }}>{item.value}</strong>
              <span style={{ display: "block", marginTop: "0.2rem", color: "#64748b", fontSize: "0.72rem", fontWeight: 700 }}>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Services list ─────────────────────────────────────────────── */}
      <section style={s.section}>
        <span style={s.kicker}>Our Services</span>
        <h2 style={s.sectionTitle}>Choose what you want to build</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Link
                key={svc.title}
                href={svc.href}
                style={s.serviceRow}
              >
                <span style={{ ...s.serviceIcon, background: svc.tone.bg }}>
                  <Icon style={{ width: "1.1rem", height: "1.1rem", color: svc.tone.color }} />
                </span>
                <span style={{ minWidth: 0, flex: 1 }}>
                  <strong style={{ display: "block", color: "#172033", fontSize: "0.96rem" }}>{svc.title}</strong>
                  <small style={{ display: "block", marginTop: "0.2rem", color: "#64748b", fontSize: "0.77rem", lineHeight: 1.4 }}>{svc.desc}</small>
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", borderRadius: "999px", background: svc.tone.bg, padding: "0.2rem 0.5rem", color: svc.tone.color, fontSize: "0.62rem", fontWeight: 800, whiteSpace: "nowrap", flexShrink: 0 }}>{svc.tag}</span>
                <ArrowRight style={{ width: "1.1rem", height: "1.1rem", color: "#94a3b8", flexShrink: 0 }} />
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Why choose us ─────────────────────────────────────────────── */}
      <section style={s.section}>
        <span style={s.kicker}>Why us</span>
        <h2 style={s.sectionTitle}>Why choose our services?</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {whyUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} style={s.whyCard}>
                <span style={{ display: "inline-flex", width: "2.5rem", height: "2.5rem", flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: "0.8rem", background: "#eef4ff" }}>
                  <Icon style={{ width: "1.1rem", height: "1.1rem", color: "#3a5483" }} />
                </span>
                <span>
                  <strong style={{ display: "block", color: "#172033", fontSize: "0.93rem" }}>{item.title}</strong>
                  <small style={{ display: "block", marginTop: "0.2rem", color: "#64748b", fontSize: "0.78rem", lineHeight: 1.45 }}>{item.desc}</small>
                </span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Industries ────────────────────────────────────────────────── */}
      <section style={s.section}>
        <div style={{ borderRadius: "1.5rem", background: "linear-gradient(145deg,#1a325d,#2e4d7a)", padding: "1.25rem", boxShadow: "0 18px 40px rgba(26,50,93,0.2)" }}>
          <span style={{ ...s.kicker, color: "rgba(255,255,255,0.65)" }}>Coverage</span>
          <h2 style={{ ...s.sectionTitle, color: "#fff", marginBottom: "1.1rem" }}>Industries we serve</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
            {industries.map((ind) => (
              <div key={ind} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle2 style={{ width: "0.9rem", height: "0.9rem", color: "#7fa799", flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.85rem", fontWeight: 600 }}>{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────────── */}
      <section style={s.section}>
        <span style={s.kicker}>How we work</span>
        <h2 style={s.sectionTitle}>Our development process</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {process.map((p, i) => (
            <motion.div key={p.step} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexShrink: 0, width: "2.85rem", height: "2.85rem", alignItems: "center", justifyContent: "center", borderRadius: "0.9rem", background: "#1a325d", color: "#fff", fontSize: "0.75rem", fontWeight: 900 }}>
                {p.step}
              </div>
              <div style={s.stepCard}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.25rem" }}>
                  <span style={{ fontSize: "1rem" }}>{p.emoji}</span>
                  <strong style={{ color: "#172033", fontSize: "0.95rem" }}>{p.title}</strong>
                </div>
                <p style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.5 }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Tech stack ────────────────────────────────────────────────── */}
      <section style={{ ...s.section, paddingBottom: "0.5rem" }}>
        <span style={s.kicker}>Tech stack</span>
        <h2 style={s.sectionTitle}>Technologies we use</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {techStack.map((tech) => (
            <span key={tech} style={s.techPill}>{tech}</span>
          ))}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section style={s.section}>
        <span style={s.kicker}>FAQ</span>
        <h2 style={s.sectionTitle}>Frequently asked questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {faqs.map((faq) => (
            <FaqItem key={faq.q} faq={faq} />
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section style={{ ...s.section, paddingBottom: "1.5rem" }}>
        <div style={s.contactCard}>
          <Rocket style={{ width: "1.75rem", height: "1.75rem", color: "rgba(255,255,255,0.9)" }} />
          <h2 style={{ marginTop: "0.75rem", color: "#fff", fontSize: "1.35rem", fontWeight: 900, lineHeight: 1.1 }}>
            Ready to get started?
          </h2>
          <p style={{ marginTop: "0.5rem", color: "rgba(255,255,255,0.76)", fontSize: "0.92rem", lineHeight: 1.5 }}>
            Share your requirement and we'll map the fastest practical path to building it.
          </p>
          <div style={{ ...s.actionGrid, marginTop: "1.1rem" }}>
            <Link href="/contact" style={{ ...s.primaryBtn, background: "#fff", color: "#1a325d", boxShadow: "none" }}>
              Schedule consultation
            </Link>
            <a href="https://wa.me/919638544455" style={{ ...s.secondaryBtn, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.24)", color: "#fff" }}>
              <MessageCircle style={{ width: "1rem", height: "1rem" }} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

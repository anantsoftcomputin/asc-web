"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileSearch,
  Globe,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
  Search,
  Settings,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { businessStats } from "../../../lib/site-links";

/* ─── data ───────────────────────────────────────────────────────────── */

const keyMetrics = [
  { value: businessStats.projects, label: "Projects delivered" },
  { value: "+85%", label: "Avg. traffic lift" },
  { value: businessStats.satisfaction, label: "Client satisfaction" },
];

const features = [
  { icon: Search, title: "Keyword Research", desc: "Deep analysis to target the most valuable search terms for your business and audience.", bg: "#eef4ff", color: "#3a5483" },
  { icon: Settings, title: "Technical SEO", desc: "Site speed, crawlability, schema markup, Core Web Vitals, and structured data.", bg: "#effaf6", color: "#466e60" },
  { icon: FileSearch, title: "On-Page SEO", desc: "Content, headings, meta elements, and internal linking optimised for search.", bg: "#fff3e8", color: "#9a5b20" },
  { icon: BarChart3, title: "Performance Tracking", desc: "Real-time ranking reports, traffic analytics, and ROI dashboards.", bg: "#f8eef8", color: "#785263" },
  { icon: MapPin, title: "Local SEO", desc: "Google Business Profile, local citations, and map pack visibility for your area.", bg: "#f0fdf4", color: "#166534" },
  { icon: Globe, title: "Link Building", desc: "High-authority backlinks through content, outreach, and digital PR campaigns.", bg: "#fdf4ff", color: "#7e22ce" },
];

const results = [
  { metric: "Organic Traffic", increase: "+150%", icon: TrendingUp, color: "#3a5483", bg: "#eef4ff" },
  { metric: "Keyword Rankings", increase: "+200%", icon: Search, color: "#466e60", bg: "#effaf6" },
  { metric: "Conversion Rate", increase: "+85%", icon: Zap, color: "#9a5b20", bg: "#fff3e8" },
];

const seoProgress = [
  { label: "Keyword Rankings", value: 85, color: "#3a5483" },
  { label: "Organic Traffic", value: 92, color: "#466e60" },
  { label: "Domain Authority", value: 78, color: "#785263" },
];

const processSteps = [
  { step: "01", emoji: "🔍", title: "Audit & Analysis", desc: "Full crawl of your site, competitors, and keyword landscape." },
  { step: "02", emoji: "📐", title: "Strategy Development", desc: "Custom SEO roadmap prioritised by impact and effort." },
  { step: "03", emoji: "⚙️", title: "Implementation", desc: "Technical fixes, content optimisation, and link building execution." },
  { step: "04", emoji: "📊", title: "Monitor & Adjust", desc: "Continuous tracking with monthly reporting and strategy refinement." },
];

const techTools = ["Google Analytics", "Search Console", "SEMrush", "Ahrefs", "Screaming Frog", "Moz", "Hotjar", "Yoast"];

/* ─── styles ─────────────────────────────────────────────────────────── */

const s = {
  page: { background: "linear-gradient(180deg,#f6f9ff 0%,#ffffff 40%,#f2faf7 100%)", color: "#111827" },
  section: { padding: "1.25rem 1rem" },
  kicker: { display: "block", color: "#4a6596", fontSize: "0.72rem", fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.25rem" },
  title: { color: "#172033", fontSize: "1.35rem", fontWeight: 900, lineHeight: 1.1, marginBottom: "1rem" },
  heroPanel: {
    borderRadius: "1.75rem", border: "1px solid rgba(128,155,206,0.2)",
    background: "linear-gradient(145deg,rgba(255,255,255,0.96),rgba(240,244,255,0.88))",
    padding: "1.35rem", boxShadow: "0 24px 60px rgba(42,67,112,0.16)",
  },
  pill: {
    display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.1rem",
    borderRadius: "999px", background: "#fff", padding: "0.45rem 0.75rem",
    color: "#3a5483", fontSize: "0.72rem", fontWeight: 800, boxShadow: "0 8px 20px rgba(15,23,42,0.06)",
  },
  h1: { color: "#172033", fontSize: "clamp(2.05rem,10vw,3.1rem)", fontWeight: 900, lineHeight: 0.98 },
  lead: { marginTop: "0.85rem", color: "#475569", fontSize: "0.98rem", lineHeight: 1.65 },
  actionGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginTop: "1.5rem" },
  primaryBtn: {
    display: "inline-flex", minHeight: "3.25rem", alignItems: "center", justifyContent: "center",
    gap: "0.45rem", borderRadius: "1rem", background: "#1a325d", color: "#fff",
    fontSize: "0.93rem", fontWeight: 800, boxShadow: "0 14px 30px rgba(26,50,93,0.26)",
  },
  secondaryBtn: {
    display: "inline-flex", minHeight: "3.25rem", alignItems: "center", justifyContent: "center",
    gap: "0.45rem", borderRadius: "1rem", border: "1px solid rgba(128,155,206,0.38)",
    background: "#fff", color: "#1a325d", fontSize: "0.93rem", fontWeight: 800,
  },
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.55rem" },
  statCard: {
    borderRadius: "1.1rem", background: "rgba(255,255,255,0.9)", padding: "0.9rem 0.5rem",
    textAlign: "center", boxShadow: "0 8px 20px rgba(15,23,42,0.07)",
  },
  featureRow: {
    display: "flex", alignItems: "flex-start", gap: "0.875rem",
    borderRadius: "1.25rem", border: "1px solid rgba(226,232,240,0.9)",
    background: "#fff", padding: "0.9rem", boxShadow: "0 10px 26px rgba(15,23,42,0.07)",
  },
  resultCard: {
    display: "flex", alignItems: "center", gap: "0.875rem",
    borderRadius: "1.25rem", border: "1px solid rgba(226,232,240,0.9)",
    background: "#fff", padding: "1rem", boxShadow: "0 10px 26px rgba(15,23,42,0.07)",
  },
  metricsCard: {
    borderRadius: "1.5rem", border: "1px solid rgba(128,155,206,0.2)",
    background: "linear-gradient(145deg,rgba(255,255,255,0.96),rgba(240,244,255,0.9))",
    padding: "1.25rem", boxShadow: "0 18px 42px rgba(42,67,112,0.12)",
  },
  stepRow: { display: "flex", gap: "0.85rem", alignItems: "flex-start" },
  stepCard: {
    flex: 1, borderRadius: "1.1rem", border: "1px solid rgba(226,232,240,0.9)",
    background: "#fff", padding: "0.875rem", boxShadow: "0 8px 20px rgba(15,23,42,0.06)",
  },
  toolPill: {
    display: "inline-flex", alignItems: "center", borderRadius: "999px",
    border: "1px solid rgba(128,155,206,0.28)", background: "#fff",
    padding: "0.4rem 0.8rem", color: "#3a5483", fontSize: "0.77rem", fontWeight: 700,
    boxShadow: "0 4px 12px rgba(15,23,42,0.05)", whiteSpace: "nowrap",
  },
  contactCard: {
    borderRadius: "1.5rem", background: "linear-gradient(145deg,#1a325d,#3a5483)",
    color: "#fff", padding: "1.25rem", boxShadow: "0 18px 42px rgba(15,23,42,0.14)",
  },
};

/* ─── animated bar ────────────────────────────────────────────────────── */

function ProgressBar({ label, value, color }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
        <span style={{ color: "#64748b", fontSize: "0.84rem" }}>{label}</span>
        <span style={{ color: "#172033", fontWeight: 700, fontSize: "0.84rem" }}>{value}%</span>
      </div>
      <div style={{ height: "0.5rem", background: "#f1f5f9", borderRadius: "999px", overflow: "hidden" }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          style={{ height: "100%", borderRadius: "999px", background: color }}
        />
      </div>
    </div>
  );
}

/* ─── component ──────────────────────────────────────────────────────── */

export default function MobileSEOPage() {
  return (
    <div className="md:hidden" style={s.page}>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section style={{ ...s.section, paddingTop: "5.5rem", paddingBottom: "1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={s.heroPanel}>
          <div style={s.pill}>
            <Sparkles style={{ width: "0.85rem", height: "0.85rem" }} />
            SEO Services · Data-driven growth
          </div>
          <h1 style={s.h1}>Rank higher. Drive organic traffic. Grow faster.</h1>
          <p style={s.lead}>
            Technical SEO, content strategy, local search, link building, and analytics — all tied to your business goals, not vanity metrics.
          </p>
          <div style={s.actionGrid}>
            <Link href="/contact" style={s.primaryBtn}>
              Grow my traffic
              <ArrowRight style={{ width: "1rem", height: "1rem" }} />
            </Link>
            <a href="tel:9638544455" style={s.secondaryBtn}>
              <Phone style={{ width: "1rem", height: "1rem" }} />
              Call us
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Key metrics ───────────────────────────────────────────── */}
      <section style={s.section}>
        <div style={s.statsGrid}>
          {keyMetrics.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 * i }} style={s.statCard}>
              <strong style={{ display: "block", color: "#1a325d", fontSize: "1.3rem", fontWeight: 900 }}>{m.value}</strong>
              <span style={{ display: "block", marginTop: "0.2rem", color: "#64748b", fontSize: "0.68rem", fontWeight: 700 }}>{m.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SEO performance card ──────────────────────────────────── */}
      <section style={s.section}>
        <div style={s.metricsCard}>
          <span style={s.kicker}>Performance benchmarks</span>
          <h2 style={{ ...s.title, marginBottom: "1.1rem" }}>What we deliver on average</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {seoProgress.map(p => <ProgressBar key={p.label} {...p} />)}
          </div>
        </div>
      </section>

      {/* ── Real results ──────────────────────────────────────────── */}
      <section style={s.section}>
        <span style={s.kicker}>Results</span>
        <h2 style={s.title}>Real results for real businesses</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
          {results.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div key={r.metric} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} style={s.resultCard}>
                <span style={{ display: "inline-flex", width: "3.5rem", height: "3.5rem", flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: "1rem", background: r.bg }}>
                  <strong style={{ color: r.color, fontSize: "0.88rem", fontWeight: 900 }}>{r.increase}</strong>
                </span>
                <div>
                  <strong style={{ display: "block", color: "#172033", fontSize: "0.95rem" }}>{r.metric}</strong>
                  <small style={{ color: "#64748b", fontSize: "0.78rem" }}>Average improvement across clients</small>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────── */}
      <section style={s.section}>
        <span style={s.kicker}>What we cover</span>
        <h2 style={s.title}>Comprehensive SEO solutions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} style={s.featureRow}>
                <span style={{ display: "inline-flex", width: "2.65rem", height: "2.65rem", flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: "0.85rem", background: f.bg }}>
                  <Icon style={{ width: "1.1rem", height: "1.1rem", color: f.color }} />
                </span>
                <span>
                  <strong style={{ display: "block", color: "#172033", fontSize: "0.95rem" }}>{f.title}</strong>
                  <small style={{ display: "block", marginTop: "0.2rem", color: "#64748b", fontSize: "0.79rem", lineHeight: 1.45 }}>{f.desc}</small>
                </span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────── */}
      <section style={s.section}>
        <span style={s.kicker}>How we work</span>
        <h2 style={s.title}>Our SEO process</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
          {processSteps.map((step, i) => (
            <motion.div key={step.step} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} style={s.stepRow}>
              <div style={{ flexShrink: 0, width: "2.85rem", height: "2.85rem", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "0.9rem", background: "#1a325d", color: "#fff", fontSize: "1rem" }}>
                {step.emoji}
              </div>
              <div style={s.stepCard}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.2rem" }}>
                  <strong style={{ color: "#172033", fontSize: "0.93rem" }}>{step.title}</strong>
                  <span style={{ borderRadius: "999px", background: "#eef4ff", color: "#3a5483", fontSize: "0.62rem", fontWeight: 800, padding: "0.15rem 0.45rem" }}>{step.step}</span>
                </div>
                <p style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.45 }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Tools ─────────────────────────────────────────────────── */}
      <section style={{ ...s.section }}>
        <span style={s.kicker}>Tools we use</span>
        <h2 style={s.title}>Industry-leading SEO tools</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {techTools.map(tool => <span key={tool} style={s.toolPill}>{tool}</span>)}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section style={{ ...s.section, paddingBottom: "1.5rem" }}>
        <div style={s.contactCard}>
          <Rocket style={{ width: "1.75rem", height: "1.75rem", color: "rgba(255,255,255,0.9)" }} />
          <h2 style={{ marginTop: "0.75rem", color: "#fff", fontSize: "1.35rem", fontWeight: 900, lineHeight: 1.1 }}>
            Ready to grow your organic traffic?
          </h2>
          <p style={{ marginTop: "0.5rem", color: "rgba(255,255,255,0.76)", fontSize: "0.92rem", lineHeight: 1.5 }}>
            Share your site and goals — we'll audit it and outline the first 90-day SEO plan.
          </p>
          <div style={{ ...s.actionGrid, marginTop: "1.1rem" }}>
            <Link href="/contact" style={{ ...s.primaryBtn, background: "#fff", color: "#1a325d", boxShadow: "none" }}>
              Get free audit
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

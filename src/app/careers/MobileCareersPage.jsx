"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  ChevronDown,
  Clock,
  GraduationCap,
  Heart,
  Lightbulb,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
  Search,
  Smile,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { jobAPI } from "../../lib/firebase-admin";

/* ─── data ───────────────────────────────────────────────────────────── */

const benefits = [
  { icon: Building2, title: "Modern Workplace", desc: "State-of-the-art office with collaborative and recreational areas.", bg: "#eef4ff", color: "#3a5483" },
  { icon: Heart, title: "Work-Life Balance", desc: "Flexible hours and remote work options to keep you at your best.", bg: "#fff0f3", color: "#9f1239" },
  { icon: Lightbulb, title: "Learning & Growth", desc: "Regular training, conferences, and dedicated personal development time.", bg: "#fff3e8", color: "#9a5b20" },
  { icon: Smile, title: "Health Benefits", desc: "Comprehensive health insurance for you and your family.", bg: "#effaf6", color: "#466e60" },
];

const faqs = [
  { q: "What is your recruitment process?", a: "Initial screening → technical assessment → culture-fit interview → final discussion. Usually 2–3 weeks total." },
  { q: "Do you offer remote work?", a: "Yes — hybrid and remote options depending on role and team requirements." },
  { q: "What learning opportunities do you provide?", a: "Training sessions, conference attendance, online course subscriptions, and dedicated learning time every week." },
  { q: "How do you support career growth?", a: "Structured development programme with regular reviews, mentorship, and clear growth paths across technical and management tracks." },
];

const processSteps = [
  { emoji: "📝", time: "1–2 days", title: "Application Review", desc: "Initial screening of your application and resume." },
  { emoji: "💻", time: "3–5 days", title: "Technical Assessment", desc: "Practical skills evaluation relevant to the role." },
  { emoji: "👥", time: "1 day", title: "Team Interview", desc: "Discussion with your potential team members." },
  { emoji: "🎉", time: "1–2 days", title: "Final Discussion", desc: "Offer, compensation, and documentation." },
];

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
    borderRadius: "1.1rem", background: "rgba(255,255,255,0.9)", padding: "0.85rem 0.5rem",
    textAlign: "center", boxShadow: "0 8px 20px rgba(15,23,42,0.07)",
  },
  jobCard: {
    borderRadius: "1.25rem", border: "1px solid rgba(226,232,240,0.9)",
    background: "#fff", padding: "1rem", boxShadow: "0 10px 26px rgba(15,23,42,0.07)",
  },
  benefitCard: {
    display: "flex", flexDirection: "column", gap: "0.45rem",
    borderRadius: "1.2rem", border: "1px solid rgba(226,232,240,0.9)",
    background: "#fff", padding: "1rem", boxShadow: "0 8px 20px rgba(15,23,42,0.06)",
  },
  faqCard: {
    borderRadius: "1.15rem", border: "1px solid rgba(226,232,240,0.9)",
    background: "#fff", padding: "1rem", boxShadow: "0 8px 20px rgba(15,23,42,0.06)",
    cursor: "pointer",
  },
  stepRow: { display: "flex", gap: "0.85rem", alignItems: "flex-start" },
  stepCard: {
    flex: 1, borderRadius: "1.1rem", border: "1px solid rgba(226,232,240,0.9)",
    background: "#fff", padding: "0.875rem", boxShadow: "0 8px 20px rgba(15,23,42,0.06)",
  },
  contactCard: {
    borderRadius: "1.5rem", background: "linear-gradient(145deg,#1a325d,#3a5483)",
    color: "#fff", padding: "1.25rem", boxShadow: "0 18px 42px rgba(15,23,42,0.14)",
  },
};

/* ─── sub-components ─────────────────────────────────────────────────── */

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={s.faqCard} onClick={() => setOpen(v => !v)}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
        <strong style={{ color: "#172033", fontSize: "0.92rem", lineHeight: 1.35, flex: 1 }}>{faq.q}</strong>
        <ChevronDown style={{ flexShrink: 0, width: "1.1rem", height: "1.1rem", color: "#3a5483", transition: "transform 0.22s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} style={{ overflow: "hidden" }}>
            <p style={{ marginTop: "0.75rem", color: "#475569", fontSize: "0.87rem", lineHeight: 1.6 }}>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function JobCard({ job }) {
  return (
    <div style={s.jobCard}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.6rem" }}>
        <div>
          <strong style={{ display: "block", color: "#172033", fontSize: "0.98rem" }}>{job.title}</strong>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginTop: "0.4rem" }}>
            <span style={{ borderRadius: "999px", background: "#eef4ff", color: "#3a5483", fontSize: "0.68rem", fontWeight: 800, padding: "0.2rem 0.55rem" }}>{job.type}</span>
            {job.featured && <span style={{ borderRadius: "999px", background: "#fef9c3", color: "#854d0e", fontSize: "0.68rem", fontWeight: 800, padding: "0.2rem 0.55rem" }}>Featured</span>}
          </div>
        </div>
        <Briefcase style={{ width: "1.35rem", height: "1.35rem", color: "#94a3b8", flexShrink: 0 }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", marginBottom: "0.65rem" }}>
        {job.location && <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#64748b", fontSize: "0.82rem" }}><MapPin style={{ width: "0.85rem", height: "0.85rem" }} />{job.location}</div>}
        {job.experience && <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#64748b", fontSize: "0.82rem" }}><Clock style={{ width: "0.85rem", height: "0.85rem" }} />{job.experience}</div>}
      </div>
      {job.description && <p style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.5, marginBottom: "0.75rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{job.description}</p>}
      <a href="/contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", minHeight: "2.6rem", borderRadius: "0.8rem", border: "1.5px solid rgba(128,155,206,0.5)", color: "#1a325d", fontSize: "0.87rem", fontWeight: 800 }}>
        Apply Now <ArrowRight style={{ width: "0.9rem", height: "0.9rem" }} />
      </a>
    </div>
  );
}

/* ─── main component ─────────────────────────────────────────────────── */

export default function MobileCareersPage() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    jobAPI.getAll().then((r) => {
      if (r.success) setJobs(r.data.filter(j => j.status === "active"));
      setLoading(false);
    });
  }, []);

  const filtered = jobs.filter(j =>
    j.title?.toLowerCase().includes(search.toLowerCase()) ||
    j.location?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="md:hidden" style={s.page}>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section style={{ ...s.section, paddingTop: "5.5rem", paddingBottom: "1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={s.heroPanel}>
          <div style={s.pill}>
            <Sparkles style={{ width: "0.85rem", height: "0.85rem" }} />
            Join our team · Vadodara &amp; Remote
          </div>
          <h1 style={s.h1}>Build useful products with a great software team.</h1>
          <p style={s.lead}>Work on CRM, apps, dashboards, and automation for real businesses — with people who care about shipping quality work.</p>
          <div style={s.actionGrid}>
            <a href="#jobs" style={s.primaryBtn}>
              View openings
              <ArrowRight style={{ width: "1rem", height: "1rem" }} />
            </a>
            <a href="tel:9638544455" style={s.secondaryBtn}>
              <Phone style={{ width: "1rem", height: "1rem" }} />
              Call us
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────── */}
      <section style={s.section}>
        <div style={s.statsGrid}>
          {[
            { value: `${jobs.length || "–"}+`, label: "Open positions" },
            { value: "35+", label: "Countries" },
            { value: "96%", label: "Satisfaction" },
          ].map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 * i }} style={s.statCard}>
              <strong style={{ display: "block", color: "#1a325d", fontSize: "1.3rem", fontWeight: 900 }}>{item.value}</strong>
              <span style={{ display: "block", marginTop: "0.2rem", color: "#64748b", fontSize: "0.68rem", fontWeight: 700 }}>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Benefits ──────────────────────────────────────────────── */}
      <section style={s.section}>
        <span style={s.kicker}>Why join us</span>
        <h2 style={s.title}>More than just a job</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.7rem" }}>
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div key={b.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} style={s.benefitCard}>
                <span style={{ display: "inline-flex", width: "2.25rem", height: "2.25rem", alignItems: "center", justifyContent: "center", borderRadius: "0.7rem", background: b.bg }}>
                  <Icon style={{ width: "1rem", height: "1rem", color: b.color }} />
                </span>
                <strong style={{ color: "#172033", fontSize: "0.87rem" }}>{b.title}</strong>
                <small style={{ color: "#64748b", fontSize: "0.75rem", lineHeight: 1.45 }}>{b.desc}</small>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Job listings ──────────────────────────────────────────── */}
      <section id="jobs" style={s.section}>
        <span style={s.kicker}>Open roles</span>
        <h2 style={s.title}>Current openings</h2>

        {/* search */}
        <div style={{ position: "relative", marginBottom: "1rem" }}>
          <Search style={{ position: "absolute", left: "0.9rem", top: "50%", transform: "translateY(-50%)", width: "1rem", height: "1rem", color: "#94a3b8" }} />
          <input
            type="text"
            placeholder="Search by title or location…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ width: "100%", paddingLeft: "2.5rem", paddingRight: "1rem", height: "2.9rem", borderRadius: "0.9rem", border: "1.5px solid rgba(226,232,240,0.9)", background: "#fff", fontSize: "0.88rem", color: "#172033", outline: "none", boxSizing: "border-box" }}
          />
        </div>

        {loading ? (
          <div style={{ textAlign: "center", padding: "2rem 0" }}>
            <div style={{ width: "2.5rem", height: "2.5rem", border: "3px solid #eef4ff", borderTopColor: "#3a5483", borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto" }} />
            <p style={{ marginTop: "0.75rem", color: "#64748b", fontSize: "0.88rem" }}>Loading openings…</p>
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "2rem 0", borderRadius: "1.25rem", border: "1px dashed rgba(128,155,206,0.4)", background: "#f8faff" }}>
            <Briefcase style={{ width: "2.5rem", height: "2.5rem", color: "#94a3b8", margin: "0 auto 0.75rem" }} />
            <p style={{ color: "#64748b", fontSize: "0.9rem" }}>{search ? "No roles match your search." : "No openings right now — check back soon."}</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {filtered.map((job, i) => (
              <motion.div key={job.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <JobCard job={job} />
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section style={s.section}>
        <span style={s.kicker}>Questions</span>
        <h2 style={s.title}>Frequently asked</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {faqs.map(f => <FaqItem key={f.q} faq={f} />)}
        </div>
      </section>

      {/* ── Recruitment process ───────────────────────────────────── */}
      <section style={s.section}>
        <span style={s.kicker}>How we hire</span>
        <h2 style={s.title}>Our recruitment process</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
          {processSteps.map((step, i) => (
            <motion.div key={step.title} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} style={s.stepRow}>
              <div style={{ flexShrink: 0, width: "2.85rem", height: "2.85rem", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "0.9rem", background: "#1a325d", color: "#fff", fontSize: "1.1rem" }}>
                {step.emoji}
              </div>
              <div style={s.stepCard}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.2rem" }}>
                  <strong style={{ color: "#172033", fontSize: "0.93rem" }}>{step.title}</strong>
                  <span style={{ borderRadius: "999px", background: "#eef4ff", color: "#3a5483", fontSize: "0.65rem", fontWeight: 800, padding: "0.15rem 0.5rem" }}>{step.time}</span>
                </div>
                <p style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.45 }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section style={{ ...s.section, paddingBottom: "1.5rem" }}>
        <div style={s.contactCard}>
          <TrendingUp style={{ width: "1.75rem", height: "1.75rem", color: "rgba(255,255,255,0.9)" }} />
          <h2 style={{ marginTop: "0.75rem", color: "#fff", fontSize: "1.35rem", fontWeight: 900, lineHeight: 1.1 }}>
            Don't see the right role?
          </h2>
          <p style={{ marginTop: "0.5rem", color: "rgba(255,255,255,0.76)", fontSize: "0.92rem", lineHeight: 1.5 }}>
            Send us your profile anyway. We hire for skill and mindset, not just for open slots.
          </p>
          <div style={{ ...s.actionGrid, marginTop: "1.1rem" }}>
            <Link href="/contact" style={{ ...s.primaryBtn, background: "#fff", color: "#1a325d", boxShadow: "none" }}>
              Send your profile
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

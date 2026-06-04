"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Handshake,
  Lightbulb,
  MessageCircle,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { teamAPI } from "../../lib/firebase-admin";
import { isUnavailableImageSrc } from "../../lib/image-utils";

/* ─── data ───────────────────────────────────────────────────────────── */

const stats = [
  { value: "10+", label: "Years experience" },
  { value: "250+", label: "Projects delivered" },
  { value: "95%", label: "Client satisfaction" },
  { value: "50+", label: "Team members" },
];

const values = [
  { icon: Users, title: "Client-Centric", desc: "Every decision guided by client success and real outcomes.", bg: "#eef4ff", color: "#3a5483" },
  { icon: Lightbulb, title: "Innovation", desc: "Continuously exploring and implementing cutting-edge tech.", bg: "#effaf6", color: "#466e60" },
  { icon: Award, title: "Excellence", desc: "Highest standards in every project we undertake.", bg: "#fff3e8", color: "#9a5b20" },
  { icon: Handshake, title: "Integrity", desc: "Trust and transparency as the foundation of every relationship.", bg: "#f8eef8", color: "#785263" },
];

const metrics = [
  { label: "Innovation Index", value: 95, color: "#3a5483" },
  { label: "Client Success Rate", value: 98, color: "#466e60" },
  { label: "Team Growth", value: 85, color: "#785263" },
];

/* ─── styles ─────────────────────────────────────────────────────────── */

const s = {
  page: { background: "linear-gradient(180deg,#f6f9ff 0%,#ffffff 40%,#f2faf7 100%)", color: "#111827" },
  section: { padding: "1.25rem 1rem" },
  kicker: { display: "block", color: "#4a6596", fontSize: "0.72rem", fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.25rem" },
  title: { color: "#172033", fontSize: "1.35rem", fontWeight: 900, lineHeight: 1.1, marginBottom: "1rem" },
  heroPanel: {
    borderRadius: "1.75rem",
    border: "1px solid rgba(128,155,206,0.2)",
    background: "linear-gradient(145deg,rgba(255,255,255,0.96),rgba(240,244,255,0.88))",
    padding: "1.35rem",
    boxShadow: "0 24px 60px rgba(42,67,112,0.16)",
  },
  pill: {
    display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.1rem",
    borderRadius: "999px", background: "#fff", padding: "0.45rem 0.75rem",
    color: "#3a5483", fontSize: "0.72rem", fontWeight: 800,
    boxShadow: "0 8px 20px rgba(15,23,42,0.06)",
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
  statsGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem" },
  statCard: {
    borderRadius: "1.25rem", background: "rgba(255,255,255,0.9)", padding: "1rem 0.75rem",
    textAlign: "center", boxShadow: "0 10px 26px rgba(15,23,42,0.07)",
  },
  vmCard: {
    borderRadius: "1.35rem", border: "1px solid rgba(226,232,240,0.9)",
    background: "#fff", padding: "1.1rem", boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
  },
  valueCard: {
    display: "flex", flexDirection: "column", gap: "0.5rem",
    borderRadius: "1.2rem", border: "1px solid rgba(226,232,240,0.9)",
    background: "#fff", padding: "1rem", boxShadow: "0 8px 20px rgba(15,23,42,0.06)",
  },
  teamCard: {
    borderRadius: "1.2rem", border: "1px solid rgba(226,232,240,0.9)",
    background: "#fff", overflow: "hidden", boxShadow: "0 10px 26px rgba(15,23,42,0.08)",
    flexShrink: 0, width: "10rem",
  },
  contactCard: {
    borderRadius: "1.5rem", background: "linear-gradient(145deg,#1a325d,#3a5483)",
    color: "#fff", padding: "1.25rem", boxShadow: "0 18px 42px rgba(15,23,42,0.14)",
  },
};

/* ─── animated metric bar ────────────────────────────────────────────── */

function MetricBar({ label, value, color }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
        <span style={{ color: "#64748b", fontSize: "0.85rem" }}>{label}</span>
        <span style={{ color: "#172033", fontWeight: 700, fontSize: "0.85rem" }}>{value}%</span>
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

export default function MobileAboutPage() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    teamAPI.getAll().then((r) => { if (r.success) setTeamMembers(r.data); });
  }, []);

  return (
    <div className="md:hidden" style={s.page}>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section style={{ ...s.section, paddingTop: "5.5rem", paddingBottom: "1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={s.heroPanel}>
          <div style={s.pill}>
            <Sparkles style={{ width: "0.85rem", height: "0.85rem" }} />
            About AnantSoft · Since 2013
          </div>
          <h1 style={s.h1}>Crafting digital excellence for a decade.</h1>
          <p style={s.lead}>A product-minded software team dedicated to building CRMs, apps, portals, and SEO systems that drive real business results.</p>
          <div style={s.actionGrid}>
            <Link href="/contact" style={s.primaryBtn}>
              Work with us
              <ArrowRight style={{ width: "1rem", height: "1rem" }} />
            </Link>
            <a href="tel:9638544455" style={s.secondaryBtn}>
              <Phone style={{ width: "1rem", height: "1rem" }} />
              Call us
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Stats ───────────────────────────────────────────────────── */}
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

      {/* ── Performance metrics ─────────────────────────────────────── */}
      <section style={s.section}>
        <div style={{ ...s.vmCard, background: "linear-gradient(145deg,rgba(255,255,255,0.97),rgba(240,244,255,0.9))" }}>
          <span style={s.kicker}>Performance</span>
          <h2 style={{ ...s.title, marginBottom: "1.1rem" }}>Numbers we stand behind</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {metrics.map((m) => <MetricBar key={m.label} {...m} />)}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ────────────────────────────────────────── */}
      <section style={s.section}>
        <span style={s.kicker}>Purpose</span>
        <h2 style={s.title}>Vision & Mission</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={s.vmCard}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.6rem" }}>
              <span style={{ display: "inline-flex", width: "2.5rem", height: "2.5rem", alignItems: "center", justifyContent: "center", borderRadius: "0.75rem", background: "#eef4ff" }}>
                <Lightbulb style={{ width: "1.1rem", height: "1.1rem", color: "#3a5483" }} />
              </span>
              <strong style={{ color: "#172033", fontSize: "1rem" }}>Our Vision</strong>
            </div>
            <p style={{ color: "#475569", fontSize: "0.88rem", lineHeight: 1.65 }}>
              To be the leading technology partner for businesses worldwide — enabling digital transformation through innovative, sustainable solutions that drive real value.
            </p>
            <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1 }} style={{ height: "0.2rem", background: "linear-gradient(90deg,#3a5483,#4a6596)", borderRadius: "999px", marginTop: "0.9rem" }} />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={s.vmCard}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.6rem" }}>
              <span style={{ display: "inline-flex", width: "2.5rem", height: "2.5rem", alignItems: "center", justifyContent: "center", borderRadius: "0.75rem", background: "#effaf6" }}>
                <Target style={{ width: "1.1rem", height: "1.1rem", color: "#466e60" }} />
              </span>
              <strong style={{ color: "#172033", fontSize: "1rem" }}>Our Mission</strong>
            </div>
            <p style={{ color: "#475569", fontSize: "0.88rem", lineHeight: 1.65 }}>
              To deliver exceptional software solutions that empower businesses to thrive — maintaining the highest standards of quality, innovation, and customer satisfaction.
            </p>
            <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1 }} style={{ height: "0.2rem", background: "linear-gradient(90deg,#466e60,#7fa799)", borderRadius: "999px", marginTop: "0.9rem" }} />
          </motion.div>
        </div>
      </section>

      {/* ── Core values ─────────────────────────────────────────────── */}
      <section style={s.section}>
        <span style={s.kicker}>What drives us</span>
        <h2 style={s.title}>Our core values</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.7rem" }}>
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div key={v.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} style={s.valueCard}>
                <span style={{ display: "inline-flex", width: "2.25rem", height: "2.25rem", alignItems: "center", justifyContent: "center", borderRadius: "0.7rem", background: v.bg }}>
                  <Icon style={{ width: "1rem", height: "1rem", color: v.color }} />
                </span>
                <strong style={{ color: "#172033", fontSize: "0.88rem" }}>{v.title}</strong>
                <small style={{ color: "#64748b", fontSize: "0.75rem", lineHeight: 1.45 }}>{v.desc}</small>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Team ────────────────────────────────────────────────────── */}
      {teamMembers.length > 0 && (
        <section style={s.section}>
          <span style={s.kicker}>The team</span>
          <h2 style={{ ...s.title, marginBottom: "0.75rem" }}>Meet the people behind the work</h2>
          <div style={{ display: "flex", gap: "0.75rem", overflowX: "auto", paddingBottom: "0.5rem", scrollSnapType: "x mandatory" }}>
            {teamMembers.map((member, i) => (
              <motion.div key={member.id} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} style={{ ...s.teamCard, scrollSnapAlign: "start" }}>
                <div style={{ height: "7rem", background: "linear-gradient(135deg,#1a325d,#4a6596)", position: "relative", overflow: "hidden" }}>
                  {!isUnavailableImageSrc(member.image) ? (
                    <img src={member.image} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ color: "#fff", fontSize: "2rem", fontWeight: 900 }}>{member.name?.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div style={{ padding: "0.6rem" }}>
                  <strong style={{ display: "block", color: "#172033", fontSize: "0.82rem", lineHeight: 1.2 }}>{member.name}</strong>
                  <small style={{ display: "block", color: "#3a5483", fontSize: "0.72rem", marginTop: "0.15rem" }}>{member.role}</small>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section style={{ ...s.section, paddingBottom: "1.5rem" }}>
        <div style={s.contactCard}>
          <ShieldCheck style={{ width: "1.75rem", height: "1.75rem", color: "rgba(255,255,255,0.9)" }} />
          <h2 style={{ marginTop: "0.75rem", color: "#fff", fontSize: "1.35rem", fontWeight: 900, lineHeight: 1.1 }}>
            Want to build something together?
          </h2>
          <p style={{ marginTop: "0.5rem", color: "rgba(255,255,255,0.76)", fontSize: "0.92rem", lineHeight: 1.5 }}>
            Tell us your workflow challenge and we'll suggest the simplest system to build first.
          </p>
          <div style={{ ...s.actionGrid, marginTop: "1.1rem" }}>
            <Link href="/contact" style={{ ...s.primaryBtn, background: "#fff", color: "#1a325d", boxShadow: "none" }}>
              Start conversation
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

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  FileText,
  FolderKanban,
  HeartHandshake,
  Mail,
  MessageCircle,
  Phone,
  Rocket,
  Search,
  Smartphone,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { businessStats } from "../../lib/site-links";

const pages = {
  "/about": {
    kicker: "About AnantSoft",
    title: "A product-minded software team for growing businesses.",
    desc: "We build practical systems that help teams sell, operate, report, and scale with less manual work.",
    icon: UsersRound,
    cta: { label: "Work with us", href: "/contact" },
    stats: [
      [businessStats.years, "years"],
      [businessStats.projects, "projects"],
      [businessStats.satisfaction, "satisfaction"],
    ],
    cards: [
      ["Client-first", "Clear discovery, fast feedback, and honest technical direction."],
      ["Long-term systems", "Software designed for maintainability, training, and growth."],
      ["Business outcomes", "We care about speed, adoption, visibility, and ROI."],
    ],
  },
  "/services": {
    kicker: "Services",
    title: "Pick the digital system your business needs next.",
    desc: "CRM, ERP, mobile apps, SEO, and custom platforms designed around real workflows.",
    icon: BriefcaseBusiness,
    cta: { label: "Get consultation", href: "/contact" },
    stats: [
      ["CRM", "sales ops"],
      ["PWA", "mobile-ready"],
      ["SEO", "growth"],
    ],
    cards: [
      ["CRM & ERP", "Lead management, billing, dashboards, approvals, and reports.", "/services/crm"],
      ["Mobile Apps", "PWA, Android, iOS, and business apps with clean UX.", "/services/mobile"],
      ["SEO Growth", "Technical SEO, content, local search, and analytics.", "/services/seo"],
      ["Custom Software", "Portals, automation, admin panels, and industry platforms.", "/services/custom"],
    ],
  },
  "/portfolio": {
    kicker: "Work",
    title: "Case studies, platforms, and systems we have shipped.",
    desc: "Browse CRM, marketplace, healthcare, education, NGO, and business software projects.",
    icon: FolderKanban,
    cta: { label: "Discuss similar work", href: "/contact" },
    stats: [
      [businessStats.projects, "delivered"],
      ["50K+", "sessions"],
      ["99.9%", "uptime focus"],
    ],
    cards: [
      ["OEC CRM", "Multi-branch education CRM with zero lead leakage."],
      ["Pawppy.in", "Petcare marketplace with verified service providers."],
      ["SMHRI Hospital", "Healthcare website with online appointments."],
    ],
  },
  "/blog": {
    kicker: "Insights",
    title: "Software, SEO, CRM, and growth notes for business owners.",
    desc: "Short, useful reads on technology decisions, digital operations, and marketing systems.",
    icon: FileText,
    cta: { label: "Explore services", href: "/services" },
    stats: [
      ["CRM", "guides"],
      ["SEO", "playbooks"],
      ["Apps", "ideas"],
    ],
    cards: [
      ["CRM planning", "What to define before building a custom CRM."],
      ["Mobile UX", "Why PWA-style navigation improves repeat usage."],
      ["SEO systems", "How technical fixes and content work together."],
    ],
  },
  "/careers": {
    kicker: "Careers",
    title: "Build useful products with a practical software team.",
    desc: "Join a team working on CRM, apps, websites, dashboards, and automation for real businesses.",
    icon: Sparkles,
    cta: { label: "View openings", href: "/careers#jobs" },
    stats: [
      ["Remote", "friendly"],
      ["Product", "mindset"],
      ["Growth", "culture"],
    ],
    cards: [
      ["Ownership", "Work on features that customers actually use."],
      ["Learning", "Build across frontend, backend, cloud, and product workflows."],
      ["Impact", "Create systems that simplify daily operations."],
    ],
  },
  "/contact": {
    kicker: "Contact",
    title: "Tell us what you want to build.",
    desc: "Share your CRM, app, SEO, website, or custom software requirement. We’ll help shape the next step.",
    icon: MessageCircle,
    cta: { label: "Send enquiry", href: "#contact-form" },
    stats: [
      ["Free", "consultation"],
      ["Fast", "response"],
      ["Clear", "roadmap"],
    ],
    cards: [
      ["Call", "+91 9638544455", "tel:9638544455", Phone],
      ["Email", "support@anantsoftcomputing.com", "mailto:support@anantsoftcomputing.com", Mail],
      ["WhatsApp", "Message the team directly", "https://wa.me/919638544455", MessageCircle],
    ],
  },
  "/services/crm": {
    kicker: "CRM Development",
    title: "Custom CRM that your sales and operations team will use daily.",
    desc: "Centralize leads, customers, follow-ups, dashboards, payments, and team activity.",
    icon: Database,
    cta: { label: "Plan CRM", href: "/contact" },
    stats: [["Leads", "tracked"], ["Teams", "aligned"], ["Reports", "live"]],
    cards: [["Lead pipeline", "Track stages, owners, reminders, and conversions."], ["Dashboards", "See branch, team, and revenue performance."], ["Automation", "Reduce missed follow-ups and repetitive tasks."]],
  },
  "/services/mobile": {
    kicker: "Mobile Apps",
    title: "Mobile and PWA experiences designed for repeat use.",
    desc: "Business apps, customer apps, internal tools, and polished PWA interfaces.",
    icon: Smartphone,
    cta: { label: "Build app", href: "/contact" },
    stats: [["PWA", "ready"], ["Android", "apps"], ["iOS", "apps"]],
    cards: [["App UX", "Flows designed around speed, clarity, and thumb reach."], ["Offline-ready", "PWA features for install, cache, and repeat visits."], ["Admin connected", "Apps backed by dashboards and clean data."]],
  },
  "/services/seo": {
    kicker: "SEO Services",
    title: "SEO systems that improve visibility and conversion.",
    desc: "Technical SEO, content structure, local search, analytics, and continuous improvement.",
    icon: Search,
    cta: { label: "Grow traffic", href: "/contact" },
    stats: [["Technical", "SEO"], ["Local", "SEO"], ["Content", "strategy"]],
    cards: [["Audit", "Find crawl, speed, schema, and content gaps."], ["Roadmap", "Prioritize fixes that move traffic and leads."], ["Tracking", "Measure ranking, enquiries, and business outcomes."]],
  },
  "/services/custom": {
    kicker: "Custom Software",
    title: "Purpose-built platforms for unique business workflows.",
    desc: "ERP modules, portals, hospital systems, NGO systems, dashboards, and automation.",
    icon: Code2,
    cta: { label: "Scope project", href: "/contact" },
    stats: [["ERP", "modules"], ["Portal", "systems"], ["Cloud", "ready"]],
    cards: [["Discovery", "Map the real process before coding."], ["Prototype", "Validate the workflow early on mobile and desktop."], ["Launch", "Deploy, train, maintain, and improve."]],
  },
};

function findPage(pathname) {
  return pages[pathname] || null;
}

export default function MobilePublicPage() {
  const pathname = usePathname();
  const page = findPage(pathname);
  if (!page) return null;

  const Icon = page.icon || Rocket;

  return (
    <div className="mobile-route-page md:hidden">
      <section className="mobile-route-hero">
        <div className="mobile-route-icon">
          <Icon className="h-6 w-6" />
        </div>
        <span className="mobile-eyebrow">{page.kicker}</span>
        <h1>{page.title}</h1>
        <p>{page.desc}</p>
        <div className="mobile-route-actions">
          <Link href={page.cta.href} className="mobile-route-primary">
            {page.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="tel:9638544455" className="mobile-route-secondary">
            <Phone className="h-4 w-4" />
            Call
          </a>
        </div>
      </section>

      <section className="mobile-route-stats">
        {page.stats.map(([value, label]) => (
          <div key={`${value}-${label}`}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="mobile-route-list">
        {page.cards.map(([title, desc, href, CardIcon]) => {
          const RowIcon = CardIcon || CheckCircle2;
          const content = (
            <>
              <span className="mobile-route-card-icon">
                <RowIcon className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <strong>{title}</strong>
                <small>{desc}</small>
              </span>
              <ArrowRight className="h-5 w-5 text-gray-400" />
            </>
          );

          return href ? (
            <Link key={title} href={href} className="mobile-route-card">
              {content}
            </Link>
          ) : (
            <div key={title} className="mobile-route-card">
              {content}
            </div>
          );
        })}
      </section>

      {pathname === "/contact" && (
        <section id="contact-form" className="mobile-route-note">
          <h2>Quick enquiry</h2>
          <p>The full enquiry form is available on desktop. On mobile, call, email, or WhatsApp for the fastest response.</p>
        </section>
      )}

      <section className="mobile-route-note">
        <HeartHandshake className="h-7 w-7" />
        <h2>Need help choosing?</h2>
        <p>Tell us your current workflow and we’ll suggest the simplest system to build first.</p>
        <Link href="/contact">Start a conversation</Link>
      </section>
    </div>
  );
}

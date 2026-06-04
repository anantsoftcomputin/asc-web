"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  BriefcaseBusiness,
  FolderKanban,
  Home,
  MessageCircle,
  MoreHorizontal,
  Newspaper,
  Phone,
  Search,
  Settings,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";

const primaryItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: BriefcaseBusiness },
  { label: "Work", href: "/portfolio", icon: FolderKanban },
  { label: "Blog", href: "/blog", icon: Newspaper },
];

const moreItems = [
  { label: "About", href: "/about", icon: UserRound },
  { label: "Careers", href: "/careers", icon: Sparkles },
  { label: "Contact", href: "/contact", icon: MessageCircle },
  { label: "SEO", href: "/services/seo", icon: Search },
  { label: "CRM", href: "/services/crm", icon: Settings },
];

function isActivePath(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname?.startsWith(`${href}/`);
}

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <>
      <nav className="mobile-bottom-nav md:hidden" aria-label="Primary mobile navigation">
        <div className="mx-auto grid h-full max-w-md grid-cols-5 items-center px-2">
          {primaryItems.map((item) => {
            const Icon = item.icon;
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-bottom-nav__item ${active ? "mobile-bottom-nav__item--active" : ""}`}
              >
                <Icon className="h-5 w-5" strokeWidth={active ? 2.5 : 2} />
                <span>{item.label}</span>
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() => setIsMoreOpen(true)}
            className={`mobile-bottom-nav__item ${isMoreOpen ? "mobile-bottom-nav__item--active" : ""}`}
            aria-label="Open more navigation"
          >
            <MoreHorizontal className="h-5 w-5" />
            <span>More</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMoreOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-[70] bg-gray-950/35 backdrop-blur-[2px] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMoreOpen(false)}
            />
            <motion.div
              className="mobile-more-sheet md:hidden"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
            >
              <div className="mx-auto max-w-md">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-600">
                      AnantSoft
                    </p>
                    <h2 className="text-lg font-semibold text-gray-950">More options</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsMoreOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700"
                    aria-label="Close more navigation"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {moreItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMoreOpen(false)}
                        className="flex min-h-20 items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 text-gray-800 shadow-sm active:scale-[0.98]"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-semibold">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-4 rounded-xl bg-gray-950 p-4 text-white">
                  <p className="text-sm font-semibold">Talk to our team</p>
                  <p className="mt-1 text-xs text-gray-300">
                    Quick consultation for CRM, mobile apps, SEO, and custom software.
                  </p>
                  <a
                    href="tel:9638544455"
                    className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-gray-950"
                  >
                    <Phone className="h-4 w-4" />
                    Call now
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

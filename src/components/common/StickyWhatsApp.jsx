"use client";

import { FaWhatsapp } from "react-icons/fa";
import { whatsappAuditUrl } from "../../lib/growth-pages";

export default function StickyWhatsApp() {
  return (
    <a
      href={whatsappAuditUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 z-40 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-green-700 md:bottom-6"
      aria-label="Get Free Consultation on WhatsApp"
    >
      <FaWhatsapp className="h-5 w-5" />
      <span className="hidden sm:inline">Get Free Consultation</span>
    </a>
  );
}

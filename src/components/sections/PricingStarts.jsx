"use client";

import { Container } from "../common";
import { pricingStarts, whatsappAuditUrl } from "../../lib/growth-pages";

export default function PricingStarts() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Transparent Starting Points for Serious Planning
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Final pricing depends on scope, integrations, and timeline. These starting points help small businesses understand the investment range before a discovery call.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          {pricingStarts.map(([service, price]) => (
            <div key={service} className="grid grid-cols-2 border-b border-gray-100 px-5 py-4 last:border-b-0 md:px-7">
              <div className="font-medium text-gray-800">{service}</div>
              <div className="text-right font-semibold text-primary-700">{price}</div>
            </div>
          ))}
        </div>
        <a
          href={whatsappAuditUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
        >
          Discuss My Requirement
        </a>
      </Container>
    </section>
  );
}

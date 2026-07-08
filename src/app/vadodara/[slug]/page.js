import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/common/JsonLd";
import { findLocalSeoPage, localSeoPages, whatsappAuditUrl } from "../../../lib/growth-pages";

const BASE_URL = "https://anantsoft.com";

export function generateStaticParams() {
  return localSeoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const page = findLocalSeoPage(resolvedParams.slug);
  if (!page) notFound();

  return {
    title: `${page.title} | AnantSoftComputing`,
    description: page.description,
    alternates: { canonical: `${BASE_URL}/vadodara/${page.slug}` },
    openGraph: {
      title: `${page.title} | AnantSoftComputing`,
      description: page.description,
      url: `${BASE_URL}/vadodara/${page.slug}`,
      type: "website",
    },
  };
}

export default async function VadodaraPage({ params }) {
  const resolvedParams = await params;
  const page = findLocalSeoPage(resolvedParams.slug);
  if (!page) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    name: "AnantSoftComputing",
    url: `${BASE_URL}/vadodara/${page.slug}`,
    telephone: "+91-9638544455",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1C, Satyam Apartment, Aradhana Society, Vishwas Colony, Alkapuri",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390005",
      addressCountry: "IN",
    },
    areaServed: { "@type": "City", name: "Vadodara" },
    description: page.description,
  };

  return (
    <>
      <JsonLd data={schema} />
      <main className="bg-gray-50 pt-24">
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">Vadodara, Gujarat</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 md:text-6xl">{page.title}</h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">{page.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={whatsappAuditUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">
                Get Free Consultation
              </a>
              <Link href="/portfolio" className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-800 hover:bg-gray-50">
                See Our Work
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            ["Local discovery", "Pages and Google signals built around how Vadodara customers search."],
            ["Business workflows", "CRM, ERP, web, app, and automation systems adapted to your daily operations."],
            ["Lead conversion", "Clear CTAs, WhatsApp paths, enquiry forms, and reporting to turn traffic into conversations."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
              <p className="mt-3 text-gray-600">{body}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

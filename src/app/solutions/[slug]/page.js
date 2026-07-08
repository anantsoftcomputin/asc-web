import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/common/JsonLd";
import { caseStudies, findSolution, solutionPages, whatsappAuditUrl } from "../../../lib/growth-pages";

const BASE_URL = "https://anantsoft.com";

export function generateStaticParams() {
  return solutionPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const page = findSolution(resolvedParams.slug);
  if (!page) notFound();

  return {
    title: `${page.title} | AnantSoftComputing`,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: `${BASE_URL}/solutions/${page.slug}` },
    openGraph: {
      title: `${page.title} | AnantSoftComputing`,
      description: page.description,
      url: `${BASE_URL}/solutions/${page.slug}`,
      type: "website",
    },
  };
}

function SectionList({ title, items }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-gray-700">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function SolutionPage({ params }) {
  const resolvedParams = await params;
  const page = findSolution(resolvedParams.slug);
  if (!page) notFound();

  const relatedCaseStudy = caseStudies.find((study) => study.slug === page.relatedCaseStudy);
  const url = `${BASE_URL}/solutions/${page.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": url,
    name: page.title,
    description: page.description,
    url,
    provider: { "@id": `${BASE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Vadodara" },
      { "@type": "State", name: "Gujarat" },
      { "@type": "Country", name: "India" },
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      description: page.price,
      availability: "https://schema.org/InStock",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Solutions", item: `${BASE_URL}/solutions` },
        { "@type": "ListItem", position: 3, name: page.title, item: url },
      ],
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `Who is ${page.title} for?`,
          acceptedAnswer: { "@type": "Answer", text: page.audience.join(", ") },
        },
        {
          "@type": "Question",
          name: `How long does ${page.title} take to build?`,
          acceptedAnswer: { "@type": "Answer", text: page.timeline },
        },
        {
          "@type": "Question",
          name: `What is the starting price for ${page.title}?`,
          acceptedAnswer: { "@type": "Answer", text: page.price },
        },
      ],
    },
  };
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${url}#software`,
    name: page.title,
    description: page.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      description: page.price,
    },
    provider: { "@id": `${BASE_URL}/#organization` },
    featureList: page.features,
    audience: page.audience.map((name) => ({ "@type": "Audience", name })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={softwareSchema} />
      <main className="bg-gray-50 pt-24">
        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">{page.eyebrow}</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 md:text-6xl">{page.title}</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">{page.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={whatsappAuditUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">
                  Send Requirement on WhatsApp
                </a>
                {relatedCaseStudy && (
                  <Link href={`/case-studies/${relatedCaseStudy.slug}`} className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-800 hover:bg-gray-50">
                    View Related Case Study
                  </Link>
                )}
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-xl font-semibold text-gray-900">Project Snapshot</h2>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Timeline</dt>
                  <dd className="mt-1 text-lg font-semibold text-gray-900">{page.timeline}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Starting Price</dt>
                  <dd className="mt-1 text-lg font-semibold text-gray-900">{page.price}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Best For</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {page.audience.map((item) => (
                      <span key={item} className="rounded-full bg-white px-3 py-1 text-sm text-gray-700 ring-1 ring-gray-200">{item}</span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
          <SectionList title="Common Problems We Solve" items={page.problems} />
          <SectionList title="Features Included" items={page.features} />
          <SectionList title="Expected Outcomes" items={page.outcomes} />
        </section>

        {relatedCaseStudy && (
          <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="rounded-lg bg-gray-950 p-8 text-white md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-300">Proof</p>
                <h2 className="mt-3 text-3xl font-bold">{relatedCaseStudy.title}</h2>
                <p className="mt-4 max-w-3xl text-gray-300">{relatedCaseStudy.summary}</p>
                <Link href={`/case-studies/${relatedCaseStudy.slug}`} className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 font-semibold text-gray-950 hover:bg-gray-100">
                  Read Case Study
                </Link>
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">FAQ</h2>
          <div className="mt-8 space-y-5">
            {[
              [`Who is ${page.title} for?`, page.audience.join(", ")],
              [`How long does it take?`, page.timeline],
              [`What is the starting price?`, page.price],
            ].map(([question, answer]) => (
              <div key={question} className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-gray-900">{question}</h3>
                <p className="mt-2 text-gray-600">{answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

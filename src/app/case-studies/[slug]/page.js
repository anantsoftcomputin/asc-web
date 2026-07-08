import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/common/JsonLd";
import { caseStudies, findCaseStudy, whatsappAuditUrl } from "../../../lib/growth-pages";

const BASE_URL = "https://anantsoft.com";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const study = findCaseStudy(resolvedParams.slug);
  if (!study) notFound();

  return {
    title: `${study.title} | AnantSoftComputing`,
    description: study.summary,
    alternates: { canonical: `${BASE_URL}/case-studies/${study.slug}` },
    openGraph: {
      title: `${study.title} | AnantSoftComputing`,
      description: study.summary,
      url: `${BASE_URL}/case-studies/${study.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const resolvedParams = await params;
  const study = findCaseStudy(resolvedParams.slug);
  if (!study) notFound();

  const url = `${BASE_URL}/case-studies/${study.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.summary,
    url,
    publisher: { "@id": `${BASE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Case Studies", item: `${BASE_URL}/case-studies` },
        { "@type": "ListItem", position: 3, name: study.title, item: url },
      ],
    },
  };

  return (
    <>
      <JsonLd data={schema} />
      <main className="bg-white pt-24">
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">Case study</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 md:text-6xl">{study.title}</h1>
          <p className="mt-6 text-xl leading-8 text-gray-600">{study.summary}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={whatsappAuditUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">
              {study.cta}
            </a>
            <Link href="/portfolio" className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-800 hover:bg-gray-50">
              View Portfolio
            </Link>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            {[
              ["Problem", study.problem],
              ["What Client Needed", study.clientNeed],
              ["Tech Stack", study.techStack.join(", ")],
              ["Client Testimonial", study.testimonial],
            ].map(([title, body]) => (
              <div key={title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                <p className="mt-3 text-gray-600">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Features Developed</h2>
            <ul className="mt-6 space-y-3">
              {study.features.map((feature) => (
                <li key={feature} className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700 shadow-sm">{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Results</h2>
            <ul className="mt-6 space-y-3">
              {study.results.map((result) => (
                <li key={result} className="rounded-lg border border-primary-100 bg-primary-50 px-4 py-3 font-medium text-primary-900">{result}</li>
              ))}
            </ul>
          </div>
        </section>

        {study.screenshots?.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900">Screenshots & Product Views</h2>
              <p className="mt-3 max-w-3xl text-gray-600">
                Text-accessible walkthrough of the key screens and workflows created for this project.
              </p>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {study.screenshots.map((screenshot, index) => (
                  <div key={screenshot} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                    <div className="mb-4 flex h-32 items-center justify-center rounded-lg bg-gradient-to-br from-primary-50 to-secondary-50 text-3xl font-bold text-primary-200">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="text-gray-700">{screenshot}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default function PrivacyPolicySection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] overflow-hidden bg-gradient-to-b from-primary-100 via-white to-secondary-100">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute -top-4 -right-4 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative pt-32 text-center lg:pt-40">
          <div className="mx-auto max-w-4xl mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-dark sm:text-6xl md:text-7xl">
              <span className="block text-primary-600">Privacy Policy</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              We craft innovative software solutions that empower businesses
              to thrive in the digital age. From custom CRM systems to mobile
              applications, we bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"></div>

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="gap-12">
            <article className="max-w-5xl mx-auto">

              {/* Information We Collect */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-primary-600 mb-4">
                  Information We Collect
                </h2>
                <div className="prose prose-lg prose-gray max-w-none">
                  {[
                    "We collect information that you provide directly to us, including",
                    "Personal information (name, email address, phone number",
                    "Business information (company name, job title",
                    "Payment information (processed through secure third-party providers",
                    "Usage data and analytics",
                    "Device and browser information",
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckIcon />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-primary-600 mb-4">
                  How We Use Your Information
                </h2>
                <div className="prose prose-lg prose-gray max-w-none">
                  {[
                    "We use the collected information for",
                    "Providing and maintaining our services",
                    "Processing your transactions",
                    "Sending you important service updates",
                    "Improving our products and services",
                    "Analyzing usage patterns and trends",
                    "Protecting against fraud and abuse",
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckIcon />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Security */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-primary-600 mb-4">
                  Data Security
                </h2>
                <div className="prose prose-lg prose-gray max-w-none">
                  {[
                    "We implement industry-standard security measures to protect your data",
                    "Encryption of data in transit and at rest",
                    "Regular security assessments and audits",
                    "Access controls and authentication",
                    "Secure data centers and cloud infrastructure",
                    "Employee training on data protection",
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckIcon />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

            </article>
          </div>
        </div>
      </section>
    </>
  );
}

// Reusable check icon component (same SVG used repeatedly)
const CheckIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    viewBox="0 0 512 512"
    className="text-primary-600 flex-shrink-0"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
  </svg>
);

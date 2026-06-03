import PrivacyPolicySection from "./PrivacyPolicy";

export const metadata = {
  // Template → "Privacy Policy & Terms | AnantSoftComputing" (43 chars) ✓
  title: "Privacy Policy & Terms",
  description: "Read AnantSoftComputing's privacy policy & terms of use. Learn how we collect, use, and protect your personal data responsibly.",
  alternates: {
    canonical: 'https://anantsoft.com/privacy-policy',
  },
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    title: "Privacy Policy & Terms | AnantSoftComputing",
    description: "How AnantSoftComputing collects, uses, and protects your personal data.",
    url: 'https://anantsoft.com/privacy-policy',
    type: 'website',
  },
};

export default function Page() {
  return <PrivacyPolicySection />;
}

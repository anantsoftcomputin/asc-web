import './globals.css'
import Providers from '../providers/Providers'
import LayoutWrapper from '../components/layout/LayoutWrapper'

const BASE_URL = 'https://anantsoft.com';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'AnantSoftComputing – Custom Software Development & IT Services',
    template: '%s | AnantSoftComputing',
  },
  description: 'AnantSoftComputing delivers custom software development, CRM, ERP, mobile apps, SEO services and IT consulting for businesses across India and globally. Based in Vadodara, Gujarat.',
  keywords: [
    'custom software development', 'CRM development', 'ERP development',
    'mobile app development', 'SEO services', 'IT consulting',
    'software company Vadodara', 'software development India',
    'AnantSoftComputing', 'Anant Soft Computing'
  ],
  authors: [{ name: 'AnantSoftComputing', url: BASE_URL }],
  creator: 'AnantSoftComputing',
  publisher: 'AnantSoftComputing',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'AnantSoftComputing',
    title: 'AnantSoftComputing – Custom Software Development & IT Services',
    description: 'Custom software development, CRM, ERP, mobile apps and SEO services for businesses. Based in Vadodara, India.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'AnantSoftComputing – Software Development Company India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AnantSoftComputing – Custom Software Development & IT Services',
    description: 'Custom software development, CRM, ERP, mobile apps and SEO services for businesses.',
    images: ['/og-default.png'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  applicationName: 'AnantSoftComputing',
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'AnantSoft',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/asc-logo.png', type: 'image/png' },
    ],
    apple: [{ url: '/asc-logo.png', type: 'image/png' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  )
}

// src/components/layout/Footer.jsx
import Link from 'next/link'
import Container from './Container';
import ASCLogo from '../common/ASCLogo';

const Footer = () => {
  const navigation = {
    solutions: [
      { name: 'SEO Services', href: '/services#seo' },
      { name: 'CRM Development', href: '/services#crm' },
      { name: 'Mobile Apps', href: '/services#mobile' },
      { name: 'Custom Solutions', href: '/services#custom' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
    ],
    support: [
      { name: '1 C Satyam Apartment, Vishwas Colony Alkapuri, Vadodara - 390007', href: '#' },
      { name: 'Phone: 9638544455', href: '#' },
      { name: 'Email: support@anantsoftcomputing.com', href: '#' },
    ],
    social: [
      {
        name: 'LinkedIn',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        ),
      },
      {
        name: 'GitHub',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        ),
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-200" aria-labelledby="footer-heading">
      <div className="md:hidden">
        <div className="px-4 py-5 pb-28">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-primary-50/60 p-4 shadow-sm">
            <Link href="/" className="flex items-center gap-2">
              <ASCLogo markClassName="!w-28 !h-11" />
            </Link>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <a href="tel:9638544455" className="rounded-xl bg-white px-3 py-2 text-center text-xs font-bold text-gray-700 shadow-sm">
                Call
              </a>
              <Link href="/contact" className="rounded-xl bg-primary-700 px-3 py-2 text-center text-xs font-bold text-white shadow-sm">
                Enquire
              </Link>
              <a href="mailto:support@anantsoftcomputing.com" className="rounded-xl bg-white px-3 py-2 text-center text-xs font-bold text-gray-700 shadow-sm">
                Email
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-gray-600">
              <Link href="/services">Services</Link>
              <Link href="/portfolio">Work</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/privacy-policy">Privacy</Link>
            </div>

            <p className="mt-4 text-[0.7rem] font-medium text-gray-400">
              © {new Date().getFullYear()} Anant Soft Computing
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
      <Container>
        <div className="py-10 md:pb-12 lg:py-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <Link href="/" className="flex items-center">
                <ASCLogo markClassName="!w-36 !h-14" />
              </Link>
              <p className="text-gray-600 text-base">
                Transforming businesses through innovative software solutions and digital excellence.
              </p>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Solutions</h3>
                  <ul className="mt-4 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-base text-gray-600 hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-semibold text-gray-900">Company</h3>
                  <ul className="mt-4 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-base text-gray-600 hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Support</h3>
                  <ul className="mt-4 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-base text-gray-600 hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; {new Date().getFullYear()} Anant Soft Computing. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
      </div>
    </footer>
  );
};

export default Footer;

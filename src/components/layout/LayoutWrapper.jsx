'use client';

import { usePathname } from 'next/navigation';
import { Navbar, Footer } from './index';
import MobileBottomNav from './MobileBottomNav';
import MobilePublicPage from './MobilePublicPage';
import PWAInstallPrompt from '../common/PWAInstallPrompt';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');
  const isHomeRoute = pathname === '/';
  const mobileRoutePages = new Set([
    '/about',
    '/services',
    '/services/crm',
    '/services/mobile',
    '/services/seo',
    '/services/custom',
    '/portfolio',
    '/blog',
  ]);
  const hasMobileRoutePage = !isAdminRoute && mobileRoutePages.has(pathname);

  return (
    <>
      {!isAdminRoute && (
        <div className={isHomeRoute ? 'hidden md:block' : ''}>
          <Navbar />
        </div>
      )}
      <main className="flex-grow mobile-app-content">
        {hasMobileRoutePage && <MobilePublicPage />}
        <div className={hasMobileRoutePage ? 'hidden md:block' : ''}>{children}</div>
      </main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <MobileBottomNav />}
      {!isAdminRoute && <PWAInstallPrompt />}
    </>
  );
}

'use client';

import { usePathname } from 'next/navigation';
import { Navbar, Footer } from './index';
import MobileBottomNav from './MobileBottomNav';
import PWAInstallPrompt from '../common/PWAInstallPrompt';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <main className="flex-grow mobile-app-content">{children}</main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <MobileBottomNav />}
      {!isAdminRoute && <PWAInstallPrompt />}
    </>
  );
}

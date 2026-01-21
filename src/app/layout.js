'use client';

import './globals.css'       
import Providers from '../providers/Providers'
import { Navbar, Footer } from '../components/layout'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <html lang="en">
      <body>
        <Providers>
          {!isAdminRoute && <Navbar />}
          <main className="flex-grow">{children}</main>
          {!isAdminRoute && <Footer />}
        </Providers>
      </body>
    </html>
  )
}

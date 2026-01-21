"use client";

import { usePathname } from 'next/navigation';
import ProtectedRoute from '../../components/admin/ProtectedRoute';
import AdminSidebar from '../../components/admin/AdminSidebar';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  // Login page doesn't need protection or sidebar
  if (isLoginPage) {
    return <>{children}</>;
  }

  // All other admin pages are protected
  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-gray-50">
        <AdminSidebar />
        <main className="flex-1 overflow-y-auto lg:ml-64">
          <div className="p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}

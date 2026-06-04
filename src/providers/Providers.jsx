"use client";

import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import ServiceWorkerManager from "../components/common/ServiceWorkerManager";
import OfflineStatus from "../components/common/OfflineStatus";

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <ServiceWorkerManager />
      <OfflineStatus />
      {children}
    </AuthProvider>
  );
}

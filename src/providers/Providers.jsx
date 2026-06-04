"use client";

import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import ServiceWorkerCleanup from "../components/common/ServiceWorkerCleanup";

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <ServiceWorkerCleanup />
      {children}
    </AuthProvider>
  );
}

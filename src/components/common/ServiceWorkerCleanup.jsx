"use client";

import { useEffect } from "react";

function isLocalDevelopmentHost() {
  if (typeof window === "undefined") return false;

  return (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "0.0.0.0"
  );
}

export default function ServiceWorkerCleanup() {
  useEffect(() => {
    if (!isLocalDevelopmentHost() || !("serviceWorker" in navigator)) return;

    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        registration.unregister();
      });
    });
  }, []);

  return null;
}

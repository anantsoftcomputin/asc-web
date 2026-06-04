"use client";

import { useEffect } from "react";

function isLegacyWorker(scriptURL) {
  return (
    scriptURL.includes("dev-sw") ||
    scriptURL.includes("workbox") ||
    scriptURL.includes("vite") ||
    scriptURL.includes("@vite")
  );
}

export default function ServiceWorkerManager() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    if (process.env.NODE_ENV !== "production") {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => registration.unregister());
      });
      if ("caches" in window) {
        caches.keys().then((keys) => keys.forEach((key) => caches.delete(key)));
      }
      return;
    }

    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    };

    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        if (isLegacyWorker(registration.active?.scriptURL || "")) {
          registration.unregister();
        }
      });
    });

    if (document.readyState === "complete") {
      register();
      return;
    }

    window.addEventListener("load", register);
    return () => window.removeEventListener("load", register);
  }, []);

  return null;
}

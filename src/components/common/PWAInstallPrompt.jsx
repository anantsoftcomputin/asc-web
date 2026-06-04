"use client";

import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";
import ASCLogo from "./ASCLogo";

export default function PWAInstallPrompt() {
  const [installEvent, setInstallEvent] = useState(null);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const dismissedAt = Number(localStorage.getItem("asc-pwa-install-dismissed") || 0);
    const recentlyDismissed = Date.now() - dismissedAt < 1000 * 60 * 60 * 24 * 7;
    setDismissed(recentlyDismissed);

    const onBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallEvent(event);
      if (!recentlyDismissed) setDismissed(false);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
  }, []);

  const install = async () => {
    if (!installEvent) return;
    installEvent.prompt();
    await installEvent.userChoice;
    setInstallEvent(null);
    setDismissed(true);
  };

  const dismiss = () => {
    localStorage.setItem("asc-pwa-install-dismissed", String(Date.now()));
    setDismissed(true);
  };

  if (!installEvent || dismissed) return null;

  return (
    <div className="fixed inset-x-4 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] z-[65] mx-auto max-w-md rounded-2xl border border-primary-100 bg-white p-4 shadow-2xl shadow-primary-900/15 md:hidden">
      <div className="flex gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-600 text-white">
          <ASCLogo showWordmark={false} markClassName="!w-9 !h-5 text-white" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-gray-950">Install ASC</p>
          <p className="mt-1 text-xs leading-5 text-gray-600">
            Add it to your home screen for faster access and offline-friendly browsing.
          </p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={install}
              className="min-h-10 rounded-lg bg-primary-600 px-4 text-sm font-semibold text-white"
            >
              <Download className="mr-1 inline h-4 w-4" />
              Install
            </button>
            <button
              type="button"
              onClick={dismiss}
              className="min-h-10 rounded-lg bg-gray-100 px-4 text-sm font-semibold text-gray-700"
            >
              Later
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={dismiss}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-500"
          aria-label="Dismiss install prompt"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

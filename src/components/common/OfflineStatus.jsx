"use client";

import { useEffect, useState } from "react";
import { WifiOff } from "lucide-react";

export default function OfflineStatus() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const sync = () => setIsOffline(!navigator.onLine);
    sync();
    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    return () => {
      window.removeEventListener("online", sync);
      window.removeEventListener("offline", sync);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="fixed inset-x-4 top-4 z-[80] mx-auto flex max-w-md items-center gap-3 rounded-xl bg-gray-950 px-4 py-3 text-sm font-medium text-white shadow-xl md:hidden">
      <WifiOff className="h-5 w-5 text-secondary-300" />
      You are offline. Cached pages remain available.
    </div>
  );
}

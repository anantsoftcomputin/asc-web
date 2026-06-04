"use client";

import { useState } from "react";

export default function ASCLogo({ className = "", showWordmark = true, markClassName = "" }) {
  const [src, setSrc] = useState("/asc-logo.png");

  return (
    <span className={`inline-flex min-w-0 items-center gap-2 ${className}`}>
      <span className={`asc-logo-mark ${markClassName}`}>
        <img
          src={src}
          alt="ASC logo"
          onError={() => {
            if (src !== "/asc-logo.jpeg") setSrc("/asc-logo.jpeg");
          }}
        />
      </span>
      {showWordmark && (
        <span className="min-w-0">
          <span className="block truncate text-sm font-black leading-tight tracking-tight text-gray-950 md:text-lg">
            ASC
          </span>
          <span className="block truncate text-[0.65rem] font-bold leading-tight text-primary-700 md:text-xs">
            Anant Soft Computing
          </span>
        </span>
      )}
    </span>
  );
}

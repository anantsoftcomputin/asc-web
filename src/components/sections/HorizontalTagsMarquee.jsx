// HorizontalTagsMarquee.jsx
// Pure JavaScript (React JSX). Default speed set to 48s (production-like).
import React, { useEffect, useRef, useMemo, useState } from "react";

const DEFAULT_TAGS = [
  "Appointment Booking System",
  "Patient Management System",
  "Website For Doctors and Hospitals",
  "Learning Management System",
  "Attendance Tracking",
  "Website for Schools and Universities",
  "Education CRM",
  "Alumni Management System",
  "SEO",
  "Chatbot Development and Training",
  "Payment Gateway Integration",
  "Event Management Portal",
  "Loyalty Management System",
  "CRM",
  "Website",
];

/**
 * Track component (module scope)
 * - measures one copy width and writes CSS vars (--copy-width, --marquee-duration) on the track element
 * - hides the track until measurement is done to avoid flicker
 */
function Track({ tags, dir = "left", ariaLabel, duration = "75s" }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const copyRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // run only in browser
    if (typeof window === "undefined") return;

    const trackEl = trackRef.current;
    const copyEl = copyRef.current;
    if (!trackEl || !copyEl) return;

    let rafId = null;
    const setCopyWidth = () => {
      const w = copyEl.offsetWidth || 0;
      // If width is 0, do not mark ready yet (avoid showing a broken animation)
      if (w > 0) {
        trackEl.style.setProperty("--copy-width", `${w}px`);
        trackEl.style.setProperty("--marquee-duration", duration);
        // make visible once measured
        trackEl.style.visibility = "visible";
        setReady(true);
      } else {
        // still not measured; keep hidden
        trackEl.style.visibility = "hidden";
      }
    };

    // run initially (use rAF to wait for layout)
    rafId = requestAnimationFrame(setCopyWidth);

    const onResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(setCopyWidth);
    };

    window.addEventListener("resize", onResize);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, [tags, duration]);

  // initial style hidden to avoid 0px animation
  // trackRef style will be updated in effect when measurement completes
  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden whitespace-nowrap py-4"
      aria-label={ariaLabel}
      role="region"
    >
      <div
        ref={trackRef}
        className={`relative flex items-center pause-on-hover ${
          dir === "left" ? "animate-scroll-left-by-px" : "animate-scroll-right-by-px"
        }`}
        // hide until measurement completes
        style={{ visibility: "hidden" }}
        aria-hidden="true"
      >
        {/* First copy: measured */}
        <div ref={copyRef} className="inline-flex items-center min-w-max">
          {tags.map((t, i) => (
            <div
              key={`a-${i}`}
              className="flex-shrink-0 px-6 py-3 mr-4 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-gray-800 font-medium whitespace-nowrap">{t}</span>
            </div>
          ))}
        </div>

        {/* Second copy: identical */}
        <div className="inline-flex items-center min-w-max" aria-hidden="true">
          {tags.map((t, i) => (
            <div
              key={`b-${i}`}
              className="flex-shrink-0 px-6 py-3 mr-4 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-gray-800 font-medium whitespace-nowrap">{t}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Optional: you can show a loader or placeholder while not ready.
          Currently nothing shown until measurement completes. */}
    </div>
  );
}

export default function HorizontalTagsMarquee({ tags = DEFAULT_TAGS, speed = 75 }) {
  // stable reference to tags
  const stableTags = useMemo(() => tags, [tags]);
  const duration = `${speed}s`;

  return (
    <div className="w-full space-y-6">
      <div className="w-full">
        <Track tags={stableTags} dir="left" ariaLabel="tags marquee top" duration={duration} />
      </div>

      <div className="w-full">
        <Track tags={stableTags} dir="right" ariaLabel="tags marquee bottom" duration={duration} />
      </div>
    </div>
  );
}

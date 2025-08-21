"use client";
import React, { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      title="Go to top (double-click to go home)"
      onClick={() => {
        if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      onDoubleClick={() => {
        if (typeof window !== "undefined") window.location.href = "/";
      }}
  className="fixed right-6 bottom-6 z-50 w-14 h-14 rounded-full bg-[var(--accent)] text-white flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 opacity-100"
      aria-label="Scroll to top or go home"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

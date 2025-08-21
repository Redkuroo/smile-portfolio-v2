"use client";
import React, { useEffect, useState } from "react";
import { HiChevronUp } from "react-icons/hi";

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
      title="Go to top (double-click to restart)"
      onClick={() => {
        if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      onDoubleClick={() => {
        if (typeof window !== "undefined") window.location.href = "/";
      }}
  className="fixed right-6 bottom-6 z-50 w-14 h-14 rounded-full bg-[var(--accent)] text-white flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 opacity-100 cursor-pointer animate-[fade-in_300ms_ease]"
      aria-label="Scroll to top or restart"
    >
  <HiChevronUp className="h-6 w-6" aria-hidden />
    </button>
  );
}

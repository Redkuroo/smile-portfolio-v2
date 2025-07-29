"use client";
import React, { useState, useEffect, useRef } from "react";

export default function LoadingScreen() {
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const frameRef = useRef(null);
  const startTimeRef = useRef(null);

  const duration = 4000; // Total loading time (ms)

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min((elapsed / duration) * 100, 100);
      setPercent(progress);

      if (progress < 100) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setIsFadingOut(true);
        setTimeout(() => setIsVisible(false), 700); // Wait for fade-out
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      aria-label="Loading screen"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0a1026] to-[#181c2f] overflow-hidden transition-opacity duration-700 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[var(--accent)] rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[var(--accent)] rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[var(--accent)] rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[var(--accent)] rounded-br-lg" />

      {/* Glowing Icon */}
      <div className="relative mb-8">
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[var(--accent)] to-[#6d3bbd] flex items-center justify-center shadow-2xl animate-glow">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2H8C6.34315 2 5 3.34315 5 5V8C5 9.65685 6.34315 11 8 11H12V2Z" fill="white"/>
            <path d="M12 11H8C6.34315 11 5 12.3431 5 14V17C5 18.6569 6.34315 20 8 20H12V11Z" fill="white"/>
            <path d="M19 5C19 3.34315 17.6569 2 16 2H12V11H16C17.6569 11 19 9.65685 19 8V5Z" fill="white"/>
            <path d="M19 14C19 12.3431 17.6569 11 16 11H12V20H16C17.6569 20 19 18.6569 19 17V14Z" fill="white"/>
            <path d="M12 11H16C17.6569 11 19 12.3431 19 14V17C19 18.6569 17.6569 20 16 20H12V11Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Name and Subtitle */}
      <h1 className="text-3xl md:text-5xl font-bold mb-2 text-center bg-gradient-to-r from-[var(--accent)] via-[#ff5961ff] to-[#bd3b46ff] bg-clip-text text-transparent">
        John Smile <span className="text-[var(--accent)]">Mella</span>
      </h1> 
      <p className="text-lg md:text-xl text-gray-200 mb-8 text-center font-mono tracking-wide">
        <span className="text-base font-normal text-gray-300 ml-2 light:text-gray-600">specializing in <span className="font-bold text-white light:text-[#18191A]">UI/UX Design</span>,</span>
        <span className="text-base font-normal text-gray-300 ml-2 light:text-gray-600">crafting <span className="font-bold text-white light:text-[#18191A]">user-centered experiences</span></span>
      </p>

      {/* Progress Bar */}
      <div className="w-72 max-w-full mb-4">
        <div className="h-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-[#bd3b46ff] relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-2 bg-white/40"
            style={{
              width: `${percent}%`,
              transition: "width 0.1s linear",
            }}
          />
        </div>
      </div>

      {/* Percentage */}
      <div className="text-xl font-bold text-[var(--accent)] mb-2">
        {Math.floor(percent)}%
      </div>

      {/* Bouncing Dots */}
      <div className="flex gap-2 justify-center">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-3 h-3 bg-[var(--accent)] rounded-full inline-block animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      {/* Embedded Styles */}
      <style jsx>{`
        .animate-glow {
          box-shadow: 0 0 60px 10px #ff5961ff, 0 0 120px 40px #bd3b46ff;
          animation: glow 2s alternate infinite;
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 60px 10px #ff5961ff, 0 0 120px 40px #bd3b46ff;
          }
          100% {
            box-shadow: 0 0 80px 20px #ff5961ff, 0 0 160px 60px #bd3b46ff;
          }
        }
      `}</style>
    </div>
  );
}

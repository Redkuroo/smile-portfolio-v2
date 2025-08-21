"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";

// Enhanced custom cursor with improved performance, visual effects, and interactions
// Features: hover effects, click ripples, magnetic attraction, smooth interpolation

export default function EnhancedCustomCursor() {
  const cursorRef = useRef(null);
  const streaksRef = useRef(null);
  const rafRef = useRef(null);
  const lastPos = useRef({ x: 0, y: 0, t: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const lerp = useCallback((start, end, factor) => {
    return start + (end - start) * factor;
  }, []);

  useEffect(() => {
    // Don't run on touch devices
    if (typeof window === "undefined") return;
    const mq = window.matchMedia && window.matchMedia("(pointer: coarse)");
    if (mq && mq.matches) return;

    // Add global cursor hiding styles immediately and mark for cleanup
    const styleElement = document.createElement('style');
    styleElement.setAttribute('data-cursor-styles', 'true');
    styleElement.innerHTML = `
      *, *::before, *::after {
        cursor: none !important;
      }
      html, body {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleElement);

    const cursor = cursorRef.current;
    const streaks = streaksRef.current;
    if (!cursor || !streaks) return;

    // Initialize positions
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    currentPos.current = { x: centerX, y: centerY };
    targetPos.current = { x: centerX, y: centerY };

    function createStreak(x, y, speed, angle) {
      const el = document.createElement("div");
      el.className = "custom-cursor-streak";
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`;
      
      // Dynamic streak properties based on speed
      const len = Math.min(2.5, speed * 3);
      const opacity = Math.min(1, speed * 0.8);
      el.style.setProperty("--len", String(len));
      el.style.setProperty("--opacity", String(opacity));
      
      streaks.appendChild(el);
      
      setTimeout(() => {
        if (el.parentNode) el.remove();
      }, 400);
    }

    function createClickRipple(x, y) {
      const el = document.createElement("div");
      el.className = "custom-cursor-ripple";
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      streaks.appendChild(el);
      
      setTimeout(() => {
        if (el.parentNode) el.remove();
      }, 600);
    }

    function onMove(e) {
      const x = e.clientX;
      const y = e.clientY;
      targetPos.current = { x, y };

      const now = performance.now();
      const dt = Math.max(1, now - lastPos.current.t);
      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy) / dt;

      // Create streaks with improved conditions
      if (speed > 0.3 && dt < 50) {
        const angle = Math.atan2(dy, dx);
        createStreak(x, y, speed, angle);
      }

      lastPos.current = { x, y, t: now };
    }

    function onMouseDown(e) {
      setIsClicking(true);
      createClickRipple(e.clientX, e.clientY);
      
      setTimeout(() => setIsClicking(false), 150);
    }

    function checkHoverElements() {
      const elements = document.elementsFromPoint(currentPos.current.x, currentPos.current.y);
      const isOverInteractive = elements.some(el => {
        const tag = el.tagName.toLowerCase();
        const role = el.getAttribute('role');
        const cursor = window.getComputedStyle(el).cursor;
        
        return tag === 'a' || 
               tag === 'button' || 
               tag === 'input' || 
               tag === 'textarea' || 
               tag === 'select' ||
               el.onclick ||
               role === 'button' ||
               cursor === 'pointer' ||
               el.hasAttribute('data-cursor-hover');
      });
      
      setIsHovered(isOverInteractive);
    }

    function render() {
      // Smooth interpolation for cursor position
      const lerpFactor = 0.15;
      currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, lerpFactor);
      currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, lerpFactor);
      
      cursor.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      
      // Check for hoverable elements
      checkHoverElements();
      
      rafRef.current = requestAnimationFrame(render);
    }

    // Event listeners
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    
    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onMouseDown);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      
      // Clean up the injected styles
      const injectedStyles = document.querySelector('style[data-cursor-styles]');
      if (injectedStyles) {
        injectedStyles.remove();
      }
      
      // Restore default cursors
      document.documentElement.style.cursor = '';
      document.body.style.cursor = '';
    };
  }, [lerp]);

  // Render cursor UI into document.body so it overlays any app content or modals
  if (typeof document === "undefined") return null;

  const portalContent = (
    <>
      <div ref={streaksRef} aria-hidden className="pointer-events-none fixed inset-0 z-[9998]"></div>
      <div
        ref={cursorRef}
        aria-hidden
        className={`custom-cursor pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 ${
          isHovered ? 'hovered' : ''
        } ${isClicking ? 'clicking' : ''}`}
      />

      <style>{`
        /* Hide default cursor globally */
        html, body, *, *::before, *::after {
          cursor: none !important;
        }
        
        /* Ensure cursor works across all elements */
        html {
          cursor: none !important;
        }
        
        /* Force cursor hiding on common elements */
        a, button, input, textarea, select, [role="button"] {
          cursor: none !important;
        }

        .custom-cursor {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: radial-gradient(
            circle at 35% 35%, 
            rgba(255,255,255,1) 0%, 
            rgba(255,80,80,0.98) 15%, 
            rgba(220,38,38,0.95) 40%, 
            rgba(185,28,28,0.9) 70%,
            rgba(127,29,29,0.8) 100%
          );
          box-shadow: 
            0 0 30px rgba(239,68,68,0.8),
            0 0 60px rgba(239,68,68,0.4),
            0 3px 20px rgba(0,0,0,0.3),
            inset 0 2px 4px rgba(255,255,255,0.6),
            0 0 0 2px rgba(255,255,255,0.9);
          transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
          backdrop-filter: blur(1px);
          z-index: 999999;
          position: fixed;
        }

        .custom-cursor.hovered {
          transform: translate(-50%, -50%) scale(2.2);
          background: radial-gradient(
            circle at 35% 35%, 
            rgba(255,255,255,1) 0%, 
            rgba(255,100,100,1) 20%, 
            rgba(239,68,68,0.95) 50%, 
            rgba(185,28,28,0.8) 80%,
            rgba(127,29,29,0.5) 100%
          );
          box-shadow: 
            0 0 40px rgba(239,68,68,0.8),
            0 0 80px rgba(239,68,68,0.4),
            0 4px 25px rgba(0,0,0,0.25),
            inset 0 2px 5px rgba(255,255,255,0.7);
          border-color: rgba(255,255,255,1);
        }

        .custom-cursor.clicking {
          transform: translate(-50%, -50%) scale(0.9);
          background: radial-gradient(
            circle at 35% 35%, 
            rgba(255,255,255,1) 0%, 
            rgba(255,120,120,1) 25%, 
            rgba(248,113,113,1) 50%, 
            rgba(220,38,38,0.9) 80%,
            rgba(185,28,28,0.7) 100%
          );
          box-shadow: 
            0 0 60px rgba(239,68,68,1),
            0 0 120px rgba(239,68,68,0.6),
            0 2px 20px rgba(0,0,0,0.3),
            inset 0 2px 8px rgba(255,255,255,0.8);
          border-color: rgba(255,255,255,1);
        }

        .custom-cursor-streak {
          position: fixed;
          left: 0;
          top: 0;
          width: calc(32px * var(--len));
          height: 5px;
          background: linear-gradient(
            90deg, 
            rgba(255,255,255,var(--opacity, 0.9)) 0%,
            rgba(255,100,100,var(--opacity, 0.95)) 30%,
            rgba(239,68,68,var(--opacity, 0.9)) 60%,
            rgba(239,68,68,0) 100%
          );
          border-radius: 999px;
          transform-origin: 0 50%;
          opacity: var(--opacity, 0.9);
          pointer-events: none;
          z-index: 9998;
          animation: streak-fade 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          filter: blur(0.3px);
          box-shadow: 0 0 8px rgba(239,68,68,0.4);
        }

        .custom-cursor-ripple {
          position: fixed;
          left: 0;
          top: 0;
          width: 25px;
          height: 25px;
          border: 3px solid rgba(239,68,68,0.9);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 9998;
          animation: ripple-expand 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          box-shadow: 0 0 20px rgba(239,68,68,0.3);
        }

        @keyframes streak-fade {
          0% { 
            opacity: var(--opacity, 0.95); 
            transform: translate3d(0,0,0) scaleX(var(--len));
            filter: blur(0px);
          }
          50% {
            opacity: calc(var(--opacity, 0.95) * 0.7);
          }
          100% { 
            opacity: 0; 
            transform: translate3d(8px,0,0) scaleX(0.3);
            filter: blur(1px);
          }
        }

        @keyframes ripple-expand {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 1;
            border-width: 3px;
          }
          50% {
            opacity: 0.6;
            border-width: 2px;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
            border-width: 1px;
          }
        }

        /* Prevent text selection during cursor interactions */
        .custom-cursor.clicking ~ * {
          user-select: none;
        }
      `}</style>
    </>
  );

  return createPortal(portalContent, document.body);
}
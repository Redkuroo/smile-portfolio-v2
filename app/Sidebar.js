"use client";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

const socials = [
  { href: "#", label: "Facebook", icon: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H6v4h4v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  ) },
  { href: "#", label: "LinkedIn", icon: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/></svg>
  ) },
  { href: "#", label: "Instagram", icon: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
  ) },
  { href: "#", label: "GitHub", icon: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
  ) },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full h-16 bg-black flex items-center justify-between px-4 z-50 shadow-lg">
        <button onClick={toggleTheme} className="text-[var(--accent)] hover:text-white transition mr-2">
          {theme === 'dark' ? (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 16v2m11-11h-2M3 12H1m16.95 6.95-1.41-1.41M6.46 6.46 5.05 5.05m12.02 0-1.41 1.41M6.46 17.54l-1.41 1.41"/></svg>
          ) : (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
          )}
        </button>
        <button onClick={() => setOpen(!open)} className="text-white focus:outline-none">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="7" x2="24" y2="7"/><line x1="4" y1="14" x2="24" y2="14"/><line x1="4" y1="21" x2="24" y2="21"/></svg>
        </button>
      </div>
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-screen w-16 flex flex-col items-center bg-black/90 border-r border-gray-800 z-50 shadow-lg transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:flex`}>
        {/* Light/Dark Toggle */}
        <button onClick={toggleTheme} className="mt-6 mb-4 text-[var(--accent)] hover:text-white transition">
          {theme === 'dark' ? (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 16v2m11-11h-2M3 12H1m16.95 6.95-1.41-1.41M6.46 6.46 5.05 5.05m12.02 0-1.41 1.41M6.46 17.54l-1.41 1.41"/></svg>
          ) : (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
          )}
        </button>
        <div className="flex flex-col flex-1 justify-center gap-20 w-full items-center">
          {/* Nav Links */}
          <nav className="flex flex-col gap-12 w-full items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-gray-300 font-semibold text-sm px-2 py-2 w-full flex justify-center items-center rounded transition-colors duration-200"
              >
                <span className="block -rotate-90 whitespace-nowrap tracking-wide transition-colors duration-200 group-hover:text-[var(--accent)]">
                  {link.label}
                </span>
                {/* Animated vertical bar indicator */}
                <span className="absolute left-1 top-1/2 -translate-y-1/2 h-6 w-1 bg-[var(--accent)] rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              </Link>
            ))}
          </nav>
        </div>
        {/* Social Icons */}
        <div className="flex flex-col gap-6 mb-8 items-center">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-gray-400 hover:text-[var(--accent)] transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </aside>
      {/* Overlay for mobile when sidebar is open */}
      {open && <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={() => setOpen(false)} />}
    </>
  );
} 
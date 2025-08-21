"use client";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaBehance, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

const socials = [
  { href: "https://www.facebook.com/js.mella.9", label: "Facebook", icon: <FaFacebookF size={22} /> },
  { href: "https://www.linkedin.com/in/john-smile-mella-064a12347/", label: "LinkedIn", icon: <FaLinkedinIn size={22} /> },
  { href: "https://www.instagram.com/j_smileeeee/", label: "Instagram", icon: <FaInstagram size={22} /> },
  { href: "https://github.com/Redkuroo", label: "GitHub", icon: <FaGithub size={22} /> },
  { href: "https://www.behance.net/smilemella", label: "Behance", icon: <FaBehance size={22} /> },
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
            <FaSun size={22} />
          ) : (
            <FaMoon size={22} />
          )}
        </button>
        <button
          onClick={() => setOpen(!open)}
          className="text-white focus:outline-none"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-screen w-16 flex flex-col items-center bg-black/90 border-r border-gray-800 z-50 shadow-lg transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full "} md:translate-x-0 md:flex `}>
        {/* Light/Dark Toggle */}
        <button onClick={toggleTheme} className="mt-6 mb-4 text-[var(--accent)] hover:text-white transition cursor-pointer ">
          {theme === 'dark' ? (
            <FaSun size={22} />
          ) : (
            <FaMoon size={22} />
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
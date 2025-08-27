"use client"
import React from 'react'
import { FiMail, FiPhone } from 'react-icons/fi'

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#certificates', label: 'Certificates' },
  ]
  const social = [
    { href: 'https://www.facebook.com/js.mella.9', label: 'Facebook' },
    { href: 'https://www.linkedin.com/in/john-smile-mella-064a12347/', label: 'LinkedIn' },
    { href: 'https://www.instagram.com/j_smileeeee/', label: 'Instagram' },
    { href: 'https://github.com/Redkuroo', label: 'Github' },
    { href: 'https://www.behance.net/smilemella', label: 'Behance' },
  ]
  const legal = ['Terms of service', 'Privacy policy', 'Cookie policy']

  // Cal.com scheduling link — override with NEXT_PUBLIC_CAL_LINK in .env
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || 'https://cal.com/your-username'

  function openCal(e) {
  if (e && e.preventDefault) e.preventDefault()
  if (typeof window === 'undefined') return
  const w = window.open(calLink, '_blank', 'noopener,noreferrer')
  try { if (w) w.focus() } catch (err) {}
  }

  return (
  <footer className="mt-16" role="contentinfo">
    <h2 className="sr-only">Footer</h2>
      {/* Outer rounded card to match the screenshot */}
  <div className="max-w-6xl mx-auto px-6">
  <div
    className="bg-[rgba(255,255,255,0.02)] rounded-3xl overflow-hidden shadow-lg ring-1 ring-gray-100"
    role="region"
    aria-label="Call to action"
    style={{ boxShadow: '0 10px 30px rgba(2,6,23,0.6), inset 0 1px 0 rgba(255,255,255,0.02)' }}
  >
          {/* Top CTA */}
          <div className="py-12 px-10 text-center">
            <h3 className="text-4xl font-extrabold" style={{ color: 'var(--foreground)' }}>Let’s Collaborate</h3>
            <p className="mt-2 text-sm" style={{ color: 'rgba(237,237,237,0.8)' }}>Arrange a time to discuss your goals and turn your project into success.</p>

            <form className="mt-6 flex items-center justify-center gap-3 max-w-xl mx-auto" onSubmit={openCal}>
              <button
                type="submit"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-white px-4 py-2 text-sm font-medium shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none transition-transform transform hover:scale-105"
                style={{ background: 'var(--accent)', boxShadow: '0 6px 18px rgba(255,89,89,0.12)' }}
                aria-label="Book a meeting"
              >
                Book a meeting
              </button>
              <noscript className="sr-only">
                <a href={calLink} target="_blank" rel="noopener noreferrer">Book a meeting</a>
              </noscript>
            </form>
          </div>
        </div>
      </div>

      {/* Full-width dark footer section (inner content constrained) */}
      <div className="w-full mt-6" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>John Smile</div>
              </div>

              <address className="mt-6 not-italic text-sm text-gray-400 space-y-2">
                <div>Davao City</div>
                <div>Philippines</div>
        
              </address>
              <div className="mt-6 text-sm" style={{ color: 'rgba(237,237,237,0.75)' }}>
                <div className="flex items-center gap-3">
                  <FiMail className="w-4 h-4" aria-hidden />
                  <div>
                    <div className="text-xs">Email</div>
                    <a href="mailto:02jsmella@gmail.com" className="font-medium hover:underline" style={{ color: 'var(--foreground)' }}>02jsmella@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm" style={{ color: 'rgba(237,237,237,0.75)' }}>
                <div className="flex items-center gap-3">
                  <FiPhone className="w-4 h-4" aria-hidden />
                  <div>
                    <div className="text-xs">Mobile</div>
                    <div className="font-medium" style={{ color: 'var(--foreground)' }}>0938 700 6898</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 flex justify-end">
              <div className="w-full max-w-sm sm:max-w-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-right">
                  <nav aria-label="Quick links">
                    <h4 className="text-sm font-semibold">Quick links</h4>
                    <ul role="list" className="mt-4 space-y-2 text-sm" style={{ color: 'rgba(237,237,237,0.75)' }}>
                      {quickLinks.map((l) => (
                          <li key={l.label}><a href={l.href} style={{ color: 'inherit' }} className="hover:underline focus:outline-none focus-visible:underline">{l.label}</a></li>
                        ))}
                    </ul>
                  </nav>

                  <nav aria-label="Social links">
                    <h4 className="text-sm font-semibold">Social</h4>
                    <ul className="mt-4 space-y-2 text-sm" style={{ color: 'rgba(237,237,237,0.75)' }}>
                      {social.map((s) => (
                            <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }} className="hover:underline focus:outline-none" aria-label={s.label}>{s.label}</a></li>
                          ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <div className="pt-6 text-center text-xs" style={{ color: 'rgba(237,237,237,0.55)' }}>
              © {new Date().getFullYear()} John Smile. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

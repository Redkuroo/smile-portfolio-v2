import React from 'react'

export default function Footer() {
  const quickLinks = ['Home', 'About', 'Experience', 'Projects', 'Certificates']
  const social = ['Facebook', 'LinkedIn', 'Instagram', 'Github', 'Behance']
  const legal = ['Terms of service', 'Privacy policy', 'Cookie policy']

  return (
    <footer className="mt-16">
      {/* Outer rounded card to match the screenshot */}
      <div className="max-w-6xl mx-auto px-6">
  <div className="bg-[rgba(255,255,255,0.02)] rounded-3xl overflow-hidden shadow-lg ring-1 ring-gray-100">
          {/* Top CTA */}
          <div className="py-12 px-10 text-center">
            <h3 className="text-4xl font-extrabold" style={{ color: 'var(--foreground)' }}>Let’s Collaborate</h3>
            <p className="mt-2 text-sm" style={{ color: 'rgba(237,237,237,0.8)' }}>Arrange a time to discuss your goals and turn your project into success.</p>

            <form className="mt-6 flex items-center justify-center gap-3 max-w-xl mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email address"
                className="w-full max-w-lg rounded-md border bg-transparent px-4 py-2 text-sm shadow-sm focus:outline-none"
                style={{ color: 'var(--foreground)', borderColor: 'rgba(255,255,255,0.04)' }}
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-white px-4 py-2 text-sm font-medium shadow-sm"
                style={{ background: 'var(--accent)' }}
              >
                Get started
              </button>
            </form>

        
          </div>

          {/* End of centered white card */}
        </div>
      </div>

      {/* Full-width dark footer section (inner content constrained) */}
      <div className="w-full mt-6" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
        <div className="max-w-6xl mx-auto px-8 py-12">
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
                <div>Phone number</div>
                <div className="font-medium" style={{ color: 'var(--foreground)' }}>09387006898</div>
              </div>
              <div className="mt-6 text-sm" style={{ color: 'rgba(237,237,237,0.75)' }}>
                <div>Telephone number</div>
                <div className="font-medium" style={{ color: 'var(--foreground)' }}>(082) 296 3377</div>
              </div>

              <div className="mt-3 text-sm" style={{ color: 'rgba(237,237,237,0.75)' }}>
                <div>Email</div>
                <a href="mailto:support@skipmatrix.com" className="text-gray-100 hover:underline">02jsmella@gmail.com</a>
              </div>
            </div>

            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
        <h4 className="text-sm font-semibold">Quick links</h4>
        <ul className="mt-4 space-y-2 text-sm" style={{ color: 'rgba(237,237,237,0.75)' }}>
                  {quickLinks.map((l) => (
          <li key={l}><a href="#" style={{ color: 'inherit' }} className="hover:underline">{l}</a></li>
                  ))}
                </ul>
              </div>

              <div>
        <h4 className="text-sm font-semibold">Social</h4>
        <ul className="mt-4 space-y-2 text-sm" style={{ color: 'rgba(237,237,237,0.75)' }}>
                  {social.map((s) => (
          <li key={s}><a href="#" style={{ color: 'inherit' }} className="hover:underline">{s}</a></li>
                  ))}
                </ul>
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

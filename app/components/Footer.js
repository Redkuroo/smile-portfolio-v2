import React from 'react'

export default function Footer() {
  const quickLinks = ['Pricing', 'Resources', 'About us', 'FAQ', 'Contact us']
  const social = ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'Youtube']
  const legal = ['Terms of service', 'Privacy policy', 'Cookie policy']

  return (
    <footer className="mt-16">
      {/* Outer rounded card to match the screenshot */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-100">
          {/* Top CTA */}
          <div className="py-12 px-10 text-center">
            <h3 className="text-3xl font-extrabold" style={{ color: 'var(--foreground)' }}>Subscribe to our newsletter</h3>
            <p className="mt-2 text-sm" style={{ color: 'rgba(237,237,237,0.8)' }}>Sign up today and get a free sample up to 100 records.</p>

            <form className="mt-6 flex items-center justify-center gap-3 max-w-xl mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email address"
                className="w-full max-w-lg rounded-md border border-gray-700 bg-transparent px-4 py-2 text-sm shadow-sm focus:outline-none"
                style={{ color: 'var(--foreground)', borderColor: 'rgba(255,255,255,0.06)' }}
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-white px-4 py-2 text-sm font-medium shadow-sm"
                style={{ background: 'var(--accent)' }}
              >
                Get started
              </button>
            </form>

            <p className="mt-4 text-xs flex items-center justify-center gap-2" style={{ color: 'rgba(237,237,237,0.65)' }}>
              <span>Our experts are ready to help</span>
              <span className="flex -space-x-2">
                <img src="/github.svg" alt="avatar" className="w-6 h-6 rounded-full border-2 border-white bg-gray-100" />
                <img src="/linkedin.svg" alt="avatar" className="w-6 h-6 rounded-full border-2 border-white bg-gray-100" />
                <img src="/email.svg" alt="avatar" className="w-6 h-6 rounded-full border-2 border-white bg-gray-100" />
              </span>
            </p>
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
                <div className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>skipmatrix</div>
              </div>

              <address className="mt-6 not-italic text-sm text-gray-400 space-y-2">
                <div>20619 Torrence Chapel Rd</div>
                <div>Suite 110 #400</div>
                <div>Cornelius, NC 28031</div>
                <div>United States</div>
              </address>

              <div className="mt-6 text-sm" style={{ color: 'rgba(237,237,237,0.75)' }}>
                <div>Phone number</div>
                <div className="font-medium" style={{ color: 'var(--foreground)' }}>1-800-201-1019</div>
              </div>

              <div className="mt-3 text-sm" style={{ color: 'rgba(237,237,237,0.75)' }}>
                <div>Email</div>
                <a href="mailto:support@skipmatrix.com" className="text-gray-100 hover:underline">support@skipmatrix.com</a>
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

              <div>
        <h4 className="text-sm font-semibold">Legal</h4>
        <ul className="mt-4 space-y-2 text-sm" style={{ color: 'rgba(237,237,237,0.75)' }}>
                  {legal.map((t) => (
          <li key={t}><a href="#" style={{ color: 'inherit' }} className="hover:underline">{t}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <div className="pt-6 text-center text-xs" style={{ color: 'rgba(237,237,237,0.55)' }}>
              © {new Date().getFullYear()} Skipmatrix. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

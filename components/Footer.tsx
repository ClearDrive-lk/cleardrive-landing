import React from 'react';
import Link from 'next/link';

// ==========================================
// 1. DATA & CONFIGURATION
// ==========================================

const FOOTER_SECTIONS = [
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Guides', href: '/guides' },
      { label: 'Support', href: '/support' },
      { label: 'Help center', href: '/help' },
      { label: 'Community', href: '/community' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'Compliance', href: '/compliance' },
      { label: 'Policies', href: '/policies' },
    ],
  },
];

const SOCIAL_LINKS = [
  { href: '#', icon: <FacebookIcon />, label: 'Facebook' },
  { href: '#', icon: <InstagramIcon />, label: 'Instagram' },
  { href: '#', icon: <TwitterIcon />, label: 'Twitter' },
  { href: '#', icon: <LinkedinIcon />, label: 'LinkedIn' },
  { href: '#', icon: <YoutubeIcon />, label: 'YouTube' },
];

// ==========================================
// 2. ICON COMPONENTS
// ==========================================

function FacebookIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
  );
}

// ==========================================
// 3. FOOTER COMPONENT
// ==========================================

function Footer() {
  return (
    <footer className="bg-[#f3f1eb] text-gray-800 py-16 px-6 md:px-16 rounded-b-[30px] font-sans mx-4 mb-4">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Top Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Loop through the first 3 columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-base mb-6 text-black">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-gray-600 hover:text-[#ff6b35] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Subscribe */}
          <div className="flex flex-col">
            <h4 className="font-bold text-base mb-6 text-black">Subscribe</h4>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Stay updated on the latest vehicle import insights and offers
            </p>
            <form className="flex flex-col sm:flex-row gap-3 items-center w-full">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-[#e5e5e5] border-2 border-[#ff6b35] rounded-full px-5 py-3 outline-none text-gray-700 placeholder-gray-500 focus:bg-white transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#ff6b35] hover:bg-[#e85a2a] text-white font-semibold rounded-full px-8 py-3 transition-colors duration-200"
              >
                Submit
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              By subscribing, you agree to our privacy policy and email terms
            </p>
          </div>
        </div>

        {/* --- Divider --- */}
        <div className="w-full h-[2px] bg-[#ff6b35] mb-8" />

        {/* --- Bottom Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-900 font-medium">
          
          {/* Left: Copyright & Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span>&copy; 2025 ClearDrive.lk. All rights reserved</span>
            <div className="flex gap-6">
              <Link href="/privacy" className="underline hover:text-[#ff6b35]">Privacy policy</Link>
              <Link href="/terms" className="underline hover:text-[#ff6b35]">Terms of service</Link>
              <Link href="/cookies" className="underline hover:text-[#ff6b35]">Cookie settings</Link>
            </div>
          </div>

          {/* Right: Socials & Brand */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  aria-label={social.label}
                  className="hover:text-[#ff6b35] transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <span className="font-bold text-gray-700">ClearDrive.lk</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==========================================
// 4. MAIN PAGE EXPORT
// ==========================================

export default function Home() {
  return (
    // We set a dark background here to mimic the design in your image
    <div className="min-h-screen bg-[#111] flex flex-col justify-between">
      
      {/* Main Content Area (Just a placeholder) */}
      <main className="flex-grow p-10 text-white">
        <h1 className="text-3xl font-bold">Welcome to ClearDrive</h1>
        <p className="mt-4">Scroll down to see the footer.</p>
      </main>

      {/* Render the Footer */}
      <Footer />
    </div>
  );
}
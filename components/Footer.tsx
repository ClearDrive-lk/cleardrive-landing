import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  // Link data configuration
  const companyLinks = [
    { name: 'About us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  const resourceLinks = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Guides', href: '/guides' },
    { name: 'Support', href: '/support' },
    { name: 'Help center', href: '/help' },
    { name: 'Community', href: '/community' },
  ];

  const legalLinks = [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Policies', href: '/policies' },
  ];

  return (
    <footer className="w-full bg-[#f2f0ea] py-12 px-6 md:px-16 text-zinc-800">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        
        {/* Column 1: Company */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Company</h3>
          <ul className="flex flex-col gap-3 text-sm text-zinc-600">
            {companyLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-orange-500 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Resources */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Resources</h3>
          <ul className="flex flex-col gap-3 text-sm text-zinc-600">
            {resourceLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-orange-500 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Legal</h3>
          <ul className="flex flex-col gap-3 text-sm text-zinc-600">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-orange-500 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Subscribe */}
        <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
          <h3 className="font-bold text-lg">Subscribe</h3>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Stay updated on the latest vehicle import insights and offers
          </p>
          
          <form className="flex flex-col sm:flex-row gap-2 mt-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="px-4 py-2 rounded-full border-2 border-orange-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 flex-grow placeholder:text-zinc-500"
            />
            <button 
              type="submit" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Submit
            </button>
          </form>
          <p className="text-xs text-zinc-500 mt-2">
            By subscribing, you agree to our privacy policy and email terms
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-orange-500 mb-8 max-w-7xl mx-auto opacity-80" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-700">
        
        {/* Left: Copyright & Links */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <span>© 2025 ClearDrive.lk. All rights reserved</span>
          <div className="flex gap-6 underline decoration-zinc-400 underline-offset-4">
            <Link href="/privacy" className="hover:text-orange-500">Privacy policy</Link>
            <Link href="/terms" className="hover:text-orange-500">Terms of service</Link>
            <Link href="/cookies" className="hover:text-orange-500">Cookie settings</Link>
          </div>
        </div>

        {/* Right: Socials & Branding */}
        <div className="flex items-center gap-8">
          <div className="flex gap-4">
            <Link href="#" className="hover:text-orange-500 transition-transform hover:scale-110">
              <Facebook size={20} fill="currentColor" strokeWidth={0} />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-transform hover:scale-110">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-transform hover:scale-110">
              <Twitter size={20} fill="currentColor" strokeWidth={0} />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-transform hover:scale-110">
              <Linkedin size={20} fill="currentColor" strokeWidth={0} />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-transform hover:scale-110">
              <Youtube size={20} fill="currentColor" strokeWidth={0} />
            </Link>
          </div>
          <span className="font-bold text-zinc-800">ClearDrive.lk</span>
        </div>
      </div>
    </footer>
  );
}
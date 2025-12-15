import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#EFEEEA] text-gray-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Top CTA Card Section --- */}
        {/* This mimics the floating card in your design */}
        <div className="bg-white rounded-[2rem] border border-orange-500/30 p-10 md:p-16 text-center shadow-sm mb-20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Start your vehicle import journey
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your automotive dreams into reality with transparent, hassle-free Japanese vehicle imports.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition">
                Calculate savings
              </button>
              <button className="bg-white text-black border border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition">
                Browse vehicles
              </button>
            </div>
          </div>
        </div>

        {/* --- Main Footer Links --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-16">
          
          {/* Company Column */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-gray-600">
              <li><Link href="/about" className="hover:text-orange-500 transition">About us</Link></li>
              <li><Link href="/careers" className="hover:text-orange-500 transition">Careers</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500 transition">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-orange-500 transition">Blog</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-4 text-gray-600">
              <li><Link href="/faq" className="hover:text-orange-500 transition">FAQ</Link></li>
              <li><Link href="/guides" className="hover:text-orange-500 transition">Guides</Link></li>
              <li><Link href="/support" className="hover:text-orange-500 transition">Support</Link></li>
              <li><Link href="/help" className="hover:text-orange-500 transition">Help center</Link></li>
              <li><Link href="/community" className="hover:text-orange-500 transition">Community</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-4 text-gray-600">
              <li><Link href="/privacy" className="hover:text-orange-500 transition">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-orange-500 transition">Terms</Link></li>
              <li><Link href="/cookies" className="hover:text-orange-500 transition">Cookies</Link></li>
              <li><Link href="/compliance" className="hover:text-orange-500 transition">Compliance</Link></li>
              <li><Link href="/policies" className="hover:text-orange-500 transition">Policies</Link></li>
            </ul>
          </div>

          {/* Subscribe Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Stay updated on the latest vehicle import insights and offers
            </p>
            <form className="flex flex-col gap-3">
              <div className="flex bg-white rounded-full border border-gray-300 p-1 pl-4">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
                />
                <button 
                  type="button" 
                  className="bg-[#FF6B35] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-400 mt-4">
              By subscribing, you agree to our privacy policy and email terms
            </p>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-8 border-t border-orange-500/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-gray-600">
            <span>© 2025 ClearDrive.lk. All rights reserved</span>
            <div className="flex gap-6 underline decoration-gray-400">
              <Link href="/privacy" className="hover:text-black">Privacy policy</Link>
              <Link href="/terms" className="hover:text-black">Terms of service</Link>
              <Link href="/cookies" className="hover:text-black">Cookie settings</Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-black">
              <Link href="#" aria-label="Facebook"><Facebook size={20} /></Link>
              <Link href="#" aria-label="Instagram"><Instagram size={20} /></Link>
              <Link href="#" aria-label="X (Twitter)"><Twitter size={20} /></Link>
              <Link href="#" aria-label="LinkedIn"><Linkedin size={20} /></Link>
              <Link href="#" aria-label="YouTube"><Youtube size={20} /></Link>
            </div>
            <span className="font-bold text-black">ClearDrive.lk</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
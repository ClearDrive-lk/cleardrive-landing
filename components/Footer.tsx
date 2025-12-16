import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#EFEEEA] text-gray-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-20 font-sans">
      <div className="max-w-[1474px] mx-auto">
        
        {/* --- 1. Top CTA Card --- */}
        <div className="bg-white rounded-[2.5rem] p-12 md:p-16 text-center shadow-sm mb-20">
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

        {/* --- 2. Main Footer Links --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 px-4">
          
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-black">Company</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li><Link href="/about" className="hover:text-[#FF6B35]">About us</Link></li>
              <li><Link href="/careers" className="hover:text-[#FF6B35]">Careers</Link></li>
              <li><Link href="/services" className="hover:text-[#FF6B35]">Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF6B35]">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-[#FF6B35]">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-black">Resources</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li><Link href="/faq" className="hover:text-[#FF6B35]">FAQ</Link></li>
              <li><Link href="/guides" className="hover:text-[#FF6B35]">Guides</Link></li>
              <li><Link href="/support" className="hover:text-[#FF6B35]">Support</Link></li>
              <li><Link href="/help" className="hover:text-[#FF6B35]">Help center</Link></li>
              <li><Link href="/community" className="hover:text-[#FF6B35]">Community</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-black">Legal</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li><Link href="/privacy" className="hover:text-[#FF6B35]">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-[#FF6B35]">Terms</Link></li>
              <li><Link href="/cookies" className="hover:text-[#FF6B35]">Cookies</Link></li>
              <li><Link href="/compliance" className="hover:text-[#FF6B35]">Compliance</Link></li>
              <li><Link href="/policies" className="hover:text-[#FF6B35]">Policies</Link></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-black">Subscribe</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Stay updated on the latest vehicle import insights and offers
            </p>
            <form className="flex gap-3">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-transparent border border-[#FF6B35] rounded-full px-4 py-2 text-sm outline-none placeholder:text-gray-400"
              />
              <button 
                type="button" 
                className="bg-[#FF6B35] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition"
              >
                Submit
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to our privacy policy and email terms
            </p>
          </div>
        </div>

        {/* --- 3. Bottom Bar --- */}
        <div className="pt-8 border-t border-[#FF6B35] flex flex-col xl:flex-row justify-between items-center gap-6 text-xs text-gray-700 font-medium px-4">
          
          {/* Left Side: Copyright + Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span>© 2025 ClearDrive.lk. All rights reserved</span>
            <div className="flex gap-6 underline decoration-gray-400">
              <Link href="/privacy" className="hover:text-black">Privacy policy</Link>
              <Link href="/terms" className="hover:text-black">Terms of service</Link>
              <Link href="/cookies" className="hover:text-black">Cookie settings</Link>
            </div>
          </div>

          {/* Right Side: Icons + Brand */}
          <div className="flex items-center gap-8">
            <div className="flex gap-4 text-black">
              <Link href="https://www.facebook.com/profile.php?id=61583815894113" aria-label="Facebook"><Facebook size={18} /></Link>
              <Link href="https://www.instagram.com/cleardrivelk/" aria-label="Instagram"><Instagram size={18} /></Link>
              <Link href="#" aria-label="X"><Twitter size={18} /></Link>
              <Link href="https://www.linkedin.com/company/clear-drive-lk/" aria-label="LinkedIn"><Linkedin size={18} /></Link>
              <Link href="#" aria-label="YouTube"><Youtube size={18} /></Link>
            </div>
            <span className="font-bold text-slate-700 text-sm">ClearDrive.lk</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
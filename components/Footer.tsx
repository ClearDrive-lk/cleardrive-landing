import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Send } from 'lucide-react';

export default function Footer() {
  return (
    // MAIN CONTAINER: Uses the requested #EFEEEA color
    <footer className="bg-[#EFEEEA] text-gray-900 pt-20 pb-10 px-6 font-sans relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- 1. Top CTA Card (Black Card on Light Background) --- */}
        {/* This creates a bridge between your dark site and light footer */}
        <div className="bg-black rounded-[2rem] p-10 md:p-16 text-center shadow-xl mb-20 relative overflow-hidden group">
          
          {/* Subtle Orange Glow in Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#FE7743]/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EFEEEA]">
              Start your vehicle import journey
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              Transform your automotive dreams into reality with transparent, hassle-free Japanese vehicle imports.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#FE7743] text-black px-8 py-3.5 rounded-full font-bold hover:bg-[#ff8a5c] transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(254,119,67,0.3)]">
                Calculate Savings
              </button>
              <button className="bg-transparent border border-gray-600 text-[#EFEEEA] px-8 py-3.5 rounded-full font-bold hover:bg-white hover:text-black hover:border-white transition-all">
                Browse Vehicles
              </button>
            </div>
          </div>
        </div>

        {/* --- 2. Main Footer Links --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-black uppercase tracking-wider">Company</h3>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li><Link href="/about" className="hover:text-[#FE7743] transition-colors">About us</Link></li>
              <li><Link href="/careers" className="hover:text-[#FE7743] transition-colors">Careers</Link></li>
              <li><Link href="/services" className="hover:text-[#FE7743] transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#FE7743] transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-[#FE7743] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-black uppercase tracking-wider">Resources</h3>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li><Link href="/faq" className="hover:text-[#FE7743] transition-colors">FAQ</Link></li>
              <li><Link href="/guides" className="hover:text-[#FE7743] transition-colors">Guides</Link></li>
              <li><Link href="/support" className="hover:text-[#FE7743] transition-colors">Support</Link></li>
              <li><Link href="/help" className="hover:text-[#FE7743] transition-colors">Help Center</Link></li>
              <li><Link href="/community" className="hover:text-[#FE7743] transition-colors">Community</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-black uppercase tracking-wider">Legal</h3>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li><Link href="/privacy" className="hover:text-[#FE7743] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#FE7743] transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-[#FE7743] transition-colors">Cookie Settings</Link></li>
              <li><Link href="/compliance" className="hover:text-[#FE7743] transition-colors">Compliance</Link></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-black uppercase tracking-wider">Subscribe</h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Stay updated on the latest vehicle import insights and offers.
            </p>
            
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white border border-gray-300 rounded-full pl-5 pr-12 py-3 text-sm outline-none focus:border-[#FE7743] focus:ring-1 focus:ring-[#FE7743] transition-all"
              />
              <button 
                type="button" 
                className="absolute right-1.5 top-1.5 p-2 bg-[#FE7743] text-black rounded-full hover:bg-[#ff8a5c] transition-colors"
              >
                <Send size={16} />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to our privacy policy.
            </p>
          </div>
        </div>

        {/* --- 3. Bottom Bar --- */}
        <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-600">
          
          {/* Copyright */}
          <div className="font-medium">
            © 2025 ClearDrive.lk. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <Link href="https://www.facebook.com/profile.php?id=61583815894113" className="text-gray-500 hover:text-[#FE7743] hover:scale-110 transition-all">
                <Facebook size={20} />
            </Link>
            <Link href="https://www.instagram.com/cleardrivelk/" className="text-gray-500 hover:text-[#FE7743] hover:scale-110 transition-all">
                <Instagram size={20} />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-[#FE7743] hover:scale-110 transition-all">
                <Twitter size={20} />
            </Link>
            <Link href="https://www.linkedin.com/company/clear-drive-lk/" className="text-gray-500 hover:text-[#FE7743] hover:scale-110 transition-all">
                <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-[#FE7743] hover:scale-110 transition-all">
                <Youtube size={20} />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
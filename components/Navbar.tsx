import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    // Increased height capability with h-28 wrapper (was h-24)
    <header className="sticky top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* INCREASED NAVBAR HEIGHT: Changed h-24 to h-28 */}
        <div className="flex items-center justify-between h-28">
          
          {/* --- LEFT: Logo Area --- */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-5 group">
              
              {/* INCREASED LOGO SIZE: Changed from w-20 h-20 to w-28 h-28 */}
              <div className="relative w-28 h-28 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logoNew.png"
                  alt="ClearDrive Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Brand Text - Increased to text-3xl to balance with the massive logo */}
              <span className="font-bold text-3xl tracking-tight text-[#EFEEEA] group-hover:text-[#FE7743] transition-colors">
                ClearDrive.lk
              </span>
            </Link>
          </div>

          {/* --- CENTER: Navigation Links --- */}
          <nav className="hidden md:flex items-center justify-center gap-10 absolute left-1/2 transform -translate-x-1/2">
            {[
              { name: "Home", path: "/" },
              { name: "How It Works", path: "/how-it-works" },
              { name: "Features", path: "/features" },
              { name: "About Us", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-base font-medium text-[#EFEEEA]/80 hover:text-[#FE7743] transition-all duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE7743] transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
              </Link>
            ))}
          </nav>

          {/* --- RIGHT: CTA Button --- */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Link 
              href="/contact"
              className="px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-black bg-[#FE7743] rounded-md hover:bg-[#ff8a5c] hover:shadow-[0_0_15px_rgba(254,119,67,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* --- MOBILE: Menu Button --- */}
          <div className="md:hidden flex items-center">
            <button className="text-[#EFEEEA] hover:text-[#FE7743] p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
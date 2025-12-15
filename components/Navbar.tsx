import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center px-4 py-6">
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-2xl border border-[#FE7743] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] px-6">
        
        {/* Left: Logo image */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png" // place logo.png inside your public/ folder
            alt="ClearDrive.lk Logo"
            width={180}      // Increased size of the logo
            height={70}      // Increased height for better scaling
            priority
          />
        </Link>

        {/* Middle: Nav links */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-12 text-black text-sm">
            <Link href="/how-it-works" className="font-medium text-black hover:text-[#FFFFFF]">
              How It Works
            </Link>
            <Link href="/features" className="font-medium text-black hover:text-[#FFFFFF]">
              Features
            </Link>
            <Link href="/about" className="font-medium text-black hover:text-[#FFFFFF]">
              About
            </Link>
            <Link href="/contact" className="font-medium text-black hover:text-[#FFFFFF]">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

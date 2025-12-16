import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center px-4 py-4 md:py-6 bg-white/80 backdrop-blur">
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-2xl border border-[#FE7743] bg-[#FFFFFF] shadow-[0_12px_30px_rgba(0,0,0,0.35)] px-4 md:px-8 py-3">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="rounded-full bg-[linear-gradient(to_right,_#000000_0%,_#000000_65%,_#ffffff_100%)] pl-3 pr-6 py-1 shadow-sm overflow-hidden">
            <div className="bg-black rounded-full px-2 py-1">
              <Image
                src="/logo.png"
                alt="ClearDrive.lk Logo"
                width={170}
                height={60}
                priority
              />
            </div>
          </div>
        </Link>

        {/* Centered Nav Links with spacing */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-12 text-sm font-semibold">
            <Link
              href="/how-it-works"
              className="text-black transition-colors duration-150 hover:text-[#FE7743] hover:border-b-2 hover:border-[#FE7743] pb-0.5"
            >
              How It Works
            </Link>
            <Link
              href="/features"
              className="text-black transition-colors duration-150 hover:text-[#FE7743] hover:border-b-2 hover:border-[#FE7743] pb-0.5"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="text-black transition-colors duration-150 hover:text-[#FE7743] hover:border-b-2 hover:border-[#FE7743] pb-0.5"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-black transition-colors duration-150 hover:text-[#FE7743] hover:border-b-2 hover:border-[#FE7743] pb-0.5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
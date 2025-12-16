import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center px-2 py-1 md:py-2 bg-white/80 backdrop-blur">
      <nav className="flex w-full max-w-7xl items-center justify-between rounded-lg border border-[#FE7743] bg-[#FFFFFF] shadow-[0_4px_12px_rgba(0,0,0,0.2)] px-3 md:px-5 py-1.5">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-1.5 shrink-0 group">
          <div className="rounded-full bg-[linear-gradient(to_right,_#000000_0%,_#000000_65%,_#ffffff_100%)] pl-1.5 pr-3 py-0.5 shadow-sm overflow-hidden">
            <div className="bg-black rounded-full px-1 py-0.5">
              <Image
                src="/logo.png"
                alt="ClearDrive.lk Logo"
                width={80}
                height={32}
                priority
              />
            </div>
          </div>
        </Link>

        {/* Centered Nav Links with spacing */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-8 text-xs font-semibold">
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
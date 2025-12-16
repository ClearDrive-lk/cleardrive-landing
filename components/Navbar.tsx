"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Menu } from "lucide-react"; // I'm using Lucide icons for cleaner code, or you can use your SVG

export default function Navbar() {
  // State to track if the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // List of links to keep code clean and reusable
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Features", path: "/features" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          
          {/* --- LEFT: Logo --- */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-5 group">
              <div className="relative w-28 h-28 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logoNew.png"
                  alt="ClearDrive Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-bold text-3xl tracking-tight text-[#EFEEEA] group-hover:text-[#FE7743] transition-colors">
                ClearDrive.lk
              </span>
            </Link>
          </div>

          {/* --- CENTER: Desktop Navigation --- */}
          <nav className="hidden md:flex items-center justify-center gap-10 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
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

          {/* --- RIGHT: Desktop CTA Button --- */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Link 
              href="/contact"
              className="px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-black bg-[#FE7743] rounded-md hover:bg-[#ff8a5c] hover:shadow-[0_0_15px_rgba(254,119,67,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* --- MOBILE: Toggle Button --- */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#EFEEEA] hover:text-[#FE7743] p-2 transition-colors focus:outline-none"
            >
              {/* Toggle between Menu (Hamburger) and X (Close) icon */}
              {isOpen ? (
                <X className="w-9 h-9" />
              ) : (
                <Menu className="w-9 h-9" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {/* This section only appears when isOpen is true */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top-5 fade-in duration-200">
          
          {/* Mobile Links */}
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)} // Close menu when clicked
                className="text-lg font-medium text-[#EFEEEA] hover:text-[#FE7743] hover:pl-2 transition-all duration-300 border-b border-white/5 pb-2"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA Button */}
          <Link 
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-6 py-4 text-sm font-bold uppercase tracking-wider text-black bg-[#FE7743] rounded-md hover:bg-[#ff8a5c] transition-colors"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
"use client";

import { Facebook, Instagram, Linkedin, Youtube, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f6f4ee] text-sm text-gray-700 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>About us</li>
              <li>Careers</li>
              <li>Services</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>FAQ</li>
              <li>Guides</li>
              <li>Support</li>
              <li>Help center</li>
              <li>Community</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Cookies</li>
              <li>Compliance</li>
              <li>Policies</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4">Subscribe</h4>
            <p className="mb-4 text-gray-600">
              Stay updated on the latest vehicle import insights and offers
            </p>
            <div className="flex items-center bg-white rounded-full p-1 border">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 outline-none rounded-full"
              />
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
                Submit
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              By subscribing, you agree to our privacy policy and email terms
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-400 my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2025 ClearDrive.lk. All rights reserved
          </p>

          <div className="flex gap-4 text-gray-700">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of service</a>
            <a href="#">Cookie settings</a>
          </div>

          <div className="flex gap-4">
            <Facebook size={18} />
            <Instagram size={18} />
            <X size={18} />
            <Linkedin size={18} />
            <Youtube size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
}

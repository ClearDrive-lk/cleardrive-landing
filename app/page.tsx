"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, XCircle, CheckCircle2, Shield } from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen">
      
      {/* --- SECTION 1: SPLIT HERO --- */}
      {/* CHANGED: Reduced min-h-[90vh] to min-h-[80vh] to reduce initial gap */}
      <section className="relative min-h-[80vh] flex items-center px-6 pt-20 md:pt-0 overflow-hidden">
        
        {/* Background Blob */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FE7743]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
          
          {/* LEFT COL: Text Content */}
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 backdrop-blur-md"
            >
              <Shield className="w-4 h-4 text-[#FE7743]" />
              <span className="text-sm font-semibold text-[#EFEEEA]">IIT SDGP Project 2025</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Your Dream Car, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE7743] to-orange-200">
                Delivered Transparently.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg max-w-xl mb-8 leading-relaxed"
            >
              ClearDrive bypasses middlemen to give you direct access to Japanese auctions. No hidden fees, just verified vehicles and complete peace of mind.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://forms.gle/MbQyLqrmsEXZLKXL8"
                target="_blank"
                className="px-8 py-4 bg-[#FE7743] text-black font-bold rounded-xl hover:bg-[#ff8a5c] transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(254,119,67,0.3)] flex items-center gap-2"
              >
                Join Early Access
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/how-it-works"
                className="px-8 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-xl hover:bg-white/10 transition-all"
              >
                How It Works
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COL: HERO IMAGE */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.4, duration: 0.8 }}
             className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gray-900">
               <Image 
                  src="/pexelsCover.jpg"
                  alt="Premium Japanese Vehicle" 
                  fill 
                  className="object-cover" 
                  priority 
                />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>

        </div>
      </section>


      {/* --- SECTION 2: THE PROBLEM --- */}
      {/* CHANGED: Reduced py-20 to py-12 (Tighter spacing) */}
      <section className="py-12 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-400">The Traditional Market Problem</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Inflated Prices", "Hidden Agent Fees", "Tampered Odo's", "Zero Tracking"].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/5 text-center group hover:bg-red-900/10 hover:border-red-500/30 transition-all duration-300">
                <XCircle className="w-8 h-8 text-red-500 mb-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="font-medium text-gray-400 group-hover:text-red-200 transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --- SECTION 3: VISUAL BREAKOUT --- */}
      {/* CHANGED: Reduced py-24 to py-16 (Tighter spacing) */}
      <section className="py-16 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
           
           {/* LEFT: IMAGE 2 */}
           <div className="relative h-[450px] rounded-3xl overflow-hidden border border-[#FE7743]/30 shadow-[0_0_30px_rgba(254,119,67,0.15)] group order-2 md:order-1">
             <div className="absolute inset-0 bg-[#0A0A0A]">
                 <Image 
                   src="/reliable69.png"
                   alt="ClearDrive Process" 
                   fill 
                   className="object-cover transition-transform duration-700 group-hover:scale-105" 
                 />
             </div>
           </div>

           {/* RIGHT: Text Content */}
           <div className="order-1 md:order-2">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
               We show you what <br/>others hide.
             </h2>
             <p className="text-gray-400 text-lg mb-8 leading-relaxed">
               Most importers give you a final price tag. We give you the breakdown. See the original auction price, shipping costs, government taxes, and our flat service fee clearly before you decide.
             </p>
             
             <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[#EFEEEA]">
                  <CheckCircle2 className="w-6 h-6 text-[#FE7743]" />
                  <span>Authentic Japanese Auction Sheets</span>
                </li>
                <li className="flex items-center gap-3 text-[#EFEEEA]">
                  <CheckCircle2 className="w-6 h-6 text-[#FE7743]" />
                  <span>Real-time Government Duty Calculation</span>
                </li>
                <li className="flex items-center gap-3 text-[#EFEEEA]">
                  <CheckCircle2 className="w-6 h-6 text-[#FE7743]" />
                  <span>Bank-Grade Secure Transactions</span>
                </li>
             </ul>
           </div>

        </div>
      </section>


      {/* --- SECTION 4: THE SOLUTION GRID --- */}
      {/* CHANGED: Reduced py-24 to py-16 (Tighter spacing) */}
      <section className="py-16 px-6 relative bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The <span className="text-[#FE7743]">ClearDrive</span> Standard
            </h2>
            <p className="text-gray-400">Redefining the vehicle import experience in Sri Lanka.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Direct Access", desc: "Bid directly on live Japanese auctions." },
              { title: "Total Clarity", desc: "Every rupee accounted for, no surprises." },
              { title: "Secure Process", desc: "Verified agents and secure payments." },
              { title: "Doorstep Delivery", desc: "We handle clearing and registration." }
            ].map((item, idx) => (
              <div key={idx} className="bg-black border border-white/10 p-8 rounded-2xl hover:border-[#FE7743] hover:-translate-y-2 transition-all duration-300 group">
                <CheckCircle2 className="w-10 h-10 text-[#FE7743] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
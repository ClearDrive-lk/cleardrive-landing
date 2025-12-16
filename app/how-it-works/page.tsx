"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Calculator, CreditCard, Ship, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// --- DATA ---
const steps = [
  {
    id: "01",
    title: "Browse & Select",
    description: "Explore our curated collection of premium Japanese vehicles directly from verified auctions.",
    action: "Explore Inventory",
    icon: Search,
    link: "/inventory",
    // Ensure these images exist in your /public folder
    image: "/browse-and-select.jpg" 
  },
  {
    id: "02",
    title: "Calculate Cost",
    description: "Get transparent pricing including import duties, taxes, and registration fees instantly.",
    action: "Use Calculator",
    icon: Calculator,
    link: "/calculator",
    image: "/calculate-cost.jpg"
  },
  {
    id: "03",
    title: "Choose Payment",
    description: "Select from multiple secure payment options including leasing partners and bank transfers.",
    action: "Payment Options",
    icon: CreditCard,
    link: "/payment",
    image: "/choose-payment.jpg"
  },
  {
    id: "04",
    title: "Track & Receive",
    description: "Monitor your vehicle's journey in real-time and receive it within 30 days.",
    action: "Track Shipment",
    icon: Ship,
    link: "/tracking",
    image: "/track-and-recieve.jpg"
  },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-black py-24 relative overflow-hidden">
      
      {/* Background Decor (Subtle Grid) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{
             backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
             backgroundSize: "40px 40px"
           }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block mb-4 rounded-full bg-[#FE7743]/10 border border-[#FE7743]/20 px-4 py-1 text-sm font-semibold text-[#FE7743]"
          >
            Process
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-5xl font-bold text-[#EFEEEA]"
          >
            How it works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-lg"
          >
            Simple steps to your dream Japanese vehicle.
          </motion.p>
        </div>

        {/* --- STEPS GRID --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                variants={cardVariants}
                // CARD CONTAINER: Fixed height (h-[420px]) ensures consistent sizing
                className="group relative h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] transition-all duration-300 hover:border-[#FE7743] hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10"
              >
                
                {/* --- 1. BACKGROUND IMAGE LAYER --- */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
                  />
                  {/* Gradient Overlay: Ensures text readability by fading image to black at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>

                {/* --- 2. CONTENT LAYER (Z-10 to sit above image) --- */}
                <div className="relative z-10 flex h-full flex-col justify-between p-8">
                  
                  {/* Top Section: Number & Icon */}
                  <div className="flex justify-between items-start">
                     {/* Icon with Glass Effect */}
                     <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-[#FE7743] group-hover:bg-[#FE7743] group-hover:text-black transition-all duration-300">
                        <Icon className="h-6 w-6" />
                     </div>
                     {/* Step Number */}
                     <span className="text-4xl font-bold text-white/20 group-hover:text-[#FE7743]/40 transition-colors">
                       {step.id}
                     </span>
                  </div>

                  {/* Bottom Section: Text & Link */}
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-[#EFEEEA] group-hover:text-[#FE7743] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                      {step.description}
                    </p>

                    <Link href={step.link} className="inline-flex items-center text-sm font-semibold text-[#FE7743] hover:text-white transition-colors gap-2">
                      {step.action}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* --- BOTTOM CTA STRIP --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 rounded-3xl bg-[#FE7743] px-8 py-12 md:px-16 md:py-16 text-center relative overflow-hidden"
        >
          {/* Subtle Texture Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Start your vehicle import journey
            </h2>
            <p className="text-black/80 text-lg max-w-2xl mx-auto mb-8">
              Transform your automotive dreams into reality with transparent, hassle-free Japanese vehicle imports.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-lg">
                Calculate Savings
              </button>
              <button className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                Browse Vehicles
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
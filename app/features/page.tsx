"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Globe,
  FileCheck,
  CreditCard,
  ShieldCheck,
  Ship,
} from "lucide-react";

// --- DATA: Easy to edit, easy to explain ---
const features = [
  {
    id: 1,
    title: "True Cost Transparency",
    description: "Know the exact landed cost before you bid. Our real-time calculator breaks down CIF, Customs Duty, PAL, and CESS with zero hidden fees.",
    icon: Calculator,
  },
  {
    id: 2,
    title: "Direct Auction Access",
    description: "Browse verified Japanese auction listings directly and place bids with confidence using authentic auction sheets.",
    icon: Globe,
  },
  {
    id: 3,
    title: "Digital Customs Clearance",
    description: "Track customs clearance live with audited receipts, milestone updates, and full transparency from your assigned agent.",
    icon: FileCheck,
  },
  {
    id: 4,
    title: "Integrated Financing",
    description: "Apply for leasing securely on the platform and receive approvals from trusted finance partners—no bank visits required.",
    icon: CreditCard,
  },
  {
    id: 5,
    title: "Verified Partners",
    description: "Every importer and clearing agent is carefully vetted through compliance checks and ongoing audits.",
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "End-to-End Tracking",
    description: "Monitor your vehicle journey from Japan to Sri Lanka with a single, real-time shipment dashboard.",
    icon: Ship,
  },
];

// --- ANIMATION SETTINGS (Standard Fade In) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }, // Cards appear one by one
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 bg-black">
      
      {/* 1. SIMPLE BACKGROUND (Just a black section with a max-width container) */}
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block mb-4 rounded-full bg-[#FE7743]/10 border border-[#FE7743]/20 px-4 py-1 text-sm font-semibold text-[#FE7743]"
          >
            Why ClearDrive
          </motion.div>
          
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-5xl font-bold text-[#EFEEEA]"
          >
            Import vehicles with <br />
            <span className="text-[#FE7743]"> clarity & confidence</span>
          </motion.h2>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                // CARD STYLING EXPLAINED:
                // bg-[#0A0A0A]: Very dark grey (almost black) background
                // border-white/10: Subtle white border
                // hover:border-[#FE7743]: Border turns Orange on hover
                // hover:-translate-y-2: Moves up slightly on hover
                className="group relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 transition-all duration-300 hover:border-[#FE7743] hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/10"
              >
                {/* Icon Box */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FE7743] text-black shadow-md">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-[#EFEEEA] group-hover:text-[#FE7743] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
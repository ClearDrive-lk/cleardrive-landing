"use client";

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


interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    id: 1,
    title: "True Cost Transparency",
    description:
      "Know the exact landed cost before you bid. Our real-time calculator breaks down CIF, Customs Duty, PAL, and CESS with zero hidden fees.",
    icon: Calculator,
  },
  {
    id: 2,
    title: "Direct Auction Access",
    description:
      "Browse verified Japanese auction listings directly and place bids with confidence using authentic auction sheets.",
    icon: Globe,
  },
  {
    id: 3,
    title: "Digital Customs Clearance",
    description:
      "Track customs clearance live with audited receipts, milestone updates, and full transparency from your assigned agent.",
    icon: FileCheck,
  },
  {
    id: 4,
    title: "Integrated Financing",
    description:
      "Apply for leasing securely on the platform and receive approvals from trusted finance partners—no bank visits required.",
    icon: CreditCard,
  },
  {
    id: 5,
    title: "Verified Partners",
    description:
      "Every importer and clearing agent is carefully vetted through compliance checks and ongoing audits.",
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "End-to-End Tracking",
    description:
      "Monitor your vehicle journey from Japan to Sri Lanka with a single, real-time shipment dashboard.",
    icon: Ship,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block mb-4 rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Why ClearDrive
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Import vehicles with
            <span className="text-blue-600"> clarity & confidence</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            ClearDrive replaces brokers, paperwork, and uncertainty with a
            single secure platform built for transparency, trust, and speed.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, DollarSign, Globe, Users, Trophy, Target } from "lucide-react";

// --- DATA CONFIGURATION ---
const teamMembers = [
  { name: "Malith De Silva", role: "Founder CEO", image: "/team/malith.jpeg" },
  { name: "Parindra Chameekara", role: "Operations Director", image: "/team/parindra.jpeg" },
  { name: "Tharin De Silva", role: "Financial Analyst", image: "/team/tharin.jpeg" },
  { name: "Lehan Methyuga", role: "Logistics Coordinator", image: "/team/lehan.png" },
  { name: "Kalidu Indeera", role: "Technical Lead", image: "/team/kalidu.png" },
  { name: "Pavara Mandara", role: "Customer Experience", image: "/team/pavara.jpeg" },
];

const missions = [
  {
    icon: ShieldCheck,
    title: "Absolute Transparency",
    desc: "No hidden fees or fake auction grades. We provide verifiable data straight from Japanese sources."
  },
  {
    icon: DollarSign,
    title: "True Affordability",
    desc: "By streamlining the process and cutting out unnecessary middlemen, we pass the savings directly to you."
  },
  {
    icon: Globe,
    title: "Seamless Tracking",
    desc: "From the auction house in Japan to the port in Sri Lanka, track your vehicle's journey in real-time."
  }
];

export default function About() {
  // removed state for active index

  return (
    <main className="bg-black min-h-screen overflow-hidden">
      
      {/* --- SECTION 1: HERO --- */}
      <section className="relative py-32 px-6 flex flex-col items-center justify-center text-center">
        
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FE7743]/10 blur-[140px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 backdrop-blur-md">
            <Users className="w-4 h-4 text-[#FE7743]" />
            <span className="text-sm font-semibold text-[#EFEEEA]">Who We Are</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#EFEEEA] mb-8 leading-tight">
            Redefining Imports with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE7743] to-orange-200">
              Unmatched Transparency.
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We are bridging the gap between Sri Lankan buyers and the Japanese automotive market, removing hidden costs and complexity one vehicle at a time.
          </p>
        </motion.div>
      </section>


      {/* --- SECTION 2: OUR MISSION --- */}
      <section className="py-20 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {missions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/10 hover:border-[#FE7743] transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#FE7743]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FE7743] transition-colors">
                    <Icon className="h-6 w-6 text-[#FE7743] group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#EFEEEA] mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* --- SECTION 3: ORIGIN STORY --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
           
           {/* Visual "Badge" for SDGP */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="w-full md:w-1/3 flex justify-center"
           >
              <div className="relative w-64 h-64 border border-white/10 rounded-full flex items-center justify-center bg-[#0A0A0A] shadow-[0_0_40px_rgba(254,119,67,0.1)]">
                 <div className="absolute inset-4 border border-[#FE7743]/30 rounded-full border-dashed animate-spin-slow"></div>
                 <div className="text-center">
                    <Trophy className="w-12 h-12 text-[#FE7743] mx-auto mb-2" />
                    <span className="block text-3xl font-bold text-white">SDGP</span>
                    <span className="block text-[#FE7743] font-bold text-xl">2025</span>
                 </div>
              </div>
           </motion.div>

           {/* Text Content */}
           <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-[#EFEEEA] mb-6 flex items-center gap-3">
                <Target className="text-[#FE7743]" /> 
                The Origin Story
              </h2>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  ClearDrive.lk started as an ambitious academic Software Development Group Project (SDGP) at the <span className="text-white font-semibold">Informatics Institute of Technology (IIT)</span>.
                </p>
                <p>
                  Conceived by a group of passionate software engineering students, our goal was simple: take a complex, opaque industry and solve it using modern technology, real-time data, and user-centric design.
                </p>
                
                <div className="inline-block px-4 py-2 rounded bg-[#FE7743]/10 border border-[#FE7743]/30 text-[#FE7743] text-sm font-bold uppercase tracking-wider">
                   University Project • Academic Simulation
                </div>
              </div>
           </div>
        </div>
      </section>


      {/* --- SECTION 4: THE TEAM --- */}
      <section className="py-24 px-6 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#EFEEEA] mb-4">Meet the Team</h2>
              <p className="text-gray-400">The minds behind the code.</p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                {teamMembers.map((member, index) => {
                  // No more activeIndex logic
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      // Removed onClick handler
                      className="group cursor-pointer"
                    >
                        {/* Image Circle - INCREASED SIZE & HOVER EFFECT */}
                        <div className={`
                            relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-2 
                            transition-all duration-500 ease-out
                            border-white/10 scale-100 
                            group-hover:border-[#FE7743] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(254,119,67,0.5)]
                        `}>
                           <Image 
                             src={member.image} 
                             alt={member.name} 
                             fill 
                             // Removed isActive logic, now pure CSS hover
                             className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0" 
                           />
                        </div>

                        {/* Name & Role */}
                        <h4 className="text-2xl font-bold transition-colors duration-300 text-[#EFEEEA] group-hover:text-[#FE7743]">
                          {member.name}
                        </h4>
                        <p className="text-base font-medium text-gray-500 mt-2 uppercase tracking-wider group-hover:text-[#FE7743] transition-colors">
                          {member.role}
                        </p>
                    </motion.div>
                  );
                })}
            </div>
        </div>
      </section>

    </main>
  );
}
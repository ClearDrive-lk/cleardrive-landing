"use client";

import Image from "next/image";
import { useState } from "react";
import { 
  ShieldCheckIcon, 
  CurrencyDollarIcon, 
  GlobeAsiaAustraliaIcon 
} from "@heroicons/react/24/outline";

// --- TEAM DATA CONFIGURATION ---
const teamMembers = [
  {
    name: "Malith De Silva",
    role: "Founder CEO",
    image: "/team/malith.jpeg", 
  },
  {
    name: "Parindra Chameekara",
    role: "Operations Director",
    image: "/team/parindra.jpeg",
  },
  {
    name: "Tharin De Silva",
    role: "Financial Analyst",
    image: "/team/tharin.jpeg",
  },
  {
    name: "Lehan Methyuga",
    role: "Logistics Coordinator", 
    image: "/team/lehan.png",
  },
  {
    name: "Kalidu Indeera",
    role: "Technical Lead",
    image: "/team/kalidu.png",
  },
  {
    name: "Pavara Mandara",
    role: "Customer Experience Manager",
    image: "/team/pavara.jpeg",
  },
];

export default function About() {
  // State to track which team member is currently clicked
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <main className="bg-black min-h-screen">
      
      {/* --- Section 1: Hero --- */}
      <section className="relative py-24 px-6 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#EFEEEA] mb-8">
            Redefining Imports with <span className="text-[#FE7743]">Transparency.</span>
          </h1>
          {/* Sharp Orange Divider */}
          <div className="w-24 h-1 bg-[#FE7743] mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are bridging the gap between Sri Lankan buyers and the Japanese automotive market, removing hidden costs and complexity one vehicle at a time.
          </p>
        </div>
      </section>

      {/* --- Section 2: Our Mission --- */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#EFEEEA]">Our Mission</h2>
            <p className="text-gray-400 mt-2">Tackling the challenges of traditional importing.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheckIcon,
                title: "Absolute Transparency",
                desc: "No hidden fees or fake auction grades. We provide verifiable data straight from Japanese sources."
              },
              {
                icon: CurrencyDollarIcon,
                title: "True Affordability",
                desc: "By streamlining the process and cutting out unnecessary middlemen, we pass the savings directly to you."
              },
              {
                icon: GlobeAsiaAustraliaIcon,
                title: "Seamless Tracking",
                desc: "From the auction house in Japan to the port in Sri Lanka, track your vehicle's journey in real-time."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-black p-8 rounded-lg border border-[#FE7743] hover:bg-[#FE7743]/5 transition-colors duration-300">
                <item.icon className="h-10 w-10 text-[#FE7743] mb-6" />
                <h3 className="text-xl font-bold text-[#EFEEEA] mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 3: The Origin Story --- */}
      <section className="py-20 px-6 bg-black border-y border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Image/Logo Placeholder with Sharp Orange Border */}
            <div className="md:w-1/3 w-full">
               <div className="aspect-square border-2 border-[#FE7743] rounded-xl bg-black flex items-center justify-center p-6">
                  <div className="text-center">
                    <span className="block text-[#EFEEEA] font-bold text-3xl">SDGP</span>
                    <span className="block text-[#FE7743] font-bold text-xl">2025</span>
                  </div>
               </div>
            </div>

            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-[#EFEEEA] mb-6">The Origin Story</h2>
              
              {/* Distinctive Orange Left-Border Block */}
              <div className="border-l-[6px] border-[#FE7743] pl-6 py-2 mb-6">
                <p className="text-lg text-[#EFEEEA] font-medium leading-relaxed">
                  ClearDrive.lk is an academic Software Development Group Project (SDGP) conducted at the Informatics Institute of Technology (IIT).
                </p>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                This project was conceived by a group of passionate software engineering students aiming to solve real-world logistical problems using modern technology.
              </p>
              
              <div className="inline-block border border-[#FE7743]/50 px-4 py-2 rounded text-xs text-[#FE7743] font-semibold uppercase tracking-wider">
                Academic Simulation Only
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 4: The Team (Interactive) --- */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#EFEEEA] mb-16">Meet the SDGP Team</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
                {teamMembers.map((member, index) => {
                  const isActive = activeIndex === index;
                  
                  return (
                    <div 
                      key={index} 
                      className="text-center group cursor-pointer"
                      onClick={() => setActiveIndex(index)}
                    >
                        {/* IMAGE CONTAINER LOGIC:
                           1. Default: border-white, scale-100
                           2. group-hover: border-orange, scale-105 (Slight Enlarge)
                           3. isActive: border-orange, scale-110 (More Enlarge + Shadow)
                        */}
                        <div 
                          className={`
                            w-36 h-36 mx-auto mb-6 relative rounded-full overflow-hidden 
                            border-2 transition-all duration-300
                            ${isActive 
                              ? "border-[#FE7743] scale-110 shadow-[0_0_15px_rgba(254,119,67,0.4)]" 
                              : "border-white scale-100 group-hover:border-[#FE7743] group-hover:scale-105"
                            }
                          `}
                        >
                           {/* IMAGE LOGIC:
                              1. Default: grayscale
                              2. group-hover/isActive: color
                           */}
                           <Image 
                             src={member.image} 
                             alt={member.name} 
                             fill 
                             className={`
                               object-cover transition-all duration-500 
                               ${isActive ? "grayscale-0" : "grayscale group-hover:grayscale-0"}
                             `} 
                           />
                        </div>

                        {/* NAME LOGIC: White by default, Orange on Hover/Click */}
                        <h4 className={`
                            font-bold text-xl mb-2 transition-colors 
                            ${isActive ? "text-[#FE7743]" : "text-[#EFEEEA] group-hover:text-[#FE7743]"}
                        `}>
                          {member.name}
                        </h4>
                        
                        <p className="text-[#FE7743] text-sm font-medium tracking-wider uppercase">
                          {member.role}
                        </p>
                    </div>
                  );
                })}
            </div>
        </div>
      </section>
    </main>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-black min-h-screen pt-32 pb-20 relative overflow-hidden">
      
      {/* Background Decor (Subtle Glows) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FE7743]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-[#EFEEEA] mb-4"
          >
            Get in <span className="text-[#FE7743]">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Have questions about importing your dream vehicle? We are here to help you navigate every step of the process.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* --- LEFT COLUMN: CONTACT INFO --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Info Card 1 */}
            <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-[#FE7743]/50 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#FE7743]/10 text-[#FE7743] group-hover:bg-[#FE7743] group-hover:text-black transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#EFEEEA] mb-1">Email Us</h3>
                  <p className="text-gray-400 text-sm mb-2">For general inquiries and support.</p>
                  <a href="mailto:cleardrive.lk@gmail.com" className="text-[#FE7743] font-medium hover:underline">
                    cleardrive.lk@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Info Card 2 */}
            <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-[#FE7743]/50 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#FE7743]/10 text-[#FE7743] group-hover:bg-[#FE7743] group-hover:text-black transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#EFEEEA] mb-1">Visit Us</h3>
                  <p className="text-gray-400 text-sm mb-2">Affiliated with Informatics Institute of Technology.</p>
                  <p className="text-[#EFEEEA]/80">
                    57 Ramakrishna Rd,<br />
                    Colombo 00600, Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            {/* Info Card 3 */}
            <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-[#FE7743]/50 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#FE7743]/10 text-[#FE7743] group-hover:bg-[#FE7743] group-hover:text-black transition-colors">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#EFEEEA] mb-1">Operating Hours</h3>
                  <p className="text-gray-400 text-sm">
                    Mon - Fri: 9:00 AM - 5:00 PM <br/>
                    Sat - Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>


          {/* --- RIGHT COLUMN: CONTACT FORM --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#0A0A0A] p-8 md:p-10 rounded-3xl border border-white/10"
          >
            <h3 className="text-2xl font-bold text-[#EFEEEA] mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-[#EFEEEA] focus:outline-none focus:border-[#FE7743] focus:ring-1 focus:ring-[#FE7743] transition-all"
                  />
                </div>
                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-[#EFEEEA] focus:outline-none focus:border-[#FE7743] focus:ring-1 focus:ring-[#FE7743] transition-all"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Subject</label>
                <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-[#EFEEEA] focus:outline-none focus:border-[#FE7743] focus:ring-1 focus:ring-[#FE7743] transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Import Calculation Help</option>
                  <option>Vehicle Tracking Issue</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-[#EFEEEA] focus:outline-none focus:border-[#FE7743] focus:ring-1 focus:ring-[#FE7743] transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="button"
                className="w-full bg-[#FE7743] text-black font-bold py-4 rounded-lg hover:bg-[#ff8a5c] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
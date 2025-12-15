import React from "react";
import Image from "next/image";
import { Search, Calculator, CreditCard, Ship } from "lucide-react";

// Data structure for the cards to keep code clean
const steps = [
  {
    id: 1,
    title: "Browse and select",
    description: "Explore our curated collection of premium Japanese vehicles.",
    action: "Explore",
    icon: <Search className="w-5 h-5 text-blue-400" />,
    // using placeholder images - replace 'src' with your actual local images
    image: "Browse and select.jpg", 
  },
  {
    id: 2,
    title: "Calculate cost",
    description: "Get transparent pricing including import and registration fees.",
    action: "Calculate",
    icon: <Calculator className="w-5 h-5 text-blue-400" />,
    image: "calculate cost.jpg",
  },
  {
    id: 3,
    title: "Choose payment",
    description: "Select from multiple secure payment options.",
    action: "Pay",
    icon: <CreditCard className="w-5 h-5 text-blue-400" />,
    image: "Choose payment.jpg",
  },
  {
    id: 4,
    title: "Track and receive",
    description: "Monitor your vehicle's journey and receive it within 30 days.",
    action: "Track",
    icon: <Ship className="w-5 h-5 text-blue-400" />,
    image: "Track and recieve.jpg",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-black py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How it works
          </h2>
          <p className="text-gray-400 text-lg">
            Simple steps to your dream Japanese vehicle.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative h-[400px] rounded-2xl overflow-hidden border border-orange-500 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark Overlay Gradient - Makes text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
              </div>

              {/* Card Content */}
              <div className="relative h-full flex flex-col justify-between p-6 z-10">
                
                {/* Top Icon Circle */}
                <div className="w-12 h-12 rounded-full border border-blue-500/50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  {step.icon}
                </div>

                {/* Bottom Text Area */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Action Link */}
                  <button className="flex items-center text-orange-500 font-semibold hover:text-orange-400 transition-colors">
                    {step.action} 
                    <span className="ml-2 text-lg">›</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
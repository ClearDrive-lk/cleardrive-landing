// app/about/page.tsx
import Image from "next/image";
import { 
  ShieldCheckIcon, 
  CurrencyDollarIcon, 
  GlobeAsiaAustraliaIcon 
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "About Us – ClearDrive.lk",
  description: "Learn about ClearDrive.lk, the transparent Japanese vehicle import platform.",
};

// --- TEAM DATA CONFIGURATION ---
const teamMembers = [
  {
    name: "Malith De Silva",
    role: "Group Leader",
    image: "/team/malith.jpeg", 
  },
  {
    name: "Parindra Chameekara",
    role: "Software Engineer",
    image: "/team/parindra.jpeg",
  },
  {
    name: "Tharin De Silva",
    role: "Software Engineer",
    image: "/team/tharin.jpeg",
  },
  {
    name: "Lehan Methyuga",
    role: "UI/UX & Frontend", // Updated based on your wireframe work
    image: "/team/lehan.jpg",
  },
  {
    name: "Kalidu Indeera",
    role: "Software Engineer",
    image: "/team/kalidu.jpeg",
  },
  {
    name: "Pavara Mandara",
    role: "Software Engineer",
    image: "/team/pavara.jpeg",
  },
];

export default function About() {
  return (
    <main className="bg-brand-black min-h-screen">
      {/* --- Section 1: Hero --- */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-offwhite mb-6 leading-tight">
            Redefining Vehicle Imports with <span className="text-brand-orange">Transparency.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            We are bridging the gap between Sri Lankan buyers and the Japanese automotive market, removing hidden costs and complexity one vehicle at a time.
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/10 blur-[120px] rounded-full -z-0"></div>
      </section>

      {/* --- Section 2: Our Mission --- */}
      <section className="bg-brand-darkblue py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-offwhite">Our Mission</h2>
            <p className="text-gray-300 mt-4">To tackle the challenges of traditional importing.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-black/50 p-8 rounded-2xl border border-brand-orange/20 hover:border-brand-orange/50 transition duration-300">
              <ShieldCheckIcon className="h-12 w-12 text-brand-orange mb-4" />
              <h3 className="text-xl font-semibold text-brand-offwhite mb-3">Absolute Transparency</h3>
              <p className="text-gray-400">No hidden fees or fake auction grades. We provide verifiable data straight from Japanese sources.</p>
            </div>
            <div className="bg-brand-black/50 p-8 rounded-2xl border border-brand-orange/20 hover:border-brand-orange/50 transition duration-300">
              <CurrencyDollarIcon className="h-12 w-12 text-brand-orange mb-4" />
              <h3 className="text-xl font-semibold text-brand-offwhite mb-3">True Affordability</h3>
              <p className="text-gray-400">By streamlining the process and cutting out unnecessary middlemen, we pass the savings directly to you.</p>
            </div>
            <div className="bg-brand-black/50 p-8 rounded-2xl border border-brand-orange/20 hover:border-brand-orange/50 transition duration-300">
              <GlobeAsiaAustraliaIcon className="h-12 w-12 text-brand-orange mb-4" />
              <h3 className="text-xl font-semibold text-brand-offwhite mb-3">Seamless Tracking</h3>
              <p className="text-gray-400">From the auction house in Japan to the port in Sri Lanka, track your vehicle's journey in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: The Origin Story --- */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 relative">
               <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-darkblue to-brand-orange/30 w-full h-full flex items-center justify-center overflow-hidden relative">
                  <span className="text-brand-offwhite font-bold text-2xl relative z-10">SDGP 2025</span>
               </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-brand-offwhite mb-6">The Origin Story</h2>
              
              <div className="border-l-4 border-brand-orange pl-6 py-2 bg-brand-darkblue/20 rounded-r-lg">
                <p className="text-lg text-brand-offwhite leading-relaxed font-medium">
                  ClearDrive.lk is an academic Software Development Group Project (SDGP) conducted at the Informatics Institute of Technology (IIT).
                </p>
              </div>
              
              <p className="text-gray-400 mt-6 leading-relaxed">
                This project was conceived by a group of passionate software engineering students aiming to solve real-world logistical problems using modern technology.
              </p>
              <p className="text-sm text-brand-orange/80 mt-6 font-semibold italic">
                Disclaimer: All integrations, vehicle data, and financial transactions on this platform are simulated for academic demonstration purposes only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 4: The Team (Fully Integrated) --- */}
      <section className="bg-brand-darkblue/30 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-offwhite mb-12">Meet the SDGP Team</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-brand-black p-6 rounded-xl text-center border border-transparent hover:border-brand-orange/30 transition duration-300 group">
                        
                        {/* Image Container */}
                        <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden border-2 border-brand-orange/20 group-hover:border-brand-orange transition-colors">
                           <Image 
                             src={member.image} 
                             alt={member.name} 
                             fill 
                             className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                           />
                        </div>

                        <h4 className="text-brand-offwhite font-bold text-lg">{member.name}</h4>
                        <p className="text-brand-orange text-sm font-medium">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </main>
  );
}
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
        {/* Optional subtle background element could go here */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/10 blur-[120px] rounded-full -z-0"></div>
      </section>

      {/* --- Section 2: Our Mission (Addressing Pain Points) --- */}
      <section className="bg-brand-darkblue py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-offwhite">Our Mission</h2>
            <p className="text-gray-300 mt-4">To tackle the challenges of traditional importing.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-brand-black/50 p-8 rounded-2xl border border-brand-orange/20 hover:border-brand-orange/50 transition duration-300">
              <ShieldCheckIcon className="h-12 w-12 text-brand-orange mb-4" />
              <h3 className="text-xl font-semibold text-brand-offwhite mb-3">Absolute Transparency</h3>
              <p className="text-gray-400">No hidden fees or fake auction grades. We provide verifiable data straight from Japanese sources.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-brand-black/50 p-8 rounded-2xl border border-brand-orange/20 hover:border-brand-orange/50 transition duration-300">
              <CurrencyDollarIcon className="h-12 w-12 text-brand-orange mb-4" />
              <h3 className="text-xl font-semibold text-brand-offwhite mb-3">True Affordability</h3>
              <p className="text-gray-400">By streamlining the process and cutting out unnecessary middlemen, we pass the savings directly to you.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-brand-black/50 p-8 rounded-2xl border border-brand-orange/20 hover:border-brand-orange/50 transition duration-300">
              <GlobeAsiaAustraliaIcon className="h-12 w-12 text-brand-orange mb-4" />
              <h3 className="text-xl font-semibold text-brand-offwhite mb-3">Seamless Tracking</h3>
              <p className="text-gray-400">From the auction house in Japan to the port in Sri Lanka, track your vehicle's journey in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: The Origin Story (Academic Disclaimer) --- */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 relative">
               {/* You can replace this placeholder div with an actual image of IIT or the team later */}
               <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-darkblue to-brand-orange/30 w-full h-full flex items-center justify-center overflow-hidden relative">
                  {/* <Image src="/path-to-iit-image.jpg" alt="IIT Campus" fill className="object-cover opacity-50" /> */}
                  <span className="text-brand-offwhite font-bold text-2xl relative z-10">SDGP 2025</span>
               </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-brand-offwhite mb-6">The Origin Story</h2>
              
              {/* Styled academic notice block */}
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

      {/* --- Section 4: The Team (Optional Placeholders) --- */}
      <section className="bg-brand-darkblue/30 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-offwhite mb-12">Meet the SDGP Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Repeat this block for each team member */}
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-brand-black p-6 rounded-xl text-center">
                        <div className="w-24 h-24 bg-brand-orange/20 rounded-full mx-auto mb-4 overflow-hidden relative">
                            {/* Replace with actual team photos */}
                           {/* <Image src={`/team/member-${item}.jpg`} alt="Team Member" fill className="object-cover" /> */}
                           <div className="w-full h-full flex items-center justify-center text-brand-orange">
                             <span className="text-xs">Photo</span>
                           </div>
                        </div>
                        <h4 className="text-brand-offwhite font-bold">Student Name</h4>
                        <p className="text-brand-orange text-sm">Role (e.g., Frontend)</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </main>
  );
}
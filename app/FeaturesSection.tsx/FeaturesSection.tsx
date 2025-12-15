import React from 'react';
import { 
  Calculator, 
  Globe, 
  FileCheck, 
  CreditCard, 
  ShieldCheck, 
  Ship 
} from 'lucide-react';

// 1. Define the data structure for a feature
interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// 2. Define the feature data specific to ClearDrive.lk
const features: Feature[] = [
  {
    id: 1,
    title: 'True Cost Transparency',
    description: 'Eliminate hidden markups. Our real-time "Landed Cost Calculator" breaks down CIF, Customs Duty, PAL, and CESS before you bid.',
    icon: <Calculator className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 2,
    title: 'Direct Auction Access',
    description: 'Bypass the middleman. Browse live inventory directly from Japanese auction houses and bid on vehicles with verified auction sheets.',
    icon: <Globe className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 3,
    title: 'Digital Customs Clearance',
    description: 'Track your vehicle’s clearance in real-time. View audited duty receipts and get milestone updates from your assigned Clearing Agent.',
    icon: <FileCheck className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 4,
    title: 'Integrated Financing',
    description: 'Need a lease? Submit your income details securely through our platform and get approval from top finance partners without visiting a bank.',
    icon: <CreditCard className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 5,
    title: 'Verified Partners',
    description: 'Safety first. Every Importer and Clearing Agent on our platform undergoes strict verification and compliance audits by our admins.',
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 6,
    title: 'End-to-End Tracking',
    description: 'From the moment the vessel leaves Japan to the final gate pass at the port, monitor your shipment status on a single dashboard.',
    icon: <Ship className="w-6 h-6 text-blue-600" />,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Why Choose ClearDrive?
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Importing made simple, transparent, and safe.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We replace the complex web of brokers and paperwork with a single, audited digital platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
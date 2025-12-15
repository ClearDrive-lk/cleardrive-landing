import React from 'react';
import { 
  Calculator, 
  Globe, 
  FileCheck, 
  CreditCard, 
  ShieldCheck, 
  Ship 
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// 1. Define the data structure
interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType; // Better type for passing components
}

// 2. ClearDrive.lk Feature Data
const features: Feature[] = [
  {
    id: 1,
    title: 'True Cost Transparency',
    description: 'Eliminate hidden markups. Our real-time "Landed Cost Calculator" breaks down CIF, Customs Duty, PAL, and CESS before you bid.',
    icon: Calculator,
  },
  {
    id: 2,
    title: 'Direct Auction Access',
    description: 'Bypass the middleman. Browse live inventory directly from Japanese auction houses and bid on vehicles with verified auction sheets.',
    icon: Globe,
  },
  {
    id: 3,
    title: 'Digital Customs Clearance',
    description: 'Track your vehicle’s clearance in real-time. View audited duty receipts and get milestone updates from your assigned Clearing Agent.',
    icon: FileCheck,
  },
  {
    id: 4,
    title: 'Integrated Financing',
    description: 'Need a lease? Submit your income details securely through our platform and get approval from top finance partners without visiting a bank.',
    icon: CreditCard,
  },
  {
    id: 5,
    title: 'Verified Partners',
    description: 'Safety first. Every Importer and Clearing Agent on our platform undergoes strict verification and compliance audits by our admins.',
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: 'End-to-End Tracking',
    description: 'From the moment the vessel leaves Japan to the final gate pass at the port, monitor your shipment status on a single dashboard.',
    icon: Ship,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950" id="features">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
            Why Choose ClearDrive?
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
            Importing made simple, transparent, and safe.
          </h3>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            We replace the complex web of brokers and paperwork with a single, audited digital platform.
          </p>
        </div>

        {/* Features Grid using Shadcn Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.id} className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
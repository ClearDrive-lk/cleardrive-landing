import React from "react";
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
      'No hidden markups. Our real-time Landed Cost Calculator shows CIF, Customs Duty, PAL, and CESS before you bid.',
    icon: Calculator,
  },
  {
    id: 2,
    title: "Direct Auction Access",
    description:
      "Bid directly at Japanese auction houses with verified auction sheets — no middlemen involved.",
    icon: Globe,
  },
  {
    id: 3,
    title: "Digital Customs Clearance",
    description:
      "Track clearance progress live and view audited duty receipts from your assigned clearing agent.",
    icon: FileCheck,
  },
  {
    id: 4,
    title: "Integrated Financing",
    description:
      "Apply for leasing securely through our platform and get approvals from top finance partners.",
    icon: CreditCard,
  },
  {
    id: 5,
    title: "Verified Partners",
    description:
      "All importers and clearing agents undergo strict compliance and verification checks.",
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "End-to-End Tracking",
    description:
      "Monitor your vehicle journey from Japan to Sri Lankan port — all in one dashboard.",
    icon: Ship,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24"
    >
      {/* Decorative background blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Why ClearDrive.lk
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            A smarter way to import vehicles
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We replace brokers, paperwork, and uncertainty with a single
            transparent, audited digital platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-md shadow-blue-500/30 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover border glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-blue-500/20" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

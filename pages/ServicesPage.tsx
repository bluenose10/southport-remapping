
import React from 'react';
import { Service } from '../types';
import PageHero from '../components/PageHero';

const servicesData: Service[] = [
  {
    title: 'ECU Remapping',
    description: 'Our core service. We expertly recalibrate your vehicle\'s Engine Control Unit (ECU) to enhance its performance. By modifying the manufacturer\'s default settings, we can unlock significant gains in power, torque, and even fuel efficiency, all within safe operational limits.',
    details: [
      'Performance, Economy, or Balanced Tunes',
      'Improved throttle response for a more engaging drive',
      'Smoother and more linear power delivery',
      'Tailored specifically to your vehicle',
      'Safe, reliable, and fully reversible'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18a6 6 0 100-12 6 6 0 000 12z" /></svg>
  },
  {
    title: 'Performance Tuning (Stage 1-3)',
    description: 'For the enthusiast seeking maximum performance. We offer multi-stage tuning packages. Stage 1 is for stock vehicles, while Stages 2 and 3 are for cars with supporting hardware modifications like performance exhausts, intakes, and intercoolers.',
    details: [
      'Stage 1: Up to 35% power increase on stock hardware',
      'Stage 2/3: Requires hardware upgrades for maximum gains',
      'Custom tuning for your specific modifications',
      'Optional extras: Pops & Bangs, Hardcut Limiters',
      'Perfect for fast road and track use'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  {
    title: 'DPF / EGR Solutions',
    description: 'We offer professional software solutions for Diesel Particulate Filter (DPF) and Exhaust Gas Recirculation (EGR) systems. This service is intended for off-road or track use and can prevent costly repair bills and improve engine longevity and performance.',
    details: [
      'Prevent DPF blockages and limp mode issues',
      'Improve fuel economy and performance',
      'Reduce maintenance costs on diesel vehicles',
      'Software-based solutions',
      'For off-road vehicle use only'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" /></svg>
  },
  {
    title: 'Advanced Diagnostics',
    description: 'Before any tuning, a healthy engine is key. We use dealership-level diagnostic tools to perform comprehensive health checks on your vehicle, reading and clearing fault codes and analysing live data to ensure your car is in optimal condition for a remap.',
    details: [
      'Full system health check',
      'Identify underlying issues before tuning',
      'Live data logging and analysis',
      'Fault code reading and clearing',
      'Ensure safety and reliability of your remap'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <PageHero
        eyebrow="Services"
        title="Our Services"
        subtitle="Expert ECU tuning and vehicle performance solutions for every driver in Southport."
      />

      <main className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-10">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border-2 border-brand-red-600/30 bg-white/80 p-10 shadow-xl shadow-gray-200/70 transition-all duration-300 hover:-translate-y-2 hover:border-brand-red-600/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red-50 via-transparent to-brand-red-100 opacity-0 transition-opacity duration-300 group-hover:opacity-80"></div>
                <div className="relative flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-brand-red-50 text-brand-red-600 border border-brand-red-100 shadow-inner shadow-white">
                      {service.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-brand-red-500/70">
                        Service {index + 1}
                      </p>
                      <h2 className="text-3xl font-bold text-brand-darker">{service.title}</h2>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="rounded-2xl border border-gray-200/70 bg-white/90 p-6 shadow-inner shadow-gray-100">
                    <ul className="space-y-3">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-red-600 to-brand-red-400 shadow-[0_0_10px_rgba(239,0,0,0.4)]"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
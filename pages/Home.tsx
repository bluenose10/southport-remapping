import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Testimonial } from '../types';

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-brand-red-600' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);


const heroBackground = new URL('../assets/images/remapping-southport-merseyside.webp', import.meta.url).href;

const workshopGallery = [
  {
    src: new URL('../assets/images/car-remapping-southport.webp', import.meta.url).href,
    alt: 'Car remapping workshop southport merseyside',
  },
  {
    src: new URL('../assets/images/car-tuning-southport.webp', import.meta.url).href,
    alt: 'engine remapping near me',
  },
  {
    src: new URL('../assets/images/remap-southport.webp', import.meta.url).href,
    alt: 'High-performance car engine tuning southport',
  },
];

const featuredTestimonials: Testimonial[] = [
  {
    quote: "Absolutely brilliant service! The difference in my BMW after the remap is night and day. More power, better fuel economy, and the team were professional throughout.",
    name: 'John Davies',
    car: 'BMW 320d'
  },
  {
    quote: "Best decision I made for my Audi. The car feels completely transformed, and the service in Southport was top-notch. Highly recommend!",
    name: 'Sarah Mitchell',
    car: 'Audi A4'
  },
  {
    quote: "Professional, knowledgeable, and honest. The remap has given my Mercedes incredible performance gains while maintaining reliability.",
    name: 'Michael Thompson',
    car: 'Mercedes C220'
  }
];

const faqData = [
  {
    question: "What is car remapping and how does it work?",
    answer: "Car remapping, also known as ECU tuning, updates your car's engine software to improve performance, torque, and fuel efficiency. Our Southport remapping experts use professional tools for safe and reliable results."
  },
  {
    question: "Is ECU remapping safe for my car?",
    answer: "Yes. Our Southport ECU remapping service includes full diagnostics before and after tuning to ensure your car is safe and running perfectly."
  },
  {
    question: "What are the benefits of a car remap in Southport?",
    answer: "A professional car remap can boost acceleration, increase torque, and improve fuel economy. Our Southport remapping specialists can tailor the tune to your driving style."
  },
  {
    question: "How do I know if my car needs a remap or diagnostics check?",
    answer: "If your car feels sluggish, has poor MPG, or displays an engine light, book a car diagnostics test in Southport. We'll find issues and advise if a remap will help."
  },
  {
    question: "What happens during a car diagnostics test in Southport?",
    answer: "Our engine diagnostics service connects to your ECU to scan fault codes and identify performance or electrical issues before tuning."
  },
  {
    question: "How long does a remap take?",
    answer: "Most Southport ECU remaps take 1–2 hours including a full diagnostic scan before and after tuning."
  }
];

const FaqAccordion: React.FC<{ faq: { question: string; answer: string }[]; }> = ({ faq }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faq.map((item, index) => (
        <div key={index} className="border-2 border-brand-red-600/30 bg-white/90 rounded-2xl shadow-lg shadow-gray-200/80 overflow-hidden">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
          >
            <h3 className="text-lg font-bold text-brand-darker pr-4">{item.question}</h3>
            <svg
              className={`w-6 h-6 text-brand-red-600 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6">
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-brand-darker text-white overflow-hidden">
        <img
          src={heroBackground}
          alt="Southport Remapping Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-darker/95 via-brand-dark/70 to-black/80"></div>
        <div className="pointer-events-none absolute -top-24 -right-16 h-96 w-96 rounded-full bg-brand-red-600/25 blur-[140px] animate-float"></div>
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-72 w-72 rounded-full bg-brand-red-500/20 blur-[120px] animate-pulse-glow"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center z-10 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-red-600 uppercase leading-tight tracking-wide animate-fade-in-up">
              Remapping Southport
              <span className="block text-2xl md:text-3xl font-semibold text-brand-red-600 tracking-normal mt-4">
                ECU Remap Specialists
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-200 animate-fade-in-up [animation-delay:0.12s]">
            Remapping Southport Renko mobile professional ECU car remap services and car tuning. Unlock your vehicle's true potential with expert car remaps in Southport.
            </p>
            <div className="mt-6 flex justify-center items-center gap-4 flex-wrap animate-fade-in-up [animation-delay:0.24s]">
              <Link to="/contact" className="group bg-gradient-to-r from-brand-red-600 via-[#ff6a00] to-brand-red-700 text-white font-bold py-3.5 px-10 rounded-full transition-all duration-300 text-lg shadow-[0_20px_45px_rgba(239,0,0,0.35)] hover:shadow-[0_25px_60px_rgba(239,0,0,0.45)] hover:-translate-y-1">
                Get Your Free Quote
              </Link>
               <Link to="/services" className="rounded-full border border-white/30 text-white/90 font-semibold py-3.5 px-10 transition-all duration-300 text-lg hover:text-white hover:border-white hover:-translate-y-1 hover:bg-white/10 backdrop-blur">
                View Our Services
              </Link>
            </div>
        </div>
        <div className="relative z-10 bg-white/5 border-t border-white/10 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center py-8">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md shadow-2xl shadow-black/30 transition-transform duration-300 hover:-translate-y-1.5">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 border border-white/20 animate-float">
                      <svg className="h-7 w-7 text-brand-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-semibold">Safe & Reliable</h3>
                    <p className="text-gray-300 mt-2 text-sm">Factory warranty safe remapping</p>
                </div>
                 <div className="p-5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md shadow-2xl shadow-black/30 transition-transform duration-300 hover:-translate-y-1.5">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 border border-white/20 animate-float [animation-delay:0.15s]">
                      <svg className="h-7 w-7 text-brand-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <h3 className="text-xl font-semibold">Expert Technicians</h3>
                    <p className="text-gray-300 mt-2 text-sm">Years of experience in car tuning</p>
                </div>
                 <div className="p-5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md shadow-2xl shadow-black/30 transition-transform duration-300 hover:-translate-y-1.5">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 border border-white/20 animate-float [animation-delay:0.3s]">
                      <svg className="h-7 w-7 text-brand-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18a6 6 0 100-12 6 6 0 000 12z" /></svg>
                    </div>
                    <h3 className="text-xl font-semibold">Proven Results</h3>
                    <p className="text-gray-300 mt-2 text-sm">Up to 35% power increase</p>
                </div>
            </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-darker">Our Services</h2>
          <p className="mt-2 text-gray-600 max-w-4xl mx-auto">Professional mobile remapping Southport and engine tuning services. From ECU remapping to performance upgrades, we've got you covered.</p>
          <p className="mt-2 text-gray-600 max-w-4xl mx-auto">Transform your driving experience with professional car remapping Southport services from Renko Remaps. Our ECU remap specialists reprogram engine parameters to unlock hidden power, increase torque, and improve fuel efficiency. 
                    </p> 
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Service Item */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-brand-red-600/30 bg-white p-6 shadow-lg shadow-gray-200/80 transition-all duration-300 hover:-translate-y-2 hover:border-brand-red-600/40">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red-50/60 via-transparent to-brand-red-100/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-2xl bg-brand-red-50 text-brand-darker border border-brand-red-100 shadow-inner shadow-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18a6 6 0 100-12 6 6 0 000 12z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-darker mb-3 text-center">ECU Remapping</h3>
                <p className="text-gray-600 text-sm text-center mb-3">We expertly recalibrate your vehicle's Engine Control Unit (ECU) to enhance performance. By modifying the manufacturer's default settings, we unlock significant gains in power, torque, and fuel efficiency.</p>
                <ul className="text-xs text-gray-600 space-y-1.5 text-left">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-red-600"></span>
                    <span>Performance, Economy, or Balanced Tunes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-red-600"></span>
                    <span>Improved throttle response</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-red-600"></span>
                    <span>Tailored to your vehicle</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Service Item */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-brand-red-600/30 bg-white p-6 shadow-lg shadow-gray-200/80 transition-all duration-300 hover:-translate-y-2 hover:border-brand-red-600/40">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red-50/60 via-transparent to-brand-red-100/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-2xl bg-brand-red-50 text-brand-darker border border-brand-red-100 shadow-inner shadow-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-darker mb-3 text-center">Performance Tuning</h3>
                <p className="text-gray-600 text-sm text-center mb-3">Multi-stage tuning packages for enthusiasts seeking maximum performance. Stage 1 for stock vehicles, Stages 2 and 3 for cars with supporting hardware modifications.</p>
                <ul className="text-xs text-gray-600 space-y-1.5 text-left">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-red-600"></span>
                    <span>Stage 1: Up to 35% power increase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-red-600"></span>
                    <span>Custom tuning for modifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-red-600"></span>
                    <span>Perfect for fast road and track</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Service Item */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-brand-red-600/30 bg-white p-6 shadow-lg shadow-gray-200/80 transition-all duration-300 hover:-translate-y-2 hover:border-brand-red-600/40">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-red-50/60 via-transparent to-brand-red-100/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
               <div className="relative">
                <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-2xl bg-brand-red-50 text-brand-darker border border-brand-red-100 shadow-inner shadow-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" /></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-darker mb-3 text-center">DPF / EGR Solutions</h3>
                <p className="text-gray-600 text-sm text-center mb-3">Professional software solutions for Diesel Particulate Filter and Exhaust Gas Recirculation systems. Prevent costly repair bills and improve engine longevity.</p>
                <ul className="text-xs text-gray-600 space-y-1.5 text-left">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-red-600"></span>
                    <span>Prevent DPF blockages and limp mode</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-red-600"></span>
                    <span>Improve fuel economy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-red-600"></span>
                    <span>For off-road vehicle use only</span>
                  </li>
                </ul>
               </div>
            </div>
            {/* Service Item */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-brand-red-600/30 bg-white p-6 shadow-lg shadow-gray-200/80 transition-all duration-300 hover:-translate-y-2 hover:border-brand-red-600/40">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-red-50/60 via-transparent to-brand-red-100/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
               <div className="relative">
                <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-2xl bg-brand-red-50 text-brand-darker border border-brand-red-100 shadow-inner shadow-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-darker mb-3 text-center">Advanced Diagnostics</h3>
                <p className="text-gray-600 text-sm text-center mb-3">Dealership-level diagnostic tools to perform comprehensive health checks. We read and clear fault codes and analyse live data to ensure optimal condition.</p>
                <ul className="text-xs text-gray-600 space-y-1.5 text-left">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-red-600"></span>
                    <span>Full system health check</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-red-600"></span>
                    <span>Live data logging and analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-red-600"></span>
                    <span>Ensure safety and reliability</span>
                  </li>
                </ul>
               </div>
            </div>
          </div>
          <Link to="/services" className="mt-12 inline-block bg-brand-red-600 text-white font-bold py-3 px-8 rounded-md hover:bg-brand-red-700 transition-colors">
            View All Services
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-darker">Why Choose Renko?</h2>
            <p className="mt-2 text-gray-600 max-w-4xl mx-auto">When it comes to car remapping in Southport, we're the trusted choice for performance and reliability. From Stage 1 remaps delivering 20-30% power gains to economy maps
              maximizing MPG, we tailor every car tuning Southport service to your needs.</p>
            <p className="mt-2 text-gray-600 max-w-4xl mx-auto">Experience instant throttle response, smoother acceleration, and better overall performance. Our mobile engine remapping
              service brings expert ECU tuning directly to you across Southport and Merseyside.
            </p> 
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-200/70 transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-center justify-center h-20 w-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brand-red-600/15 to-brand-red-600/5 text-brand-darker border border-brand-red-100 shadow-inner">
                      <svg className="h-10 w-10 text-brand-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-brand-darker text-center">Latest Technology</h3>
                    <p className="text-gray-600 mt-2 text-center">State-of-the-art ECU remapping equipment and professional tuning software. Our advanced diagnostic tools allow precise modifications to engine management systems. From OBD programming to bench flashing, we remap virtually any vehicle make and model safely.</p>
                </div>
                 <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-200/70 transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-center justify-center h-20 w-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brand-red-600/15 to-brand-red-600/5 text-brand-darker border border-brand-red-100 shadow-inner">
                      <svg className="h-10 w-10 text-brand-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-brand-darker text-center">Safe Remapping</h3>
                    <p className="text-gray-600 mt-2 text-center">Every car remap Southport service includes comprehensive diagnostics before and after tuning. We work within safe operating limits, with all remaps fully tested, reversible, and backed up. Maintains warranty safety standards while delivering real performance improvements.</p>
                </div>
                 <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-200/70 transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-center justify-center h-20 w-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brand-red-600/15 to-brand-red-600/5 text-brand-darker border border-brand-red-100 shadow-inner">
                      <svg className="h-10 w-10 text-brand-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.965 5.965 0 0112 13a5.965 5.965 0 013 2.197" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-brand-darker text-center">Expert Team</h3>
                    <p className="text-gray-600 mt-2 text-center">Certified technicians with years of specialist ECU tuning and engine remapping experience across all vehicle types. From everyday cars to high-performance vehicles, we provide honest advice, transparent pricing, and professional service on every Southport car remap.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-darker">Our Commitment</h2>
            <p className="mt-2 text-gray-600 max-w-4xl mx-auto"> Renko's customer service sets us apart. We value our clients and strive to build lasting relationships, ensuring that every interaction reflects our dedication to quality and support.</p> 
               <p className="mt-2 text-gray-600 max-w-4xl mx-auto"> From your initial enquiry to post-remap aftercare, we're here to answer questions, provide honest advice,  
              and ensure you're completely satisfied with your car remapping Southport experience.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                {workshopGallery.map((image, index) => (
                  <img
                    key={image.alt}
                    src={image.src}
                    alt={image.alt}
                    width="400"
                    height="300"
                    className="rounded-2xl shadow-2xl shadow-gray-900/40 aspect-[4/3] object-cover w-full transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.02]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                ))}
            </div>
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-darker text-center">What Our Customers Say</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-center">Don't just take our word for it - hear from satisfied customers across Southport.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {featuredTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-center gap-3">
                  <StarRating rating={5} />
                  <span className="text-xs uppercase tracking-[0.3em] text-brand-darker">Verified</span>
                </div>
                <p className="text-gray-600 italic mt-4 leading-relaxed">"{testimonial.quote}"</p>
                <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.car}</p>
                </div>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
            <Link to="/testimonials" className="inline-block border border-gray-300 rounded-md px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100 hover:text-brand-darker transition-all duration-300">
                Read More Reviews
            </Link>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-red-600 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Got questions about ECU remapping in Southport? Here are answers to our most common queries.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <FaqAccordion faq={faqData} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-brand-red-600 text-white">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Ready to Unlock Your Car's Potential?</h2>
            <p className="mt-2 text-white/80 max-w-2xl mx-auto">Contact us today for a free consultation and discover how car remapping in Southport can transform your driving experience.</p>
            <div className="mt-6 flex justify-center items-center gap-4 flex-wrap">
              <Link to="/contact" className="group bg-white text-brand-darker font-bold py-3.5 px-10 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100">
                Contact Us Today
              </Link>
              <Link to="/about" className="rounded-full border border-white/50 text-white font-semibold py-3.5 px-10 transition-all duration-300 hover:bg-white/15 hover:-translate-y-1">
                Learn More About Us
              </Link>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Home;
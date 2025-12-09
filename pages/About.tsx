
import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const About: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <PageHero
        eyebrow="About"
        title="Driven by precision"
        subtitle="Southport's trusted experts in performance and economy tuning."
      />

      <main className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="rounded-3xl border-2 border-brand-red-600/30 bg-white/90 p-10 shadow-xl shadow-gray-200/70">
            <h2 className="text-3xl font-bold text-brand-darker mb-6 tracking-tight">Our Mission</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              At Renko, our mission is to unlock the true potential of your vehicle through safe, reliable, and professional ECU remapping. We are a team of passionate tuning experts dedicated to providing an unparalleled service to our customers across Southport and Merseyside. We believe that every vehicle can be improved, whether you're seeking breathtaking performance, better fuel economy, or a more responsive and enjoyable drive.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We stand apart by combining our deep automotive knowledge with the industry's most advanced, genuine tuning technology. We reject generic, off-the-shelf tuning files. Instead, every remap we perform is a custom calibration, meticulously developed for your specific vehicle, ensuring we deliver the best possible results without compromising on safety or reliability.
            </p>

            <div className="w-full h-px bg-gray-200 my-10"></div>

            <h2 className="text-3xl font-bold text-brand-darker mb-6 tracking-tight">Why remap with us?</h2>
            <ul className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Custom software',
                  description: 'Every calibration is written in-house to suit your specific vehicle and driving style.',
                },
                {
                  title: 'Pro-grade tools',
                  description: 'We only operate genuine, fully licensed diagnostic and tuning equipment.',
                },
                {
                  title: 'Satisfaction guaranteed',
                  description: '30-day money-back pledge if you are not completely satisfied with your remap.',
                },
              ].map((item) => (
                <li key={item.title} className="rounded-2xl border-2 border-brand-red-600/30 bg-gray-50/80 p-5 shadow-inner shadow-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-red-600/70 mb-2">Promise</p>
                  <h3 className="font-semibold text-brand-darker text-lg">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </li>
              ))}
            </ul>

            <div className="text-center mt-12">
              <Link to="/contact" className="rounded-full border border-brand-red-600 text-brand-red-600 font-semibold py-3.5 px-10 transition-all duration-300 hover:bg-brand-red-600 hover:text-white hover:-translate-y-1">
                  Get Your Free Quote
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
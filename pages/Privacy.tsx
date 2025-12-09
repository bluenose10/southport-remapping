import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <header className="relative overflow-hidden bg-brand-darker text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-darker via-brand-dark/80 to-black/80"></div>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_60%)]"></div>
        <div className="pointer-events-none absolute -top-20 -right-10 h-72 w-72 rounded-full bg-brand-red-600/25 blur-[110px] animate-float"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-8 translate-y-12 rounded-full bg-brand-red-500/20 blur-[130px] animate-pulse-glow"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-brand-red-600">
            Privacy Policy
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we protect your information.
          </p>
        </div>
      </header>

      <main className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border-2 border-brand-red-600/30 bg-white/90 p-10 shadow-xl shadow-gray-200/70">
            <p className="text-sm text-gray-600 mb-8 text-center">Last updated: November 27, 2025</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-darker mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed">We collect information you provide directly to us, such as when you contact us for services, request quotes, or communicate with us.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-darker mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed">We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-darker mb-4">3. Information Sharing</h2>
                <p className="text-gray-600 leading-relaxed">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-darker mb-4">4. Data Security</h2>
                <p className="text-gray-600 leading-relaxed">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-darker mb-4">5. Cookies</h2>
                <p className="text-gray-600 leading-relaxed">Our website may use cookies to enhance your browsing experience. You can control cookies through your browser settings.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-darker mb-4">6. Your Rights</h2>
                <p className="text-gray-600 leading-relaxed">You have the right to access, update, or delete your personal information. Contact us if you wish to exercise these rights.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-darker mb-4">7. Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-darker mb-4">8. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">If you have any questions about this privacy policy, please contact us at info@renkoremaps.co.uk.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;

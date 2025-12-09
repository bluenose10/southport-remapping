import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <header className="relative overflow-hidden bg-brand-darker text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-darker via-brand-dark/80 to-black/80"></div>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_60%)]"></div>
        <div className="pointer-events-none absolute -top-20 -right-10 h-72 w-72 rounded-full bg-brand-red-600/25 blur-[110px] animate-float"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-8 translate-y-12 rounded-full bg-brand-red-500/20 blur-[130px] animate-pulse-glow"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-brand-red-600">
            Terms of Service
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Please read our terms and conditions carefully.
          </p>
        </div>
      </header>

      <main className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border-2 border-brand-red-600/30 bg-white/90 p-10 shadow-xl shadow-gray-200/70">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-darker mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">By accessing and using Renko Remapping's services, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-darker mb-4">2. Use License</h2>
                <p className="text-gray-600 leading-relaxed">Permission is granted to temporarily access the materials on Renko Remapping's website for personal, non-commercial transitory viewing only.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-darker mb-4">3. Disclaimer</h2>
                <p className="text-gray-600 leading-relaxed">The materials on Renko Remapping's website are provided on an 'as is' basis. Renko Remapping makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-darker mb-4">4. Limitations</h2>
                <p className="text-gray-600 leading-relaxed">In no event shall Renko Remapping or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Renko Remapping's website.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-darker mb-4">5. Revisions</h2>
                <p className="text-gray-600 leading-relaxed">The materials appearing on Renko Remapping's website could include technical, typographical, or photographic errors. Renko Remapping does not warrant that any of the materials on its website are accurate, complete, or current.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-darker mb-4">6. Links</h2>
                <p className="text-gray-600 leading-relaxed">Renko Remapping has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-darker mb-4">7. Modifications</h2>
                <p className="text-gray-600 leading-relaxed">Renko Remapping may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-darker mb-4">8. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;

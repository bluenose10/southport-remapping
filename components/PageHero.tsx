import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, eyebrow }) => {
  return (
    <section className="relative overflow-hidden bg-brand-darker text-white py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-darker via-brand-dark/80 to-black/80"></div>
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_60%)]"></div>
      <div className="pointer-events-none absolute -top-20 -right-10 h-72 w-72 rounded-full bg-brand-red-600/25 blur-[110px] animate-float"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-8 translate-y-12 rounded-full bg-brand-red-500/20 blur-[130px] animate-pulse-glow"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">{eyebrow}</p>
        )}
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-brand-red-600">
          {title}
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;


import React from 'react';
import { Link } from 'react-router-dom';

const logo = new URL('../assets/images/remapping-southport.webp', import.meta.url).href;

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darker text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Renko Remapping Southport"
                width="40"
                height="40"
                className="h-10 w-auto object-contain"
              />
              <div className="sr-only">
                <h1>Renko</h1>
                <p>Southport Remaps</p>
              </div>
            </Link>
            <p className="text-sm">
              Southport's leading car remapping and ECU tuning specialists.
            </p>
          </div>

          <div>
            <h2 className="text-md font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/services" className="hover:text-brand-red-600 transition-colors">Services</Link>
              <Link to="/about" className="hover:text-brand-red-600 transition-colors">About Us</Link>
              <Link to="/testimonials" className="hover:text-brand-red-600 transition-colors">Testimonials</Link>
              <Link to="/contact" className="hover:text-brand-red-600 transition-colors">Contact</Link>
              <Link to="/terms" className="hover:text-brand-red-600 transition-colors">Terms</Link>
              <Link to="/privacy" className="hover:text-brand-red-600 transition-colors">Privacy</Link>
              <a href="https://share.google/pRKIpfVfyfGaiqpTb" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red-600 transition-colors">GMB</a>
              <a href="https://southport.renkoremapping.co.uk/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red-600 transition-colors">Sitemap</a>
            </div>
          </div>
          
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Renko. All Rights Reserved.</p>
          <p className="text-xs text-gray-400 mt-2">Professional car remapping services in Southport | ECU tuning specialists</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const logo = new URL('../assets/images/remapping-southport.webp', import.meta.url).href;

const NavLinks = ({ isMobile, closeMenu }: { isMobile?: boolean, closeMenu?: () => void }) => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const baseClasses = "font-semibold transition-colors duration-300 px-3 py-2 rounded-md";
  const mobileClasses = "block w-full text-base py-3 text-left";
  const desktopClasses = "text-sm";
  const activeClass = "bg-brand-red-600 text-white";
  const inactiveClass = "text-gray-300 hover:text-white hover:bg-white/10";
  
  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          onClick={closeMenu}
          end={link.path === '/'}
          className={({ isActive }) => 
            `${baseClasses} ${isMobile ? mobileClasses : desktopClasses} ${isActive ? activeClass : inactiveClass}`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-brand-darker/90 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
              <img
                src={logo}
                alt="Renko Remapping Southport"
                width="40"
                height="40"
                className="h-10 w-auto object-contain"
              />
            <div className="sr-only">
              <h1>Renko</h1>
              <p>Remapping Southport</p>
            </div>
          </Link>

          <nav className="hidden md:flex md:items-center md:space-x-1">
            <NavLinks />
          </nav>
          
          <Link to="/contact" className="hidden md:inline-block bg-brand-red-600 text-white font-bold py-2 px-5 rounded-md hover:bg-brand-red-700 transition-colors duration-300 text-sm">
            Get a Quote
          </Link>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 z-40">
          <div className="mx-4 rounded-2xl border border-white/10 bg-brand-darker/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden">
            <nav className="flex flex-col divide-y divide-white/5 px-2 py-2">
              <NavLinks isMobile={true} closeMenu={closeMenu} />
            </nav>
            <div className="border-t border-white/10 px-4 py-3">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block w-full text-center bg-brand-red-600 text-white font-semibold py-3 rounded-full hover:bg-brand-red-700 transition-colors duration-300 text-sm tracking-wide"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
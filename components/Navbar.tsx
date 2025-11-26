
import React from 'react';
import { LOGO_URL } from '../constants';

const Navbar: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img 
                    src={LOGO_URL} 
                    alt="The Power Plant Gym Logo" 
                    className="h-16 w-auto object-contain"
                />
                <div className="text-white font-display text-xl uppercase tracking-widest">
                    The Power Plant Gym
                </div>
            </div>
            
            {/* Neon line decoration */}
            <div className="hidden md:block h-px flex-1 mx-8 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-orange opacity-50"></div>
            
            <div className="flex items-center gap-6">
                <a 
                  href="#about" 
                  onClick={(e) => handleScroll(e, 'about')}
                  className="hidden md:block text-gray-400 hover:text-neon-cyan font-display uppercase tracking-wide transition-colors cursor-pointer"
                >
                  About
                </a>
                <a 
                  href="#membership" 
                  onClick={(e) => handleScroll(e, 'membership')}
                  className="hidden md:block text-gray-400 hover:text-neon-cyan font-display uppercase tracking-wide transition-colors cursor-pointer"
                >
                  Membership
                </a>
                <a 
                  href="#facility" 
                  onClick={(e) => handleScroll(e, 'facility')}
                  className="hidden md:block text-gray-400 hover:text-neon-cyan font-display uppercase tracking-wide transition-colors cursor-pointer"
                >
                  Facility
                </a>
                <button className="text-white md:hidden">
                    <span className="material-icons">menu</span>
                </button>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
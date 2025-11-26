
import React, { useEffect, useRef } from 'react';
import { LOGO_URL } from '../constants';

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollPosition = window.scrollY;
        // Parallax factor: 0.3 (moves at 30% of scroll speed)
        // This makes the background appear to move slower than the content
        const yOffset = scrollPosition * 0.3;
        
        // Use translate3d for hardware acceleration
        imageRef.current.style.transform = `translate3d(0, ${yOffset}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMembership = () => {
    const element = document.getElementById('membership');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with parallax effect */}
      <div className="absolute inset-0 z-0 bg-dark-bg">
        <img 
          ref={imageRef}
          src={LOGO_URL} 
          alt="Gym Hero Background" 
          className="absolute top-[-20%] left-0 w-full h-[140%] object-cover object-center will-change-transform transition-transform duration-75 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-dark-bg"></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center py-20">
        {/* Raven Logo Removed as requested to use image behind text */}
        
        <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.9] tracking-tight mb-4 text-white drop-shadow-lg mt-12">
          Train Hard.<br />
          <span className="text-neon-cyan text-glow">Transform.</span><br />
          Dominate.
        </h1>

        <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mb-10 tracking-wide">
          Unleash your inner power in our 24/7 hardcore facility. No excuses.
        </p>

        <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
          <a 
            href="https://www.facebook.com/profile.php?id=61580015338194"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-black transition-all duration-300 font-display font-bold text-xl uppercase tracking-wider box-glow-orange group"
          >
            Pay on Facebook
            <span className="material-icons text-base group-hover:text-black transition-colors">facebook</span>
          </a>
          
          <button 
            onClick={scrollToMembership}
            className="px-8 py-4 bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 font-display font-bold text-xl uppercase tracking-wider box-glow-cyan"
          >
            View Membership Options
          </button>
        </div>

        {/* Info strip - Enhanced Visibility */}
        <div className="mt-16 inline-flex flex-wrap justify-center gap-6 md:gap-8 bg-black/80 backdrop-blur-md border border-neon-lime/30 rounded-full px-8 py-4 shadow-xl">
            <div className="flex items-center gap-2 text-neon-lime font-body text-base md:text-lg font-bold tracking-wider uppercase">
                <span className="material-icons text-lg">location_on</span>
                8044 Goodwill Church Rd, Belews Creek, NC 27009
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-700"></div>
            <div className="flex items-center gap-2 text-neon-lime font-body text-base md:text-lg font-bold tracking-wider uppercase">
                <span className="material-icons text-lg">schedule</span>
                Open 24 Hours
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-700"></div>
            <div className="flex items-center gap-2 text-neon-lime font-body text-base md:text-lg font-bold tracking-wider uppercase">
                <span className="material-icons text-lg">phone</span>
                (336) 422-5698
            </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-bg to-transparent z-10"></div>
    </section>
  );
};

export default Hero;

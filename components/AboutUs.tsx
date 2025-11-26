
import React from 'react';
import Reveal from './Reveal';
import { CROW_LEFT_URL, CROW_RIGHT_URL } from '../constants';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 relative z-10 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Reveal>
          <div className="text-center mb-16">
             <div className="flex items-center justify-center gap-4 mb-4">
                <img src={CROW_LEFT_URL} alt="" className="h-16 md:h-24 w-auto object-contain" />
                <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter drop-shadow-lg">About Us</h2>
                <img src={CROW_RIGHT_URL} alt="" className="h-16 md:h-24 w-auto object-contain" />
             </div>
             <div className="h-1 w-24 bg-neon-cyan mx-auto mb-6 shadow-[0_0_15px_rgba(0,229,255,0.6)] rounded-full"></div>
             <h3 className="font-display text-2xl text-gray-400 uppercase tracking-widest">Our Story & Purpose</h3>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-8 font-body text-gray-300 text-lg md:text-xl leading-relaxed">
             <p>
               Founded on November 1st, 2025, The Power Plant Gym was born from deep roots in Belews Creek. 
               For 32 years, our founder called this place home, sharing community chicken stews in this very building 
               with his father. When his father passed, he felt compelled to revitalize this space in a meaningful way—to 
               honor the past by building a future where the community grows stronger together.
             </p>
             
             <p>
               This isn't a showroom; it's a workshop. Every piece of equipment is handpicked to train each muscle group properly, 
               with new gear added monthly. We feature the only dedicated posing room in the area, surrounded by original, 
               unmatched artwork. From 15 to 65, this gym is for anyone who wants to better themselves.
             </p>

             <p>
               Culture is everything here. It's a community feel where no one is shy to ask for a spot or help. 
               We value seeing you achieve your goals and leaving better than you walked in. This is a place of inclusion 
               and the belief that you can grow.
             </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutUs;
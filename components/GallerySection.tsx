
import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import Reveal from './Reveal';

const GallerySection: React.FC = () => {
  return (
    <section id="facility" className="py-20 relative z-10 scroll-mt-24">
       <div className="container mx-auto px-4">
        <Reveal>
          <div className="flex items-center justify-center gap-4 mb-12">
            <h2 className="text-center font-display text-4xl text-white uppercase tracking-widest">
                Facility Preview
            </h2>
          </div>
        </Reveal>
        
        {/* First Row: Images 1-3 */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {GALLERY_IMAGES.slice(0, 3).map((img, idx) => (
                  <div key={idx} className="group relative aspect-video md:aspect-square overflow-hidden rounded border border-gray-800">
                      <img 
                          src={img.src} 
                          alt={img.alt} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      />
                      <div className={`absolute inset-0 border-2 pointer-events-none transition-colors duration-300
                          ${idx === 0 ? 'border-neon-cyan/50 group-hover:border-neon-cyan' : ''}
                          ${idx === 1 ? 'border-neon-orange/50 group-hover:border-neon-orange' : ''}
                          ${idx === 2 ? 'border-neon-pink/50 group-hover:border-neon-pink' : ''}
                      `}></div>
                      <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform">
                          <span className="font-display text-white text-xl tracking-wide uppercase">{img.title}</span>
                      </div>
                  </div>
              ))}
          </div>
        </Reveal>

        {/* Second Row: Images 4-6 */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto mt-4">
              {GALLERY_IMAGES.slice(3, 6).map((img, idx) => (
                  <div key={idx} className="group relative aspect-video md:aspect-square overflow-hidden rounded border border-gray-800">
                      <img 
                          src={img.src} 
                          alt={img.alt} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      />
                      <div className={`absolute inset-0 border-2 pointer-events-none transition-colors duration-300
                          ${idx === 0 ? 'border-neon-lime/50 group-hover:border-neon-lime' : ''}
                          ${idx === 1 ? 'border-neon-cyan/50 group-hover:border-neon-cyan' : ''}
                          ${idx === 2 ? 'border-neon-orange/50 group-hover:border-neon-orange' : ''}
                      `}></div>
                      <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform">
                          <span className="font-display text-white text-xl tracking-wide uppercase">{img.title}</span>
                      </div>
                  </div>
              ))}
          </div>
        </Reveal>

        {/* Final Single Photo: Image 7 (Centered) */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto mt-4">
               {GALLERY_IMAGES.slice(6, 7).map((img, idx) => (
                  <div key={idx} className="md:col-start-2 group relative aspect-video md:aspect-square overflow-hidden rounded border border-gray-800">
                      <img 
                          src={img.src} 
                          alt={img.alt} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 border-2 pointer-events-none transition-colors duration-300 border-neon-pink/50 group-hover:border-neon-pink"></div>
                      <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform">
                          <span className="font-display text-white text-xl tracking-wide uppercase">{img.title}</span>
                      </div>
                  </div>
              ))}
          </div>
        </Reveal>

        {/* Equipment Text Block */}
        <Reveal>
          <div className="max-w-4xl mx-auto mt-16 font-body text-gray-300 text-lg leading-relaxed text-center">
               <h3 className="font-display text-3xl text-white mb-6 uppercase tracking-widest">
                  Equipment
               </h3>
               <p className="mb-6">
                  Our facility features a wide selection of commercial-grade machines designed for serious training. Highlights include the Arsenal Vertical Leg Press and Arsenal Belt Squat, along with an impressive range of equipment for every body part. The upstairs area includes StairMasters and additional cardio options to complete any workout program.
               </p>
               <p>
                  We also offer specialty pieces that members consistently rave about, including the Dynabody Standing Chest Press, Legends Preacher Curl, Legends Tricep Press, Hammer Strength Shoulder Press, and Hammer Strength Wide Chest. These premium machines help define The Power Plant Gym and showcase our commitment to providing a high-quality, results-driven training environment.
               </p>
          </div>
        </Reveal>
        
        <Reveal>
          <div className="text-center mt-12">
               <span className="text-neon-cyan font-display text-xl uppercase tracking-widest cursor-pointer hover:underline">Equipment Grid</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default GallerySection;

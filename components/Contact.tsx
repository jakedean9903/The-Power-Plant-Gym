
import React from 'react';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  return (
    <section className="py-20 relative z-10 pb-32">
       <div className="container mx-auto px-4">
         <div className="max-w-2xl mx-auto border-2 border-neon-cyan rounded-xl p-1 bg-dark-card box-glow-cyan">
            <div className="bg-black/80 rounded-lg p-6 text-center">
                 <Reveal>
                   <h2 className="font-display text-3xl text-white mb-6 uppercase tracking-widest">
                      Location & Hours
                  </h2>
                 </Reveal>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    {/* Map Section - Clickable */}
                    <a 
                      href="https://www.google.com/maps?q=8044+Goodwill+Church+Rd,+Belews+Creek,+NC+27009"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-1/2 aspect-video bg-gray-800 rounded relative overflow-hidden group block border border-gray-700 hover:border-neon-cyan transition-colors"
                    >
                        <img 
                          src="https://cdn.jsdelivr.net/gh/jakedean9903/Power-Plant-Images/Power%20Plant%20Location.png" 
                          alt="Location Map of The Power Plant Gym" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                             <span className="material-icons text-neon-orange text-4xl drop-shadow-lg">open_in_new</span>
                        </div>
                    </a>

                    <div className="w-full md:w-1/2 text-left space-y-4 font-body text-sm text-gray-300">
                        <div>
                            <p className="text-white font-bold text-base">8044 Goodwill Church Rd</p>
                            <p className="text-white font-bold text-base">Belews Creek, NC 27009</p>
                            <p className="text-neon-cyan mt-1 text-lg font-bold">(336) 422-5698</p>
                        </div>
                        <div className="h-px bg-gray-700"></div>
                        <div>
                            <p className="text-white font-bold mb-2 uppercase tracking-wide">HOURS:</p>
                            <div className="flex justify-between text-gray-400">
                                <span>Mon - Fri</span>
                                <span className="text-white">24 Hours</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Sat - Sun</span>
                                <span className="text-white">24 Hours</span>
                            </div>
                        </div>
                         <a 
                            href="https://www.google.com/maps?q=8044+Goodwill+Church+Rd,+Belews+Creek,+NC+27009"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center w-full mt-4 py-3 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all font-bold uppercase tracking-wider text-sm box-glow-cyan"
                         >
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
         </div>
       </div>
    </section>
  );
};

export default Contact;
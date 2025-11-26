import React from 'react';
import { HIGHLIGHTS } from '../constants';
import Reveal from './Reveal';

const Highlights: React.FC = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-center font-display text-4xl text-white mb-12 uppercase tracking-widest">
              Quick Highlights
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {HIGHLIGHTS.map((item, index) => (
            <div 
              key={index}
              className={`
                group
                flex flex-col items-center justify-center p-6
                bg-dark-card/50 backdrop-blur-sm
                border-2 rounded-lg
                transition-transform hover:-translate-y-1 duration-300
                ${item.color === 'lime' ? 'border-neon-lime text-neon-lime hover:box-glow-lime' : ''}
                ${item.color === 'cyan' ? 'border-neon-cyan text-neon-cyan hover:box-glow-cyan' : ''}
                ${item.color === 'orange' ? 'border-neon-orange text-neon-orange hover:box-glow-orange' : ''}
                ${item.color === 'pink' ? 'border-neon-pink text-neon-pink hover:box-glow-pink' : ''}
              `}
            >
              <span className="material-icons text-4xl mb-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span className="font-display font-bold text-xl uppercase tracking-wide text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
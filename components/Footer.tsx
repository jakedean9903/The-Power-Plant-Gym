
import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      {/* Main Footer Info */}
      <div className="bg-black py-8 text-center border-t border-gray-900 relative z-20">
          <p className="text-gray-500 font-display uppercase tracking-widest text-sm">
            The Power Plant Gym | 8044 Goodwill Church Rd, Belews Creek, NC 27009 | (336) 422-5698 | Open 24 Hours
          </p>
      </div>

      {/* Sticky Bottom Button */}
      <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
          <a 
            href="https://guru.gyminsight.com/join/7FWhyClX0ppqFxM?optionId=46e759de-3039-4bae-b67e-d7472f10a44c&fbclid=IwZnRzaAOTSv1leHRuA2FlbQIxMQBzcnRjBmFwcF9pZAo2NjI4NTY4Mzc5AAEeAmxJfjgx6nWrwvND_jozhCWsAMOw8u-Oo_D-eS5W_XYFmuHXMkMoiWwIGZ4_aem_VrQR238T3KXg6dw9mlLh3g"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto px-10 py-3 bg-black border-2 border-neon-orange text-neon-orange font-display font-bold text-xl uppercase tracking-wider hover:bg-neon-orange hover:text-black transition-all box-glow-orange shadow-2xl"
          >
              Join Now
          </a>
      </div>
    </>
  );
};

export default Footer;

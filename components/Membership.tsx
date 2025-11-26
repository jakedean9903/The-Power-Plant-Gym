
import React from 'react';
import Reveal from './Reveal';

const Membership: React.FC = () => {
  return (
    <section id="membership" className="py-20 relative z-10 bg-black/20 scroll-mt-24">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="flex items-center justify-center gap-4 mb-16">
              <h2 className="text-center font-display text-4xl text-white uppercase tracking-widest">
                  Membership Options
              </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            
            {/* Day Pass Card */}
            <div className="bg-dark-card/80 border-2 border-neon-orange rounded-xl p-8 flex flex-col items-center hover:box-glow-orange hover:scale-[1.02] transition-transform duration-300 h-full">
              <h3 className="font-display text-3xl text-white mb-2 uppercase">Day Pass</h3>
              <div className="text-neon-orange font-display text-5xl font-bold mb-6">$10<span className="text-xl text-gray-400 font-normal">/day</span></div>
              
              <ul className="text-gray-300 space-y-3 mb-8 font-body text-sm w-full">
                 <li className="flex items-center gap-2">
                   <span className="material-icons text-neon-orange text-sm">check</span> Single Day Access
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="material-icons text-neon-orange text-sm">check</span> Full Equipment Use
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="material-icons text-neon-orange text-sm">check</span> Pay at Door
                 </li>
              </ul>

              <a 
                  href="https://www.facebook.com/profile.php?id=61580015338194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-auto w-full py-3 border border-neon-orange text-neon-orange font-display font-bold text-lg uppercase hover:bg-neon-orange hover:text-black transition-colors"
              >
                  Get Pass
              </a>
            </div>

            {/* Monthly Card (Featured) */}
            <div className="bg-dark-card/80 border-2 border-neon-cyan rounded-xl p-8 flex flex-col items-center box-glow-cyan md:scale-110 relative z-10 h-full">
              <div className="absolute -top-4 bg-neon-cyan text-black font-display font-bold px-4 py-1 rounded text-sm uppercase">
                  Best Value
              </div>
              <h3 className="font-display text-3xl text-white mb-2 uppercase">Monthly</h3>
              <div className="text-neon-cyan font-display text-5xl font-bold mb-6">$34.99<span className="text-xl text-gray-400 font-normal">/mo</span></div>
              
               <ul className="text-gray-300 space-y-3 mb-8 font-body text-sm w-full">
                 <li className="flex items-center gap-2">
                   <span className="material-icons text-neon-cyan text-sm">check</span> Unlimited 24/7 Access
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="material-icons text-neon-cyan text-sm">check</span> No Contracts
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="material-icons text-neon-cyan text-sm">check</span> Keycard Entry
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="material-icons text-neon-cyan text-sm">check</span> Full Facility Access
                 </li>
              </ul>

              <a 
                  href="https://guru.gyminsight.com/join/7FWhyClX0ppqFxM?optionId=46e759de-3039-4bae-b67e-d7472f10a44c&fbclid=IwZnRzaAOTSv1leHRuA2FlbQIxMQBzcnRjBmFwcF9pZAo2NjI4NTY4Mzc5AAEeAmxJfjgx6nWrwvND_jozhCWsAMOw8u-Oo_D-eS5W_XYFmuHXMkMoiWwIGZ4_aem_VrQR238T3KXg6dw9mlLh3g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-auto w-full py-3 bg-neon-cyan text-black font-display font-bold text-lg uppercase hover:bg-white hover:text-black transition-colors"
              >
                  Join Now
              </a>
            </div>

            {/* Personal Training Card Wrapper */}
            <div className="flex flex-col items-center w-full">
              <div className="bg-dark-card/80 border-2 border-neon-purple rounded-xl p-8 flex flex-col items-center hover:box-glow-purple hover:scale-[1.02] transition-transform duration-300 w-full">
                <h3 className="font-display text-3xl text-white mb-2 uppercase">Training</h3>
                <div className="text-neon-purple font-display text-xl font-bold mb-6 text-center leading-tight">
                  $199.99 — One-time payment. Includes 2 weekly 30-minute training sessions.
                </div>
                
                <ul className="text-gray-300 space-y-3 mb-8 font-body text-sm w-full">
                  <li className="flex items-center gap-2">
                    <span className="material-icons text-neon-purple text-sm">check</span> 1-on-1 Coaching
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-icons text-neon-purple text-sm">check</span> Personalized Plans
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-icons text-neon-purple text-sm">check</span> Nutrition Guidance
                  </li>
                </ul>

                <a 
                    href="https://www.facebook.com/profile.php?id=61580015338194"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center mt-auto w-full py-3 border border-neon-purple text-neon-purple font-display font-bold text-lg uppercase hover:bg-neon-purple hover:text-black transition-colors"
                >
                    Inquire
                </a>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Membership;

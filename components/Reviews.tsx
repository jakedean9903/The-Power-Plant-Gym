
import React from 'react';
import ReviewSlider from './ReviewSlider';

const Reviews: React.FC = () => {
  return (
    <section className="py-20 relative z-10">
      
      {/* Visual Divider: Raven */}
      <div className="flex justify-center items-center mb-16 gap-4">
         <div className="h-px bg-gray-700 w-24 md:w-64"></div>
         <div className="flex flex-col items-center">
             <div className="text-neon-purple animate-pulse">
                {/* Modern Masculine Raven SVG */}
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-16 h-16 drop-shadow-[0_0_15px_rgba(157,0,255,0.8)] fill-current"
                >
                   <path d="M12 2L2 22L12 16L22 22L12 2Z" />
                </svg>
             </div>
         </div>
         <div className="h-px bg-gray-700 w-24 md:w-64"></div>
      </div>

      <div className="container mx-auto px-4">
        <ReviewSlider />
      </div>
    </section>
  );
};

export default Reviews;

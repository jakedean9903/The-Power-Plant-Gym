
import React, { useState, useEffect, useRef } from 'react';
import { REVIEWS } from '../constants';
import Reveal from './Reveal';

const ReviewSlider: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const delay = 7000; // 7 seconds

  const nextReview = () => {
    setActiveIdx((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setActiveIdx((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (!isPaused) {
      timeoutRef.current = window.setTimeout(
        () => setActiveIdx((prev) => (prev + 1) % REVIEWS.length),
        delay
      );
    }
    return () => resetTimeout();
  }, [activeIdx, isPaused]);

  return (
    <div className="w-full">
      <Reveal>
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-2">
            <h2 className="font-display text-4xl text-white uppercase tracking-widest">
              What Our Members Are Saying
            </h2>
          </div>
          <p className="font-body text-neon-cyan text-lg md:text-xl tracking-wide">
            Real 5-star reviews from people who love The Power Plant Gym.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div 
          className="relative max-w-4xl mx-auto px-4 md:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-500 hover:text-white transition-colors bg-black/50 hover:bg-black/80 rounded-full"
            aria-label="Previous Review"
          >
            <span className="material-icons text-3xl md:text-4xl">chevron_left</span>
          </button>

          <button 
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-500 hover:text-white transition-colors bg-black/50 hover:bg-black/80 rounded-full"
            aria-label="Next Review"
          >
            <span className="material-icons text-3xl md:text-4xl">chevron_right</span>
          </button>

          {/* Slider Viewport */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIdx * 100}%)` }}
            >
              {REVIEWS.map((review) => (
                <div key={review.id} className="min-w-full px-2 md:px-4">
                  <div className="bg-dark-card border border-neon-cyan/30 p-8 md:p-10 rounded-xl relative box-glow-cyan h-full flex flex-col justify-between min-h-[300px]">
                    
                    {/* Rating */}
                    <div className="flex gap-1 mb-6 text-neon-orange">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="material-icons text-xl">star</span>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="font-body text-gray-200 text-lg md:text-xl italic leading-relaxed mb-8 flex-grow">
                      "{review.text}"
                    </p>

                    {/* Reviewer Info */}
                    <div className="flex justify-between items-center border-t border-gray-800 pt-6">
                      <span className="font-display text-white text-2xl uppercase tracking-wide">
                        {review.author}
                      </span>
                      <div className="flex items-center gap-2 opacity-80">
                        <span className="text-gray-400 text-sm font-body">Verified Review</span>
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                          alt="Google" 
                          className="w-5 h-5 grayscale opacity-70" 
                        />
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Pagination */}
          <div className="flex justify-center gap-3 mt-8">
            {REVIEWS.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeIdx 
                    ? 'bg-neon-cyan w-8 h-2' 
                    : 'bg-gray-700 w-2 h-2 hover:bg-gray-500'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default ReviewSlider;

import React from 'react';

export const GraffitiSidebarLeft: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-24 z-0 hidden xl:flex flex-col justify-center items-center pointer-events-none mix-blend-screen animate-graffiti-pulse">
       <svg viewBox="0 0 100 600" className="h-full w-full overflow-visible">
         <defs>
            <filter id="glow-purple" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
         </defs>
         <g transform="rotate(-90 50 300)" filter="url(#glow-purple)">
            <text x="50" y="300" textAnchor="middle" fontFamily="Brush Script MT, cursive" fontSize="120" fill="none" stroke="#9D00FF" strokeWidth="4">
              HARD
            </text>
            <text x="50" y="300" textAnchor="middle" fontFamily="Brush Script MT, cursive" fontSize="118" fill="#9D00FF" opacity="0.3">
              HARD
            </text>
             <path d="M-100,280 Q50,200 200,350" fill="none" stroke="#00E5FF" strokeWidth="5" opacity="0.6" />
             <path d="M-50,320 Q100,400 250,250" fill="none" stroke="#FF00CC" strokeWidth="3" opacity="0.5" />
         </g>
         <g transform="translate(10, 100)">
            <path d="M10,0 L40,20 L10,40 Z" fill="#00E5FF" opacity="0.6"/>
            <path d="M20,50 L50,70 L20,90 Z" fill="none" stroke="#9D00FF" strokeWidth="2"/>
         </g>
       </svg>
    </div>
  );
};

export const GraffitiSidebarRight: React.FC = () => {
  return (
    <div className="fixed right-0 top-0 bottom-0 w-24 z-0 hidden xl:flex flex-col justify-center items-center pointer-events-none mix-blend-screen animate-graffiti-pulse">
       <svg viewBox="0 0 100 600" className="h-full w-full overflow-visible">
          <defs>
            <filter id="glow-orange" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
         </defs>
         <g transform="rotate(90 50 300)" filter="url(#glow-orange)">
            <text x="300" y="50" textAnchor="middle" fontFamily="Impact, sans-serif" fontSize="100" fill="none" stroke="#FF9900" strokeWidth="3">
              POWER
            </text>
             <text x="300" y="50" textAnchor="middle" fontFamily="Impact, sans-serif" fontSize="100" fill="#33FF00" opacity="0.1">
              POWER
            </text>
            <path d="M150,80 Q300,0 450,80" fill="none" stroke="#33FF00" strokeWidth="4" />
         </g>
          <g transform="translate(40, 400)">
            <circle cx="20" cy="20" r="15" fill="none" stroke="#33FF00" strokeWidth="3" />
            <path d="M10,60 L50,100 M50,60 L10,100" stroke="#FF9900" strokeWidth="4" strokeLinecap="round" />
         </g>
       </svg>
    </div>
  );
};
import React from 'react';
import { STATEMENT_IMAGE } from '../data/gymData';

export const VisualStatement: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 md:py-44 w-full overflow-hidden bg-[#080808] flex items-center justify-center">
      {/* Background Image Layer: Subtle atmospheric texture at 8-14% opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src={STATEMENT_IMAGE}
          alt="Male athlete focused strength training"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover object-[center_right] sm:object-center filter grayscale contrast-[1.2] brightness-90 opacity-10 sm:opacity-12 md:opacity-14"
        />
        {/* Dark Vignette & Edge Shadows: Keeps center uncluttered and dark for maximum typography clarity */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(8,8,8,0.90) 0%, rgba(8,8,8,0.78) 50%, rgba(8,8,8,0.96) 100%)',
          }}
        />
        {/* Top and Bottom Fades for seamless section transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-red-500 mb-6 font-athletic text-xs sm:text-sm font-bold tracking-widest uppercase">
          <span className="w-8 h-0.5 bg-red-600" />
          <span>TRAINING MINDSET</span>
          <span className="w-8 h-0.5 bg-red-600" />
        </div>

        <h2 className="font-athletic text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.95] mb-6 drop-shadow-2xl">
          SHOW UP. <br />
          <span className="text-zinc-400">PUT IN THE WORK.</span>
        </h2>

        <div className="inline-block relative py-2 px-6 bg-[#0D0D0D]/90 border border-zinc-800/90 rounded backdrop-blur-sm">
          <p className="font-athletic text-sm sm:text-base md:text-lg tracking-widest text-zinc-300 uppercase font-semibold">
            CONSISTENCY BUILDS RESULTS.
          </p>
        </div>
      </div>
    </section>
  );
};

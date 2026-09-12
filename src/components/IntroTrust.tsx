import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const IntroTrust: React.FC = () => {
  const handleScrollToLocation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('location');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="intro" className="relative py-20 md:py-28 bg-[#0D0D0D] border-y border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-lg bg-[#141414] border border-[#242424] p-8 md:p-14 overflow-hidden shadow-2xl">
          {/* Subtle accent bar */}
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1C] border border-zinc-800 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                <span className="font-athletic text-xs tracking-widest text-zinc-300 uppercase font-semibold">
                  ESTABLISHED GYM IN LATIFABAD
                </span>
              </div>

              <h2 className="font-athletic text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase mb-4 leading-tight">
                YOUR TRAINING STARTS HERE.
              </h2>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Body Factory Gym provides a focused environment for people who are serious about making fitness part of their lifestyle.
              </p>
            </div>

            {/* Right Location & Action Box */}
            <div className="lg:col-span-4 flex flex-col justify-center bg-[#090909] p-6 rounded border border-zinc-800/80">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded bg-red-950/40 border border-red-800/50 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <span className="font-athletic text-xs font-bold tracking-widest text-zinc-400 uppercase block">
                    LOCATION
                  </span>
                  <p className="font-athletic text-base sm:text-lg font-bold text-white uppercase tracking-wide">
                    LATIFABAD UNIT 7
                  </p>
                  <p className="text-xs text-zinc-400 font-medium">
                    HYDERABAD, SINDH
                  </p>
                </div>
              </div>

              <a
                href="#location"
                onClick={handleScrollToLocation}
                id="intro-view-location-btn"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-athletic text-sm font-bold tracking-widest uppercase rounded-sm transition-all duration-200 active:scale-[0.98] shadow-md group"
              >
                <span>VIEW LOCATION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

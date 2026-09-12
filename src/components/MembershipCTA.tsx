import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const MembershipCTA: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#080808] border-t border-[#1C1C1C] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-950/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141414] border border-zinc-800 text-red-500 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
          <span className="font-athletic text-xs sm:text-sm font-bold tracking-widest uppercase">
            MEMBERSHIP & INQUIRIES
          </span>
        </div>

        <h2 className="font-athletic text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6">
          READY TO START?
        </h2>

        <p className="text-zinc-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Take the first step toward making fitness a stronger part of your routine.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="#contact"
            onClick={handleScrollToContact}
            id="membership-cta-contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-athletic text-lg font-bold tracking-widest uppercase rounded-sm transition-all duration-200 shadow-xl shadow-red-950/30 hover:shadow-red-900/50 active:scale-[0.98] group"
          >
            <span>CONTACT BODY FACTORY GYM</span>
            <ArrowRight className="w-5 h-5 ml-2.5 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href={BUSINESS_INFO.directionsLink}
            target="_blank"
            rel="noopener noreferrer"
            id="membership-cta-directions"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 bg-[#141414] hover:bg-[#1E1E1E] text-zinc-200 hover:text-white border border-zinc-800 hover:border-zinc-700 font-athletic text-lg font-semibold tracking-widest uppercase rounded-sm transition-all duration-200 active:scale-[0.98] group"
          >
            <MapPin className="w-5 h-5 mr-2 text-red-500 group-hover:scale-110 transition-transform" />
            <span>GET DIRECTIONS</span>
          </a>
        </div>

        {/* Small text notice */}
        <p className="text-zinc-400 text-xs sm:text-sm tracking-wide">
          Ask about current membership options.
        </p>
      </div>
    </section>
  );
};

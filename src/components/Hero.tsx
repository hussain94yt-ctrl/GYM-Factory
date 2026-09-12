import React from 'react';
import { ArrowRight, MapPin, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO, HERO_IMAGE } from '../data/gymData';

export const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToIntro = () => {
    const el = document.getElementById('intro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* Background Image with Dark Cinematic Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={HERO_IMAGE}
          alt="Heavy barbell and weights in a focused gym environment"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.18]"
        />
        {/* Multilayer gradient overlays for flawless legibility and depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/75 to-[#080808]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/50 to-[#080808]/80" />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151515]/90 border border-zinc-800 text-zinc-300 mb-6 backdrop-blur-sm shadow-md">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span className="font-athletic text-xs sm:text-sm font-semibold tracking-widest uppercase text-zinc-300">
            BODY FACTORY GYM <span className="text-zinc-500 mx-1.5">•</span> LATIFABAD • HYDERABAD
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-athletic text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase max-w-4xl leading-[0.95] drop-shadow-xl mb-6">
          BUILD YOUR <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400">STRONGER</span>{' '}
          <span className="relative inline-block text-white">
            SELF.
            <span className="absolute -bottom-1 left-0 w-full h-1 sm:h-1.5 bg-red-600"></span>
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-zinc-300 text-base sm:text-lg md:text-xl max-w-2xl font-normal leading-relaxed mb-10 tracking-wide">
          Train with purpose. Build strength. Stay consistent.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <a
            href="#contact"
            onClick={handleScrollToContact}
            id="hero-primary-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-athletic text-lg font-bold tracking-widest uppercase rounded-sm transition-all duration-200 shadow-xl shadow-red-950/40 hover:shadow-red-900/60 active:scale-[0.98] group"
          >
            <span>START YOUR JOURNEY</span>
            <ArrowRight className="w-5 h-5 ml-2.5 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA */}
          <a
            href={BUSINESS_INFO.directionsLink}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-secondary-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 bg-[#151515]/90 hover:bg-[#202020] text-zinc-200 hover:text-white border border-zinc-800 hover:border-zinc-700 font-athletic text-lg font-semibold tracking-widest uppercase rounded-sm transition-all duration-200 active:scale-[0.98] group backdrop-blur-sm"
          >
            <MapPin className="w-5 h-5 mr-2.5 text-red-500 group-hover:scale-110 transition-transform" />
            <span>GET DIRECTIONS</span>
          </a>
        </div>

        {/* Value pillars pill below */}
        <div className="mt-14 pt-8 border-t border-zinc-800/60 grid grid-cols-3 gap-4 sm:gap-12 max-w-lg w-full text-center">
          <div>
            <span className="block font-athletic text-xs sm:text-sm tracking-widest text-zinc-400 uppercase font-semibold">
              PILLAR 01
            </span>
            <span className="font-athletic text-sm sm:text-base font-bold text-zinc-200 uppercase tracking-wider">
              STRENGTH
            </span>
          </div>
          <div>
            <span className="block font-athletic text-xs sm:text-sm tracking-widest text-zinc-400 uppercase font-semibold">
              PILLAR 02
            </span>
            <span className="font-athletic text-sm sm:text-base font-bold text-zinc-200 uppercase tracking-wider">
              DISCIPLINE
            </span>
          </div>
          <div>
            <span className="block font-athletic text-xs sm:text-sm tracking-widest text-zinc-400 uppercase font-semibold">
              PILLAR 03
            </span>
            <span className="font-athletic text-sm sm:text-base font-bold text-zinc-200 uppercase tracking-wider">
              PROGRESS
            </span>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <button
        type="button"
        onClick={handleScrollToIntro}
        aria-label="Scroll down to introduction section"
        id="hero-scroll-indicator"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-zinc-400 hover:text-white transition-colors cursor-pointer group focus:outline-none"
      >
        <span className="font-athletic text-[10px] tracking-widest uppercase opacity-75 group-hover:opacity-100">
          EXPLORE
        </span>
        <div className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center p-1 group-hover:border-zinc-500 transition-colors">
          <div className="w-1 h-2 rounded-full bg-red-600 animate-bounce" />
        </div>
        <ChevronDown className="w-4 h-4 -mt-1 text-zinc-400 group-hover:text-red-500 transition-colors" />
      </button>
    </section>
  );
};

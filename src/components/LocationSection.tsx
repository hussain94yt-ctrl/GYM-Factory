import React from 'react';
import { MapPin, Navigation, ExternalLink, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 md:py-32 bg-[#0D0D0D] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-red-500 mb-3">
            <span className="w-4 h-0.5 bg-red-600" />
            <span className="font-athletic text-xs sm:text-sm font-bold tracking-widest uppercase">
              FACILITY LOCATION
            </span>
          </div>

          <h2 className="font-athletic text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-none mb-3">
            FIND BODY FACTORY GYM
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg">
            Located in Latifabad Unit 7, Hyderabad.
          </p>
        </div>

        {/* Layout Grid: Details & Actions on Left, Responsive Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Address Card & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#151515] border border-zinc-800 rounded p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-red-600" />

              <div className="flex items-center gap-3 text-red-500 mb-6">
                <MapPin className="w-6 h-6 shrink-0" />
                <span className="font-athletic text-sm font-bold tracking-widest uppercase text-zinc-300">
                  OFFICIAL PHYSICAL ADDRESS
                </span>
              </div>

              {/* Exact Address Format */}
              <div className="space-y-1 mb-8">
                <p className="font-athletic text-2xl sm:text-3xl font-black text-white tracking-wider uppercase">
                  BODY FACTORY GYM
                </p>
                <p className="font-athletic text-lg sm:text-xl font-bold text-zinc-200 tracking-wide uppercase">
                  LATIFABAD UNIT 7
                </p>
                <p className="font-athletic text-base sm:text-lg font-semibold text-zinc-400 tracking-wide uppercase">
                  HYDERABAD, SINDH, PAKISTAN
                </p>
              </div>

              {/* Coordinates reference */}
              <div className="p-3.5 bg-[#0D0D0D] rounded border border-zinc-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Compass className="w-4 h-4 text-red-500" />
                  <span>GPS Coordinates:</span>
                </div>
                <span className="font-mono text-zinc-300 font-semibold">
                  25.3711354, 68.3537016
                </span>
              </div>
            </div>

            {/* Prominent Map Action Buttons */}
            <div className="space-y-3.5">
              {/* GET DIRECTIONS */}
              <a
                href={BUSINESS_INFO.directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                id="location-get-directions-btn"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-athletic text-lg font-bold tracking-widest uppercase rounded-sm transition-all duration-200 shadow-xl shadow-red-950/30 hover:shadow-red-900/50 active:scale-[0.98] group"
              >
                <Navigation className="w-5 h-5 transition-transform group-hover:rotate-45" />
                <span>GET DIRECTIONS</span>
              </a>

              {/* OPEN IN GOOGLE MAPS */}
              <a
                href={BUSINESS_INFO.mapsShortLink}
                target="_blank"
                rel="noopener noreferrer"
                id="location-open-maps-btn"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#181818] hover:bg-[#222222] text-zinc-200 hover:text-white border border-zinc-700 font-athletic text-lg font-bold tracking-widest uppercase rounded-sm transition-all duration-200 active:scale-[0.98] group"
              >
                <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-red-400" />
                <span>OPEN IN GOOGLE MAPS</span>
              </a>
            </div>

            {/* Note on Location */}
            <div className="text-xs text-zinc-400 leading-relaxed px-1">
              Easy access from main Latifabad Unit 7 thoroughfares. Tap "Get Directions" for live GPS navigation.
            </div>
          </div>

          {/* Right Column: Responsive Google Map Container */}
          <div className="lg:col-span-7">
            <div className="w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] rounded-lg overflow-hidden border border-zinc-800 bg-[#121212] shadow-2xl relative">
              {/* Responsive Google Maps Iframe */}
              <iframe
                src={BUSINESS_INFO.mapsEmbedSrc}
                title="Body Factory Gym Google Map Location"
                className="w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] border-0"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />

              {/* Overlay Label */}
              <div className="absolute top-3 right-3 bg-[#0A0A0A]/90 backdrop-blur-md border border-zinc-800 px-3 py-1.5 rounded pointer-events-none shadow-md hidden sm:block">
                <span className="font-athletic text-xs font-bold text-zinc-200 tracking-wider uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                  VERIFIED PIN • LATIFABAD UNIT 7
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

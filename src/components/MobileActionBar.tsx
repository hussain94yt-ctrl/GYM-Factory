import React from 'react';
import { Navigation, MapPin, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const MobileActionBar: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Quick Actions"
      id="mobile-bottom-action-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-lg border-t border-zinc-800/90 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* GET DIRECTIONS */}
        <a
          href={BUSINESS_INFO.directionsLink}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bar-directions"
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-red-600 active:bg-red-700 text-white font-athletic text-[11px] font-bold tracking-wider uppercase transition-colors shadow-md"
        >
          <Navigation className="w-4 h-4 mb-0.5" />
          <span>DIRECTIONS</span>
        </a>

        {/* GOOGLE MAPS */}
        <a
          href={BUSINESS_INFO.mapsShortLink}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bar-maps"
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-[#181818] active:bg-[#252525] border border-zinc-700 text-zinc-200 font-athletic text-[11px] font-bold tracking-wider uppercase transition-colors"
        >
          <MapPin className="w-4 h-4 text-red-500 mb-0.5" />
          <span>MAPS PIN</span>
        </a>

        {/* INQUIRE */}
        <a
          href="#contact"
          onClick={handleScrollToContact}
          id="mobile-bar-inquire"
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-[#181818] active:bg-[#252525] border border-zinc-700 text-zinc-200 font-athletic text-[11px] font-bold tracking-wider uppercase transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-zinc-400 mb-0.5" />
          <span>INQUIRE</span>
        </a>
      </div>
    </aside>
  );
};

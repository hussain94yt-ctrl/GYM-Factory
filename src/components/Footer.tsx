import React from 'react';
import { ArrowUp, MapPin, ExternalLink } from 'lucide-react';
import { NAV_LINKS, BUSINESS_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-zinc-900 pt-16 pb-24 md:pb-16 text-zinc-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-sm bg-[#151515] border border-red-600/70 flex items-center justify-center font-athletic text-lg text-red-600 font-bold">
                BF
              </div>
              <div className="flex flex-col">
                <span className="font-athletic text-2xl font-black tracking-wider text-white leading-none">
                  BODY FACTORY
                </span>
                <span className="font-athletic text-xs tracking-widest text-zinc-400 font-bold leading-none mt-1">
                  GYM
                </span>
              </div>
            </div>

            <p className="font-athletic text-lg font-bold tracking-wider text-zinc-300 uppercase">
              "{BUSINESS_INFO.tagline}"
            </p>

            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              Providing a dedicated strength and conditioning environment in Latifabad Unit 7, Hyderabad, Sindh.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-athletic text-xs font-bold text-red-500 uppercase tracking-widest mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-athletic text-sm uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Google Maps Link */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-athletic text-xs font-bold text-red-500 uppercase tracking-widest mb-4">
              LOCATION
            </h4>
            <div className="flex items-start gap-2.5 text-zinc-300 text-sm">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-1" />
              <span>{BUSINESS_INFO.fullAddress}</span>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.mapsShortLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-red-400 font-athletic text-sm font-bold uppercase tracking-wider group transition-colors"
              >
                <span>OPEN MAP</span>
                <ExternalLink className="w-4 h-4 text-red-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 Body Factory Gym. All Rights Reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-white font-athletic text-xs tracking-wider uppercase transition-colors cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <div className="w-6 h-6 rounded bg-[#151515] border border-zinc-800 flex items-center justify-center group-hover:border-red-600 transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-zinc-400 group-hover:text-red-500" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, BUSINESS_INFO } from '../data/gymData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'experience', 'gallery', 'location', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/95 backdrop-blur-md py-3.5 border-b border-[#222222] shadow-2xl'
          : 'bg-gradient-to-b from-[#080808]/80 to-transparent py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
          id="navbar-brand-logo"
        >
          <div className="w-9 h-9 rounded-sm bg-[#151515] border border-red-600/60 flex items-center justify-center font-athletic text-xl text-red-600 font-bold group-hover:border-red-500 transition-colors shadow-sm">
            BF
          </div>
          <div className="flex flex-col text-left">
            <span className="font-athletic text-xl sm:text-2xl font-extrabold tracking-wider text-white leading-none group-hover:text-red-500 transition-colors">
              BODY FACTORY
            </span>
            <span className="font-athletic text-xs sm:text-sm tracking-widest text-zinc-400 font-bold flex items-center gap-1 leading-none mt-1">
              GYM <span className="w-1 h-1 rounded-full bg-red-600 inline-block"></span>
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-normal hidden sm:inline">
                LATIFABAD
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav-links">
          {NAV_LINKS.map((link) => {
            const sectionKey = link.href.replace('#', '');
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-athletic text-sm tracking-wider uppercase transition-all duration-200 relative py-1 focus:outline-none focus-visible:text-red-500 ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-zinc-400 hover:text-white font-semibold'
                }`}
                id={`nav-link-${sectionKey}`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 animate-in fade-in duration-200" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            id="navbar-cta-join"
            className="group relative inline-flex items-center justify-center px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-athletic tracking-wider text-sm font-bold uppercase rounded-sm transition-all duration-200 active:scale-[0.98] shadow-lg shadow-red-950/30 hover:shadow-red-900/50"
          >
            <span>JOIN / INQUIRE</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="sm:hidden text-xs font-athletic uppercase font-bold tracking-wider px-3 py-1.5 bg-red-600 text-white rounded-sm"
          >
            INQUIRE
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900/70 rounded border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-label="Toggle Navigation Menu"
            id="navbar-mobile-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden bg-[#0D0D0D]/98 border-b border-zinc-800 px-6 py-6 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const sectionKey = link.href.replace('#', '');
              const isActive = activeSection === sectionKey;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-athletic text-base tracking-widest uppercase flex items-center justify-between py-2 border-b border-zinc-900/60 ${
                    isActive ? 'text-red-500 font-bold' : 'text-zinc-300 hover:text-white'
                  }`}
                  id={`mobile-nav-link-${sectionKey}`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>}
                </a>
              );
            })}

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-3 bg-red-600 hover:bg-red-700 text-white font-athletic tracking-wider font-bold uppercase rounded-sm shadow-md"
              >
                START YOUR INQUIRY
              </a>
              <a
                href={BUSINESS_INFO.directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-athletic tracking-wider font-semibold uppercase text-sm rounded-sm"
              >
                GET DIRECTIONS (GOOGLE MAPS)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

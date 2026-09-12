import React from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface NotFoundProps {
  onBackToHome?: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onBackToHome }) => {
  const handleHomeClick = () => {
    if (onBackToHome) {
      onBackToHome();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col justify-between selection:bg-red-600 selection:text-white px-4 py-12 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Brand Header */}
      <header className="max-w-7xl mx-auto w-full flex items-center justify-between z-10">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleHomeClick();
          }}
          className="flex items-center gap-2.5"
        >
          <div className="w-9 h-9 rounded-sm bg-[#151515] border border-red-600/70 flex items-center justify-center font-athletic text-xl text-red-600 font-bold">
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
        </a>
      </header>

      {/* Center 404 Content */}
      <main className="max-w-xl mx-auto w-full text-center my-auto py-16 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/40 border border-red-800/40 text-red-500 font-athletic text-sm font-bold tracking-widest uppercase mb-6">
          ERROR 404
        </div>

        <h1 className="font-athletic text-6xl sm:text-7xl md:text-8xl font-black text-white uppercase tracking-tight leading-none mb-4">
          PAGE NOT FOUND
        </h1>

        <p className="font-sans text-zinc-300 text-lg sm:text-xl font-normal max-w-md mx-auto mb-8 leading-relaxed">
          Looks like you've taken a wrong turn. Let's get you back to the training floor.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleHomeClick}
            id="not-found-back-home-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-athletic text-base font-bold tracking-widest uppercase rounded-sm transition-all duration-200 shadow-xl shadow-red-950/40 cursor-pointer active:scale-98"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>BACK TO HOME</span>
          </button>

          <a
            href={BUSINESS_INFO.directionsLink}
            target="_blank"
            rel="noopener noreferrer"
            id="not-found-directions-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#141414] hover:bg-[#1E1E1E] text-zinc-200 hover:text-white border border-zinc-800 font-athletic text-base font-bold tracking-widest uppercase rounded-sm transition-all duration-200"
          >
            <MapPin className="w-4 h-4 text-red-500" />
            <span>GET DIRECTIONS</span>
          </a>
        </div>
      </main>

      {/* Footer / Copyright */}
      <footer className="max-w-7xl mx-auto w-full text-center text-xs text-zinc-400 z-10">
        © 2026 Body Factory Gym. Latifabad Unit 7, Hyderabad, Sindh, Pakistan.
      </footer>
    </div>
  );
};

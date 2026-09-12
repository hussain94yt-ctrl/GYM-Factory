import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/gymData';
import { GalleryCategory, GalleryItem } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, Info } from 'lucide-react';

const CATEGORIES: GalleryCategory[] = ['ALL', 'GYM', 'TRAINING', 'EQUIPMENT', 'FITNESS'];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('ALL');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 'ALL'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
    );
  };

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  };

  const activeItem =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-red-500 mb-3">
              <span className="w-4 h-0.5 bg-red-600" />
              <span className="font-athletic text-xs sm:text-sm font-bold tracking-widest uppercase">
                GALLERY & ATMOSPHERE
              </span>
            </div>
            <h2 className="font-athletic text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">
              INSIDE BODY FACTORY
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#121212] border border-zinc-800 rounded">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveLightboxIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-sm font-athletic text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Note on imagery replacement for client presentation */}
        <div className="mb-8 p-3.5 bg-[#121212] border border-zinc-800/80 rounded flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-red-500 shrink-0" />
            <span>
              Curated fitness photography showcasing training atmosphere. Facility-specific photos can be integrated directly.
            </span>
          </div>
          <span className="hidden sm:inline font-athletic text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
            CLICK TO EXPAND
          </span>
        </div>

        {/* Gallery Grid: Asymmetrical masonry on desktop, 2-col tablet, 1-col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            // Apply varied heights for editorial masonry feel
            const isFeatured = idx === 0 || idx === 5;
            const spanClass = isFeatured ? 'sm:col-span-2 lg:col-span-2' : '';
            const heightClass = isFeatured
              ? 'h-80 sm:h-96 md:h-[420px]'
              : item.aspectRatio === 'portrait'
              ? 'h-96 sm:h-[420px]'
              : 'h-72 sm:h-80 md:h-[340px]';

            return (
              <div
                key={item.id}
                onClick={() => setActiveLightboxIndex(idx)}
                className={`group relative rounded overflow-hidden bg-[#121212] border border-zinc-800 hover:border-zinc-700 cursor-pointer transition-all duration-300 shadow-xl ${spanClass} ${heightClass}`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter brightness-[0.8] contrast-[1.12] transition-transform duration-700 group-hover:scale-105 group-hover:brightness-[0.9]"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Category Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 rounded bg-[#0A0A0A]/90 backdrop-blur-md border border-zinc-800 font-athletic text-[11px] font-bold text-red-500 uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>

                {/* Hover Expand Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded bg-[#0A0A0A]/90 backdrop-blur-md border border-zinc-800 flex items-center justify-center text-zinc-300 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-105">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>

                {/* Bottom Title & Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-athletic text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-1 drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs line-clamp-1 group-hover:text-zinc-300 transition-colors">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex(null);
            }}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-[#1A1A1A] border border-zinc-700 text-white hover:bg-red-600 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous Image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#1A1A1A]/80 hover:bg-zinc-800 border border-zinc-700 text-white transition-all cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next Image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#1A1A1A]/80 hover:bg-zinc-800 border border-zinc-700 text-white transition-all cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded overflow-hidden border border-zinc-800 bg-[#0A0A0A] max-h-[75vh]">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>
            <div className="mt-4 text-center max-w-xl">
              <div className="inline-block px-2.5 py-0.5 mb-1.5 rounded bg-[#161616] border border-zinc-800 text-red-500 font-athletic text-xs uppercase font-bold tracking-widest">
                {activeItem.category}
              </div>
              <h4 className="font-athletic text-xl text-white font-bold uppercase tracking-wider">
                {activeItem.title}
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

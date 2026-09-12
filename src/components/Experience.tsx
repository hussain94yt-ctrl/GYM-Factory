import React from 'react';
import { Dumbbell, Activity, Flame, TrendingUp } from 'lucide-react';
import { EXPERIENCE_CARDS } from '../data/gymData';

export const Experience: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return <Dumbbell className="w-7 h-7 text-red-500" />;
      case 'Activity':
        return <Activity className="w-7 h-7 text-red-500" />;
      case 'Flame':
        return <Flame className="w-7 h-7 text-red-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-7 h-7 text-red-500" />;
      default:
        return <Dumbbell className="w-7 h-7 text-red-500" />;
    }
  };

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#0D0D0D] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161616] border border-zinc-800 text-red-500 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
            <span className="font-athletic text-xs sm:text-sm font-bold tracking-widest uppercase">
              FOUNDATIONAL FITNESS PILLARS
            </span>
          </div>

          <h2 className="font-athletic text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase leading-none mb-4">
            THE FITNESS EXPERIENCE
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Essential principles of sustainable physical conditioning and regular training.
          </p>
        </div>

        {/* 4 Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCE_CARDS.map((card) => (
            <div
              key={card.id}
              className="group relative bg-[#151515] hover:bg-[#181818] rounded border border-zinc-800 hover:border-zinc-700 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60 overflow-hidden"
            >
              {/* Subtle top red accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-red-600 transition-colors duration-300" />

              <div>
                {/* Header row with card number & icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded bg-[#0D0D0D] border border-zinc-800 group-hover:border-red-900/50 flex items-center justify-center transition-colors">
                    {getIcon(card.iconName)}
                  </div>
                  <span className="font-athletic text-2xl font-black text-zinc-500 group-hover:text-red-500 transition-colors">
                    {card.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-athletic text-2xl font-black text-white tracking-wider uppercase mb-3 group-hover:text-zinc-100">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="mt-8 pt-4 border-t border-zinc-900/80 flex items-center justify-between text-xs font-athletic tracking-widest text-zinc-500 uppercase">
                <span>CORE CONCEPT</span>
                <span className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-red-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

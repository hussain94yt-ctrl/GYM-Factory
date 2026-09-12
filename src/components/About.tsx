import React from 'react';
import { ABOUT_IMAGE } from '../data/gymData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const principles = [
    {
      num: '01',
      title: 'CONSISTENCY',
      desc: 'Showing up day after day is what turns intent into tangible physical results.',
    },
    {
      num: '02',
      title: 'STRENGTH',
      desc: 'Grounding your training in structured resistance and progressive movement.',
    },
    {
      num: '03',
      title: 'PROGRESS',
      desc: 'Tracking individual forward momentum at your own dedicated pace.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#080808] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-950/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Editorial Image with Athletic Frame */}
          <div className="lg:col-span-6 order-1 lg:order-1">
            <div className="relative group">
              {/* Outer decorative borders */}
              <div className="absolute -inset-2 rounded border border-zinc-800/80 -z-10 group-hover:border-zinc-700 transition-colors" />
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-red-600" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-red-600" />

              <div className="relative rounded overflow-hidden aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] bg-zinc-950 shadow-2xl">
                <img
                  src={ABOUT_IMAGE}
                  alt="Male athlete performing disciplined strength training in gym"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />

                {/* Corner Location Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded bg-[#0D0D0D]/90 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                  <div>
                    <span className="font-athletic text-xs font-bold text-red-500 uppercase tracking-widest block">
                      PURPOSE-BUILT
                    </span>
                    <span className="font-athletic text-sm font-bold text-white uppercase tracking-wider">
                      FOCUSED GYM ENVIRONMENT
                    </span>
                  </div>
                  <span className="font-athletic text-xs text-zinc-400 font-bold border border-zinc-700 px-2 py-1 rounded">
                    HYD • PK
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6 order-2 lg:order-2">
            <div className="inline-flex items-center gap-2 text-red-500 mb-3">
              <span className="w-4 h-0.5 bg-red-600" />
              <span className="font-athletic text-sm font-bold tracking-widest uppercase">
                ABOUT BODY FACTORY
              </span>
            </div>

            <h2 className="font-athletic text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 leading-none">
              TRAIN WITH PURPOSE.
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              Whether your goal is to build strength, improve fitness or simply become more consistent with your training, Body Factory Gym gives you a place to show up, put in the work and keep progressing.
            </p>

            {/* 3 Visual Elements */}
            <div className="space-y-5 mb-10">
              {principles.map((p) => (
                <div
                  key={p.num}
                  className="group p-4 sm:p-5 rounded bg-[#0E0E0E] border border-zinc-800/80 hover:border-zinc-700 hover:bg-[#131313] transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="font-athletic text-xl sm:text-2xl font-black text-red-600 tracking-wider shrink-0 mt-0.5">
                      {p.num}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1.5">
                        <h3 className="font-athletic text-lg sm:text-xl font-bold text-white tracking-wider uppercase">
                          {p.title}
                        </h3>
                        {/* Red accent line */}
                        <div className="h-0.5 w-10 bg-red-600/70 group-hover:w-16 transition-all duration-300" />
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Link to inquiries */}
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-2 text-white hover:text-red-400 font-athletic text-base font-bold tracking-wider uppercase group transition-colors"
            >
              <span>INQUIRE ABOUT MEMBERSHIP</span>
              <ArrowRight className="w-4 h-4 text-red-500 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroTrust } from './components/IntroTrust';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { VisualStatement } from './components/VisualStatement';
import { Gallery } from './components/Gallery';
import { MembershipCTA } from './components/MembershipCTA';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { NotFound } from './components/NotFound';

export default function App() {
  const [isNotFound, setIsNotFound] = useState(() => {
    const path = window.location.pathname;
    return path !== '/' && path !== '' && path !== '/index.html';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setIsNotFound(path !== '/' && path !== '' && path !== '/index.html');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleBackToHome = () => {
    window.history.pushState(null, '', '/');
    setIsNotFound(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isNotFound) {
    return <NotFound onBackToHome={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-red-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Full-screen Cinematic Hero */}
        <Hero />

        {/* Intro & Trust Section */}
        <IntroTrust />

        {/* Editorial About Section */}
        <About />

        {/* The Fitness Experience (4 Pillars) */}
        <Experience />

        {/* Visual Statement Banner */}
        <VisualStatement />

        {/* Gallery & Lightbox */}
        <Gallery />

        {/* Membership Call to Action */}
        <MembershipCTA />

        {/* Verified Location & Responsive Google Map */}
        <LocationSection />

        {/* Contact & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed Conversion Action Bar */}
      <MobileActionBar />
    </div>
  );
}

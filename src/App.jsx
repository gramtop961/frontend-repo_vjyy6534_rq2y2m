import React from 'react';
import Hero from './components/Hero';
import CourseTracks from './components/CourseTracks';
import Roadmap from './components/Roadmap';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-inter">
      {/* Starfield + neon vignette */}
      <div className="pointer-events-none fixed inset-0 mix-blend-screen opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(244,114,182,0.12),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(34,197,94,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(2,6,23,0.85))]" />
      </div>

      <Hero />
      <CourseTracks />
      <Roadmap />
      <Testimonials />

      <footer className="relative border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-white/60">
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text font-semibold text-transparent">Retro Futurista</span> • © {new Date().getFullYear()} IA Tech Academy
        </div>
      </footer>
    </div>
  );
};

export default App;

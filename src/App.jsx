import React from 'react';
import Hero from './components/Hero';
import CourseTracks from './components/CourseTracks';
import Roadmap from './components/Roadmap';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-inter text-slate-100">
      <Hero />
      <CourseTracks />
      <Roadmap />
      <Testimonials />
      <footer className="border-t border-white/10 bg-slate-900/80 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-white/60">
          Construido para aprender y crear. © {new Date().getFullYear()} IA Tech Academy
        </div>
      </footer>
    </div>
  );
};

export default App;

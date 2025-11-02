import React, { useEffect, useRef } from 'react';
import { Star, Users } from 'lucide-react';
import anime from 'animejs';

const testimonials = [
  {
    name: 'Laura G.',
    role: 'Frontend Developer',
    quote:
      'Empecé sin experiencia y hoy construyo interfaces completas. La estructura por rutas me mantuvo motivada.',
  },
  {
    name: 'Carlos M.',
    role: 'Data Analyst',
    quote:
      'Las secciones de algoritmos y ML son claras y prácticas. Los proyectos guiados me dieron confianza.',
  },
  {
    name: 'Ariana P.',
    role: 'MLOps Engineer',
    quote:
      'La parte de IA aplicada me ayudó a integrar LLMs en productos reales. Súper recomendado.',
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    anime({
      targets: el.querySelectorAll('[data-testi]'),
      opacity: [0, 1],
      scale: [0.96, 1],
      duration: 600,
      delay: anime.stagger(120),
      easing: 'easeOutCubic',
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Historias de la comunidad</h2>
          <p className="mt-2 text-white/70">Personas reales avanzando en su carrera con un plan claro.</p>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 sm:flex">
          <Users className="h-4 w-4 text-emerald-400" />
          8k+ estudiantes
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} data-testi className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
            <div className="mb-3 flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-white/90">“{t.quote}”</p>
            <div className="mt-4 text-sm text-white/70">{t.name} • {t.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

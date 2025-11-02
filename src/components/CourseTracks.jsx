import React, { useEffect, useRef } from 'react';
import { Code, Brain, Database, Rocket } from 'lucide-react';
import anime from 'animejs';

const tracks = [
  {
    id: 'fundamentos',
    title: 'Fundamentos de Programación',
    description:
      'Variables, control de flujo, funciones y pensamiento computacional. Ideal para empezar desde cero.',
    color: 'from-cyan-400 to-fuchsia-400',
    icon: Code,
    items: ['Lógica básica', 'Python esencial', 'Retos prácticos'],
  },
  {
    id: 'datos',
    title: 'Estructuras de Datos y Algoritmos',
    description:
      'Listas, pilas, colas, árboles y grafos. Complejidad temporal y patrones de resolución de problemas.',
    color: 'from-fuchsia-400 to-emerald-400',
    icon: Database,
    items: ['Big-O', 'Algoritmos clave', 'Entrevista técnica'],
  },
  {
    id: 'web',
    title: 'Desarrollo Web Moderno',
    description:
      'Frontend con React, Tailwind y APIs REST. Construye aplicaciones completas y accesibles.',
    color: 'from-cyan-400 to-emerald-400',
    icon: Rocket,
    items: ['React + Vite', 'Diseño con Tailwind', 'Consumo de APIs'],
  },
  {
    id: 'ia',
    title: 'Inteligencia Artificial aplicada',
    description:
      'Fundamentos de ML, redes neuronales y construcción de apps con modelos de lenguaje.',
    color: 'from-fuchsia-400 to-cyan-400',
    icon: Brain,
    items: ['ML con Python', 'Redes neuronales', 'Apps con LLMs'],
  },
];

const TrackCard = ({ track }) => {
  const Icon = track.icon;
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur transition hover:shadow-cyan-400/20">
      {/* neon sweep */}
      <div className={`pointer-events-none absolute -inset-1 opacity-0 blur-2xl transition duration-700 group-hover:opacity-20 bg-gradient-to-br ${track.color}`} />

      <div className="relative">
        <div className="flex items-center gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${track.color} shadow-[0_0_24px_rgba(56,189,248,0.3)]`}>
            <Icon className="h-6 w-6 text-slate-950" />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">{track.title}</h3>
        </div>
        <p className="mt-3 text-sm text-white/80">{track.description}</p>
        <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-white/80">
          {track.items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <a
            href={`#${track.id}`}
            className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
          >
            Explorar ruta
          </a>
        </div>
      </div>
    </div>
  );
};

const CourseTracks = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    anime({
      targets: el.querySelectorAll('[data-track]'),
      opacity: [0, 1],
      translateY: [18, 0],
      duration: 600,
      delay: anime.stagger(120),
      easing: 'easeOutQuad',
    });
  }, []);

  return (
    <section ref={sectionRef} id="tracks" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-emerald-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Rutas de aprendizaje
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Avanza paso a paso con planes curados. Desde la base hasta proyectos con IA listos para producción.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tracks.map((track) => (
          <div key={track.id} data-track>
            <TrackCard track={track} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseTracks;

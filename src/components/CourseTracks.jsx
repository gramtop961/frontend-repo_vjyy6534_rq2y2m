import React from 'react';
import { Code, Brain, Database, Rocket } from 'lucide-react';

const tracks = [
  {
    id: 'fundamentos',
    title: 'Fundamentos de Programación',
    description:
      'Variables, control de flujo, funciones y pensamiento computacional. Ideal para empezar desde cero.',
    color: 'from-emerald-500 to-teal-500',
    icon: Code,
    items: ['Lógica básica', 'Python esencial', 'Retos prácticos'],
  },
  {
    id: 'datos',
    title: 'Estructuras de Datos y Algoritmos',
    description:
      'Listas, pilas, colas, árboles y grafos. Complejidad temporal y patrones de resolución de problemas.',
    color: 'from-indigo-500 to-blue-500',
    icon: Database,
    items: ['Big-O', 'Algoritmos clave', 'Entrevista técnica'],
  },
  {
    id: 'web',
    title: 'Desarrollo Web Moderno',
    description:
      'Frontend con React, Tailwind y APIs REST. Construye aplicaciones completas y accesibles.',
    color: 'from-fuchsia-500 to-pink-500',
    icon: Rocket,
    items: ['React + Vite', 'Diseño con Tailwind', 'Consumo de APIs'],
  },
  {
    id: 'ia',
    title: 'Inteligencia Artificial aplicada',
    description:
      'Fundamentos de ML, redes neuronales y construcción de apps con modelos de lenguaje.',
    color: 'from-amber-500 to-orange-500',
    icon: Brain,
    items: ['ML con Python', 'Redes neuronales', 'Apps con LLMs'],
  },
];

const TrackCard = ({ track }) => {
  const Icon = track.icon;
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition hover:shadow-emerald-500/10">
      <div className={`absolute inset-0 rounded-2xl opacity-0 blur-xl transition duration-500 group-hover:opacity-20 bg-gradient-to-br ${track.color}`} />
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${track.color}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">{track.title}</h3>
        </div>
        <p className="mt-3 text-sm text-white/80">{track.description}</p>
        <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-white/80">
          {track.items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <a
            href={`#${track.id}`}
            className="inline-flex items-center rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Explorar ruta
          </a>
        </div>
      </div>
    </div>
  );
};

const CourseTracks = () => {
  return (
    <section id="tracks" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Rutas de aprendizaje</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Avanza paso a paso con planes curados. Desde la base hasta proyectos con IA listos para producción.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </section>
  );
};

export default CourseTracks;

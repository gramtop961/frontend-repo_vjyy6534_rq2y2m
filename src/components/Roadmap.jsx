import React from 'react';
import { Code, Database, Rocket, Brain } from 'lucide-react';

const steps = [
  {
    title: 'Empieza con bases sólidas',
    description:
      'Aprende sintaxis, tipos, funciones y control de flujo. Crea tus primeros scripts y adquiere hábitos de desarrollo.',
    icon: Code,
  },
  {
    title: 'Piensa como ingeniera/o',
    description:
      'Estructuras de datos, algoritmos y análisis de complejidad para resolver problemas de forma eficiente.',
    icon: Database,
  },
  {
    title: 'Construye productos reales',
    description:
      'Arquitectura web moderna, APIs y frontends atractivos. Lleva tus ideas a producción con buenas prácticas.',
    icon: Rocket,
  },
  {
    title: 'Desbloquea el poder de la IA',
    description:
      'Fundamentos de ML y aplicaciones con modelos de lenguaje, desde prototipos hasta features en apps existentes.',
    icon: Brain,
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Tu recorrido de 0 a IA</h2>
        <p className="mt-2 text-white/70">Un camino claro, práctico y motivador para avanzar sin perderte.</p>
      </div>

      <div className="relative mx-auto grid max-w-4xl grid-cols-1 gap-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur sm:p-8"
            >
              <div className="mb-3 inline-flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <Icon className="h-5 w-5 text-emerald-400" />
                </div>
                <div className="text-sm text-white/60">Paso {idx + 1}</div>
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-white/80">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Roadmap;

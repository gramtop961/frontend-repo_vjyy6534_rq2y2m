import React, { useEffect, useRef } from 'react';
import { Code, Database, Rocket, Brain } from 'lucide-react';
import anime from 'animejs';

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
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    anime({
      targets: el.querySelectorAll('[data-step]'),
      opacity: [0, 1],
      translateX: [-16, 0],
      duration: 650,
      delay: anime.stagger(140),
      easing: 'easeOutQuad',
    });
  }, []);

  return (
    <section ref={sectionRef} id="roadmap" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-emerald-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          Tu recorrido de 0 a IA
        </h2>
        <p className="mt-2 text-white/70">Un camino claro, práctico y con vibra retro para avanzar sin perderte.</p>
      </div>

      <div className="relative mx-auto grid max-w-4xl grid-cols-1 gap-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              data-step
              className="relative overflow-hidden rounded-2xl border border-fuchsia-400/20 bg-slate-900/60 p-6 backdrop-blur sm:p-8"
            >
              <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(120px_60px_at_10%_-10%,rgba(244,114,182,0.22),transparent),radial-gradient(100px_60px_at_90%_120%,rgba(34,211,238,0.22),transparent)]" />
              <div className="mb-3 inline-flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-400 to-cyan-400">
                  <Icon className="h-5 w-5 text-slate-950" />
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

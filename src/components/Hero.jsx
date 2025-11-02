import React from 'react';
import { Rocket, PlayCircle } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7C2c3d6q6o49oJbS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/90 pointer-events-none" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
          <Rocket className="h-4 w-4 text-emerald-400" />
          <span className="text-white/80">Aprende desde cero hasta construir con IA</span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Domina programación básica y tecnología de IA
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Un recorrido guiado y práctico: fundamentos de código, estructuras de datos, desarrollo web y proyectos con IA. Todo en un solo lugar.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#tracks"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-900 transition hover:bg-emerald-400"
          >
            Comenzar ahora
          </a>
          <a
            href="#roadmap"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            <PlayCircle className="h-5 w-5" />
            Ver recorrido
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Rutas guiadas', value: '6+' },
            { label: 'Proyectos prácticos', value: '20+' },
            { label: 'Lecciones en video', value: '100+' },
            { label: 'Comunidad activa', value: '24/7' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

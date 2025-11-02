import React, { useEffect, useRef } from 'react';
import { Rocket, PlayCircle } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import anime from 'animejs';

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const tl = anime.timeline({ easing: 'easeOutQuad' });
    tl.add({
      targets: el.querySelectorAll('[data-anim="badge"]'),
      opacity: [0, 1],
      translateY: [12, 0],
      duration: 550,
      delay: 100,
    })
      .add({
        targets: el.querySelectorAll('[data-anim="title"]'),
        opacity: [0, 1],
        translateY: [16, 0],
        duration: 700,
        offset: '+=50',
      })
      .add({
        targets: el.querySelectorAll('[data-anim="subtitle"]'),
        opacity: [0, 1],
        translateY: [16, 0],
        duration: 600,
        offset: '+=0',
      })
      .add({
        targets: el.querySelectorAll('[data-anim="cta"]'),
        opacity: [0, 1],
        translateY: [12, 0],
        duration: 500,
        delay: anime.stagger(100),
        offset: '+=60',
      })
      .add({
        targets: el.querySelectorAll('[data-anim="stat"]'),
        opacity: [0, 1],
        translateY: [14, 0],
        duration: 500,
        delay: anime.stagger(70),
        offset: '+=80',
      });

    // subtle neon pulse on title
    anime({
      targets: el.querySelectorAll('[data-anim="title"] .neon-glow'),
      filter: [
        'drop-shadow(0 0 0 rgba(34,211,238,0)) drop-shadow(0 0 0 rgba(244,114,182,0))',
        'drop-shadow(0 0 18px rgba(34,211,238,0.55)) drop-shadow(0 0 28px rgba(244,114,182,0.45))',
      ],
      duration: 1600,
      easing: 'easeInOutSine',
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[88vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Retro grid floor */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0,transparent_92%,rgba(34,211,238,0.35)_92%),linear-gradient(90deg,transparent_0,transparent_92%,rgba(244,114,182,0.35)_92%)] bg-[length:100%_28px,28px_100%]" />
      </div>

      {/* Neon gradient veil so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.25),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(244,114,182,0.18),transparent_50%),linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,0.7))]" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center">
        <div
          data-anim="badge"
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm backdrop-blur-md"
        >
          <Rocket className="h-4 w-4 text-cyan-300" />
          <span className="text-cyan-100">Aprende desde cero hasta construir con IA</span>
        </div>

        <h1 data-anim="title" className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          <span className="neon-glow bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-emerald-300 bg-clip-text text-transparent">
            Academia Retro‑Futurista de Código e IA
          </span>
        </h1>
        <p data-anim="subtitle" className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Vibra neon, tecnología del mañana: fundamentos, web moderna y proyectos con IA con una estética ochentera.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            data-anim="cta"
            href="#tracks"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-5 py-3 font-semibold text-slate-900 shadow-[0_0_24px_rgba(56,189,248,0.35)] transition hover:brightness-110"
          >
            Comenzar ahora
          </a>
          <a
            data-anim="cta"
            href="#roadmap"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <PlayCircle className="h-5 w-5 text-fuchsia-300" />
            Ver recorrido
          </a>
        </div>

        {/* Stats with neon borders */}
        <div className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Rutas guiadas', value: '6+' },
            { label: 'Proyectos', value: '20+' },
            { label: 'Lecciones', value: '100+' },
            { label: 'Comunidad', value: '24/7' },
          ].map((stat) => (
            <div
              key={stat.label}
              data-anim="stat"
              className="relative overflow-hidden rounded-xl border border-cyan-400/20 bg-slate-900/60 p-4 backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(120px_60px_at_10%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(100px_60px_at_90%_120%,rgba(244,114,182,0.25),transparent)]" />
              <div className="text-2xl font-bold text-cyan-200">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

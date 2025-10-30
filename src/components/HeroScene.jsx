import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroScene() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0b10]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Grain overlay and gradient edges - do not block Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.25),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,11,16,0)_0%,rgba(10,11,16,0.35)_60%,rgba(10,11,16,0.85)_100%)]" />

      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6 md:p-10">
        <div className="pointer-events-none">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-400 shadow-[0_0_15px_2px_rgba(232,121,249,0.75)]" />
            <span className="text-xs font-medium tracking-wide text-white/80">Interactive 3D — move your mouse</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="select-none bg-gradient-to-r from-fuchsia-400 via-blue-400 to-cyan-300 bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-6xl md:text-7xl">
          StageVerse
        </h1>
        <p className="mt-4 max-w-3xl px-6 text-sm text-white/70 sm:text-base">
          A dual web platform uniting fans and professionals with a shared, futuristic design system.
        </p>
      </div>

      {/* Bottom cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/60 backdrop-blur">
          Bifurcated presentation — fan portal (left) • organizer suite (right)
        </div>
      </div>
    </section>
  );
}

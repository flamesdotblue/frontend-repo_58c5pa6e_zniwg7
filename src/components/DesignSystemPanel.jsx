import React from 'react';

export default function DesignSystemPanel() {
  return (
    <section className="relative z-10 w-full px-4 py-8 sm:px-8 md:px-12">
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold tracking-wide text-white/90">StageVerse Design System</h2>
            <p className="text-sm text-white/60">Futuristic, dark, vibrant — unified across fan and pro experiences.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-2 py-1 text-[10px] text-fuchsia-200">Fan</span>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-[10px] text-cyan-200">Pro</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Color tokens */}
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/60">Palette</div>
            <div className="grid grid-cols-5 gap-2">
              {[
                ['#0a0b10', 'bg-[#0a0b10]'],
                ['Fuchsia', 'bg-fuchsia-500'],
                ['Electric Blue', 'bg-sky-500'],
                ['Teal', 'bg-teal-400'],
                ['Hot Pink', 'bg-pink-500'],
              ].map(([label, cls]) => (
                <div key={label} className="rounded-lg border border-white/10 p-2 text-center">
                  <div className={`h-10 w-full rounded ${cls}`} />
                  <div className="mt-1 text-[10px] text-white/60">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/60">Typography</div>
            <div className="space-y-2">
              <div className="text-2xl font-black tracking-tight bg-gradient-to-r from-fuchsia-400 to-sky-400 bg-clip-text text-transparent">Display — Inter/Geist</div>
              <div className="text-sm text-white/70">Body — Manrope, 14–16px</div>
              <div className="text-xs text-white/50">UI Meta — 10–12px, uppercase, wide tracking</div>
            </div>
          </div>

          {/* Components */}
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/60">Components</div>
            <div className="flex flex-wrap items-center gap-2">
              <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">Ghost</button>
              <button className="rounded-lg border border-fuchsia-500/30 bg-gradient-to-r from-fuchsia-600/40 to-pink-600/40 px-3 py-2 text-xs text-white shadow-[0_0_18px_rgba(232,121,249,0.35)]">Neon</button>
              <button className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-xs text-cyan-100">Teal</button>
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">Badge</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

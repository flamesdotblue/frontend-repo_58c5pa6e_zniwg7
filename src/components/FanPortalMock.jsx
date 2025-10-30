import React from 'react';

function BrowserChrome({ title = 'StageVerse — Event Hub' }) {
  return (
    <div className="mx-auto w-full rounded-xl border border-white/10 bg-[#0e1016] shadow-2xl shadow-fuchsia-900/20 ring-1 ring-white/10">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 px-3">
          <div className="mx-auto w-full max-w-md rounded-md bg-white/5 px-3 py-1 text-center text-[10px] text-white/70">
            {title}
          </div>
        </div>
        <div className="w-16" />
      </div>
      <div className="p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Live Setlist Tracker */}
          <div className="col-span-12 rounded-xl border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-900/20 via-fuchsia-600/10 to-transparent p-4 shadow-inner shadow-fuchsia-700/20">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold tracking-wide text-fuchsia-300 drop-shadow-[0_0_12px_rgba(232,121,249,0.8)]">
                Live Setlist Tracker
              </h3>
              <span className="rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-fuchsia-200">
                Live
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
              {['Intro', 'Neon Nights', 'Pulse//Wave', 'Skyline', 'Encore', 'Afterglow'].map((t, i) => (
                <div
                  key={t}
                  className={`rounded-md border px-2 py-2 text-xs ${
                    i === 1
                      ? 'border-fuchsia-400/60 bg-fuchsia-500/10 text-fuchsia-200 shadow-[0_0_18px_rgba(232,121,249,0.35)]'
                      : 'border-white/10 bg-white/5 text-white/70'
                  }`}
                >
                  {i === 1 ? 'Now • ' : ''}{t}
                </div>
              ))}
            </div>
          </div>

          {/* Memory Vault */}
          <div className="col-span-12">
            <h4 className="mb-3 text-sm font-semibold tracking-wide text-white/80">
              Memory Vault
            </h4>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 md:grid-cols-9">
              {[...Array(9)].map((_, idx) => (
                <div
                  key={idx}
                  className="aspect-square overflow-hidden rounded-lg border border-white/10"
                >
                  <div
                    className={`h-full w-full bg-gradient-to-br ${
                      idx % 3 === 0
                        ? 'from-pink-500/40 via-purple-500/30 to-blue-500/30'
                        : idx % 3 === 1
                        ? 'from-blue-500/40 via-cyan-400/30 to-indigo-500/30'
                        : 'from-fuchsia-500/40 via-pink-400/30 to-rose-500/30'
                    } saturate-150 backdrop-blur-[1px]`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Roll Call */}
          <div className="col-span-12">
            <h4 className="mb-2 text-sm font-semibold tracking-wide text-white/80">
              Roll Call
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              {[
                ['AL', 'bg-gradient-to-br from-fuchsia-500 to-pink-500'],
                ['JR', 'bg-gradient-to-br from-blue-500 to-cyan-400'],
                ['KT', 'bg-gradient-to-br from-purple-500 to-indigo-500'],
                ['MS', 'bg-gradient-to-br from-rose-500 to-orange-400'],
                ['NV', 'bg-gradient-to-br from-emerald-500 to-teal-400'],
                ['ZX', 'bg-gradient-to-br from-yellow-400 to-amber-500'],
              ].map(([name, cls]) => (
                <div key={name} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1">
                  <div className={`h-7 w-7 shrink-0 rounded-full ${cls} text-[10px] font-bold text-white grid place-items-center`}>
                    {name}
                  </div>
                  <span className="text-xs text-white/70">is going</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FanPortalMock() {
  return (
    <div className="w-full max-w-3xl">
      <BrowserChrome />
    </div>
  );
}

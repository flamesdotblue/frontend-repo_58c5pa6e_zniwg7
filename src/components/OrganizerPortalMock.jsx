import React from 'react';
import { LineChart, Settings } from 'lucide-react';

function BrowserChrome({ title }) {
  return (
    <div className="w-full rounded-xl border border-white/10 bg-[#0c0f14] shadow-2xl shadow-cyan-900/20 ring-1 ring-white/10">
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
        <div className="flex items-center gap-2 text-white/50">
          <Settings size={14} />
        </div>
      </div>
      <div className="p-4 sm:p-6 md:p-8">{/* content injected by children */}</div>
    </div>
  );
}

function AnalyticsWindow() {
  return (
    <BrowserChrome title="StageVerse Analytics — Hype Velocity">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8">
          <div className="rounded-lg border border-teal-500/30 bg-teal-500/10 p-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2 text-teal-200">
                <LineChart size={16} />
                <span className="text-sm font-semibold">Hype Velocity</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-white/60">Last 30 days</span>
            </div>
            {/* Simple line graph mock */}
            <div className="relative h-40 w-full">
              <svg viewBox="0 0 100 40" className="h-full w-full">
                <defs>
                  <linearGradient id="tealLine" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <polyline
                  fill="url(#tealLine)"
                  stroke="#2dd4bf"
                  strokeWidth="1.5"
                  points="0,30 10,28 20,26 30,22 40,24 50,18 60,20 70,14 80,16 90,10 100,8 100,40 0,40"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="mb-3 text-sm font-semibold text-white/80">Audience Demographics</div>
            <div className="mx-auto h-32 w-32">
              {/* donut chart mock */}
              <svg viewBox="0 0 36 36" className="h-full w-full">
                <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#0f172a" strokeWidth="6"></circle>
                <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#22d3ee" strokeWidth="6" strokeDasharray="40 60" strokeDashoffset="25" />
                <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#60a5fa" strokeWidth="6" strokeDasharray="20 80" strokeDashoffset="65" />
                <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#a78bfa" strokeWidth="6" strokeDasharray="15 85" strokeDashoffset="85" />
              </svg>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-white/70">
              <div className="rounded border border-cyan-400/30 bg-cyan-400/10 px-2 py-1">18–24 • 40%</div>
              <div className="rounded border border-blue-400/30 bg-blue-400/10 px-2 py-1">25–34 • 20%</div>
              <div className="rounded border border-purple-400/30 bg-purple-400/10 px-2 py-1">35–44 • 15%</div>
              <div className="rounded border border-white/10 bg-white/5 px-2 py-1">Other • 25%</div>
            </div>
          </div>
        </div>
        <div className="col-span-12 grid grid-cols-3 gap-3">
          {["Conversion", "CTR", "Retention"].map((label, i) => (
            <div key={label} className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-[11px] text-white/60">{label}</div>
              <div className="mt-2 text-lg font-bold text-white/90">{["4.3%", "2.1%", "78%"][i]}</div>
              <div className="mt-1 h-1.5 w-full rounded bg-white/10">
                <div className={`h-full rounded ${i === 0 ? 'bg-teal-400 w-3/5' : i === 1 ? 'bg-cyan-400 w-2/5' : 'bg-blue-400 w-4/5'}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

function TechnicalWindow() {
  return (
    <BrowserChrome title="StageVerse — Production Blueprint">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-9">
          <div className="rounded-lg border border-white/10 bg-[#0b0e13] p-3">
            {/* CAD-like grid */}
            <div className="relative h-72 w-full overflow-hidden rounded-md border border-white/10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }}>
              {/* Stage outline */}
              <div className="absolute left-1/2 top-1/2 h-40 w-64 -translate-x-1/2 -translate-y-1/2 rounded border border-cyan-300/60"></div>
              {/* Trusses */}
              <div className="absolute left-1/2 top-[15%] h-0.5 w-64 -translate-x-1/2 bg-blue-300/80" />
              <div className="absolute left-[15%] top-1/2 h-40 w-0.5 -translate-y-1/2 bg-blue-300/60" />
              <div className="absolute right-[15%] top-1/2 h-40 w-0.5 -translate-y-1/2 bg-blue-300/60" />
              {/* Risers */}
              <div className="absolute left-[30%] top-[55%] h-10 w-16 rounded-sm border border-purple-300/70" />
              <div className="absolute right-[30%] top-[55%] h-10 w-16 rounded-sm border border-purple-300/70" />
              {/* Instruments */}
              <div className="absolute left-1/2 top-[58%] h-6 w-6 -translate-x-1/2 rounded-full border border-teal-300/80" />
              <div className="absolute left-[42%] top-[60%] h-5 w-8 rounded-sm border border-teal-300/60" />
              <div className="absolute right-[42%] top-[60%] h-5 w-8 rounded-sm border border-teal-300/60" />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <div className="space-y-3">
            {[
              ['Stage Width (m)', '18'],
              ['Stage Depth (m)', '12'],
              ['Risers Height (cm)', '60'],
              ['Truss Load (kg)', '1200'],
            ].map(([label, val]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="text-[11px] text-white/60">{label}</div>
                <div className="mt-1 flex items-center gap-2">
                  <input
                    className="w-full rounded-md border border-white/10 bg-black/30 px-2 py-1 text-sm text-white placeholder-white/40 outline-none"
                    defaultValue={val}
                  />
                  <button className="rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-xs text-cyan-200">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

export default function OrganizerPortalMock() {
  return (
    <div className="flex w-full max-w-3xl flex-col gap-6">
      <AnalyticsWindow />
      <TechnicalWindow />
    </div>
  );
}

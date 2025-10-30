import React from 'react';
import HeroScene from './components/HeroScene';
import FanPortalMock from './components/FanPortalMock';
import OrganizerPortalMock from './components/OrganizerPortalMock';
import DesignSystemPanel from './components/DesignSystemPanel';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0b10] text-white">
      <HeroScene />

      <section className="relative -mt-24 w-full px-4 pb-16 sm:px-8 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-pink-200/80">Fan-Facing Web Portal</div>
              <FanPortalMock />
            </div>

            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-200/80">Professional Organizer Web Portal</div>
              <OrganizerPortalMock />
            </div>
          </div>
        </div>
      </section>

      <DesignSystemPanel />

      <footer className="mx-auto max-w-6xl px-6 pb-16 text-center text-xs text-white/50">
        © {new Date().getFullYear()} StageVerse — Dual-platform UI/UX system exploration.
      </footer>
    </div>
  );
}

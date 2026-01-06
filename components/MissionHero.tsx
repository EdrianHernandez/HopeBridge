
import React from 'react';

interface MissionHeroProps {
  onDonateClick: () => void;
}

const MissionHero: React.FC<MissionHeroProps> = ({ onDonateClick }) => {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Urgent: 12 Projects Awaiting Funding
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
            Building a <span className="text-emerald-600 underline decoration-emerald-200 underline-offset-8">Brighter Tomorrow</span>, One Life at a Time.
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
            HopeBridge is dedicated to ending systemic poverty through sustainable 
            infrastructure, quality education, and accessible healthcare in 
            marginalized communities worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onDonateClick}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-emerald-200 transition-all active:scale-95"
            >
              Start Your Impact
            </button>
            <a 
              href="#causes"
              className="bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-lg font-bold transition-all"
            >
              Explore Causes
            </a>
          </div>
        </div>
      </div>
      
      {/* Visual Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block overflow-hidden pointer-events-none opacity-50">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-40 right-40 w-[400px] h-[400px] bg-sky-50 rounded-full blur-3xl opacity-60"></div>
      </div>
    </section>
  );
};

export default MissionHero;

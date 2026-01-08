import React from 'react';
import { IMPACT_STATS } from '../constants';

const ImpactStats = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {IMPACT_STATS.map((stat, idx) => (
          <div 
            key={idx} 
            className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 text-center transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{stat.icon}</div>
            <div className="stat-counter text-4xl font-bold text-slate-900 mb-2">
              {stat.value}
            </div>
            <div className="text-slate-500 font-medium uppercase tracking-wider text-xs">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStats;

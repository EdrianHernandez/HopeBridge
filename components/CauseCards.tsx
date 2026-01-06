
import React from 'react';
import { CAUSES } from '../constants';

interface CauseCardsProps {
  onDonateClick: () => void;
}

const CauseCards: React.FC<CauseCardsProps> = ({ onDonateClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {CAUSES.map((cause) => {
        const progress = Math.min(Math.round((cause.raised / cause.goal) * 100), 100);
        
        return (
          <div key={cause.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={cause.imageUrl} 
                alt={cause.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-emerald-700 uppercase">
                  {cause.category}
                </span>
              </div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="cause-title text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {cause.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {cause.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span className="text-emerald-600">${cause.raised.toLocaleString()} raised</span>
                    <span className="text-slate-400">Target: ${cause.goal.toLocaleString()}</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                
                <button 
                  onClick={onDonateClick}
                  className="w-full py-3 rounded-xl border-2 border-emerald-600 text-emerald-600 font-bold hover:bg-emerald-600 hover:text-white transition-all active:scale-95"
                >
                  Support This Cause
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CauseCards;

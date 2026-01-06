
import React from 'react';

interface HeaderProps {
  onDonateClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDonateClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-emerald-200 group-hover:bg-emerald-700 transition-all">
            H
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">HopeBridge</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-emerald-600 transition-colors">Mission</a>
          <a href="#causes" className="hover:text-emerald-600 transition-colors">Causes</a>
          <a href="#impact" className="hover:text-emerald-600 transition-colors">Our Impact</a>
          <a href="#about" className="hover:text-emerald-600 transition-colors">About Us</a>
        </nav>

        <button 
          onClick={onDonateClick}
          className="donate-btn bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all active:scale-95"
        >
          Donate Now
        </button>
      </div>
    </header>
  );
};

export default Header;

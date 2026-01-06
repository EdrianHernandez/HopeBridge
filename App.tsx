
import React, { useState } from 'react';
import Header from './components/Header';
import MissionHero from './components/MissionHero';
import ImpactStats from './components/ImpactStats';
import CauseCards from './components/CauseCards';
import DonationForm from './components/DonationForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const toggleDonationModal = () => setIsDonationModalOpen(prev => !prev);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onDonateClick={toggleDonationModal} />
      
      <main className="flex-grow">
        <section id="home">
          <MissionHero onDonateClick={toggleDonationModal} />
        </section>

        <section id="impact" className="py-20 bg-slate-50">
          <ImpactStats />
        </section>

        <section id="causes" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Urgent Causes</h2>
              <p className="text-lg text-slate-600">
                Every contribution, no matter the size, helps bridge the gap between crisis and stability.
              </p>
            </div>
            <CauseCards onDonateClick={toggleDonationModal} />
          </div>
        </section>

        <section id="donate" className="py-24 donation-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-emerald-900 mb-4">Make a Lasting Impact Today</h2>
              <p className="text-xl text-emerald-800/80">
                Your generosity powers our mission. Choose an amount that reflects the change you want to see.
              </p>
            </div>
            <div className="flex justify-center">
              <DonationForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal Overlay for Global CTA */}
      {isDonationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl p-8 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={toggleDonationModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-center mb-8">Donate to HopeBridge</h3>
            <DonationForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

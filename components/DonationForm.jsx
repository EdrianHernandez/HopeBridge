import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [aiInsight, setAiInsight] = useState('');

  const amounts = [10, 25, 50, 100, 250];

  const handleAmountSelect = (val) => {
    setSelectedAmount(val);
    setCustomAmount('');
    generateImpactInsight(val);
  };

  const handleCustomChange = (e) => {
    const val = e.target.value;
    setCustomAmount(val);
    setSelectedAmount(null);
    if (val && !isNaN(Number(val))) {
      generateImpactInsight(Number(val));
    }
  };

  // Fun integration of Gemini to provide personalized impact descriptions
  const generateImpactInsight = async (amount) => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Describe in 15 words or less how a $${amount} donation to a global charity helps. Make it inspiring and specific.`,
      });
      setAiInsight(response.text || '');
    } catch (err) {
      console.error("AI Insight failed", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-xl animate-scale-in">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 text-3xl">
          ✓
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Thank You, Hero!</h3>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Your donation of <span className="font-bold text-emerald-600">${selectedAmount || customAmount}</span> has been processed. 
          A confirmation receipt has been sent to your email.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-xl relative border border-slate-100">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-slate-900 font-bold mb-4 text-center text-lg">Select Donation Amount</label>
          <div className="grid grid-cols-3 gap-3">
            {amounts.map(amt => (
              <button
                key={amt}
                type="button"
                onClick={() => handleAmountSelect(amt)}
                className={`py-4 rounded-xl font-bold text-lg transition-all border-2 ${
                  selectedAmount === amt 
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-100' 
                  : 'bg-white border-slate-100 text-slate-600 hover:border-emerald-200'
                }`}
              >
                ${amt}
              </button>
            ))}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
              <input
                type="number"
                placeholder="Custom"
                value={customAmount}
                onChange={handleCustomChange}
                className={`w-full py-4 pl-7 pr-3 rounded-xl font-bold text-lg border-2 outline-none transition-all ${
                  customAmount ? 'border-emerald-600 bg-emerald-50' : 'border-slate-100'
                }`}
              />
            </div>
          </div>
        </div>

        {aiInsight && (
          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 text-emerald-800 text-sm italic text-center animate-fade-in">
            " {aiInsight} "
          </div>
        )}

        <div className="space-y-4">
          <input 
            type="email" 
            required 
            placeholder="Email Address" 
            className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all"
          />
          <div className="grid grid-cols-2 gap-4">
             <input type="text" placeholder="First Name" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all" />
             <input type="text" placeholder="Last Name" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all" />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-bold shadow-xl shadow-emerald-200 transition-all flex items-center justify-center gap-3 disabled:opacity-50 active:scale-[0.98]"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : 'Donate Securely Now'}
        </button>

        <p className="text-center text-slate-400 text-xs">
          🔒 Secure 256-bit SSL encrypted payment. All donations are tax-deductible.
        </p>
      </form>
    </div>
  );
};

export default DonationForm;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center text-white font-bold">H</div>
              <span className="text-xl font-bold text-white">HopeBridge</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              A global non-profit organization dedicated to fostering sustainable development and empowerment for communities in need.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Organization</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Financial Clarity</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Annual Reports</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Volunteer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              {['Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map(social => (
                <div key={social} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 cursor-pointer transition-colors">
                  <span className="text-xs font-bold">{social[0]}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 italic">
              Subscribe to our newsletter for impact updates.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest">
          <span>&copy; 2024 HopeBridge Philanthropy. All rights reserved.</span>
          <span>Designed with ❤️ for Global Impact</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

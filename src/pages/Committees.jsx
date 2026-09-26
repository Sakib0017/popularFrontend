import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import api from '../api.js';

// Converted from committee.php
export default function Committees() {
  const [list, setList] = useState([]);
  useEffect(() => { api.get('/committees').then(r => setList(r.data)).catch(() => {}); }, []);
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main className="py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto text-center mb-6 sm:mb-10 px-2">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] sm:text-xs font-bold tracking-widest text-blue-900 uppercase bg-blue-900/[0.07] ring-1 ring-blue-900/15 rounded-full"><span className="w-1.5 h-1.5 rounded-full bg-blue-900/60"></span>Governance</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4">Our Committees</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-300 to-blue-900/60 mx-auto mt-4 rounded-full"></div>
        </div>
        {list.map(c => (
          <div key={c._id} className="max-w-7xl mx-auto sm:px-4 py-3 sm:py-6">
            <div className="bg-blue-900/30 rounded-xl border border-blue-900/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] sm:min-w-full divide-y divide-blue-900/15">
                  <thead className="bg-white/40">
                    <tr><th colSpan="2" className="px-4 sm:px-6 py-4 sm:py-5 text-center text-base sm:text-xl font-bold text-slate-800 uppercase tracking-widest border-b border-brand-300/60 whitespace-pre-line break-words">{c.name}</th></tr>
                    <tr className="bg-white/20"><th className="px-4 py-3 text-left text-[11px] sm:text-xs font-bold text-gray-500 uppercase w-1/3">Role</th><th className="px-4 py-3 text-left text-[11px] sm:text-xs font-bold text-gray-500 uppercase">Personnel</th></tr>
                  </thead>
                  <tbody className="divide-y divide-blue-900/15">
                    <tr><td className="px-4 py-3 sm:py-4 text-[11px] sm:text-xs font-bold uppercase">Patron</td><td className="px-4 py-3 sm:py-4 text-sm italic whitespace-pre-line break-words">{c.patron}</td></tr>
                    <tr><td className="px-4 py-3 sm:py-4 text-[11px] sm:text-xs font-bold uppercase">Chairman</td><td className="px-4 py-3 sm:py-4 text-sm font-semibold whitespace-pre-line break-words">{c.chairman}</td></tr>
                    <tr><td className="px-4 py-3 sm:py-4 text-[11px] sm:text-xs font-bold uppercase">Members</td><td className="px-4 py-3 sm:py-4 text-sm whitespace-pre-line break-words">{c.member}</td></tr>
                    <tr><td className="px-4 py-3 sm:py-4 text-[11px] sm:text-xs font-bold uppercase">Secretary</td><td className="px-4 py-3 sm:py-4 text-sm whitespace-pre-line break-words">{c.secretary}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

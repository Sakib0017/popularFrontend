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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Our Committees</h1>
          <div className="h-1 w-20 bg-[#00984a] mx-auto mt-4"></div>
        </div>
        {list.map(c => (
          <div key={c._id} className="max-w-7xl mx-auto sm:px-4 py-3 sm:py-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] sm:min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr><th colSpan="2" className="px-4 sm:px-6 py-4 sm:py-5 text-center text-base sm:text-xl font-bold text-slate-900 uppercase tracking-widest border-b border-green-700 whitespace-pre-line break-words">{c.name}</th></tr>
                    <tr className="bg-gray-100"><th className="px-4 py-3 text-left text-[11px] sm:text-xs font-bold text-gray-500 uppercase w-1/3">Role</th><th className="px-4 py-3 text-left text-[11px] sm:text-xs font-bold text-gray-500 uppercase">Personnel</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
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

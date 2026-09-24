import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<footer class="bg-[#003B46] text-slate-300 pt-16 pb-0 border-t border-teal-950/40">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-12 border-b border-teal-900/60">

      <div class="text-center md:text-left">
        <a href="/" class="inline-block bg-white p-3 rounded-xl shadow-md transition-transform hover:scale-[1.02]">
          <img src="/assets/PMCH.gif" alt=" Medical College Logo" class="h-20 w-auto mx-auto md:mx-0">
        </a>
      </div>

      <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold tracking-[0.15em] uppercase text-slate-200">
        <a href="/course" class="hover:text-emerald-400 transition-colors duration-200">Course</a>
        <span class="text-teal-800/80 hidden sm:inline">|</span>
        <a href="/about" class="hover:text-emerald-400 transition-colors duration-200">About</a>
        <span class="text-teal-800/80 hidden sm:inline">|</span>
        <a href="/contact" class="hover:text-emerald-400 transition-colors duration-200">Contact</a>
        <span class="text-teal-800/80 hidden sm:inline">|</span>
        <a href="/notice" class="hover:text-emerald-400 transition-colors duration-200">Notices</a>
      </nav>

      <div class="flex justify-center md:justify-end gap-4">
        <a href="#" class="w-9 h-9 rounded-lg bg-teal-950/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-all duration-300 shadow-inner" aria-label="Facebook Link">
          <i class="fab fa-facebook-f text-sm"></i>
        </a>
        <a href="mailto:info@pmch.edu" class="w-9 h-9 rounded-lg bg-teal-950/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-500 transition-all duration-300 shadow-inner" aria-label="Mail Support Link">
          <i class="fas fa-envelope text-sm"></i>
        </a>
        <a href="tel:+880123456789" class="w-9 h-9 rounded-lg bg-teal-950/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-500 transition-all duration-300 shadow-inner" aria-label="Call Operational Desk">
          <i class="fas fa-phone-alt text-sm"></i>
        </a>
      </div>

    </div>
  </div>

  <div class="bg-slate-950/40 text-center text-xs tracking-wider font-medium text-slate-400 border-t border-teal-950/20 py-4 px-4">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
      <p>© 2026  Medical College. All rights reserved.</p>
      <p class="text-[11px] text-slate-500">Designed & Maintained by <span class="text-emerald-500 font-semibold">PMC IT Node</span></p>
    </div>
  </div>
</footer>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Footer(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

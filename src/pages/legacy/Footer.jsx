import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<footer class="bg-white text-slate-600 pt-0 pb-0 border-t border-slate-200">
  <div class="h-1 w-full bg-gradient-to-r from-brand-200 via-blue-900/60 to-brand-200"></div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
      <a href="http://dgme.teletalk.com.bd/mbbs/nongov/applicantscopy.php" target="_blank" class="flex items-center gap-4 bg-blue-900/30 border border-blue-900/20 rounded-2xl p-5">
        <span class="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-brand-700 ring-1 ring-blue-900/15"><i class="fas fa-graduation-cap"></i></span>
        <span><span class="block text-sm font-bold text-slate-800">Admission Portal</span><span class="block text-xs text-slate-500">Apply via DGME Teletalk</span></span>
      </a>
      <a href="tel:10606" class="flex items-center gap-4 bg-blue-900/30 border border-blue-900/20 rounded-2xl p-5">
        <span class="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-brand-700 ring-1 ring-blue-900/15"><i class="fas fa-phone-alt"></i></span>
        <span><span class="block text-sm font-bold text-slate-800">Hotline: 10606</span><span class="block text-xs text-slate-500">24/7 emergency and info desk</span></span>
      </a>
      <a href="/contact" class="flex items-center gap-4 bg-blue-900/30 border border-blue-900/20 rounded-2xl p-5">
        <span class="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-brand-700 ring-1 ring-blue-900/15"><i class="fas fa-envelope"></i></span>
        <span><span class="block text-sm font-bold text-slate-800">Contact Us</span><span class="block text-xs text-slate-500">info@pmch.edu - Notices</span></span>
      </a>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8">
      <div class="col-span-2 md:col-span-3 lg:col-span-3">
        <h4 class="text-sm font-black tracking-tight text-slate-800">MEDICAL COLLEGE</h4>
        <p class="text-[11px] font-semibold text-brand-600 tracking-widest uppercase mt-1">Producing Doctors With a Difference</p>
        <p class="text-[13px] text-slate-500 leading-relaxed mt-4">A prestigious concern of the group - preparing students for the MBBS course since 2010.</p>
        <ul class="mt-4 space-y-2 text-[13px] text-slate-500">
          <li><a href="tel:10606" class="hover:text-brand-600"><i class="fas fa-phone-alt mr-2 text-brand-600"></i>Hotline: 10606</a></li>
          <li><a href="mailto:info@pmch.edu" class="hover:text-brand-600"><i class="fas fa-envelope mr-2 text-brand-600"></i>info@pmch.edu</a></li>
          <li><span><i class="fas fa-map-marker-alt mr-2 text-brand-600"></i>Dhaka, Bangladesh</span></li>
        </ul>
        <div class="flex gap-3 mt-5">
          <a href="#" class="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-white hover:bg-brand-600" aria-label="Facebook"><i class="fab fa-facebook-f text-sm"></i></a>
          <a href="mailto:info@pmch.edu" class="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-white hover:bg-brand-600" aria-label="Mail"><i class="fas fa-envelope text-sm"></i></a>
          <a href="tel:10606" class="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-white hover:bg-brand-600" aria-label="Call"><i class="fas fa-phone-alt text-sm"></i></a>
        </div>
      </div>
      <div class="lg:col-span-2"><h4 class="text-xs font-bold uppercase tracking-[0.15em] text-slate-800">Admission<span class="block h-0.5 w-8 bg-brand-600 rounded-full mt-2"></span></h4><nav class="mt-3">
        <a href="/course" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Course Structure</a>
        <a href="/eligiblity" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Eligibility</a>
        <a href="/rules" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">College Rules</a>
        <a href="/book" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Book List</a>
        <a href="/fees" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">College Fees</a>
      </nav></div>
      <div class="lg:col-span-3"><h4 class="text-xs font-bold uppercase tracking-[0.15em] text-slate-800">Departments<span class="block h-0.5 w-8 bg-brand-600 rounded-full mt-2"></span></h4><nav class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
          <a href="/dept/anatomy" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Anatomy</a>
          <a href="/dept/physiology" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Physiology</a>
          <a href="/dept/biochymistry" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Biochemistry</a>
          <a href="/dept/medicine" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Community Medicine</a>
          <a href="/dept/forensic" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Forensic Medicine</a>
          <a href="/dept/pathology" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Pathology</a>
          <a href="/dept/microbiology" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Microbiology</a>
          <a href="/dept/pharmacology" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Pharmacology</a>
          <a href="/dept/allied" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Medicine & Allied</a>
          <a href="/dept/paediatrics" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Paediatrics</a>
          <a href="/dept/surgery" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Surgery & Allied</a>
          <a href="/dept/orthopaedics" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Orthopaedics</a>
          <a href="/dept/ophthalmology" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Ophthalmology</a>
          <a href="/dept/gynae" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Gynae & Obst.</a>
          <a href="/dept/otorhinolaryngology" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Otorhinolaryngology</a>
          <a href="/dept/anaesthesiology" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Anaesthesiology</a>
        </nav><a href="/faculty" class="inline-block mt-2 text-[13px] font-bold text-brand-600">Academic Faculty</a></div>
      <div class="lg:col-span-2"><h4 class="text-xs font-bold uppercase tracking-[0.15em] text-slate-800">Administration<span class="block h-0.5 w-8 bg-brand-600 rounded-full mt-2"></span></h4><nav class="mt-3">
        <a href="/about" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">About Us</a>
        <a href="/chairman" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Chairman Governing Body</a>
        <a href="/principal" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Desk of the Principal</a>
        <a href="/vice" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Vice Principal</a>
        <a href="/quality" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Quality Assurance</a>
        <a href="/award" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Academic Awards</a>
        <a href="/govrn" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Governing Bodies</a>
        <a href="/land" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Land Information</a>
        <a href="/info" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Basic Information</a>
        <a href="/committee" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Committees</a>
        <a href="/contact" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Notice Board</a>
      </nav></div>
      <div class="lg:col-span-2"><h4 class="text-xs font-bold uppercase tracking-[0.15em] text-slate-800">Facilities<span class="block h-0.5 w-8 bg-brand-600 rounded-full mt-2"></span></h4><nav class="mt-3">
        <a href="/library" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">College Library</a>
        <a href="/it" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">IT Corner</a>
        <a href="/assist" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Student Assistance Center</a>
        <a href="/resource" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Student Resource Center</a>
        <a href="/guardians" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Liaison with Guardians</a>
        <a href="/legends" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Meet the Legends</a>
        <a href="/center" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Medical Center</a>
        <a href="/confer" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Conference Room</a>
        <a href="/cafe" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">College Cafeteria</a>
        <a href="/common" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">College Common Room</a>
        <a href="/hostal" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">College Hostel</a>
        <a href="/contact" class="block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all">Contact Us</a>
      </nav></div>
    </div>
  </div>
  <div class="bg-brand-50/80 border-t border-blue-900/10 py-4 px-4">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500">
      <p>2026 Medical College. All rights reserved.</p>
      <p class="text-[11px] text-slate-400">Designed and Maintained by <span class="text-brand-600 font-semibold">PMC IT Node</span></p>
    </div>
  </div>
</footer>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Footer(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

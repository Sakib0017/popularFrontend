import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<div class="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
    <div class="max-w-6xl mx-auto">
      
      <div class="text-center mb-16">
        <h2 class="text-base font-semibold text-brand-600 tracking-wide uppercase">Get in Touch</h2>
        <p class="mt-2 text-4xl font-extrabold text-slate-900 sm:text-5xl">Contact Us</p>
        <p class="mt-4 max-w-2xl mx-auto text-xl text-slate-500">Have questions? We're here to help. Reach out to the medical college or hospital directly.</p>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div class="bg-blue-900/30 p-8 rounded-2xl shadow-sm border border-blue-900/20 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">Medical College</h3>
          <p class="text-slate-600 text-sm mb-4">Open Sat–Thu: 8:00 AM – 2:00 PM</p>
          <div class="space-y-2 text-sm">
            <p class="text-slate-800 font-medium">+8802223362302</p>
            <p class="text-slate-500">Secretary: 01786655128</p>
            <p class="text-slate-500">Info Desk: 01927266191</p>
          </div>
        </div>
  
        <div class="bg-blue-900/30 p-8 rounded-2xl shadow-sm border border-blue-900/20 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">Hospital & Appointments</h3>
          <p class="text-slate-600 text-sm mb-4">24/7 Emergency & Diagnostic Services</p>
          <div class="space-y-2 text-sm">
            <p class="text-blue-700 font-bold text-lg">Hotline: 10636</p>
            <p class="text-slate-800">+8809666 787800</p>
            <p class="text-slate-800">+8809666 787801</p>
          </div>
        </div>
  
        <div class="bg-blue-900/30 p-8 rounded-2xl shadow-sm border border-blue-900/20 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">Email & Social</h3>
          <p class="text-slate-600 text-sm mb-4">Official correspondence</p>
          <div class="space-y-2 text-sm">
            <a href="mailto:info@pmc.ac.bd" class="block text-brand-600 hover:underline">info@pmc.ac.bd</a>
            <div class="flex space-x-4 pt-2">
              <a href="#" class="text-slate-400 hover:text-brand-600 font-medium">Facebook</a>
              <a href="#" class="text-slate-400 hover:text-red-600 font-medium">YouTube</a>
            </div>
          </div>
        </div>
      </div>
  
      <div class="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row border border-slate-100">
        
        <div class="lg:w-1/3 bg-emerald-800 p-10 text-emerald-50">
          <h3 class="text-2xl font-bold text-white mb-8">Location Details</h3>
          
          <div class="space-y-8">
            <div class="flex items-start space-x-4">
              <div class="mt-1 bg-brand-200/50 p-2 rounded-lg">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
              </div>
              <div>
                <p class="font-semibold text-white">Main Campus</p>
                <p class="text-emerald-100/80 leading-relaxed text-sm">House # 25, Road # 2, Dhanmondi<br>Dhaka - 1205, Bangladesh</p>
              </div>
            </div>
  
            <div class="flex items-start space-x-4">
              <div class="mt-1 bg-brand-200/50 p-2 rounded-lg">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <p class="font-semibold text-white">Landline</p>
                <p class="text-emerald-100/80 text-sm">+880 2 9669480</p>
              </div>
            </div>
          </div>
  
          <div class="mt-12 p-6 bg-blue-900/30 rounded-2xl border border-blue-900/20">
            <p class="text-xs uppercase tracking-widest font-bold text-emerald-300 mb-2">Emergency</p>
            <p class="text-sm italic text-emerald-100">For immediate medical assistance, please call our 24/7 hotline directly at 10636.</p>
          </div>
        </div>
  
        <div class="lg:w-2/3 p-10">
          <h3 class="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
          <form action="#" method="POST" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                <input type="text" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-300 focus:bg-white outline-none transition-all placeholder:text-slate-400" placeholder="John Doe">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-300 focus:bg-white outline-none transition-all placeholder:text-slate-400" placeholder="john@example.com">
              </div>
            </div>
            
            <div>
              <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
              <input type="text" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-300 focus:bg-white outline-none transition-all placeholder:text-slate-400" placeholder="General Inquiry">
            </div>
  
            <div>
              <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
              <textarea rows="4" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-300 focus:bg-white outline-none transition-all placeholder:text-slate-400" placeholder="How can we help you today?"></textarea>
            </div>
  
            <button type="submit" class="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transform hover:-translate-y-0.5 transition-all shadow-lg shadow-brand-200/40 active:scale-95">
              <span>Send Message</span>
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </form>
        </div>
      </div>
  
    </div>
  </div>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Contact(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

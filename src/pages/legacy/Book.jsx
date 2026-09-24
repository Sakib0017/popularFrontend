import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
  <div class="absolute inset-0 z-0">
      <img src="https://www.pmch-bd.org/images/PMC/books.jpg" 
           alt="Medical Textbooks Background" 
           class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
      <div class="max-w-2xl border-l-4 border-emerald-600 pl-6 md:pl-10">
          <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">1st Year MBBS Resources</span>
          <h1 class="text-3xl md:text-3xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
            Recommended list of books for 1st year MBBS students 
          </h1>
          <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
            Medicine is an ever changing science and its range of study and requirement of knowledge for a successful medical graduate is beyond the scope of recommendation. However we suggest a list of essential books as per existing curriculum recommended by Bangladesh Medical and Dental Council. Choices could be made from the list suggested below-
         
            </p>
      </div>
  </div>
</section>

<div class="bg-slate-50 py-16 px-6">
  <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
          
          <div class="order-2 lg:order-1">
              <h2 class="text-3xl font-bold text-slate-800 mb-6">Academic Excellence through Quality Resources</h2>
              <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                      Medicine is an ever-changing science. While the depth of knowledge required for a medical graduate is vast, we provide a <span class="text-emerald-700 font-semibold">foundational list of essential books</span> to guide students through their first professional phase.
                  </p>
                  <p>
                      These recommendations cover core subjects including <span class="font-bold">Anatomy, Physiology, and Biochemistry</span>, ensuring students have access to the most reliable and updated information available.
                  </p>
              </div>
              
              <div class="mt-8 flex flex-wrap gap-4">
                  <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                      <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                      <span class="text-sm font-bold text-slate-700">BM&DC Approved</span>
                  </div>
                  <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                      <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                      <span class="text-sm font-bold text-slate-700">Latest Editions</span>
                  </div>
              </div>
          </div>

          <div class="order-1 lg:order-2 group">
              <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                  
                  <img 
                      src="https://www.pmch-bd.org/images/PMC/lib1.jpg" 
                      alt="Medical Library Resources" 
                      class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <p class="text-white font-medium">Reference Section -  Medical College Library</p>
                  </div>
              </div>
          </div>

      </div>
  </div>
</div>

<section class="max-w-7xl mx-auto py-16 px-6  bg-white">
  <div class="mb-12">
    <span class="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-bold border-l-2 border-blue-600 pl-3">Book List</span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-b border-gray-100">
    <h2 class="text-3xl text-gray-800 font-medium md:col-span-1">Anatomy</h2>
    <div class="md:col-span-3 space-y-2 text-gray-600 text-sm md:text-base leading-relaxed">
      <p>Richard S. Snell: Clinical Anatomy – 9th edition.</p>
      <p>Principles of General Anatomy –A.K Datta – 6th edition.</p>
      <p>Human Anatomy Vol. I, II, & III: Chaurasia, B.D. Mescher: 7th edition.</p>
      <p>Essentials of Human Anatomy Vol. I, II, III: A.K. Datta – 9th, 5th, 4th edition respectively</p>
      <p>Mannan’s Regional Dissection & Surface Anatomy – 13th edition.</p>
      <p>Sadler: Langman’s Medical Embryology – 14th edition.</p>
      <p>Netter – Atlas of Human Anatomy – 7th edition.</p>
      <p>Gray's Anatomy–Anatomical basis of clinical practice – 41th edition.</p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-b border-gray-100">
    <h2 class="text-3xl text-gray-800 font-medium md:col-span-1">Physiology</h2>
    <div class="md:col-span-3 space-y-2 text-gray-600 text-sm md:text-base">
      <p>Text book of Medical physiology–Guyton and Hall– 12th edition.</p>
      <p>Ganong’s Review of medical physiology – 23rd edition.</p>
      <p>A text book of practical physiology – C.L. Ghai – 7th edition.</p>
      <p>Text book of Medical physiology – Indu Khurana, Arushi Khurana – 2nd edition</p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-b border-gray-100">
    <h2 class="text-3xl text-gray-800 font-medium md:col-span-1">Biochemistry</h2>
    <div class="md:col-span-3 space-y-2 text-gray-600 text-sm md:text-base">
      <p>Harper’s Biochemistry – 30th edition</p>
      <p>Lippincott’s Illustrated Reviews Biochemistry– 6th edition</p>
      <p>Biochemistry: U. Satyanarayana – 5th edition.</p>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
    <h2 class="text-3xl text-gray-800 font-medium md:col-span-1">Community Medicine</h2>
    <div class="md:col-span-3 space-y-2 text-gray-600 text-sm md:text-base">
      <p>K. Park: Park’s Textbook of Preventive & Social Medicine- 25th Edition</p>
      <p>Rashid, Khabir, Hyder- Text Book of Community Medicine & Public Health - 5th edition.</p>
      <p>Mahajan’s - Methods in Biostatistics for Medical Students & Research Workers</p>
    </div>
  </div>
</section>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Book(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

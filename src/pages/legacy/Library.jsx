import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="https://www.pmch-bd.org/images/yootheme/service-header.jpg" 
             alt="Background" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="max-w-2xl border-l-4 border-emerald-600 pl-6 md:pl-10">
            <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Academic Resources</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                College Library
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              The Medical College library is spacious enough to accommodate ample reading space for present and future students and holds essential latest edition text books including reference titles and others.
              </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
            
            <div>
                <h2 class="text-3xl font-bold text-slate-800 mb-6">Learning Without Boundaries</h2>
                <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                      The Medical College library is spacious enough to accommodate ample reading space for present and future students and holds essential latest edition text books including reference titles and others. It remains open even for evening studies under the guidance of a teacher. A spacious reading room has been incorporated with the library where students can study even during extra hours.
                      </p>
                    
                </div>
                
                <div class="mt-8 flex flex-wrap gap-4">
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Extended Evening Hours</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Latest Medical Editions</span>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div class="relative overflow-hidden rounded-xl shadow-lg group col-span-2 h-64">
                    <div class="absolute inset-0 border-8 border-white/20 z-10 pointer-events-none"></div>
                    <img src="https://www.pmch-bd.org/images/PMC/lib1.jpg" alt="Library Main Hall" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                </div>
                <div class="relative overflow-hidden rounded-xl shadow-lg group h-40">
                    <div class="absolute inset-0 border-4 border-white/20 z-10 pointer-events-none"></div>
                    <img src="https://www.pmch-bd.org/images/PMC/lib2.jpg" alt="Reading Area" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                </div>
                <div class="relative overflow-hidden rounded-xl shadow-lg group h-40">
                    <div class="absolute inset-0 border-4 border-white/20 z-10 pointer-events-none"></div>
                    <img src="https://www.pmch-bd.org/images/PMC/lib3.jpg" alt="Reference Section" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                </div>
            </div>

        </div>
    </div>
</div>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Library(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

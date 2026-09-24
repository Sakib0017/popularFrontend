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
            <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Student Amenities</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                College Cafeteria
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              The college has a spacious cafeteria at the 4th floor of the academic building with a range of food items, which are essentially balanced, nutritious, healthy and subsidized. 
            </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            <div class="order-2 lg:order-1">
                <h2 class="text-3xl font-bold text-slate-800 mb-6">Nutrition & Convenience</h2>
                <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                      The college has a spacious cafeteria at the 4th floor of the academic building with a range of food items, which are essentially balanced, nutritious, healthy and subsidized. Every effort has been made to ensure availability of the services up to the late hours.
                   
                      </p>
                    
                </div>
                
                <div class="mt-8 flex flex-wrap gap-4">
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Subsidized Rates</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Healthy & Balanced</span>
                    </div>
                </div>
            </div>

            <div class="order-1 lg:order-2 group">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                    
                    <img 
                        src="https://www.pmch-bd.org/images/PMC/ccafe1.jpg" 
                        alt="College Cafeteria" 
                        class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p class="text-white font-medium">Spacious Dining Hall - 4th Floor</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Cafe(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

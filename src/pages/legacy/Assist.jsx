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
        <div class="max-w-2xl border-l-4 border-brand-300 pl-6 md:pl-10">
            <span class="text-brand-600 font-bold tracking-widest uppercase text-sm mb-2 block">Student Welfare</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Student Assistance Center
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              The college has established a student assistance centre designed to help students in relation to their study, accommodation, food and other related matters and skill development.
            
              </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            <div class="order-2 lg:order-1">
                <h2 class="text-3xl font-bold text-slate-800 mb-6">Holistic Academic Support</h2>
                <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                      The college has established a student assistance centre designed to help students in relation to their study, accommodation, food and other related matters and skill development. The centre provides special assistance to those who feel they are unable to keep pace with the academic course. The centre also aims at developing individual student confidence to excel in every sphere and emerge as a productive citizen ready to deliver their best academically, skillfully, spiritually and emotionally. No doubt this is a small step but a step nevertheless towards a brighter future for each and everyone of our student.
                      </p>
                    
                </div>
                
                <div class="mt-8 flex flex-wrap gap-4">
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-brand-300 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Academic Tutoring</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-brand-300 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Personal Counseling</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-brand-300 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Skill Development</span>
                    </div>
                </div>
            </div>

            <div class="order-1 lg:order-2 group">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                    
                    <img 
                        src="https://www.pmch-bd.org/images/PMC/SAC1.jpg" 
                        alt="Student Assistance Center" 
                        class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p class="text-white font-medium">Comprehensive Student Support Services</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Assist(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

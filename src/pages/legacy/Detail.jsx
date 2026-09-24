import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<section class="max-w-6xl mx-auto py-16 px-6">
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row">
        
        <div class="md:w-1/3 bg-slate-50 p-10 flex items-center justify-center">
            <div class="relative">
                <div class="absolute inset-0 bg-blue-100 rounded-xl rotate-3"></div>
                <img 
                    src="./uploads/" 
                    alt="" 
                    class="relative w-64 h-80 object-cover rounded-xl shadow-lg border-4 border-white"
                >
            </div>
        </div>

        <div class="md:w-2/3 p-10 md:p-16 flex flex-col justify-center">
            <div class="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase rounded-full mb-4">
                 Department
            </div>
            
            <h1 class="text-4xl font-serif text-slate-900 mb-2"></h1>
            <p class="text-xl text-blue-800 font-light mb-8"></p>
            <p class="text-xl text-blue-800 font-light mb-8"></p>
            
            <div class="border-l-4 border-blue-200 pl-6 py-2 italic text-lg text-slate-600 leading-relaxed">
                ""
            </div>
        </div>
    </div>
</section>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Detail(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

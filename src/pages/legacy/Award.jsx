import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="https://www.pmch-bd.org/images/PMC/award1.jpg" 
             alt="Academic Awards Background" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="max-w-2xl border-l-4 border-emerald-600 pl-6 md:pl-10">
            <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Student Recognition</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Academic <span class="text-emerald-600">Awards</span>
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                Celebrating exceptional academic achievements to foster a harmonious, competitive, and inspiring learning environment at  Medical College.
            </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            <div class="order-2 lg:order-1">
                <h2 class="text-3xl font-bold text-slate-800 mb-6">Honoring Excellence</h2>
                <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                         Medical College has introduced a variety of <span class="text-emerald-700 font-semibold">distinguished academic awards</span> to encourage students to reach their full potential. These honors recognize consistent performance, research initiatives, and professional conduct.
                    </p>
                    <p>
                        Our award system is designed to motivate medical graduates to excel not only in examinations but also in clinical practice and social accountability.
                    </p>
                </div>
                
                <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Merit Scholarships</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Gold Medalists</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Honors Marks Awards</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Best Intern Awards</span>
                    </div>
                </div>
            </div>

            <div class="order-1 lg:order-2 group">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                    
                    <img 
                        src="https://www.pmch-bd.org/images/PMC/award1.jpg" 
                        alt="Awards Ceremony" 
                        class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p class="text-white font-medium">Recognizing the Leaders of Tomorrow</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>


<div class="bg-white min-h-screen  text-gray-800">
    <div class="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
  
      <div class="mt-12 max-w-7xl mx-auto grid md:grid-cols-3 w-full overflow-hidden gap-10 rounded-sm ">
        <img 
          src="https://www.pmch-bd.org/images/PMC/ACD1.jpg" 
          alt="College Building" 
          class="w-full h-[250px] object-cover "
        />
        <img 
          src="https://www.pmch-bd.org/images/PMC/ACD2.jpg" 
          alt="College Building" 
          class="w-full h-auto object-cover "
        />
        <img 
          src="https://www.pmch-bd.org/images/PMC/ACD3.jpg" 
          alt="College Building" 
          class="w-full h-auto object-cover "
        />
      </div>
      <div class="space-y-6 text-justify leading-relaxed text-[#555] text-lg">
       
        <p>
          <span class=" text-gray-700">The college acknowledges and stresses the need of regularity and punctuality in addition to discipline. The introduction of the "Attendance Award" for all students attaining 100% class attendance is an example of this.</p>
            <p>
                <span class=" text-gray-700">In addition the  Medical College has introduced the following awards for admirable academic achievement. "Principal's Honor Roll" – is awarded to a student who achieves an aggregate of 75% or more marks over the whole calendar year including professional examination. "PMC Achievement Award" - is awarded to a student who obtains "Honors marks" in a professional examination held during a calendar year. "</p>
                    <p>
                        <span class=" text-gray-700">PMC Gold Student Award" - is awarded to a student who attains a position among the first 10 places in a professional examination during a calendar year. A student can be the recipient of any one or more award within that calendar year.</p>
                         
      </div>
  
     
    </div>
  </div>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Award(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

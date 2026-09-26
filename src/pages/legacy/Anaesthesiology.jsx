import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<section class="relative bg-gray-50 py-20 px-6 md:px-12 overflow-hidden">
  <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-50"></div>

  <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10">
    
    <div class="w-full lg:w-1/2">
      <div class="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-600 uppercase bg-brand-100 rounded-full">
        Medical Excellence
      </div>
      
      <h1 class="text-4xl md:text-5xl font-serif text-slate-900 leading-tight mb-8">
        DEPARTMENT OF ANAESTHESIOLOGY
      </h1>

      <div class="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
        <p class="relative pl-6 border-l-2 border-brand-200">
          The Department of Anaesthesiology has devoted academic faculty. They teaches the students about the basics of anaesthesia in lecture classes. They also teaches the students during their placement in anaesthesia. During operations students and trainee doctors are taught the practical aspects associated with anaesthesia.
        </p>
        
        
      </div>
    </div>

    <div class="w-full lg:w-1/2 flex justify-center">
      <div class="relative group">
        <div class="absolute -inset-4 rounded-xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
        
        <div id="anaesthesia-slideshow" class="relative w-[300px] h-[400px] rounded-lg overflow-hidden ring-8 ring-white shadow-xl">
          <img src="/assets/anatomy.jpg" class="slide absolute inset-0 w-full h-full transition-all duration-1000 scale-110 opacity-0 object-cover">
          <img src="/assets/for.jpeg" class="slide absolute inset-0 w-full h-full transition-all duration-1000 scale-110 opacity-0 object-cover">
          <img src="/assets/medicine.jpg" class="slide absolute inset-0 w-full h-full transition-all duration-1000 scale-110 opacity-0 object-cover">
          <img src="/assets/micro.jpeg" class="slide absolute inset-0 w-full h-full transition-all duration-1000 scale-110 opacity-0 object-cover">
          <img src="/assets/orth.jpeg" class="slide absolute inset-0 w-full h-full transition-all duration-1000 scale-110 opacity-0 object-cover">

          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
        </div>

        <div class="absolute bottom-6 right-6 flex gap-2">
           <span class="w-2 h-2 rounded-full bg-white/50 slide-dot transition-all"></span>
           <span class="w-2 h-2 rounded-full bg-white/50 slide-dot transition-all"></span>
           <span class="w-2 h-2 rounded-full bg-white/50 slide-dot transition-all"></span>
           <span class="w-2 h-2 rounded-full bg-white/50 slide-dot transition-all"></span>
           <span class="w-2 h-2 rounded-full bg-white/50 slide-dot transition-all"></span>
        </div>
      </div>
    </div>

  </div>
</section>

<script>
  (function() {
    let currentSlide = 0;
    const parent = document.querySelector('#anaesthesia-slideshow').closest('section');
    const slides = parent.querySelectorAll('.slide');
    const dots = parent.querySelectorAll('.slide-dot');

    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.remove('opacity-0', 'scale-110');
          slide.classList.add('opacity-100', 'scale-100');
          dots[i].classList.add('bg-white', 'w-4');
          dots[i].classList.remove('bg-white/50', 'w-2');
        } else {
          slide.classList.add('opacity-0', 'scale-110');
          slide.classList.remove('opacity-100', 'scale-100');
          dots[i].classList.add('bg-white/50', 'w-2');
          dots[i].classList.remove('bg-white', 'w-4');
        }
      });
    }

    showSlide(0);
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 4000);
  })();
</script>
  <section class="bg-white py-12 px-6 md:px-20 font-serif">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        <div class="relative group overflow-hidden shadow-xl rounded-sm">
          <img 
            src="https://www.pmch-bd.org/images/PMC/departments/anasthes2022.jpg" 
            alt="Medical Students" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
        </div>
  
        <div class="relative group overflow-hidden shadow-xl rounded-sm">
          <img 
            src="https://www.pmch-bd.org/images/PMC/departments/anesthesia3.jpg" 
            alt="Laboratory Facility" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
        </div>
  
      </div>
    </div>
  </section>

  <div class="max-w-7xl mx-auto py-10 px-4 md:px-6 font-serif">
    <div class="overflow-x-auto bg-white shadow-md rounded-sm border border-gray-200">
       <table class="w-full min-w-[600px] text-start border-collapse">
        <thead>
          <tr class="bg-gray-50 border-b border-gray-200">
            <th colspan="4" class="px-4 md:px-6 py-4 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-800 border-r border-gray-200">
              From left to right From first Left Side Picture:
            </th>
          </tr>
          <tr class="bg-gray-50 border-b border-gray-200">
            <th class="px-4 md:px-6 py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-800 border-r border-gray-200 w-1/4">
              First row:
            </th>
            <th class="px-4 md:px-6 py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-800 border-r border-gray-200 w-1/4">
              Title
            </th>
            <th class="px-4 md:px-6 py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-800 border-r border-gray-200 w-1/4">
              Second row (Lecturers):
            </th>
            <th class="px-4 md:px-6 py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-800 w-1/4">
              Title
            </th>
          </tr>
        </thead>
        
        <tbody class="text-xs md:text-sm text-gray-600">
          
          <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="px-4 md:px-6 py-4 text-gray-800 border-r border-gray-200">
              
                <div class="flex items-center gap-3">
                  <a href="/detail" class="hover:text-brand-600 transition-colors">
                    
                  </a>
                </div>
              
            </td>
            
            <td class="px-4 md:px-6 py-4 text-gray-800 border-r border-gray-200">
              
                <div class="flex items-center gap-3">
                  <a href="/detail" class="hover:text-brand-600 transition-colors">
                    
                  </a>
                </div>
              
            </td>
            
            <td class="px-4 md:px-6 py-4 italic border-r border-gray-200">
              
                <div class="flex items-center gap-3">
                  <a href="/detail" class="hover:text-brand-600 transition-colors">
                    
                  </a>
                </div>
              
            </td>

            <td class="px-4 md:px-6 py-4 italic">
              
                <div class="flex items-center gap-3">
                   <a href="/detail" class="hover:text-brand-600 transition-colors">
                    
                  </a>
                </div>
              
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>


<script>
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slide-dot');
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.remove('opacity-0', 'scale-110');
        slide.classList.add('opacity-100', 'scale-100');
        if(dots[i]) dots[i].classList.add('bg-white', 'w-4');
      } else {
        slide.classList.add('opacity-0', 'scale-110');
        slide.classList.remove('opacity-100', 'scale-100');
        if(dots[i]) dots[i].classList.remove('bg-white', 'w-4');
      }
    });
  }
  showSlide(0);
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 4000);
</script>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Anaesthesiology(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

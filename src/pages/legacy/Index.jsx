import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<div class="fixed inset-0 z-0 pointer-events-none">
  <img 
    src="/assets/blue.avif" 
    alt="Global Background" 
    class="w-full h-full object-cover object-center "
  />
  <div class="absolute inset-0 bg-white/10"></div>
</div>

<div class="relative z-10 w-full">

  <section class="relative h-[65vh] min-h-[550px] w-full overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img 
        src="/assets/bg.jpeg" 
        alt="Popular Medical College" 
        class="h-full w-full object-cover object-center scale-100 transition-transform duration-[10000ms] hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent"></div>
    </div>

    <div class="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-12">
      <div class="max-w-2xl  p-8 md:p-10 rounded-2xl   space-y-6">
        <div class="space-y-3">
          <h1 class="text-4xl  leading-tight tracking-tight text-white md:text-5xl ">
            Academic Faculty
          </h1>
          <div class="h-1 w-20 bg-emerald-900 rounded-full"></div>
        </div>

        <p class="text-lg leading-relaxed text-slate-50 md:text-xl font-light">
          Popular Medical College can boast of a faculty which certainly is well reputed and respected nationally and internationally for their devotion and professionalism. It is also important to point out that many of the faculty members are actively involved with postgraduate teaching, learning and examination programs in addition to their undergraduate responsibilities.
        </p>

        <div class="flex flex-wrap gap-4 pt-2">
          <a href="#" class="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-emerald-900 px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#007d3c] shadow-lg shadow-emerald-900/20 active:scale-95">
            <span>Apply Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <a href="#" class="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-950 active:scale-95">
            Read More
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-transparent py-24 px-6 md:px-12 overflow-hidden">
    <div class="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-[120px] opacity-10 pointer-events-none">
      <div class="aspect-square w-96 rounded-full bg-emerald-900"></div>
    </div>

    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        <div class="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
          

          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            Popular Medical College 
          </h2>
          
          
          <div class="text-slate-900 leading-relaxed text-lg max-w-xl space-y-4 font-normal">
            <p>
              Popular Group is the only State of the Art total health care provider of the country in private sector. Popular Medical College is a prestigious concern of Popular Group. The college was established in 2010. 
            
              Though fairly new among the procession of medical colleges of the country, Popular Medical College has already attained an enviable status for its outstanding care in preparing the students for their MBBS course.
            </p>
          </div>

          <div class="pt-2">
            <a href="#" class="group inline-flex items-center gap-2 text-slate-500 hover:text-emerald-900 font-semibold transition-colors duration-300">
              <span>Learn more about us</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
        
        <div class="w-full lg:w-1/2 flex items-center justify-center">
          <div class="relative w-full group max-w-2xl">
            <div class="absolute -inset-4  rounded-3xl -z-10 group-hover:scale-[1.01] transition-transform duration-500"></div>
            <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-900/5 rounded-2xl -z-20"></div>

            <div class="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-950 aspect-video ring-1 ring-black/5">
              <video 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" 
                controls 
                poster="https://www.pmch-bd.org/images/PMC/slider/sld1.jpg"
              >
                <source src="https://www.pmch-bd.org/images/Video1.mp4" type="video/mp4">
              </video>
              
              <div class="absolute inset-0 flex items-center justify-center bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors pointer-events-none">
                <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-all duration-300">
                  <div class="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-emerald-900 border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <div class="max-w-7xl mx-auto flex items-center justify-center px-6">
    <div class="flex-grow border-t border-slate-900"></div>
    <span class="mx-6 text-xs font-bold  text-slate-900 text-[24px] ">
      Management Desk
    </span>
    <div class="flex-grow border-t border-slate-900"></div>
  </div>

  <section class="w-full py-24 bg-transparent">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">

        <div class="group flex flex-col  backdrop-blur-md rounded-2xl p-8 shadow-sm  transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <h3 class="text-xl font-bold text-slate-800 text-center mb-6 min-h-[40px] flex items-center justify-center">
            From Vice-Principal's Desk
          </h3>

          <div class="relative mx-auto mb-6">
            <div class="absolute inset-0 rounded-full border-2 border-dashed border-emerald-900/40 scale-105 group-hover:rotate-180 transition-transform duration-1000"></div>
            <img
              src="/assets/Vice.jpg"
              alt="Vice Principal"
              class="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md relative z-10"
            />
          </div>

          <div class="flex-grow">
            <p class="text-slate-900 leading-relaxed text-base text-center font-normal line-clamp-[7] group-hover:line-clamp-none transition-all duration-500">
              He obtained his MBBS in 2002, MRCS in 2010, and FCPS in 2011. He also obtained Fellowship and Diploma on laparoscopy surgery in 2012. He worked in teaching posts in different medical colleges for about 12 years. Prior to joining in this institute, Dr. Mahamud Riyad was serving as Associate Professor of Surgery in Ad-din Medical College. In addition to undergraduate teaching, learning and assessment programs, he is actively involved with postgraduate teaching, learning and assessment programs of BCPS. He has 07 publications in different National and International Medical Journals.
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-50 text-center">
            <a href="#" class="inline-flex items-center text-xs font-bold tracking-widest text-emerald-900 hover:text-[#007d3c] transition-colors uppercase">
              Read Message
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div class="group flex flex-col  backdrop-blur-md rounded-2xl p-8 shadow-md border-t-4 border-t-emerald-900  0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative">
          <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-900 text-white text-[10px] px-4 py-1 rounded-full font-bold uppercase tracking-widest shadow-sm">
            Head of College
          </span>
          
          <h3 class="text-xl font-bold text-slate-800 text-center mb-6 min-h-[40px] flex items-center justify-center">
            From Principal's Desk
          </h3>

          <div class="relative mx-auto mb-6">
            <div class="absolute inset-0 rounded-full border-2 border-dashed border-emerald-900/60 scale-105 group-hover:rotate-90 transition-transform duration-700"></div>
            <img
              src="/assets/principal.jpg"
              alt="Principal"
              class="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md relative z-10"
            />
          </div>

          <div class="flex-grow">
            <p class="text-slate-900 leading-relaxed text-base text-center font-normal">
              It is my immense pleasure and privilege to welcome the new students to be admitted into this prestigious Medical College. With a team of fulltime highly experienced and dedicated teachers, adequate modern aids of teaching facilities; Popular Medical College has been established as one of the top most Medical Colleges in private sector of Bangladesh. I hope that with the use of these facilities, the students will become competent doctors and will be able to serve the nation and internationally with professional aptitudes.
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-50 text-center">
            <a href="#" class="inline-flex items-center text-xs font-bold tracking-widest text-emerald-900 hover:text-[#007d3c] transition-colors uppercase">
              Read Message
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div class="group flex flex-col  backdrop-blur-md rounded-2xl p-8 shadow-sm  transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <h3 class="text-xl font-bold text-slate-800 text-center mb-6 min-h-[40px] flex items-center justify-center">
            From Chairman's Desk
          </h3>

          <div class="relative mx-auto mb-6">
            <div class="absolute inset-0 rounded-full border-2 border-dashed border-emerald-900/40 scale-105 group-hover:-rotate-180 transition-transform duration-1000"></div>
            <img
              src="/assets/Chairman.jpg"
              alt="Chairman"
              class="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md relative z-10"
            />
          </div>

          <div class="flex-grow">
            <p class="text-slate-900 leading-relaxed text-base text-center font-normal line-clamp-[7] group-hover:line-clamp-none transition-all duration-500">
              The best gift of the parent to their sons & daughters is perfect education. In our country it is a great concern of every parent to find out perfect education for their sons and daughters after passing Higher Secondary Certificate Examination. The blaze of excellent result soon becomes gloomed when they face tremendous difficulties for admitting their children in a desired subject of an appropriate institution. Students are also confused about selecting appropriate subject for their undergraduate course.
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-50 text-center">
            <a href="#" class="inline-flex items-center text-xs font-bold tracking-widest text-emerald-900 hover:text-[#007d3c] transition-colors uppercase">
              Read Message
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="py-20 bg-transparent">
    <div class="max-w-7xl mx-auto px-6 md:px-12">

      <div class="flex items-center justify-center mb-16">
        <div class="flex-grow border-t border-slate-900"></div>
        <span class="mx-6 text-xs font-bold  text-slate-900 text-[24px]">
          Campus Highlights
        </span>
        <div class="flex-grow border-t border-slate-900"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div class="group relative overflow-hidden rounded-2xl bg-slate-950 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
          <div class="aspect-[4/5] w-full overflow-hidden">
            <img src="/assets/blog1.jpg" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-75" alt="Academic Award">
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-6 w-full">
            <span class="mb-2 inline-block rounded-full bg-emerald-900 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">Excellence</span>
            <h3 class="text-2xl font-bold leading-tight text-white tracking-wide">Academic<br>Award</h3>
          </div>
        </div>

        <div class="group relative overflow-hidden rounded-2xl bg-slate-950 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
          <div class="aspect-[4/5] w-full overflow-hidden">
            <img src="/assets/blog2.jpg" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-75" alt="Photography Club">
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-6 w-full">
            <span class="mb-2 inline-block rounded-full bg-emerald-900 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">Creative</span>
            <h3 class="text-2xl font-bold leading-tight text-white tracking-wide">Photography<br>Club</h3>
          </div>
        </div>

        <div class="group relative overflow-hidden rounded-2xl bg-slate-950 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
          <div class="aspect-[4/5] w-full overflow-hidden">
            <img src="/assets/blog3.jpg" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-75" alt="Life At PMC">
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-6 w-full">
            <span class="mb-2 inline-block rounded-full bg-emerald-900 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">Campus</span>
            <h3 class="text-2xl font-bold leading-tight text-white tracking-wide">Life At<br>PMC</h3>
          </div>
        </div>

        <div class="group relative overflow-hidden rounded-2xl bg-slate-950 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
          <div class="aspect-[4/5] w-full overflow-hidden">
            <img src="/assets/blog4.jpg" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-75" alt="Hospital">
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-6 w-full">
            <span class="mb-2 inline-block rounded-full bg-emerald-900 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">Healthcare</span>
            <h3 class="text-2xl font-bold leading-tight text-white tracking-wide">Modern<br>Hospital</h3>
          </div>
        </div>

      </div>
    </div>
  </section>
<section class=" bg-transparent">
    <div class="max-w-7xl mx-auto px-6 md:px-12">

      <div class="flex items-center justify-center mb-16">
        <div class="flex-grow border-t border-slate-900"></div>
        <span class="mx-6 text-xs font-bold  text-slate-900 text-[24px]">
          Important Notices
        </span>
        <div class="flex-grow border-t border-slate-900"></div>
      </div>
</div>
</section>
  <section class="py-10 bg-transparent">
    
    <div class="max-w-7xl mx-auto px-6 md:px-12">
     

      <div class=" backdrop-blur-md rounded-2xl shadow-sm   overflow-hidden">
        

        <div class="divide-y ">
          
          <a href="#" class="grid grid-cols-12 items-center px-6 py-4 hover:bg-emerald-900/5 transition-colors group">
            <div class="col-span-8 md:col-span-7 flex items-center gap-4">
              <div class="p-2.5 bg-slate-100/80 rounded-xl text-emerald-900 group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <span class="block font-semibold text-slate-800 group-hover:text-emerald-900 transition-colors text-base md:text-lg">Notice (DU Registration Fee)</span>
                <span class="md:hidden text-xs text-slate-900">267.18 KB</span>
              </div>
            </div>
            <div class="hidden md:block md:col-span-2 text-center text-sm text-slate-500 italic">267.18 KB</div>
            <div class="col-span-4 md:col-span-3 text-right">
              <span class="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-900">Aug 31, 2025</span>
            </div>
          </a>

          <a href="#" class="grid grid-cols-12 items-center px-6 py-4  transition-colors group">
            <div class="col-span-8 md:col-span-7 flex items-center gap-4">
              <div class="p-2.5 bg-red-50 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <span class="block font-semibold text-slate-800 group-hover:text-red-600 transition-colors text-base md:text-lg">Shok Barta</span>
                <span class="md:hidden text-xs text-slate-900">1015.21 KB</span>
              </div>
            </div>
            <div class="hidden md:block md:col-span-2 text-center text-sm text-slate-500 italic">1.02 MB</div>
            <div class="col-span-4 md:col-span-3 text-right">
              <span class="inline-block px-3 py-1 bg-red-50 rounded-full text-xs font-semibold text-red-600">Jul 29, 2025</span>
            </div>
          </a>

          <a href="#" class="grid grid-cols-12 items-center px-6 py-4 hover:bg-emerald-900/5 transition-colors group">
            <div class="col-span-8 md:col-span-7 flex items-center gap-4">
              <div class="p-2.5 bg-slate-100 rounded-xl text-emerald-900 group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <span class="block font-semibold text-slate-800 group-hover:text-emerald-900 transition-colors text-base md:text-lg">Notice for Foreign Students</span>
                <span class="md:hidden text-xs text-slate-900">201.79 KB</span>
              </div>
            </div>
            <div class="hidden md:block md:col-span-2 text-center text-sm text-slate-500 italic">201.79 KB</div>
            <div class="col-span-4 md:col-span-3 text-right">
              <span class="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-900">Jul 15, 2025</span>
            </div>
          </a>
        </div>
      </div>

      <div class="mt-8 md:hidden">
        <a href="#" class="block w-full text-center bg-slate-900 text-white py-4 rounded-xl font-bold tracking-widest shadow-md active:scale-98 transition-all">
          VIEW ALL NOTICES
        </a>
      </div>

    </div>
  </section>

 

  

</div>

<script>
  const btn = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');

  if(btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
</script>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Index(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

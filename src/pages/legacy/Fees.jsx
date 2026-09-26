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
          <span class="text-brand-600 font-bold tracking-widest uppercase text-sm mb-2 block">Financial Information</span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              College <span class="text-brand-600">Fees</span>
          </h1>
          <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              Transparent and structured fee policies designed to support high-quality medical education and campus infrastructure.
          </p>
      </div>
  </div>
</section>

<div class="bg-slate-50 py-16 px-6">
  <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
          
          <div class="order-2 lg:order-1">
              <h2 class="text-3xl font-bold text-slate-800 mb-6">Fee Structure & Payment</h2>
              <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                      The fee structure for the MBBS course is determined in accordance with the regulations set by the <span class="text-brand-600 font-semibold">Ministry of Health and Family Welfare</span> and the relevant governing authorities.
                  </p>
                  <p>
                      All students are required to clear their dues within the stipulated deadlines to ensure uninterrupted access to academic and residential facilities. Detailed schedules for tuition and other administrative fees are provided at the start of each session.
                  </p>
              </div>
              
              <div class="mt-8 flex flex-wrap gap-4">
                  <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                      <span class="w-3 h-3 bg-brand-300 rounded-full mr-2"></span>
                      <span class="text-sm font-bold text-slate-700">Official Bank Deposits Only</span>
                  </div>
                  <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                      <span class="w-3 h-3 bg-brand-300 rounded-full mr-2"></span>
                      <span class="text-sm font-bold text-slate-700">Detailed Receipt Provided</span>
                  </div>
              </div>

              <div class="mt-10">
                  <div class="inline-flex items-center text-brand-600 font-bold hover:text-emerald-800 transition-colors cursor-pointer group">
                      <span>View Detailed Fee Schedule</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                  </div>
              </div>
          </div>

          <div class="order-1 lg:order-2 group">
              <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                  
                  <img 
                      src="https://www.pmch-bd.org/images/PMC/sac1.jpg" 
                      alt="Administrative Office" 
                      class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <p class="text-white font-medium">College Accounts & Administrative Services</p>
                  </div>
              </div>
          </div>

      </div>
  </div>
</div>


<section class="bg-white py-16 px-6 md:px-20 ">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
    
    <div class="flex-1">
      <h2 class="text-xl font-bold text-gray-800 mb-6">College Fees</h2>
      
      <div class="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
        <ul class="list-disc list-outside ml-5 space-y-4">
          <li>
            The admission fee & monthly tuition fee for the session is as per government order.
Failure to pay the monthly tuition fee shall incur a fine per day which will be charged upto the end of the next month. The name of the student will be struck off from the college register on failure to pay the tuition fee for 2 (two) consecutive months.
Other charges (refundable and non-refundable) for facilities of the college may require to pay time to time.
Detail information regarding this will be available at the college office as and when necessary.
          </li>
        </ul>
        
        
      </div>
    </div>

    <div class="flex-1">
      <h2 class="text-xl font-bold text-gray-800 mb-6">Re-admission</h2>
      
      <div class="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
        <p>
          When the name of a student is struck off from the college register he / she will have to seek readmission on payment of full arrear dues along with the fine & re-admission fee. Re-admission fee is BDT 25,000/- (Twenty five thousand) only. A student's name may be stuck off from the college register under the following circumstances:</p>
        
        
        
        <ul class="list-disc list-outside ml-5 space-y-3">
          <li>Remaining absent from classes for one month without prior permission.</li>
          <li>Non-payment of tuition fees for consecutive two months.</li>
          <li>On disciplinary ground (as decided by academic council).</li>
        </ul>
      </div>
    </div>

  </div>
</section>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Fees(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

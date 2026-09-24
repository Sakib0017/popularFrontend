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
          <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Institutional Conduct</span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Rules & <span class="text-emerald-600">Regulations</span>
          </h1>
          <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              Established guidelines to maintain a disciplined, professional, and productive academic environment for all members of the Popular Medical College community.
          </p>
      </div>
  </div>
</section>

<div class="bg-slate-50 py-16 px-6">
  <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-start">
          
          <div class="order-2 lg:order-1">
              <h2 class="text-3xl font-bold text-slate-800 mb-6">Code of Conduct</h2>
              <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                      Students are expected to adhere to the <span class="text-emerald-700 font-semibold">highest standards of discipline</span>. The college administration emphasizes punctuality, professional attire, and respectful interaction within the campus.
                  </p>
                  <p>
                      Violation of rules regarding attendance, campus property, or academic integrity may lead to disciplinary action as per the decision of the Academic Council.
                  </p>
              </div>
              
              <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                      <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                      <span class="text-sm font-bold text-slate-700">Mandatory Uniform</span>
                  </div>
                  <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                      <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                      <span class="text-sm font-bold text-slate-700">Identity Card Requirement</span>
                  </div>
                  <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                      <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                      <span class="text-sm font-bold text-slate-700">Strict Punctuality</span>
                  </div>
                  <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                      <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                      <span class="text-sm font-bold text-slate-700">Smoke-Free Campus</span>
                  </div>
              </div>
          </div>

          <div class="order-1 lg:order-2 group">
              <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                  
                  <img 
                      src="https://www.pmch-bd.org/images/PMC/gt.jpg" 
                      alt="College Rules and Conduct" 
                      class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <p class="text-white font-medium">Maintaining Academic & Professional Integrity</p>
                  </div>
              </div>
          </div>

      </div>
  </div>
</div>

<section class="bg-white py-16 px-6 md:px-20 ">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
    
    <div class="flex-1">
      <h2 class="text-xl font-bold text-gray-800 mb-6">General Rules</h2>
      
      <div class="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
        <ul class="list-disc list-outside ml-5 space-y-4">
          <li>
            Popular Medical College, Hospital and Hostel Campus is a non-smoking zone. Smoking is absolutely prohibited in the college, hospital and hostel campus and treated as punishable offence.
          </li>

          <li>
            Political activities are not permitted in the college, hospital and hostel. Organization in the name of Union, Association or Society other than those set by the college authority are forbidden. Any attempt of such activity is treated as punishable offence.</li>
          <li>
            Popular Medical College, Hospital and Hostel Campus is a non-smoking zone. Smoking is absolutely prohibited in the college, hospital and hostel campus and treated as punishable offence.
          </li>
          <li>
            Fixing and or hanging of posters, distribution of leaflets, pamphlets etc. within the college, hospital and hostel premises are strictly prohibited unless permitted by the authority. These are treated as gross indiscipline & the offenders are liable to punishment. </li>
          <li>
            All types of demonstration, procession, shouting in the college, hospital and hostel premises are strictly prohibited and treated as punishable offence. </li>
          <li>
            Damage of the college, hospital and hostel property is treated as punishable offence.</li>
            <li>
              Violation of college rules and regulation is treated as punishable offence.</li>
        </ul>
        
        
      </div>


      <h2 class="text-xl font-bold text-gray-800 mb-6">Library rules</h2>
      
      <div class="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
        <ul class="list-disc list-outside ml-5 space-y-4">
          <p>
            Students are allowed to use the library from 8AM to 8PM on all working days of the week. The library remains close on Fridays, national holidays and holidays declared by the college office.</p>

          
        </ul>
        
        
      </div>

      <h2 class="text-xl font-bold text-gray-800 mb-6">Student's participation in co-curricular activities</h2>
      
      <div class="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
        <p>Students are encouraged to participate in co-curricular activities such as:</p>
        <ul class="list-disc list-outside ml-5 space-y-4">
          <li>
            Literary activities like debates, seminars, scientific fair, publications of periodic wall magazine, annual magazine etc.</li>

          <li>
            Sports and games.</li>
          <li>
            Cultural activities.          </li>
          <li>
            Observation of National Days</li>
          <li>
            Annual picnic</li>
          <li>
            Humanitarian & social services like free blood donation & free medicine distribution for poor patients, warm cloths distribution during winter, relief works during natural calamities like cyclones, floods, epidemics etc.
            Committees formed by the college authority consisting of teachers & students (Teachers-Students Committees) will look after these activities. Participation to these activities help to develop themselves as a team member, decision maker, communicator, manager and community leader in addition to efficient care provider.</li>
            
        </ul>
        
        
      </div>
      
      <h2 class="text-xl font-bold text-gray-800 mb-6">Library rules</h2>
      
      <div class="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
        <ul class="list-disc list-outside ml-5 space-y-4">
          <p>
            Students are allowed to use the library from 8AM to 8PM on all working days of the week. The library remains close on Fridays, national holidays and holidays declared by the college office.</p>

          
        </ul>
        
        
      </div>
    </div>

    <div class="flex-1">
      <h2 class="text-xl font-bold text-gray-800 mb-6">College Discipline</h2>
      
      <div class="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
        <p>
          Students must observe strict discipline in the college, hospital & hostel campus and also outside as
instructed by the college administration.
On disciplinary grounds the following penalties may be imposed on a student, depending on the nature of
offence -</p>
        <ul class="list-disc list-outside ml-5 space-y-3">
          <li>Warning.</li>
          <li>Fines.</li>
          <li>Both warning & fines.</li>
          <li>Signing of bond.</li>
          <li>Suspension from the college.</li>
          <li>Expulsion from the college</li>
          <li>Penalty / penalties imposed on students will be recorded in his / her transcript / testimonial.</li>
        </ul>
      </div>
      <h2 class="text-xl font-bold text-gray-800 mb-6">College Discipline</h2>
      
      <div class="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
        <p>
          Students must observe strict discipline in the college, hospital & hostel campus and also outside as
instructed by the college administration.
On disciplinary grounds the following penalties may be imposed on a student, depending on the nature of
offence -</p>
       
      </div>
      <h2 class="text-xl font-bold text-gray-800 mb-6">Academic Council Meeting</h2>
      
      <div class="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
        <p>
          Academic Council will meet as & when necessary. They discuss all aspects of academic matters of the college & suggest measures for improving the academic environment & total improvement of teaching & learning in the college.</p>
        
      </div>
      <h2 class="text-xl font-bold text-gray-800 mb-6">Curriculum and Academic Calendar</h2>
      
      <div class="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
        <p>
          Curriculum and academic calendar is provided to every student to help him / her understand the schedule
for the year.</p>
        
      </div>
    </div>

  </div>
</section>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Rules(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

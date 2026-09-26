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
            <span class="text-brand-600 font-bold tracking-widest uppercase text-sm mb-2 block">Examination Policies</span>
            <h1 class="text-3xl md:text-3xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
              Eligibility for Appearing in
              Professional (University) Examinations 
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              Professional (University) Examinations are held two times a year in May and November. Pre-requisites for appearing in the Professional Examinations:
              </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 max-w-7xl mx-auto mt-20 py-16 px-6">
  <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div class="w-full">
              <h2 class="text-3xl font-bold text-slate-800 mb-6">Candidate Pre-requisites</h2>
              <div class="space-y-6">
                  <div class="flex gap-4">
                      <div class="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-brand-600 font-bold">1</div>
                      <div>
                          <h3 class="text-lg font-bold text-slate-800">Attendance Requirement</h3>
                          <p class="text-slate-600">Minimum 75% attendance in all classes (Lecture, Tutorial, and Practical/Clinical) for each subject.</p>
                      </div>
                  </div>

                  <div class="flex gap-4">
                      <div class="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-brand-600 font-bold">2</div>
                      <div>
                          <h3 class="text-lg font-bold text-slate-800">Internal Assessment</h3>
                          <p class="text-slate-600">Successful completion of all items, card-ending exams, and term-ending assessments with a qualifying score.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div class="w-full">
              <h2 class="text-3xl font-bold text-slate-800 mb-6">Additional Criteria</h2>
              <div class="space-y-6">
                  <div class="flex gap-4">
                      <div class="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-brand-600 font-bold">3</div>
                      <div>
                          <h3 class="text-lg font-bold text-slate-800">Clearance & Conduct</h3>
                          <p class="text-slate-600">Certificate of good conduct from the respective department heads and clearance of all college dues.</p>
                      </div>
                  </div>

                  <div class="flex gap-4">
                      <div class="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-brand-600 font-bold">4</div>
                      <div>
                          <h3 class="text-lg font-bold text-slate-800">Professional Ethics</h3>
                          <p class="text-slate-600">Adherence to the college code of ethics and demonstration of professional behavior during clinical rotations.</p>
                      </div>
                  </div>
              </div>
          </div>

      </div>
  </div>
</div>


  

<section class="relative bg-white py-24 px-6 overflow-hidden ">
  <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(#0F766E 1px, transparent 1px); background-size: 40px 40px;"></div>

  <div class="max-w-6xl mx-auto relative z-10">
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-100">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-300"></span>
        </span>
        Professional Eligibility
      </div>
      <h2 class="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
        Examination <span class="text-brand-600 italic italic">Prerequisites</span>
      </h2>
      <p class="text-slate-500 mt-4 font-light max-w-xl mx-auto">Candidates must fulfill the following regulatory criteria to sit for the Professional MBBS Examinations.</p>
    </div>

    <div class="flex flex-wrap justify-center gap-4 mb-12">
      <button onclick="openEligibility(event, 'e1')" class="elig-btn active px-6 py-3 rounded-xl border-2 border-brand-300 bg-brand-100 text-blue-700 font-bold text-sm transition-all">1st Prof</button>
      <button onclick="openEligibility(event, 'e2')" class="elig-btn px-6 py-3 rounded-xl border-2 border-slate-100 bg-white text-slate-400 font-bold text-sm hover:border-brand-200 transition-all">2nd Prof</button>
      <button onclick="openEligibility(event, 'e3')" class="elig-btn px-6 py-3 rounded-xl border-2 border-slate-100 bg-white text-slate-400 font-bold text-sm hover:border-brand-200 transition-all">3rd Prof</button>
      <button onclick="openEligibility(event, 'e4')" class="elig-btn px-6 py-3 rounded-xl border-2 border-slate-100 bg-white text-slate-400 font-bold text-sm hover:border-brand-200 transition-all">4th Prof</button>
    </div>

    <div class="max-w-7xl mx-auto">
      <div id="eligibility-container" class="bg-slate-50 rounded-[2.5rem] border border-slate-200 p-8 md:p-12 shadow-2xl shadow-slate-200/50">
        
        <div id="elig-header" class="mb-8 border-b border-slate-200 pb-6">
          <h3 class="text-2xl font-serif text-slate-800" id="elig-title">1st Professional MBBS Candidate Requirements</h3>
          <p class="text-slate-500 text-sm mt-1 italic">Mandatory compliance for academic clearance</p>
        </div>

        <ul class="space-y-4" id="elig-list">
          <li class="flex items-start gap-4 p-4 rounded-2xl bg-blue-900/30 border border-blue-900/20 shadow-sm transition-transform hover:scale-[1.02]">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
              <svg class="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <div>
              <p class="text-slate-700 font-medium">Course Completion</p>
              <p class="text-slate-500 text-xs">Must have successfully completed the specified curriculum in all examination subjects.</p>
            </div>
          </li>

          <li class="flex items-start gap-4 p-4 rounded-2xl bg-blue-900/30 border border-blue-900/20 shadow-sm transition-transform hover:scale-[1.02]">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
              <svg class="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <div>
              <p class="text-slate-700 font-medium">Attendance Threshold (75%)</p>
              <p class="text-slate-500 text-xs">Minimum 75% attendance in total classes including Lectures, Tutorials, and Practicals.</p>
            </div>
          </li>

          <li class="flex items-start gap-4 p-4 rounded-2xl bg-blue-900/30 border border-blue-900/20 shadow-sm transition-transform hover:scale-[1.02]">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
              <svg class="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <div>
              <p class="text-slate-700 font-medium">Academic Performance (60%)</p>
              <p class="text-slate-500 text-xs">Achieved at least 60% marks in all three Term Examinations (Formative assessment).</p>
            </div>
          </li>

          <li class="flex items-start gap-4 p-4 rounded-2xl bg-blue-900/30 border border-blue-900/20 shadow-sm transition-transform hover:scale-[1.02]">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
              <svg class="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <div>
              <p class="text-slate-700 font-medium">Conduct & Dues Clearance</p>
              <p class="text-slate-500 text-xs">Requires a Certificate of Good Conduct, full payment of college dues, and university exam fees.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<script>
function openEligibility(evt, phaseId) {
  const titles = {
    'e1': '1st Professional MBBS',
    'e2': '2nd Professional MBBS',
    'e3': '3rd Professional MBBS',
    'e4': '4th Professional MBBS'
  };

  // UI Feedback for Buttons
  const buttons = document.getElementsByClassName("elig-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("border-brand-300", "bg-brand-100", "text-blue-700", "active");
    buttons[i].classList.add("border-slate-100", "bg-white", "text-slate-400");
  }

  evt.currentTarget.classList.add("border-brand-300", "bg-brand-100", "text-blue-700", "active");
  evt.currentTarget.classList.remove("border-slate-100", "bg-white", "text-slate-400");

  // Update Title with animation
  const titleEl = document.getElementById('elig-title');
  titleEl.style.opacity = 0;
  setTimeout(() => {
    titleEl.innerText = '$ {titles[phaseId]} Candidate Requirements';
    titleEl.style.opacity = 1;
  }, 150);

  // Re-trigger content animation
  const container = document.getElementById('eligibility-container');
  container.classList.remove('animate-fadeIn');
  void container.offsetWidth; // Trigger reflow
  container.classList.add('animate-fadeIn');
}
</script>

<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  #elig-title { transition: opacity 0.2s ease; }
</style>
  
  
  <div class="text-gray-600 leading-relaxed text-2xl bg-gray-900 p-20 w-full">
    <p class="text-white  leading-relaxed text-2xl mx-auto max-w-3xl">
      
Merit position & honours mark

Merit positions are declared only in the cases of regular students.
A student must get subject wise 85% of the total marks to avail honours mark.

Internship Training

Students who successfully pass the Final Professional MBBS Examination are required to undergo one year internship training in a BM&DC recognized hospital to be eligible for registration by BM&DC.  Medical College Hospital is recognized by BM&DC for such training. Internship is offered to the graduates of  Medical College.
</div>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Eligiblity(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

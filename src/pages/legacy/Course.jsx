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
      <div class="max-w-3xl border-l-4 border-brand-300 pl-6 md:pl-10">
          <span class="text-brand-600 font-bold tracking-widest uppercase text-sm mb-2 block">Academic Curriculum</span>
          <h1 class="text-3xl md:text-3xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
            Course Structure, Duration
            & Assessment in detail 
          </h1>
          <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
            Five academic years are transected as follows:
            </p>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              Graduation comprises of five academic years & requires one year compulsory rotatory internship programme in a recognized hospital in order to be registered under Bangladesh Medical & Dental Council.
              
            </p>
      </div>
  </div>
</section>

<div class="bg-slate-50 py-16 px-6">
  <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-3 gap-12">
        <div class="lg:col-span-1 space-y-8">
          <div>
              <div class="grid md:grid-cols-1 gap-6">
                  <div class="bg-blue-900/30 p-6 rounded-xl shadow-sm border border-blue-900/20">
                      <h3 class="text-brand-600 font-bold uppercase text-xs tracking-wider mb-2">Academic Degree</h3>
                      <p class="text-slate-700 font-semibold">Bachelor of Medicine & Bachelor of Surgery (MBBS)</p>
                  </div>
                  <div class="bg-blue-900/30 p-6 rounded-xl shadow-sm border border-blue-900/20">
                      <h3 class="text-brand-600 font-bold uppercase text-xs tracking-wider mb-2">Medium of Instruction</h3>
                      <p class="text-slate-700 font-semibold">English</p>
                  </div>
                  <div class="bg-blue-900/30 p-6 rounded-xl shadow-sm border border-blue-900/20">
                      <h3 class="text-brand-600 font-bold uppercase text-xs tracking-wider mb-2">Duration</h3>
                      <p class="text-slate-700 font-semibold">5 Years + 1 Year Mandatory Internship</p>
                  </div>
                
              </div>
          </div>

          
      </div>
          <div class="lg:col-span-2 space-y-8">
             

              <div class="bg-brand-50 border-r-4 border-brand-300 p-6 rounded-r-xl">
                  <h3 class="text-lg font-bold text-slate-800 mb-2">Basic Information about MBBS Course</h3>
                  <ul class="space-y-2 text-emerald-800">
                      <li class="flex items-start">
                          <span class="mr-2">•</span>
                          <span>Name of the course: Bachelor of Medicine & Bachelor of Surgery (MBBS)</span>
                      </li>
                      <li class="flex items-start">
                          <span class="mr-2">•</span>
                          <span>Basic qualifications & prerequisite for entrance in MBBS Course: </span>
                      </li>
                      <li class="flex items-start">
                        <span class="mr-2">•</span>
                        <span>HSC or equivalent with Science.(Biology, Physics, Chemistry)</span>
                    </li>
                    <li class="flex items-start">
                        <span class="mr-2">•</span>
                        <span>Candidate has to secure required grade point in the SSC and HSC examinations.  </span>
                    </li>
                    <li class="flex items-start">
                      <span class="mr-2">•</span>
                      <span>Students selection procedure for MBBS course:  According to decision by the proper competent authority as per merit. </span>
                  </li>
                  <li class="flex items-start">
                      <span class="mr-2">•</span>
                      <span>Medium of Instruction: English </span>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-2">•</span>
                    <span>Duration: MBBS course comprises of 5 Years, followed by mandatory logbook based rotatory internship for one year</span>
                </li>
                <li class="flex items-start">
                    <span class="mr-2">•</span>
                    <span>Course structure, subject with duration and professional examination</span>
                </li>
              </div>
          </div>

         

      </div>
  </div>
</div>

    

<section class="relative bg-white py-24 px-6 overflow-hidden">
  <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-100/50 to-transparent"></div>
  <div class="absolute -top-24 -right-24 w-96 h-96 bg-brand-100/50 rounded-full blur-3xl"></div>

  <div class="max-w-6xl mx-auto relative z-10">
    <div class="text-center mb-16">
      <div class="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-brand-600 uppercase bg-brand-100 rounded-full">
        The MBBS course is divided into four phase.
      </div>
      <h2 class="text-4xl md:text-5xl font-serif text-slate-900 mb-6">The MBBS <span class="text-brand-600 italic">Journey</span></h2>
      <p class="text-slate-500 max-w-2xl mx-auto font-light text-lg">
        A comprehensive four-phase academic structure designed to transform students into clinical experts.
      </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      <button onclick="openPhase(event, 'p1')" class="phase-btn active group relative p-6 rounded-2xl border transition-all duration-300 text-left bg-white shadow-sm hover:shadow-md border-brand-300 ring-1 ring-brand-300">
        <span class="block text-xs font-bold text-brand-600 uppercase mb-2 tracking-tighter">Phase I</span>
        <span class="block text-sm font-semibold text-slate-800 leading-tight">1st Professional</span>
      </button>

      <button onclick="openPhase(event, 'p2')" class="phase-btn group relative p-6 rounded-2xl border transition-all duration-300 text-left bg-white border-slate-100 hover:border-brand-200">
        <span class="block text-xs font-bold text-slate-400 uppercase mb-2 tracking-tighter">Phase II</span>
        <span class="block text-sm font-semibold text-slate-700 leading-tight">2nd Professional</span>
      </button>

      <button onclick="openPhase(event, 'p3')" class="phase-btn group relative p-6 rounded-2xl border transition-all duration-300 text-left bg-white border-slate-100 hover:border-brand-200">
        <span class="block text-xs font-bold text-slate-400 uppercase mb-2 tracking-tighter">Phase III</span>
        <span class="block text-sm font-semibold text-slate-700 leading-tight">3rd Professional</span>
      </button>

      <button onclick="openPhase(event, 'p4')" class="phase-btn group relative p-6 rounded-2xl border transition-all duration-300 text-left bg-white border-slate-100 hover:border-brand-200">
        <span class="block text-xs font-bold text-slate-400 uppercase mb-2 tracking-tighter">Phase IV</span>
        <span class="block text-sm font-semibold text-slate-700 leading-tight">Final Professional</span>
      </button>
    </div>

    <div class="bg-slate-50/50 border border-slate-100 rounded-[2rem] p-8 md:p-12 min-h-[400px]">
      
      <div id="p1" class="phase-content block animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div class="flex flex-col md:flex-row gap-12">
          <div class="md:w-1/3">
            <div class="text-6xl font-serif text-blue-100 mb-4">01</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Pre-Clinical Phase</h3>
            <p class="text-brand-600 font-medium">Duration: 1.5 Years</p>
          </div>
          <div class="md:w-2/3 space-y-8">
            <div>
              <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Core Subjects</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium">Anatomy</span>
                <span class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium">Physiology</span>
                <span class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium">Biochemistry</span>
              </div>
            </div>
            <div>
              <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Final Assessment</h4>
              <p class="text-slate-600 leading-relaxed font-light italic">
                First Professional MBBS examination. Includes comprehensive theory, viva, and practical assessments in all core pre-clinical subjects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="p2" class="phase-content hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div class="flex flex-col md:flex-row gap-12">
          <div class="md:w-1/3">
            <div class="text-6xl font-serif text-blue-100 mb-4">02</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Para-Clinical Intro</h3>
            <p class="text-brand-600 font-medium">Duration: 1.0 Year</p>
          </div>
          <div class="md:w-2/3 space-y-8">
             <div>
              <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Examination Subjects</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium">Pharmacology</span>
                <span class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium text-nowrap">Forensic Medicine</span>
              </div>
            </div>
            <div>
              <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Teaching Scope</h4>
              <p class="text-slate-600 text-sm leading-relaxed">
                Includes lectures in General Pathology, Microbiology, and introductory Medicine/Surgery clinical rotations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="p3" class="phase-content hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div class="flex flex-col md:flex-row gap-12">
          <div class="md:w-1/3">
            <div class="text-6xl font-serif text-blue-100 mb-4">03</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Para-Clinical Mastery</h3>
            <p class="text-brand-600 font-medium">Duration: 1.0 Year</p>
          </div>
          <div class="md:w-2/3 space-y-8">
            <div>
              <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Core Subjects</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium">Pathology</span>
                <span class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium">Microbiology</span>
                <span class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium">Community Medicine</span>
              </div>
            </div>
            <div>
              <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Clinical Exposure</h4>
              <p class="text-slate-600 text-sm leading-relaxed">
                Formal teaching continues in Gynae/Obs, Medicine, and Surgery alongside the core Para-clinical exam subjects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="p4" class="phase-content hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div class="flex flex-col md:flex-row gap-12">
          <div class="md:w-1/3">
            <div class="text-6xl font-serif text-blue-100 mb-4">04</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Clinical Final</h3>
            <p class="text-brand-600 font-medium">Duration: 1.5 Years</p>
          </div>
          <div class="md:w-2/3 space-y-8">
            <div>
              <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Major Disciplines</h4>
              <p class="text-slate-700 text-sm font-medium mb-4">Medicine, Surgery, Pediatrics, ENT, Eye, Gynae & Obs.</p>
              <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Allied Specialties</h4>
              <p class="text-slate-600 text-xs leading-relaxed">
                Dermatology, Psychiatry, Cardiology, Nephrology, Urology, Neurosurgery, Orthopaedics, and more.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<script>
function openPhase(evt, phaseName) {
  const contents = document.getElementsByClassName("phase-content");
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.add("hidden");
  }

  const buttons = document.getElementsByClassName("phase-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("border-brand-300", "ring-1", "ring-brand-300", "active");
    buttons[i].querySelector('span:first-child').classList.replace("text-brand-600", "text-slate-400");
  }

  document.getElementById(phaseName).classList.remove("hidden");
  evt.currentTarget.classList.add("border-brand-300", "ring-1", "ring-brand-300", "active");
  evt.currentTarget.querySelector('span:first-child').classList.replace("text-slate-400", "text-brand-600");
}
</script>
  
  
  <div class="text-gray-600 leading-relaxed text-2xl bg-gray-900 p-20 w-full">
    <p class="text-white  leading-relaxed text-2xl mx-auto max-w-3xl">
      Five Academic years have been structured for teaching learning and assessment programs. Teaching learning programs are conducted through lecture, tutorial, demonstration, clinical and performing the task. Assessment program is conducted through both formative and summative procedures. Formative or continuous in-course assessment is conducted by the institute through item, card & term examinations and attendance in the classes in each phase. Summative or end course assessment is conducted by the University through professional examinations twice in a year in the month of May & November. These end course (summative) examinations are conducted and results published within the specified time of the academic calendar.</p>
  </div>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Course(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

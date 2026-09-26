import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="https://www.pmch-bd.org/images/PMC/clg_frnt.jpg" 
             alt="College Front View" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="max-w-3xl border-l-4 border-brand-300 pl-6 md:pl-10">
            <span class="text-brand-600 font-bold tracking-widest uppercase text-sm mb-2 block">Institutional Excellence</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Quality <span class="text-brand-600">Assurance</span>
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                Dedicated to maintaining the highest standards of medical education through rigorous monitoring, continuous evaluation, and strategic development.
            </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            <div class="order-2 lg:order-1">
                <h2 class="text-3xl font-bold text-slate-800 mb-6">Commitment to Global Standards</h2>
                <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                        The Quality Assurance (QA) scheme at  Medical College ensures that our <span class="text-brand-600 font-semibold">academic and clinical protocols</span> align with national and international benchmarks. 
                    </p>
                    <p>
                        Through regular feedback loops involving faculty, students, and external examiners, we foster an environment of continuous improvement to produce medical graduates of the highest caliber.
                    </p>
                </div>
                
                <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-brand-300 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Academic Audits</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-brand-300 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Curriculum Review</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-brand-300 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Clinical Competency</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-brand-300 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Student Feedback</span>
                    </div>
                </div>
            </div>

            <div class="order-1 lg:order-2 group">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                    
                    <img 
                        src="https://www.pmch-bd.org/images/PMC/sac1.jpg" 
                        alt="Quality Assurance Meeting" 
                        class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p class="text-white font-medium">Standardizing Excellence in Medical Education</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>


<div class="bg-white min-h-screen text-slate-900">
    <div class="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
      
      
  
      
  
      <div class="space-y-6 text-justify leading-relaxed text-[#555] text-lg">
        <p>
          <span class=" text-gray-700">Apart from being able to provide the highest standard of care for the sick, the doctors of tomorrow require to be a good decision maker with fine communication & management skills and capable of providing the required leadership when the situation demands. To ensure this a persistent and systematic process of quality assurance cannot be over emphasized.  Medical College believes in student centric, teacher guided, parent supported, community oriented and values driven education program to produce competence based medical graduates capable</p>
            <p>
                <span class=" text-gray-700">of 'taking charge of the future'.  medical College ensures Quality Assurance of the medical curriculum through its Institutional Quality Assurance Body which is overviewed by the National Quality Assurance Body (NQAB) of Bangladesh.</p>
                    <p>
                        <span class=" text-gray-700">Quality Assurance (QA) is the totality of systems, resources and information devoted to maintain and improve the quality and standard of teaching, scholarship, research and the students learning experience. The Quality Assurance (QA) scheme in medical education review the way a college implements its course.  Medical College is having a strong Quality Assurance Body to monitor its education system, way of implementation of the course and the standard of teaching imparted to the students.</p>
                            <p>
                                <span class=" text-gray-700"> Medical College is accountable to the people of Bangladesh to produce medical graduates who are competent to deliver the health care which the community requires. The college operates the QA process within a management system consistent with the attitude of a self-evaluating institution. This is externally reviewed by the National Quality Assurance Body (NQAB) based on quality parameters pertaining to teaching, training and research.</p>
                                                  
        
      </div>
  
      <div class="mt-12 max-w-7xl mx-auto grid md:grid-cols-3 w-full overflow-hidden gap-10 rounded-sm ">
        <img 
          src="https://www.pmch-bd.org/images/PMC/Quality1.jpg" 
          alt="College Building" 
          class="w-full h-[250px] object-cover "
        />
        <img 
          src="https://www.pmch-bd.org/images/PMC/Quality2.jpg" 
          alt="College Building" 
          class="w-full h-auto object-cover "
        />
        <img 
          src="https://www.pmch-bd.org/images/PMC/Quality3.jpg" 
          alt="College Building" 
          class="w-full h-auto object-cover "
        />
      </div>
      <div class="space-y-6 text-justify leading-relaxed text-[#555] text-lg">
        <h1>Faculty Development Programs of the year (an overview)</h1>
        <p>
          <span class=" text-gray-700">The greatest asset of an educational institute is its teaching staff and  Medical College has a large number of highly qualified experienced & eminent teachers who are best of the bests. The college provides for its teaching staff the opportunity to further develop their abilities in relation to teaching and learning through the Faculty Development and Review Scheme. It makes available an on-going programme of faculty development on teaching and learning, assessment and evaluation, research methodology, research and medical writing through the Medical Education Unit (MEU) of the college. It facilitates the departments in preparation of self-assessment reports of academic performance as per guidelines given by National Quality Assurance Body.</p>
        
       
      </div>
  
      <div class="mt-12 max-w-7xl mx-auto grid md:grid-cols-3 w-full overflow-hidden gap-10 rounded-sm ">
        <img 
          src="https://www.pmch-bd.org/images/PMC/Quality4.jpg" 
          alt="College Building" 
          class="w-full h-[250px] object-cover "
        />
        <img 
          src="https://www.pmch-bd.org/images/PMC/Quality5.jpg" 
          alt="College Building" 
          class="w-full h-auto object-cover "
        />
        <img 
          src="https://www.pmch-bd.org/images/PMC/Quality6.jpg" 
          alt="College Building" 
          class="w-full h-auto object-cover "
        />
      </div>
      <div class="space-y-6 text-justify leading-relaxed text-[#555] text-lg">
        <h1>Inspection by Competent Authorities</h1>
        <p>
          <span class=" text-gray-700">Medical education in Bangladesh is controlled by Ministry of Health & Family Welfare, University & Bangladesh Medical & Dental Council. Ministry of Health & Family Welfare provides approval to the college as per principles laid down earlier subject to affiliation with the University. University affiliates the college according to University rules. It looks after the teaching learning and certification. Bangladesh Medical & Dental Council is the Regulatory Body to maintain Medical & Dental Educational standard in the country. It maintain register of qualified Medical & Dental graduates qualifying from recognized institution & take disciplinary action which may be required for professional misconduct. Bangladesh College of Physicians and Surgeons is a statutory body to confer fellowship & membership to postgraduate students who passed the respective examination. It affiliates training centers to ensure quality training to postgraduate trainees.</p>
        
       
      </div>
    </div>
  </div>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Quality(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

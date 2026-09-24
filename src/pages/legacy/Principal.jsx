import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<div class="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col items-start gap-12 lg:flex-row">
  
        <!-- Image Section -->
        <div class="w-full lg:w-1/3">
          <div class="group relative">
            <div class="overflow-hidden rounded-xl bg-white shadow-lg">
              <img
                src=""
                alt="Governing Body of  Medical College"
                class="h-[450px] w-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
  
              <div class="p-4 text-center">
                <p class="text-sm font-semibold uppercase tracking-wide text-blue-900">
                  Institutional Leadership
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Content Section -->
        <div class="flex w-full flex-col justify-center lg:w-2/3">
          <span class="mb-5 inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-medium uppercase tracking-wider text-blue-700">
            From the Desk of the Principal
          </span>
  
          <div class="space-y-6 text-lg leading-relaxed text-gray-600">
            <p>
              Since the ancient age, the concept of medical school has been proliferated to disperse the
knowledge and skill of healing to the dedicated disciples. In course of time, medical schools have
become the hub of incorporating the science with art of healing for learning as well as creating
knowledge. 
            </p>
  
            <p>
             In this part of the world where the need for standard healthcare outplays the logistics and skilled
manpower, medical colleges play a pivotal role to meet up the challenges.  Medical
College started its journey with a view to take up the challenge of building skilled manpower
along with providing standard healthcare to the people from all walks of the society. 
            </p>
  
            <p>
             Since the college’s inception, the quest for making it a centre of renowned minds of respective
medical specialities turned the college into a different one. A good number of veteran teachers
work here in unison to shape the tender brains of medical students into dedicated, empathetic and
of course, skilled ones. The college has been maintaining high level of professionalism and
standards of teaching since the beginning. State of the art teaching materials and a large, dedicated
multi-speciality teaching hospital paved the way for effective clinical learning.
            </p>
   <p>
              The college dedicates itself to create knowledge by clinical trials and researches. Students, in this
unique campus, learn to seek and evaluate clinical facts with close supervision from acclaimed
faculties in the respective fields. Through rich publications students as well as fresh physicians put
their strong footprints in the field of medicine. 
            </p>
             <p>
              The college stretch their effort to international arena also. Faculties and students actively
participate and host numerous clinical meetings and programs with many renowned overseas
organisations including American College of Physicians routinely.
            </p>
             <p>
               Medical College started its voyage with a commitment of “PRODUCING DOCTORS
WITH DIFFERENCE”. Till now, the college has been cruising through all odds and hardship but
maintaining the right course with full throttle. 
            </p>
             <p>
              It's firmly committed to provide a bright future to the physician individual as well as to country’s
healthcare. 
            </p>
            <p>
              I wish college's all success. 
            </p>
            <!-- Signature -->
            <div class="pt-4 space-y-1 text-right font-medium text-gray-700">
              <p class="text-gray-900">Prof. Khandaker Abu Rayhan</p>
              <p>Principal &</p>
              <p>Professor & Head, Department of Anatomy</p>
              <p> Medical College</p>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </div>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Principal(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col items-start gap-12 lg:flex-row">
  
        <!-- Image Section -->
        <div class="w-full lg:w-1/3">
          <div class="group relative">
            <div class="relative overflow-hidden rounded-xl bg-white shadow-lg">
              <img
                src="https://www.pmch-bd.org/templates/yootheme/cache/Vice-Principal-1b785252.jpg"
                alt="Governing Body of Popular Medical College"
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
          <span class="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-medium uppercase tracking-wider text-blue-700">
            Vice Principal's Desk
          </span>
  
          <div class="space-y-6 text-lg leading-relaxed text-gray-600">
            <p>
              It is my immense pleasure and privilege to welcome the new students to be admitted into this
prestigious Medical College. With a team of fulltime highly experienced and dedicated teachers,
adequate modern aids of teaching facilities; Popular Medical College has been established as one of the
top most Medical Colleges in private sector of Bangladesh. I hope that with the use of these facilities,
the students will become competent doctors and will be able to serve the nation and internationally with
professional aptitudes.
              
            </p>
             <p>
              As one of the member states of World Health Organization, Bangladesh was committed to implement
the goals of SDGs. To achieve these Popular Medical College is also taking various initiatives. The
hospital has free bed facilities for poor and vulnerable patients to be admitted, so the students are able to
learn on bedside setting. The diagnostic facilities of PMC are one of the best in Bangladesh. The
challenges for academic activities are to provide a balanced environment for the education of students
through engagement with local communities. To produce doctors of future perspective, there is a need
to bring them close to the community and as such PMC brings the students to community level (RFST)
with an excellent residential facility in Trisal, Mymensingh so that students will be able to develop skill
and attitudes to serve patients at rural community
              
            </p>
             <p>
              I wish to assure the guardians that our determination and sincere efforts combined with your support
shall allow us to produce doctors for the future generation with a difference.
              
            </p>
  
            <div class="space-y-1 text-right font-medium text-gray-700">
              <p>Prof. Mahamud Riyad</p>
              <p>Vice-Principal &</p>
              <p>Professor, Department of Surgery</p>
              <p>Popular Medical College</p>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </div>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Vice(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

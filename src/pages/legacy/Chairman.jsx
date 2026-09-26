import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<div class="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col items-start gap-12 lg:flex-row">
  
        <!-- Image Section -->
        <div class="w-full lg:w-1/3">
          <div class="group relative">
            <div class="overflow-hidden rounded-xl bg-blue-900/30 ring-1 ring-blue-900/20 shadow-sm">
              <img
                src=""
                alt="Chairman, Governing Body of  Medical College"
                class="h-[450px] w-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
  
              <div class="p-4 text-center">
                <p class="text-sm font-semibold uppercase tracking-wide text-slate-800">
                  Institutional Leadership
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Content Section -->
        <div class="flex w-full flex-col justify-center lg:w-2/3">
          <span class="mb-5 inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-medium uppercase tracking-wider text-blue-700">
            From the Office of the Chairman, Governing Body
          </span>
  
          <div class="space-y-6 text-lg leading-relaxed text-gray-600">
            <p>
              <span class="font-medium text-gray-800">
                The best gift of parents to their sons and daughters is quality
                education.
              </span>
              In our country, it is a major concern for every parent to ensure
              proper education for their children after passing the Higher
              Secondary Certificate examination. The excitement of excellent
              results often fades when students face difficulties in gaining
              admission to their desired subjects and institutions. Students are
              also frequently confused about selecting an appropriate
              undergraduate discipline.
            </p>
  
            <p>
              Career building, job security, personal interest, and uncertainty
              compel many science students to choose a universal subject at the
              HSC level—one that keeps pathways open to Medicine, Engineering,
              ICT, Agriculture, Business, and General Universities. This creates
              a real dilemma for students and guardians alike.
            </p>
  
            <p>
              This booklet aims to reduce that uncertainty by providing guidance
              to determine whether the noble profession of
              <span class="font-medium text-gray-800">Medicine</span> is the right
              choice. It also presents concise information about
              <span class="font-medium text-gray-800">
                 Medical College
              </span>,
              the flagship project of  Group—the only total health service
              provider in the private sector of the country.
            </p>
  
            <p>
              We hope this initiative will assist those who aspire to pursue
              Medicine as a profession in its true sense. Finally, we assure you
              that the governing body of this institute does not merely govern,
              but associates as a family—working together to contribute the very
              best.
            </p>
  
            <p class="font-medium text-gray-700">Thanking you all.</p>
  
            <!-- Signature -->
            <div class="pt-4 space-y-1 text-right font-medium text-gray-700">
              <p class="text-gray-900">Dr. Mostafizur Rahman</p>
              <p>Chairman, Governing Body</p>
              <p> Medical College</p>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </div>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Chairman(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

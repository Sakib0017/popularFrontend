import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<section
  class="relative h-[60vh]  bg-cover bg-center"
  style="background-image: url('https://www.pmch-bd.org/images/PMC/departments/physiology1.jpg');">
<!-- Dark Overlay -->

<!-- Content -->
<div class="relative max-w-7xl mx-auto px-6 h-full flex items-center">

<!-- Content Box -->
<div class="max-w-xl me-auto  backdrop-blur-sm text-white p-8 md:p-10">
  





  <h1 class="text-3xl md:text-3xl text-gray-900 font-bold leading-tight">
    DEPARTMENT OF PHYSIOLOGY
  </h1>
  <p>

    The Department of Physiology is provided with a well equipped laboratory and other ancillary facilities. Hands-on-training are conducted in Physiology Laboratory during practical works to provide an opportunity to the students to make them acquainted with instruments and their use. The students are encouraged to draw their own personal observations in relation to concepts developed during theoretical sessions.</p>

  
 

</div>

</div>

</section>
  <section class="bg-white py-12 px-6 md:px-20 font-serif">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        <div class="relative group overflow-hidden shadow-xl rounded-sm">
          <img 
            src="https://www.pmch-bd.org/images/PMC/departments/phy2022.jpg" 
            alt="Medical Students" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
        </div>
  
        <div class="relative group overflow-hidden shadow-xl rounded-sm">
          <img 
            src="https://www.pmch-bd.org/images/PMC/departments/phy2022_1.jpg" 
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
      <table class="w-full text-start border-collapse">
        <thead>
          <tr class="bg-gray-50 border-b border-gray-200">
            <th colspan="2" class="px-6 py-4 text-xs font-bold uppercase tracking-widest text-blue-900 border-r border-gray-200 w-1/2">
              From left to right From first Left Side Picture:
            </th>
            
          </tr>
          <tr class="bg-gray-50 border-b border-gray-200">
            <th class="px-6 py-4 text-xs font-bold uppercase tracking-widest text-blue-900 border-r border-gray-200 w-1/2">
              First row:
            </th>
            
            <th class="px-6 py-4 text-xs font-bold uppercase tracking-widest text-blue-900 w-1/2">
              Second row (Lecturers):
            </th>
          </tr>
        </thead>
        



        <tbody class="text-sm text-gray-600">
          <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 ">Dr. Razia Sultana, Asstt. Prof.</td>
            <td class="px-6 py-4 italic">Dr. Nazia Israfil</td>
          </tr>
          <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 ">Prof. Shameema Begum</td>
            <td class="px-6 py-4 italic">Dr. Smriti Devnath</td>
          </tr>
          <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 ">Dr. Farzana Yesmin, Assoc. Prof.</td>
            <td class="px-6 py-4 italic">Dr. Afrena Rahman</td>
          </tr>
          <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 ">Dr. Homaira Binte Maudud, Lecturer</td>
            <td class="px-6 py-4 italic">Dr. Mahamudur Rahman</td>
          </tr>
          <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 "></td>
            <td class="px-6 py-4">Dr. Md. Rashed Bhuiyan</td>
            
          </tr>
          <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 "></td>
            <td class="px-6 py-4">Dr. Md. Abdullah-Al-Mahmud</td>
          </tr>
          
          
        </tbody>
      </table>
    </div>
  </div>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Faculty(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

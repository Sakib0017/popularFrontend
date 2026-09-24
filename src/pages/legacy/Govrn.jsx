import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<section
class="relative h-[60vh]  bg-cover bg-center"
style="background-image: url('https://www.pmch-bd.org/images/yootheme/service-header.jpg');"
>
<!-- Dark Overlay -->

<!-- Content -->
<div class="relative max-w-7xl mx-auto px-6 h-full flex items-center">
  
  <!-- Content Box -->
  <div class="max-w-7xl mx-auto bg-gray-500/10 backdrop-blur-sm text-white p-8 md:p-10 rounded-xl shadow-lg">
    
    <h1 class="text-4xl md:text-5xl font-bold leading-tight">
        PMC Governing Body
    </h1>
   
  </div>
</div>
</section>


<div class="bg-white min-h-screen  text-gray-800">
    <div class="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
      
      <div class="mb-8">
        <img src="/assets/PMCH.gif" alt="Popular Medical College Logo" class="h-32 w-auto object-contain" />
      </div>
  
      <h1 class="font-serif text-4xl md:text-5xl text-[#333] mb-8 text-center">
        Popular Medical College
      </h1>
  
      
  
      <div class="mt-12 w-full overflow-hidden rounded-sm shadow-lg">
        <img 
          src="https://www.pmch-bd.org/images/Governing_Body_07202025.jpg" 
          alt="College Building" 
          class="w-full h-auto object-cover"
        />
      </div>
    
  
     
      
      
    </div>
  </div>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Govrn(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

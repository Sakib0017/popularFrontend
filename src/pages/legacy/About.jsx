import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<div class="fixed inset-0 z-0 pointer-events-none">
  <img 
    src="/assets/blue.avif" 
    alt="Global Background" 
    class="w-full h-full object-cover object-center "
  />
  <div class="absolute inset-0 bg-white/40"></div>
</div> 
  



 
<section
class="relative h-[60vh]  bg-cover bg-center"
style="background-image: url('https://www.pmch-bd.org/images/PMC/slider/sld1.jpg');"
>
<!-- Dark Overlay -->

<!-- Content -->
<div class="relative max-w-7xl mx-auto px-6 h-full flex items-center">
  
  <!-- Content Box -->
  <div class="max-w-7xl mx-auto bg-gray-500/10 backdrop-blur-sm text-slate-900 p-8 md:p-10 rounded-xl shadow-lg">
    
    <h1 class="text-4xl md:text-5xl font-bold leading-tight">
        About Us
    </h1>
    <p class="mt-4 text-lg text-slate-900">
        "... Producing Doctors With a Difference ..."</p>
  </div>
</div>
</section>


<div class="bg-white min-h-screen z-30 text-slate-900">
    <div class="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
      
      <div class="mb-8">
        <img src="/assets/PMCH.gif" alt="Popular Medical College Logo" class="h-32 w-auto object-contain" />
      </div>
  
      <h1 class="font-serif text-4xl md:text-5xl text-[#333] mb-8 text-center">
        Popular Medical College
      </h1>
  
      <div class="space-y-6 text-justify leading-relaxed text-[#555] text-lg">
        <p>
          <span class=" text-slate-900">Popular Group is the only State of the Art total health care provider of the country in private sector. Popular Medical College is a prestigious concern of Popular Group. The college was established in 2010. Though fairly new among the procession of medical colleges of the country Popular Medical College has already, attained an enviable status for its outstanding care in preparing the students for their MBBS course. Popular Medical College is placed in a prime location of Dhaka City. Most of the civic facilities are situated within 5 km. radius of the college. The college campus is easily connected by all types of transport and is within a very short distance from good dinning and shopping centers. The college has well-furnished residential hostel for the students situated near the college with dining hall and provisions for dining in groups. The academic building has adequate number of well-equipped air-conditioned lecture halls for large group teaching, conduction of examinations and social events. Every department has well equipped laboratory and or museum and adequate number of tutorials class rooms. All the class rooms are air conditioned and well furnished. The college has an air-conditioned library which is rich in the quality of books and supported by qualified & efficient staff to help the students. The college has built an additional reading room where students can study in extra hours. Designated teachers remain present in the library by rotation after college hours to help the students as and when required. The IT center is placed in the library to enable easy access to all.</p>
        
        
      </div>
  
      <div class="mt-12 w-full overflow-hidden rounded-sm shadow-lg">
        <img 
          src="https://www.pmch-bd.org/images/PMC/slider/sld2.jpg" 
          alt="College Building" 
          class="w-full h-auto object-cover"
        />
      </div>
      <div class="space-y-6 text-justify leading-relaxed text-[#555] text-lg">
        <p>
          <span class=" text-slate-900">The college has spacious air-conditioned male and female students’ common room for brief relaxation through indoor games within the compact and structured educational program. The college operates a modern cafeteria where the students can enjoy light and regular meals in between & after the classes with a range of food items, which is essentially balanced, nutritious, healthy and subsidized.</p>
        
       
      </div>
  
      <div class="mt-12 w-full overflow-hidden rounded-sm shadow-lg">
        <img 
          src="https://www.pmch-bd.org/images/PMC/about1.jpg" 
          alt="College Building" 
          class="w-full h-auto object-cover"
        />
      </div>
      
      <div class="space-y-6 text-justify leading-relaxed text-[#555] text-lg">
        <p>
          <span class=" text-slate-900">The Popular Medical College endeavors to ensure a state-of-the-art academic infrastructure providing ample learning facilities and boasts of a faculty who are highly reputed both nationally and internationally. The college boasts of a conglomeration of the finest academic staff. The departments are run by full time highly qualified, well experienced, dedicated and extremely efficient and skilled teachers. The college encourages friendly tutorship exhibiting professionalism in medical education and maintains the highest respect to discipline and rules. The program emphasizes on small group teaching, integrated teaching and problem-based learning in addition to the traditional lecture classes. Community based learning is an integral part of the academic program. The Popular Medical College thinks beyond the words that the curriculum dictates. The college not only undertakes to impart knowledge to its students but also stresses on character development and building moral values like human responsibilities, respect, care and appreciation to others to produce socially responsible persons of the community. The college encourages personal values to enable every student to develop confidence and self-awareness and the grit of determination to succeed. Medical professionals of today are facing many challenges. In an effort to inspire the young stars and also to try to develop professionalism amongst them the college organizes a program in the name of "Meet the Legend". Here the students and the interns have an opportunity to meet and interact with senior highly distinguished personalities of the profession and hear their noble words of wisdom.</p>
        
       
      </div>
    </div>
  </div>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function About(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

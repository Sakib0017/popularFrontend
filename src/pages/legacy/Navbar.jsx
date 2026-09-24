import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<!-- Top Utility Masthead Bar: Styled to match image layout with flat Dark Teal -->
<div class="bg-[#003B46] text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-teal-950/20 relative z-30">
  <div class="max-w-7xl mx-auto flex justify-between items-center">
    
    <!-- Left Layout: Service Indicators & Hours -->
   

    <!-- Right Layout: Mini Social Links (Directly matching image positioning) -->
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-3.5 text-slate-300">
        <a href="#" class="hover:text-white transition-colors" aria-label="Facebook Overview"><i class="fab fa-facebook-f text-xs"></i></a>
        <a href="#" class="hover:text-white transition-colors" aria-label="Twitter X Profile"><i class="fab fa-twitter text-xs"></i></a>
        <a href="#" class="hover:text-white transition-colors" aria-label="YouTube Channel"><i class="fab fa-youtube text-xs"></i></a>
      </div>
    </div>
  </div>
</div>

<!-- Primary Global Header Navigation Menu Container: Pure White Content Row -->
<nav class="bg-white shadow-md sticky top-0 z-[100] border-b border-slate-100">
  <div class="max-w-7xl mx-auto px-4 lg:px-8 relative">
    <div class="flex items-center justify-between h-24">
      
      <!-- Brand Identity Placement -->
      <div class="flex-shrink-0">
        <a href="/" class="block">
          <!-- Placeholder matches your branding structure -->
          <img src="/assets/PMCH.gif" alt="Popular Medical College Logo" class="h-14 md:h-16 w-auto">
        </a>
      </div>

      <!-- Desktop Screen Navigation List: Dark Teal Bold Typography matching shared screenshot style -->
      <div class="hidden xl:flex items-center space-x-4 lg:space-x-5 text-[13px] font-extrabold tracking-tight text-[#003B46]">
        
        <!-- Link: Home -->
        <div class="h-24 flex items-center">
          <a href="/" class="hover:text-emerald-600 transition-colors duration-150">HOME</a>
        </div>
      
        <!-- Dropdown Wrapper: Admission Segment -->
        <div class="group h-24 flex items-center relative">
          <button class="hover:text-emerald-600 transition-colors flex items-center gap-0.5 font-extrabold">
            ADMISSION
            <svg class="w-3 h-3 transition-transform group-hover:rotate-180 opacity-70 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          <div class="absolute left-0 top-full w-[280px] shadow-2xl border-t-4 border-emerald-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-[110] bg-white rounded-b-md">
            <div class="p-2 flex flex-col text-[12px] font-semibold text-slate-700 normal-case">
              <a href="/course" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Course Structure</a>
              <a href="/eligiblity" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Eligibility</a>
              <a href="/rules" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all font-bold text-emerald-600">COLLEGE RULES</a>
              <a href="#" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Procedure for Local Students</a>
              <a href="#" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Procedure for Foreign Students</a>
              <a href="/book" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Book List</a>
              <a href="/fees" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">College Fees</a>
              <div class="border-t border-slate-100 my-1"></div>
              <a href="http://dgme.teletalk.com.bd/mbbs/nongov/applicantscopy.php" target="_blank" class="p-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center rounded transition-all text-[11px] uppercase tracking-wider">Admission Portal ↗</a>
            </div>
          </div>
        </div>
      
        <!-- Dropdown Wrapper: Departments Segment -->
        <div class="group h-24 flex items-center relative">
          <button class="hover:text-emerald-600 transition-colors flex items-center gap-0.5 font-extrabold">
            DEPARTMENTS
            <svg class="w-3 h-3 transition-transform group-hover:rotate-180 opacity-70 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          <div class="absolute left-0 top-full w-[290px] shadow-2xl border-t-4 border-emerald-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-[110] bg-white rounded-b-md">
            <div class="p-2 flex flex-col max-h-[60vh] overflow-y-auto text-[12px] font-semibold text-slate-700 normal-case">
              <a href="/anatomy" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Anatomy</a>
              <a href="/physiology" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Physiology</a>
              <a href="/biochymistry" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Biochemistry</a>
              <a href="/medicine" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Community Medicine</a>
              <a href="/forensic" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Forensic Medicine</a>
              <a href="/pathology" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Pathology</a>
              <a href="/microbiology" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Microbiology</a>
              <a href="/pharmacology" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Pharmacology</a>
              <a href="/allied" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Medicine & Allied</a>
              <a href="/paediatrics" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Paediatrics</a>
              <a href="/surgery" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Surgery & Allied</a>
              <a href="/orthopaedics" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Orthopaedics</a>
              <a href="/ophthalmology" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Ophthalmology</a>
              <a href="/gynae" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Gynae & Obst.</a>
              <a href="/otorhinolaryngology" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Otorhinolaryngology</a>
              <a href="/anaesthesiology" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Anaesthesiology</a>
              
              <div class="border-t border-slate-100 mt-2 pt-2">
                <a href="/faculty" class="p-2 bg-[#003B46] hover:bg-[#07575B] text-white font-bold text-center rounded block transition-all text-[11px] uppercase tracking-wide">Academic Faculty</a>
              </div>
            </div>
          </div>
        </div>
      
        <!-- Dropdown Wrapper: Administration Segment -->
        <div class="group h-24 flex items-center relative">
          <button class="hover:text-emerald-600 transition-colors flex items-center gap-0.5 font-extrabold">
            ADMINISTRATION
            <svg class="w-3 h-3 transition-transform group-hover:rotate-180 opacity-70 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          <div class="absolute left-0 top-full w-[270px] shadow-2xl border-t-4 border-emerald-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-[110] bg-white rounded-b-md">
            <div class="p-2 flex flex-col text-[12px] font-semibold text-slate-700 normal-case">
              <a href="/about" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">About Us</a>
              <a href="/chairman" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Chairman Governing Body</a>
              <a href="/principal" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all border-t border-slate-100 mt-1 pt-1 font-bold">Desk of the Principal</a>
              <a href="/vice" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Vice Principal</a>
              <a href="/quality" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Quality Assurance</a>
              <a href="/award" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Academic Awards</a>
              <a href="/Govrn" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Governing Bodies</a>
              <a href="/land" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Land Information</a>
              <a href="/info" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Basic Information</a>
              <a href="/curriculam" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Curriculum</a>
            </div>
          </div>
        </div>
      
        <!-- Dropdown Wrapper: Life At PMC Segment -->
        <div class="group h-24 flex items-center relative">
          <button class="hover:text-emerald-600 transition-colors flex items-center gap-0.5 font-extrabold">
            LIFE AT PMC
            <svg class="w-3 h-3 transition-transform group-hover:rotate-180 opacity-70 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          <div class="absolute left-0 top-full w-[260px] shadow-2xl border-t-4 border-emerald-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-[110] bg-white rounded-b-md">
            <div class="p-2 flex flex-col text-[12px] font-semibold text-slate-700 normal-case">
              <a href="/care" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Student Care</a>
              <a href="/experience" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Learning Experience</a>
              <a href="/skill" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Skill Centre</a>
              <a href="/club" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Photography Club</a>
              <a href="/picnic" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Annual Picnic</a>
              <a href="/program" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Cultural Program</a>
              <a href="/fair" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Science Fair</a>
              <a href="/sports" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Sports Competition</a>
              <a href="/events" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Important Events</a>
              <a href="/day" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">PMC Day</a>
            </div>
          </div>
        </div>

        <!-- Dropdown Wrapper: Facility Segment -->
        <div class="group h-24 flex items-center relative">
          <button class="hover:text-emerald-600 transition-colors flex items-center gap-0.5 font-extrabold">
            FACILITIES
            <svg class="w-3 h-3 transition-transform group-hover:rotate-180 opacity-70 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          <div class="absolute left-0 top-full w-[270px] shadow-2xl border-t-4 border-emerald-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-[110] bg-white rounded-b-md">
            <div class="p-2 flex flex-col max-h-[60vh] overflow-y-auto text-[12px] font-semibold text-slate-700 normal-case">
              <a href="/library" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">College Library</a>
              <a href="/it" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">IT Corner</a>
              <a href="/support" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Student Support Center</a>
              <a href="/assist" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Student Assistance Center</a>
              <a href="/resource" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Student Resource Center</a>
              <a href="/guardians" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Liaison with Guardians</a>
              <a href="/legends" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Meet the Legends</a>
              <a href="/center" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Medical Center</a>
              <a href="/confer" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">College Conference Room</a>
              <a href="/cafe" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">College Cafeteria</a>
              <a href="/common" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">College Common Room</a>
              <a href="/hostal" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">College Hostel</a>
              <div class="border-t border-slate-100 my-1"></div>
              <a href="/hospital" class="p-2 font-bold text-emerald-600 hover:text-emerald-700 transition-all">Hospital Site</a>
              <a href="/contact" class="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded transition-all">Contact US</a>
            </div>
          </div>
        </div>

        <!-- Link: Committees -->
        <div class="h-24 flex items-center">
          <a href="/committee" class="hover:text-emerald-600 transition-colors">COMMITTEES</a>
        </div>
      
        <!-- Link: Notice -->
        <div class="h-24 flex items-center">
          <a href="/notice" class="hover:text-emerald-600 transition-colors">NOTICE</a>
        </div>
      </div>

      <!-- Right Column: Hotline Overlapping Badge (Matching the image style blueprint perfectly) -->
      <div class="hidden md:flex items-center h-full pl-4 z-20">
        <a href="tel:10606" 
           id="hotline-badge"
           class="bg-[#007A78] text-white flex flex-col justify-center items-center px-5 h-[110px] rounded-b-2xl shadow-[0_8px_20px_rgba(0,122,120,0.3)] border-x border-b border-white/10 hover:bg-[#006664] transition-all duration-300 -translate-y-[25px]">
          <span class="text-[11px] font-bold tracking-widest opacity-90 uppercase">Hotline</span>
          <span class="text-xl font-black tracking-tight mt-0.5">10606</span>
        </a>
      </div>
<script>
  window.addEventListener('scroll', function() {
    const hotlineBadge = document.getElementById('hotline-badge');
    
    // If user scrolls down more than 20 pixels
    if (window.scrollY > 20) {
      // Bring it down to line up cleanly with the navbar base line
      hotlineBadge.classList.remove('-translate-y-[25px]');
      hotlineBadge.classList.add('translate-y-0');
    } else {
      // Put it back up into the top ribbon when at the absolute top
      hotlineBadge.classList.remove('translate-y-0');
      hotlineBadge.classList.add('-translate-y-[25px]');
    }
  });
</script>
      <!-- Mobile Hamburger Button Element -->
      <div class="xl:hidden flex items-center">
        <button id="mobile-menu-button" class="text-[#003B46] p-2 hover:bg-slate-50 focus:outline-none rounded-md transition-colors" aria-label="Open Site Content Menu">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="menu-icon">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

    </div>
  </div>
  
  <!-- Responsive Mobile Dropdown Drawer Structure -->
  <div id="mobile-menu" class="hidden xl:hidden bg-white border-t border-slate-100 px-6 py-4 shadow-inner">
    <div class="flex flex-col space-y-3 text-[12px] font-bold tracking-wider uppercase text-[#003B46]">
      <a href="/" class="hover:text-emerald-600 py-2 border-b border-slate-50">Home</a>
      <a href="/course" class="hover:text-emerald-400 py-2 border-b border-slate-50">Admission</a>
      <a href="/faculty" class="hover:text-emerald-400 py-2 border-b border-slate-50">Departments</a>
      <a href="/about" class="hover:text-emerald-400 py-2 border-b border-slate-50">Administration</a>
      <a href="/notice" class="hover:text-emerald-400 py-2 border-b border-slate-50">Notice</a>
      <a href="/contact" class="hover:text-emerald-400 py-2 border-b border-slate-50">Facilities</a>
      <!-- Inline mobile phone hotline link alternative -->
      <a href="tel:10606" class="bg-[#007A78] text-white text-center py-2.5 rounded font-bold tracking-normal text-xs mt-2 block">CALL EMERGENCY DESK: 10606</a>
    </div>
  </div>
</nav>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Navbar(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

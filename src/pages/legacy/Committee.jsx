import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<main class="py-12 px-4">
    
    <div class="max-w-7xl mx-auto text-center mb-10">
        <h1 class="text-4xl font-bold text-gray-800">Our Committees</h1>
        <div class="h-1 w-20 bg-[#00984a] mx-auto mt-4"></div>
    </div>

    

    <div class="max-w-7xl mx-auto   px-4 py-10">
    
    <div class="grid grid-cols-1  gap-8">

        

        <div class="bg-white rounded-xl shadow-lg  border border-gray-200 overflow-hidden h-fit transition-transform hover:scale-[1.01]">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th colspan="2" scope="colgroup" class="px-6 py-5 text-center text-xl font-bold text-slate-900  uppercase tracking-widest border-b border-green-700">
                            <span class="block whitespace-pre-line"></span>
                        </th>
                    </tr>
                    <tr class="divide-x divide-gray-200 bg-gray-100">
                        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-1/3">
                            Role
                        </th>
                        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Personnel
                        </th>
                    </tr>
                </thead>
                
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr class="hover:bg-green-50 transition-colors">
                        <td class="px-4 py-4 text-xs font-bold text-gray-700 border-r border-gray-100 uppercase">Patron</td>
                        <td class="px-4 py-4 text-sm text-gray-600 italic whitespace-pre-line">
                            
                        </td>
                    </tr>
                    <tr class="hover:bg-green-50 transition-colors">
                        <td class="px-4 py-4 text-xs font-bold text-gray-700 border-r border-gray-100 uppercase">Chairman</td>
                        <td class="px-4 py-4 text-sm text-gray-800 font-semibold whitespace-pre-line">
                            
                        </td>
                    </tr>
                    <tr class="hover:bg-green-50 transition-colors">
                        <td class="px-4 py-4 text-xs font-bold text-gray-700 border-r border-gray-100 uppercase">Members</td>
                        <td class="px-4 py-4 text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                            
                        </td>
                    </tr>
                    <tr class="hover:bg-green-50 transition-colors">
                        <td class="px-4 py-4 text-xs font-bold text-gray-700 border-r border-gray-100 uppercase">Secretary</td>
                        <td class="px-4 py-4 text-sm text-gray-600 whitespace-pre-line">
                            
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

        

    </div>
</div>

    

</main>



<script>
  // Mobile menu logic - ensure ID matches your navbar.php
  const btn = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');

  if(btn && menu) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
  }
</script>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Committee(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<div class="max-w-7xl mx-auto my-10 px-4">
    <div class="overflow-hidden  rounded-lg">
        <h1 class="text-center text-[24px]">সাধারণ তথ্য </h1>
        
      <table class="min-w-full divide-y border divide-gray-200">
       
  
        <tbody class="bg-white divide-y divide-gray-200">
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">ভর্তির জন্য অনুমোদিত আসন সংখ্যা</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">১০৫</td>
           
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">সর্বমোট ছাত্র/ছাত্রীর সংখ্যা</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৫১</td>
           
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">হাসপাতালের শয্যা সংখ্যা</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬০০</td>
           
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">Free Bed এর সংখ্যা</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৬</td>
           
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">বেড অকুপেন্সী (আনুমানিক)</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৮০%</td>
            
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>

  <div class="max-w-7xl mx-auto my-10 px-4">
    <h1 class="text-center text-[24px]">সরকার কর্তৃক একাডেমিক</h1>
    <div class="overflow-hidden border border-gray-200 rounded-lg ">
        
      <table class="min-w-full divide-y divide-gray-200">
       
  
        <tbody class="bg-white divide-y divide-gray-200">
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">অনুমোদনের সেশন</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700"> সরকার কর্তৃক সর্বশেষ পরিদর্শণ: ২০২৩ অনুমোদনের সেশন:  ২০২২-২০২৩ সেশন</td>
            
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">বিএমএন্ডডিসি কর্তৃক একাডেমিক অনুমোদনের সেশন</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700"> বিএমএন্ডডিসি কর্তৃক পরিদর্শণ: ২০২৩ অনুমোদনের সেশন:  ২০১৯-২০২০ সেশন</td>
            
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">ঢকা বিশ্ববিদ্যালয় কর্তৃক একাডেমিক অনুমোদনের সেশন</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">ঢাকা বিশ্ববিদ্যালয় কর্তৃক পরিদর্শণ: ২০২৩  অনুমোদনের সেশন:  ২০২২-২০২৩ সেশন ।</td>
            
          </tr>
         
          
         
        </tbody>
      </table>
      
    </div>
  </div>
  <p class="text-center mb-20">**      পরবর্তী শেসন সমূহের একাডেমিক অনুমোদন প্রক্রিয়াধীন(আবেদিত)।</p>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Info(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

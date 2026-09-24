import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useRef } from 'react';

const HTML = `<div class="max-w-7xl mx-auto my-10 px-4">
    <div class="overflow-hidden  rounded-lg">
        <h1 class="text-center text-[24px]">প্রতিষ্ঠানের নামে জমির তথ্যাদি </h1>
        <p >দলিল নাম্বার  :</p>
      <table class="min-w-full divide-y border divide-gray-200">
        <thead class="bg-blue-900  text-white">
          <tr >
            <th scope="col" class="px-6 py-4 text-left  text-center  text-center font-semibold uppercase tracking-wider">
                ক্রমিক নং
            </th>
            <th scope="col" class="px-6 py-4 text-left  text-center  text-center font-semibold uppercase tracking-wider">
                দলিল নং
            </th>
            <th scope="col" class="px-6 py-4 text-left  text-center  text-center font-semibold uppercase tracking-wider">
                জমির পরিমান
            </th>
          </tr>
        </thead>
  
        <tbody class="bg-white divide-y divide-gray-200">
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50">
            <td class="px-6 py-4 whitespace-nowrap   text-center font-medium text-gray-900">মোট =   </td>
            <td class="px-6 py-4 whitespace-nowrap   text-center font-medium text-gray-900"></td>
            <td class="px-6 py-4 whitespace-nowrap   text-center   text-gray-700">  ১২১.৬৩ কাঠা</td>
            
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="max-w-7xl mx-auto my-10 px-4">
    <div class="overflow-hidden border border-gray-200 rounded-lg shadow-md">
        
      <table class="min-w-full divide-y divide-gray-200">
       
  
        <tbody class="bg-white divide-y divide-gray-200">
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">মৌজা   (স্থায়ী ক্যাম্পাস) </td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700"> কাটাসুর, জে এল নং ০০৬</td>
            
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">খতিয়ান নম্বর  </td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৪১৮১,৪২২৭,৪১৭৪,৪৯৫৪,৯৯৫৭,৪১৭৯,৪১৭৭,</br>

                ৪১৮৪,৯৯৮১,৯৯৫৮,৪১৮৩,৭৮৮৯,১০০৬২,</br>

                ১২৬৫৪,১২১৪৯,৯৯৮২,১২১৪৮,১২১৫৩,৪২১৮</td>
            
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">জমির পরিমাণ</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">  ১২১.৬৩ কাঠা</td>
            
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">নামজারী</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">আবেদিত।</td>
            
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">একাডেমিক (বর্তমান অস্থায়ী) ভবন ফ্লোরস্পেস</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700"> ১,৫০,০০০ বর্গফুট</td>
            
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">হাসপাতাল (বর্তমান অস্থায়ী) ৬টি ভবন মোট ফ্লোরস্পেস</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">২,০০,০০০ বর্গফুট</td>
           
          </tr>
          
         
        </tbody>
      </table>
    </div>
  </div>`;

const MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };

export default function Land(){
  const ref = useRef(null);
  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);
  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);
}

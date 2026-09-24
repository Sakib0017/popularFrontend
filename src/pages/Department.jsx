import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import api, { imgUrl } from '../api.js';

// Generic department page — replaces anatomy.php, physiology.php, ... (16 files)
// PHP logic preserved: seniors = type NOT LIKE %Lecturer%, lecturers = LIKE %Lecturer%
const SLUGS = {
  anatomy: 'Anatomy', physiology: 'Physiology', biochymistry: 'Biochemistry',
  medicine: 'Community Medicine', forensic: 'Forensic Medicine', pathology: 'Pathology',
  microbiology: 'Microbiology', pharmacology: 'Pharmacology', allied: 'Medicine & Allied',
  paediatrics: 'Paediatrics', surgery: 'Surgery & Allied', orthopaedics: 'Orthopaedics',
  ophthalmology: 'Ophthalmology', gynae: 'Gynae & Obst.', otorhinolaryngology: 'Otorhinolaryngology',
  anaesthesiology: 'Anaesthesiology',
};

export default function Department() {
  const { slug } = useParams();
  const dept = SLUGS[slug] || slug;
  const [seniors, setSeniors] = useState([]);
  const [lecturers, setLecturers] = useState([]);

  useEffect(() => {
    api.get('/doctors/seniors', { params: { department: dept } }).then(r => setSeniors(r.data)).catch(() => {});
    api.get('/doctors/lecturers', { params: { department: dept } }).then(r => setLecturers(r.data)).catch(() => {});
  }, [dept]);

  const max = Math.max(seniors.length, lecturers.length, 1);
  return (
    <div>
      <Navbar />
      <section className="relative bg-gray-50 py-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">Medical Excellence</div>
          <h1 className="text-4xl md:text-5xl text-slate-900 leading-tight mb-8">DEPARTMENT OF {dept.toUpperCase()}</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">Faculty list for the Department of {dept} at  Medical College. Senior faculty (left) and Lecturers (right) — loaded live from MongoDB (migrated from MySQL `doctor` table).</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-6">
        <div className="w-full overflow-hidden shadow-md rounded-sm border border-gray-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th colSpan="4" className="px-6 py-4 text-sm font-bold uppercase tracking-widest text-blue-900">Department of {dept} — Faculty</th>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-xs font-bold uppercase text-blue-900 border-r w-1/4">First row</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-blue-900 border-r w-1/4">Title</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-blue-900 border-r w-1/4">Second row (Lecturers)</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-blue-900 w-1/4">Title</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                {Array.from({ length: max }).map((_, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 border-r">{seniors[i] && <Link to={`/doctor/${seniors[i]._id}`} className="hover:text-blue-600 flex items-center gap-3"><img src={imgUrl(seniors[i].image)} className="w-10 h-10 rounded-full object-cover" alt="" />{seniors[i].name}</Link>}</td>
                    <td className="px-6 py-4 border-r">{seniors[i]?.title}</td>
                    <td className="px-6 py-4 italic border-r">{lecturers[i] && <Link to={`/doctor/${lecturers[i]._id}`} className="hover:text-blue-600">{lecturers[i].name}</Link>}</td>
                    <td className="px-6 py-4 italic">{lecturers[i]?.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

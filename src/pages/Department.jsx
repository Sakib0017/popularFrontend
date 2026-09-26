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
      <section className="relative bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 sm:mb-6 text-[11px] sm:text-xs font-bold tracking-widest text-blue-900 uppercase bg-blue-900/[0.07] ring-1 ring-blue-900/15 rounded-full"><span className="w-1.5 h-1.5 rounded-full bg-blue-900/60"></span>Medical Excellence</div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl text-slate-900 leading-tight mb-4 sm:mb-8 break-words">DEPARTMENT OF {dept.toUpperCase()}</h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">Faculty list for the Department of {dept} at  Medical College. Senior faculty (left) and Lecturers (right) — loaded live from MongoDB (migrated from MySQL `doctor` table).</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto py-6 sm:py-10 px-4 md:px-6">
        {/* Mobile: stacked cards (phones). Tablet/desktop: table. */}
        <div className="md:hidden space-y-6">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800 mb-3">Senior Faculty</h2>
            {seniors.length === 0 && <p className="text-sm text-slate-700 bg-blue-900/30 border border-blue-900/20 rounded-xl p-4">No senior faculty listed.</p>}
            <div className="space-y-3">
              {seniors.map((s) => (
                <Link key={s._id} to={`/doctor/${s._id}`} className="flex items-center gap-3 bg-blue-900/30 border border-blue-900/20 rounded-xl p-3">
                  <img src={imgUrl(s.image)} className="w-12 h-12 rounded-full object-cover shrink-0" alt="" />
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-800 text-sm truncate">{s.name}</p>
                    <p className="text-xs text-slate-500 truncate">{s.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800 mb-3">Lecturers</h2>
            {lecturers.length === 0 && <p className="text-sm text-slate-700 bg-blue-900/30 border border-blue-900/20 rounded-xl p-4">No lecturers listed.</p>}
            <div className="space-y-3">
              {lecturers.map((l) => (
                <Link key={l._id} to={`/doctor/${l._id}`} className="block bg-blue-900/30 border border-blue-900/20 rounded-xl p-3">
                  <p className="font-semibold text-slate-800 text-sm italic truncate">{l.name}</p>
                  <p className="text-xs text-slate-500 italic truncate">{l.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:block w-full overflow-hidden rounded-xl border border-blue-900/20 bg-blue-900/30">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="bg-white/40 border-b border-blue-900/15">
                  <th colSpan="4" className="px-6 py-4 text-sm font-bold uppercase tracking-widest text-slate-800">Department of {dept} — Faculty</th>
                </tr>
                <tr className="bg-white/40 border-b border-blue-900/15">
                  <th className="px-6 py-4 text-xs font-bold uppercase text-slate-700 border-r w-1/4">First row</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-slate-700 border-r w-1/4">Title</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-slate-700 border-r w-1/4">Second row (Lecturers)</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-slate-700 w-1/4">Title</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                {Array.from({ length: max }).map((_, i) => (
                  <tr key={i} className="border-b border-blue-900/10 hover:bg-white/40 transition-colors">
                    <td className="px-6 py-4 border-r">{seniors[i] && <Link to={`/doctor/${seniors[i]._id}`} className="hover:text-brand-600 flex items-center gap-3"><img src={imgUrl(seniors[i].image)} className="w-10 h-10 rounded-full object-cover" alt="" />{seniors[i].name}</Link>}</td>
                    <td className="px-6 py-4 border-r">{seniors[i]?.title}</td>
                    <td className="px-6 py-4 italic border-r">{lecturers[i] && <Link to={`/doctor/${lecturers[i]._id}`} className="hover:text-brand-600">{lecturers[i].name}</Link>}</td>
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

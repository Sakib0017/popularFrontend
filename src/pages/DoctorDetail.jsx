import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import api, { imgUrl } from '../api.js';

// Converted from detail.php (PDO doctor + same-department colleagues)
export default function DoctorDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => { api.get(`/doctors/${id}`).then(r => setData(r.data)).catch(() => setData(false)); }, [id]);
  if (data === false) return <div className="text-center py-20 px-4 text-xl sm:text-2xl">Doctor profile not found.</div>;
  if (!data) return <div className="text-center py-20 px-4">Loading…</div>;
  const { doctor, colleagues } = data;
  return (
    <div className="bg-slate-50">
      <Navbar />
      <section className="max-w-6xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="bg-blue-900/30 rounded-2xl border border-blue-900/20 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-white/40 p-6 sm:p-10 flex items-center justify-center relative overflow-hidden">
            <img src={imgUrl(doctor.image)} alt={doctor.name} className="relative w-full max-w-[240px] sm:max-w-[280px] md:w-64 aspect-[4/5] object-cover rounded-xl ring-1 ring-blue-900/20 border-4 border-white" />
          </div>
          <div className="md:w-2/3 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-900/[0.07] ring-1 ring-blue-900/15 text-blue-900 text-[11px] sm:text-xs font-bold tracking-widest uppercase rounded-full mb-4 w-fit"><span className="w-1.5 h-1.5 rounded-full bg-blue-900/60"></span>{doctor.department} Department</div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-2 break-words">{doctor.title} {doctor.name}</h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-light mb-1 sm:mb-2">{doctor.designation}</p>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-light mb-4 sm:mb-8">{doctor.type}</p>
            <div className="border-l-4 border-blue-900/60 pl-4 sm:pl-6 py-2 italic text-base sm:text-lg text-slate-700 leading-relaxed bg-white/50 rounded-r-xl pr-4">"{doctor.speech}"</div>
          </div>
        </div>
        {colleagues?.length > 0 && (
          <div className="mt-8 sm:mt-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Colleagues in {doctor.department}</h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {colleagues.map(c => (
                <Link key={c._id} to={`/doctor/${c._id}`} className="bg-blue-900/30 rounded-xl p-4 border border-blue-900/20 hover:bg-blue-900/40 transition-all">
                  <img src={imgUrl(c.image)} className="w-full h-48 sm:h-44 lg:h-48 object-cover rounded-lg mb-3" alt="" />
                  <p className="font-bold text-sm sm:text-base truncate">{c.title} {c.name}</p>
                  <p className="text-xs sm:text-sm text-slate-500 truncate">{c.designation}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}

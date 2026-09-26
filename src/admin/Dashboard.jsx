import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api.js';

export default function Dashboard() {
  const [s, setS] = useState(null);
  useEffect(() => { api.get('/stats').then(r => setS(r.data)).catch(() => {}); }, []);
  const cards = s ? [
    ['Doctors', s.doctors, '/admin/doctors', 'fa-user-md'],
    ['Departments', s.departments, '/admin/departments', 'fa-building'],
    ['Types', s.types, '/admin/types', 'fa-tags'],
    ['Titles', s.titles, '/admin/titles', 'fa-heading'],
    ['Committees', s.committees, '/admin/committees', 'fa-users'],
  ] : [];
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-slate-800">Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(([l, v, to, ic]) => (
          <Link key={l} to={to} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center text-xl"><i className={`fas ${ic}`}></i></div>
            <div><p className="text-3xl font-bold">{v}</p><p className="text-gray-500">{l}</p></div>
          </Link>
        ))}
      </div>
    </div>
  );
}

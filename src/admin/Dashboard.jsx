import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api.js';

export default function Dashboard() {
  const [s, setS] = useState(null);
  useEffect(() => { api.get('/stats').then(r => setS(r.data)).catch(() => {}); }, []);
  const cards = s ? [
    ['Doctors', s.doctors, '/admin/doctors', 'fa-user-md', 'bg-green-500'],
    ['Departments', s.departments, '/admin/departments', 'fa-building', 'bg-blue-500'],
    ['Types', s.types, '/admin/types', 'fa-tags', 'bg-purple-500'],
    ['Titles', s.titles, '/admin/titles', 'fa-heading', 'bg-orange-500'],
    ['Committees', s.committees, '/admin/committees', 'fa-users', 'bg-teal-500'],
  ] : [];
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(([l, v, to, ic, bg]) => (
          <Link key={l} to={to} className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md flex items-center gap-4">
            <div className={`w-14 h-14 rounded-xl text-white flex items-center justify-center text-xl ${bg}`}><i className={`fas ${ic}`}></i></div>
            <div><p className="text-3xl font-bold">{v}</p><p className="text-gray-500">{l}</p></div>
          </Link>
        ))}
      </div>
    </div>
  );
}

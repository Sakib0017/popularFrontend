import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api, { imgUrl } from '../api.js';

export default function Doctors() {
  const [list, setList] = useState([]);
  const load = () => api.get('/doctors?sort=-createdAt').then(r => setList(r.data));
  useEffect(() => { load(); }, []);
  const del = async (id) => {
    if (!confirm('Are you sure you want to remove this doctor?')) return;
    await api.delete(`/doctors/${id}`);
    load();
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-700">All Registered Specialists</h3>
        <Link to="/admin/doctors/new" className="bg-brand-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-brand-700 text-center text-sm sm:text-base shrink-0"><i className="fas fa-plus mr-2 text-sm"></i> Add New Doctor</Link>
      </div>
      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {list.map(d => (
          <div key={d._id} className="bg-white rounded-2xl shadow-sm border p-4 flex items-center gap-3">
            <img src={imgUrl(d.image)} className="h-14 w-14 rounded-full object-cover border shrink-0" alt="" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold truncate">{d.title} {d.name}</p>
              <p className="text-xs text-gray-500 truncate">{d.designation} • {d.department}</p>
              <p className="text-[11px] text-brand-600">ID: #{d._id.slice(-6)}</p>
            </div>
            <div className="flex flex-col gap-1 shrink-0">
              <Link to={`/admin/doctors/${d._id}`} aria-label="Edit" className="p-2 text-brand-600 hover:bg-brand-50 rounded-lg text-center"><i className="fas fa-edit"></i></Link>
              <button onClick={() => del(d._id)} aria-label="Delete" className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><i className="fas fa-trash-alt"></i></button>
            </div>
          </div>
        ))}
        {list.length === 0 && <div className="p-10 text-center text-gray-400 bg-white rounded-2xl border"><i className="fas fa-user-slash text-4xl mb-3"></i><p>No doctors found.</p></div>}
      </div>
      {/* Tablet/desktop table */}
      <div className="hidden md:block bg-white rounded-2xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[760px]">
            <thead className="bg-gray-50 border-b"><tr>
              {['Doctor','Designation','Department','Title','Type','Speech','Actions'].map(h => <th key={h} className="px-6 py-4 text-xs font-bold text-gray-500 uppercase text-center">{h}</th>)}
            </tr></thead>
            <tbody className="divide-y">
              {list.map(d => (
                <tr key={d._id} className="hover:bg-brand-50/60">
                  <td className="px-6 py-4"><div className="flex items-center gap-3"><img src={imgUrl(d.image)} className="h-12 w-12 rounded-full object-cover border" alt="" /><div><p className="text-sm font-bold">{d.title} {d.name}</p><p className="text-xs text-brand-600">ID: #{d._id.slice(-6)}</p></div></div></td>
                  <td className="px-6 py-4 text-sm">{d.designation}</td>
                  <td className="px-6 py-4 text-sm">{d.department}</td>
                  <td className="px-6 py-4 text-sm">{d.title}</td>
                  <td className="px-6 py-4 text-sm">{d.type}</td>
                  <td className="px-6 py-4 text-sm max-w-[200px] truncate">{d.speech}</td>
                  <td className="px-6 py-4 text-center"><div className="flex justify-center gap-2">
                    <Link to={`/admin/doctors/${d._id}`} className="p-2 text-brand-600 hover:bg-brand-50 rounded-lg"><i className="fas fa-edit"></i></Link>
                    <button onClick={() => del(d._id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><i className="fas fa-trash-alt"></i></button>
                  </div></td>
                </tr>
              ))}
            </tbody>
          </table>
          {list.length === 0 && <div className="p-10 text-center text-gray-400"><i className="fas fa-user-slash text-4xl mb-3"></i><p>No doctors found.</p></div>}
        </div>
      </div>
    </div>
  );
}

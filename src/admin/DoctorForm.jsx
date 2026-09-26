import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api.js';

// Replaces admin/add_doctors.php + edit_doctors.php
export default function DoctorForm() {
  const { id } = useParams();
  const isEdit = !!id;
  const nav = useNavigate();
  const [titles, setTitles] = useState([]);
  const [depts, setDepts] = useState([]);
  const [types, setTypes] = useState([]);
  const [form, setForm] = useState({ title: '', name: '', designation: '', department: '', type: '', speech: '' });
  const [file, setFile] = useState(null);

  useEffect(() => {
    api.get('/titles').then(r => setTitles(r.data)).catch(() => {});
    api.get('/departments').then(r => setDepts(r.data)).catch(() => {});
    api.get('/types').then(r => setTypes(r.data)).catch(() => {});
    if (isEdit) api.get(`/doctors/${id}`).then(r => {
      const d = r.data.doctor || r.data;
      setForm({ title: d.title || '', name: d.name || '', designation: d.designation || '', department: d.department || '', type: d.type || '', speech: d.speech || '' });
    });
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    if (file) fd.append('image', file);
    if (isEdit) await api.put(`/doctors/${id}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
    else await api.post('/doctors', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
    nav('/admin/doctors');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border overflow-hidden">
      <div className="bg-brand-50 border-b border-brand-200/60 px-5 sm:px-6 py-6 sm:py-8"><h2 className="text-xl sm:text-2xl font-bold text-slate-800">{isEdit ? 'Edit Doctor' : 'Add New Doctor'}</h2><p className="text-sm text-slate-500 mt-1">Minimal profile editor</p></div>
      <form onSubmit={submit} className="p-5 sm:p-6 md:p-10 space-y-5 sm:space-y-6">
        <div><label className="font-bold text-xs sm:text-sm uppercase">Profile Image</label><input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} className="mt-2 block text-sm max-w-full" /></div>
        <div className="grid sm:grid-cols-3 gap-4">
          <div><label className="font-bold text-sm uppercase">Title</label>
            <select value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required className="w-full px-4 py-3 border rounded-xl bg-white">
              <option value="">Select</option>{titles.map(t => <option key={t._id} value={t.name}>{t.name}</option>)}
            </select></div>
          <div className="md:col-span-2"><label className="font-bold text-sm uppercase">Full Name</label>
            <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required className="w-full px-4 py-3 border rounded-xl" /></div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div><label className="font-bold text-sm uppercase">Designation</label>
            <input value={form.designation} onChange={e => setForm({ ...form, designation: e.target.value })} required className="w-full px-4 py-3 border rounded-xl" /></div>
          <div><label className="font-bold text-sm uppercase">Department</label>
            <select value={form.department} onChange={e => setForm({ ...form, department: e.target.value })} required className="w-full px-4 py-3 border rounded-xl bg-white">
              <option value="">Select</option>{depts.map(d => <option key={d._id} value={d.name}>{d.name}</option>)}
            </select></div>
        </div>
        <div><label className="font-bold text-sm uppercase">Type</label>
          <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} required className="w-full px-4 py-3 border rounded-xl bg-white">
            <option value="">Select</option>{types.map(t => <option key={t._id} value={t.name}>{t.name}</option>)}
          </select></div>
        <div><label className="font-bold text-sm uppercase">Speech</label>
          <textarea value={form.speech} onChange={e => setForm({ ...form, speech: e.target.value })} rows="4" className="w-full px-4 py-3 border rounded-xl" /></div>
        <button className="w-full sm:w-auto px-8 sm:px-12 py-3.5 sm:py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-sm sm:text-base">Save Profile</button>
      </form>
    </div>
  );
}

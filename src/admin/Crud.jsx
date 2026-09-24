import { useEffect, useState } from 'react';
import api from '../api.js';

// Generic admin CRUD — replaces all_departments.php/department.php/edit_department.php,
// all_titles, all_types, all_committee + Committee.php/edit_committee.php etc.
export default function Crud({ endpoint, label, fields }) {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({});
  const [editId, setEditId] = useState(null);
  const load = () => api.get(endpoint).then(r => setList(r.data));
  useEffect(() => { load(); setForm({}); setEditId(null); }, [endpoint]);

  const submit = async (e) => {
    e.preventDefault();
    if (editId) await api.put(`${endpoint}/${editId}`, form);
    else await api.post(endpoint, form);
    setForm({}); setEditId(null); load();
  };
  return (
    <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6">
      <form onSubmit={submit} className="bg-white rounded-2xl border p-6 space-y-4 h-fit">
        <h3 className="font-bold">{editId ? `Edit ${label}` : `Add ${label}`}</h3>
        {fields.map(f => (
          <div key={f.key}>
            <label className="text-sm font-semibold">{f.label}</label>
            {f.textarea
              ? <textarea value={form[f.key] || ''} onChange={e => setForm({ ...form, [f.key]: e.target.value })} rows="3" className="w-full border rounded-xl px-4 py-2" />
              : <input value={form[f.key] || ''} onChange={e => setForm({ ...form, [f.key]: e.target.value })} required className="w-full border rounded-xl px-4 py-2" />}
          </div>
        ))}
        <button className="w-full bg-[#00984a] text-white font-bold py-2.5 rounded-xl">{editId ? 'Update' : 'Save'}</button>
        {editId && <button type="button" onClick={() => { setEditId(null); setForm({}); }} className="w-full text-sm text-gray-500">Cancel</button>}
      </form>
      <div className="lg:col-span-2 bg-white rounded-2xl border overflow-hidden h-fit">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b"><tr><th className="px-6 py-3 text-xs uppercase text-gray-500">Name / Details</th><th className="px-6 py-3 text-xs uppercase text-gray-500 text-right">Actions</th></tr></thead>
          <tbody className="divide-y">
            {list.map(r => (
              <tr key={r._id}>
                <td className="px-6 py-3 text-sm"><b>{r.name || r.title}</b>{r.chairman && <span className="text-gray-500"> — {r.chairman}</span>}</td>
                <td className="px-6 py-3 text-right">
                  <button onClick={() => { setEditId(r._id); const o = {}; fields.forEach(f => o[f.key] = r[f.key] || ''); setForm(o); }} className="p-2 text-blue-600"><i className="fas fa-edit"></i></button>
                  <button onClick={async () => { if (confirm('Delete?')) { await api.delete(`${endpoint}/${r._id}`); load(); } }} className="p-2 text-red-600"><i className="fas fa-trash-alt"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {list.length === 0 && <p className="p-8 text-center text-gray-400">No records.</p>}
      </div>
    </div>
  );
}

import { useState } from 'react';
import api from '../api.js';
import { useAuth } from './AuthContext.jsx';

export default function Profile() {
  const { user } = useAuth();
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const save = async (e) => {
    e.preventDefault();
    await api.put('/auth/profile', { email, ...(password ? { password } : {}) });
    setMsg('Profile updated');
  };
  return (
    <form onSubmit={save} className="max-w-md mx-auto bg-white rounded-2xl border p-8 space-y-4">
      <h3 className="font-bold text-lg">Account Settings</h3>
      {msg && <p className="text-brand-700 text-sm">{msg}</p>}
      <div><label className="text-sm font-semibold">Email</label><input value={email} onChange={e => setEmail(e.target.value)} className="w-full border rounded-xl px-4 py-2" /></div>
      <div><label className="text-sm font-semibold">New password (optional)</label><input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border rounded-xl px-4 py-2" /></div>
      <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-2.5 rounded-xl">Save</button>
    </form>
  );
}

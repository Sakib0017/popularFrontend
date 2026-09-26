import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx';

export default function Login() {
  const [email, setEmail] = useState('sakib@gmail.com');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const { login } = useAuth();
  const nav = useNavigate();
  const submit = async (e) => {
    e.preventDefault(); setErr('');
    try { await login(email, password); nav('/admin'); }
    catch (e) { setErr(e.response?.data?.message || 'Login failed'); }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200">
        <div className="bg-brand-50 p-8 text-center border-b border-brand-200/60">
          <div className="inline-flex h-16 w-16 bg-white rounded-full items-center justify-center text-brand-700 text-3xl font-bold mb-4 border border-brand-200">P</div>
          <h2 className="text-3xl font-bold text-slate-800 uppercase">Log In</h2>
          <p className="text-slate-500 text-sm mt-1">Medical College Management</p>
        </div>
        <form onSubmit={submit} className="p-8 space-y-6">
          {err && <div className="bg-red-50 text-red-600 p-3 rounded text-sm">{err}</div>}
          <div>
            <label className="block text-sm font-semibold mb-1">Email Address</label>
            <input value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-slate-50 outline-none focus:ring-2 focus:ring-brand-300" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••" className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-slate-50 outline-none focus:ring-2 focus:ring-brand-300" />
          </div>
          <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg">LOGIN</button>
          <Link to="/" className="block text-center text-sm text-gray-500">← Back to website</Link>
          <p className="text-xs text-gray-400 text-center">Default: sakib@gmail.com / 111111</p>
        </form>
      </div>
    </div>
  );
}

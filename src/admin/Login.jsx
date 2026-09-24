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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded shadow-xl overflow-hidden border border-gray-200">
        <div className="bg-[#00984a] p-8 text-center">
          <div className="inline-flex h-16 w-16 bg-white rounded-full items-center justify-center text-[#00984a] text-3xl font-bold mb-4">P</div>
          <h2 className="text-3xl font-bold text-white uppercase">Log In</h2>
          <p className="text-green-100 text-sm mt-1">Popular Medical College Management</p>
        </div>
        <form onSubmit={submit} className="p-8 space-y-6">
          {err && <div className="bg-red-50 text-red-600 p-3 rounded text-sm">{err}</div>}
          <div>
            <label className="block text-sm font-semibold mb-1">Email Address</label>
            <input value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-4 py-3 border rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#00984a]" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••" className="w-full px-4 py-3 border rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#00984a]" />
          </div>
          <button className="w-full bg-[#00984a] hover:bg-[#007a3b] text-white font-bold py-3 rounded-lg">LOGIN</button>
          <Link to="/" className="block text-center text-sm text-gray-500">← Back to website</Link>
          <p className="text-xs text-gray-400 text-center">Default: sakib@gmail.com / 111111</p>
        </form>
      </div>
    </div>
  );
}

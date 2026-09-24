import { createContext, useContext, useEffect, useState } from 'react';
import api from '../api.js';

const Ctx = createContext(null);
export const useAuth = () => useContext(Ctx);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = localStorage.getItem('pmc_token');
    if (!t) { setLoading(false); return; }
    api.get('/auth/me').then(r => setUser(r.data)).catch(() => localStorage.removeItem('pmc_token')).finally(() => setLoading(false));
  }, []);
  const login = async (email, password) => {
    const r = await api.post('/auth/login', { email, password });
    localStorage.setItem('pmc_token', r.data.token);
    setUser(r.data.user);
  };
  const logout = () => { localStorage.removeItem('pmc_token'); setUser(null); };
  return <Ctx.Provider value={{ user, login, logout, loading }}>{children}</Ctx.Provider>;
}

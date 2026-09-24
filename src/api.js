import axios from 'axios';

const base = import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL.replace(/\/$/, '')}/api` : '/api';
const api = axios.create({ baseURL: base });
api.interceptors.request.use((c) => {
  const t = localStorage.getItem('pmc_token');
  if (t) c.headers.Authorization = `Bearer ${t}`;
  return c;
});
export default api;
const API_ROOT = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace(/\/$/, '') : '';
export const imgUrl = (f) => {
  if (!f) return 'https://via.placeholder.com/300x400?text=PMC';
  if (f.startsWith('http')) return f;
  return API_ROOT ? `${API_ROOT}/uploads/${f}` : `/uploads/${f}`;
};

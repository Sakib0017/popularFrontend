import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx';

const links = [
  ['/admin', 'Dashboard', 'fa-chart-line'],
  ['/admin/doctors', 'Doctors', 'fa-user-md'],
  ['/admin/departments', 'Departments', 'fa-building'],
  ['/admin/types', 'Types', 'fa-tags'],
  ['/admin/titles', 'Titles', 'fa-heading'],
  ['/admin/committees', 'Committees', 'fa-users'],
  ['/admin/profile', 'My Profile', 'fa-user-circle'],
];

export default function Layout() {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  const loc = useLocation();
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <aside className="w-64 bg-[#00984a] text-white flex-col shadow-xl hidden md:flex shrink-0">
        <div className="p-6 text-2xl font-bold border-b border-green-700"><i className="fas fa-hospital-user mr-2"></i>PMC</div>
        <nav className="flex-grow p-4 space-y-1">
          {links.map(([to, l, ic]) => (
            <Link key={to} to={to} className={`flex items-center py-3 px-4 rounded-lg transition ${loc.pathname === to ? 'bg-green-700' : 'hover:bg-green-700'}`}>
              <i className={`fas ${ic} mr-3 w-5`}></i>{l}
            </Link>
          ))}
          <Link to="/" className="flex items-center py-3 px-4 rounded-lg hover:bg-green-700"><i className="fas fa-globe mr-3 w-5"></i>View Site</Link>
        </nav>
        <div className="p-4 border-t border-green-700">
          <button onClick={() => { logout(); nav('/admin/login'); }} className="flex items-center py-3 px-4 text-red-200 hover:text-white w-full"><i className="fas fa-sign-out-alt mr-3"></i> Logout</button>
        </div>
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b p-4 flex justify-between items-center px-4 md:px-8">
          <h2 className="font-semibold text-gray-800">PMC Admin</h2>
          <div className="flex items-center gap-3">
            <p className="text-sm font-medium">{user?.email}</p>
            <img className="h-9 w-9 rounded-full" src={`https://ui-avatars.com/api/?name=${user?.email}&background=00984a&color=fff`} alt="" />
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50"><Outlet /></main>
      </div>
    </div>
  );
}

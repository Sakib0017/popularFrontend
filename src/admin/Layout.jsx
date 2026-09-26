import { useState } from 'react';
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const navList = (onGo) => (
    <>
      {links.map(([to, l, ic]) => (
        <Link key={to} to={to} onClick={onGo} className={`flex items-center py-3 px-4 rounded-lg transition ${loc.pathname === to ? 'bg-brand-100 text-brand-700' : 'text-slate-600 hover:bg-slate-100'}`}>
          <i className={`fas ${ic} mr-3 w-5`}></i>{l}
        </Link>
      ))}
      <Link to="/" onClick={onGo} className="flex items-center py-3 px-4 rounded-lg text-slate-600 hover:bg-slate-100"><i className="fas fa-globe mr-3 w-5"></i>View Site</Link>
    </>
  );

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Desktop sidebar — tablet & desktop only */}
      <aside className="w-64 bg-white text-slate-700 flex-col border-r border-slate-200 hidden md:flex shrink-0 min-h-screen sticky top-0 h-screen">
        <div className="p-6 text-2xl font-bold border-b border-slate-100 text-slate-800"><i className="fas fa-hospital-user mr-2 text-brand-600"></i>PMC</div>
        <nav className="flex-grow p-4 space-y-1">
          {navList(undefined)}
        </nav>
        <div className="p-4 border-t border-slate-100">
          <button onClick={() => { logout(); nav('/admin/login'); }} className="flex items-center py-3 px-4 text-slate-500 hover:text-brand-700 w-full"><i className="fas fa-sign-out-alt mr-3"></i> Logout</button>
        </div>
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)}></div>
          <aside className="absolute left-0 top-0 bottom-0 w-72 max-w-[85vw] bg-white text-slate-700 flex flex-col shadow-2xl overflow-y-auto">
            <div className="p-5 text-xl font-bold border-b border-slate-100 flex items-center justify-between text-slate-800">
              <span><i className="fas fa-hospital-user mr-2 text-brand-600"></i>PMC</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2 hover:bg-slate-100 rounded-lg"><i className="fas fa-times"></i></button>
            </div>
            <nav className="flex-grow p-4 space-y-1">
              {navList(() => setMobileOpen(false))}
            </nav>
            <div className="p-4 border-t border-slate-100">
              <button onClick={() => { logout(); nav('/admin/login'); }} className="flex items-center py-3 px-4 text-slate-500 hover:text-brand-700 w-full"><i className="fas fa-sign-out-alt mr-3"></i> Logout</button>
            </div>
          </aside>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        <header className="bg-white border-b p-3 sm:p-4 flex justify-between items-center gap-3 px-4 md:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-2 min-w-0">
            <button onClick={() => setMobileOpen(true)} aria-label="Open admin menu" className="md:hidden p-2 -ml-1 text-gray-700 hover:bg-gray-100 rounded-lg shrink-0">
              <i className="fas fa-bars text-lg"></i>
            </button>
            <h2 className="font-semibold text-gray-800 text-sm sm:text-base truncate">PMC Admin</h2>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <p className="text-xs sm:text-sm font-medium truncate max-w-[140px] sm:max-w-none">{user?.email}</p>
            <img className="h-8 w-8 sm:h-9 sm:w-9 rounded-full shrink-0" src={`https://ui-avatars.com/api/?name=${user?.email}&background=EAF4F1&color=0F766E`} alt="" />
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-8 bg-slate-50"><Outlet /></main>
      </div>
    </div>
  );
}

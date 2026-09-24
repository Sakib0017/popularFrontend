import { Link } from 'react-router-dom';
// Converted from footer.php — preserved 100%
export default function Footer() {
  return (
    <footer className="bg-[#003B46] text-slate-300 pt-16 pb-0 border-t border-teal-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-12 border-b border-teal-900/60">
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block bg-white p-3 rounded-xl shadow-md transition-transform hover:scale-[1.02]">
              <img src="/assets/PMCH.gif" alt=" Medical College Logo" className="h-20 w-auto mx-auto md:mx-0" />
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold tracking-[0.15em] uppercase text-slate-200">
            <Link to="/course" className="hover:text-emerald-400 transition-colors">Course</Link>
            <span className="text-teal-800/80 hidden sm:inline">|</span>
            <Link to="/about" className="hover:text-emerald-400 transition-colors">About</Link>
            <span className="text-teal-800/80 hidden sm:inline">|</span>
            <Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
            <span className="text-teal-800/80 hidden sm:inline">|</span>
            <Link to="/contact" className="hover:text-emerald-400 transition-colors">Notices</Link>
          </nav>
          <div className="flex justify-center md:justify-end gap-4">
            <a href="#" className="w-9 h-9 rounded-lg bg-teal-950/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-all shadow-inner" aria-label="Facebook"><i className="fab fa-facebook-f text-sm"></i></a>
            <a href="mailto:info@pmch.edu" className="w-9 h-9 rounded-lg bg-teal-950/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-500 transition-all shadow-inner" aria-label="Mail"><i className="fas fa-envelope text-sm"></i></a>
            <a href="tel:+880123456789" className="w-9 h-9 rounded-lg bg-teal-950/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-500 transition-all shadow-inner" aria-label="Call"><i className="fas fa-phone-alt text-sm"></i></a>
          </div>
        </div>
      </div>
      <div className="bg-slate-950/40 text-center text-xs tracking-wider font-medium text-slate-400 border-t border-teal-950/20 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© 2026  Medical College. All rights reserved.</p>
          <p className="text-[11px] text-slate-500">Designed & Maintained by <span className="text-emerald-500 font-semibold">PMC IT Node</span> • MERN build</p>
        </div>
      </div>
    </footer>
  );
}

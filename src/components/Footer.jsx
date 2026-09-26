import { Link } from 'react-router-dom';

// Footer sitemap — mirrors every Navbar submenu (no code lost, logo removed).
const ADMISSION = [
  ['/course', 'Course Structure'],
  ['/eligiblity', 'Eligibility'],
  ['/rules', 'College Rules'],
  ['/book', 'Book List'],
  ['/fees', 'College Fees'],
];
const DEPARTMENTS = [
  ['anatomy', 'Anatomy'], ['physiology', 'Physiology'], ['biochymistry', 'Biochemistry'],
  ['medicine', 'Community Medicine'], ['forensic', 'Forensic Medicine'], ['pathology', 'Pathology'],
  ['microbiology', 'Microbiology'], ['pharmacology', 'Pharmacology'], ['allied', 'Medicine & Allied'],
  ['paediatrics', 'Paediatrics'], ['surgery', 'Surgery & Allied'], ['orthopaedics', 'Orthopaedics'],
  ['ophthalmology', 'Ophthalmology'], ['gynae', 'Gynae & Obst.'],
  ['otorhinolaryngology', 'Otorhinolaryngology'], ['anaesthesiology', 'Anaesthesiology'],
];
const ADMINISTRATION = [
  ['/about', 'About Us'], ['/chairman', 'Chairman Governing Body'], ['/principal', 'Desk of the Principal'],
  ['/vice', 'Vice Principal'], ['/quality', 'Quality Assurance'], ['/award', 'Academic Awards'],
  ['/govrn', 'Governing Bodies'], ['/land', 'Land Information'], ['/info', 'Basic Information'],
  ['/committees', 'Committees'], ['/contact', 'Notice Board'],
];
const FACILITIES = [
  ['/library', 'College Library'], ['/it', 'IT Corner'], ['/assist', 'Student Assistance Center'],
  ['/resource', 'Student Resource Center'], ['/guardians', 'Liaison with Guardians'],
  ['/legends', 'Meet the Legends'], ['/center', 'Medical Center'], ['/confer', 'Conference Room'],
  ['/cafe', 'College Cafeteria'], ['/common', 'College Common Room'], ['/hostal', 'College Hostel'],
  ['/contact', 'Contact Us'],
];

function ColTitle({ children }) {
  return (
    <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-800">
      {children}
      <span className="block h-0.5 w-8 bg-brand-600 rounded-full mt-2"></span>
    </h4>
  );
}

const linkCls = 'block py-1 text-[13px] text-slate-500 hover:text-brand-600 hover:pl-1 transition-all';

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <footer className="bg-white text-slate-600 pt-0 pb-0 border-t border-slate-200">
      <div className="h-1 w-full bg-gradient-to-r from-brand-200 via-blue-900/60 to-brand-200"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        {/* Quick-action cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <a href="http://dgme.teletalk.com.bd/mbbs/nongov/applicantscopy.php" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-blue-900/30 border border-blue-900/20 rounded-2xl p-5 hover:shadow-md transition-all hover:-translate-y-0.5">
            <span className="w-11 h-11 shrink-0 rounded-xl bg-white flex items-center justify-center text-brand-700 ring-1 ring-blue-900/15"><i className="fas fa-graduation-cap"></i></span>
            <span>
              <span className="block text-sm font-bold text-slate-800">Admission Portal ↗</span>
              <span className="block text-xs text-slate-500">Apply via DGME Teletalk</span>
            </span>
          </a>
          <a href="tel:10606" className="flex items-center gap-4 bg-blue-900/30 border border-blue-900/20 rounded-2xl p-5 hover:shadow-md transition-all hover:-translate-y-0.5">
            <span className="w-11 h-11 shrink-0 rounded-xl bg-white flex items-center justify-center text-brand-700 ring-1 ring-blue-900/15"><i className="fas fa-phone-alt"></i></span>
            <span>
              <span className="block text-sm font-bold text-slate-800">Hotline: 10606</span>
              <span className="block text-xs text-slate-500">24/7 emergency & info desk</span>
            </span>
          </a>
          <Link to="/contact" className="flex items-center gap-4 bg-blue-900/30 border border-blue-900/20 rounded-2xl p-5 hover:shadow-md transition-all hover:-translate-y-0.5">
            <span className="w-11 h-11 shrink-0 rounded-xl bg-white flex items-center justify-center text-brand-700 ring-1 ring-blue-900/15"><i className="fas fa-envelope"></i></span>
            <span>
              <span className="block text-sm font-bold text-slate-800">Contact Us</span>
              <span className="block text-xs text-slate-500">info@pmch.edu • Notices</span>
            </span>
          </Link>
        </div>

        {/* Sitemap — every navbar submenu */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-3">
            <h4 className="text-sm font-black tracking-tight text-slate-800">MEDICAL COLLEGE</h4>
            <p className="text-[11px] font-semibold text-brand-600 tracking-widest uppercase mt-1">Producing Doctors With a Difference</p>
            <p className="text-[13px] text-slate-500 leading-relaxed mt-4 max-w-xs">
              A prestigious concern of the group — state-of-the-art total health care
              provider preparing students for the MBBS course since 2010.
            </p>
            <ul className="mt-4 space-y-2 text-[13px] text-slate-500">
              <li><a href="tel:10606" className="hover:text-brand-600 transition-colors"><i className="fas fa-phone-alt mr-2 text-brand-600"></i>Hotline: 10606</a></li>
              <li><a href="mailto:info@pmch.edu" className="hover:text-brand-600 transition-colors"><i className="fas fa-envelope mr-2 text-brand-600"></i>info@pmch.edu</a></li>
              <li><span><i className="fas fa-map-marker-alt mr-2 text-brand-600"></i>Dhaka, Bangladesh</span></li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-100 ring-1 ring-blue-900/10 flex items-center justify-center text-slate-500 hover:text-white hover:bg-brand-600 transition-all" aria-label="Facebook"><i className="fab fa-facebook-f text-sm"></i></a>
              <a href="mailto:info@pmch.edu" className="w-9 h-9 rounded-lg bg-slate-100 ring-1 ring-blue-900/10 flex items-center justify-center text-slate-500 hover:text-white hover:bg-brand-600 transition-all" aria-label="Mail"><i className="fas fa-envelope text-sm"></i></a>
              <a href="tel:10606" className="w-9 h-9 rounded-lg bg-slate-100 ring-1 ring-blue-900/10 flex items-center justify-center text-slate-500 hover:text-white hover:bg-brand-600 transition-all" aria-label="Call"><i className="fas fa-phone-alt text-sm"></i></a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ColTitle>Admission</ColTitle>
            <nav className="mt-3">
              {ADMISSION.map(([to, label]) => <Link key={to} to={to} className={linkCls}>{label}</Link>)}
            </nav>
          </div>

          <div className="lg:col-span-3">
            <ColTitle>Departments</ColTitle>
            <nav className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
              {DEPARTMENTS.map(([s, label]) => <Link key={s} to={`/dept/${s}`} className={linkCls}>{label}</Link>)}
            </nav>
            <Link to="/faculty" className="inline-block mt-2 text-[13px] font-bold text-brand-600 hover:text-brand-700">Academic Faculty →</Link>
          </div>

          <div className="lg:col-span-2">
            <ColTitle>Administration</ColTitle>
            <nav className="mt-3">
              {ADMINISTRATION.map(([to, label]) => <Link key={to} to={to} className={linkCls}>{label}</Link>)}
            </nav>
          </div>

          <div className="lg:col-span-2">
            <ColTitle>Facilities</ColTitle>
            <nav className="mt-3">
              {FACILITIES.map(([to, label]) => <Link key={to} to={to} className={linkCls}>{label}</Link>)}
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-brand-50/80 border-t border-blue-900/10 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs tracking-wider font-medium text-slate-500">
          <p>© 2026 Medical College. All rights reserved.</p>
          <p className="text-[11px] text-slate-400">Designed & Maintained by <span className="text-brand-600 font-semibold">PMC IT Node</span> • MERN build</p>
          <button onClick={toTop} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white ring-1 ring-blue-900/15 text-slate-500 hover:text-brand-700 hover:ring-brand-300 text-[11px] font-bold uppercase tracking-wider transition-all" aria-label="Back to top">
            Top <i className="fas fa-arrow-up text-[10px]"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}

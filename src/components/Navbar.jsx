import { useState } from 'react';
import { Link } from 'react-router-dom';

// Converted from navbar.php — all links preserved, .php -> react routes
// Responsive: desktop menu ≥1024px (lg), hamburger drawer below that
// (covers both mobile <640px and tablet 640–1023px).
const DEPARTMENTS = [
  ['anatomy', 'Anatomy'], ['physiology', 'Physiology'], ['biochymistry', 'Biochemistry'],
  ['medicine', 'Community Medicine'], ['forensic', 'Forensic Medicine'], ['pathology', 'Pathology'],
  ['microbiology', 'Microbiology'], ['pharmacology', 'Pharmacology'], ['allied', 'Medicine & Allied'],
  ['paediatrics', 'Paediatrics'], ['surgery', 'Surgery & Allied'], ['orthopaedics', 'Orthopaedics'],
  ['ophthalmology', 'Ophthalmology'], ['gynae', 'Gynae & Obst.'],
  ['otorhinolaryngology', 'Otorhinolaryngology'], ['anaesthesiology', 'Anaesthesiology'],
];
const ADMISSION = [
  ['/course', 'Course Structure'], ['/eligiblity', 'Eligibility'],
  ['/rules', 'College Rules'], ['/book', 'Book List'], ['/fees', 'College Fees'],
];
const ADMINISTRATION = [
  ['/about', 'About Us'], ['/chairman', 'Chairman Governing Body'], ['/principal', 'Desk of the Principal'],
  ['/vice', 'Vice Principal'], ['/quality', 'Quality Assurance'], ['/award', 'Academic Awards'],
  ['/govrn', 'Governing Bodies'], ['/land', 'Land Information'], ['/info', 'Basic Information'],
];
const FACILITIES = [
  ['/library', 'College Library'], ['/it', 'IT Corner'], ['/assist', 'Student Assistance Center'],
  ['/resource', 'Student Resource Center'], ['/guardians', 'Liaison with Guardians'],
  ['/legends', 'Meet the Legends'], ['/center', 'Medical Center'], ['/confer', 'College Conference Room'],
  ['/cafe', 'College Cafeteria'], ['/common', 'College Common Room'], ['/hostal', 'College Hostel'],
  ['/contact', 'Contact Us'],
];

function MobileSection({ title, links, open, onToggle, close }) {
  return (
    <div className="border-b border-slate-100">
      <button onClick={onToggle} className="w-full flex items-center justify-between py-3 text-left font-bold">
        <span>{title}</span>
        <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-3 pl-2 flex flex-col normal-case tracking-normal font-semibold text-slate-600 text-[13px]">
          {links.map(([to, label]) => (
            <Link key={to} to={to} onClick={close} className="py-2 border-b border-slate-50 last:border-0 hover:text-brand-600">{label}</Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState('');
  const close = () => { setOpen(false); setExpanded(''); };
  const toggle = (k) => setExpanded((p) => (p === k ? '' : k));

  return (
    <>
      <div className="bg-blue-900/60 text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/20 relative z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3.5 text-white/80">
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook"><i className="fab fa-facebook-f text-xs"></i></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter"><i className="fab fa-twitter text-xs"></i></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="YouTube"><i className="fab fa-youtube text-xs"></i></a>
            </div>
          </div>
          <a href="tel:10606" className="sm:hidden text-white font-bold tracking-wider text-[11px]">HOTLINE: 10606</a>
        </div>
      </div>
      <nav className="bg-white shadow-md shadow-blue-900/5 sticky top-0 z-[100] border-b border-blue-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24 gap-3">
            <div className="flex-shrink-0 min-w-0">
              <Link to="/" className="flex items-center gap-2 sm:gap-3" onClick={close}>
                <img src="" alt="Popular Medical College logo" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                <span className="hidden min-[420px]:block leading-tight">
                  <span className="block text-[13px] sm:text-sm font-black text-slate-800 tracking-tight">MEDICAL COLLEGE</span>
                  <span className="block text-[10px] sm:text-[11px] font-semibold text-brand-600 tracking-widest uppercase">Producing Doctors With a Difference</span>
                </span>
              </Link>
            </div>
            {/* Desktop menu — lg and up (tablet portrait uses drawer) */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-5 text-[13px] font-extrabold tracking-tight text-slate-700">
              <div className="h-24 flex items-center"><Link to="/" className="hover:text-brand-600 transition-colors">HOME</Link></div>
              <div className="group h-24 flex items-center relative">
                <button className="hover:text-brand-600 transition-colors flex items-center gap-0.5 font-extrabold">ADMISSION <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <div className="absolute left-0 top-full w-[280px] shadow-blue-900/10 ring-1 ring-blue-900/10 border-t-4 border-brand-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[110] bg-white rounded-b-md">
                  <div className="p-2 flex flex-col text-[12px] font-semibold text-slate-700 normal-case">
                    <Link to="/course" className="p-2 hover:bg-brand-50 hover:text-brand-600 rounded">Course Structure</Link>
                    <Link to="/eligiblity" className="p-2 hover:bg-brand-50 hover:text-brand-600 rounded">Eligibility</Link>
                    <Link to="/rules" className="p-2 hover:bg-brand-50 hover:text-brand-600 rounded font-bold text-brand-600">COLLEGE RULES</Link>
                    <Link to="/book" className="p-2 hover:bg-brand-50 hover:text-brand-600 rounded">Book List</Link>
                    <Link to="/fees" className="p-2 hover:bg-brand-50 hover:text-brand-600 rounded">College Fees</Link>
                    <a href="http://dgme.teletalk.com.bd/mbbs/nongov/applicantscopy.php" target="_blank" rel="noreferrer" className="p-2 bg-brand-100 hover:bg-brand-200 text-brand-700 font-bold text-center rounded text-[11px] uppercase tracking-wider border border-brand-300/50">Admission Portal ↗</a>
                  </div>
                </div>
              </div>
              <div className="group h-24 flex items-center relative">
                <button className="hover:text-brand-600 transition-colors flex items-center gap-0.5 font-extrabold">DEPARTMENTS <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <div className="absolute left-0 top-full w-[290px] shadow-blue-900/10 ring-1 ring-blue-900/10 border-t-4 border-brand-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[110] bg-white rounded-b-md">
                  <div className="p-2 flex flex-col max-h-[60vh] overflow-y-auto text-[12px] font-semibold text-slate-700 normal-case">
                    {DEPARTMENTS.map(([s, l]) => <Link key={s} to={`/dept/${s}`} className="p-2 hover:bg-brand-50 hover:text-brand-600 rounded">{l}</Link>)}
                    <Link to="/faculty" className="p-2 bg-brand-100 hover:bg-brand-200 text-brand-700 font-bold text-center rounded block text-[11px] uppercase border border-brand-300/50">Academic Faculty</Link>
                  </div>
                </div>
              </div>
              <div className="group h-24 flex items-center relative">
                <button className="hover:text-brand-600 transition-colors flex items-center gap-0.5 font-extrabold">ADMINISTRATION <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <div className="absolute left-0 top-full w-[270px] shadow-blue-900/10 ring-1 ring-blue-900/10 border-t-4 border-brand-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[110] bg-white rounded-b-md">
                  <div className="p-2 flex flex-col text-[12px] font-semibold text-slate-700 normal-case">
                    {ADMINISTRATION.map(([s, l]) => <Link key={s} to={s} className="p-2 hover:bg-brand-50 hover:text-brand-600 rounded">{l}</Link>)}
                  </div>
                </div>
              </div>
              <div className="group h-24 flex items-center relative">
                <button className="hover:text-brand-600 transition-colors flex items-center gap-0.5 font-extrabold">FACILITIES <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <div className="absolute left-0 top-full w-[270px] shadow-blue-900/10 ring-1 ring-blue-900/10 border-t-4 border-brand-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[110] bg-white rounded-b-md">
                  <div className="p-2 flex flex-col max-h-[60vh] overflow-y-auto text-[12px] font-semibold text-slate-700 normal-case">
                    {FACILITIES.map(([s, l]) => <Link key={s} to={s} className="p-2 hover:bg-brand-50 hover:text-brand-600 rounded">{l}</Link>)}
                  </div>
                </div>
              </div>
              <div className="h-24 flex items-center"><Link to="/committees" className="hover:text-brand-600">COMMITTEES</Link></div>
              <div className="h-24 flex items-center"><Link to="/contact" className="hover:text-brand-600">NOTICE</Link></div>
            </div>
            <div className="hidden md:flex items-center h-full pl-4 z-20">
              <a href="tel:10606" className="bg-brand-100 text-brand-700 flex flex-col justify-center items-center px-4 lg:px-5 h-[90px] lg:h-[110px] rounded-b-2xl border-x border-b border-brand-300/60 hover:bg-brand-200 -translate-y-[18px] lg:-translate-y-[25px]"><span className="text-[10px] lg:text-[11px] font-bold tracking-widest opacity-80 uppercase">Hotline</span><span className="text-lg lg:text-xl font-black mt-0.5">10606</span></a>
            </div>
            <div className="lg:hidden flex items-center">
              <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="text-slate-700 p-2 hover:bg-slate-50 rounded-md">
                {open
                  ? <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  : <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>}
              </button>
            </div>
          </div>
        </div>
        {open && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-inner max-h-[75vh] overflow-y-auto">
            <div className="px-5 sm:px-8 py-4 text-[12px] font-bold tracking-wider uppercase text-slate-700">
              <Link to="/" onClick={close} className="block py-3 border-b border-slate-100">Home</Link>
              <MobileSection title="Admission" links={ADMISSION} open={expanded === 'adm'} onToggle={() => toggle('adm')} close={close} />
              <MobileSection title="Departments" links={DEPARTMENTS.map(([s, l]) => [`/dept/${s}`, l])} open={expanded === 'dept'} onToggle={() => toggle('dept')} close={close} />
              <MobileSection title="Administration" links={ADMINISTRATION} open={expanded === 'admin'} onToggle={() => toggle('admin')} close={close} />
              <MobileSection title="Facilities" links={FACILITIES} open={expanded === 'fac'} onToggle={() => toggle('fac')} close={close} />
              <Link to="/committees" onClick={close} className="block py-3 border-b border-slate-100">Committees</Link>
              <Link to="/contact" onClick={close} className="block py-3 border-b border-slate-100">Notice / Contact</Link>
              <Link to="/faculty" onClick={close} className="block py-3 border-b border-slate-100">Academic Faculty</Link>
              <a href="tel:10606" className="bg-brand-600 text-white text-center py-3 rounded-lg font-bold text-sm mt-4 mb-2 block">CALL HOTLINE: 10606</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

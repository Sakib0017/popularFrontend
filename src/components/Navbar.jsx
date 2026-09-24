import { useState } from 'react';
import { Link } from 'react-router-dom';

// Converted from navbar.php — all links preserved, .php -> react routes
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-[#003B46] text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-teal-950/20 relative z-30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3.5 text-slate-300">
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook"><i className="fab fa-facebook-f text-xs"></i></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter"><i className="fab fa-twitter text-xs"></i></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="YouTube"><i className="fab fa-youtube text-xs"></i></a>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-md sticky top-0 z-[100] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
          <div className="flex items-center justify-between h-24">
            <div className="flex-shrink-0">
              <Link to="/" className="block">
               
              </Link>
            </div>
            <div className="hidden xl:flex items-center space-x-4 lg:space-x-5 text-[13px] font-extrabold tracking-tight text-[#003B46]">
              <div className="h-24 flex items-center"><Link to="/" className="hover:text-emerald-600 transition-colors">HOME</Link></div>
              <div className="group h-24 flex items-center relative">
                <button className="hover:text-emerald-600 transition-colors flex items-center gap-0.5 font-extrabold">ADMISSION <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <div className="absolute left-0 top-full w-[280px] shadow-2xl border-t-4 border-emerald-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[110] bg-white rounded-b-md">
                  <div className="p-2 flex flex-col text-[12px] font-semibold text-slate-700 normal-case">
                    <Link to="/course" className="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded">Course Structure</Link>
                    <Link to="/eligiblity" className="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded">Eligibility</Link>
                    <Link to="/rules" className="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded font-bold text-emerald-600">COLLEGE RULES</Link>
                    <Link to="/book" className="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded">Book List</Link>
                    <Link to="/fees" className="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded">College Fees</Link>
                    <a href="http://dgme.teletalk.com.bd/mbbs/nongov/applicantscopy.php" target="_blank" rel="noreferrer" className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center rounded text-[11px] uppercase tracking-wider">Admission Portal ↗</a>
                  </div>
                </div>
              </div>
              <div className="group h-24 flex items-center relative">
                <button className="hover:text-emerald-600 transition-colors flex items-center gap-0.5 font-extrabold">DEPARTMENTS <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <div className="absolute left-0 top-full w-[290px] shadow-2xl border-t-4 border-emerald-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[110] bg-white rounded-b-md">
                  <div className="p-2 flex flex-col max-h-[60vh] overflow-y-auto text-[12px] font-semibold text-slate-700 normal-case">
                    {[
                      ['anatomy','Anatomy'],['physiology','Physiology'],['biochymistry','Biochemistry'],['medicine','Community Medicine'],['forensic','Forensic Medicine'],['pathology','Pathology'],['microbiology','Microbiology'],['pharmacology','Pharmacology'],['allied','Medicine & Allied'],['paediatrics','Paediatrics'],['surgery','Surgery & Allied'],['orthopaedics','Orthopaedics'],['ophthalmology','Ophthalmology'],['gynae','Gynae & Obst.'],['otorhinolaryngology','Otorhinolaryngology'],['anaesthesiology','Anaesthesiology'],
                    ].map(([s,l]) => <Link key={s} to={`/dept/${s}`} className="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded">{l}</Link>)}
                    <Link to="/faculty" className="p-2 bg-[#003B46] hover:bg-[#07575B] text-white font-bold text-center rounded block text-[11px] uppercase">Academic Faculty</Link>
                  </div>
                </div>
              </div>
              <div className="group h-24 flex items-center relative">
                <button className="hover:text-emerald-600 transition-colors flex items-center gap-0.5 font-extrabold">ADMINISTRATION <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <div className="absolute left-0 top-full w-[270px] shadow-2xl border-t-4 border-emerald-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[110] bg-white rounded-b-md">
                  <div className="p-2 flex flex-col text-[12px] font-semibold text-slate-700 normal-case">
                    {[['about','About Us'],['chairman','Chairman Governing Body'],['principal','Desk of the Principal'],['vice','Vice Principal'],['quality','Quality Assurance'],['award','Academic Awards'],['govrn','Governing Bodies'],['land','Land Information'],['info','Basic Information']].map(([s,l]) => <Link key={s} to={`/${s}`} className="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded">{l}</Link>)}
                  </div>
                </div>
              </div>
              <div className="group h-24 flex items-center relative">
                <button className="hover:text-emerald-600 transition-colors flex items-center gap-0.5 font-extrabold">FACILITIES <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <div className="absolute left-0 top-full w-[270px] shadow-2xl border-t-4 border-emerald-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[110] bg-white rounded-b-md">
                  <div className="p-2 flex flex-col max-h-[60vh] overflow-y-auto text-[12px] font-semibold text-slate-700 normal-case">
                    {[['library','College Library'],['it','IT Corner'],['assist','Student Assistance Center'],['resource','Student Resource Center'],['guardians','Liaison with Guardians'],['legends','Meet the Legends'],['center','Medical Center'],['confer','College Conference Room'],['cafe','College Cafeteria'],['common','College Common Room'],['hostal','College Hostel'],['contact','Contact US']].map(([s,l]) => <Link key={s} to={`/${s}`} className="p-2 hover:bg-slate-50 hover:text-emerald-600 rounded">{l}</Link>)}
                  </div>
                </div>
              </div>
              <div className="h-24 flex items-center"><Link to="/committees" className="hover:text-emerald-600">COMMITTEES</Link></div>
              <div className="h-24 flex items-center"><Link to="/contact" className="hover:text-emerald-600">NOTICE</Link></div>
            </div>
            <div className="hidden md:flex items-center h-full pl-4 z-20">
              <a href="tel:10606" className="bg-[#007A78] text-white flex flex-col justify-center items-center px-5 h-[110px] rounded-b-2xl shadow border-x border-b border-white/10 hover:bg-[#006664] -translate-y-[25px]"><span className="text-[11px] font-bold tracking-widest opacity-90 uppercase">Hotline</span><span className="text-xl font-black mt-0.5">10606</span></a>
            </div>
            <div className="xl:hidden flex items-center">
              <button onClick={() => setOpen(!open)} className="text-[#003B46] p-2 hover:bg-slate-50 rounded-md"><svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg></button>
            </div>
          </div>
        </div>
        {open && (
          <div className="xl:hidden bg-white border-t border-slate-100 px-6 py-4 shadow-inner">
            <div className="flex flex-col space-y-3 text-[12px] font-bold tracking-wider uppercase text-[#003B46]">
              <Link to="/" onClick={() => setOpen(false)} className="py-2 border-b border-slate-50">Home</Link>
              <Link to="/course" onClick={() => setOpen(false)} className="py-2 border-b border-slate-50">Admission</Link>
              <Link to="/faculty" onClick={() => setOpen(false)} className="py-2 border-b border-slate-50">Departments</Link>
              <Link to="/about" onClick={() => setOpen(false)} className="py-2 border-b border-slate-50">Administration</Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="py-2 border-b border-slate-50">Contact</Link>
              <a href="tel:10606" className="bg-[#007A78] text-white text-center py-2.5 rounded font-bold text-xs mt-2 block">CALL: 10606</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

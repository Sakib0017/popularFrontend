import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

// Converted from index.php — all sections preserved
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img src="/assets/healthcare-bg.jpg" alt="Healthcare background" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-white/60"></div>
      </div>
      <div className="relative z-10 w-full">
        <section className="relative h-[65vh] min-h-[550px] w-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/assets/healthcare-hero.jpg" alt="Healthcare professionals at  Medical College" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent"></div>
          </div>
          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-12">
            <div className="max-w-2xl p-8 md:p-10 rounded-2xl space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl leading-tight tracking-tight text-white md:text-5xl">Academic Faculty</h1>
                <div className="h-1 w-20 bg-emerald-900 rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-slate-50 md:text-xl font-light">
                 Medical College can boast of a faculty which certainly is well reputed and respected nationally and internationally for their devotion and professionalism. It is also important to point out that many of the faculty members are actively involved with postgraduate teaching, learning and examination programs in addition to their undergraduate responsibilities.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#" className="inline-flex items-center justify-center rounded-full bg-emerald-900 px-8 py-3.5 text-base font-semibold text-white hover:bg-[#007d3c] shadow-lg">Apply Now</a>
                <a href="#" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-md hover:bg-white hover:text-slate-950">Read More</a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-transparent py-24 px-6 md:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight"> Medical College</h2>
                <div className="text-slate-900 leading-relaxed text-lg max-w-xl space-y-4 font-normal">
                  <p> Group is the only State of the Art total health care provider of the country in private sector.  Medical College is a prestigious concern of  Group. The college was established in 2010. Though fairly new among the procession of medical colleges of the country,  Medical College has already attained an enviable status for its outstanding care in preparing the students for their MBBS course.</p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="relative w-full max-w-2xl">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-950 aspect-video ring-1 ring-black/5">
                    <video className="w-full h-full object-cover" controls poster="https://www.pmch-bd.org/images/PMC/slider/sld1.jpg">
                      <source src="https://www.pmch-bd.org/images/Video1.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto flex items-center justify-center px-6">
          <div className="flex-grow border-t border-slate-900"></div>
          <span className="mx-6 text-slate-900 text-[24px] font-bold">Management Desk</span>
          <div className="flex-grow border-t border-slate-900"></div>
        </div>

        <section className="w-full py-24 bg-transparent">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {[
                { t: "From Vice-Principal's Desk", img: '/assets/Vice.jpg', d: 'He obtained his MBBS in 2002, MRCS in 2010, and FCPS in 2011. He also obtained Fellowship and Diploma on laparoscopy surgery in 2012. He worked in teaching posts in different medical colleges for about 12 years.' },
                { t: "From Principal's Desk", img: '/assets/principal.jpg', d: 'It is my immense pleasure and privilege to welcome the new students to be admitted into this prestigious Medical College. With a team of fulltime highly experienced and dedicated teachers,  Medical College has been established as one of the top most Medical Colleges in private sector of Bangladesh.', head: true },
                { t: "From Chairman's Desk", img: '/assets/Chairman.jpg', d: 'The best gift of the parent to their sons & daughters is perfect education. In our country it is a great concern of every parent to find out perfect education for their sons and daughters after passing Higher Secondary Certificate Examination.' },
              ].map((c, i) => (
                <div key={i} className={`flex flex-col backdrop-blur-md rounded-2xl p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 ${c.head ? 'shadow-md border-t-4 border-t-emerald-900' : ''}`}>
                  <h3 className="text-xl font-bold text-slate-800 text-center mb-6">{c.t}</h3>
                  <div className="mx-auto mb-6"><img src={c.img} alt={c.t} className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md" /></div>
                  <p className="text-slate-900 leading-relaxed text-base text-center font-normal flex-grow">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-transparent">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center justify-center mb-16">
              <div className="flex-grow border-t border-slate-900"></div>
              <span className="mx-6 text-slate-900 text-[24px] font-bold">Campus Highlights</span>
              <div className="flex-grow border-t border-slate-900"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[['blog1.jpg','Excellence','Academic Award'],['blog2.jpg','Creative','Photography Club'],['blog3.jpg','Campus','Life At PMC'],['blog4.jpg','Healthcare','Modern Hospital']].map(([img,tag,title],i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl bg-slate-950 shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all">
                  <div className="aspect-[4/5] w-full overflow-hidden"><img src={`/assets/${img}`} className="h-full w-full object-cover opacity-90" alt={title} /></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full"><span className="mb-2 inline-block rounded-full bg-emerald-900 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">{tag}</span><h3 className="text-2xl font-bold leading-tight text-white">{title}</h3></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-transparent">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center justify-center mb-8"><div className="flex-grow border-t border-slate-900"></div><span className="mx-6 text-slate-900 text-[24px] font-bold">Important Notices</span><div className="flex-grow border-t border-slate-900"></div></div>
            <div className="backdrop-blur-md rounded-2xl shadow-sm overflow-hidden divide-y">
              {[['Notice (DU Registration Fee)','267.18 KB','Aug 31, 2025'],['Shok Barta','1.02 MB','Jul 29, 2025'],['Notice for Foreign Students','201.79 KB','Jul 15, 2025']].map(([t,s,d],i) => (
                <div key={i} className="grid grid-cols-12 items-center px-6 py-4 hover:bg-emerald-900/5">
                  <div className="col-span-8 md:col-span-7 font-semibold text-slate-800">{t}</div>
                  <div className="hidden md:block md:col-span-2 text-center text-sm text-slate-500 italic">{s}</div>
                  <div className="col-span-4 md:col-span-3 text-right"><span className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-900">{d}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

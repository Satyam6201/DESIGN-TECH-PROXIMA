import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import {
  ArrowDown,
  Award,
  Users,
  ShieldCheck
} from 'lucide-react';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] transition-colors duration-500 selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <h2 className="text-[30vw] font-black tracking-tighter text-white">
            ARCH
          </h2>
        </div>

        <div className="max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.6em] block mb-6">
              Established 2024 • Motihari
            </span>

            <h1 className="text-[14vw] md:text-[11vw] font-black tracking-tighter leading-[0.75] text-white mb-8">
              DESIGN <br />
              <span className="italic text-blue-600">DESIGN TECH</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            India’s trusted 3D visualization & interior design studio.
            We transform flats, homes, and offices into
            <span className="text-white"> functional living spaces.</span>
          </motion.p>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 opacity-40"
          >
            <span className="text-[10px] uppercase tracking-widest font-black">
              Scroll Down
            </span>
            <ArrowDown size={16} />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="py-32 px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto space-y-24">

          {/* STORY */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600">
                About Us
              </h3>

              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                Indian Homes.<br />
                <span className="italic text-blue-500">Smart Design.</span>
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed">
                Design Tech is a Motihari-based architecture & interior studio
                focused on modern Indian living. We design spaces that are
                beautiful, practical, and budget-friendly.
              </p>

              <p className="text-zinc-500 leading-relaxed">
                From 2BHK flats and bedrooms to kitchens, offices,
                and showrooms — our designs follow Indian lifestyle,
                Vastu principles, and real-world usability.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <p className="text-3xl font-black text-white">100+</p>
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    Projects
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">10+</p>
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    Cities
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">5+</p>
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    Years
                  </p>
                </div>
              </div>
            </motion.div>

            {/* IMAGE GRID */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                className="rounded-3xl aspect-[4/5] object-cover"
                alt="Indian Flat Interior"
              />
              <img
                src="https://images.unsplash.com/photo-1615874959474-d609969a20ed"
                className="rounded-3xl aspect-square object-cover"
                alt="Bedroom Interior"
              />
              <img
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea"
                className="rounded-3xl aspect-square object-cover"
                alt="Living Room"
              />
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba"
                className="rounded-3xl aspect-[4/5] object-cover"
                alt="Kitchen Interior"
              />
            </motion.div>
          </div>

          {/* PROCESS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600">
              Our Process
            </h3>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consultation' },
                { step: '02', title: '3D Design' },
                { step: '03', title: 'Execution' },
                { step: '04', title: 'Final Delivery' },
              ].map(item => (
                <div
                  key={item.step}
                  className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-blue-600 transition"
                >
                  <p className="text-blue-600 font-black text-xl mb-4">
                    {item.step}
                  </p>
                  <p className="text-white font-bold">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <main id="gallery">
        <div className="pt-20 px-6 text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-600 mb-4">
            Portfolio
          </h2>
          <h3 className="text-4xl font-black tracking-tighter text-white">
            Visual Masterpieces
          </h3>
        </div>
        <Gallery />
      </main>

      <Contact />

      {/* ================= BACK TO TOP ================= */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 text-white rounded-2xl
        flex items-center justify-center shadow-2xl hover:-translate-y-2 transition z-50"
      >
        <ArrowDown size={20} className="rotate-180" />
      </button>
    </div>
  );
}

export default App;

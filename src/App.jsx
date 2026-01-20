import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { ArrowDown, Award, Users, ShieldCheck } from 'lucide-react';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] transition-colors duration-500 selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Animated Background Text (Watermark) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
          <h2 className="text-[30vw] font-black tracking-tighter">ARCH</h2>
        </div>

        <div className="max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.6em] mb-6 block">
              Established 2024 • Motihari
            </span>
            <h1 className="text-[14vw] md:text-[11vw] font-black tracking-tighter leading-[0.75] mb-8 text-white">
              DESIGN <br /> <span className="text-blue-600 italic">DESIGN TECH</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed mb-12"
          >
            India's premier 3D visualization and architectural firm. We turn complex blueprints into <span className="text-white">breathtaking realities.</span>
          </motion.p>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 opacity-30"
          >
            <span className="text-[10px] font-black uppercase tracking-widest">Discover Gallery</span>
            <ArrowDown size={16} />
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT SECTION (The Story) --- */}
      <section id="about" className="py-32 px-6 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Stats/Image Visual */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" 
                  alt="Architecture Design" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-10 -right-10 bg-blue-600 p-10 rounded-[2rem] shadow-2xl">
                <p className="text-5xl font-black text-white">100+</p>
                <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">Projects Delivered</p>
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <div className="space-y-8">
              <h3 className="text-sm font-black text-blue-600 uppercase tracking-[0.4em]">Our Philosophy</h3>
              <h2 className="text-5xl font-black tracking-tighter text-white leading-tight">
                Where Engineering <br /> Meets <span className="italic">Pure Artistry.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Design Tech is not just a construction company; we are creators of spaces that inspire. Based in Motihari, we specialize in high-end 3D visualization, turnkey solutions, and luxury interior design. From iconic commercial showrooms like Lakme & Hero to residential masterpieces like Surendra Villa, we redefine the skyline.
              </p>

              {/* Feature Icons */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-zinc-800 rounded-xl text-blue-500"><Award size={20}/></div>
                  <span className="text-xs font-black uppercase text-zinc-300">Award Winning</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-zinc-800 rounded-xl text-blue-500"><Users size={20}/></div>
                  <span className="text-xs font-black uppercase text-zinc-300">Expert Team</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-zinc-800 rounded-xl text-blue-500"><ShieldCheck size={20}/></div>
                  <span className="text-xs font-black uppercase text-zinc-300">Vastu Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <main id="gallery">
        <div className="pt-20 px-10">
          <h2 className="text-sm font-black text-center uppercase tracking-[0.5em] text-zinc-600 mb-4">Portfolio</h2>
          <h3 className="text-4xl font-black text-center tracking-tighter text-white">Visual Masterpieces</h3>
        </div>
        <Gallery />
      </main>

      <Contact />

      {/* --- BACK TO TOP --- */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-2xl z-50 hover:-translate-y-2 transition-all duration-300 group"
      >
        <ArrowDown size={20} className="rotate-180 group-hover:scale-110" />
      </button>
    </div>
  );
}

export default App;
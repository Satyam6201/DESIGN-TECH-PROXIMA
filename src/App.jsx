import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import {
  ArrowDown,
  Building2,
  Gem,
  ShieldCheck,
  Zap,
  Sparkles,
  ChevronRight,
  Star
} from 'lucide-react';

function App() {
  const containerRef = useRef(null);
  
  // Smooth Progress Bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.scrollTo({ top: 0 });
  }, []);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#020202] text-white selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* 1. TOP PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 origin-left z-[1000] shadow-[0_0_15px_rgba(37,99,235,0.5)]" style={{ scaleX }} />

      <Navbar />

      {/* 2. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Abstract Background Orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full" />
        
        <div className="max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
            >
              <Sparkles size={14} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">
                Crafting Spaces in Motihari since 2019
              </span>
            </motion.div>

            <h1 className="text-[15vw] md:text-[11vw] font-[1000] tracking-tighter leading-[0.8] mb-12">
              <span className="block text-white">DESIGN</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 italic bg-[length:200%_auto] animate-gradient-flow">TECH</span>
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-4">
              <p className="text-zinc-500 text-sm md:text-lg max-w-xl leading-relaxed font-medium">
                Turning architectural blueprints into <span className="text-white">photorealistic masterpieces</span>. We blend luxury aesthetics with local Vastu wisdom.
              </p>
            </div>

            <motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5 }}
  className="mt-12 flex flex-wrap justify-center gap-4"
>
  {/* START A PROJECT -> Goes to Contact Section */}
  <button 
    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
    className="px-8 py-4 bg-blue-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 shadow-[0_15px_40px_rgba(37,99,235,0.3)] cursor-pointer"
  >
    Start a Project
  </button>

  {/* VIEW GALLERY -> Goes to Gallery Section */}
  <button 
    onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
    className="px-8 py-4 border border-white/10 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all cursor-pointer"
  >
    View Gallery
  </button>
</motion.div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20"
          >
            <span className="text-[9px] uppercase tracking-[0.5em] font-black">Scroll Down</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* 3. ABOUT SECTION - LUXURY REDEFINED */}
      <section id="about" className="py-32 md:py-56 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h3 className="text-blue-500 font-black text-xs uppercase tracking-[0.4em]">Our Legacy</h3>
                <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter">
                  5+ YEARS <br />
                  <span className="opacity-30 italic text-5xl md:text-7xl">OF PERFECTION.</span>
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Design Tech is not just a studio; it's a hub where <span className="text-white">innovation meets heritage</span>. With 5+ years of hands-on experience and 100+ projects, we’ve mastered the art of 3D Elevation and Interior styling tailored for the modern Indian lifestyle.
                </p>
              </div>

              {/* STATS STRIP */}
              <div className="flex flex-wrap gap-12 py-10 border-y border-white/5">
                <div>
                  <h4 className="text-5xl font-black text-white">100<span className="text-blue-600">+</span></h4>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600 mt-2">Projects Delivered</p>
                </div>
                <div>
                  <h4 className="text-5xl font-black text-white">5<span className="text-blue-600">★</span></h4>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600 mt-2">Client Reviews</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Vastu Science", icon: <ShieldCheck size={20} className="text-blue-500"/> },
                  { label: "High-End 3D", icon: <Zap size={20} className="text-blue-500"/> },
                  { label: "Premium Finish", icon: <Gem size={20} className="text-blue-500"/> },
                  { label: "Expert Support", icon: <Star size={20} className="text-blue-500"/> }
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/50 transition-all">
                    {f.icon}
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">{f.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* MASONRY IMAGE PREVIEW */}
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/5 blur-3xl rounded-full" />
              <div className="grid grid-cols-2 gap-4 relative">
                <motion.div 
                   whileHover={{ y: -10 }}
                   className="space-y-4 pt-16"
                >
                  <div className="rounded-[2.5rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 aspect-[4/5]">
                    <img src="/assets/3D Elevation Design/img74.jpg" className="w-full h-full object-cover" alt="Architectural" />
                  </div>
                  <div className="rounded-3xl overflow-hidden h-40 border border-white/10">
                    <img src="/assets/Bedroom/new2.jpg" className="w-full h-full object-cover" alt="Interior" />
                  </div>
                </motion.div>
                <motion.div 
                   whileHover={{ y: 10 }}
                   className="space-y-4"
                >
                  <div className="rounded-3xl overflow-hidden h-40 border border-white/10">
                    <img src="/assets/Kitchen/new_3.jpeg" className="w-full h-full object-cover" alt="Kitchen" />
                  </div>
                  <div className="rounded-[2.5rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 aspect-[4/5]">
                    <img src="/assets/3D Elevation Design/new_7.jpeg" className="w-full h-full object-cover" alt="Elevation" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALLERY REVEAL */}
      <section id="gallery" className="bg-[#050505] py-20">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="space-y-4">
              <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.5em]">The Visual Archives</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter">PORTFOLIO.</h2>
            </div>
            <p className="text-zinc-500 max-w-sm text-sm font-medium leading-relaxed">
              Explore our curation of modular kitchens, master bedrooms, and modern house elevations designed for excellence.
            </p>
          </motion.div>
        </div>
        <Gallery />
      </section>

      <Contact />

      {/* 5. BACK TO TOP BUTTON */}
      <AnimatePresence>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, backgroundColor: '#fff', color: '#000' }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-10 right-10 w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-2xl z-[100] transition-colors"
        >
          <ArrowDown size={24} className="rotate-180" />
        </motion.button>
      </AnimatePresence>

      {/* MINI FOOTER */}
      <footer className="py-12 text-center bg-black border-t border-white/5">
          <p className="text-[9px] font-black uppercase tracking-[1.5em] text-zinc-800">Designed for Future • Design Tech India</p>
      </footer>

      {/* GLOBAL STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow {
          animation: gradient-flow 6s ease infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}} />
    </div>
  );
}

export default App;
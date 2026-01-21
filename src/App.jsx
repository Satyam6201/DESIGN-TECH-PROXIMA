import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import {
  ArrowDown,
  Award,
  Users,
  ShieldCheck,
  Zap,
  MousePointer2,
  Building2,
  Gem
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
    // Basic smooth scroll for Safari/Old Browsers
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] text-white selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* 1. TOP PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[1000]" style={{ scaleX }} />

      <Navbar />

      {/* 2. HERO SECTION - WITH PARALLAX & GLOW */}
      <section className="relative min-h-[100vh] flex items-center justify-center px-6 overflow-hidden pt-20">
        {/* Animated Background Blur */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
        
        <div className="max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              initial={{ letterSpacing: "0.2em", opacity: 0 }}
              animate={{ letterSpacing: "0.6em", opacity: 1 }}
              className="text-blue-500 font-black text-[10px] md:text-xs uppercase block mb-8"
            >
              Visionary Architecture • Motihari
            </motion.span>

            <h1 className="text-[16vw] md:text-[12vw] font-[1000] tracking-[ -0.05em] leading-[0.8] mb-10 group">
              DESIGN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-400 to-blue-600 bg-[length:200%_auto] animate-gradient-flow italic">TECH</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <p className="text-zinc-400 text-sm md:text-lg max-w-xl leading-relaxed font-medium">
              We don't just build structures; we sculpt <span className="text-white">emotions</span> into 3D reality. Bihar's leading edge in premium <span className="border-b border-blue-600">interior visualization.</span>
            </p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="mt-16 opacity-30 flex flex-col items-center gap-3"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-blue-600 to-transparent" />
            <span className="text-[9px] uppercase tracking-[0.4em] font-black">Explore Studio</span>
          </motion.div>
        </div>
      </section>

      {/* 3. EXPERIENCE / ABOUT SECTION */}
      <section id="about" className="py-24 md:py-40 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
            
            {/* STICKY CONTENT */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20">
                <Zap size={14} className="text-blue-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">The Design Tech Philosophy</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-white">
                WE CRAFT <br />
                <span className="italic opacity-40 italic">LEGACIES.</span>
              </h2>

              <div className="space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed font-medium">
                <p>
                  At <span className="text-white">Design Tech</span>, we understand that an Indian home is a sanctuary. Whether it's a compact 2BHK in Motihari or a luxury villa, our mission is to blend Vastu science with high-end global aesthetics.
                </p>
                <p className="text-zinc-500">
                  Our portfolio spans 100+ successfully delivered dreams, focusing on <span className="text-blue-400">Precision</span>, <span className="text-blue-400">Durability</span>, and <span className="text-blue-400">Modernity</span>.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                {[
                  { label: "Vastu Integrated", icon: <ShieldCheck size={20} /> },
                  { label: "3D Photorealism", icon: <Zap size={20} /> },
                  { label: "Turnkey Services", icon: <Building2 size={20} /> },
                  { label: "Luxury Finishes", icon: <Gem size={20} /> }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 group cursor-default">
                    <div className="p-3 bg-zinc-900 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {feature.icon}
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors">{feature.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* INTERACTIVE IMAGE CARDS */}
            <div className="grid grid-cols-2 gap-4 h-fit">
              <motion.div 
                whileHover={{ y: -10 }}
                className="space-y-4 pt-12"
              >
                <div className="rounded-[2rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="/assets/3D Elevation Design/img74.jpg" alt="Work" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-[2rem] overflow-hidden border border-white/10 h-40">
                  <img src="/assets/Bedroom/new2.jpg" alt="Work" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: 10 }}
                className="space-y-4"
              >
                <div className="rounded-[2rem] overflow-hidden border border-white/10 h-40">
                  <img src="/assets/Kitchen/new_3.jpeg" alt="Work" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-[2rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="/assets/3D Elevation Design/new_7.jpeg" alt="Work" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALLERY REVEAL */}
      <section id="gallery" className="bg-[#080808] py-20">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Visual Archives</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">THE <span className="text-blue-600">COLLECTION.</span></h2>
            </div>
            <p className="text-zinc-500 max-w-xs text-sm font-medium">A curated selection of over 100+ living spaces, kitchens, and architectural elevations.</p>
          </motion.div>
        </div>
        <Gallery />
      </section>

      <Contact />

      {/* 5. BACK TO TOP - MAGNETIC EFFECT */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-blue-600 text-white rounded-[1.5rem] flex items-center justify-center shadow-[0_20px_40px_rgba(37,99,235,0.3)] z-[100] transition-colors hover:bg-white hover:text-blue-600"
      >
        <ArrowDown size={24} className="rotate-180" />
      </motion.button>

      {/* FOOTER MINI */}
      <div className="py-10 text-center border-t border-white/5 bg-black">
         <p className="text-[10px] font-black uppercase tracking-[1em] text-zinc-800">Designed for Excellence</p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow {
          animation: gradient-flow 6s ease infinite;
        }
      `}} />
    </div>
  );
}

export default App;
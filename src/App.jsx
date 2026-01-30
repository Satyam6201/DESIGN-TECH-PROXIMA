import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  useInView
} from "framer-motion";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import {
  ArrowDown,
  Building2,
  Gem,
  Zap,
  Star,
  CheckCircle2,
  Compass,
  ChevronRight,
  ShieldCheck,
  MousePointer2,
  Lightbulb
} from "lucide-react";

function App() {
  const containerRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Hero Parallax
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -150]);
  const heroRotate = useTransform(scrollYProgress, [0, 0.2], [0, -2]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#050505] text-[#e5e7eb] overflow-x-hidden selection:bg-[#5b7cfa] selection:text-white"
    >
      {/* PREMIUM PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#5b7cfa] via-indigo-500 to-cyan-400 origin-left z-[999]"
        style={{ scaleX }}
      />

      <Navbar />

      {/* ================= HERO SECTION (RE-DESIGNED) ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-[#5b7cfa]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-600/5 blur-[150px] rounded-full" />
        
        <motion.div
          style={{ y: heroY, rotateX: heroRotate }}
          className="max-w-7xl mx-auto text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-xl">
              <SparklesIcon className="w-4 h-4 text-[#5b7cfa] mr-2" />
              <span className="text-[9px] tracking-[0.5em] font-black uppercase text-zinc-400">
                Next-Gen 3D Visualization
              </span>
            </div>

            <h1 className="text-[20vw] sm:text-[16vw] md:text-[13vw] font-[1000] tracking-tighter leading-[0.8] text-white">
              DESIGN
              <span className="block italic text-transparent bg-clip-text bg-gradient-to-b from-[#5b7cfa] to-indigo-600">
                TECH
              </span>
            </h1>

            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
               <p className="max-w-md text-left text-sm md:text-base text-zinc-500 font-medium leading-relaxed border-l border-white/10 pl-6">
                Redefining the horizon of <span className="text-white">Motihari</span> through premium architectural storytelling and immersive 3D technology.
              </p>
              
              <div className="flex gap-4">
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="group px-8 py-5 rounded-2xl bg-white text-black font-black uppercase text-[10px] tracking-widest hover:bg-[#5b7cfa] hover:text-white transition-all duration-500 flex items-center shadow-2xl shadow-white/5"
                >
                  Start Project <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                </button>
                <button
                   onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-8 py-5 rounded-2xl border border-white/10 bg-white/5 text-white font-black uppercase text-[10px] tracking-widest hover:bg-white/10 transition-all"
                >
                  Explore Work
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <span className="text-[8px] uppercase tracking-[0.4em] font-bold">Scroll</span>
          <MousePointer2 size={16} />
        </motion.div>
      </section>

      {/* ================= ABOUT SECTION (EXPANDED) ================= */}
      <section id="about" className="py-40 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            
            <div className="space-y-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-5xl md:text-8xl font-black leading-none tracking-tighter">
                  WE BUILD <br />
                  <span className="text-zinc-700 italic">LEGACIES.</span>
                </h2>
                <div className="w-24 h-2 bg-[#5b7cfa]" />
                <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                  Design Tech is not just a studio; it's an engineering-first visualization hub. We bridge the gap between a client's dream and a contractor's blueprint.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Precision", desc: "Every pixel matches the site's dimensions.", icon: Compass },
                  { title: "Vastu Focus", desc: "Traditional wisdom meets modern 3D.", icon: ShieldCheck },
                  { title: "Smart Lighting", desc: "Realistic sun-path analysis for interiors.", icon: Lightbulb },
                  { title: "Fast Delivery", desc: "Execution-ready files within deadlines.", icon: Zap },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-[#5b7cfa]/30 transition-all"
                  >
                    <item.icon className="text-[#5b7cfa] mb-6" size={28} />
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="sticky top-24">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative rounded-[3rem] overflow-hidden group shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <img
                  src="/assets/3D Elevation Design/img74.jpg"
                  alt="Architecture"
                  className="w-full h-[700px] object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute bottom-10 left-10 z-20">
                  <p className="text-[#5b7cfa] font-black uppercase tracking-widest text-xs mb-2">Featured Project</p>
                  <h3 className="text-3xl font-black">THE MODERN MANOR</h3>
                </div>
              </motion.div>
              
              {/* Stats Strip */}
              <div className="flex justify-between mt-10 px-4">
                <div>
                  <h4 className="text-4xl font-black">100+</h4>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest mt-1">Projects Completed</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black">05+</h4>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest mt-1">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black">99%</h4>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest mt-1">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section id="gallery" className="py-20">
        <div className="max-w-[1800px] mx-auto px-6 mb-16 flex justify-between items-end">
          <div>
            <span className="text-[#5b7cfa] font-black text-[10px] uppercase tracking-[0.5em] block mb-4">Our Portfolio</span>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-white">SELECTED <br/><span className="italic opacity-20">WORKS.</span></h2>
          </div>
        </div>
        <Gallery />
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <Contact />

      {/* ================= BACK TO TOP ================= */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-10 right-10 z-[500] w-16 h-16 rounded-2xl bg-[#5b7cfa] text-black flex items-center justify-center shadow-2xl shadow-[#5b7cfa]/20"
          >
            <ArrowDown className="rotate-180" size={24} strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="py-20 text-center bg-[#030303] border-t border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <h2 className="text-[10vw] font-black text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none uppercase">
          Design Tech India
        </h2>
        <div className="relative z-10">
          <p className="text-[10px] tracking-[0.8em] uppercase text-zinc-600 font-black mb-4">
            Engineering Reality • Visualizing Dreams
          </p>
          <p className="text-zinc-800 text-[9px] font-bold">© 2026 ALL RIGHTS RESERVED</p>
        </div>
      </footer>

      {/* GLOBAL OVERRIDES */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; cursor: default; }
        html { scroll-behavior: smooth; }
        .font-black { font-weight: 900; }
      `}} />
    </div>
  );
}

// Simple Sparkle Icon Component
function SparklesIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

export default App;
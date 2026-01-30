import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence
} from "framer-motion";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import {
  ArrowDown,
  Building2,
  Gem,
  Zap,
  Sparkles,
  Star,
  CheckCircle2,
  Compass,
  ChevronRight
} from "lucide-react";

function App() {
  const containerRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -160]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    window.scrollTo({ top: 0 });

    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionReveal = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#020202] text-white overflow-x-hidden selection:bg-blue-600"
    >
      {/* TOP PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 origin-left z-[999]"
        style={{ scaleX }}
      />

      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />

        <motion.div
          style={{ y: heroY }}
          className="max-w-7xl mx-auto text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <Sparkles size={14} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">
                Pioneering Architecture since 2019
              </span>
            </div>

            <h1 className="text-[18vw] sm:text-[14vw] md:text-[11vw] font-black tracking-tighter leading-[0.8]">
              <span className="block">DESIGN</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 italic animate-gradient-flow">
                TECH
              </span>
            </h1>

            <p className="mt-8 text-zinc-400 max-w-xl mx-auto text-sm sm:text-lg leading-relaxed">
              Turning architectural dreams into{" "}
              <span className="text-white font-bold">digital reality</span>.
              Premium 3D visualizations for luxury Indian homes.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-10 py-5 bg-blue-600 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 shadow-xl flex items-center gap-3 justify-center"
              >
                Start Project <ChevronRight size={16} />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("gallery")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-10 py-5 border border-white/10 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                View Portfolio
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <motion.section
        id="about"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-32 md:py-56 px-6 border-t border-white/5 bg-[#030303]"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-6xl md:text-8xl font-black leading-[0.9]">
              CRAFTING <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                Excellence
              </span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed">
              5+ years of experience delivering vastu-compliant, high-end 3D
              elevations and interior solutions with precision and speed.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "100+ Projects", icon: Building2 },
                { title: "5★ Rating", icon: Star },
                { title: "Photorealism", icon: Zap },
                { title: "On-Time Delivery", icon: CheckCircle2 }
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md"
                >
                  <item.icon className="text-blue-500 mb-4" />
                  <h4 className="font-black text-sm uppercase tracking-widest">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full" />
            <img
              src="/assets/3D Elevation Design/img74.jpg"
              className="relative z-10 rounded-[3rem] shadow-2xl border border-white/10"
              alt="About"
            />
          </div>
        </div>
      </motion.section>

      {/* ================= GALLERY ================= */}
      <section id="gallery" className="py-32 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter">
            WORKS.
          </h2>
        </div>
        <Gallery />
      </section>

      <Contact />

      {/* ================= BACK TO TOP ================= */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-8 right-8 w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl z-50"
          >
            <ArrowDown className="rotate-180" />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="py-16 text-center border-t border-white/5 bg-[#010101]">
        <p className="text-[10px] font-black uppercase tracking-[0.8em] text-zinc-700">
          Design Tech India • Future Ready
        </p>
      </footer>

      {/* GLOBAL STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow {
          background-size: 200% auto;
          animation: gradient-flow 6s ease infinite;
        }
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}} />
    </div>
  );
}

export default App;

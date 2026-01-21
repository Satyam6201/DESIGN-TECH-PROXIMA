import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 py-4 ${
        scrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* --- LOGO SECTION --- */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-600 p-0.5 group-hover:scale-110 transition-transform duration-500">
            <img 
              src="/assets/1764092824368.jpg.jpeg" 
              alt="Design Tech Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-amber-600 leading-none">
              DESIGN <span className="text-blue-600">TECH</span>
            </span>
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-500 mt-1">
              Architecture & 3D
            </span>
          </div>
        </a>

        {/* --- NAVIGATION LINKS --- */}
        <div className="hidden md:flex items-center gap-10">
          {['About', 'Gallery', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-[10px] font-black uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          {/* CTA Button */}
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Start Project
          </a>
        </div>

        {/* --- MOBILE TOGGLE (Simple Dots) --- */}
        <div className="md:hidden flex flex-col gap-1 cursor-pointer">
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-4 h-0.5 bg-blue-600 ml-auto" />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
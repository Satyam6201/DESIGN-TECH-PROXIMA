import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Linkedin, ArrowUpRight, Globe } from 'lucide-react';

const Contact = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/Gandhi+Complex,+Motihari";

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <footer id="contact" className="relative py-32 px-6 bg-[#050505] text-white overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -mr-72 -mt-72" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Side: Call to Action */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
                LET'S BUILD <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400 italic">
                  THE FUTURE.
                </span>
              </h2>
              <p className="text-zinc-500 max-w-md text-lg font-medium leading-relaxed">
                Transforming visions into structural reality with India's premier 3D visualization studio.
              </p>
            </motion.div>

            {/* Interactive Contact Links */}
            <motion.div variants={fadeUp} className="space-y-6">
              <a href={`tel:+916204203526`} className="group flex items-center gap-6 w-fit">
                <div className="w-14 h-14 rounded-2xl border border-zinc-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                  <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Call Us</p>
                  <p className="text-xl font-bold">+91 62042 03526</p>
                </div>
              </a>

              <a href="mailto:info@designtech.com" className="group flex items-center gap-6 w-fit">
                <div className="w-14 h-14 rounded-2xl border border-zinc-800 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-500">
                  <Mail size={20} className="group-hover:-translate-y-1 transition-transform" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Email Us</p>
                  <p className="text-xl font-bold">info@designtech.com</p>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Location Card & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            {/* Interactive Map Card */}
            <motion.a 
              href={googleMapsUrl}
              target="_blank"
              whileHover={{ y: -10 }}
              className="block p-10 rounded-[3rem] bg-zinc-900/50 border border-zinc-800 backdrop-blur-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
                <Globe size={80} className="text-blue-600 animate-spin-slow" />
              </div>
              
              <MapPin className="text-blue-500 mb-6" size={32} />
              <h4 className="text-2xl font-bold mb-4">Studio Headquarters</h4>
              <p className="text-zinc-400 leading-relaxed mb-8 max-w-xs font-medium">
                Gandhi Complex, Station Road, Professor Colony, Belbanwa, Motihari, Bihar 845401
              </p>
              
              <div className="flex items-center gap-2 text-blue-500 font-black text-xs uppercase tracking-widest">
                Navigate on Maps <ArrowUpRight size={14} />
              </div>
            </motion.a>

            {/* Simple Social Grid */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-zinc-900 gap-8">
              <div className="flex gap-10">
                <a href="#" className="group flex items-center gap-2">
                  <Instagram size={18} className="text-zinc-500 group-hover:text-pink-500 transition-colors" />
                  <span className="font-bold uppercase text-[11px] tracking-widest group-hover:underline">Instagram</span>
                </a>
                <a href="#" className="group flex items-center gap-2">
                  <Linkedin size={18} className="text-zinc-500 group-hover:text-blue-500 transition-colors" />
                  <span className="font-bold uppercase text-[11px] tracking-widest group-hover:underline">LinkedIn</span>
                </a>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-700">
                © {new Date().getFullYear()} DESIGN TECH
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
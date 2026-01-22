import { motion } from "framer-motion";
import { 
  FaWhatsapp, 
  FaYoutube, 
  FaFacebook, 
  FaInstagram, 
  FaLinkedinIn 
} from "react-icons/fa";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  Globe, 
  Sparkles,
  Navigation2
} from "lucide-react";

const Contact = () => {
  const googleMapsUrl = "https://www.google.com/maps/place/Design+Tech+Interior/@26.6624472,84.9106511,784m/data=!3m2!1e3!4b1!4m6!3m5!1s0x399335ed7018f667:0xd4300d8ec224ea01!8m2!3d26.6624472!4d84.9106511!16s%2Fg%2F11myszs81d?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D";
  const whatsappNumber = "916204203526";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello Design Tech, I'm interested in your architectural services.`;
  
  const socialLinks = [
    { name: "Instagram", icon: <FaInstagram size={22} />, url: "https://www.instagram.com/design_tech_1?igsh=MXVlYXV3MzhwaDB3aw==", color: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]", shadow: "hover:shadow-pink-500/20" },
    { name: "Facebook", icon: <FaFacebook size={22} />, url: "https://www.facebook.com/share/16zKNuhm49/", color: "hover:bg-[#1877F2]", shadow: "hover:shadow-blue-500/20" },
    { name: "YouTube", icon: <FaYoutube size={22} />, url: "https://youtube.com/@homedesignsolutions01?si=2La3v-hCXzALyPOq", color: "hover:bg-[#FF0000]", shadow: "hover:shadow-red-500/20" },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <footer id="contact" className="relative bg-[#020202] text-white overflow-hidden border-t border-white/5 pt-20">
      
      {/* --- DYNAMIC BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* LEFT: CONTENT & CONNECT */}
          <div className="space-y-16">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Sparkles size={12} className="animate-spin-slow" />
                <span className="text-[10px] font-black uppercase tracking-widest">Available for Projects</span>
              </div>
              <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white">
                LET'S <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700 italic">BUILD.</span>
              </h2>
              <p className="text-zinc-500 text-lg md:text-xl max-w-md font-medium leading-relaxed">
                Transforming Motihari's skyline, one <span className="text-white">masterpiece</span> at a time. Reach out today.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {/* PREMIUM WHATSAPP BUTTON */}
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noreferrer" 
                className="group relative flex items-center gap-6 p-1 rounded-[2.5rem] bg-gradient-to-r from-[#25D366]/20 to-transparent border border-[#25D366]/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#25D366]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <div className="relative z-10 m-3 w-20 h-20 rounded-[1.8rem] bg-[#25D366] text-white flex items-center justify-center shadow-[0_15px_30px_rgba(37,211,102,0.4)] group-hover:scale-110 group-hover:rotate-[15deg] transition-all duration-500">
                  <FaWhatsapp size={45} />
                </div>
                <div className="relative z-10">
                  <p className="text-[10px] uppercase tracking-[.4em] text-emerald-500 font-black mb-1">Instant Response</p>
                  <p className="text-3xl font-black text-white group-hover:tracking-wider transition-all duration-500">WHATSAPP CHAT</p>
                </div>
              </a>

              {/* SMALL CONTACT CARDS */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <Phone size={20} />, label: "Call Us", val: "+91 62042 03526", href: "tel:+916204203526" },
                  { icon: <Mail size={20} />, label: "Email Us", val: "info@designtech.com", href: "mailto:info@designtech.com" }
                ].map((item, i) => (
                  <a key={i} href={item.href} className="group p-6 rounded-3xl border border-white/5 bg-zinc-900/20 hover:bg-white hover:text-black transition-all duration-500">
                    <div className="mb-4 text-blue-500 group-hover:text-black transition-colors">{item.icon}</div>
                    <p className="text-[9px] uppercase tracking-widest font-black opacity-50">{item.label}</p>
                    <p className="font-bold text-sm">{item.val}</p>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: MAP & SOCIALS */}
          <div className="space-y-12">
            {/* INTERACTIVE MAP BOX */}
            <motion.div variants={itemVariants} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3.2rem] blur opacity-10 group-hover:opacity-30 transition duration-1000" />
              <div className="relative rounded-[3rem] border border-white/10 bg-zinc-900/80 backdrop-blur-3xl p-10 overflow-hidden">
                <Globe className="absolute -top-10 -right-10 text-blue-600/5 group-hover:text-blue-600/10 transition-all duration-1000 rotate-45" size={250} />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <MapPin size={32} />
                  </div>
                  <h4 className="text-4xl font-black mb-4 leading-none">THE STUDIO.</h4>
                  <p className="text-zinc-400 leading-relaxed mb-10 max-w-sm font-medium">
                    Gandhi Complex, Station Road, Professor Colony, Belbanwa, Motihari, Bihar – 845401
                  </p>
                  <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 py-4 px-8 rounded-2xl bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-500">
                    Navigate <Navigation2 size={16} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* NEON SOCIAL GRID */}
            <div className="grid grid-cols-3 gap-6">
              {socialLinks.map((social) => (
                <motion.a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer"
                  whileHover={{ y: -8 }}
                  className={`flex flex-col items-center justify-center gap-4 py-8 rounded-[2.5rem] border border-white/5 bg-zinc-900/20 transition-all duration-500 shadow-xl ${social.color} ${social.shadow} group`}
                >
                  <div className="group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-700">
                    {social.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER STRIP */}
        <motion.div variants={itemVariants} className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-lg font-black tracking-widest">DESIGN TECH</h3>
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-bold">Excellence in 3D Visualization</p>
          </div>
          <div className="flex gap-10">
            {["Privacy", "Terms", "Support"].map(txt => (
              <a key={txt} href="#" className="text-[10px] font-black uppercase tracking-widest text-zinc-600 hover:text-white transition-colors">{txt}</a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* STICKY FLOATING WHATSAPP */}
      <motion.a 
        href={whatsappLink} 
        target="_blank" 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 10 }} 
        className="fixed bottom-10 left-10 z-[100] w-18 h-18 bg-[#25D366] text-white rounded-3xl flex items-center justify-center shadow-[0_20px_50px_rgba(37,211,102,0.4)] transition-all"
        style={{ width: '70px', height: '70px' }}
      >
        <FaWhatsapp size={40} />
      </motion.a>

    </footer>
  );
};

export default Contact;
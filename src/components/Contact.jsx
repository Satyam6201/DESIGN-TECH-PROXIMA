import { motion } from "framer-motion";
import { 
  FaWhatsapp, 
  FaYoutube, 
  FaFacebook, 
  FaInstagram, 
} from "react-icons/fa";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Sparkles,
  Navigation2,
  Clock,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  // Update this with your actual Google Maps CID or direct link
  const googleMapsUrl = "https://maps.app.goo.gl/YourActualLinkHere"; 
  const whatsappNumber = "916204203526";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello Design Tech, I'm interested in your architectural services.`;
  
  const socialLinks = [
    { name: "Instagram", icon: <FaInstagram size={24} />, url: "https://www.instagram.com/design_tech_1?igsh=MXVlYXV3MzhwaDB3aw==", color: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]", shadow: "hover:shadow-pink-500/40", glow: "group-hover:text-pink-400" },
    { name: "Facebook", icon: <FaFacebook size={24} />, url: "https://www.facebook.com/share/16zKNuhm49/", color: "hover:bg-[#1877F2]", shadow: "hover:shadow-blue-500/40", glow: "group-hover:text-blue-400" },
    { name: "YouTube", icon: <FaYoutube size={24} />, url: "https://youtube.com/@homedesignsolutions01?si=2La3v-hCXzALyPOq", color: "hover:bg-[#FF0000]", shadow: "hover:shadow-red-500/40", glow: "group-hover:text-red-400" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <footer id="contact" className="relative bg-[#020202] text-white overflow-hidden border-t border-white/5 pt-24 pb-12">
      
      {/* --- PREMIUM DYNAMIC BACKGROUND --- */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/5 blur-[180px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* --- LEFT SIDE: THE PITCH --- */}
          <div className="space-y-12">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Project Inquiry Open</span>
              </div>
              
              <h2 className="text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.8] transition-all">
                LET'S <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 italic">CONNECT.</span>
              </h2>

              <p className="text-zinc-500 text-xl max-w-lg font-medium leading-relaxed border-l-2 border-blue-600 pl-6">
                Ready to redefine your space? From <span className="text-white">Luxury Elevations</span> to <span className="text-white">Smart Interiors</span>, let's start the conversation.
              </p>
            </motion.div>

            {/* NEON CONTACT CARDS */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Phone size={24} />, label: "Direct Line", val: "+91 62042 03526", href: "tel:+916204203526", color: "group-hover:text-blue-400" },
                { icon: <Mail size={24} />, label: "Work Email", val: "designtech@gmail.com", href: "mailto:designtech@gmail.com", color: "group-hover:text-indigo-400" },
                { icon: <Clock size={24} />, label: "Office Hours", val: "10:00 AM - 7:00 PM", href: "#", color: "group-hover:text-emerald-400" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  className="group p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 relative overflow-hidden"
                >
                  <div className={`mb-4 transition-colors duration-500 ${item.color}`}>{item.icon}</div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-zinc-600 mb-1">{item.label}</p>
                  <p className="font-bold text-lg text-zinc-300 group-hover:text-white transition-colors">{item.val}</p>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={16} className="text-zinc-600" />
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: THE DESTINATION --- */}
          <div className="space-y-8">
            {/* STUDIO MAP CARD */}
            <motion.div variants={itemVariants} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-400 rounded-[3.5rem] blur-2xl opacity-10 group-hover:opacity-40 transition-all duration-1000" />
              <div className="relative rounded-[3rem] border border-white/10 bg-[#0a0a0a] p-10 overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000">
                  <Globe size={300} className="rotate-12" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-3xl bg-blue-600 text-white flex items-center justify-center shadow-2xl shadow-blue-600/40 mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <MapPin size={40} />
                  </div>
                  
                  <h4 className="text-5xl font-[1000] tracking-tighter mb-6">THE STUDIO.</h4>
                  <div className="space-y-2 mb-10">
                    <p className="text-zinc-400 text-xl font-medium leading-tight">Gandhi Complex, Station Road,</p>
                    <p className="text-zinc-400 text-xl font-medium leading-tight">Professor Colony, Belbanwa,</p>
                    <p className="text-white text-xl font-black">Motihari, Bihar – 845401</p>
                  </div>

                  <a 
                    href={googleMapsUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-4 py-5 px-10 rounded-2xl bg-white text-black text-[11px] font-[1000] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-500 group/btn shadow-xl"
                  >
                    GET DIRECTIONS <Navigation2 size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* COLORFUL SOCIALS */}
            <div className="grid grid-cols-3 gap-6">
              {socialLinks.map((social) => (
                <motion.a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer"
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`flex flex-col items-center justify-center gap-5 py-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] transition-all duration-500 shadow-2xl ${social.color} ${social.shadow} group`}
                >
                  <div className={`transition-all duration-700 ${social.glow} group-hover:scale-125 group-hover:rotate-[360deg]`}>
                    {social.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 group-hover:text-white transition-colors">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* --- DYNAMIC FOOTER STRIP --- */}
        <motion.div variants={itemVariants} className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-[2px] bg-blue-600" />
              <h3 className="text-2xl font-black tracking-tighter">DESIGN TECH</h3>
            </div>
            <p className="text-[10px] uppercase tracking-[1em] text-zinc-700 font-bold ml-10">Motihari • India</p>
          </div>

          <div className="flex items-center gap-8">
            {["Services", "Archive", "Privacy", "Legal"].map(link => (
              <a key={link} href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 hover:text-blue-500 transition-colors">{link}</a>
            ))}
          </div>

          <p className="text-[10px] font-bold text-zinc-800 uppercase tracking-widest">
            © 2026 DESIGN TECH INDIA. ALL RIGHTS RESERVED.
          </p>
        </motion.div>
      </motion.div>

      {/* --- FIXED NEON WHATSAPP BUTTON --- */}
      <motion.a 
        href={whatsappLink} 
        target="_blank" 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.15, rotate: 10 }} 
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 left-10 z-[1000] w-20 h-20 bg-[#25D366] text-white rounded-[2rem] flex items-center justify-center shadow-[0_20px_60px_rgba(37,211,102,0.6)] border-4 border-white/10 group"
      >
        <div className="absolute inset-0 rounded-[2rem] bg-white opacity-0 group-hover:opacity-20 animate-pulse" />
        <FaWhatsapp size={45} className="relative z-10" />
        
        {/* Help Tooltip */}
        <div className="absolute left-24 bg-white text-black font-black text-[10px] py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all uppercase tracking-widest pointer-events-none whitespace-nowrap shadow-2xl">
          Chat with Experts
        </div>
      </motion.a>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </footer>
  );
};

export default Contact;
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Globe,
  MessageCircle, // WhatsApp Icon substitute
} from "lucide-react";

const Contact = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/Gandhi+Complex,+Motihari";
  const whatsappNumber = "916204203526"; // Correct format for international links
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello Design Tech, I'm interested in your architectural services.`;

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <footer id="contact" className="relative bg-[#050505] text-white overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-600/10 blur-[160px] rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-indigo-600/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT SECTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-14"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.9]">
                LET’S CREATE
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400 italic">
                  SMART SPACES
                </span>
              </h2>

              <p className="mt-8 max-w-md text-zinc-400 text-lg leading-relaxed">
                Professional 3D visualization & interior solutions crafted for
                modern Indian homes, offices, and commercial spaces.
              </p>
            </motion.div>

            {/* CONTACT LINKS */}
            <motion.div variants={fadeUp} className="space-y-8">
              {/* WHATSAPP - NEW FEATURE */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-6"
              >
                <div className="w-14 h-14 rounded-2xl border border-emerald-900/30 bg-emerald-500/5 flex items-center justify-center
                group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-500 shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  <MessageCircle className="text-emerald-500 group-hover:text-white group-hover:scale-110 transition-all" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">
                    WhatsApp
                  </p>
                  <p className="text-xl font-semibold group-hover:text-emerald-400 transition-colors">
                    Chat with an Architect
                  </p>
                </div>
              </a>

              {/* PHONE */}
              <a href="tel:+916204203526" className="group flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl border border-zinc-800 flex items-center justify-center
                group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                  <Phone className="group-hover:rotate-12 transition-transform" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Call</p>
                  <p className="text-xl font-semibold">+91 62042 03526</p>
                </div>
              </a>

              {/* EMAIL */}
              <a href="mailto:info@designtech.com" className="group flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl border border-zinc-800 flex items-center justify-center
                group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-500">
                  <Mail className="group-hover:-translate-y-1 transition-transform" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Email</p>
                  <p className="text-xl font-semibold">info@designtech.com</p>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-14"
          >
            {/* MAP CARD */}
            <motion.a
              href={googleMapsUrl}
              target="_blank"
              whileHover={{ y: -8 }}
              className="relative block rounded-[2.5rem] border border-zinc-800
              bg-zinc-900/60 backdrop-blur-xl p-10 overflow-hidden group"
            >
              <Globe
                className="absolute top-6 right-6 text-blue-600/20 group-hover:text-blue-600/40 transition animate-spin-slow"
                size={90}
              />

              <MapPin size={34} className="text-blue-500 mb-6" />
              <h4 className="text-2xl font-bold mb-4">Our Studio Location</h4>
              <p className="text-zinc-400 max-w-sm leading-relaxed mb-8">
                Gandhi Complex, Station Road, Professor Colony, Belbanwa,
                Motihari, Bihar – 845401
              </p>

              <span className="inline-flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-widest">
                Open in Google Maps <ArrowUpRight size={14} />
              </span>
            </motion.a>

            {/* SOCIAL + COPYRIGHT */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-zinc-900 pt-10">
              <div className="flex gap-10">
                <a href="#" className="group flex items-center gap-2">
                  <Instagram size={18} className="text-zinc-500 group-hover:text-pink-500 transition" />
                  <span className="uppercase text-[11px] tracking-widest font-bold group-hover:underline">
                    Instagram
                  </span>
                </a>

                <a href="#" className="group flex items-center gap-2">
                  <Linkedin size={18} className="text-zinc-500 group-hover:text-blue-500 transition" />
                  <span className="uppercase text-[11px] tracking-widest font-bold group-hover:underline">
                    LinkedIn
                  </span>
                </a>
              </div>

              <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-black">
                © {new Date().getFullYear()} Design Tech India
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FLOATING WHATSAPP BUTTON - EXTRA FEATURE */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 left-10 z-[100] w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(16,185,129,0.4)] md:hidden lg:flex"
      >
        <MessageCircle size={30} fill="currentColor" />
      </motion.a>
    </footer>
  );
};

export default Contact;
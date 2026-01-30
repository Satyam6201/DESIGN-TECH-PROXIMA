import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FileText, Eye, Download, Maximize2, X, ChevronRight, Layers } from 'lucide-react';

/* =======================
   IMAGE DATA (RETAINED AS PER USER REQUEST)
======================= */
const allImages = [
  // ... (All your existing 129 images stay exactly here)
  { id: 1, category: 'Kitchen', url: '/assets/Kitchen/img292.jpg' },
  { id: 2, category: 'Kitchen', url: '/assets/Kitchen/new_1.jpeg' },
  { id: 3, category: 'Kitchen', url: '/assets/Kitchen/new_6.jpeg' },
  { id: 4, category: 'Kitchen', url: '/assets/Kitchen/img_.jpg' },
  { id: 5, category: 'Kitchen', url: '/assets/Kitchen/img136.jpg' },
  { id: 6, category: 'Bedroom', url: '/assets/Bedroom/img98.jpg' },
  { id: 7, category: 'Bedroom', url: '/assets/Bedroom/img101.jpg' },
  { id: 8, category: 'Bedroom', url: '/assets/Bedroom/img104.jpg' },
  { id: 9, category: 'Bedroom', url: '/assets/Bedroom/img107.jpg' },
  { id: 10, category: 'Bedroom', url: '/assets/Bedroom/img110.jpg' },
  { id: 11, category: 'Bedroom', url: '/assets/Bedroom/img113.jpg' },
  { id: 12, category: 'Bedroom', url: '/assets/Bedroom/img116.jpg' },
  { id: 13, category: 'Bedroom', url: '/assets/Bedroom/img119.jpg' },
  { id: 14, category: 'Bedroom', url: '/assets/Bedroom/img125.jpg' },
  { id: 15, category: 'Living', url: '/assets/Living/img14.jpg' },
  { id: 16, category: 'Living', url: '/assets/Living/img17.jpg' },
  { id: 17, category: 'Living', url: '/assets/Living/img20.jpg' },
  { id: 18, category: 'Living', url: '/assets/Living/image.jpg' },
  { id: 19, category: 'Living', url: '/assets/Living/img23.jpg' },
  { id: 20, category: 'Living', url: '/assets/Living/img26.jpg' },
  { id: 21, category: 'Living', url: '/assets/Living/img59.jpg' },
  { id: 22, category: 'Living', url: '/assets/Living/img62.jpg' },
  { id: 23, category: 'Living', url: '/assets/Living/img65.jpg' },
  { id: 24, category: 'Living', url: '/assets/Living/img68.jpg' },
  { id: 25, category: 'Elevation Design', url: '/assets/3D Elevation Design/img71.jpg' },
  { id: 26, category: 'Elevation Design', url: '/assets/3D Elevation Design/img74.jpg' },
  { id: 27, category: 'Elevation Design', url: '/assets/3D Elevation Design/img77.jpg' },
  { id: 28, category: 'Elevation Design', url: '/assets/3D Elevation Design/img244.jpg' },
  { id: 29, category: 'Elevation Design', url: '/assets/3D Elevation Design/img247.jpg' },
  { id: 30, category: 'Elevation Design', url: '/assets/3D Elevation Design/img250.jpg' },
  { id: 31, category: 'Elevation Design', url: '/assets/3D Elevation Design/img253.jpg' },
  { id: 32, category: 'Bathroom', url: '/assets/Bathroom/img197.jpg' },
  { id: 33, category: 'Bathroom', url: '/assets/Bathroom/img200.jpg' },
  { id: 34, category: 'Bathroom', url: '/assets/Bathroom/img203.jpg' },
  { id: 35, category: 'Bathroom', url: '/assets/Bathroom/img206.jpg' },
  { id: 36, category: 'Bathroom', url: '/assets/Bathroom/img209.jpg' },
  { id: 37, category: 'Bathroom', url: '/assets/Bathroom/img212.jpg' },
  { id: 38, category: 'Balcony', url: '/assets/Balcony/img424.jpg' },
  { id: 39, category: 'Balcony', url: '/assets/Balcony/img440.jpg' },
  { id: 40, category: 'Balcony', url: '/assets/Balcony/img456.jpg' },
  { id: 41, category: 'Balcony', url: '/assets/Balcony/img472.jpg' },
  { id: 42, category: 'Balcony', url: '/assets/Balcony/img488.jpg' },
  { id: 43, category: 'Bedroom', url: '/assets/Bedroom/new1.jpg' },
  { id: 44, category: 'Bedroom', url: '/assets/Bedroom/new2.jpg' },
  { id: 45, category: 'Bedroom', url: '/assets/Bedroom/new3.jpg' },
  { id: 46, category: 'Living', url: '/assets/Living/new.jpg' },
  { id: 47, category: 'Axonometric View', url: '/assets/axonometric view/img32.jpg' },
  { id: 48, category: 'Axonometric View', url: '/assets/axonometric view/img35.jpg' },
  { id: 49, category: 'Axonometric View', url: '/assets/axonometric view/img41.jpg' },
  { id: 50, category: 'Axonometric View', url: '/assets/axonometric view/img44.jpg' },
  { id: 51, category: 'Axonometric View', url: '/assets/axonometric view/img47.jpg' },
  { id: 52, category: 'Axonometric View', url: '/assets/axonometric view/img50.jpg' },
  { id: 53, category: 'Axonometric View', url: '/assets/axonometric view/new_1.jpeg' },
  { id: 54, category: 'Axonometric View', url: '/assets/axonometric view/new_2.jpeg' },
  { id: 55, category: 'Axonometric View', url: '/assets/axonometric view/new_3.jpeg' },
  { id: 56, category: 'Axonometric View', url: '/assets/axonometric view/new_4.jpeg' },
  { id: 57, category: 'Axonometric View', url: '/assets/axonometric view/new_5.jpeg' },
  { id: 58, category: 'Office', url: '/assets/Office/img271.jpg' },
  { id: 59, category: 'Office', url: '/assets/Office/img274.jpg' },
  { id: 60, category: 'Office', url: '/assets/Office/img277.jpg' },
  { id: 61, category: 'Office', url: '/assets/Office/img280.jpg' },
  { id: 62, category: 'Office', url: '/assets/Office/new_1.jpeg' },
  { id: 63, category: 'Office', url: '/assets/Office/new_2.jpeg' },
  { id: 64, category: 'Office', url: '/assets/Office/new_3.jpeg' },
  { id: 65, category: 'Office', url: '/assets/Office/new_4.jpeg' },
  { id: 66, category: 'Office', url: '/assets/Office/new_5.jpeg' },
  { id: 67, category: 'Bathroom', url: '/assets/Bathroom/new_2.jpeg' },
  { id: 68, category: 'Bathroom', url: '/assets/Bathroom/new_3.jpeg' },
  { id: 69, category: 'Living', url: '/assets/Living/img62.jpg' },
  { id: 70, category: 'Living', url: '/assets/Living/img120.jpg' },
  { id: 71, category: 'Bedroom', url: '/assets/Bedroom/new_3.jpeg' },
  { id: 72, category: 'Bedroom', url: '/assets/Bedroom/new_4.jpeg' },
  { id: 73, category: 'Elevation Design', url: '/assets/3D Elevation Design/img53.jpg' },
  { id: 74, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_1.jpeg' },
  { id: 75, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_2.jpeg' },
  { id: 76, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_3.jpeg' },
  { id: 77, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_4.jpeg' },
  { id: 78, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_5.jpeg' },
  { id: 79, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_6.jpeg' },
  { id: 80, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_7.jpeg' },
  { id: 81, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_8.jpeg' },
  { id: 82, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_9.jpeg' },
  { id: 83, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_10.jpeg' },
  { id: 84, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_11.jpeg' },
  { id: 85, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_12.jpeg' },
  { id: 86, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_13.jpeg' },
  { id: 87, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_14.jpeg' },
  { id: 88, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_15.jpeg' },
  { id: 89, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_17.jpeg' },
  { id: 90, category: 'Kitchen', url: '/assets/Kitchen/img292.jpg' },
  { id: 91, category: 'Kitchen', url: '/assets/Kitchen/img292.jpg' },
  { id: 92, category: 'Kitchen', url: '/assets/Kitchen/img292.jpg' },
  { id: 93, category: 'Kitchen', url: '/assets/Kitchen/new_1.jpeg' },
  { id: 94, category: 'Kitchen', url: '/assets/Kitchen/new_2.jpeg' },
  { id: 95, category: 'Kitchen', url: '/assets/Kitchen/new_3.jpeg' },
  { id: 96, category: 'Kitchen', url: '/assets/Kitchen/new_4.jpeg' },
  { id: 97, category: 'Kitchen', url: '/assets/Kitchen/new_5.jpeg' },
  { id: 98, category: 'Kitchen', url: '/assets/Kitchen/new_6.jpeg' },
  { id: 99, category: 'Kitchen', url: '/assets/Kitchen/new_7.jpeg' },
  { id: 100, category: 'Living', url: '/assets/Living/new_1.jpeg' },
  { id: 101, category: 'Living', url: '/assets/Living/new_2.jpeg' },
  { id: 102, category: 'Living', url: '/assets/Living/new_3.jpeg' },
  { id: 103, category: 'Living', url: '/assets/Living/new_4.jpeg' },
  { id: 104, category: 'Living', url: '/assets/Living/new_5.jpeg' },
  { id: 105, category: 'Living', url: '/assets/Living/new_6.jpeg' },
  { id: 106, category: 'Office', url: '/assets/Office/img271.jpg' },
  { id: 107, category: 'Office', url: '/assets/Office/img274.jpg' },
  { id: 108, category: 'Office', url: '/assets/Office/img277.jpg' },
  { id: 109, category: 'Office', url: '/assets/Office/img280.jpg' },
  { id: 110, category: 'Office', url: '/assets/Office/new_1.jpeg' },
  { id: 111, category: 'Office', url: '/assets/Office/new_2.jpeg' },
  { id: 112, category: 'Office', url: '/assets/Office/new_3.jpeg' },
  { id: 113, category: 'Office', url: '/assets/Office/new_4.jpeg' },
  { id: 114, category: 'Office', url: '/assets/Office/new_5.jpeg' },
  { id: 115, category: 'Office', url: '/assets/Office/new_5.jpeg' },
  { id: 116, category: 'Office', url: '/assets/jewll 1.png' },
  { id: 117, category: 'Office', url: '/assets/jewll 2.png' },
  { id: 118, category: 'Office', url: '/assets/jewll 3.png' },
  { id: 119, category: 'Office', url: '/assets/jewll 4.png' },
  { id: 120, category: 'Office', url: '/assets/Office/new_6.jpeg' },
  { id: 121, category: 'Office', url: '/assets/Office/new_7.jpeg' },
  { id: 122, category: 'Office', url: '/assets/Office/new_8.jpeg' },
  { id: 123, category: 'Office', url: '/assets/Office/new_9.jpeg' },
  { id: 124, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_16.jpeg' },
  { id: 125, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_18.jpeg' },
  { id: 126, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_19.jpeg' },
  { id: 127, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_20.jpeg' },
  { id: 128, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_21.jpeg' },
  { id: 129, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_22.jpeg' },
];

const pdfResources = [
  { id: 'design-tech-india', title: 'Design Technology – Indian Standards', file: '/assets/DESIGN TECH.pdf', thumbnail: '/assets/Bedroom/img107.jpg' },
  { id: 'interior-room-india', title: 'Indian Interior Room Design', file: '/assets/Interiors design room.pdf', thumbnail: '/assets/Bedroom/img397.jpg' },
  { id: 'interior-guide-india', title: 'Complete Interior Design Guide (India)', file: '/assets/Interiors design.pdf', thumbnail: '/assets/3D Elevation Design/img74.jpg' },
  { id: 'Furniture working plan', title: 'Complete Furniture working plan', file: '/assets/Furniture working plan.pdf', thumbnail: '/assets/Best-laid-floor-plans-3D-Floor-Plan-1.webp' },
  { id: 'Layout Plan', title: 'Complete Layout Plan', file: '/assets/Layout Plan (Option - 2).pdf', thumbnail: '/assets/800x600-26.webp' },
];

const categories = ['All', 'Kitchen', 'Bedroom', 'Living', 'Office', 'Elevation Design', 'Bathroom', 'Balcony', 'Axonometric View'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === 'All' 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

  return (
    <section className="min-h-screen bg-[#050505] text-white py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-600/10 to-transparent opacity-50 pointer-events-none" />
      
      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-blue-600" />
              <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.6em]">Portfolio Showcase</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-[1000] tracking-tighter leading-none">
              DESIGN <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400 italic font-black">ARCHIVE.</span>
            </h2>
          </div>

          {/* GLASS FILTER BAR */}
          <div className="flex flex-wrap gap-2 p-2 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-500
                ${activeCategory === cat 
                  ? 'bg-blue-600 text-white shadow-[0_10px_20px_rgba(37,99,235,0.3)] scale-105' 
                  : 'text-zinc-500 hover:text-white hover:bg-white/5'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* MASONRY IMAGE GRID */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: idx * 0.02 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-900">
                  <img
                    src={img.url}
                    alt={img.category}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest mb-3 inline-block">
                        {img.category}
                      </span>
                      <div className="flex justify-between items-center">
                        <h4 className="text-xl font-bold text-white">Project View</h4>
                        <div className="p-3 rounded-full bg-white/10 backdrop-blur-md">
                          <Maximize2 size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* RESOURCES SECTION */}
        <div id="resources" className="mt-48 pt-32 border-t border-white/5">
          <div className="flex flex-col items-center text-center mb-20">
            <Layers className="text-blue-600 mb-6" size={40} />
            <h2 className="text-5xl md:text-7xl font-[1000] tracking-tighter mb-6">TECHNICAL <span className="italic opacity-40">GUIDES.</span></h2>
            <p className="text-zinc-500 max-w-xl text-lg font-medium">Download our standardized design manuals and layout plans for professional execution.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pdfResources.map((pdf) => (
              <motion.div
                key={pdf.id}
                whileHover={{ y: -15 }}
                className="group relative bg-[#0a0a0a] border border-white/5 rounded-[3rem] overflow-hidden p-4"
              >
                <div className="relative h-72 rounded-[2.2rem] overflow-hidden mb-8">
                  <img src={pdf.thumbnail} alt={pdf.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                  <div className="absolute top-6 right-6 bg-red-600 text-white p-4 rounded-2xl shadow-xl">
                    <FileText size={24} />
                  </div>
                </div>

                <div className="px-6 pb-8">
                  <h3 className="text-2xl font-black text-white leading-tight mb-8 min-h-[64px] group-hover:text-blue-500 transition-colors">
                    {pdf.title}
                  </h3>
                  
                  <div className="flex gap-3">
                    <a href={pdf.file} target="_blank" rel="noopener noreferrer" 
                       className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-white/10 text-[10px] font-black uppercase tracking-widest py-4 hover:bg-white hover:text-black transition-all">
                      <Eye size={14} /> Preview
                    </a>
                    <a href={pdf.file} download
                       className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-blue-600 text-[10px] font-black uppercase tracking-widest py-4 hover:bg-blue-700 transition-all">
                      <Download size={14} /> Download
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              className="absolute top-10 right-10 text-white p-4 bg-white/10 rounded-full hover:bg-white hover:text-black transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X size={30} />
            </motion.button>

            <motion.div 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-6xl w-full h-full flex flex-col justify-center items-center gap-6"
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedImage.url} className="max-w-full max-h-[80vh] rounded-[2rem] shadow-2xl border border-white/10" alt="Full view" />
              <div className="text-center">
                <span className="text-blue-500 font-black uppercase tracking-[0.5em] text-xs">{selectedImage.category}</span>
                <h3 className="text-3xl font-black mt-2">Design Tech Excellence</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Gallery;
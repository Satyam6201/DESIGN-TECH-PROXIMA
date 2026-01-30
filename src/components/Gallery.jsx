import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaDownload, FaFilePdf} from 'react-icons/fa';
import { FileText, Eye, Download } from 'lucide-react';

/* =======================
   IMAGE DATA (FIXED IDs + INDIAN STANDARD NAMES)
======================= */
const allImages = [
  // ===== KITCHEN =====
  { id: 1, category: 'Kitchen', url: '/assets/Kitchen/img292.jpg' },
  { id: 2, category: 'Kitchen', url: '/assets/Kitchen/new_1.jpeg' },
  { id: 3, category: 'Kitchen', url: '/assets/Kitchen/new_6.jpeg' },
  { id: 4, category: 'Kitchen', url: '/assets/Kitchen/img_.jpg' },
  { id: 5, category: 'Kitchen', url: '/assets/Kitchen/img136.jpg' },

  // ===== BEDROOM =====
  { id: 6, category: 'Bedroom', url: '/assets/Bedroom/img98.jpg' },
  { id: 7, category: 'Bedroom', url: '/assets/Bedroom/img101.jpg' },
  { id: 8, category: 'Bedroom', url: '/assets/Bedroom/img104.jpg' },
  { id: 9, category: 'Bedroom', url: '/assets/Bedroom/img107.jpg' },
  { id: 10, category: 'Bedroom', url: '/assets/Bedroom/img110.jpg' },
  { id: 11, category: 'Bedroom', url: '/assets/Bedroom/img113.jpg' },
  { id: 12, category: 'Bedroom', url: '/assets/Bedroom/img116.jpg' },
  { id: 13, category: 'Bedroom', url: '/assets/Bedroom/img119.jpg' },
  { id: 14, category: 'Bedroom', url: '/assets/Bedroom/img125.jpg' },

  // ===== LIVING ROOM =====
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

  // ===== 3D ELEVATION DESIGN =====
  { id: 25, category: 'Elevation Design', url: '/assets/3D Elevation Design/img71.jpg' },
  { id: 26, category: 'Elevation Design', url: '/assets/3D Elevation Design/img74.jpg' },
  { id: 27, category: 'Elevation Design', url: '/assets/3D Elevation Design/img77.jpg' },
  { id: 28, category: 'Elevation Design', url: '/assets/3D Elevation Design/img244.jpg' },
  { id: 29, category: 'Elevation Design', url: '/assets/3D Elevation Design/img247.jpg' },
  { id: 30, category: 'Elevation Design', url: '/assets/3D Elevation Design/img250.jpg' },
  { id: 31, category: 'Elevation Design', url: '/assets/3D Elevation Design/img253.jpg' },

  // ===== BATHROOM =====
  { id: 32, category: 'Bathroom', url: '/assets/Bathroom/img197.jpg' },
  { id: 33, category: 'Bathroom', url: '/assets/Bathroom/img200.jpg' },
  { id: 34, category: 'Bathroom', url: '/assets/Bathroom/img203.jpg' },
  { id: 35, category: 'Bathroom', url: '/assets/Bathroom/img206.jpg' },
  { id: 36, category: 'Bathroom', url: '/assets/Bathroom/img209.jpg' },
  { id: 37, category: 'Bathroom', url: '/assets/Bathroom/img212.jpg' },

  // ===== BALCONY =====
  { id: 38, category: 'Balcony', url: '/assets/Balcony/img424.jpg' },
  { id: 39, category: 'Balcony', url: '/assets/Balcony/img440.jpg' },
  { id: 40, category: 'Balcony', url: '/assets/Balcony/img456.jpg' },
  { id: 41, category: 'Balcony', url: '/assets/Balcony/img472.jpg' },
  { id: 42, category: 'Balcony', url: '/assets/Balcony/img488.jpg' },

  // ===== ADDITIONAL BEDROOM =====
  { id: 43, category: 'Bedroom', url: '/assets/Bedroom/new1.jpg' },
  { id: 44, category: 'Bedroom', url: '/assets/Bedroom/new2.jpg' },
  { id: 45, category: 'Bedroom', url: '/assets/Bedroom/new3.jpg' },

  // ===== ADDITIONAL LIVING =====
  { id: 46, category: 'Living', url: '/assets/Living/new.jpg' },

  // ===== AXONOMETRIC VIEW =====
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

  // ===== OFFICE =====
  { id: 58, category: 'Office', url: '/assets/Office/img271.jpg' },
  { id: 59, category: 'Office', url: '/assets/Office/img274.jpg' },
  { id: 60, category: 'Office', url: '/assets/Office/img277.jpg' },
  { id: 61, category: 'Office', url: '/assets/Office/img280.jpg' },
  { id: 62, category: 'Office', url: '/assets/Office/new_1.jpeg' },
  { id: 63, category: 'Office', url: '/assets/Office/new_2.jpeg' },
  { id: 64, category: 'Office', url: '/assets/Office/new_3.jpeg' },
  { id: 65, category: 'Office', url: '/assets/Office/new_4.jpeg' },
  { id: 66, category: 'Office', url: '/assets/Office/new_5.jpeg' },

  // ===== CONTINUED FROM ID 67 =====

{ id: 67, category: 'Bathroom', url: '/assets/Bathroom/new_2.jpeg' },
{ id: 68, category: 'Bathroom', url: '/assets/Bathroom/new_3.jpeg' },
{ id: 69, category: 'Living', url: '/assets/Living/img62.jpg' },
{ id: 70, category: 'Living', url: '/assets/Living/img120.jpg' },
{ id: 71, category: 'Bedroom', url: '/assets/Bedroom/new_3.jpeg' },
{ id: 72, category: 'Bedroom', url: '/assets/Bedroom/new_4.jpeg' },

// ===== 3D ELEVATION DESIGN =====
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

// ===== KITCHEN =====
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

// ===== LIVING ROOM =====
{ id: 100, category: 'Living', url: '/assets/Living/new_1.jpeg' },
{ id: 101, category: 'Living', url: '/assets/Living/new_2.jpeg' },
{ id: 102, category: 'Living', url: '/assets/Living/new_3.jpeg' },
{ id: 103, category: 'Living', url: '/assets/Living/new_4.jpeg' },
{ id: 104, category: 'Living', url: '/assets/Living/new_5.jpeg' },
{ id: 105, category: 'Living', url: '/assets/Living/new_6.jpeg' },

// ===== OFFICE =====
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


/* =======================
   PDF RESOURCES
======================= */
const pdfResources = [
  {
    id: 'design-tech-india',
    title: 'Design Technology – Indian Standards',
    file: '/assets/DESIGN TECH.pdf',
    thumbnail: '/assets/Bedroom/img107.jpg',
  },
  {
    id: 'interior-room-india',
    title: 'Indian Interior Room Design',
    file: '/assets/Interiors design room.pdf',
    thumbnail: '/assets/Bedroom/img397.jpg',
  },
  {
    id: 'interior-guide-india',
    title: 'Complete Interior Design Guide (India)',
    file: '/assets/Interiors design.pdf',
    thumbnail: '/assets/3D Elevation Design/img74.jpg',
  },
  {
    id: 'Furniture working plan',
    title: 'Complete Furniture working plan',
    file: '/assets/Furniture working plan.pdf',
    thumbnail: '/assets/Best-laid-floor-plans-3D-Floor-Plan-1.webp',
  },
  {
    id: 'Layout Plan',
    title: 'Complete Layout Plan',
    file: '/assets/Layout Plan (Option - 2).pdf',
    thumbnail: '/assets/800x600-26.webp',
  },
];


const categories = [
  'All',
  'Kitchen',
  'Bedroom',
  'Living',
  'Office',
  'Elevation Design',
  'Bathroom',
  'Balcony'
];


/* =======================
   GALLERY COMPONENT
======================= */
const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages =
    activeCategory === 'All'
      ? allImages
      : allImages.filter(img => img.category === activeCategory);

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-400 dark:from-black dark:to-zinc-900 py-20 px-4">

      {/* CATEGORY FILTER */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-xs font-extrabold uppercase tracking-widest transition
            ${
              activeCategory === cat
                ? 'bg-blue-600 text-white shadow-xl'
                : 'bg-gray-700 dark:bg-zinc-900 border dark:border-zinc-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* IMAGE GRID */}
      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 max-w-[1600px] mx-auto">
        <AnimatePresence>
          {filteredImages.map(img => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl group shadow-lg hover:shadow-2xl"
            >
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent
                opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6 text-white">
                <p className="text-[10px] uppercase tracking-widest mb-1">{img.category}</p>
                <h4 className="text-lg font-bold">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <section className="max-w-7xl mx-auto mt-40 px-6 pb-20">
  <div className="text-center mb-16">
    <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.5em] block mb-4">
      Knowledge Center
    </span>
    <h2 className="text-4xl md:text-6xl font-[1000] tracking-tighter text-white">
      DESIGN <span className="text-blue-600 italic">RESOURCES</span>
    </h2>
  </div>

  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
    {pdfResources.map((pdf) => (
      <motion.div
        key={pdf.id}
        whileHover={{ y: -10 }}
        className="group bg-[#0f0f0f] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:border-blue-600/50"
      >
        {/* PDF THUMBNAIL CONTAINER */}
        <div className="relative h-64 overflow-hidden bg-zinc-800">
          <img
            src={pdf.thumbnail}
            alt={pdf.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />

          {/* PDF FLOATING BADGE */}
          <div className="absolute top-6 left-6 bg-red-600 text-white p-3.5 rounded-2xl shadow-[0_10px_20px_rgba(220,38,38,0.3)]">
            <FileText size={22} strokeWidth={2.5} />
          </div>
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent opacity-60" />
        </div>

        {/* CONTENT AREA */}
        <div className="p-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-[1px] bg-blue-600" />
            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-blue-500">
              Free Guide
            </p>
          </div>

          <h3 className="text-xl md:text-2xl font-black leading-tight text-white mb-8 group-hover:text-blue-400 transition-colors">
            {pdf.title}
          </h3>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* VIEW BUTTON */}
            <a
              href={pdf.file}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3
              rounded-2xl border border-white/10 text-white
              py-4 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
            >
              <Eye size={16} /> View
            </a>

            {/* DOWNLOAD BUTTON */}
            <a
              href={pdf.file}
              download
              className="flex-1 flex items-center justify-center gap-3
              rounded-2xl bg-blue-600 text-white py-4 text-xs font-black
              uppercase tracking-widest hover:bg-blue-700 hover:shadow-[0_10px_20px_rgba(37,99,235,0.3)] transition-all duration-500"
            >
              <Download size={16} /> Get PDF
            </a>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>
    </section>
  );
};

export default Gallery;

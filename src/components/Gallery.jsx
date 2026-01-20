import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaDownload, FaFilePdf } from 'react-icons/fa';

/* =======================
   IMAGE DATA (FIXED IDs + INDIAN STANDARD NAMES)
======================= */
const allImages = [
  // ===== KITCHEN =====
  { id: 1, category: 'Kitchen', url: '/assets/Kitchen/img1.jpg', title: 'Indian Modular Kitchen' },
  { id: 2, category: 'Kitchen', url: '/assets/Kitchen/img2.jpg', title: 'Small Flat Kitchen Design' },
  { id: 3, category: 'Kitchen', url: '/assets/Kitchen/img3.jpg', title: 'Middle Class Home Kitchen' },
  { id: 4, category: 'Kitchen', url: '/assets/Kitchen/img_.jpg', title: 'Compact Indian Kitchen' },
  { id: 5, category: 'Kitchen', url: '/assets/Kitchen/img136.jpg', title: 'Modern Indian Kitchen' },

  // ===== BEDROOM =====
  { id: 6, category: 'Bedroom', url: '/assets/Bedroom/img98.jpg', title: 'Indian Master Bedroom' },
  { id: 7, category: 'Bedroom', url: '/assets/Bedroom/img101.jpg', title: 'Small Flat Bedroom' },
  { id: 8, category: 'Bedroom', url: '/assets/Bedroom/img104.jpg', title: 'Simple Indian Bedroom' },
  { id: 9, category: 'Bedroom', url: '/assets/Bedroom/img107.jpg', title: 'Family Bedroom Interior' },
  { id: 10, category: 'Bedroom', url: '/assets/Bedroom/img110.jpg', title: 'Comfortable Bedroom Setup' },
  { id: 11, category: 'Bedroom', url: '/assets/Bedroom/img113.jpg', title: 'Budget Bedroom Design' },
  { id: 12, category: 'Bedroom', url: '/assets/Bedroom/img116.jpg', title: 'Modern Indian Bedroom' },
  { id: 13, category: 'Bedroom', url: '/assets/Bedroom/img119.jpg', title: 'Apartment Bedroom Interior' },
  { id: 14, category: 'Bedroom', url: '/assets/Bedroom/img125.jpg', title: '2BHK Flat Bedroom' },

  // ===== LIVING ROOM =====
  { id: 15, category: 'Living', url: '/assets/Living/img14.jpg', title: 'Indian Living Room' },
  { id: 16, category: 'Living', url: '/assets/Living/img17.jpg', title: '2BHK Flat Living Area' },
  { id: 17, category: 'Living', url: '/assets/Living/img20.jpg', title: 'Family Living Room Setup' },
  { id: 18, category: 'Living', url: '/assets/Living/image.jpg', title: 'Compact Living Area' },
  { id: 19, category: 'Living', url: '/assets/Living/img23.jpg', title: 'Small Living Room Design' },
  { id: 20, category: 'Living', url: '/assets/Living/img26.jpg', title: 'Indian Sofa & TV Unit' },
  { id: 21, category: 'Living', url: '/assets/Living/img59.jpg', title: 'Modern Flat Living Room' },
  { id: 22, category: 'Living', url: '/assets/Living/img62.jpg', title: 'Middle Class Living Room' },
  { id: 23, category: 'Living', url: '/assets/Living/img65.jpg', title: 'Indian Family Hall' },
  { id: 24, category: 'Living', url: '/assets/Living/img68.jpg', title: 'Compact Hall Interior' },

  // ===== OFFICE =====
  { id: 25, category: 'Office', url: '/assets/Office/img32.jpg', title: 'Indian Office Interior' },
  { id: 26, category: 'Office', url: '/assets/Office/img35.jpg', title: 'Small Office Workspace' },
  { id: 27, category: 'Office', url: '/assets/Office/img38.jpg', title: 'Startup Office India' },
  { id: 28, category: 'Office', url: '/assets/Office/img41.jpg', title: 'Office Meeting Room' },
  { id: 29, category: 'Office', url: '/assets/Office/img44.jpg', title: 'Corporate Office Interior' },
  { id: 30, category: 'Office', url: '/assets/Office/img47.jpg', title: 'IT Office Workspace' },
  { id: 31, category: 'Office', url: '/assets/Office/img50.jpg', title: 'Open Office Layout' },
  { id: 32, category: 'Office', url: '/assets/Office/img53.jpg', title: 'Modern Indian Office' },

  // ===== FLAT =====
  { id: 33, category: 'Flat', url: '/assets/Flat/img71.jpg', title: 'Indian Apartment Flat' },
  { id: 34, category: 'Flat', url: '/assets/Flat/img74.jpg', title: '2BHK Flat Interior' },
  { id: 35, category: 'Flat', url: '/assets/Flat/img77.jpg', title: 'Middle Class Apartment' },
  { id: 36, category: 'Flat', url: '/assets/Flat/img244.jpg', title: 'Urban Indian Flat Design' },
  { id: 37, category: 'Flat', url: '/assets/Flat/img247.jpg', title: 'Budget Flat Interior' },
  { id: 38, category: 'Flat', url: '/assets/Flat/img250.jpg', title: 'Modern Apartment Interior' },
  { id: 39, category: 'Flat', url: '/assets/Flat/img253.jpg', title: 'Affordable Flat Design' },

  // ===== BATHROOM =====
  { id: 40, category: 'Bathroom', url: '/assets/Bathroom/img197.jpg', title: 'Indian Bathroom Design' },
  { id: 41, category: 'Bathroom', url: '/assets/Bathroom/img200.jpg', title: 'Small Flat Bathroom' },
  { id: 42, category: 'Bathroom', url: '/assets/Bathroom/img203.jpg', title: 'Simple Indian Bathroom' },
  { id: 43, category: 'Bathroom', url: '/assets/Bathroom/img206.jpg', title: 'Family Bathroom Interior' },
  { id: 44, category: 'Bathroom', url: '/assets/Bathroom/img209.jpg', title: 'Modern Bathroom Setup' },
  { id: 45, category: 'Bathroom', url: '/assets/Bathroom/img212.jpg', title: 'Budget Bathroom Design' },

  // ===== BALCONY =====
  { id: 46, category: 'Balcony', url: '/assets/Balcony/img424.jpg', title: 'Indian Flat Balcony' },
  { id: 47, category: 'Balcony', url: '/assets/Balcony/img440.jpg', title: 'Small Apartment Balcony' },
  { id: 48, category: 'Balcony', url: '/assets/Balcony/img456.jpg', title: 'Green Balcony Setup' },
  { id: 49, category: 'Balcony', url: '/assets/Balcony/img472.jpg', title: 'Urban Home Balcony' },
  { id: 50, category: 'Balcony', url: '/assets/Balcony/img488.jpg', title: 'Relaxing Balcony Space' },
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
    thumbnail: '/assets/Flat/img74.jpg',
  },
];


const categories = ['All', 'Kitchen', 'Bedroom', 'Living', 'Office', 'Flat', 'Bathroom', 'Balcony'];

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
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-zinc-900 py-20 px-4">

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
                : 'bg-white dark:bg-zinc-900 border dark:border-zinc-800'
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

      {/* PDF SECTION */}
<section className="max-w-7xl mx-auto mt-32 px-4">
  <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14">
    Interior Design Resources
  </h2>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {pdfResources.map(pdf => (
      <div
        key={pdf.id}
        className="group bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800
        rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
      >
        {/* PDF THUMBNAIL */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={pdf.thumbnail}
            alt={pdf.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* PDF ICON */}
          <div className="absolute top-4 left-4 bg-red-600 text-white p-3 rounded-xl shadow-lg">
            <FaFilePdf size={20} />
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <p className="text-[11px] uppercase tracking-widest text-gray-500 mb-2">
            PDF Resource
          </p>

          <h3 className="text-lg font-bold leading-snug mb-6">
            {pdf.title}
          </h3>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4">
            {/* VIEW */}
            <a
              href={pdf.file}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2
              rounded-xl border border-blue-600 text-blue-600
              py-2 font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              <FaEye /> View
            </a>

            {/* DOWNLOAD */}
            <a
              href={pdf.file}
              download
              className="flex-1 flex items-center justify-center gap-2
              rounded-xl bg-blue-600 text-white py-2 font-semibold
              hover:bg-blue-700 transition"
            >
              <FaDownload /> Download
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
    </section>
  );
};

export default Gallery;

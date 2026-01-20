import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* =======================
   IMAGE DATA (INDIAN STANDARD)
======================= */
const allImages = [
  // KITCHEN
  { id: 1, category: 'Kitchen', url: '/assets/Kitchen/img1.jpg', title: 'Indian Modular Kitchen' },
  { id: 2, category: 'Kitchen', url: '/assets/Kitchen/img2.jpg', title: 'Small Flat Kitchen' },
  { id: 3, category: 'Kitchen', url: '/assets/Kitchen/img3.jpg', title: 'Budget Indian Kitchen' },

  // BEDROOM
  { id: 4, category: 'Bedroom', url: '/assets/Bedroom/img98.jpg', title: 'Indian Master Bedroom' },
  { id: 5, category: 'Bedroom', url: '/assets/Bedroom/img101.jpg', title: '2BHK Bedroom Setup' },
  { id: 6, category: 'Bedroom', url: '/assets/Bedroom/img104.jpg', title: 'Simple Bedroom Design' },
  { id: 7, category: 'Bedroom', url: '/assets/Bedroom/img107.jpg', title: 'Family Bedroom Interior' },
  { id: 8, category: 'Bedroom', url: '/assets/Bedroom/img110.jpg', title: 'Middle Class Bedroom' },
  { id: 9, category: 'Bedroom', url: '/assets/Bedroom/img113.jpg', title: 'Compact Bedroom Interior' },
  { id: 10, category: 'Bedroom', url: '/assets/Bedroom/img116.jpg', title: 'Indian Bedroom Decor' },
  { id: 11, category: 'Bedroom', url: '/assets/Bedroom/img119.jpg', title: 'Small Flat Bedroom' },
  { id: 12, category: 'Bedroom', url: '/assets/Bedroom/img125.jpg', title: 'Apartment Bedroom Interior' },

  // LIVING ROOM
  { id: 13, category: 'Living', url: '/assets/Living/img14.jpg', title: 'Indian Living Room' },
  { id: 14, category: 'Living', url: '/assets/Living/img17.jpg', title: 'Small Flat Living Room' },
  { id: 15, category: 'Living', url: '/assets/Living/img20.jpg', title: 'Family Living Area' },
  { id: 16, category: 'Living', url: '/assets/Living/img23.jpg', title: 'Simple Living Room Design' },
  { id: 17, category: 'Living', url: '/assets/Living/img26.jpg', title: 'Sofa Setup for Indian Homes' },
  { id: 18, category: 'Living', url: '/assets/Living/img59.jpg', title: 'Apartment Living Space' },
  { id: 19, category: 'Living', url: '/assets/Living/img62.jpg', title: 'Middle Class Living Room' },
  { id: 20, category: 'Living', url: '/assets/Living/img65.jpg', title: 'TV Unit Living Room' },
  { id: 21, category: 'Living', url: '/assets/Living/img68.jpg', title: 'Compact Living Area' },

  // OFFICE
  { id: 22, category: 'Office', url: '/assets/Office/img32.jpg', title: 'Indian Office Interior' },
  { id: 23, category: 'Office', url: '/assets/Office/img35.jpg', title: 'Small Office Workspace' },
  { id: 24, category: 'Office', url: '/assets/Office/img38.jpg', title: 'Startup Office Design' },
  { id: 25, category: 'Office', url: '/assets/Office/img41.jpg', title: 'Office Meeting Room' },
  { id: 26, category: 'Office', url: '/assets/Office/img44.jpg', title: 'Corporate Office Interior' },
  { id: 27, category: 'Office', url: '/assets/Office/img47.jpg', title: 'Office Cabin Setup' },
  { id: 28, category: 'Office', url: '/assets/Office/img50.jpg', title: 'Shared Office Space' },
  { id: 29, category: 'Office', url: '/assets/Office/img53.jpg', title: 'Office Workstation Area' },

  // FLAT
  { id: 30, category: 'Flat', url: '/assets/Flat/img71.jpg', title: 'Indian Apartment Flat' },
  { id: 31, category: 'Flat', url: '/assets/Flat/img74.jpg', title: '2BHK Flat Interior' },
  { id: 32, category: 'Flat', url: '/assets/Flat/img77.jpg', title: 'Middle Class Flat Design' },
  { id: 33, category: 'Flat', url: '/assets/Flat/img244.jpg', title: 'Urban Indian Flat' },
  { id: 34, category: 'Flat', url: '/assets/Flat/img247.jpg', title: 'Budget Flat Interior' },
  { id: 35, category: 'Flat', url: '/assets/Flat/img250.jpg', title: 'Apartment Interior India' },
  { id: 36, category: 'Flat', url: '/assets/Flat/img253.jpg', title: 'Simple Flat Design' },
];

/* =======================
   PDF RESOURCES
======================= */
const pdfResources = [
  { id: 'pdf1', title: 'DESIGN TECH', file: '/assets/DESIGN TECH.pdf' },
  { id: 'pdf2', title: 'Interiors Design Room', file: '/assets/Interiors design room.pdf' },
  { id: 'pdf3', title: 'Interiors Design', file: '/assets/Interiors design.pdf' },
];

const categories = ['All', 'Kitchen', 'Bedroom', 'Living', 'Office', 'Flat'];

/* =======================
   GALLERY COMPONENT
======================= */
const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages =
    activeCategory === 'All'
      ? allImages
      : allImages.filter(image => image.category === activeCategory);

  return (
    <section className="min-h-screen bg-white dark:bg-black py-20 px-4">
      {/* CATEGORY FILTER */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-8 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition
              ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* IMAGE GRID */}
      <motion.div
        layout
        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 max-w-[1600px] mx-auto"
      >
        <AnimatePresence>
          {filteredImages.map(image => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-3xl group bg-gray-200"
            >
              <img
                src={image.url}
                alt={image.title}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6 text-white">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1">
                  {image.category}
                </p>
                <h4 className="text-lg font-semibold">{image.title}</h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* PDF RESOURCES */}
      <div className="max-w-5xl mx-auto mt-28 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pdfResources.map(pdf => (
          <a
            key={pdf.id}
            href={pdf.file}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-2xl p-8 hover:shadow-lg transition"
          >
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              PDF Resource
            </p>
            <h3 className="text-xl font-bold">{pdf.title}</h3>
            <p className="mt-4 text-sm text-blue-600">View / Download →</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

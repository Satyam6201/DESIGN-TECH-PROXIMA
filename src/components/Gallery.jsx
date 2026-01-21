import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaDownload, FaFilePdf } from 'react-icons/fa';

/* =======================
   IMAGE DATA (FIXED IDs + INDIAN STANDARD NAMES)
======================= */
const allImages = [
  // ===== KITCHEN =====
  { id: 1, category: 'Kitchen', url: '/assets/Kitchen/img1.jpg', title: 'Premium Indian Modular Kitchen Design' },
  { id: 2, category: 'Kitchen', url: '/assets/Kitchen/img2.jpg', title: 'Smart Small Flat Kitchen Layout' },
  { id: 3, category: 'Kitchen', url: '/assets/Kitchen/img3.jpg', title: 'Middle-Class Indian Kitchen Interior' },
  { id: 4, category: 'Kitchen', url: '/assets/Kitchen/img_.jpg', title: 'Compact Indian Kitchen Space Planning' },
  { id: 5, category: 'Kitchen', url: '/assets/Kitchen/img136.jpg', title: 'Modern Indian Modular Kitchen' },

  // ===== BEDROOM =====
  { id: 6, category: 'Bedroom', url: '/assets/Bedroom/img98.jpg', title: 'Luxury Indian Master Bedroom Interior' },
  { id: 7, category: 'Bedroom', url: '/assets/Bedroom/img101.jpg', title: 'Small Flat Bedroom Design Concept' },
  { id: 8, category: 'Bedroom', url: '/assets/Bedroom/img104.jpg', title: 'Simple Indian Bedroom Setup' },
  { id: 9, category: 'Bedroom', url: '/assets/Bedroom/img107.jpg', title: 'Family Bedroom Interior Design' },
  { id: 10, category: 'Bedroom', url: '/assets/Bedroom/img110.jpg', title: 'Comfortable Bedroom Furniture Layout' },
  { id: 11, category: 'Bedroom', url: '/assets/Bedroom/img113.jpg', title: 'Budget-Friendly Bedroom Design' },
  { id: 12, category: 'Bedroom', url: '/assets/Bedroom/img116.jpg', title: 'Modern Indian Bedroom Interior' },
  { id: 13, category: 'Bedroom', url: '/assets/Bedroom/img119.jpg', title: 'Apartment Bedroom Interior Styling' },
  { id: 14, category: 'Bedroom', url: '/assets/Bedroom/img125.jpg', title: '2BHK Flat Bedroom Interior' },

  // ===== LIVING ROOM =====
  { id: 15, category: 'Living', url: '/assets/Living/img14.jpg', title: 'Elegant Indian Living Room Design' },
  { id: 16, category: 'Living', url: '/assets/Living/img17.jpg', title: '2BHK Flat Living Area Layout' },
  { id: 17, category: 'Living', url: '/assets/Living/img20.jpg', title: 'Family Living Room Interior Setup' },
  { id: 18, category: 'Living', url: '/assets/Living/image.jpg', title: 'Compact Living Room Interior Design' },
  { id: 19, category: 'Living', url: '/assets/Living/img23.jpg', title: 'Small Living Room Space Optimization' },
  { id: 20, category: 'Living', url: '/assets/Living/img26.jpg', title: 'Indian Sofa and TV Unit Design' },
  { id: 21, category: 'Living', url: '/assets/Living/img59.jpg', title: 'Modern Flat Living Room Interior' },
  { id: 22, category: 'Living', url: '/assets/Living/img62.jpg', title: 'Middle-Class Living Room Setup' },
  { id: 23, category: 'Living', url: '/assets/Living/img65.jpg', title: 'Indian Family Hall Interior Design' },
  { id: 24, category: 'Living', url: '/assets/Living/img68.jpg', title: 'Compact Hall Interior Planning' },

  // ===== 3D ELEVATION DESIGN =====
  { id: 25, category: 'Elevation Design', url: '/assets/3D Elevation Design/img71.jpg', title: 'Indian Apartment 3D Elevation View' },
  { id: 26, category: 'Elevation Design', url: '/assets/3D Elevation Design/img74.jpg', title: '2BHK Flat 3D Exterior Visualization' },
  { id: 27, category: 'Elevation Design', url: '/assets/3D Elevation Design/img77.jpg', title: 'Middle-Class Apartment Elevation' },
  { id: 28, category: 'Elevation Design', url: '/assets/3D Elevation Design/img244.jpg', title: 'Urban Indian Flat Elevation Design' },
  { id: 29, category: 'Elevation Design', url: '/assets/3D Elevation Design/img247.jpg', title: 'Budget Apartment Exterior Design' },
  { id: 30, category: 'Elevation Design', url: '/assets/3D Elevation Design/img250.jpg', title: 'Modern Apartment Elevation Concept' },
  { id: 31, category: 'Elevation Design', url: '/assets/3D Elevation Design/img253.jpg', title: 'Affordable Flat Elevation Design' },

  // ===== BATHROOM =====
  { id: 32, category: 'Bathroom', url: '/assets/Bathroom/img197.jpg', title: 'Modern Indian Bathroom Interior' },
  { id: 33, category: 'Bathroom', url: '/assets/Bathroom/img200.jpg', title: 'Small Flat Bathroom Design' },
  { id: 34, category: 'Bathroom', url: '/assets/Bathroom/img203.jpg', title: 'Simple Indian Bathroom Setup' },
  { id: 35, category: 'Bathroom', url: '/assets/Bathroom/img206.jpg', title: 'Family Bathroom Interior Design' },
  { id: 36, category: 'Bathroom', url: '/assets/Bathroom/img209.jpg', title: 'Modern Bathroom Space Planning' },
  { id: 37, category: 'Bathroom', url: '/assets/Bathroom/img212.jpg', title: 'Budget-Friendly Bathroom Design' },

  // ===== BALCONY =====
  { id: 38, category: 'Balcony', url: '/assets/Balcony/img424.jpg', title: 'Indian Flat Balcony Design' },
  { id: 39, category: 'Balcony', url: '/assets/Balcony/img440.jpg', title: 'Small Apartment Balcony Setup' },
  { id: 40, category: 'Balcony', url: '/assets/Balcony/img456.jpg', title: 'Green Balcony Garden Design' },
  { id: 41, category: 'Balcony', url: '/assets/Balcony/img472.jpg', title: 'Urban Home Balcony Interior' },
  { id: 42, category: 'Balcony', url: '/assets/Balcony/img488.jpg', title: 'Relaxing Balcony Seating Space' },

  // ===== ADDITIONAL BEDROOM =====
  { id: 43, category: 'Bedroom', url: '/assets/Bedroom/new1.jpg', title: 'Contemporary Master Bedroom Design' },
  { id: 44, category: 'Bedroom', url: '/assets/Bedroom/new2.jpg', title: 'Minimal Bedroom Interior for Flats' },
  { id: 45, category: 'Bedroom', url: '/assets/Bedroom/new3.jpg', title: 'Modern Indian Bedroom Styling' },

  // ===== ADDITIONAL LIVING =====
  { id: 46, category: 'Living', url: '/assets/Living/new.jpg', title: 'Premium Family Living Room Interior' },

  // ===== AXONOMETRIC VIEW =====
  { id: 47, category: 'Axonometric View', url: '/assets/axonometric view/img32.jpg', title: 'Axonometric Flat Interior View' },
  { id: 48, category: 'Axonometric View', url: '/assets/axonometric view/img35.jpg', title: 'Axonometric Apartment Layout' },
  { id: 49, category: 'Axonometric View', url: '/assets/axonometric view/img41.jpg', title: 'Axonometric Living Space Design' },
  { id: 50, category: 'Axonometric View', url: '/assets/axonometric view/img44.jpg', title: 'Axonometric Home Planning View' },
  { id: 51, category: 'Axonometric View', url: '/assets/axonometric view/img47.jpg', title: 'Detailed Axonometric Interior View' },
  { id: 52, category: 'Axonometric View', url: '/assets/axonometric view/img50.jpg', title: 'Complete Axonometric Flat Design' },
  { id: 53, category: 'Axonometric View', url: '/assets/axonometric view/new_1.jpeg', title: 'Modern Axonometric Interior Layout' },
  { id: 54, category: 'Axonometric View', url: '/assets/axonometric view/new_2.jpeg', title: 'Detailed Axonometric Room Design' },
  { id: 55, category: 'Axonometric View', url: '/assets/axonometric view/new_3.jpeg', title: 'Axonometric Living Room Design' },
  { id: 56, category: 'Axonometric View', url: '/assets/axonometric view/new_4.jpeg', title: 'Axonometric Bathroom Layout' },
  { id: 57, category: 'Axonometric View', url: '/assets/axonometric view/new_5.jpeg', title: 'Axonometric Space Visualization' },

  // ===== OFFICE =====
  { id: 58, category: 'Office', url: '/assets/Office/img271.jpg', title: 'Startup Office Interior Design' },
  { id: 59, category: 'Office', url: '/assets/Office/img274.jpg', title: 'Office Meeting Room Design' },
  { id: 60, category: 'Office', url: '/assets/Office/img277.jpg', title: 'Corporate Office Interior Styling' },
  { id: 61, category: 'Office', url: '/assets/Office/img280.jpg', title: 'IT Office Workspace Design' },
  { id: 62, category: 'Office', url: '/assets/Office/new_1.jpeg', title: 'Open Office Layout Planning' },
  { id: 63, category: 'Office', url: '/assets/Office/new_2.jpeg', title: 'Modern Indian Office Interior' },
  { id: 64, category: 'Office', url: '/assets/Office/new_3.jpeg', title: 'Small Office Workspace Design' },
  { id: 65, category: 'Office', url: '/assets/Office/new_4.jpeg', title: 'Startup Office Space Planning' },
  { id: 66, category: 'Office', url: '/assets/Office/new_5.jpeg', title: 'Professional Meeting Room Design' },

  // ===== CONTINUED FROM ID 67 =====

{ id: 67, category: 'Bathroom', url: '/assets/Bathroom/new_2.jpeg', title: 'Minimal Indian Bathroom Interior' },
{ id: 68, category: 'Bathroom', url: '/assets/Bathroom/new_3.jpeg', title: 'Modern Compact Bathroom Design' },
{ id: 69, category: 'Living', url: '/assets/Living/img62.jpg', title: 'Luxury Living with Balcony View' },
{ id: 70, category: 'Living', url: '/assets/Living/img120.jpg', title: 'Elegant Living Design' },
{ id: 71, category: 'Bedroom', url: '/assets/Bedroom/new_3.jpeg', title: 'Premium Indian Master Bedroom' },
{ id: 72, category: 'Bedroom', url: '/assets/Bedroom/new_4.jpeg', title: 'Modern Apartment Bedroom Interior' },

// ===== 3D ELEVATION DESIGN =====
{ id: 73, category: 'Elevation Design', url: '/assets/3D Elevation Design/img53.jpg', title: 'Contemporary Home Elevation Design' },
{ id: 74, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_1.jpeg', title: 'Luxury Flat Exterior Visualization' },
{ id: 75, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_2.jpeg', title: 'Modern Indian Apartment Elevation' },
{ id: 76, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_3.jpeg', title: 'Urban Residential Elevation Design' },
{ id: 77, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_4.jpeg', title: 'Premium Flat Front Elevation' },
{ id: 78, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_5.jpeg', title: 'Stylish Apartment Elevation Concept' },
{ id: 79, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_6.jpeg', title: 'Modern City Flat Elevation Design' },
{ id: 80, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_7.jpeg', title: 'Luxury Residential Elevation View' },
{ id: 81, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_8.jpeg', title: 'High-End Apartment Elevation' },
{ id: 82, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_9.jpeg', title: 'Elegant Flat Elevation Rendering' },
{ id: 83, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_10.jpeg', title: 'Contemporary Apartment Architecture' },
{ id: 84, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_11.jpeg', title: 'Modern Residential Building Design' },
{ id: 85, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_12.jpeg', title: 'Indian Apartment Exterior Design' },
{ id: 86, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_13.jpeg', title: 'Premium Flat Architecture Design' },
{ id: 87, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_14.jpeg', title: 'Urban Housing Elevation Concept' },
{ id: 88, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_15.jpeg', title: 'Luxury Flat Exterior Perspective' },
{ id: 89, category: 'Elevation Design', url: '/assets/3D Elevation Design/new_17.jpeg', title: 'Modern Indian Elevation Visualization' },

// ===== KITCHEN =====
{ id: 90, category: 'Kitchen', url: '/assets/Kitchen/img292.jpg', title: 'Premium Modular Kitchen Interior' },
{ id: 91, category: 'Kitchen', url: '/assets/Kitchen/img292.jpg', title: 'Modern Indian Modular Kitchen' },
{ id: 92, category: 'Kitchen', url: '/assets/Kitchen/img292.jpg', title: 'Compact Apartment Kitchen Design' },
{ id: 93, category: 'Kitchen', url: '/assets/Kitchen/new_1.jpeg', title: 'Budget-Friendly Indian Kitchen' },
{ id: 94, category: 'Kitchen', url: '/assets/Kitchen/new_2.jpeg', title: 'Smart Space-Saving Kitchen Design' },
{ id: 95, category: 'Kitchen', url: '/assets/Kitchen/new_3.jpeg', title: 'Luxury Modern Kitchen Interior' },
{ id: 96, category: 'Kitchen', url: '/assets/Kitchen/new_4.jpeg', title: 'Stylish Apartment Kitchen Setup' },
{ id: 97, category: 'Kitchen', url: '/assets/Kitchen/new_5.jpeg', title: 'Elegant Indian Kitchen Concept' },
{ id: 98, category: 'Kitchen', url: '/assets/Kitchen/new_6.jpeg', title: 'Contemporary Kitchen Design India' },
{ id: 99, category: 'Kitchen', url: '/assets/Kitchen/new_7.jpeg', title: 'Premium Home Kitchen Interior' },

// ===== LIVING ROOM =====
{ id: 100, category: 'Living', url: '/assets/Living/new_1.jpeg', title: 'Luxury Indian Living Room Interior' },
{ id: 101, category: 'Living', url: '/assets/Living/new_2.jpeg', title: 'Modern 2BHK Living Room Design' },
{ id: 102, category: 'Living', url: '/assets/Living/new_3.jpeg', title: 'Elegant Family Living Space' },
{ id: 103, category: 'Living', url: '/assets/Living/new_4.jpeg', title: 'Compact & Stylish Living Area' },
{ id: 104, category: 'Living', url: '/assets/Living/new_5.jpeg', title: 'Minimalist Living Room Interior' },
{ id: 105, category: 'Living', url: '/assets/Living/new_6.jpeg', title: 'Premium Sofa & TV Unit Design' },

// ===== OFFICE =====
{ id: 106, category: 'Office', url: '/assets/Office/img271.jpg', title: 'Modern Startup Office Interior' },
{ id: 107, category: 'Office', url: '/assets/Office/img274.jpg', title: 'Professional Office Meeting Room' },
{ id: 108, category: 'Office', url: '/assets/Office/img277.jpg', title: 'Corporate Office Interior Design' },
{ id: 109, category: 'Office', url: '/assets/Office/img280.jpg', title: 'IT Office Workspace Design' },
{ id: 110, category: 'Office', url: '/assets/Office/new_1.jpeg', title: 'Open Workspace Office Design' },
{ id: 111, category: 'Office', url: '/assets/Office/new_2.jpeg', title: 'Modern Indian Office Interior' },
{ id: 112, category: 'Office', url: '/assets/Office/new_3.jpeg', title: 'Compact Office Workspace Design' },
{ id: 113, category: 'Office', url: '/assets/Office/new_4.jpeg', title: 'Startup Office Interior Concept' },
{ id: 114, category: 'Office', url: '/assets/Office/new_5.jpeg', title: 'Executive Office Meeting Space' },
{ id: 115, category: 'Office', url: '/assets/Office/new_5.jpeg', title: 'Premium Corporate Office Interior' },

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

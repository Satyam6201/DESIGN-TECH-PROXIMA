import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sample Data - In real use, you can name your images in /public/gallery/
const allImages = [
//  { id: 1, category: 'Kitchen', url: 'https://images.unsplash.com/photo-1556911223-e1520288c02b', title: 'Indian Modular Kitchen' },
//   { id: 2, category: 'Kitchen', url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d', title: 'Compact Home Kitchen' },
//   { id: 3, category: 'Kitchen', url: 'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8', title: 'Simple Indian Kitchen' },
//   { id: 4, category: 'Kitchen', url: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1', title: 'Flat Kitchen Interior' },
//   { id: 5, category: 'Kitchen', url: 'https://images.unsplash.com/photo-1556909114-44e3e9399a5c', title: 'Middle Class Kitchen' },

  // ================= BEDROOM =================
  { id: 6, category: 'Bedroom', url: '/assets/Bedroom/img98.jpg', title: 'Indian Bedroom Setup' },
  { id: 7, category: 'Bedroom', url: '/assets/Bedroom/img101.jpg', title: 'Small Flat Bedroom' },
  { id: 8, category: 'Bedroom', url: '/assets/Bedroom/img104.jpg', title: 'Simple Bedroom Interior' },
  { id: 9, category: 'Bedroom', url: '/assets/Bedroom/img107.jpg', title: 'Indian Family Bedroom' },
  { id: 10, category: 'Bedroom', url: '/assets/Bedroom/img110.jpg', title: 'Comfort Bedroom' },
  { id: 10, category: 'Bedroom', url: '/assets/Bedroom/img113.jpg', title: 'Comfort Bedroom' },
  { id: 10, category: 'Bedroom', url: '/assets/Bedroom/img116.jpg', title: 'Comfort Bedroom' },
  { id: 10, category: 'Bedroom', url: '/assets/Bedroom/img119.jpg', title: 'Comfort Bedroom' },
  { id: 10, category: 'Bedroom', url: '/assets/Bedroom/img125.jpg', title: 'Comfort Bedroom' },

  // // ================= LIVING AREA =================
  // { id: 11, category: 'Living', url: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92', title: 'Indian Living Room' },
  // { id: 12, category: 'Living', url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c', title: 'Flat Living Area' },
  // { id: 13, category: 'Living', url: 'https://images.unsplash.com/photo-1618220179428-22790b461013', title: 'Family Living Room' },
  // { id: 14, category: 'Living', url: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed', title: 'Small Living Room' },
  // { id: 15, category: 'Living', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6', title: 'Indian Sofa Setup' },

  // // ================= OFFICE =================
  // { id: 16, category: 'Office', url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36', title: 'Indian Office Interior' },
  // { id: 17, category: 'Office', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c', title: 'Small Office Workspace' },
  // { id: 18, category: 'Office', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d', title: 'Startup Office India' },
  // { id: 20, category: 'Office', url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf', title: 'Office Meeting Room' },

  // // ================= FLAT =================
  // { id: 21, category: 'Flat', url: 'https://images.unsplash.com/photo-1600585154084-4e5cfa1d68f5', title: 'Indian Apartment Flat' },
  // { id: 22, category: 'Flat', url: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1', title: '2BHK Flat Interior' },
  // { id: 23, category: 'Flat', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c', title: 'Middle Class Flat' },
  // { id: 24, category: 'Flat', url: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc', title: 'Urban Indian Flat' },
  // { id: 25, category: 'Flat', url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea', title: 'Budget Flat Interior' },

  // // ================= BUILDING =================
  // { id: 26, category: 'Building', url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c', title: 'Indian Apartment Building' },
  // { id: 27, category: 'Building', url: 'https://images.unsplash.com/photo-1486304873000-235643847519', title: 'Residential Building India' },
  // { id: 28, category: 'Building', url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be', title: 'Urban Housing Society' },
  // { id: 29, category: 'Building', url: 'https://images.unsplash.com/photo-1599423300746-b62533397364', title: 'City Apartment Block' },
  // { id: 30, category: 'Building', url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994', title: 'Indian Housing Complex' },

  // // ================= KITCHEN =================
  // { id: 31, category: 'Kitchen', url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2', title: 'Indian Modular Kitchen Small' },
  // { id: 32, category: 'Kitchen', url: 'https://images.unsplash.com/photo-1556909172-6ab63f18fd12', title: 'Middle Class Home Kitchen' },
  // { id: 33, category: 'Kitchen', url: 'https://images.unsplash.com/photo-1600585153490-76fb20a32601', title: 'Flat Kitchen Interior' },
  // { id: 34, category: 'Kitchen', url: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d', title: 'Simple Indian Kitchen Design' },
  // { id: 35, category: 'Kitchen', url: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4', title: 'Budget Kitchen Setup' },

  // // ================= BEDROOM =================
  // { id: 36, category: 'Bedroom', url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea', title: 'Indian Bedroom Interior' },
  // { id: 37, category: 'Bedroom', url: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87', title: 'Small Flat Bedroom India' },
  // { id: 38, category: 'Bedroom', url: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed', title: 'Simple Bedroom Setup' },
  // { id: 39, category: 'Bedroom', url: 'https://images.unsplash.com/photo-1615529182904-14819c35db37', title: 'Family Bedroom Indian Style' },
  // { id: 40, category: 'Bedroom', url: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1', title: 'Apartment Bedroom Interior' },

  // // ================= LIVING AREA =================
  // { id: 41, category: 'Living', url: 'https://images.unsplash.com/photo-1618219740975-d40978bb7378', title: 'Indian Living Room Setup' },
  // { id: 42, category: 'Living', url: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467', title: 'Middle Class Living Area' },
  // { id: 43, category: 'Living', url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c', title: 'Flat Living Room India' },
  // { id: 44, category: 'Living', url: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45', title: 'Simple Sofa Living Room' },
  // { id: 45, category: 'Living', url: 'https://images.unsplash.com/photo-1615873968403-89e068629265', title: 'Indian Family Hall' },

  // // ================= OFFICE =================
  // { id: 46, category: 'Office', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c', title: 'Indian Office Interior' },
  // { id: 47, category: 'Office', url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36', title: 'Small Office India' },
  // { id: 48, category: 'Office', url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf', title: 'Startup Office Interior' },
  // { id: 50, category: 'Office', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d', title: 'Office Workspace Setup' },

  // // ================= FLAT =================
  // { id: 51, category: 'Flat', url: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc', title: 'Indian 2BHK Flat' },
  // { id: 52, category: 'Flat', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c', title: 'Middle Class Apartment' },
  // { id: 53, category: 'Flat', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', title: 'Urban Indian Flat Interior' },
  // { id: 54, category: 'Flat', url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b', title: 'Budget Flat Design' },
  // { id: 55, category: 'Flat', url: 'https://images.unsplash.com/photo-1600585154084-4e5cfa1d68f5', title: 'Apartment Interior India' },

  // // ================= BUILDING =================
  // { id: 56, category: 'Building', url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be', title: 'Indian Apartment Building' },
  // { id: 57, category: 'Building', url: 'https://images.unsplash.com/photo-1486304873000-235643847519', title: 'Residential Building India' },
  // { id: 58, category: 'Building', url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994', title: 'Housing Society India' },
  // { id: 59, category: 'Building', url: 'https://images.unsplash.com/photo-1599423300746-b62533397364', title: 'City Apartment Block' },
  // { id: 60, category: 'Building', url: 'https://images.unsplash.com/photo-1501183638710-841dd1904471', title: 'Indian Residential Complex' }

];

const categories = ['All', 'Bedroom', 'Kitchen', 'Living', 'Flat', 'Building', 'Office'];

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' 
    ? allImages 
    : allImages.filter(img => img.category === filter);

  return (
    <section className="py-20 px-4 min-h-screen bg-white dark:bg-black">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all
              ${filter === cat ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 dark:bg-zinc-900 opacity-60'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 max-w-[1600px] mx-auto">
        <AnimatePresence>
          {filteredImages.map((img) => (
            <motion.div
              layout
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative group overflow-hidden rounded-[2rem] bg-gray-200"
            >
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2">{img.category}</p>
                <h4 className="text-xl font-bold">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Gallery;
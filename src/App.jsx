import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  // Smooth Scroll and Theme logic
  useEffect(() => {
    // Add dark mode by default for premium architectural look
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      {/* 1. Minimalist Navbar */}
      <Navbar />

      {/* 2. Hero Branding Section */}
      <section className="pt-40 pb-20 px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[12vw] font-black tracking-tighter leading-[0.8] mb-8 mix-blend-difference text-white">
            DESIGN <br/> <span className="text-blue-600 italic">STUDIO</span>
          </h1>
          <p className="text-sm font-black uppercase tracking-[0.5em] opacity-40">
            Motihari • India • Premium 3D Visualization
          </p>
        </div>
      </section>

      {/* 3. Main Image Gallery (100+ Images with Filtering) */}
      <main id="gallery">
        <Gallery />
      </main>

      {/* 4. Contact Footer */}
      <Contact />

      {/* 5. Simple Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform"
      >
        ↑
      </button>
    </div>
  );
}

export default App;
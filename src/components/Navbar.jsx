const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 px-10 py-6 flex justify-between items-center mix-blend-difference text-white">
    <h1 className="text-2xl font-black tracking-tighter">DESIGN TECH.</h1>
    <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
      <a href="#gallery" className="hover:opacity-50">Work</a>
      <a href="#contact" className="hover:opacity-50">Contact</a>
    </div>
  </nav>
);
export default Navbar;
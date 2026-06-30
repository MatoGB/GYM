export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-black tracking-widest text-orange-500 uppercase">
          GYM
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider text-gray-300">
          <a href="#servicios" className="hover:text-orange-500 transition-colors">Servicios</a>
          <a href="#precios" className="hover:text-orange-500 transition-colors">Precios</a>
          <a href="#contacto" className="hover:text-orange-500 transition-colors">Contacto</a>
        </div>
        <a
          href="#precios"
          className="bg-orange-500 hover:bg-orange-400 text-black font-bold px-5 py-2 text-sm uppercase tracking-wider transition-colors rounded"
        >
          Únete
        </a>
      </div>
    </nav>
  );
}

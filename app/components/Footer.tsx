export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-2xl font-black tracking-widest text-orange-500 uppercase">GYM</span>
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} GYM. Todos los derechos reservados.
        </p>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#servicios" className="hover:text-orange-500 transition-colors">Servicios</a>
          <a href="#precios" className="hover:text-orange-500 transition-colors">Precios</a>
          <a href="#contacto" className="hover:text-orange-500 transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
}

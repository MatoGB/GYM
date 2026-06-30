export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-black to-black" />

      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-full h-px bg-orange-500" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-orange-500" />
        <div className="absolute top-0 left-1/4 h-full w-px bg-orange-500" />
        <div className="absolute top-0 right-1/4 h-full w-px bg-orange-500" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-orange-500 uppercase tracking-[0.3em] text-sm font-bold mb-6">
          No hay excusas
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none text-white mb-6">
          Forjá tu
          <br />
          <span className="text-orange-500">mejor</span>
          <br />
          versión
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Entrenamiento de élite, equipamiento de última generación y
          entrenadores que te llevan al límite. El cambio empieza hoy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#precios"
            className="bg-orange-500 hover:bg-orange-400 text-black font-black px-10 py-4 text-lg uppercase tracking-wider transition-all hover:scale-105 rounded"
          >
            Empezá ahora
          </a>
          <a
            href="#servicios"
            className="border-2 border-white/30 hover:border-orange-500 text-white font-bold px-10 py-4 text-lg uppercase tracking-wider transition-all hover:text-orange-500 rounded"
          >
            Ver servicios
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
          {[
            { value: "500+", label: "Miembros activos" },
            { value: "20+", label: "Entrenadores" },
            { value: "10", label: "Años de experiencia" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-orange-500">{stat.value}</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
}

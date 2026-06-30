"use client";

export default function Contacto() {
  return (
    <section id="contacto" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div>
            <p className="text-orange-500 uppercase tracking-[0.3em] text-sm font-bold mb-4">
              Hablemos
            </p>
            <h2 className="text-5xl md:text-6xl font-black uppercase text-white mb-8">
              Contacto
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              ¿Tenés dudas sobre qué plan elegir o querés conocer las
              instalaciones? Escribinos y un asesor te contacta en menos de 24
              horas.
            </p>

            <div className="space-y-6">
              {[
                { icon: "📍", label: "Dirección", value: "Av. Corrientes 1234, Buenos Aires" },
                { icon: "📞", label: "Teléfono", value: "+54 11 4567-8900" },
                { icon: "✉️", label: "Email", value: "info@gym.com.ar" },
                { icon: "🕐", label: "Horarios", value: "Lun–Vie 6:00–23:00 · Sáb–Dom 8:00–20:00" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-1">
                      {item.label}
                    </div>
                    <div className="text-gray-300">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 border border-white/10 rounded p-8">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full bg-black border border-white/10 focus:border-orange-500 rounded px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full bg-black border border-white/10 focus:border-orange-500 rounded px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  placeholder="+54 11 ..."
                  className="w-full bg-black border border-white/10 focus:border-orange-500 rounded px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full bg-black border border-white/10 focus:border-orange-500 rounded px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-400 text-black font-black uppercase tracking-wider py-4 rounded transition-all hover:scale-[1.02] active:scale-100"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

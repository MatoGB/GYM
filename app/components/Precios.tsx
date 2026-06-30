const planes = [
  {
    nombre: "Básico",
    precio: "$8.990",
    periodo: "/ mes",
    descripcion: "Perfecto para comenzar tu camino fitness.",
    features: [
      "Acceso sala de musculación",
      "2 clases grupales por semana",
      "Vestuarios y duchas",
      "Evaluación inicial",
    ],
    destacado: false,
    cta: "Elegir Básico",
  },
  {
    nombre: "Pro",
    precio: "$14.990",
    periodo: "/ mes",
    descripcion: "El plan más popular entre nuestros miembros.",
    features: [
      "Acceso ilimitado a todas las zonas",
      "Clases grupales ilimitadas",
      "1 sesión mensual con coach",
      "App de seguimiento de progreso",
      "Acceso de 6am a 11pm",
    ],
    destacado: true,
    cta: "Elegir Pro",
  },
  {
    nombre: "Elite",
    precio: "$24.990",
    periodo: "/ mes",
    descripcion: "Para quienes van en serio con sus metas.",
    features: [
      "Todo lo del plan Pro",
      "4 sesiones mensuales con coach personal",
      "Plan de nutrición personalizado",
      "Acceso 24/7",
      "Zona VIP exclusiva",
      "Análisis de composición corporal mensual",
    ],
    destacado: false,
    cta: "Elegir Elite",
  },
];

export default function Precios() {
  return (
    <section id="precios" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-orange-500 uppercase tracking-[0.3em] text-sm font-bold mb-4">
            Sin letra chica
          </p>
          <h2 className="text-5xl md:text-6xl font-black uppercase text-white">
            Planes &amp; <span className="text-orange-500">precios</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {planes.map((plan) => (
            <div
              key={plan.nombre}
              className={`relative flex flex-col p-8 rounded border transition-all duration-300 ${
                plan.destacado
                  ? "bg-orange-500 border-orange-500 text-black scale-105 shadow-2xl shadow-orange-500/30"
                  : "bg-white/5 border-white/10 hover:border-orange-500/40 text-white"
              }`}
            >
              {plan.destacado && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-orange-500 text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full border border-orange-500">
                  Más popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-sm font-black uppercase tracking-widest mb-2 ${
                    plan.destacado ? "text-black/70" : "text-orange-500"
                  }`}
                >
                  {plan.nombre}
                </h3>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black">{plan.precio}</span>
                  <span className={`text-sm mb-1 ${plan.destacado ? "text-black/60" : "text-gray-500"}`}>
                    {plan.periodo}
                  </span>
                </div>
                <p className={`text-sm mt-2 ${plan.destacado ? "text-black/70" : "text-gray-400"}`}>
                  {plan.descripcion}
                </p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className={plan.destacado ? "text-black" : "text-orange-500"}>✓</span>
                    <span className={plan.destacado ? "text-black/80" : "text-gray-300"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block text-center font-black uppercase tracking-wider py-3 px-6 rounded transition-all ${
                  plan.destacado
                    ? "bg-black text-orange-500 hover:bg-zinc-900"
                    : "bg-orange-500 text-black hover:bg-orange-400"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

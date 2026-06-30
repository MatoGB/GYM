const servicios = [
  {
    icon: "💪",
    title: "Musculación",
    description:
      "Zona de pesas con equipamiento de última generación. Más de 200 máquinas y pesos libres para todos los niveles.",
  },
  {
    icon: "🔥",
    title: "CrossFit",
    description:
      "Clases de alta intensidad que combinan fuerza, resistencia y agilidad. Resultados reales en tiempo récord.",
  },
  {
    icon: "🥊",
    title: "Box / MMA",
    description:
      "Entrená con ex-competidores profesionales. Boxeo, muay thai y artes marciales mixtas para todos los niveles.",
  },
  {
    icon: "🧘",
    title: "Yoga & Stretching",
    description:
      "Recuperá tu cuerpo y mejorar la flexibilidad con instructores certificados. Sesiones diarias de movilidad.",
  },
  {
    icon: "🏃",
    title: "Cardio & HIIT",
    description:
      "Zona de cardio con cintas, bikes y elípticas de última generación. Clases grupales de HIIT todos los días.",
  },
  {
    icon: "🏋️",
    title: "Entrenamiento Personal",
    description:
      "Plan 100% personalizado con tu propio coach. Seguimiento semanal de tu progreso y ajuste de rutinas.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-orange-500 uppercase tracking-[0.3em] text-sm font-bold mb-4">
            Lo que ofrecemos
          </p>
          <h2 className="text-5xl md:text-6xl font-black uppercase text-white">
            Nuestros
            <br />
            <span className="text-orange-500">servicios</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s) => (
            <div
              key={s.title}
              className="group border border-white/10 hover:border-orange-500/50 bg-white/5 hover:bg-orange-500/5 p-8 transition-all duration-300 rounded"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-black uppercase text-white mb-3 group-hover:text-orange-500 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

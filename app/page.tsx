import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Precios from "./components/Precios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Servicios />
      <Precios />
      <Contacto />
      <Footer />
    </main>
  );
}

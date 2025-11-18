import Navbar from "../Components/LP/Navbar";
import Hero from "../Components/LP/Hero";
import About from "../Components/LP/About";
import Proyectos from "../Components/LP/Proyectos"
import Footer from "../Components/LP/Footer";
import "../style/Lading.css"

function Lading() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="info-section">
        <About />
        <Proyectos />
      </section>

      <Footer />
    </div>
  );
}

export default Lading;
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <Navbar />

      <main>

        {/* Home */}
        <section id="home">
          <Hero />
        </section>

        {/* About */}
        <section id="about">
          <About />
        </section>

        {/* Services */}
        <section id="services">
          <Services />
        </section>

        {/* Gallery */}
        <section id="gallery">
          <Gallery />
        </section>

        {/* Contact */}
        <section id="contact">
          <Contact />
        </section>

      </main>

    </div>
  );
}

export default App;
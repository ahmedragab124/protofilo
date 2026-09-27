import Navbar from "../layouts/Navbar";
import Hero from "../layouts/Hero";
import Aboutme from "../layouts/Aboutme";
import TechStack from "../components/skills/TechStack";
import Projects from "../layouts/Projects";
import Services from "../layouts/Services";
import Experience from "../layouts/Experience";
import Contact from "../layouts/Contact";
import Footer from "../layouts/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

function Landingpage() {
  return (
    <div className="portfolio-shell">
      <Navbar />
      <Hero />
      <Aboutme />
      <TechStack />
      <Projects />
      <Services />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Landingpage;

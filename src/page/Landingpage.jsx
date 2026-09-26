import Navbar from "../layout/Navbar";
import Hero from "../layout/Hero";
import Aboutme from "../layout/Aboutme";
import TechStack from "../componant/skills/TechStack";
import Projects from "../layout/Projects";
import Services from "../layout/Services";
import Experience from "../layout/Experience";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";
import ScrollToTop from "../componant/common/ScrollToTop";

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

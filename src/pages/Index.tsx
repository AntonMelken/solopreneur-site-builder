import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    {/* Skip-Navigation für Tastaturnutzer (BFSG) */}
    <a href="#main-content" className="skip-link">
      Zum Hauptinhalt springen
    </a>
    <Navbar />
    <main id="main-content">
      <Hero />
      <AboutMe />
      <Skills />
      <Resume />
      <BlogPreview />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;

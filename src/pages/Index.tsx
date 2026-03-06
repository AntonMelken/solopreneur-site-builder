import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Resume />
      <BlogPreview />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;

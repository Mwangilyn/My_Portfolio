import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import ContactChat from "@/components/ContactChat";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Tools />
      <Projects />
      <Experience />
      <Certifications />
      <Footer />
      <ContactChat />
    </main>
  );
};

export default Index;
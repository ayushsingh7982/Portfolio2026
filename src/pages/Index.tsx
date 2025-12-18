import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import BackToTop from "@/components/BackToTop";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          <section id="hero">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="skills">
            <Skills />
          </section>
          
          <section id="experience">
            <Experience />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <Testimonials />
          
          <section id="contact">
            <Contact />
          </section>
        </main>
        
        {/* Footer */}
        <footer className="py-8 border-t border-glass-border">
          <div className="container mx-auto px-6">
            <div className="text-center text-foreground-secondary">
              <p className="mb-2">
                © 2024 Ayush Singh. Built with React, TypeScript & Tailwind CSS
              </p>
              <p className="text-sm">
                Designed in Delhi-IN, deployed to the world 🌍
              </p>
            </div>
          </div>
        </footer>
        
        <ThemeToggle />
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
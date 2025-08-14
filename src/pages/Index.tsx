import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
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
    </div>
  );
};

export default Index;
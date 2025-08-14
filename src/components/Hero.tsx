import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 6,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="particle-bg">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const GlitchText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={`glitch ${className}`} data-text={text}>
      {text}
    </span>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center space-y-8 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-lg md:text-xl text-foreground-secondary font-jetbrains animate-fade-up">
              Hey there, I'm Ayush
            </p>
            <h1 className="heading-xl gradient-text">
              <GlitchText text="Ayush Singh" />
            </h1>
          </div>

          {/* Tagline */}
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              I turn <span className="neon-cyan">caffeine</span> into clean, stunning{" "}
              <span className="gradient-text-secondary">code</span>
            </h2>
            <p className="body-lg text-foreground-secondary max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.6s' }}>
              Full Stack Developer crafting premium digital experiences with React, TypeScript, 
              and modern web technologies. I build interfaces that users love and developers admire.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.9s' }}>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToProjects}
              className="group"
            >
              View My Work
              <ArrowDown className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button variant="ghost-neon" size="xl">
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-up" style={{ animationDelay: '1.2s' }}>
            <a 
              href="https://github.com/ayushsingh7982" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground-secondary hover:text-neon-cyan transition-all duration-300 hover:scale-110 hover-glow"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ayushsingh7982/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground-secondary hover:text-neon-purple transition-all duration-300 hover:scale-110 hover-glow"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:singhayush8376@gmail.com"
              className="text-foreground-secondary hover:text-neon-cyan transition-all duration-300 hover:scale-110 hover-glow"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-neon-cyan animate-glow-pulse" />
          </div>
        </div>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, FileText, X, Download, ExternalLink } from "lucide-react";
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

const TypewriterName = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Ayush Singh";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150 + Math.random() * 100); // Realistic typing speed with variation

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      // Name is complete, trigger the "bang" effect
      setTimeout(() => {
        setIsComplete(true);
        setShowCursor(false);
      }, 500);
    }
  }, [currentIndex, fullText.length, isComplete]);

  // Cursor blinking effect
  useEffect(() => {
    if (!isComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);
      return () => clearInterval(cursorInterval);
    }
  }, [isComplete]);

  return (
    <div className="relative">
      {/* Background glow that intensifies when complete */}
      <div className={`absolute inset-0 blur-3xl transition-all duration-1000 ${
        isComplete ? 'opacity-60 scale-110' : 'opacity-20'
      }`}>
        <h1 className="heading-xl gradient-text">
          {displayText}
        </h1>
      </div>
      
      {/* Main text with 3D effect when complete */}
      <h1 className={`relative heading-xl font-space-grotesk font-black tracking-tight transition-all duration-1000 ${
        isComplete 
          ? 'transform-3d scale-110 rotate-x-12 rotate-y-6 drop-shadow-3d animate-bang' 
          : 'transform-none'
      }`}>
        <span className={`gradient-text transition-all duration-500 ${
          isComplete ? 'text-shadow-explosive' : ''
        }`}>
          {displayText}
        </span>
        
        {/* Typing cursor */}
        <span className={`inline-block w-1 bg-neon-cyan ml-1 transition-opacity duration-100 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`} style={{ height: '0.8em' }}>
          |
        </span>
      </h1>
      
      {/* Explosion particles when complete */}
      {isComplete && (
        <>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-neon-cyan rounded-full animate-explode-${i % 4}`}
              style={{
                top: '50%',
                left: '50%',
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`purple-${i}`}
              className={`absolute w-1.5 h-1.5 bg-neon-purple rounded-full animate-explode-${i % 4}`}
              style={{
                top: '50%',
                left: '50%',
                animationDelay: `${i * 0.15 + 0.2}s`,
              }}
            />
          ))}
        </>
      )}
      
      {/* 3D decorative elements that appear when complete */}
      {isComplete && (
        <>
          <div className="absolute -top-8 -left-8 w-12 h-12 border-l-4 border-t-4 border-neon-cyan opacity-80 animate-slide-in-tl transform-3d rotate-x-45" 
               style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute -bottom-8 -right-8 w-12 h-12 border-r-4 border-b-4 border-neon-purple opacity-80 animate-slide-in-br transform-3d rotate-x-45" 
               style={{ animationDelay: '0.7s' }}></div>
        </>
      )}
    </div>
  );
};

const ResumeModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const resumeUrl = "https://drive.google.com/file/d/1WxWSB-0yIb8cKAkSz1as0kav6JY-jH0K/view";
  const resumeEmbedUrl = "https://drive.google.com/file/d/1WxWSB-0yIb8cKAkSz1as0kav6JY-jH0K/preview";
  const resumeDownloadUrl = "https://drive.google.com/uc?export=download&id=1WxWSB-0yIb8cKAkSz1as0kav6JY-jH0K";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-up"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-6xl h-full max-h-[90vh] mx-4 glass-elevated rounded-2xl overflow-hidden animate-fade-up">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-glass-border">
          <div className="flex items-center space-x-3">
            <FileText className="w-6 h-6 text-neon-cyan" />
            <h2 className="text-xl sm:text-2xl font-bold gradient-text">Resume</h2>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(resumeDownloadUrl, '_blank')}
              className="text-foreground-secondary hover:text-neon-cyan transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(resumeUrl, '_blank')}
              className="text-foreground-secondary hover:text-neon-purple transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open in Drive
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-foreground-secondary hover:text-red-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        {/* PDF Viewer */}
        <div className="flex-1 h-full">
          <iframe
            src={resumeEmbedUrl}
            className="w-full h-full min-h-[600px] border-0"
            title="Ayush Singh Resume"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const openResume = () => {
    setIsResumeOpen(true);
  };

  const closeResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <section className="relative !font-serif min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background/95">
      <ParticleBackground />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center space-y-6 sm:space-y-8 lg:space-y-10 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Greeting */}
          <div className="space-y-2 sm:space-y-3">
            <p className="text-base sm:text-lg md:text-xl text-foreground-secondary font-jetbrains animate-fade-up">
              Hey there, I'm
            </p>
            <TypewriterName />
          </div>

          {/* Tagline */}
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 sm:mb-6 animate-fade-up leading-relaxed" 
                style={{ animationDelay: '0.3s' }}>
              I turn <span className="neon-cyan">caffeine</span> into clean, stunning{" "}
              <span className="gradient-text-secondary">code</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto animate-fade-up leading-relaxed px-4" 
               style={{ animationDelay: '0.6s' }}>
              Full Stack Developer crafting premium digital experiences with React, TypeScript, 
              and modern web technologies. I build interfaces that users love and developers admire.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-up px-4" 
               style={{ animationDelay: '0.9s' }}>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToProjects}
              className="group w-full sm:w-auto min-w-[200px] h-12 sm:h-14 text-base sm:text-lg font-medium"
            >
              View My Work
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-y-1" />
            </Button>
            
            <Button 
              variant="ghost-neon" 
              size="xl" 
              onClick={openResume}
              className="group w-full sm:w-auto min-w-[200px] h-12 sm:h-14 text-base sm:text-lg font-medium"
            >
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View Resume
            </Button>
            
            <Button 
              variant="ghost-neon" 
              size="xl" 
              asChild
              className="w-full sm:w-auto min-w-[200px] h-12 sm:h-14 text-base sm:text-lg font-medium"
            >
              <a 
                href="https://www.linkedin.com/in/ayushsingh7982/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                Let's Connect
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 sm:space-x-8 animate-fade-up pt-4 sm:pt-6" 
               style={{ animationDelay: '1.2s' }}>
            <a 
              href="https://github.com/ayushsingh7982" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground-secondary hover:text-neon-cyan transition-all duration-300 hover:scale-110 hover-glow p-2"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ayushsingh7982/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground-secondary hover:text-neon-purple transition-all duration-300 hover:scale-110 hover-glow p-2"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
            <a 
              href="mailto:singhayush8376@gmail.com"
              className="text-foreground-secondary hover:text-neon-cyan transition-all duration-300 hover:scale-110 hover-glow p-2"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-neon-cyan animate-glow-pulse" />
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: '1s' }} />
      
      {/* Additional subtle background elements */}
      <div className="absolute top-1/2 right-1/3 w-24 h-24 sm:w-32 sm:h-32 bg-neon-cyan/5 rounded-full blur-2xl animate-float" 
           style={{ animationDelay: '2s' }} />
      
      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />
    </section>
  );
};

export default Hero;
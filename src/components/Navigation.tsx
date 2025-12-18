import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["hero", "about", "skills", "experience", "projects", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "glass-elevated backdrop-blur-xl border-b border-glass-border" 
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl lg:text-2xl font-bold font-space-grotesk gradient-text hover:scale-105 transition-transform"
            >
              AS
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-neon-cyan ${
                    activeSection === item.id
                      ? "text-neon-cyan"
                      : "text-foreground-secondary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Social Links & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://github.com/ayushsingh7982"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-neon-cyan transition-colors p-2"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ayushsingh7982/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-neon-purple transition-colors p-2"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:singhayush8376@gmail.com"
                className="text-foreground-secondary hover:text-neon-cyan transition-colors p-2"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
              <Button
                variant="neon"
                size="sm"
                onClick={() => scrollToSection("contact")}
                className="ml-4"
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden glass-elevated border-t border-glass-border">
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-2 text-base font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-neon-cyan"
                        : "text-foreground-secondary hover:text-neon-cyan"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex items-center space-x-4 pt-4 border-t border-glass-border">
                  <a
                    href="https://github.com/ayushsingh7982"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-secondary hover:text-neon-cyan transition-colors p-2"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ayushsingh7982/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-secondary hover:text-neon-purple transition-colors p-2"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:singhayush8376@gmail.com"
                    className="text-foreground-secondary hover:text-neon-cyan transition-colors p-2"
                    aria-label="Email Contact"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
                
                <Button
                  variant="neon"
                  size="sm"
                  onClick={() => scrollToSection("contact")}
                  className="w-full mt-4"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-background-secondary">
        <div
          className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-300"
          style={{
            width: `${Math.min(
              100,
              (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            )}%`,
          }}
        />
      </div>
    </>
  );
};

export default Navigation;
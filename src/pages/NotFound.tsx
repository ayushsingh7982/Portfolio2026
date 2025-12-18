import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center space-y-8 max-w-2xl mx-auto px-6 relative z-10">
        {/* 404 Animation */}
        <div className="relative">
          <h1 className="text-8xl md:text-9xl font-bold font-space-grotesk gradient-text animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 blur-xl opacity-30">
            <h1 className="text-8xl md:text-9xl font-bold font-space-grotesk gradient-text">
              404
            </h1>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-foreground-secondary leading-relaxed">
            The page you're looking for seems to have vanished into the digital void. 
            Don't worry, even the best developers get lost sometimes!
          </p>
          <div className="card-glass p-4 max-w-md mx-auto">
            <p className="text-sm text-foreground-secondary">
              <span className="text-neon-cyan">Attempted URL:</span> {location.pathname}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild variant="hero" size="lg" className="group">
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </Button>
          
          <Button 
            variant="ghost-neon" 
            size="lg" 
            onClick={() => window.history.back()}
            className="group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Go Back
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="card-glass p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center justify-center">
            <Search className="w-5 h-5 mr-2 text-neon-cyan" />
            Looking for something specific?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {[
              { label: "About", href: "/#about" },
              { label: "Projects", href: "/#projects" },
              { label: "Skills", href: "/#skills" },
              { label: "Contact", href: "/#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground-secondary hover:text-neon-cyan transition-colors p-2 rounded-lg hover:bg-background-secondary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Fun Message */}
        <div className="text-center">
          <p className="text-sm text-foreground-secondary italic">
            "In the world of code, every 404 is just a new opportunity to explore!" 
            <span className="text-neon-purple ml-2">- Ayush Singh</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

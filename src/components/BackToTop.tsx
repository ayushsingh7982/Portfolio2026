import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      variant="ghost"
      size="sm"
      className="fixed bottom-6 left-6 z-50 glass rounded-full p-3 hover:neon-glow-purple transition-all duration-300 animate-fade-up"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5 text-neon-purple" />
    </Button>
  );
};

export default BackToTop;
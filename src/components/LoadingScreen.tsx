import { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-500 ${
      progress >= 100 ? 'opacity-0' : 'opacity-100'
    }`}>
      <div className="text-center space-y-8">
        {/* Logo Animation */}
        <div className="relative">
          <h1 className="text-6xl md:text-8xl font-bold font-space-grotesk gradient-text animate-pulse">
            AS
          </h1>
          <div className="absolute inset-0 blur-xl opacity-50">
            <h1 className="text-6xl md:text-8xl font-bold font-space-grotesk gradient-text">
              AS
            </h1>
          </div>
        </div>

        {/* Loading Bar */}
        <div className="w-64 mx-auto">
          <div className="flex justify-between text-sm text-foreground-secondary mb-2">
            <span>Loading Portfolio</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-background-tertiary rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <p className="text-foreground-secondary animate-pulse">
            Crafting digital experiences...
          </p>
          <div className="flex justify-center space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
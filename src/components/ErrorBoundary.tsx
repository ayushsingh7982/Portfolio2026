import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Home, AlertTriangle } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-red-500 rounded-full animate-float opacity-20"
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
            {/* Error Icon */}
            <div className="relative">
              <div className="w-24 h-24 mx-auto bg-red-500/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-12 h-12 text-red-500" />
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Oops! Something went wrong
              </h1>
              <p className="text-lg text-foreground-secondary leading-relaxed">
                Don't worry, even the best code has its moments. 
                Let's get you back on track!
              </p>
              
              {process.env.NODE_ENV === "development" && this.state.error && (
                <div className="card-glass p-4 text-left max-w-lg mx-auto">
                  <h3 className="text-sm font-semibold text-red-400 mb-2">
                    Error Details (Development Mode):
                  </h3>
                  <pre className="text-xs text-foreground-secondary overflow-auto">
                    {this.state.error.message}
                  </pre>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={this.handleReload}
                variant="hero" 
                size="lg" 
                className="group"
              >
                <RefreshCw className="w-5 h-5 mr-2 transition-transform group-hover:rotate-180" />
                Try Again
              </Button>
              
              <Button 
                onClick={this.handleGoHome}
                variant="ghost-neon" 
                size="lg" 
                className="group"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </div>

            {/* Contact Info */}
            <div className="card-glass p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Still having issues?
              </h3>
              <p className="text-sm text-foreground-secondary">
                If this error persists, please reach out to me at{" "}
                <a 
                  href="mailto:singhayush8376@gmail.com" 
                  className="text-neon-cyan hover:underline"
                >
                  singhayush8376@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;